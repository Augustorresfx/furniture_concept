import * as React from "react";
import Link from "next/link";
import {Button, Flex, Grid, HStack, Stack, Text} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, CloseButton
} from '@chakra-ui/react'
import {Product} from "../types";
import {parseCurrency} from "../../utils/currency";
import {
  List, Image,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import axios  from 'axios';
import{ motion, AnimatePresence } from 'framer-motion'

import {
  Box,
  Center,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
interface Props {
  products: Product[];
}


const StoreScreen: React.FC<Props> = ({products}) => {
  
  const computacion = products.filter((p) => p.category === "computacion");
  const celulares = products.filter((p) => p.category === "celulares");
  const televisores = products.filter((p) => p.category === "tv");
  const sillas = products.filter((p) => p.category === "sillas");

  const [selectedImage, setSelectedImage] = React.useState<String>("");
  const [isCartOpen, toggleCart] = React.useState<boolean>(false)
  const [cart, setCart] = React.useState<Product[]>([]);
  const total = React.useMemo(
    () => parseCurrency(cart.reduce((total, product) => total + product.price * product.quantity, 0)),
    [cart],
    );
  const text = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(`* ${product.title} x ${product.quantity} - ${parseCurrency(product.price * product.quantity )}\n`),
          ``,
        )
        .concat(
          `\nTotal: ${total}`,
        ),
    [cart, total],
  );

  function handleRemoveFromCart(index: number) {
    setCart(cart => cart.filter((_, _index) => _index != index));
  }

function handleAddToCart(product: Product) {
  setCart(cart => {
    const isInCart = cart.some(item => item.id == product.id) 
    if (isInCart) {
      return cart.map(item => item.id === product.id ? 
        {
        ...item,
        quantity: item.quantity + 1
      }
      : item,
      );
    }

    return cart.concat({...product, quantity: 1})
  });
};

  return (<>
  <Box>
    <Stack spacing={0}>
      {products.length ? (
        <section id="categorias">  <section id="sillas">
        <Text fontSize="2xl" fontWeight="bold">Sillas</Text>
        
        {sillas.map((product) => (
          
          
        
          <Center py={12}>
    <Stack w="380px" h="500px" spacing={3} padding={4} borderRadius="md" >
 
 <Stack spacing={1}>
 <Box
   role={'group'}
   p={6}
   maxW={'330px'}
   w={'full'}
   boxShadow={'2xl'}
   rounded={'lg'}
   pos={'relative'}
   zIndex={-1}>
     
   <Box
     rounded={'lg'}
     mt={-12}
     pos={'relative'}
     height={'230px'}
     _after={{
       transition: 'all .3s ease',
       content: '""',
       w: 'full',
       h: 'full',
       pos: 'absolute',
       top: 5,
       left: 0,
       backgroundImage: `url(${product.image})`,
       filter: 'blur(15px)',
       zIndex: -1,
     }}
     _groupHover={{
       _after: {
         filter: 'blur(20px)',
       },
     }}>
     <Image
       rounded={'lg'}
       height={230}
       width={282}
       objectFit={'cover'}
       src={product.image}
     />
   </Box>
   <Stack pt={10} align={'center'}>

     <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
       {product.title}
     </Heading>
     <Stack direction={'row'} align={'center'}>
       <Text fontWeight={800} fontSize={'xl'}>
         ${product.price}
       </Text>
       <Text textDecoration={'line-through'} color={'gray.600'}>
         ${product.preprice}
       </Text>

     </Stack>
   </Stack>
</Box>
<Box >
<Button  width="330px" size="lg"onClick={() => handleAddToCart(product)} colorScheme="blue">
Agregar
</Button>
</Box>
</Stack>

</Stack>
 
</Center>
                
            ))}
       </section>
       
         <section id="computacion">
         <Text fontSize="2xl" fontWeight="bold">Computacion</Text>
    
         {computacion.map((product) => (
           
 <Center py={12}>
    <Stack w="380px" h="500px" spacing={3} padding={4} borderRadius="md" key={product.id}>
 
 <Stack spacing={1}>
 <Box
   role={'group'}
   p={6}
   maxW={'330px'}
   w={'full'}
   boxShadow={'2xl'}
   rounded={'lg'}
   pos={'relative'}
   zIndex={-1}>
     
   <Box
     rounded={'lg'}
     mt={-12}
     pos={'relative'}
     height={'230px'}
     _after={{
       transition: 'all .3s ease',
       content: '""',
       w: 'full',
       h: 'full',
       pos: 'absolute',
       top: 5,
       left: 0,
       backgroundImage: `url(${product.image})`,
       filter: 'blur(15px)',
       zIndex: -1,
     }}
     _groupHover={{
       _after: {
         filter: 'blur(20px)',
       },
     }}>
     <Image
       rounded={'lg'}
       height={230}
       width={282}
       objectFit={'cover'}
       src={product.image}
     />
   </Box>
   <Stack pt={10} align={'center'}>

     <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
       {product.title}
     </Heading>
     <Stack direction={'row'} align={'center'}>
       <Text fontWeight={800} fontSize={'xl'}>
         ${product.price}
       </Text>
       <Text textDecoration={'line-through'} color={'gray.600'}>
         ${product.preprice}
       </Text>

     </Stack>
   </Stack>
</Box>
<Box >
<Button  width="330px" size="lg"onClick={() => handleAddToCart(product)} colorScheme="blue">
Agregar
</Button>
</Box>
</Stack>

</Stack>
 
</Center>

            
             ))}
         </section>
         <section id="celulares">
         <Text fontSize="2xl" fontWeight="bold">Celulares</Text>
         {celulares.map((product) => (
          <Center py={12}>
          <Stack w="360px" h="500px" spacing={3} padding={4} borderRadius="md" key={product.id}>
       
       <Stack spacing={1}>
       <Box
         role={'group'}
         p={6}
         maxW={'330px'}
         w={'full'}
         boxShadow={'2xl'}
         rounded={'lg'}
         pos={'relative'}
         zIndex={-1}>
           
         <Box
           rounded={'lg'}
           mt={-12}
           pos={'relative'}
           height={'230px'}
           _after={{
             transition: 'all .3s ease',
             content: '""',
             w: 'full',
             h: 'full',
             pos: 'absolute',
             top: 5,
             left: 0,
             backgroundImage: `url(${product.image})`,
             filter: 'blur(15px)',
             zIndex: -1,
           }}
           _groupHover={{
             _after: {
               filter: 'blur(20px)',
             },
           }}>
           <Image
             rounded={'lg'}
             height={230}
             width={282}
             objectFit={'cover'}
             src={product.image}
           />
         </Box>
         <Stack pt={10} align={'center'}>
      
           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {product.title}
           </Heading>
           <Stack direction={'row'} align={'center'}>
             <Text fontWeight={800} fontSize={'xl'}>
               ${product.price}
             </Text>
             <Text textDecoration={'line-through'} color={'gray.600'}>
               ${product.preprice}
             </Text>
      
           </Stack>
         </Stack>
      </Box>
      <Box >
      <Button  width="330px" size="lg"onClick={() => handleAddToCart(product)} colorScheme="blue">
      Agregar
      </Button>
      </Box>
      </Stack>
      
      </Stack>
       
      </Center>

            
             ))}
         </section>
         <section id="televisores">
         <Text fontSize="2xl" fontWeight="bold">Televisores</Text>

         {televisores.map((product) => (
         <Center py={12}>
         <Stack w="360px" h="500px" spacing={3} padding={4} borderRadius="md" key={product.id}>
      
      <Stack spacing={1}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={-1}>
          
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={product.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
     
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {product.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${product.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ${product.preprice}
            </Text>
     
          </Stack>
        </Stack>
     </Box>
     <Box >
     <Button  width="330px" size="md"onClick={() => handleAddToCart(product)} colorScheme="blue">
     Agregar
     </Button>
     </Box>
     </Stack>
     
     </Stack>
      
     </Center>
            
             ))}
         </section>
         </section>
        
      ) : (
        <Text color="gray.500" fontSize="lg" margin="auto">
          No hay productos
        </Text>
      )}
      <AnimatePresence>
      {Boolean(cart.length) && (
        <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky">
          <Button
            size="lg"
          
            onClick={() => toggleCart(true)}
            width="fit-content"
            zIndex={1}
            leftIcon={<Image src="https://icongr.am/feather/shopping-cart.svg?size=16&color=ffffff"/>}
          >
            Ver pedido ({cart.length} productos)
          </Button>
        </Flex>
      )}</AnimatePresence>
    </Stack>
      <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={() => toggleCart(false)}
      >
        <DrawerOverlay minHeight="2000px" minWidth="container.lg" />
        <DrawerContent paddingY={6}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Stack>
              <Text>
                Tu pedido
              </Text>
         
            </Stack>
          </DrawerHeader>

          <DrawerBody>
          <List spacing={4}>
            {cart.map((product, index) => (
            <ListItem key={product.id}>
              <HStack justifyContent="space-between">
                <Text fontWeight="500" color="gray.400">
                  Producto
                </Text>
                <Text fontWeight="500" color="gray.400">
                  Precio
                </Text>
                <Text fontWeight="500" color="gray.400">
                  Cantidad
                </Text>
              </HStack>
              <Stack alignItems="center" direction="row" justifyContent="center">
                
              <HStack justifyContent="space-between">
                <Text fontWeight="500">{product.title} {product.quantity > 1 ? ` (x${product.quantity})` : ``}</Text>
              <HStack spacing={3}>
                <Text fontWeight="500">{parseCurrency(product.price * product.quantity)}</Text>
              </HStack>
              <HStack>
                <Text>
                  {product.quantity}
                </Text>
                <CloseButton size="xs" colorScheme="red" onClick={() => handleRemoveFromCart(index)}>
                  
                </CloseButton>
              </HStack>
              </HStack>
              </Stack>
            </ListItem>
            ))}
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Link href={`https://wa.me/5491132552373?text=${encodeURIComponent(text)}`}>
            <Button
            
            colorScheme="whatsapp"
          
            width="100%"
            height="100%"
            size="xl"
            leftIcon={<Image src="https://icongr.am/jam/whatsapp.svg?size=24&color=000000"/>}
          >
            Completar pedido ({total})
          </Button>
          </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <AnimatePresence>
      {selectedImage && 
      <Flex zIndex={1} as={motion.div} layoutId={`${selectedImage}`} position="absolute" top={0} left={0} maxWidth="100%"  >
        
        <Image key="image" src={`${selectedImage}`} onClick={() => setSelectedImage("") }/>
        </Flex>}
    </AnimatePresence>
    </Box>
    </>
  );
};

export default StoreScreen;
