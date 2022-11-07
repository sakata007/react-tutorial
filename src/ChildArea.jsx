import React from "react";
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red",
};

const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("aaaa");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>非表示</button>
        </div>
      ) : null}
    </>
  );
});
export default ChildArea;
