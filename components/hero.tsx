import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import Link from "next/link";
import theme from "../styles/theme";

const Hero = () => {
    return (
        <Box
        w="full"
        zIndex={0}
        h="container.md"
        backgroundImage="url(https://i.postimg.cc/NGTJ7QMx/acapulco-silla.jpg)"
        bgPos="center"
        bgSize="cover"
      >
        <Navbar/>
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          maxH={688}
          bg="blackAlpha.600"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
          <Image w={48} h={48} src="https://i.postimg.cc/HstCzwx3/acapulco-logo.png"/>
            <Heading
              fontSize={["6xl"]}
              
              fontFamily={"tai-heritage"}
              fontWeight="600"
              color="white"
              letterSpacing={"-2px"}
            >
              Renová tu {" "}
              <chakra.span color="#C4DFAA" textDecor="">
                hogar
              </chakra.span>
            </Heading>
            <Link href={'#more'}>
            <Button
            color={'#90C8AC'}
            colorScheme={'green'}
              variant={'outline'}
              textTransform="uppercase"
              w="fit-content"
            >
              Ver categorías
            </Button></Link>
          </Stack>
        </Flex>
      </Box>
    ) 
}

export default Hero