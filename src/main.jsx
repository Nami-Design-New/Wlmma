import { createRoot } from 'react-dom/client'
import { MainLAyout } from './layout/MainLayout.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./assets/styles/all.min.css";
import "./assets/styles/main.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
    <MainLAyout />
)
