import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppDataContext from './context/AppDataContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AppDataContext>
    <App/>
    </AppDataContext>
    </BrowserRouter>
)
