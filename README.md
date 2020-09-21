# **Initravel Website**
> Indonesia Travel Guide Website Project

## Table of Contents
- [ Description ](#desc)
- [ Resources ](#resources)
- [ Bug Fix ](#bug_fix)
- [ License ](#license)

<a name="desc"></a>
## Description
This project is an Indonesia Travel Guide website built with Vue.js. This website isn't necessarily focused on its descriptive contents, but the UI/UX & functionalites that a website should be acquainted with. Below is a list of some functionalites implemented to this project.
- Responsive design.
- Lazy loading for faster page loads.
- User account creation (Firebase).
- Route guard.
- Scroll behavior.
- 3rd party provider log-in with Google, Facebook, etc.
- Email verification.
- Real-time data (AJAX API).
- Database to store user data (Firebase).

<a name="resources"></a>
## Resources
- Vue.js
  - Vue CLI
  - Vue Router (History Mode)
  - Vue Transition & Animation
  - Babel-Eslint
- Firebase
  - Authentication
  - Cloud Firestore
  - Cloud Storage
- Canva
   - Logo & Images
- Hostinger

<a name="bug_fix"></a>
## Bug Fix
This project took me about 10 days to complete. During the development period, a large amount of time was spent for some unfamiliar bug fixes. Among many bugs I faced, there are 2 marjor bugs I experienced with this project that took **arduous** amount of debugging.

### **1) Apache Server Configuration**

As I'm using `Router History Mode`, and as this project is hosted through Hostinger under my main (portfolio) website, I needed to configure `publicPath` to indicate server fallback to `index.html`. This new concept wasn't too much of a hassle as I followed [Vue deployment documentation](https://cli.vuejs.org/guide/deployment.html#deployment) to add vue.config.js.

The real problem though, emerged when I landed on [this](https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode) part of documentation where I had to add `.htaccess` file in the root folder of this project. Having ZERO knowledge on Apache nor its `.htaccess` syntax, it took me 2 whole days to finally configure the file. (I had no luck with Stack Overflow either 😥). After numerous trial and error, [here](https://codepen.io/kevinmnm/pen/ZEWJdWO) is the final syntax that worked for my project.

### **2) Customizing `router-link` Style**

I inteded to remote default underline implemented in `router-link`. After numerous trial & error, I finally asked Stack Overflow to find out that the real issue was CSS `display`. [Here](https://stackoverflow.com/questions/63526678/cannot-remove-underline-from-vue-router-link/63527152?noredirect=1#comment112335377_63527152) is my Stack Overflow question. 

<a name="license"></a>
## License

MIT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
