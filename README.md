# React + TypeScript + Vite

### By: Joseph Wilson

The purpose of this program is to practice and exercise core fundamentals on using React, TypeScript, and Vite. These notes and documentation are based off from the learning cources from _CodeWithMosh_ "React 18 for Begginers" (React + TypeScript). These will be used to help with not only for internhsip learning purposes, but also for good references and documentation practices when working with these types of tools.

## Chapter 1 - Getting Started with React

**HOW TO run the server with React + Vite**

- Open a new terminal and enter in "npm run dev"
- Then, ctrl + click on the website link that shows in the terminal to open the web page

**TERMS**

- Components
- JavaScript Framework
- JavaScript Library
- JSX
- DOM
- Virtual DOM

**SUMMARY**

- React is a JavaScript library for building dynamic and interactive user interfaces.

- In React applications, we don’t query and update the DOM. Instead, we describe our application using small, reusable components. React will take care of efficiently creating and updating DOM elements.

- React components can be created using a function or a class. Function-based components are the preferred approach as they’re more concise and easier to work with.

- JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.

- When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.

- When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM.

- In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.

- Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc.

**NOTES**

## Chapter 2 - Building Components

**TERMS**

- Fragment
- Immutable
- Props
- State hook

**SUMMARY**

- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.

- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.

- To conditionally render content, we can use an ‘if’ statement or a ternary operator.

- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.

- Components can optionally have props (short for properties) to accept input.

- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.

- We should treat props as immutable (read-only) and not modify them.

- When the state or props of a component change, React will re-render the component and update the DOM accordingly.

- In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.

- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.

- To conditionally render content, we can use an ‘if’ statement or a ternary operator.

- We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.

- Components can optionally have props (short for properties) to accept input.

- We can pass data and functions to a component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.

- We should treat props as immutable (read-only) and not modify them.

- When the state or props of a component change, React will re-render the component and update the DOM accordingly.

**CREATING A COMPONENT**

```js
const Message = () => {
  return <h1>Hello World</h1>;
};

export default Message;
```

**RENDER A LIST**

```js
const Component = () => {
   const items = ['a', 'b', 'c'];
   return (
      <ul>
         {items.map((item)) => (
            <li> key={item}</li>
         )}
      </ul>
   );
};
```

**CONDITIONAL RENDERING**

```js
{
  items.length === 0 ? "a" : "b";
}
{
  items.length === 0 && "a";
}
```

**HANDLING EVENTS**

```js
<button onClick={() => console.log("clicked")}></button>
```

**DEFINING STATE**

```js
const [name, setName] = useState("");
```

**PROPS**

```js
interface Props {
  name: string;
}

const Component = ({ name }: Props) => {
  return <p>{name}</p>;
};
```

**PASSING CHILDREN**

```js
interface Props {
  children: ReactNode;
}

const Component = ({ children }: Props) => {
  return <div>{children}</div>;
};
```

**NOTES**

Tip: to select multiple single words with the same names
click and select the word
ctrl + d (to select the next same word)
do it multiple times untill all is selected
done!

To format the file in a "Prettier" format, click view -> Formate Pallete ->
Format Document -> [it might give an error message of multilple formaters for
JSX formats] click Configure -> type and select Prettier -> DONE!

Instead of using a for loop, JavaScript has a technique that help map
or converting an item of a different type. In this case, we want to
convert all of the items into an "li" element.

```js
items.map((item) => <li>{item}</li>);
```

**2.5 Conditional Redering**

We want to show a message if there is no items in the list. Instead of
Doing the IF condition, we need to do the {} method in a HTML element
style.

ex.

```js
{
  items.length === 0 ? <p>No item found</p> : null;
}
```

we want to compare the length of the list, see if it is zero, if so,
show "no item found", then return null (meaning nothing will be
rendered).

```js
const getMessage = () => {
  return items.length === 0 ? <p>No item found</p> : null;
};
```

**2.6 Handling Events**

Hooks can help us tell react that each component can have its own state and that
it can change over time when it is being clicked on (the clicked highlighted
effect) and so forth.

**2.7 Passing Data via Props**

Props/Properties are the inputs to our components. It helps us use data that
is already created and use them in different sections throughout the program.

For example, we want to create the "Cities" heading once so that we can just
simply call them in specific locations when referencing it. This will keep
the repetition down to a minimal level when writing code.

**2.8 Passing Functions via Props**

We want the App component to know what is being selected and react to the selected item
so that a function or effect can take place. We don't want to place this functionality in
the ListGroup because that functionality would be exclusive to that section. Instead, we
want the App component to event-handle all of the selected items so that other files can
simply use it.

**2.9 State vs Props**

---

| STATE                       | PROPS                                    |
| --------------------------- | ---------------------------------------- |
| Data managed by a component | Input passed to a component              |
| Similar to local variables  | Similar to function arguments            |
| Mutable (changable data)    | Immutable (Unchangable data / read only) |
| Causes a rerender           | Causes a rerender                        |

---

**2.10 Passing Children**

Using the children prop, we can pass children to a component.
Refer to the Alert.tsx file.

**2.11 Inspecting Components with React Dev Tools**

**2.12 Exercise: Building a Button Component**

Create a Bootstrap button component. Encapsulate the Bootstrap martkup inside a
reusable React component.

1. In the components folder, create a new file called "Button.tsx"
2. Do the class making shortcut (rafce)
3. Change div -> button
4. Give it a couple of classes (2 primary buttons)

- This is a commit test!

## Chapter 3 - Styling Components

**TERMS**

- CSS-in-JS
- CSS modules
- Implementation details
- Interface
- Inline styles
- Modular
- Separation of concerns
- Vanilla CSS

**SUMMARY**

- We have several options for styling React components, including vanilla CSS, CSS modules, CSS-in-JS, and inline styles.

- With vanilla CSS, we write our component styles in a separate CSS file and import it into the component file. However, we may encounter conflicts if the same CSS classes are defined in multiple files.

- CSS modules resolve this issue by generating unique class names during the build process.

- With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS modules, this provides scoping for CSS classes and eliminates conflicts. It also makes it easier for us to change or delete a component without affecting other components.

- The separation of concerns principle suggests that we divide a program into distinct sections or modules where each section handles a specific functionality. It helps us build modular and maintainable applications.

- With this principle, the complexity and implementation details of a module are hidden behind a well-defined interface.

- Separation of concerns is not just about organizing code into files, but rather dividing areas of functionality. Therefore, CSS-in-JS does not violate the separation of concerns principle as all the complexity for a component remains hidden behind its interface.

- Although inline styles are easy to apply, they can make our code difficult to maintain over time and should only be used as a last resort.

- We can add icons to our applications using the react-icons library.

- There are several UI libraries available that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more.

**VANILLA CSS**

```js
import "./ListGroup.css";

function ListGroup() {
  return <ul className="list-group"></ul>;
}
```

**CSS MODULES**

```js
import styles from "./ListGroup.module.css";

function ListGroup() {
  return <ul className={styles.listGroup}></ul>;
}
```

**CSS-IN-JS**

```js
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

function ListGroup() {
  return <List></List>;
}
```

**NOTES**

CSS-in-JS Benefits

- Scoped styles
- All the CSS & JS/TS code in one place
- Easier to delete a component
- Easier to style based on props/state

Popular tyles of Libraries

- Styled components
- Emotion
- Polished

**Separation of concerns**: Divide a program into distinct sections where each
section handles a specific functionallity, rather than having everything
in one place.

## Chapter 4 - Managing Component State

## Chapter 5 - Building Forms

## Chapter 6 - Connecting to the Backend

## Chapter 7 - Project: Video Game Discovery App

## Chapter EX - Notes, ideas, you name it

**Regular Comment**

```js
function MyComponent() {
  return (
    <div>
      {/* message prop requires a string */}
      <Hello message="Hello, World!" />
    </div>
  );
}
```

**Multi-line Comment**

```js
function MyComponent() {
  return (
    <div>
      {/* 
         Warning!
         message prop requires a string 
     */}
      <Hello message="Hello, World!" />
    </div>
  );
}
```

or

```js
function MyComponent() {
  return (
    <div>
      {
        // message prop requires a string
      }
      <Hello message="Hello, World!" />
    </div>
  );
}
```

**Comment arouind JSX**

```js
function MyComponent() {
  return (
    // message prop requires a string
    <div>
      <Hello message="Hello, World!" />
    </div>
  );
}
```

or

```js
function MyComponent() {
  return (
    /*
       Warning! 
       message prop requires a string
    */
    <div>
      <Hello message="Hello, World!" />
    </div>
  );
}
```

or

```js
function MyComponent() {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </div>
      <Hello message="Hello, World!" />
    </div>
    // message prop requires a string
  );
}
```

**Comment inside JSX**

```js
function MyComponent() {
  return (
    <div>
      <Hello
        message="Hello, World!" // message prop requires a string
      />
    </div>
  );
}
```

or

```js
function MyComponent() {
  return (
    <div>
      <Hello // Hello accepts message prop
        message="Hello, World!"
      />
    </div>
  );
}
```

- JSX comments syntax (the ugly)
- JavaScript comments around JSX (the bad)
- JavaScript comments inside a JSX tag (the good)

```js
function MyComponent() {
  return (
    // Comment around JSX
    <div>
      {/* Comment inside JSX */}
      <Hello // comment inside JSX tag
        message="Hello, World!" // comment inside JSX tag
      />
    </div>
  );
}
```
