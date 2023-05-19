import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import CartContext from "../lib/context/Cart";
import { useState } from "react";
import NavBar from "../components/NavBar";

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
    </CartContext.Provider>
  </ChakraProvider>
);
}

export default MyApp;