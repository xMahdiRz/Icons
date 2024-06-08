import { ImageResponse } from 'next/og'

const generateImageResponse = (element, options = {}) => {
  const {
    width = 1200,
    height = 630,
    emoji = 'twemoji',
    fonts = [],
    debug = false,
    status = 200,
    statusText,
    headers
  } = options;

  return new ImageResponse(element, {
    width,
    height,
    emoji,
    fonts,
    debug,
    status,
    statusText,
    headers
  });
}

// Example usage:
const element = <div>Hello, world!</div>;

const options = {
  width: 800,
  height: 400,
  emoji: 'noto',
  fonts: [
    {
      name: 'Roboto',
      data: new ArrayBuffer(), // Replace with actual ArrayBuffer data
      weight: 400,
      style: 'normal'
    }
  ],
  debug: true,
  status: 200,
  headers: {
    'Content-Type': 'image/png'
  }
};

export default response = generateImageResponse(element, options);
