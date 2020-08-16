REACT Hooks CRUD A simple CRUD app. With users, the users can add, update, or delete users. This build utilizes React hooks and the Context API, to build a fully functional CRUD application. Tailwind CSS is used for the styling of this app, and Create React App sets up the project.

Purpose and learning of this build: This build is not using any external API calls but uses hard-coded objects which will serve as the state. The introduction of the Context API solves one major problem: 'prop drilling'. The process of getting our data from one component to another through layers of nested deep components. Whereas Hooks helps us, React developers, by allowing us to use a functional rather than class-based components. Where we needed to utilize a lifecycle method, we had to use a class-based approach. And we now no longer have to call super(props) or worry about binding methods or the this keyword. The core implementation is just a function. Not a method. Not a class. Not a framework. Just a function. source-credit https://www.digitalocean.com/community/tutorials/react-crud-context-hooks

Build Notes for Alice:

1. Create React App > npx create-react-app react-contextapi
   Initialize package.json with yarn init
   Build out simple components:
   Home | AddEmployee | EditEmployee | Heading

2. Write App.js with imports of components
3. EmployeeList created with list of employees. Using classnames with TailwindCSS utility classes to style the app. Import GlobalState and useContext - built in React Hook that gives functional components access to the context. Imported here is the employees object; 'removeEmployee' and 'editEmployee' from 'GlobalState.js' file. 

4. Create a GLobalState file with a function to dispatch an action.
