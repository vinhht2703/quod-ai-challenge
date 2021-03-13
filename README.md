# Quod AI challenge

This project displays a list of github issues, allows to highlight one of these issues and shows notifications.

<h3>
    <a href="https://huynhtanvinh-quod-ai.netlify.app/">Online Demo</a>
</h3>

## Dependencies
- bootstrap: CSS framework.
- ant-design: React UI library with a set of high-quality React components.
- node-sass: Library that provides binding for Node.js to LibSass.
- redux && react-redux: Library for managing application state.
- redux-saga: Library that aims to make application side effects.
- immer: Package that allows you to work with immutable state in a more convenient way.

## Getting started

1. Clone the repo
   ```sh
   git clone https://github.com/vinhht2703/quod-ai-challenge.git
   ```
2. Restore packages
   ```
   npm install
   ```
3. Build and run demo
   ```
   npm start
   ```
4. Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical decision

### Styling

For styling, I use libraries such as Bootstrap, Ant design and node-sass.
Pros:
- Having flexible grid system (Bootstrap, Ant design)
- Customizable (Bootstrap, Ant design)
- Base CSS - Cascading Style Sheets are built so you don't have to code CSS too much (Bootstrap)
- High-quality React components (Ant design)
- Possibility of applying CSS, overriding styles with better formatting by using SCSS syntax (node-sass) 
Cons:
- Taking lots of capacity for installation (Bootstrap, Ant design)
- Requirement of style overrides (Bootstrap, Ant design)
- Taking time to interpret and compile SCSS into CSS (node-sass)
I use Bootstrap for using grid system, styled navigation and styling some tags quickly via using className. I also use Ant design due to high-quality React components such as notification toast which is easier to use than Bootstrap. Moreover, there are some styles which I have to override for styling prettier so that I use node-sass which is the library allow me to style by SCSS syntax. SCSS is like CSS with better formatting.

### State Management

I use Redux to share state between components and also install immer package for handling immutable data in reducers.
Pros:
- Having global store that any component can access any state from the store (Redux)
- Persisting the state of a component even after the component has unmounted (Redux)
- Simply modifying immutable redux state while keeping all the benefits of immutable data. (immer)
- Boilerplate reduction, less noise, more concise code (immer)
Cons:
- No encapsulation. Any component can access the data which can cause security issues. (Redux)
- Redux state is immutable so when the reducer update the state, a new state will be created every time which can cause excessive use of memory. (Redux)
Because of having global store of redux, I can use some state from redux to pass into some components. For one of examples in this project, I will use highlightHistory from redux store for Navigation component and Main Page component. I update highlightHistory by highlighting one of issue from Main Page component. After that, the Navigation which has alert icon will have a new highlightHistory props without connecting to Main Page component. Furthermore, I also use immer for modifying immutable redux state without destroying immutable data from redux.
  

### Using React Hooks

I use React hooks in my project. The first reason is that it has simpler codes than writing a class and can also use state and other React features without writing a class. I mean that in class component, we have to understand lifecycle functions such as ComponentDidMount, ComponentWillUnmount, ComponentDidUpdate and add other functions to appropriate these lifecycle functions. But with hooks, I can only use useEffect functions to handle issue. Moreover, using React hooks makes easier to test because it is just a function, not a class with lots of functions. Finally, I also use useRef to get the reference of Notification popup which is checked click outside to close.
   

### What would I improve?

In this project, there are some improvements that I have thought. At UI aspect, I would like to show labels, created issue time and issue post creator in issue item of the list so that all users can see all issues with sufficient information in the list quickly. Furthermore, applying search and filter will help users finding issues easier. At logical aspect, I would like to store the highlighted issue in local store by using redux-persist so that users do not have to fetch their own highlighted issue again from server.

### Preventing wasted renders

To prevent wasted renders, I use hooks API such as useEffect and useCallback. UseEffect Hook is the same as componentDidMount, componentDidUpdate, and componentWillUnmount combined. For example, I use useEffect to handle and prevent rerunning side effect which is fetching new issues only when a page number is changed. Furthermore, I also use useCallback Hook to memorize some function such as handlePagination to prevent wasted renders. The handlePagination is re-rendered only when the page number is changed.
 

### Handling side-effects (e.g. data fetching)

I use redux-saga to handle side-effects in redux.
Pros:
- Handling side-effects such as data fetching with redux
- Simplicity of testing due to generator function
Cons:
- Brings in more complexity to the code
- Need understanding generator function
Due to using Redux for managing state, I use redux-saga to handle side-effects easily. Additionally, I can more easily check my asynchronous data flow.

    
