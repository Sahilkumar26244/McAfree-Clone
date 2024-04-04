import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function Navbar({ HomeSec, AboutSec, ContactSec, scrollToSection, onOpen }) {
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const background = isSticky ? "!important" : "!important";
  const backgroundMob = isSticky ? "black" : "black";
  const color = isSticky ? "#810101" : "#810101";
  // const commonLogo = isSticky ? logo2 : logo

  return (
    <Box>
      <Flex
        bg={{ base: "#bbbbbb", lg: background }}
        color={color}
        minH={"0px"}
        px={{ base: 5, lg: "70px" }}
        py={{ base: "0px", lg: "0px" }}
        borderBottom={1}
        align={"center"}
        position="fixed" // Add sticky positioning
        top={"0"} // Stick to the top of the viewport
        zIndex="1000"
        as="nav"
        w={"100%"}
      >
        <Flex
          bg={"#bbbbbb"}
          w={"1250px"}
          m={"auto"}
          py={{ base: 0, lg: 0 }}
          justify={{ base: "center", md: "start" }}
          justifyContent={"space-between"}
        >
          <Box
            mt={"0px"}
            w={{ base: "25%", xl: "15%" }}
            display={"flex"}
            alignItems={"center"}
            pl={"20px"}
          >
            <Image
              src={
                logo
              }
              w={"100%"}
              h={"100%"}
              objectFit={"contain"}
            />
          </Box>

          <Flex
            pl={"60px"}
            pr={"40px"}
            w={"100%"}
            justifyContent={"flex-end"}
            display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <DesktopNav
                color={color}
                background={background}
                HomeSec={HomeSec}
                AboutSec={AboutSec}
                ContactSec={ContactSec}
                scrollToSection={scrollToSection}
              />
            </Box>
          </Flex>

          {/* yha pe lgana */}

          {/* yha pe lgana */}
          <Box display={{ base: "none", lg: "flex" }} alignItems={"center"}>
              <Link to='/activate'>
              <Button 
                textTransform={"uppercase"}
                color={"white"}
                bg={"#810101"}
                _hover={{ bg: "black" }}
                
              >
              Setup Product Key
              </Button>
              
              </Link>
          </Box>
        </Flex>
        <Flex
          bg={"#bbbbbb"}
          alignItems={"center"}
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
        >
          <IconButton
            color={color}
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={{ base: 4, lg: 6 }} h={{ base: 5, lg: 6 }} />
              ) : (
                <HamburgerIcon
                  w={{ base: 5, lg: 10 }}
                  h={{ base: 5, lg: 10 }}
                />
              )
            }
            variant={""}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          y={"10px"}
          opacity={""}
          backgroundMob={backgroundMob}
          color={color}
          onOpen={onOpen}
        />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({
  color,
  background,
  HomeSec,
  AboutSec,
  ContactSec,
  scrollToSection,
}) => {
  return (
    <Stack direction={"row"} spacing={5}>
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          as="a"
          p={2}
          fontSize={"15px"}
          fontWeight={700}
          letterSpacing={"1px"}
          cursor={"pointer"}
          color={color}
          opacity={1}
          _hover={{
            textDecoration: "none",
            color: "black",
          }}
        >
        <div class="hvr-grow">
        
        <Text textTransform={"uppercase"} onClick={() => scrollToSection(HomeSec)}>home</Text>
        </div>
        </Box>
      </Box>

      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          as="a"
          p={2}
          fontSize={"15px"}
          fontWeight={700}
          letterSpacing={"1px"}
          cursor={"pointer"}
          color={color}
          opacity={1}
          _hover={{
            textDecoration: "none",
            color: "black",
          }}
        >
        <div class="hvr-grow">
        
        <Text textTransform={"uppercase"} onClick={() => scrollToSection(AboutSec)}>about</Text>
        </div>
        </Box>
      </Box>

      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          as="a"
          p={2}
          fontSize={"15px"}
          fontWeight={700}
          letterSpacing={"1px"}
          cursor={"pointer"}
          color={color}
          opacity={1}
          _hover={{
            textDecoration: "none",
            color: "black",
          }}
        >
        <div class="hvr-grow">
        
        <Text textTransform={"uppercase"} onClick={() => scrollToSection(ContactSec)}>contact</Text>
        </div>
        </Box>
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#8bc53f", "gray.900") }}
    >
      <Stack
        direction={"row"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>

          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ y, opacity, backgroundMob, color, onOpen }) => {
  return (
    <Stack
      bg={"#bbbbbb"}
      p={"20px 40px"}
      display={{ md: "flex", xl: "none" }}
      mt={{ base: "40px", md: "70px", lg: "110px" }}
      position="fixed" // Add sticky positioning
      top={y} // Stick to the top of the viewport
      zIndex="1"
      as="nav"
      w={"100%"}
      opacity={opacity}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <MobileNavItem key={index} {...navItem} color={color} />
      ))}
      <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
        <Button
          textTransform={"uppercase"}
          color={"white"}
          bg={"#810101"}
          _hover={{ bg: "black" }}
          onClick={onOpen}
        >
          Activate Now
        </Button>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, color }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={0} onClick={children && onToggle}>
      <Box
        pl={{ lg: 10 }}
        py={2}
        as="a"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Flex gap={"10px"} alignItems={"center"}>
          <Text fontSize={{ lg: "30px" }} fontWeight={600} color={color}>
            {label}
          </Text>
        </Flex>
        <Divider />
      </Box>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/about",
  },
  {
    label: "About",
    href: "/contactUs",
  },
  {
    label: "Contact",
    href: "/contactUs",
  },
];

export default Navbar;
