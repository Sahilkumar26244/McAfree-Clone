import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

function RightSection({ContactSec,scrollToSection}) {

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/65af7e128d261e1b5f56b3af/1hkqo8uot';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


  return (
    <Box w={{base:"90%",lg:"25%"}} p={"15px"} bg={"#f8f9fa"} m={"auto"}>
      <Box>
      <Box bg={"#810101"} p={"10px 30px 10px 30px"}>
        <Text
          textAlign={"center"}
          color={"white"}
          fontWeight={500}
          fontSize={"28px"}
          lineHeight={"34px"}
        >
          Getting Help Is Easy
        </Text>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"15px"} p={"15px"}>
        <Text textAlign={"center"} fontWeight={600} fontSize={"16px"} lineHeight={"24px"}>Instant Repair Services Required? Have questions? Geeks is available 24/7</Text>
        <Button colorScheme="green" variant={"outline"} onClick={() => {
        if (window.Tawk_API) {
          window.Tawk_API.toggle();
        }
      }}>Live Chat With Agents</Button>
      </Box>
      <Box borderTop={"1px solid"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"15px"} p={"15px"}>
        <Text fontWeight={700} fontSize={"20px"} lineHeight={"24px"} cursor={"pointer"}>In-Store</Text>
        <Text textAlign={"center"} fontWeight={400} fontSize={"13px"} lineHeight={"19px"}>Contact the geeks team to get the remote support for your devices online.</Text>
        <Button colorScheme="green" variant={"outline"} onClick={() => scrollToSection(ContactSec)}>Book an Appointment</Button>
      </Box>
      <Box borderTop={"1px solid"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"15px"} p={"15px"}>
        <Text fontWeight={700} fontSize={"20px"} lineHeight={"24px"} cursor={"pointer"}>In Home</Text>
        <Text textAlign={"center"} fontWeight={400} fontSize={"13px"} lineHeight={"19px"}>Get setup, tune-up, installation and diagnostic services for your products.</Text>
      </Box>
      </Box>
    </Box>
  );
}

export default RightSection;
