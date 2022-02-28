import React, { useState } from "react";

const Accordion = (props) => {
  const [clickedIndex, setClickedIndex] = useState("");

  const onTitleClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div>
      {props.items.map((item, index) => {
        const active = index === clickedIndex ? "active" : "";
        return (
          <div
            key={item.title}
            className="ui accordion"
            onClick={() => onTitleClick(index)}
          >
            <div className={`${active} title`}>
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`${active} content`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
