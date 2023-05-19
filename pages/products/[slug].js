import graphql from "../../lib/graphql";
import getAllProducts from "../../lib/graphql/queries/getAllProducts";
import GetProductBySlug from "../../lib/graphql/queries/getProductBySlug";
import { Grid, Box, Image, Text, Button, Flex, Select, Divider } from "@chakra-ui/react";
import { useState, useContext } from "react";
import CartContext from "../../lib/context/Cart";

export async function getStaticPaths() {
    const { products } = await graphql.request(getAllProducts);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug,
        },
        }));
        return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const { products } = await graphql.request(GetProductBySlug,
        { slug: params.slug, });
return {
    props: {
    product: products[0],
    },
    };
}

function SelectQuantity(props){
    const quantity = [...Array.from({length: 10})];
    return (
        <Select placeholder="Quantity" onChange={(event) => 
        props.onChange(event.target.value)}>
                {quantity.map((_, index) => (
                <option key={index} value={index + 1}>
                    {index + 1}
                </option>                
            ))}
        </Select>
    );
}


export default function ProductPage({product}) {
    const [quantity, setQuantity] = useState(0);
    const {items, setItems} = useContext(CartContext);

    const alreadyInCart = product.id in items;

    function addToCart() {
            setItems({
                ...items,
                [product.id]: quantity,
            });
        }
return (
    <Flex rounded='xl' boxShadow='2xl'w='full'bgColor='white'p='16'>
        <Image src={product.images[0].url}/>
        <Box>
            <Text>{product.name}</Text>
            <Text textColor="blue.500">{product.price/100} PLN</Text>
            <Text textColor="blue.500" fontWeight='bold'>{product.description}</Text>
            <Divider my={3}/>
            <Grid gridTemplateColumns='repeat(2, 1fr)' gap={5}>
                <SelectQuantity onChange={(quantity) => setQuantity(parseInt(quantity))} />
                <Button colorScheme= 'blue' onClick={addToCart}>
                    {alreadyInCart ? 'Aktualizuj': 'Dodaj do koszyka'}
                </Button>
            </Grid>
        </Box>
    </Flex>
);
}

