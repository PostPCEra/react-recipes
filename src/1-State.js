import React, { useState } from "react";

export function BasicState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>#1. You clicked {count} times</h3>
      <button onClick={() => setCount(count + 1)}>Click me +</button>
    </div>
  );
}

// ----------------------------------------------------
export function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1); // using previous state variable
  };
  const decrement = () => {
    setCount(count - 1); // referring to 'state variable'
  };
  return (
    <div>
      <h3>#1.2 You clicked {count} times</h3>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}

// ----------------------------------------------------
// Source: https://daveceddia.com/usestate-hook-examples/
export function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, don't bother with the buttons
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <div>
      <h3>#1.3 LessText</h3>
      <span>
        {hidden ? `${text.substr(0, maxLength).trim()} ......` : text}

        {hidden ? (
          <a onClick={() => setHidden(false)}> MORE</a>
        ) : (
          <a href onClick={() => setHidden(true)} style={{ cursor: "pointer" }}>
            LESS
          </a>
        )}
      </span>
    </div>
  );
}

// ----------------------------------------------------
// Source: https://daveceddia.com/usestate-hook-examples/
export function RandomList() {
  const [items, setItems] = useState([]);

  // SR: here State variable 'items' is an Array, so 'setItems' takes array []
  // with 2 elements, first element 'current state variable' , 2nd a new object
  // Where as in LoginForm, State varible is a single Onject, NOT an Array
  // so setState({ , }) takes 2nd argument and update the SINGLE Object filed
  //
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

// ----------------------------------------------------
// Source: https://daveceddia.com/usestate-hook-examples/
export function LoginForm() {
  const [form, setState] = useState({
    username: "",
    password: ""
  });

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };
  // SR: both 'username' & 'password' fields call the same 'updateField' function to update
  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h3>#1.5 Login Form (see writes to console.log()</h3>
      <label>
        Username:
        <input value={form.username} name="username" onChange={updateField} />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button onClick={printValues}>Submit</button>
    </div>
  );
}
