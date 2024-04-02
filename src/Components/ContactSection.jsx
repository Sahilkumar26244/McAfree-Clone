import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import MessageBox from "./SubComponents/MessageBox";
import RightSection from "./SubComponents/RightSection";

function ContactSection({ContactSec}) {
  return (
    <div ref={ContactSec}>
      <Box position="relative" h={{ base: "200vh", lg: "110vh" }}>
        <Box
          h={"100%"}
          backgroundImage={`url(${"https://res.cloudinary.com/dmzzzl5jj/image/upload/v1711950906/burst-kUqqaRjJuw0-unsplash_fnqjjd.jpg"})`}
          backgroundPosition={"center"}
          backgroundSize="cover"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgb(242,242,242)"
            opacity={"0.8"}
          ></Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            
            color="black"
            zIndex="1"
            w={{ base: "100%", lg: "1250px" }}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Flex  gap={"20px"} direction={{base:"column",lg:"row"}}>
                <MessageBox/>
                <RightSection/>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ContactSection;
