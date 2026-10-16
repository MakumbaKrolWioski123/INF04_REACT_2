import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KartaProduktu from "./components/Produkt.jsx";
import Galeria from "./components/Galeria.jsx";
import WyborKoloru from "./components/WyborKoloru.jsx";
import Formularz from "./components/Formularz.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <KartaProduktu />
      <KartaProduktu />
      <Galeria/>
      <WyborKoloru/>
      <Formularz/>
  </StrictMode>,
)
