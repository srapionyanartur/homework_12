import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <input type = "text" 
        placeholder = {`${darkMode ? "Dark" : "light"}`}>
      </input>

      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies. Id porta nibh venenatis cras sed felis
        eget velit.
      </p>
      
      <SwitchButton />
      </div> 
     
  );
}

export default App;