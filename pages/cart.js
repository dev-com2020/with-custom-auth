import { useContext, useEffect,useState } from "react";
import { Box, Flex, Heading, Text, Button, Image, Divider } from "@chakra-ui/react";
import CartContext from "../lib/context/Cart";
import getProductsById from "../lib/graphql/queries/getProductsById";

export default function Cart() {
    const { items } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const hasProducts = Object.keys(items).length;

    useEffect(() => {
        if (!hasProducts) return;

    graphql.request(getProductsById, { 
        ids: Object.keys(items),
    })
        .then((data) => { setProducts(data.products);
    })
    .catch((err) => console.log(err));
},[JSON.stringify(products)]);



    return (
        <Box>
            <Text>Cart</Text>
            <Divider my={4} />
            <Box>
                <Text>Cart Items</Text>
                </Box>
        </Box>
    )
}