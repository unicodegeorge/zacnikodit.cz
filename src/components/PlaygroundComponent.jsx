import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";


function PlayGroundComponent(props) {
  const doc = props.doc;

  return (
    <CodeMirror
      value={doc}
      height="400px"
      id="codemirror"
      width="400px"
      theme="light"
      extensions={[java()]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
}
export default PlayGroundComponent;
