import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import seedColors from "./SeedColors";
// import { generatePalette } from './colorHelpers';


function App() {

  const [palettes, addPalette] = useState(seedColors);
  // const findPalette = (id) => {
  //   return seedColors.find(function (palette) {
  //     return palette.id === id;
  //   });
  // };
  function savePalette(newPalette) {
    addPalette([...palettes, newPalette]);
  }


  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route path="/palette/:paletteId" element={<Palette palettes={palettes} />} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette />} />
      <Route path="/palette/new" element={<NewPaletteForm savePalette={savePalette} palettes={palettes} />} />

    </Routes>
  );
}

export default App;
