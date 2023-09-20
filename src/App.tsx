/******************************************************************************
 * "." means the current folder.
 *****************************************************************************/
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // React component with the opening and closing tag.

  // Create a state hook and make the visibility false for the alert (default).
  // Destructures the two elements in an array.
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
