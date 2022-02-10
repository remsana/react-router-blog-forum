import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Commentpage from "./pages/Commentpage";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route
          path="/post/:id"
          render={(props) => <Commentpage {...props} />}
        />
        <Route component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
