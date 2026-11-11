import Layout from "./Components/Layout/Layout.jsx";
import BioTwin from "./Pages/BioTwinPages/BioTwin.jsx";
// import Telemetry from './Pages/Telemetry'; // Boshqa sahifalarni ham shunday qo'shasiz

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout qobig'i barcha sahifalarni o'rab turadi */}
        <Route path="/" element={<Layout />}>
          
          {/* Asosiy sahifa (/) ochilganda BioTwin chiqadi */}
          <Route index element={<BioTwin />} />
          
          {/* Kelajakdagi boshqa sahifalar: */}
          {/* <Route path="telemetry" element={<Telemetry />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;