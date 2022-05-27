import AuthPage from './pages/auth'
import './App.css'
import { globalStyles } from './styles/GlobalStyles'
import { Global } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'
import GiphyPage from 'pages/giphy'
import UserMenuPage from 'pages/userMenu'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Routes>
           <Route path="/"  element={<MainPage />}  />
           <Route path="/auth/*"  element={<AuthPage />}  />
           <Route path="/giphy"  element={<GiphyPage />}  />
           <Route path="/userMenu"  element={<UserMenuPage />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
