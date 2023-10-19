import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [firstName, setFirstName] = useState("Ivan");
  const [lastName, setLastName] = useState("Ivanov");
  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <div>{fullName}</div>
    </div>
  );
};

const rootElement = document.createElement("div");

document.body.appendChild(rootElement);

const root = createRoot(rootElement);

root.render(<App />);
