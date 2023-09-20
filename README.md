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
ex. {items.length === 0 ? <p>No item found</p> : null}

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

==========================================================

## Chapter 3 - Styling Components

## Chapter 4 - Managing Component State

## Chapter 5 - Building Forms

## Chapter 6 - Connecting to the Backend

## Chapter 7 - Project: Video Game Discovery App
