import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <div>
      <Box bg={"#bababa"} display={"flex"} flexDirection={"column"} gap={"20px"} p={"50px"} color={"#810101"} fontWeight={600}>
        <Flex w={{base:"100%",lg:"55%"}} m={"auto"} justifyContent={"space-between"} direction={{base:"column",lg:"row"}}>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>Home</Text>
          </div>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>About Us</Text>
          </div>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>Contact Us</Text>
          </div>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>Terms and Conditions</Text>
          </div>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>Privacy Policy</Text>
          </div>
          <div class="hvr-grow" cursor={"pointer"}>
            <Text>Desclaimer</Text>
          </div>
        </Flex>
        <Box>
          <Text textAlign={"center"}>© Copyright 2024. All Rights Reserved.</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer