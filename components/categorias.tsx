import React from "react";

import { Box, Button, chakra, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const Categorias = () => {
  return (
    <Flex
    bgGradient='linear(to-br, #29352E, #538781)'
      p={4}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        shadow="xl"
       
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              lineHeight={{ md: "shorter" }}
              
            >
              Sillas estilo acapulco
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              fontSize={{ md: "lg" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim in sem pulvinar tincidunt nec ut dui. Nullam felis sem, tempus quis sapien a, suscipit tincidunt tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor turpis in turpis ornare tempor.
            </chakra.p>
            <Button
                   w={{ base: "full", sm: "auto" }}
                   variant="outline"
                   borderColor={"gray.300"}
                   size="lg"
     
                   _hover={{ color: "#90C8AC", _dark: { bg: "green.100" } }}
                   color="gray.300"
                   as="a"
            >
              Ver sillas
            </Button>
          </Box>
         <Image ml={2} maxH={"330px"} src="https://i.postimg.cc/YSmm0JJy/Png-Item-6102538.png"/>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              lineHeight={{ md: "shorter" }}
            >
              Mesas de jardin
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              fontSize={{ md: "lg" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim in sem pulvinar tincidunt nec ut dui. Nullam felis sem, tempus quis sapien a, suscipit tincidunt tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              variant="outline"
              borderColor={"gray.300"}
              size="lg"

              _hover={{ color: "#90C8AC", _dark: { bg: "green.100" } }}
              color="gray.300"
              as="a"
            >
              Ver mesas
            </Button>
          </Box>
         <Image maxH={"400px"} src="https://i.postimg.cc/BnDHRnrh/kisspng-table-acapulco-chair-furniture-5ae534f0c47024-8059983715249707368046.png"/>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              lineHeight={{ md: "shorter" }}
              
            >
              Combos sillas + mesa
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.300"
              _dark={{ color: "gray.300" }}
              fontSize={{ md: "lg" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim in sem pulvinar tincidunt nec ut dui. Nullam felis sem, tempus quis sapien a, suscipit tincidunt tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor turpis in turpis ornare tempor.
            </chakra.p>
            <Button
                   w={{ base: "full", sm: "auto" }}
                   variant="outline"
                   borderColor={"gray.300"}
                   size="lg"
     
                   _hover={{ color: "#90C8AC", _dark: { bg: "green.100" } }}
                   color="gray.300"
                   as="a"
            >
              Ver combos
            </Button>
          </Box>
         <Image ml={2} maxH={"300px"} maxW={"300px"} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/565/200/products/combo_sillon_acapulcox2mesa_lacanreborde1-2f47e9dc729ffc1e6516186015770916-1024-1024.png"/>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Categorias