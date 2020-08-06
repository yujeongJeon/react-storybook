import React, { useState, useEffect } from "react";
import InfiniteScroll from "./InfiniteScroll";

const Elem = ({ i, title, description }) => {
  return (
    <div style={{
      marginTop: "10px",
      letterSpacing: `-.5px`
    }}>
    <div
      style={{
        position: `relative`,
        borderRadius: `9px`,
        backgroundColor: `#fff`,
        lineHeight: `20px`,
        color: `#222`,
        padding: `20px 18px 14px 4px`,
        display: `flex`,
        alignItems: `center`
      }}
    >
      <div style={{
        position: `relative`,
        margin: `-5px 4px auto 0`,
        width: `72px`,
        height: `72px`,
        backgroundColor: `#dbdbdb`
      }}></div>
      <div style={{
        flexDirection: `column`,
        flex: `1 1`
      }}>
        <div style={{
          display: "table",
          width: "100%"
        }}>
          <div style={{
            display: `table-row`,
            fontWeight: `700`
          }}>
            {title}-{i}
          </div>
          <div style={{
            display: `table-row`
          }}>
            {description}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const Loader = () => <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0"
}}>loading...</div>;

const LENGTH_LIST = [
  1,
  5,
  9,
  13,
  17
]

const _getRandomLength = () => {
  const randomIndex = Math.floor(Math.random() * LENGTH_LIST.length);
  return LENGTH_LIST[randomIndex];
}

const Example = () => {
  const [items, setItems] = useState(() => Array.from({ length: 20 }).map(() => ({
    title: `제목제목`,
    description: "내용내용".repeat(_getRandomLength())
  })));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      const nextItems = items.concat(Array.from({ length: 20 }).map(() => ({
        title: `제목제목`,
        description: "내용내용".repeat(_getRandomLength())
      })));
      setItems(nextItems);
    }, 500);
  };

  useEffect(() => {
    if (items.length >= 100) {
      setHasMore(false);
    }
  }, [items.length]);

  const renderer = ({index}) => <Elem i={index} {...items[index]} />

  return (
    <div style={{ backgroundColor: "#f2f4f6", }}>
      <h3 style={{ backgroundColor: "#0bb05b", color: "#fff", textAlign: "center", margin: 0, height: "40px", lineHeight: "40px", fontSize: "15px" }}>
        InfiniteScroll with react-virtualized
      </h3>
      <div style={{
        padding: "0 20px"
      }}>
      <InfiniteScroll
        dataLength={items.length}
        hasMore={hasMore}
        next={fetchMoreData}
        loader={<Loader />}
        height={window.screen.availHeight - 40}
        //height={400}
        renderer={renderer}
        children={items}
      />
      </div>
    </div>
  );
};

export default Example;
