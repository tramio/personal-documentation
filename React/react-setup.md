# React
## Initialization
### Console
    npx create-react-app APPNAME
    cd APPNAME
    code .
    rm public/favicon.ico public/logo192.png public/logo512.png public/manifest.json public/robots.txt
    rm src/App.css src/index.css src/logo.svg src/reportWebVitals.js src/setupTests.js
    mkdir src/components src/styles
    touch src/styles/reset.css src/styles/style.css src/RouteSwitch.js
    npm i gh-pages --save-dev
    npm i react-router-dom
### Index.html
- Copy and paste corresponding file content
- Change title
- Change description
### App.js
- Copy and paste corresponding file content
### index.js
- Copy and paste corresponding file content
### reset.css
- Copy and paste corresponding file content
### Package.json *(add)*
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    },
    "homepage": "http://tramio.github.io/APPNAME",
### README.md
    Are you looking for this project's [live demo](http://tramio.github.io/APPNAME)?
### Miscellaneous
- Ensure the last console command was sent!
- Add a nice favicon.png to public/
