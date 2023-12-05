import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";

function App() {
  return (
    <div className="main">
      <h1 className="main-header">React CRUD Example</h1>
      <div>
        <Create />
      </div>
    </div>
  );
}
export default App;
