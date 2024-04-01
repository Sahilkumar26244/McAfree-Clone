import { Avatar, Box, Circle, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from "react-elastic-carousel";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosSearch,
    IoLogoGoogleplus,
  } from "react-icons/io";

function Testimonials() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 320, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 960, itemsToShow: 1},
        {width:1200 , itemsToShow:1}
      ];
    
      const carouselArrowStyles = {
        position: "absolute",
        top: "50%",
        width: "30px",
        height: "20px",
        fontSize: "33px",
        fontWeight: "700",
        zIndex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
        color: "grey",
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.2s ease-in-out",
        _hover: {
          backgroundColor: "blue",
          color: "red",
        },
        display: "flex",
        visibility: "visible",
      };
    
      const testimonials = [
        {
            image:"https://avpro.searchcloud.store/assets/images/mbr-2.jpeg",
          description:"The great thing about geek is that there is no deductible for replacing or repairing my electronics.",
          owner:"— Marry G., WA",
          user:"USER"
        },
        {
            image:"https://avpro.searchcloud.store/assets/images/mbr-2.jpeg",
          description:"Geeks is the main reason I purchase tech products online. Every time I've had to utilize my GeekcareProtection Plans, it has been a positive experience..",
          owner:"— Scott R., TX",
          user:"USER"
        },
        {
            image:"https://avpro.searchcloud.store/assets/images/mbr-2.jpeg",
          description:"Geek's zero deductibles redefine tech shopping. Hassle-free repairs and replacements make them my go-to choice. Unbeatable service and satisfaction!",
          owner:"— Pierre Laurent",
          user:"USER"
        },
        {
            image:"https://avpro.searchcloud.store/assets/images/mbr-2.jpeg",
          description:"Geek is my tech haven. No deductibles mean stress-free purchases. Their reliable service and positive experiences make them my trusted companion.",
          owner:"— Elena Rodriguez",
          user:"USER"
        },
        {
            image:"https://avpro.searchcloud.store/assets/images/mbr-2.jpeg",
          description:"Geek's commitment shines through zero deductibles. Stress-free repairs and replacements make every encounter positive. Geek is my tech guardian, always delivering satisfaction.",
          owner:"— Hans Schmidt",
          user:"USER"
        }
      ]


  return (
    <div>
        <Box bg={"#ffb18a"} p={{base:"30px 10px",lg:"50px"}}>
        <Box w={{base:"90%",lg:"1250px"}} m={"auto"} >
            <Box>
                <Text fontSize={{base:"25px",lg:"40px"}} fontWeight={700} textAlign={"center"}>What Our Fantastic Users Say</Text>
            </Box>
            <Flex mt={"20px"} position="relative" >
            <Carousel itemsToShow={1} itemPadding={[0, 10]} breakPoints={breakPoints} pagination={false}   >
              {testimonials.map((e,i) => (
                <>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
                    <Box>
                        <Circle size={"200px"}>
                            <Image src={e.image} w={"100%"} h={"100%"} objectFit={"cover"} borderRadius={"50%"} />
                        </Circle>
                    </Box>
                    <Box>
                        <Text textAlign={"center"}  fontSize={{base:"13px",lg:"16px"}} fontWeight={500}>{e.description}</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text  fontSize={{base:"13px",lg:"16px"}} fontWeight={500}>{e.owner}</Text>
                        <Text  fontSize={{base:"13px",lg:"16px"}} fontWeight={400}>{e.user}</Text>
                    </Box>
                </Box>
                </>
              ))}
            
            </Carousel>
            </Flex>
        </Box>
        </Box>
    </div>
  )
}

export default Testimonials