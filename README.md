# Icons Showcase Readme

## Description
This repository contains code for a React component called IconsShowcase, which renders a showcase of SVG icons based on certain parameters.

## IconsShowcase Component
- The `IconsShowcase` component is responsible for fetching and displaying SVG icons.
- It accepts props like `icons`, `theme`, `perLine`, and `space` to customize the display.

[![My Skills](http://localhost:3000/icons/nextjs-dark.svg)](https://skillicons.dev)

## Usage
### IconsShowcase Component
1. Import the `IconsShowcase` component from `"@/components/IconsShowcase"`.
2. Use the component with the following props:
   - `icons`: An array of icon names.
   - `theme`: The theme of the icons (default: 'dark').
   - `perLine`: Number of icons per line (default: 10).
   - `space`: Space between icons (default: 3).

### Home Component
1. Import `useSearchParams` from `'next/navigation'`.
2. Retrieve query parameters (`i`, `theme`, `perLine`, `space`) using `useSearchParams`.
3. Create an array of icon names based on the `i` parameter.
4. Replace short names with full names using the `shortNames` object.
5. Render the `IconsShowcase` component with the provided props.

## Example
```jsx
import IconsShowcase from "@/components/IconsShowcase";

const icons = ["React", "Vue", "Angular"];
const theme = "light";
const perLine = 5;
const space = 5;

const Home = () => {
  return (
    <IconsShowcase 
      icons={icons} 
      theme={theme} 
      perLine={perLine} 
      space={space}
    />
  );
};

export default Home;
