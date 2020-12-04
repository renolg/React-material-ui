import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={() => alert("Hello")}
          startIcon={SaveIcon}
          style={{
            fontSize: 40,
          }}
          size="Large"
          variant="contained"
          color="primary"
        >
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
