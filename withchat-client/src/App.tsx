import AuthPage from "./pages/auth";
import "./App.css";
import { globalStyles } from "./styles/GlobalStyles";
import { Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import GiphyPage from "pages/giphy";
import UserMenuPage from "pages/userMenu";
import MySettingPage from "pages/myPage";
import ChattingTest from "pages/test/chattingTest";
import TestPage from "pages/test";



export default function App() {
  return (
    <>

      <Global styles={globalStyles} />
      <Routes>
        <Route path="/test/chatting" element={<ChattingTest />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/giphy" element={<GiphyPage />} />
        <Route path="/mySetting/*" element={<MySettingPage />} />
        <Route path="/userMenu" element={<UserMenuPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}
