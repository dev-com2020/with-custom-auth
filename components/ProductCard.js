import Link from 'next/link';
import {Box, Text, Image, Divider} from '@chakra-ui/react';

export default function ProductCard(props) {
    return (
        <Link href={`/products/${props.slug}`} passHref>
            <Box>
                <Image src={props.images[0]?.url} alt={props.name} />
                <Divider my={3}/>
                <Box>
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </Box>
            </Box>
            </Link>
    );
}