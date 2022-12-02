import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import DownloadScreen from "./screens/DownloadScreen";
import About from "./screens/About";
import ContactScreen from "./screens/ContactScreen";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/download" element={<DownloadScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactScreen />} />
        </Routes>
    );
}