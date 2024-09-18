import { Box } from "@mui/material";
import { grey } from '@mui/material/colors';

import NavBar from "./componenst/NavBar/NavBar";
import Preview from "./componenst/Preview/Preview";
import Content from "./componenst/Content/Content";
import Cards from "./componenst/Cards/Cards";
import Footer from "./componenst/Footer/Footer";

function App() {

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: grey[500], pt: 7, pb: 1 }}>
      <NavBar />

      <main >
        <Preview />
        <Content />
        <Cards />
      </main>

      <Footer />

    </Box>
  );
}

export default App;
