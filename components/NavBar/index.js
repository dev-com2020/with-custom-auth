import { useContext } from "react";
import Link from "next/link";
import { Box, Flex, Text, Button} from "@chakra-ui/react";
import CartContext from "../../lib/context/Cart";
import { MdShoppingCart,MdTwoWheeler } from "react-icons/md";

export default function NavBar() {
    const {items} = useContext(CartContext);

    const itemsCount = Object.values(items).reduce((total, value) => total + value, 0);

    return (
        <Box bgColor='gray.800' color='white' p='4' pos="fixed" w='100%'>
            <Flex maxW='70vw' m='auto' justifyContent='space-between' alignItems='center'>
                <Link href='/' passHref>
                    <Text as='a' fontSize='2xl' fontWeight='bold'><MdTwoWheeler/>E-Commerce</Text>
                </Link>
                <Box>
                <Link href='/cart' as='a' display='flex' alignItems='center'>
                    <Button>
                    <MdShoppingCart size='1.5em'/>
                    <Text ml='2' fontSize='lg'>{itemsCount}</Text>
                    </Button>
                </Link>
                </Box>
            </Flex>
        </Box>
    );
}
