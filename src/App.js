import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import { Route, Routes } from 'react-router-dom';
// import seedColors from "./SeedColors";
// import { generatePalette } from './colorHelpers';


function App() {

  // const findPalette = (id) => {
  //   return seedColors.find(function (palette) {
  //     return palette.id === id;
  //   });
  // };



  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette />} />

    </Routes>
  );
}

export default App;
