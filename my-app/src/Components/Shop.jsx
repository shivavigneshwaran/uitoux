import React,{useContext, useEffect,useState} from "react";
import Hero from "./Hero/Hero";
import { Flex,Box } from "@chakra-ui/react";
import Brand from "./Brand/Brand";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import TopProducts from "./TopProducts/TopProducts";



const Shop = () => {

    return (
    <Box>
        <Flex flexDirection={"column"} justifyContent="space-between">
            <Hero />
            <Brand/>
            <FeatureProducts />
            <TopProducts/>
       </Flex>
    </Box>
    )
}

export default Shop;