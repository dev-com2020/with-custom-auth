import Link from "next/link";
import { Box, Flex, Text} from "@chakra-ui/react";
import {MdTwoWheeler} from "react-icons/md";

export default function Footer() {
   
    return (
        <Box bgColor='gray.600' color='white' p='4'>
            <Flex maxW='70vw' m='auto' justifyContent='space-between' alignItems='center'>
                <Link href='/' passHref>
                    <Text as='a' fontSize='2xl' fontWeight='bold'><MdTwoWheeler/>2023</Text>
                </Link>
            </Flex>
        </Box>
    );
}
