import Addtudo from "./components/Addtudo";
import AppName from "./components/AppName";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";

function App() {
  return (
    <center class="todo-container">
    <AppName/> <br />
      <div class="container text-center">
        <Addtudo/>
        <Item1/>
        <Item2></Item2>
        
      </div>
    </center>
  );
}

export default App;
