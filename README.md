# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Installing the Tailwindcss framework

    npm i -D tailwindcss
    npx tailwindcss init

#### Tailwind.config.js

    In app.css added @tailwind base,
                     @tailwind components,
                     @tailwind utilities
    content : ["./src/**/*.{js,html,jsx}]

#### Layout Of The Project

    - Head
        - Hamburger Menu
        - Logo
        - Search
            - Searchbar
            - button
            - list items
        - User Icon
    - Body
        - Sidebar
        - Main Container
            - Buttons List
            - Video Container
                - video Card
        - watch later
            - video redirecting
            - live Chat
            - N-level nested comments

#### Redux setup for state management

    - npm i @reduxjs/toolkit
    - npm i react-redux

    * create store
    * create slice
    * provide the store to the app using Provider

#### setup the routing

    - npm i react-router-dom
    - create router using createBrowserRouter
    - provide router to app using RouterProvider

    - fetch query params from url using useSearchParams
    - using .get("key of the url_query") to get the value
    - using the iframe to get the videos on the page

#### DOTENV

    - npm i react-dotenv
    - create .env file in the root folder
    - name the variable starting with REACT_APP_<NAME>
    - to use environment variables use en.process.REACT_APP_<NAME>

#### Debouncing of 200ms in Search

    It is the process of skiping the intermediate api calls if the time between two keys stroke is less than 200ms.
    - It improves the user experience

#### Update the search Container items on searching

#### Implementing the caching of apis

    - It is done to reduce the number of API calls

#### Building the comments

    - Building the nested N-level comments
        used recursion and tailwindcss for styling

#### Building the live chat

    - LiveChat
    - ChatMessage
    - API polling - updates the data b/w the UI and DL after every 1.5s (1500ms) for enhancing the user experience

#### Some More Hooks

    - UseMemo
        - It lets us to cache the results of calculations between re-renders.
    - useCallback
        - It lets us to cache the function definition betweeb re-renders.
    - useRef
        - It references a value that is not needed for re-rendering, i.e, it persists the value between different renders
