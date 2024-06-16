import { Box, Grid, GridItem, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import brand1 from '../Assets/brand-1.png';

const Brand = () => {
  const brands = useSelector((state) => state?.products?.brands);


  
  const getBorderColor = (textColor) => {
    return textColor; 
  };

  return (
    <>
      <Grid
        className="hero"
        m={"30px 100px"}
        border={`1px solid ${getBorderColor('rgb(202, 202, 202)')}`}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(8, 1fr)'
      >
        {Array.isArray(brands) && brands.map((item, i) => (
          <GridItem
            key={i}
            borderTop={`1px solid ${getBorderColor('rgb(202, 202, 202)')}`}
            borderLeft={`1px solid ${getBorderColor('rgb(202, 202, 202)')}`}
            h="100px"
            w="143px"
            _last={{ borderRight: `1px solid ${getBorderColor('rgb(202, 202, 202)')}`, borderBottom: `1px solid ${getBorderColor('rgb(202, 202, 202)')}` }}
            _nth-child={{ borderRight: `1px solid ${getBorderColor('rgb(202, 202, 202)')}` }} // For the last column in each row
            _nth-last-of-type={{ borderBottom: `1px solid ${getBorderColor('rgb(202, 202, 202)')}` }} // For the last row in the grid
          >
            <VStack>
              <Image
                src={"http://localhost:4000/images/" + item.image}
                alt='brand1'
                boxSize='sm'
                h="70px"
                w="70px"
              />
              <Text fontSize={"12px"} color="rgb(202, 202, 202)">{item.name}</Text>
            </VStack>
          </GridItem>
        ))}

      </Grid>
    </>
  );
};

export default Brand;
