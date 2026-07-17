import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Test from './pages/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path='/test' element={<Test />}/>
        <Route path='*' element={
          <div>
            <h1>Page not found!</h1>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
