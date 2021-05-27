import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  const deleteItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className="App">
      <div className="container">
        <h1
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Birthdays Today
        </h1>
        {people.map((person) => {
          const { id, img, name, age } = person;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={img} alt="face" />
              </div>
              <div className="text-content">
                <h4 className="name">{name}</h4>
                <div
                  className="age"
                  style={{ color: "#617d98", fontWeight: "500" }}
                >
                  {age}
                </div>
              </div>
              <div className="delete-icon" onClick={() => deleteItem(id)}>
                Remove
              </div>
            </div>
          );
        })}
        <button className="btn" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
