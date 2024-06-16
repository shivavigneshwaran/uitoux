import React from "react";
import slide1 from "../Assets/slide-1.jpeg";

import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Text,
  StackDivider,
  VStack,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      className="hero"
      m={"30px 100px"}
      backgroundImage={slide1}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <SimpleGrid
        templateColumns={{
          base: "repeat(2, minmax(100px, 1fr))",
          md: "repeat(2, minmax(150px, 1fr))",
          lg: "repeat(2, minmax(200px, 1fr))",
          xl: "repeat(2, minmax(250px, 1fr))",
        }}
        gap="10px"
        p="26px 84px"
      >
        <Box
          display="flex"
          justifyContent={{
            base: "none",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          alignItems="center"
        >
          <Stack
            p="10px"
            position="relative"
            top={{ base: "10px", md: "30px", lg: "30px", xl: "0px" }}
            marginRight="271px"
            direction="column"
            
            
          >
            <Heading m="0" textTransform="uppercase" color="#23262f" bg="#fae027" w="159px">
              
                30% OFF
            </Heading>
            <Text m="0" fontSize="21px" lineHeight="1.2" fontWeight="700" textAlign={"justify"}>
                When Buying Parts With Installation
              </Text>
              <Text color={"#777e90"} textAlign={"justify"}>
                Installation of parts in the services of our partners
              </Text>
              <Button
                w="127px"
                h="41px"
                marginTop="20px"
                bg="rgb(7 219 150)"
                color="white"
              >
                Shop Now
              </Button>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Hero;
