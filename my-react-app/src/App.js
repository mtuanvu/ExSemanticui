import logo from "./logo.svg";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import FormFieldExample from "./components/FormFieldExample";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React CRUD Example</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <div>
          <Route path="/update" component={Update} />
        </div>
      </div>
    </Router>
  );
}
export default App;
