import graphql from "../../lib/graphql";
import getAllProducts from "../../lib/graphql/queries/getAllProducts";
import GetProductBySlug from "../../lib/graphql/queries/getProductBySlug";
import { Grid, Box, Image, Text, Button, Flex, Select, Divider } from "@chakra-ui/react";
import { useState, useContext } from "react";

export async function getStaticProps({params}) {
    const { products } = await graphql.request(GetProductBySlug,
        { slug: params.slug, });
return {
    props: {
    product: products[0],
    },
    };
}
export async function getStaticPaths() {
    const { products } = await graphql.request(getAllProducts);
    return {
        paths: products.map((product) => ({
        params: {
            slug: product.slug,
        },
        })),
        fallback: false,
    };
}
export default function ProductPage({product}) {
    const [quantity, setQuantity] = useState(0);
    // const [items, setItems] = useContext(CartContext);

    function addToCart(){}


return (
    <Flex>
        <Image src={product.images[0].url}/>
        <Box>
            <Text>{product.name}</Text>
            <Text textColor="gray.700">{product.price/100} PLN</Text>
            <Text textColor="gray.700">{product.description}</Text>
            <Divider my={3}/>
            <Grid gridTemplateColumns='repeat(2, 1fr)' gap={5}>
                <Select placeholder="Select quantity"/>
                <Button onClick={addToCart}>Add to cart
                </Button>
            </Grid>
        </Box>
    </Flex>
);
}
