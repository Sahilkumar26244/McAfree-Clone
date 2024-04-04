import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import hero from "../assets/hero1.svg"

function HeroSection({ HomeSec }) {
  return (
    <div ref={HomeSec}>
      <Box bg={"rgb(175,240,250)"} p={{ base: "100px 0px", lg: "200px 50px 100px 50px" }}>
        <Flex w={{ base: "90%", lg: "1250px" }} m={"auto"} direction={{ base: "column", lg: "row" }} gap={"50px"}>
          <Box w={{ base: "100%", lg: "55%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
              <Box>
                <Text textAlign={{ base: "center", lg: "left" }} fontSize={{ base: "20px", lg: "40px" }} fontWeight={700}>Unlock the Speediest Security Solutions for 2024</Text>
              </Box>
              <Box>
                <Text textAlign={{ base: "center", lg: "left" }} fontSize={{ base: "12px", lg: "15px" }} fontWeight={700}>Evaluate Top Antivirus Solutions for Optimal Device Security</Text>
              </Box>
              <Box>
                <Text textAlign={{ base: "center", lg: "left" }} fontSize={{ base: "13px", lg: "16px" }} fontWeight={500}>Key Considerations in Choosing an Antivirus: Prioritize Effectiveness and Accuracy. Research to Find the Ideal Scanning Speed. Evaluate Top Antivirus Solutions for Optimal Device Security</Text>
              </Box>
            </Box>
          </Box>
          <Box w={{ base: "100%", lg: "45%" }} display={"flex"} justifyContent={{ base: "center", lg: "flex-end" }}>
            {/* Add a Box component with CSS filter property for shadow effect */}
            <Box w={"60%"} position="relative">
              <Image src={hero} w={"100%"} h={"100%"} objectFit={"contain"} style={{ filter: "drop-shadow(-10px 0px 20px rgba(0, 0, 0, 0.3))" }} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default HeroSection
