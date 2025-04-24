import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Details from './components/Details.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/details/:id" element={<Details />} />
    <Route path="/new-player" element={<NewPlayerForm />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
