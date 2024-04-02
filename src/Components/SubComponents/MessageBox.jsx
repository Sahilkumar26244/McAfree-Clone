import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';


function MessageBox() {

    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set loading state to true
    setIsLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      // Set loading state to false after 8 seconds
      setIsLoading(false);
    }, 8000);
  };
  

  return (
    <Box w={{ base: "90%", lg: "70%" }} m={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box w={"100%"}  bg={"#f8f9fa"} border={"1px solid lightgrey"} borderRadius={"5px"} p={"30px 20px 30px 20px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleSubmit}>
          <Box>
            <Text>Your Name</Text>
            <Input placeholder='Name' required={true} name="username" borderRadius={"0px"} />
          </Box>
          <Box>
            <Text>Your Email</Text>
            <Input placeholder='Email' required={true} name="email" type="email" borderRadius={"0px"} />
          </Box>
          <Box>
            <Text>Phone</Text>
            <Input placeholder='Phone' required={true} name="phone" type="tel" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" borderRadius={"0px"} />
          </Box>
          <Box>
            <Text>Product Key</Text>
            <Input placeholder='Product Key' required={true} name="message" borderRadius={"0px"} />
          </Box>
          <Box>
            <Button isLoading={isLoading} type='submit' textTransform={"uppercase"} color={"white"} bg={"#810101"} _hover={{bg:"black"}}>Submit</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default MessageBox;
