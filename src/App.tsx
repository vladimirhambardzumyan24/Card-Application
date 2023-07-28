import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";

function App() {
  return (
    <Box display="flex">
      <Box width="100%">
        <Header />
        <Container maxW="container.lg">
          <Main />
        </Container>
        <Footer />
      </Box>
      <Instructions />
    </Box>
  );
}

export default App;
