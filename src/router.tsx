import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import SideBar from "./Components/SideBar";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
