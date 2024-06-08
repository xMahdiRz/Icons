# Icon Set Generator API Documentation

This documentation provides information on how to use the Icon Set Generator API to create and customize a set of icons for your GitHub README.

## Endpoint

### URL
```
http://localhost:3000/api/hello
```

## Parameters

### Query Parameters
- **i**: A comma-separated list of icon short names.
- **theme**: The theme of the icons (e.g., `dark`, `light`).
- **perLine**: Number of icons per line.
- **space**: Space between icons in pixels.

### Example
```
http://localhost:3000/api/hello?i=js,ts,py&theme=dark&perLine=50&space=1
```

## Short Names Mapping

The API uses short names for icons which are then mapped to their full names. Here is the current mapping:

```javascript
const shortNames = {
  js: "javascript",
  ts: "typescript",
  py: "python",
  tailwind: "tailwindcss",
  vue: "vuejs",
  nuxt: "nuxtjs",
  go: "golang",
  cf: "cloudflare",
  wasm: "webassembly",
  postgres: "postgresql",
  k8s: "kubernetes",
  next: "nextjs",
  mongo: "mongodb",
  md: "markdown",
  ps: "photoshop",
  ai: "illustrator",
  pr: "premiere",
  ae: "aftereffects",
  scss: "sass",
  sc: "scala",
  net: "dotnet",
  gatsbyjs: "gatsby",
  gql: "graphql",
  vlang: "v",
  amazonwebservices: "aws",
  bots: "discordbots",
  express: "expressjs",
  googlecloud: "gcp",
  mui: "materialui",
  windi: "windicss",
  unreal: "unrealengine",
  nest: "nestjs",
  ktorio: "ktor",
  pwsh: "powershell",
  au: "audition",
  rollup: "rollupjs",
  rxjs: "reactivex",
  rxjava: "reactivex",
  ghactions: "githubactions",
  sklearn: "scikitlearn",
};
```

## Usage

### Fetching Icons

To fetch the icons, make a GET request to the endpoint with the desired query parameters.

### Example Request

```javascript
fetch('http://localhost:3000/api/hello?i=js,ts,py&theme=dark&perLine=10&space=3')
  .then(response => response.text())
  .then(svg => {
    // Do something with the SVG content
    console.log(svg);
  });
```

### Response

The response is an SVG containing the requested icons arranged according to the specified parameters.

## Error Handling

In case of errors, the API will return a placeholder error icon.

## Example Response

Here is an example of the SVG response:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="50" viewBox="0 0 160 50" fill="none">
  <g transform="translate(0, 0)"><!-- SVG content for javascript icon --></g>
  <g transform="translate(53, 0)"><!-- SVG content for typescript icon --></g>
  <g transform="translate(106, 0)"><!-- SVG content for python icon --></g>
</svg>
```

## Troubleshooting

- Ensure the short names used in the query are correct.
- If an icon does not exist for the specified theme, the API will attempt to fall back to the default `dark` theme or the icon without any theme suffix.
- If all attempts fail, a placeholder error icon will be returned.

## Conclusion

This API allows you to easily generate a set of icons for your GitHub README by specifying the icons, theme, layout, and spacing. Use the provided endpoint and parameters to customize and retrieve your icons in SVG format.