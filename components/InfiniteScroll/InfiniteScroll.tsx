import InfiniteScrollComp from "react-infinite-scroll-component";
import React from "react";
import { InfiniteScrollProps } from "./InfiniteScroll.type";

const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  return (
    <InfiniteScrollComp
      dataLength={props.dataLength}
      next={props.fetchMore}
      className="flex flex-wrap gap-10 justify-center w-full relative"
      hasMore={true}
      loader={
        <div className="absolute bottom-0 z-10 bg-slate-500 py-2 px-4 rounded-md">
          <progress className="progress w-56" />
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {props.children}
    </InfiniteScrollComp>
  );
};

export default InfiniteScroll;
