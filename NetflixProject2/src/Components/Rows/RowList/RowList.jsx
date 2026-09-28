import React from "react";
import "./rowList.css";
import Row from "../Row/Row";
import requests from "../../../utils/request";
const RowList = () => {
  return (
    <div>
      <section className="row-list">
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
        />
      </section>
    </div>
  );
};

export default RowList;
