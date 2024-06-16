import React from "react";import {
    Avatar,
    Box,
    Button,
    CardHeader,
    Center,
    Flex,
    HStack,
    Heading,
    List,
    ListItem,
    Spacer,
    Text,
    Show,
    Hide,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Select,Image, InputGroup, InputLeftElement,Input,InputRightElement,SimpleGrid,Divider,Card, CardBody,VStack, CardFooter
  } from "@chakra-ui/react";

  import pro6 from "../Assets/product-6.jpeg";
import { useDispatch, useSelector } from "react-redux";



const TopProducts = ()=>{
  const products = useSelector((state) => state?.products?.products);

    return(
        <>
        <Flex padding='15px 30px 15px 30px;' flexDirection='row'  >
            <Box p='10px'>
                <Text cs='h2' fontWeight={700} fontSize="larger">Top Rated Products</Text>
                <Divider />
                <Box>{
                    
                    products?.slice(1, 4)?.map((item,i) => (

                        <Card w="403px" marginBottom={"10px"}>
                        <CardBody >
                            <HStack textAlign="justify">
                                    <Box size='md' w='50px'><img src={"http://localhost:4000/images/" + item.image} alt={item.name} /></Box>
                                    <Box>
                                        <Text fontSize="14px" color="#9a9898">SKU: A$#-$$328-B</Text>
                                        <Text fontWeight={600} isTruncated>{item.name}</Text>
                                        <Text fontWeight={700}>${item.new_price}.00</Text>
                                    </Box>
                            </HStack>
                        </CardBody>
                        </Card>
                    ))
                    }
                    
                
                    
                   
                </Box>
            </Box>
            <Box p='10px'>
             <Text cs='h2' fontWeight={700} fontSize="larger">Special Offers</Text>
                <Divider />
                <Box>
                {
                    
                    products?.slice(1, 4)?.map((item,i) => (

                        <Card w="403px" marginBottom={"10px"}>
                        <CardBody >
                            <HStack textAlign="justify">
                                    <Box size='md' w='50px'><img src={"http://localhost:4000/images/" + item.image} alt={item.name} /></Box>
                                    <Box>
                                        <Text fontSize="14px" color="#9a9898">SKU: A$#-$$328-B</Text>
                                        <Text fontWeight={600} isTruncated>{item.name}</Text>
                                        <Text fontWeight={700}>${item.new_price}.00</Text>
                                    </Box>
                            </HStack>
                        </CardBody>
                        </Card>
                    ))
                    }
                </Box>
            </Box>
            <Box p='10px'>
                <Text cs='h2' fontWeight={700} fontSize="larger">Bestsellers</Text>
                <Divider />
                <Box>
                {
                    
                    products?.slice(1, 4)?.map((item,i) => (

                        <Card w="403px" marginBottom={"10px"}>
                        <CardBody >
                            <HStack textAlign="justify">
                                    <Box size='md' w='50px'><img src={"http://localhost:4000/images/" + item.image} alt={item.name} /></Box>
                                    <Box>
                                        <Text fontSize="14px" color="#9a9898">SKU: A$#-$$328-B</Text>
                                        <Text fontWeight={600} isTruncated>{item.name}</Text>
                                        <Text fontWeight={700}>${item.new_price}.00</Text>
                                    </Box>
                            </HStack>
                        </CardBody>
                        </Card>
                    ))
                    }
                </Box>
            </Box>
        </Flex>
        </>
    )
}

export default TopProducts;