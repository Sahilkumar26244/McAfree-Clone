import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function BestThings({AboutSec}) {
  return (
    <div ref={AboutSec} >
      <Box bg={"#738e9b"} p={{base:"20px",lg:"100px 50px"}}>
        <Flex w={{ base: "90%", lg: "1250px" }} m={"auto"} bg={"white"} p={{base:"20px",lg:"50px"}} gap={"40px"} direction={{base:"column",lg:"row"}}>
          <Box w={{base:"100%",lg:"50%"}}>
            <Image src="https://res.cloudinary.com/dmzzzl5jj/image/upload/v1712145581/jason-goodman-Oalh2MojUuk-unsplash_wyklfn.jpg" />
          </Box>
          <Box w={{base:"100%",lg:"50%"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"} >
                <Box>
                    <Text fontSize={{base:"15px",lg:"20px"}} textAlign={{base:"center",lg:"left"}} fontWeight={700}>Finding The Best Antivirus</Text>
                </Box>
                <Box fontSize={{base:"13px",lg:"15px"}} fontWeight={600} textAlign={{base:"justify",lg:"left"}} >
                    We’ve spent hours researching the most reputable antivirus testing
                    labs, compiling all the virus and malware detection data we could
                    find. AV Comparatives and AV Test have proven to be reliable
                    sources, but our research didn’t stop there. We’ve also studies
                    countless white papers and articles published by groups and
                    institutions like The Anti-Malware Testing Standard Organization,
                    PcMag, Google's Project Zero, Ars Technica, to name just a few.
                    This approach allowed us to identify the key technical components
                    and requirements of antivirus software and attribute a detection
                    score to each solution.
                </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default BestThings;
