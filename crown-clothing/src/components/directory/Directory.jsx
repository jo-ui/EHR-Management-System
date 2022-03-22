import React from "react";
import MenuItem from "../menu-item/MenuItem";
import { selectDirectorySection } from "../../redux/directory/directorySelector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
