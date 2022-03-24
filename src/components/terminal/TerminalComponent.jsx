import "../Playground.css";
import React, { useState, useRef, useEffect } from "react";
import { Button } from '@mui/material';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

function TerminalComponent(props) {
    const [connected, setConnected] = useState(false);
    const terminalContentDiv = useRef();

    const connection = new WebSocket("ws://0.0.0.0:8080/compiler/");
    connection.addEventListener("open", () => { });

    const [terminalContent, setTerminalContent] = useState("");
    const codeInputRef = useRef();

    useEffect(() => {
        connection.addEventListener("message", (message) => {
            setConnected(true);
            const newString = "<p>$ " + message.data + "</p>";
            setTerminalContent(newString);
            terminalContentDiv.current.innerHTML = newString;
        });
    }, [connection, connected])

    const handleInputSend = (e) => {
        switch (e.key) {
            case "Enter":
                const newString = terminalContent + "<p>$ " + codeInputRef.current.value + "</p>";
                setTerminalContent(newString);
                connection.send(codeInputRef.current.value);
                terminalContentDiv.current.innerHTML = newString;
                break;
            default:
                break;
        }
    };

    const handleCompileSend = () => {
        alert(props.codeContent)
        connection.send("" + props.codeContent)
    }



    const styles = {
        terminal: {
            bar: {
                position: "absolute",
                display: "flex",
                paddingTop: 5,
                justifyContent: "start",
                paddingBottom: 5,
                width: "100%",
                top: 0,
                left: "0",
                color: "white",
                background: "#bbb",
            },
            position: "relative",
            paddingTop: 31,
            backgroundColor: "#151515",
            fontFamily: "monospace",
            color: "white",
            width: 400,
            height: 375,
            paddingLeft: 20,
        },
        terminalContentText: {
            height: "100%",
        }
    };
    return (
        <div className="terminal" style={styles.terminal}>
            <div style={styles.terminal.bar}>
                <div className="terminal__button btn-red" />
                <div className="terminal__button btn-yellow" />
                <div className="terminal__button btn-green" />
            </div>
            <div className="terminal__content">
                <span ref={terminalContentDiv} style={styles.terminal.terminalContentText}></span>
            </div>
            <input
                ref={codeInputRef}
                disabled={!connected}
                type="text"
                className="terminal__input"
                placeholder="$commandLine > "
                onKeyPress={handleInputSend}
            />
            <Button onClick={handleCompileSend} color="success">Compile</Button>
        </div>
    );
}
export default TerminalComponent;
