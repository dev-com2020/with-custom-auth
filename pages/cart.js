import { useContext, useEffect,useState } from "react";
import { Box, Flex, Heading, Text, Button, Image, Divider } from "@chakra-ui/react";
import CartContext from "../lib/context/Cart";
import getProductsById from "../lib/graphql/queries/getProductsById";
import graphql from "../lib/graphql";

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

function getTotal() {
    if (!products.length) return 0;
    return Object.keys(items)
    .map((id) =>products.find((product) => product.id === id).price * (items[id] /100))
    .reduce((x,y)=> x + y)
    .toFixed(2);
}

    return (
        <Box>
            <Text>Cart</Text>
            <Divider my={4} />
            <Box>
               {!hasProducts ?(
               <Text>Cart is empty</Text>):(
                <>
                {products.map((product) => (
                    <Flex key={product.id} alignItems='center' my={4}>
                    <Box>
                    <Link href={`/products/${product.slug}`} passHref>
                    <Image src={product.images[0].url} w={24} h={24} />
                    <Text>{product.name}</Text>
                    </Link></Box>
                    </Flex>)
                )}
                <Divider my={4} />
                <Flex justifyContent='space-between' alignItems='center'>
                <Text>Total</Text>
                <Text>{getTotal()} PLN</Text>
                </Flex>
                <Button colorScheme='blue'>Checkout</Button>
                </> 
                )}
            </Box>
        </Box>
    );
}
                  
