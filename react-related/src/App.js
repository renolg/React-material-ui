import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { green, yellow } from "@material-ui/core/colors";
import {
  makeStyles,
  TextField,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
          color="primary"
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField />
          <TextField
            variant="outlined"
            color="secondary"
            type="date"
            label="Date"
          />
          <CheckBoxExample />
          <ButtonGroup>
            <Button
              onClick={() => alert("Hello")}
              startIcon={<SaveIcon />}
              style={{
                fontSize: 40,
              }}
              size="large"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              onClick={() => alert("Hello")}
              startIcon={<SaveIcon />}
              style={{
                fontSize: 40,
              }}
              size="large"
              variant="contained"
              color="secondary"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
