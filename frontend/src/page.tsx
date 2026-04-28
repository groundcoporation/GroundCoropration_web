import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App.tsx를 불러옴
import "./index.css";

// 이 파일이 index.html의 <div id="root"></div>에 앱을 주입합니다.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
