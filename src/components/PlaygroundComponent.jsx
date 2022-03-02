import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import "./Playground.css";
import TerminalComponent from "./terminal/TerminalComponent";

function PlayGroundComponent(props) {
  const doc = props.doc;
  const [code, setCode] = useState("hoe");

  const styles = {
    playground: {
      display: "flex",
      margin: "0 auto",
      justifyContent: "space-around",
      marginTop: 15,
    },
  };
  return (
    <div style={styles.playground}>
      <CodeMirror
        value={doc}
        height="400px"
        id="codemirror"
        width="400px"
        theme="light"
        extensions={[java()]}
        onChange={(value, viewUpdate) => {
          setCode(value);
        }}
      />
      <div></div>
      <TerminalComponent codeContent={code}/>
      
    </div>
  );
}
export default PlayGroundComponent;
