import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import CartContext from "../lib/context/Cart";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState({});
  return (
  <ChakraProvider>
    <CartContext.Provider value={{ items,setItems }}>
    <NavBar />
    <Flex w='full' minH='100vh' bgColor='gray.100'>
    <Box maxW='70vw' m='auto'>
    <Component {...pageProps} />
    </Box>
    </Flex>
    <Footer />
    </CartContext.Provider>
  </ChakraProvider>
);
}
export default MyApp;