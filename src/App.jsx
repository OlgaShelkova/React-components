import "./App.css";
import { Hello, i } from "./components/hello/Hello.jsx";
import CardsList from "./components/cardsList/CardsList.jsx";

function App() {
  console.log("Я в компоненте App");
  console.log(i);
  return (
    <div className="App">
      <Hello />
      <CardsList />
    </div>
  );
}

export default App;
