import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://x3om4.sse.codesandbox.io/");
      res.text().then(res => setData(res));
    }

    fetchData();
  });
  return (
    <div className="App">
      <h1>{data}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
