import React from "react";
import "./footer.css";
import footer_logo from '../Assets/logo.png';
import insta_icon from '../Assets/instagram_icon_white.png';
import pins_icon from '../Assets/pintester_icon_white.png';
import wp_icon from '../Assets/whatsapp_icon_white.png';
import mastercard from '../Assets/mastercard.png';
import American_Express_logo from '../Assets/American_Express_logo.png';
import visa from '../Assets/visa.png';


import { Link,useNavigate  } from 'react-router-dom';
import { Container,Flex, HStack, ListItem, Stack,Box,Text,List, Spacer, VStack,Input,Button } from "@chakra-ui/react";


const Footer=()=>{
    return (
        <Box as="footer" maxW="100%" bg="rgb(50 50 50)" color="white" fontWeight="600" p="20px">
          <Flex h="362px" w="100%" gap={10} >
            <Box h="360px" flex="2"  p="20px">
                <VStack>

                <Text textAlign={"left"} width={"100%"}>Contact Us</Text>
                <Text textAlign={"left"} fontSize={"15px"} color={"rgb(103 103 103)"}>Hi, we are always open for cooperation and suggestions contact us one of the way bellow </Text>

                </VStack>

                <HStack marginTop={"12px"} justifyContent={"space-between"}>

                 <VStack >
                 <Text textAlign={"left"} width={"100%"} fontSize={"14px"} color={"rgb(103 103 103)"}>Phone Number</Text>
                 <Text textAlign={"left"} width={"100%"} fontSize={"14px"}>08925297807</Text>
                 </VStack>


                 <VStack marginTop={"10px"}>
                 <Text textAlign={"left"} width={"100%"} fontSize={"14px"} color={"rgb(103 103 103)"}>Email Address</Text>
                 <Text textAlign={"left"} width={"100%"} fontSize={"14px"}>careers@uitouxsolutions.com</Text>
                 </VStack>

                 

                 

                </HStack>

                <HStack marginTop={"12px"} justifyContent={"space-between"}>

                <VStack >
                <Text textAlign={"left"} width={"100%"} fontSize={"14px"} color={"rgb(103 103 103)"}>Our Location</Text>
                
                <Text textAlign={"left"} width={"100%"} fontSize={"12px"} lineHeight={1}>102,Athipalayam Rd</Text>
                <Text textAlign={"left"} width={"100%"} fontSize={"12px"}  lineHeight={1}>Ramakrishnapuram</Text>
                <Text textAlign={"left"} width={"100%"} fontSize={"12px"}  lineHeight={1}>ChinnavedamPatti</Text>
                <Text textAlign={"left"} width={"100%"} fontSize={"12px"}  lineHeight={1}>Coimbatore, Tamilnadu</Text>



                </VStack>


                <VStack marginTop={"10px"}>
                <Text textAlign={"left"} width={"100%"} fontSize={"14px"} color={"rgb(103 103 103)"}>Email Address</Text>
                <Text textAlign={"left"} width={"100%"} fontSize={"14px"}>careers@uitouxsolutions.com</Text>
                </VStack>





                </HStack>

             
            </Box>
            <Box h="350px" flex="1"  p="20px">
            <Text textAlign={"left"} width={"100%"}>Information</Text>
            <List>
                        <VStack gap="10px">
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link  to={'/'}>About Us</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Delivery Information</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Privacy Policy</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Brands</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Contact Us</Link></ListItem>

                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Returns</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Site Map</Link></ListItem>
                        </VStack>
                    </List>
            </Box>
            <Box h="350px" flex="1"  p="20px">
             <Text textAlign={"left"} width={"100%"}>My Account</Text>
            <List>
                        <VStack gap="10px" marginTop={"8px"}>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link  to={'/'}>Store Loction</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Order History</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Wish List</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>News Letter</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Special Letters</Link></ListItem>

                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Gift Certificates</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}} width="100%" textAlign={"left"} color="rgb(103 103 103)"><Link to={'/'}>Affilate</Link></ListItem>
                        </VStack>
                    </List>
            </Box>
            <Box h="350px" flex="2"  p="20px">
              <VStack>

            <Text textAlign={"left"} width={"100%"}>News Letter</Text>
            <Text textAlign={"left"} fontSize={"15px"} color={"rgb(103 103 103)"}>Hi, we are always open for cooperation and suggestions contact us one of the way bellow </Text>

            </VStack>
            <HStack w="80%">
        
    
                <Box width="70%">
                
                  <Input placeholder="User@example.com"  size="sm"/>
                
              </Box>
              <Button width="30%" bg="rgb(7 219 150)" color="white" h="34px" fontSize={"small"}>
                
                 Subscribe
              </Button>
            </HStack>
            <VStack marginTop={"20px"}>

            <Text textAlign={"left"} width={"100%"} fontSize={"15px"} color="rgb(103 103 103)" >Follow us on social Networks</Text>

            <HStack width="100%" justifyContent={"left"}><Link to={'/'}><img src={insta_icon} alt="" style={{width:"35px"}}/></Link> <Link to={'/'}><img src={pins_icon} alt="" style={{width:"35px"}}/></Link><Link to={'/'}><img src={wp_icon} alt="" style={{width:"35px"}}/></Link></HStack>
            
            </VStack>
            </Box>

          </Flex>
          <Flex W="100%" h="50px"  bg="rgb(40, 40, 40)" justifyContent={"space-between"}>
                <HStack>

                <Text textAlign={"left"} fontSize={"13px"} p={"12px 159px"}>Powered by  React / Next.js </Text>
                
                </HStack>

                <VStack marginTop={"5px"}  p={"2px 159px"}>

            <HStack width="128px" justifyContent={"left"} >
                <Link to={'/'}><img src={mastercard} alt="" style={{width:"35px"}}/></Link> 
                <Link to={'/'}><img src={American_Express_logo} alt="" style={{width:"27px"}}/></Link>
                <Link to={'/'}><img src={visa} alt="" style={{width:"35px"}}/></Link>
                </HStack>
            
               </VStack>
         </Flex>
        </Box>
        
      );
}

export default Footer;