import LoginPage from './pages/login'
import './App.css'
import { globalStyles } from './styles/GlobalStyles'
import { Global } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <Routes>
           <Route path="/"  element={<MainPage />}  />
           <Route path="/login"  element={<LoginPage />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
