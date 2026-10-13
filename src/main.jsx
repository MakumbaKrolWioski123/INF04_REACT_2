import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KartaProduktu from "./components/Produkt.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <KartaProduktu />
      <KartaProduktu />
  </StrictMode>,
)
