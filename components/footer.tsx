import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider, chakra,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  
const Footer = () => {
    return (
<Flex
  w="full"
  bg="#edf3f8"
  _dark={{
    bgColor: "#538781",
  }}
  bottom={0}
  zIndex={1}
  p={50}
  alignItems="center"
  justifyContent="center"
>
  <Flex
    w="full"
    as="footer"
    flexDir={{
      base: "column",
      sm: "row",
    }}
    align="center"
    justify="space-between"
    px="6"
    py="4"
 
  >
    <chakra.a
      href="#"
      fontSize="xl"
      fontWeight="bold"
      color="gray.600"
      _dark={{
        color: "white",
        _hover: {
          color: "gray.300",
        },
      }}
      _hover={{
        color: "gray.700",
      }}
    >
      Acapulco hogar
    </chakra.a>

    <chakra.p
      textAlign={"center"}
      py={{
        base: "2",
        sm: "0",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
    >
      Made by Augusto Torres. All rights reserved.
    </chakra.p>

    <Flex mx="-2">
      <chakra.a
        href="https://www.instagram.com/_augustorress/"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Instagram"
      >
       <FaInstagram/>
      </chakra.a>

      <chakra.a
        href="https://www.behance.net/augustotorress"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="Behance"
      >
        <FaBehance/>
      </chakra.a>

      <chakra.a
        href="https://api.whatsapp.com/send/?phone=5491122503326&type=phone_number&app_absent=0"
        mx="2"
        color="gray.600"
        _dark={{
          color: "gray.300",
          _hover: {
            color: "gray.400",
          },
        }}
        _hover={{
          color: "gray.500",
        }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp/>
      </chakra.a>
    </Flex>
  </Flex>
</Flex>

    );
  };
  
  export default Footer;