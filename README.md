REACT Hooks CRUD A simple CRUD app. With users, the users can add, update, or delete users. This build utilizes React hooks and the Context API, to build a fully functional CRUD application. Tailwind CSS is used for the styling of this app, and Create React App sets up the project. MVP: This is a GUEST list for events. 

Purpose and learning of this build: This build is not using any external API calls but uses hard-coded objects which will serve as the state. The introduction of the Context API solves one major problem: 'prop drilling'. The process of getting the data from one component to another through layers of nested deep components. Whereas Hooks helps, React developers, by allowing the use of functional rather than class-based components. Where I needed to utilize a lifecycle method, I had to use a class-based approach. And I now no longer have to call super(props) or worry about binding methods or the this keyword. 

"The core implementation is just a function. Not a method. Not a class. Not a framework. Just a function." source-credit https://www.digitalocean.com/community/tutorials/react-crud-context-hooks
This is CRUD application using context API and hooks.

Build Notes for Alice:

1. Create React App > npx create-react-app react-contextapi
   Initialize package.json with yarn init
   Build out simple components:
   Home | AddGuest | EditGuest | Heading
2. Write App.js with imports of components
3. GuestList created with list of Guests. Using classnames with TailwindCSS utility classes to style the app. Import GlobalState and useContext - built in React Hook that gives functional components access to the context. Imported here is the Guests object; 'removeGuest' and 'editGuest' from 'GlobalState.js' file.
4. Create a GlobalState file with a function to dispatch an action. Defined the initial state of the employee array, with hard code values in the object. The dispatch type calls the payload to be received.
5. Create AppReducer file with CRUD functionality for each switch case which returns Guest state inside each functions.  
7. Created the AddGuest component with an onSubmit handler that pushes the filled values of the form field into the state. setName|setLocation | setDesignation accesses the current value placed inside the form field; this is wrapped in a new constant newGuest - with a unique id that increments 1 to the length. GlobalContext has added parameter this accepts guests as a payload inside the GlobalState, the route to the landing page shows new guests.
8. Creating EditGuest; The useEffect hook is invoked when the component is mounted. 
-Inside this hook the current route parameter and the parameter to the guest object from the state. The setSelectUser function was created and this passes selectedUser as the parameter. Observing for an onChange events in the form fields where the userKEy and value are passed as two parameters. The selectedUser and set userKey are spread as a value from the input fields. Invoking the onSubmit event. 


Fixed BUG: Had to move the if statement as it was checking to value of the selectedUser.id on the first life cycle of the component. The useEffect was getting the id of the state which did not make sense - as I was always checking the selectedUser.id to be null; 

Refactored:
 const currentUserId = route.match.params.id
  const user = guests.find((emp) => emp.id === parseInt(currentUserId))
  useEffect(() => {
    setSelectedUser(user)
  }, [user]) 
  if (!selectedUser || !user.id) {
    alert('ID does not match!')
  }
