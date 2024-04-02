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
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031735/mcafee-package_sgfuad.png",
            description:"Voted as the top antivirus software of 2024, this cutting-edge security solution offers unparalleled protection for both computers and mobile devices, ensuring utmost accuracy in safeguarding your digital assets.",
            owner:"McAfee",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031747/avast-package_rxsnnt.png",
            description:"An intelligent, swift, and dependable antivirus solution that minimizes its impact on system performance, providing robust protection for your devices.",
            owner:"Avast",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031749/norton-package_xt5jsm.png",
            description:"High-precision, low-footprint antivirus solution with online backup capabilities.",
            owner:"Norton 360",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031747/bitdefender-package_tg0jvk.png",
            description:"Delivers outstanding virus protection, features an extensive array of capabilities, and maintains minimal impact on system performance.",
            owner:"Bitdefender",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031748/kaspersky-package_vf7cht.png",
            description:"All-encompassing antivirus solution catering to your every security requirement.",
            owner:"Kaspersky",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031748/avira-package_prxpwn.png",
            description:"Award-winning premium antivirus solution suitable for all devices",
            owner:"Avira"
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031749/malwarebytes-premium-1_u2qcor.png",
            description:"High-precision, low-impact antivirus solution with built-in online backup functionality.",
            owner:"Malwarebytes",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712031749/pngwing.com-3_sungba.png",
            description:"Well-rounded security solution boasting powerful antivirus capabilities.",
            owner:"Webroot",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712032141/trend-micro-antivirus-500x500_smr0i0.webp",
            description:"Complete antivirus solution addressing all your security requirements.",
            owner:"Trend Micro",
        },
        {
            image:"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712032141/eset-package_1_rnguul.png",
            description:"Robust security solution featuring potent antivirus capabilities.",
            owner:"ESET",
        },
        
      ]


  return (
    <div>
        <Box bg={"#ffb18a"} p={{base:"30px 10px",lg:"50px"}}>
        <Box w={{base:"90%",lg:"1250px"}} m={"auto"} >
            <Box>
                <Text fontSize={{base:"25px",lg:"40px"}} fontWeight={700} textAlign={"center"}>What Our Fantastic Users Say</Text>
            </Box>
            <Flex mt={"50px"} position="relative" >
            <Carousel itemsToShow={1} itemPadding={[0, 10]} breakPoints={breakPoints} pagination={false}  >
              {testimonials.map((e,i) => (
                <>
                <Box w={"70%"} m={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
                    <Box>
                        <Circle size={"200px"}>
                            <div class="hvr-grow">
                                <Image src={e.image} w={"100%"} h={"100%"} objectFit={"contain"} />
                            </div>
                        </Circle>
                    </Box>
                    <Box>
                        <Text textAlign={"center"}  fontSize={{base:"13px",lg:"16px"}} fontWeight={500}>{e.description}</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text  fontSize={{base:"13px",lg:"22px"}} fontWeight={600}>{e.owner}</Text>
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