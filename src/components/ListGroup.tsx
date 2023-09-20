// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

// { items: [], heading: string }
// Using type annotation to specify the type properties.
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Create a constant array of strings.
  //let items = ["New York", "San Fransisco", "Tokyo", "Paris"];

  // Variable for highlighting singular idexes (-1 = no item selected).
  // let selectedIndex = -1;

  // Hook
  // (This state-hook allows us to tap into built-in features in React and tell
  // React that this component can have data or state, that will change overtime).
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event); // event: MouseEvent = Type annotation

  // The parentheses of return help wrap the JSX lines.
  return (
    // <h1>List</h1> as a React.createElement('h1').

    // use a Fragment "<> </>" to wrap all of its children.
    // There is also the use of <div></div> and <Fragment></Fragment>.
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
