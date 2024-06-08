import React, { useState, useEffect } from 'react';

const IconsShowcase = ({ icons, theme, perLine, space }) => {
  const [svgIcons, setSvgIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      const iconBaseUrl = "/icons"; // Your local icon path
      try {
        const fetchedIcons = await Promise.all(
          icons.map(async icon => {
            try {
              let iconPath = `${iconBaseUrl}/${icon}-${theme}.svg`;
              let response = await fetch(iconPath);
              if (!response.ok) {
                // If the requested variant doesn't exist, try the default variant (dark)
                iconPath = `${iconBaseUrl}/${icon}-dark.svg`;
                response = await fetch(iconPath);
                if (!response.ok) {
                  // If the default variant also doesn't exist, try the icon without any theme suffix
                  iconPath = `${iconBaseUrl}/${icon}.svg`;
                  response = await fetch(iconPath);
                  if (!response.ok) {
                    // If the icon without any theme suffix also doesn't exist, return an empty string
                    return '';
                  }
                }
              }
              return response.text();
            } catch (error) {
              console.error(error);
              // Return a placeholder error icon here
              return await fetch('/error.svg').then(response => response.text());
            }
          })
        );
        setSvgIcons(fetchedIcons);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIcons();
  }, [icons, theme]);

  const iconWidth = 50; // Assuming each icon is 50px wide
  const iconHeight = 50; // Assuming each icon is 50px high

  const numRows = Math.ceil(icons.length / perLine);
  const svgWidth = perLine * (iconWidth + space) - space;
  const svgHeight = numRows * (iconHeight + space) - space;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none">
      {svgIcons.map((iconSvg, index) => {
        const row = Math.floor(index / perLine);
        const col = index % perLine;
        const x = col * (iconWidth + space);
        const y = row * (iconHeight + space);
        return <g key={index} transform={`translate(${x}, ${y})`} dangerouslySetInnerHTML={{ __html: iconSvg }} />;
      })}
    </svg>
  );
};

export default IconsShowcase;
