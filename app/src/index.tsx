import { createSignal } from "@holy-render/reactivity";

const firstName = createSignal("Ivan");
const lastName = createSignal("Ivanov");
const fullName = () => `${firstName()} ${lastName()}`;

document.body.appendChild(
  <div>
    <input bind:value={firstName} />

    <input bind:value={lastName} />

    <div>{fullName}</div>
  </div>
);
