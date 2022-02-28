import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Amharic",
    value: "am",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
      />
      <hr />
      <h3 className="ui header">OUTPUT</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
