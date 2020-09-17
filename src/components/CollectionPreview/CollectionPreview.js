import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {" "}
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}{" "}
      </div>
    </div>
  );
};

export default CollectionPreview;
