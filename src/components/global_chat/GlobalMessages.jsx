import {
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  getFirestore,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import App from "../../App";
import { app, auth, database } from "../../firebase/firebase-config";
import "./app.css";

function GlobalMessages() {
  const messagesCollection = collection(database, "global_chat");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
      const newData = snapshot.docs.map((doc) => doc.data());
      setMessages(newData);
    });

    return () => {
      unsubscribe();
    };
  }, [app]);

  const getFormatedTimeStamp = (timestamp) => {
    return `${timestamp.getDay()}.${
      timestamp.getMonth() + 1
    }.${timestamp.getFullYear()} - ${timestamp.getHours()}:${timestamp.getMinutes()}`;
  };

  const messagesElms = messages.map((msg, index) => (
    <div key={index} className="message">
      {msg.from}
      <br />
      <p>{getFormatedTimeStamp(msg.when.toDate())}</p>
      <p>{msg.message}</p>
    </div>
  ));

  return (
    <div>
      <h1> </h1>
      {messagesElms}
    </div>
  );
}

export default GlobalMessages;
