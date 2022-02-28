import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Translate from "./components/Translate";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "Use React by creating components",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Accordion items={items} />} />
        <Route exact path="/list" element={<Search />} />
        <Route
          exact
          path="/dropdown"
          element={
            <Dropdown
              onSelectedChange={setSelected}
              selected={selected}
              options={options}
            />
          }
        />
        <Route exact path="/translate" element={<Translate />} />
      </Routes>
    </div>
  );
}

export default App;
