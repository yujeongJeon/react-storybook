import React, { useState, useEffect } from "react";
import InfiniteScroll from "./InfiniteScroll";

const Elem = ({ i }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "50px",
        border: "1px solid black",
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
      }}
    >
      div-#{i}
    </div>
  );
};

const Example = () => {
  const [items, setItems] = useState(() => Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      const nextItems = items.concat(Array.from({ length: 20 }));
      setItems(nextItems);
    }, 500);
  };

  useEffect(() => {
    if (items.length >= 60) {
      setHasMore(false);
    }
  }, [items.length]);

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <h3 style={{ textAlign: "center" }}>
        onScroll과 height가 적용된 컴포넌트
      </h3>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={hasMore}
        next={fetchMoreData}
        loader={<div>loading...</div>}
        height={400}
      >
        {items.map((v, i) => (
          <Elem key={i} i={i} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Example;
