// ADDED

/******************************************************************************
 * For file naming, TS is plainly used for TypeScript files, and TSX for react 
 * components. There are two ways to create a React component, we can use a 
 * JavaScript class or a function.
 * 
 * Expression: a piece of code that produces a value dynamically. Just about 
 * anything could be used as long as it returns a value when using expressions.
 *****************************************************************************/

// Function (PascalCasing)
function Message() {

    // Dynamic content.
    const name = 'Joseph';

    // IF statement example when usning contents.
    if (name)
        // Return the display value of "Hello Joseph"
        return <h1>Hello {name}</h1>;
        
    // Otherwise, just display "Hello World."
    return <h1>Hello World</h1>; // JSX syntax - JavaScript XML
}

export default Message;