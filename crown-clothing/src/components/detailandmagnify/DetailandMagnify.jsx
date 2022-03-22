import React from "react";
import { connect } from "react-redux";
import { selectCollectionItems } from "../../redux/collection/collectionSelector";
import { createStructuredSelector } from "reselect";
import ReactImageMagnify from "react-image-magnify";

const DetailandMagnify = ({ collections }) => {
  console.log(collections[0].items[0].imageUrl);
  return (
    <div>
      <div
        style={{
          width: "320px",
          height: "400px",
        }}
      >
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "image",
              isFluidWidth: true,
              src: `${collections[0].items[0].baseUrl}`,
            },
            largeImage: {
              src: `${collections[0].items[0].imageUrl}`,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionItems,
});
export default connect(mapStateToProps)(DetailandMagnify);
