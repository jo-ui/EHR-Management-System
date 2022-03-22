import React from "react";
import { connect } from "react-redux";
import { selectCollectionparams } from "../../redux/collection/collectionSelector";
import DirectoryPreview from "../../components/directory-preview/DirectoryPreview";
import "./category.scss";
const Category = ({ selectedCollection }) => {
  console.log("in category colls", selectedCollection);
  return (
    <div className="collection-page">
      <DirectoryPreview
        items={selectedCollection.items}
        title={selectedCollection.title}
      />
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  selectedCollection: selectCollectionparams(props.data["*"])(state),
});

export default connect(mapStateToProps)(Category);
