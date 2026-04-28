import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main"; // 같은 폴더의 Main.tsx를 가져옴

// 다른 페이지들은 일단 주석처리하거나 실제 파일이 있을 때만 해제하세요
// import SiheungIntro from "./branch/siheung/page";

function App() {
  return (
    <Router>
      <Routes>
        {/* 접속하자마자 보이는 페이지 */}
        <Route path="/" element={<Main />} />

        {/* 다른 경로들 (파일이 준비되었다면 주석 해제) */}
        {/* <Route path="/siheung" element={<SiheungIntro />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
