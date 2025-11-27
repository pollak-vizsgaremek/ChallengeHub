import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const FooldalPage = lazy(() => import('./pages/Fooldal'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Betöltés...</div>}>
        <Routes>
          <Route path="/" element={<FooldalPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
