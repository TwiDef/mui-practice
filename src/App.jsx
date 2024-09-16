import { Box } from "@mui/material";
import { grey } from '@mui/material/colors';

import NavBar from "./componenst/NavBar/NavBar";
import Preview from "./componenst/Preview/Preview";
import Content from "./componenst/Content/Content";

function App() {

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: grey[500], pt: 7 }}>
      <NavBar />

      <main >
        <Preview />
        <Content />
      </main>

    </Box>
  );
}

export default App;
