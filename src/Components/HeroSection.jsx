import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function HeroSection() {
  return (
    <div>
        <Box bg={"rgb(216,250,255)"} p={{base:"100px 0px",lg:"150px 50px 100px 50px"}}>
            <Flex w={{base:"90%",lg:"1250px"}} m={"auto"} direction={{base:"column",lg:"row"}} gap={"50px"}>
                <Box w={{base:"100%",lg:"55%"}} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
                        <Box>
                            <Text textAlign={{base:"center",lg:"left"}} fontSize={{base:"20px",lg:"40px"}} fontWeight={700}>Activate The Fastest Security Solutions of 2024</Text>
                        </Box>
                        <Box>
                            <Text textAlign={{base:"center",lg:"left"}} fontSize={{base:"12px",lg:"15px"}} fontWeight={700}>Compare The Best Antivirus Solutions For Your Devices</Text>
                        </Box>
                        <Box>
                            <Text textAlign={{base:"center",lg:"left"}} fontSize={{base:"13px",lg:"16px"}} fontWeight={500}>There are quite a few things to consider when looking for an antivirus program. To begin, you should prioritize effectiveness and accuracy combined. With a little bit of research, we are confident that you’ll find the solution with the virus scanning speed you’re looking for.</Text>
                        </Box>
                    </Box>
                </Box>
                <Box w={{base:"100%",lg:"45%"}}>
                    <Box>
                        <Image src='https://avpro.searchcloud.store/assets/images/sgv-hero-image-bitdefender.jpg' />
                    </Box>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default HeroSection