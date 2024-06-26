# 🖼️ Icon URL Generator Project

## 📋 Overview

The Icon URL Generator is a web application built using Next.js `^14.2.3`. It allows users to select multiple icons, configure display settings, and generate a URL to access the selected icons in SVG format. The app leverages dynamic icon data for versatile usage.

## ✨ Features

- **Icon Selection**: Users can search and select multiple icons from a predefined list or select all available icons.
- **Theme Selection**: Users can choose between dark and light themes for the icons.
- **Configuration Options**: Users can configure the number of icons per line and the space between icons.

## 📄 Documentation

- [Specifying Icons](#specifying-icons)
- [Themed Icons](#themed-icons)
- [Icons Per Line](#icons-per-line)
- [Centering Icons](#centering-icons)

## 💡 Specifying Icons

To add the skills icon element to your README, copy and paste the code block below. Change the `?i=js,html,css` to a list of your skills separated by commas. You can find a full list of icons [here](#icons-list).

```md
[![My Skills](https://icons-alpha.vercel.app/icons?i=js,html,css,wasm)](https://icons-alpha.vercel.app)
```

[![My Skills](https://icons-alpha.vercel.app/icons?i=js,html,css,wasm)](https://icons-alpha.vercel.app)

## 🎨 Themed Icons

You can specify a theme for the icons by adding the `&theme=light` parameter to the URL. The default theme is dark.

**Light Theme Example:**

```md
[![My Skills](https://icons-alpha.vercel.app/icons?i=java,kotlin,nodejs,figma&theme=light)](https://icons-alpha.vercel.app)
```

[![My Skills](https://icons-alpha.vercel.app/icons?i=java,kotlin,nodejs,figma&theme=light)](https://icons-alpha.vercel.app)


**Dark Theme Example:**

```md
[![My Skills](https://icons-alpha.vercel.app/icons?i=java,kotlin,nodejs,figma&theme=dark)](https://icons-alpha.vercel.app)
```

[![My Skills](https://icons-alpha.vercel.app/icons?i=java,kotlin,nodejs,figma&theme=dark)](https://icons-alpha.vercel.app)


## 📏 Icons Per Line

You can specify how many icons you would like per line using the `&perLine=3` parameter. The default is 10.

```md
[![My Skills](https://icons-alpha.vercel.app/icons?i=aws,gcp,azure,react,vue,flutter&perLine=3)](https://icons-alpha.vercel.app)
```

[![My Skills](https://icons-alpha.vercel.app/icons?i=aws,gcp,azure,react,vue,flutter&perLine=3)](https://icons-alpha.vercel.app)

## 🔲 Centering Icons

To center the icons in your README, use the following HTML:

```html
<p align="center">
  <a href="https://icons-alpha.vercel.app">
    <img src="https://icons-alpha.vercel.app/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>
```

<p align="center">
  <a href="https://icons-alpha.vercel.app">
    <img src="https://icons-alpha.vercel.app/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xMahdiRz/Icons.git
   cd Icons
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:PORT`.

## 📁 Project Structure

- **components/ui**: Contains reusable UI components like `Card`, `Button`, `Input`, and `Select` from [`shadcn/ui`](https://ui.shadcn.com/).
- **components**: Contains application-specific components such as `ThemeChanger`.
- **pages/api**: Contains API route handlers, including the handler to generate the SVG icons.
- **icons.json**: JSON file containing the list of available icons.

## 🌟 Example

An example URL generated by the application might look like this:

```md
[![Text Here](https://icons-alpha.vercel.app/icons?i=react,vuejs,nextjs&theme=dark&perLine=10&space=3)](https://icons-alpha.vercel.app/)
```

### Result:
[![Text Here](https://icons-alpha.vercel.app/icons?i=react,vuejs,nextjs&theme=dark&perLine=10&space=3)](https://icons-alpha.vercel.app/)

This URL retrieves an SVG image with the selected icons displayed according to the specified configurations.

## Development Notes

- **Icon Mapping**: Short names for icons are mapped to their full names to handle shorthand notations.
- **Error Handling**: If an icon or theme does not exist, a placeholder error icon is returned.
- **Dynamic SVG Generation**: The application dynamically generates SVG content based on user selections and configurations.

## Future Improvements

- **Enhanced Search**: Improve the search functionality to include fuzzy search and category-based filtering.
- **Custom Themes**: Allow users to create and save custom themes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by `https://github.com/tandpfun/skill-icons`
- Special thanks to all contributors and the open-source community.

## Icons List

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!
Convert Text to Lowercase

|      Icon Id       |                             Icon                             |
| :----------------: | :----------------------------------------------------------: |
|     `ableton`      |    <img src="./public/icons/ableton-dark.svg" width="50">    |
|   `activitypub`    |  <img src="./public/icons/activitypub-dark.svg" width="50">  |
|      `actix`       |     <img src="./public/icons/actix-dark.svg" width="50">     |
|      `adonis`      |       <img src="./public/icons/adonis.svg" width="50">       |
|        `ae`        |    <img src="./public/icons/aftereffects.svg" width="50">    |
|     `aiscript`     |   <img src="./public/icons/aiscript-dark.svg" width="50">    |
|     `alpinejs`     |   <img src="./public/icons/alpinejs-dark.svg" width="50">    |
|     `anaconda`     |   <img src="./public/icons/anaconda-dark.svg" width="50">    |
|  `androidstudio`   | <img src="./public/icons/androidstudio-dark.svg" width="50"> |
|     `angular`      |    <img src="./public/icons/angular-dark.svg" width="50">    |
|     `ansible`      |      <img src="./public/icons/ansible.svg" width="50">       |
|      `apollo`      |       <img src="./public/icons/apollo.svg" width="50">       |
|      `apple`       |     <img src="./public/icons/apple-dark.svg" width="50">     |
|     `appwrite`     |      <img src="./public/icons/appwrite.svg" width="50">      |
|       `arch`       |     <img src="./public/icons/arch-dark.svg" width="50">      |
|     `arduino`      |      <img src="./public/icons/arduino.svg" width="50">       |
|      `astro`       |       <img src="./public/icons/astro.svg" width="50">        |
|       `atom`       |        <img src="./public/icons/atom.svg" width="50">        |
|        `au`        |      <img src="./public/icons/audition.svg" width="50">      |
|     `autocad`      |    <img src="./public/icons/autocad-dark.svg" width="50">    |
|       `aws`        |      <img src="./public/icons/aws-dark.svg" width="50">      |
|       `azul`       |        <img src="./public/icons/azul.svg" width="50">        |
|      `azure`       |     <img src="./public/icons/azure-dark.svg" width="50">     |
|      `babel`       |       <img src="./public/icons/babel.svg" width="50">        |
|       `bash`       |     <img src="./public/icons/bash-dark.svg" width="50">      |
|       `bevy`       |     <img src="./public/icons/bevy-dark.svg" width="50">      |
|    `bitbucket`     |   <img src="./public/icons/bitbucket-dark.svg" width="50">   |
|     `blender`      |    <img src="./public/icons/blender-dark.svg" width="50">    |
|    `bootstrap`     |     <img src="./public/icons/bootstrap.svg" width="50">      |
|       `bsd`        |      <img src="./public/icons/bsd-dark.svg" width="50">      |
|       `bun`        |      <img src="./public/icons/bun-dark.svg" width="50">      |
|        `c`         |         <img src="./public/icons/c.svg" width="50">          |
|        `cs`        |         <img src="./public/icons/cs.svg" width="50">         |
|       `cpp`        |        <img src="./public/icons/cpp.svg" width="50">         |
|     `crystal`      |    <img src="./public/icons/crystal-dark.svg" width="50">    |
|    `cassandra`     |   <img src="./public/icons/cassandra-dark.svg" width="50">   |
|      `clion`       |     <img src="./public/icons/clion-dark.svg" width="50">     |
|     `clojure`      |    <img src="./public/icons/clojure-dark.svg" width="50">    |
|    `cloudflare`    |  <img src="./public/icons/cloudflare-dark.svg" width="50">   |
|      `cmake`       |     <img src="./public/icons/cmake-dark.svg" width="50">     |
|     `codepen`      |    <img src="./public/icons/codepen-dark.svg" width="50">    |
|   `coffeescript`   | <img src="./public/icons/coffeescript-dark.svg" width="50">  |
|       `css`        |        <img src="./public/icons/css.svg" width="50">         |
|     `cypress`      |    <img src="./public/icons/cypress-dark.svg" width="50">    |
|        `d3`        |      <img src="./public/icons/d3-dark.svg" width="50">       |
|       `dart`       |     <img src="./public/icons/dart-dark.svg" width="50">      |
|      `debian`      |    <img src="./public/icons/debian-dark.svg" width="50">     |
|       `deno`       |     <img src="./public/icons/deno-dark.svg" width="50">      |
|      `devto`       |     <img src="./public/icons/devto-dark.svg" width="50">     |
|     `discord`      |      <img src="./public/icons/discord.svg" width="50">       |
|       `bots`       |    <img src="./public/icons/discordbots.svg" width="50">     |
|    `discordjs`     |   <img src="./public/icons/discordjs-dark.svg" width="50">   |
|      `django`      |       <img src="./public/icons/django.svg" width="50">       |
|      `docker`      |       <img src="./public/icons/docker.svg" width="50">       |
|      `dotnet`      |       <img src="./public/icons/dotnet.svg" width="50">       |
|     `dynamodb`     |   <img src="./public/icons/dynamodb-dark.svg" width="50">    |
|     `eclipse`      |    <img src="./public/icons/eclipse-dark.svg" width="50">    |
|  `elasticsearch`   | <img src="./public/icons/elasticsearch-dark.svg" width="50"> |
|     `electron`     |      <img src="./public/icons/electron.svg" width="50">      |
|      `elixir`      |    <img src="./public/icons/elixir-dark.svg" width="50">     |
|      `elysia`      |    <img src="./public/icons/elysia-dark.svg" width="50">     |
|      `emacs`       |       <img src="./public/icons/emacs.svg" width="50">        |
|      `ember`       |       <img src="./public/icons/ember.svg" width="50">        |
|     `emotion`      |    <img src="./public/icons/emotion-dark.svg" width="50">    |
|     `express`      |   <img src="./public/icons/expressjs-dark.svg" width="50">   |
|     `fastapi`      |      <img src="./public/icons/fastapi.svg" width="50">       |
|    `fediverse`     |   <img src="./public/icons/fediverse-dark.svg" width="50">   |
|      `figma`       |     <img src="./public/icons/figma-dark.svg" width="50">     |
|     `firebase`     |   <img src="./public/icons/firebase-dark.svg" width="50">    |
|      `flask`       |     <img src="./public/icons/flask-dark.svg" width="50">     |
|     `flutter`      |    <img src="./public/icons/flutter-dark.svg" width="50">    |
|      `forth`       |       <img src="./public/icons/forth.svg" width="50">        |
|     `fortran`      |      <img src="./public/icons/fortran.svg" width="50">       |
| `gamemakerstudio`  |  <img src="./public/icons/gamemakerstudio.svg" width="50">   |
|      `gatsby`      |       <img src="./public/icons/gatsby.svg" width="50">       |
|       `gcp`        |      <img src="./public/icons/gcp-dark.svg" width="50">      |
|       `git`        |        <img src="./public/icons/git.svg" width="50">         |
|      `github`      |    <img src="./public/icons/github-dark.svg" width="50">     |
|  `githubactions`   | <img src="./public/icons/githubactions-dark.svg" width="50"> |
|      `gitlab`      |    <img src="./public/icons/gitlab-dark.svg" width="50">     |
|      `gmail`       |     <img src="./public/icons/gmail-dark.svg" width="50">     |
|     `gherkin`      |    <img src="./public/icons/gherkin-dark.svg" width="50">    |
|        `go`        |       <img src="./public/icons/golang.svg" width="50">       |
|      `gradle`      |    <img src="./public/icons/gradle-dark.svg" width="50">     |
|      `godot`       |     <img src="./public/icons/godot-dark.svg" width="50">     |
|     `grafana`      |    <img src="./public/icons/grafana-dark.svg" width="50">    |
|     `graphql`      |    <img src="./public/icons/graphql-dark.svg" width="50">    |
|       `gtk`        |      <img src="./public/icons/gtk-dark.svg" width="50">      |
|       `gulp`       |        <img src="./public/icons/gulp.svg" width="50">        |
|     `haskell`      |    <img src="./public/icons/haskell-dark.svg" width="50">    |
|       `haxe`       |     <img src="./public/icons/haxe-dark.svg" width="50">      |
|    `haxeflixel`    |  <img src="./public/icons/haxeflixel-dark.svg" width="50">   |
|      `heroku`      |       <img src="./public/icons/heroku.svg" width="50">       |
|    `hibernate`     |   <img src="./public/icons/hibernate-dark.svg" width="50">   |
|       `html`       |        <img src="./public/icons/html.svg" width="50">        |
|       `htmx`       |     <img src="./public/icons/htmx-dark.svg" width="50">      |
|       `idea`       |     <img src="./public/icons/idea-dark.svg" width="50">      |
|        `ai`        |    <img src="./public/icons/illustrator.svg" width="50">     |
|    `instagram`     |     <img src="./public/icons/instagram.svg" width="50">      |
|       `ipfs`       |     <img src="./public/icons/ipfs-dark.svg" width="50">      |
|       `java`       |     <img src="./public/icons/java-dark.svg" width="50">      |
|        `js`        |     <img src="./public/icons/javascript.svg" width="50">     |
|     `jenkins`      |    <img src="./public/icons/jenkins-dark.svg" width="50">    |
|       `jest`       |        <img src="./public/icons/jest.svg" width="50">        |
|      `jquery`      |       <img src="./public/icons/jquery.svg" width="50">       |
|      `kafka`       |       <img src="./public/icons/kafka.svg" width="50">        |
|       `kali`       |     <img src="./public/icons/kali-dark.svg" width="50">      |
|      `kotlin`      |    <img src="./public/icons/kotlin-dark.svg" width="50">     |
|       `ktor`       |     <img src="./public/icons/ktor-dark.svg" width="50">      |
|    `kubernetes`    |     <img src="./public/icons/kubernetes.svg" width="50">     |
|     `laravel`      |    <img src="./public/icons/laravel-dark.svg" width="50">    |
|      `latex`       |     <img src="./public/icons/latex-dark.svg" width="50">     |
|       `less`       |     <img src="./public/icons/less-dark.svg" width="50">      |
|     `linkedin`     |      <img src="./public/icons/linkedin.svg" width="50">      |
|      `linux`       |     <img src="./public/icons/linux-dark.svg" width="50">     |
|       `lit`        |      <img src="./public/icons/lit-dark.svg" width="50">      |
|       `lua`        |      <img src="./public/icons/lua-dark.svg" width="50">      |
|        `md`        |   <img src="./public/icons/markdown-dark.svg" width="50">    |
|     `mastodon`     |   <img src="./public/icons/mastodon-dark.svg" width="50">    |
|    `materialui`    |  <img src="./public/icons/materialui-dark.svg" width="50">   |
|      `matlab`      |    <img src="./public/icons/matlab-dark.svg" width="50">     |
|      `maven`       |     <img src="./public/icons/maven-dark.svg" width="50">     |
|       `mint`       |     <img src="./public/icons/mint-dark.svg" width="50">      |
|     `misskey`      |    <img src="./public/icons/misskey-dark.svg" width="50">    |
|     `mongodb`      |      <img src="./public/icons/mongodb.svg" width="50">       |
|      `mysql`       |     <img src="./public/icons/mysql-dark.svg" width="50">     |
|      `neovim`      |    <img src="./public/icons/neovim-dark.svg" width="50">     |
|      `nestjs`      |    <img src="./public/icons/nestjs-dark.svg" width="50">     |
|     `netlify`      |    <img src="./public/icons/netlify-dark.svg" width="50">    |
|      `nextjs`      |    <img src="./public/icons/nextjs-dark.svg" width="50">     |
|      `nginx`       |       <img src="./public/icons/nginx.svg" width="50">        |
|       `nim`        |      <img src="./public/icons/nim-dark.svg" width="50">      |
|       `nix`        |      <img src="./public/icons/nix-dark.svg" width="50">      |
|      `nodejs`      |    <img src="./public/icons/nodejs-dark.svg" width="50">     |
|      `notion`      |    <img src="./public/icons/notion-dark.svg" width="50">     |
|       `npm`        |      <img src="./public/icons/npm-dark.svg" width="50">      |
|      `nuxtjs`      |    <img src="./public/icons/nuxtjs-dark.svg" width="50">     |
|     `obsidian`     |   <img src="./public/icons/obsidian-dark.svg" width="50">    |
|      `ocaml`       |       <img src="./public/icons/ocaml.svg" width="50">        |
|      `octave`      |    <img src="./public/icons/octave-dark.svg" width="50">     |
|      `opencv`      |    <img src="./public/icons/opencv-dark.svg" width="50">     |
|    `openshift`     |     <img src="./public/icons/openshift.svg" width="50">      |
|    `openstack`     |   <img src="./public/icons/openstack-dark.svg" width="50">   |
|       `p5js`       |        <img src="./public/icons/p5js.svg" width="50">        |
|       `perl`       |        <img src="./public/icons/perl.svg" width="50">        |
|        `ps`        |     <img src="./public/icons/photoshop.svg" width="50">      |
|       `php`        |      <img src="./public/icons/php-dark.svg" width="50">      |
|     `phpstorm`     |   <img src="./public/icons/phpstorm-dark.svg" width="50">    |
|      `pinia`       |     <img src="./public/icons/pinia-dark.svg" width="50">     |
|       `pkl`        |      <img src="./public/icons/pkl-dark.svg" width="50">      |
|      `plan9`       |     <img src="./public/icons/plan9-dark.svg" width="50">     |
|   `planetscale`    |  <img src="./public/icons/planetscale-dark.svg" width="50">  |
|       `pnpm`       |     <img src="./public/icons/pnpm-dark.svg" width="50">      |
|     `postgres`     |  <img src="./public/icons/postgresql-dark.svg" width="50">   |
|     `postman`      |      <img src="./public/icons/postman.svg" width="50">       |
|    `powershell`    |  <img src="./public/icons/powershell-dark.svg" width="50">   |
|        `pr`        |      <img src="./public/icons/premiere.svg" width="50">      |
|      `prisma`      |       <img src="./public/icons/prisma.svg" width="50">       |
|    `processing`    |  <img src="./public/icons/processing-dark.svg" width="50">   |
|    `prometheus`    |     <img src="./public/icons/prometheus.svg" width="50">     |
|       `pug`        |      <img src="./public/icons/pug-dark.svg" width="50">      |
|     `pycharm`      |    <img src="./public/icons/pycharm-dark.svg" width="50">    |
|        `py`        |    <img src="./public/icons/python-dark.svg" width="50">     |
|     `pytorch`      |    <img src="./public/icons/pytorch-dark.svg" width="50">    |
|        `qt`        |      <img src="./public/icons/qt-dark.svg" width="50">       |
|        `r`         |       <img src="./public/icons/r-dark.svg" width="50">       |
|     `rabbitmq`     |   <img src="./public/icons/rabbitmq-dark.svg" width="50">    |
|      `rails`       |       <img src="./public/icons/rails.svg" width="50">        |
|   `raspberrypi`    |  <img src="./public/icons/raspberrypi-dark.svg" width="50">  |
|      `react`       |     <img src="./public/icons/react-dark.svg" width="50">     |
|    `reactivex`     |   <img src="./public/icons/reactivex-dark.svg" width="50">   |
|      `redhat`      |    <img src="./public/icons/redhat-dark.svg" width="50">     |
|      `redis`       |     <img src="./public/icons/redis-dark.svg" width="50">     |
|      `redux`       |       <img src="./public/icons/redux.svg" width="50">        |
|      `regex`       |     <img src="./public/icons/regex-dark.svg" width="50">     |
|      `remix`       |     <img src="./public/icons/remix-dark.svg" width="50">     |
|      `replit`      |    <img src="./public/icons/replit-dark.svg" width="50">     |
|      `rider`       |     <img src="./public/icons/rider-dark.svg" width="50">     |
|   `robloxstudio`   |    <img src="./public/icons/robloxstudio.svg" width="50">    |
|      `rocket`      |       <img src="./public/icons/rocket.svg" width="50">       |
|     `rollupjs`     |   <img src="./public/icons/rollupjs-dark.svg" width="50">    |
|       `ros`        |      <img src="./public/icons/ros-dark.svg" width="50">      |
|       `ruby`       |        <img src="./public/icons/ruby.svg" width="50">        |
|       `rust`       |        <img src="./public/icons/rust.svg" width="50">        |
|       `sass`       |        <img src="./public/icons/sass.svg" width="50">        |
|      `spring`      |    <img src="./public/icons/spring-dark.svg" width="50">     |
|      `sqlite`      |       <img src="./public/icons/sqlite.svg" width="50">       |
|  `stackoverflow`   | <img src="./public/icons/stackoverflow-dark.svg" width="50"> |
| `styledcomponents` |  <img src="./public/icons/styledcomponents.svg" width="50">  |
|     `sublime`      |    <img src="./public/icons/sublime-dark.svg" width="50">    |
|     `supabase`     |   <img src="./public/icons/supabase-dark.svg" width="50">    |
|      `scala`       |     <img src="./public/icons/scala-dark.svg" width="50">     |
|     `sklearn`      |  <img src="./public/icons/scikitlearn-dark.svg" width="50">  |
|     `selenium`     |      <img src="./public/icons/selenium.svg" width="50">      |
|      `sentry`      |       <img src="./public/icons/sentry.svg" width="50">       |
|    `sequelize`     |   <img src="./public/icons/sequelize-dark.svg" width="50">   |
|     `sketchup`     |   <img src="./public/icons/sketchup-dark.svg" width="50">    |
|     `solidity`     |      <img src="./public/icons/solidity.svg" width="50">      |
|     `solidjs`      |    <img src="./public/icons/solidjs-dark.svg" width="50">    |
|      `svelte`      |       <img src="./public/icons/svelte.svg" width="50">       |
|       `svg`        |      <img src="./public/icons/svg-dark.svg" width="50">      |
|      `swift`       |       <img src="./public/icons/swift.svg" width="50">        |
|     `symfony`      |    <img src="./public/icons/symfony-dark.svg" width="50">    |
|     `tailwind`     |  <img src="./public/icons/tailwindcss-dark.svg" width="50">  |
|      `tauri`       |     <img src="./public/icons/tauri-dark.svg" width="50">     |
|    `tensorflow`    |  <img src="./public/icons/tensorflow-dark.svg" width="50">   |
|    `terraform`     |   <img src="./public/icons/terraform-dark.svg" width="50">   |
|     `threejs`      |    <img src="./public/icons/threejs-dark.svg" width="50">    |
|     `twitter`      |      <img src="./public/icons/twitter.svg" width="50">       |
|        `ts`        |     <img src="./public/icons/typescript.svg" width="50">     |
|      `ubuntu`      |    <img src="./public/icons/ubuntu-dark.svg" width="50">     |
|      `unity`       |     <img src="./public/icons/unity-dark.svg" width="50">     |
|      `unreal`      |    <img src="./public/icons/unrealengine.svg" width="50">    |
|        `v`         |       <img src="./public/icons/v-dark.svg" width="50">       |
|       `vala`       |        <img src="./public/icons/vala.svg" width="50">        |
|      `vercel`      |    <img src="./public/icons/vercel-dark.svg" width="50">     |
|       `vim`        |      <img src="./public/icons/vim-dark.svg" width="50">      |
|   `visualstudio`   | <img src="./public/icons/visualstudio-dark.svg" width="50">  |
|       `vite`       |     <img src="./public/icons/vite-dark.svg" width="50">      |
|      `vitest`      |    <img src="./public/icons/vitest-dark.svg" width="50">     |
|      `vscode`      |    <img src="./public/icons/vscode-dark.svg" width="50">     |
|     `vscodium`     |   <img src="./public/icons/vscodium-dark.svg" width="50">    |
|       `vue`        |     <img src="./public/icons/vuejs-dark.svg" width="50">     |
|     `vuetify`      |    <img src="./public/icons/vuetify-dark.svg" width="50">    |
|       `wasm`       |    <img src="./public/icons/webassembly.svg" width="50">     |
|     `webflow`      |      <img src="./public/icons/webflow.svg" width="50">       |
|     `webpack`      |    <img src="./public/icons/webpack-dark.svg" width="50">    |
|     `webstorm`     |   <img src="./public/icons/webstorm-dark.svg" width="50">    |
|     `windicss`     |   <img src="./public/icons/windicss-dark.svg" width="50">    |
|     `windows`      |    <img src="./public/icons/windows-dark.svg" width="50">    |
|    `wordpress`     |     <img src="./public/icons/wordpress.svg" width="50">      |
|     `workers`      |    <img src="./public/icons/workers-dark.svg" width="50">    |
|        `xd`        |         <img src="./public/icons/xd.svg" width="50">         |
|       `yarn`       |     <img src="./public/icons/yarn-dark.svg" width="50">      |
|       `yew`        |      <img src="./public/icons/yew-dark.svg" width="50">      |
|       `zig`        |      <img src="./public/icons/zig-dark.svg" width="50">      |

---

## Shortnames List 

| Short Name | Full Name        |
|------------|------------------|
| `js`       | `javascript`     |
| `ts`       | `typescript`     |
| `py`       | `python`         |
| `tailwind` | `tailwindcss`    |
| `vue`      | `vuejs`          |
| `nuxt`     | `nuxtjs`         |
| `go`       | `golang`         |
| `cf`       | `cloudflare`     |
| `wasm`     | `webassembly`    |
| `postgres` | `postgresql`     |
| `k8s`      | `kubernetes`     |
| `next`     | `nextjs`         |
| `mongo`    | `mongodb`        |
| `md`       | `markdown`       |
| `ps`       | `photoshop`      |
| `ai`       | `illustrator`    |
| `pr`       | `premiere`       |
| `ae`       | `aftereffects`   |
| `scss`     | `sass`           |
| `sc`       | `scala`          |
| `net`      | `dotnet`         |
| `gatsbyjs` | `gatsby`         |
| `gql`      | `graphql`        |
| `vlang`    | `v`              |
| `amazonwebservices` | `aws`   |
| `bots`     | `discordbots`    |
| `express`  | `expressjs`      |
| `googlecloud` | `gcp`         |
| `mui`      | `materialui`     |
| `windi`    | `windicss`       |
| `unreal`   | `unrealengine`   |
| `nest`     | `nestjs`         |
| `ktorio`   | `ktor`           |
| `pwsh`     | `powershell`     |
| `au`       | `audition`       |
| `rollup`   | `rollupjs`       |
| `rxjs`     | `reactivex`      |
| `rxjava`   | `reactivex`      |
| `ghactions`| `githubactions`  |
| `sklearn`  | `scikitlearn`    |

---

# Thank You!