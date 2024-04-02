import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

function RightSection({ContactSec,scrollToSection}) {


  return (
    <Box w={{base:"90%",lg:"25%"}} p={"35px 15px"} bg={"#f8f9fa"} m={"auto"} display={"flex"} flexDirection={"column"} gap={"10px"}>
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>Let's talk everything about anti-virus</Text>
      </Box>
      <Box>
        <Text fontSize={"15px"} fontWeight={400}>Help protect your personal information with anti-virus where you get all-in-one protection, including a Secure VPN with bank grade encryption and device security including anti-virus, SafeCam for PC and more</Text>
      </Box>
    </Box>
  );
}

export default RightSection;
