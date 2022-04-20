# React
## Initialization
### Console
    npx create-react-app [APP-NAME]
    cd [APP-NAME]
    code .
    rm public/favicon.ico public/logo192.png public/logo512.png public/manifest.json public/robots.txt
    rm src/App.css src/App.test.js src/index.css src/logo.svg src/reportWebVitals.js src/setupTests.js
    mkdir src/components src/styles
    touch src/styles/reset.css src/styles/style.css
    npm install gh-pages --save-dev
### Index.html
- Rename document
- Add project description in meta tag
### App.js
- Copy and paste corresponding file content
### index.js
- Copy and paste corresponding file content
### reset.css
- Copy and paste corresponding file content
### Package.json *(add)*
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    },
    "homepage": "http://[USERNAME].github.io/[PROJECT-NAME]",
### Miscellaneous
- Add a nice favicon.png to public/
- Set GitHub Pages source as *gh-pages branch*
- Ensure the last console command was sent!
