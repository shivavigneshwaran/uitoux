import React from "react";


import {
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
  MenuDivider,
  Select,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  SimpleGrid,
  Divider,
  Card,
  CardBody,
  VStack,
  CardFooter,
  IconButton
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import pro1 from "../Assets/product-1.jpeg";
import pro2 from "../Assets/product-2.jpeg";
import pro3 from "../Assets/product-3.jpeg";
import pro4 from "../Assets/product-4.jpeg";
import pro5 from "../Assets/product-5.jpeg";
import cart from "../Assets/svg/cart.svg";

const FeatureProducts = () => {
  const products = useSelector((state) => state?.products?.products);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Flex padding="15px 30px 15px 30px;" flexDirection="column" m={"30px 100px"}>
        <Box w="100%" marginBottom={"12px"}>
          <HStack>
            <Text cs="h2" fontWeight={700} fontSize="larger">Featured Products</Text>
            <Spacer />
            <Button>ALL</Button>
            <Text>Power Tools</Text>
            <Text>Hand Tools</Text>
            <Text>Plumbing</Text>
            <IconButton
              icon={<ArrowBackIcon />}
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous"
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              onClick={() => sliderRef.current.slickNext()}
              aria-label="Next"
            />
          </HStack>
        </Box>
        <Divider opacity="5" color="gray" />
        <Box marginTop={"29px"}>
          <Slider ref={sliderRef} {...settings}>
            {Array.isArray(products) && products.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <Heading size="md">
                    <img src={"http://localhost:4000/images/" + item.image} alt={item.name} />
                  </Heading>
                </CardHeader>
                <CardBody height="100px" textAlign="justify" overflow="hidden">
                <Text fontSize="14px" color="#9a9898">SKU: A$#-$$328-B</Text>
                <Text fontWeight={600} isTruncated>{item.name}</Text>
              </CardBody>
                <CardFooter>
                  <Text fontWeight={700}>${item.new_price}.00</Text>
                  <Spacer />
                  <Button>
                    <img src={cart} alt="cart" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Slider>
        </Box>
      </Flex>
    </>
  );
}

export default FeatureProducts;
