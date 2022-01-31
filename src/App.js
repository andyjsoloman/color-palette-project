import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
    </Routes>
  );
}

export default App;
