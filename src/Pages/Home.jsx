import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import ContactSection from '../Components/ContactSection'
import ActivateButton from '../Components/SubComponents/ActivateButton'
import Testimonials from '../Components/Testimonials'
import BestThings from '../Components/BestThings'
import { Box, Button, Input, Text, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function Home({HomeSec,AboutSec,ContactSec,scrollToSection}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <div>
      <Navbar HomeSec={HomeSec} AboutSec={AboutSec} ContactSec={ContactSec} scrollToSection={scrollToSection} onOpen={onOpen} />
      <HeroSection HomeSec={HomeSec} />
      <ActivateButton onOpen={onOpen} />
      <Testimonials/>
      <BestThings AboutSec={AboutSec} />
      <ContactSection ContactSec={ContactSec} />
      <Footer/>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button textTransform={"uppercase"} color={"white"} bg={"#ed1b24"} _hover={{bg:"black"}} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Home