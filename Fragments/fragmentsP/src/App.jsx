import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let fooditems = [];
  let fooditems = ["Dall", "Roti", "Salan", "Chai", "Food"];

  return (
    <React.Fragment>
      <h1>Healty item</h1>

      {fooditems.length === 0 && <h3>I Am Hungry</h3>}
      <ul class="list-group">
        {fooditems.map((item) => (
          <li class="list-group-item " aria-current="true">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
