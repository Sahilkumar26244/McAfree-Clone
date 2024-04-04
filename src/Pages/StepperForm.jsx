import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Progress,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Text,
  Input,
  Select,
  RadioGroup,
  Stack,
  Radio,
  useToast,
  Grid,
} from "@chakra-ui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [otherValueInput, setOtherValueInput] = useState("");
  const toast = useToast();
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const countryToSend = country == "Other" ? otherValueInput : country

  const gatherFormData = () => {
    return {
      code,
      email,
      phone,
      name,
      product,
      countryToSend,
      otherValueInput,
    };
  };

  const handleNext = () => {
    // Check if it's the last step
    if (activeStep === steps.length - 1) {
      // If it's the last step, handle finish
      handleFinish();
    } else {
      // Otherwise, proceed to the next step only if all required fields are filled
      const currentStep = steps[activeStep];
      switch (activeStep) {
        case 0:
          // Check if code field is filled
          if (code.trim() === "") {
            toast({
              title: "Code Credentials.",
              description: "This field is required for redeeming your code!",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }
          break;
        case 1:
          // Check if email field is filled
          if (email.trim() === "") {
            toast({
              title: "Email Credentials.",
              description: "This field is required for your personal details!",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }
          break;
        case 2:
          // Check if phone field is filled
          if (phone.trim() === "") {
            toast({
              title: "Phone Credentials.",
              description: "This field is required for your personal details!",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }
          break;
        case 3:
          // Check if name field is filled
          if (name.trim() === "") {
            toast({
              title: "Name Credentials.",
              description: "This field is required for your personal details!",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }
          break;
        // Add cases for additional steps if necessary

        default:
          break;
      }
      // If all required fields are filled, proceed to the next step
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleFinish = async () => {
    // Handle the finish action, e.g., submitting the form
    console.log("Form submitted!");
    console.log(product, "product");
    setLoading(true)
    try {
      const formData = gatherFormData();
      const response = await axios.post(
        "https://formspree.io/f/xnqegwvg",
        formData
      );
      console.log("Form submitted successfully!", response);
      setTimeout(() => {
        setLoading(false);
        navigate("/")
      }, 15000);
      toast({
        position: 'top',
        variant: 'left-accent',
        duration: 15000,
        render: () => (
          <Box color='white' p={3} bg='red.500' borderRadius={"20px"} pl={"30px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box>
            <Text fontWeight={"bold"}>Form Details</Text>
            <Text>Error "575OQYTRS" Unable to Setup Product!</Text>
            <Text>Your key has been redeem successfully but setup could not be started please contact support!</Text>
            </Box>
          </Box>
        ),
      })
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false)
      toast({
        title: "Form Details.",
        description: "Some Error Occur please try again after some times!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const steps = [
    { title: "First", description: "Code" },
    { title: "Second", description: "Email" },
    { title: "Third", description: "Phone" },
    { title: "Fourth", description: "Select Rooms" },
    { title: "Fifth", description: "Select Rooms" },
    { title: "Sixth", description: "Select Rooms" },
  ];

  const progressPercent = (activeStep / (steps.length - 1)) * 100;

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Box>
              <Text textAlign={"center"} fontSize={"27px"} fontWeight={600}>
                Activate Your Subscription Today
              </Text>
            </Box>
            <Box>
              <Text
                textAlign={"center"}
                fontSize={"20px"}
                fontWeight={400}
                color={"black"}
              >
                Redeem your code and download your security product now.
              </Text>
            </Box>
            <Box
              bg={"white"}
              p={"20px 30px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            >
              <Box>
                <Text fontSize={"27px"} fontWeight={600}>
                  Enter Your 25 Digits Code*
                </Text>
              </Box>
              <Box borderBottom={"1px solid lightgrey"} pb={"8px"}>
                <Input
                  size="lg"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
                  variant={"unstyled"}
                  required={true}
                  name="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box
            bg={"white"}
            p={"20px 30px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <Box>
              <Text fontSize={"27px"} fontWeight={600}>
                Enter Your Email*
              </Text>
            </Box>
            <Box>
              <Text fontSize={"16px"} fontWeight={400}>
                Enter Your Email To Register
              </Text>
            </Box>
            <Box borderBottom={"1px solid lightgrey"} pb={"8px"}>
              <Input
                size="lg"
                placeholder=""
                variant={"unstyled"}
                required={true}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box
            bg={"white"}
            p={"20px 30px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <Box>
              <Text fontSize={"27px"} fontWeight={600}>
                Phone*
              </Text>
            </Box>
            <Box>
              <Text fontSize={"16px"} fontWeight={400}>
                Enter Your Phone Number To Register
              </Text>
            </Box>
            <Box borderBottom={"1px solid lightgrey"} pb={"8px"}>
              <Input
                size="lg"
                placeholder=""
                variant={"unstyled"}
                required={true}
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box
            bg={"white"}
            p={"20px 30px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <Box>
              <Text fontSize={"27px"} fontWeight={600}>
                Name*
              </Text>
            </Box>
            <Box>
              <Text fontSize={"16px"} fontWeight={400}>
                Enter Your Name To Register
              </Text>
            </Box>
            <Box borderBottom={"1px solid lightgrey"} pb={"8px"}>
              <Input
                size="lg"
                placeholder=""
                variant={"unstyled"}
                required={true}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
          </Box>
        );
      case 4:
        return (
          <Box
            bg={"white"}
            p={"20px 30px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <Box>
              <Text fontSize={"27px"} fontWeight={600}>
                Select Product*
              </Text>
            </Box>
            <Box>
              <Select
                onChange={(e) => setProduct(e.target.value)}
                color="#830b03"
                icon={<RiArrowDownSFill />}
                variant="filled"
                placeholder="Select option"
                required={true}
                
              >
                <option value="McAfree">McAfree</option>
                <option value="other">Other</option>
                {/* Yahaan value ko "other" se badal dein */}
              </Select>
            </Box>
          </Box>
        );
      case 5:
        return (
          <Box
            bg={"white"}
            p={"20px 30px 30px 20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          >
            <Box>
              <Text fontSize={"27px"} fontWeight={600}>
                Country*
              </Text>
            </Box>
            <Box>
              <RadioGroup onChange={setCountry} value={country} required={true} name="country">
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <Box
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"18px"}
                  >
                    <Text fontSize={"17px"} fontWeight={600}>
                      USA
                    </Text>
                    <Radio value="USA"></Radio>
                  </Box>

                  <Box
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"18px"}
                  >
                    <Text fontSize={"17px"} fontWeight={600}>
                      UK
                    </Text>
                    <Radio value="UK"></Radio>
                  </Box>

                  <Box
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"18px"}
                  >
                    <Text fontSize={"17px"} fontWeight={600}>
                      AUS
                    </Text>
                    <Radio value="AUS"></Radio>
                  </Box>

                  <Box
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"18px"}
                  >
                    <Text fontSize={"17px"} fontWeight={600}>
                      Other
                    </Text>
                    <Radio value="other_country"></Radio>
                  </Box>
                </Grid>
              </RadioGroup>
            </Box>
            {country === "other_country" && (
              <Box borderBottom={"1px solid lightgrey"} pt={"8px"}>
                <Input
                  variant={"unstyled"}
                  size="lg"
                  placeholder="Specify Other..."
                  value={otherValueInput}
                  onChange={(e) => setOtherValueInput(e.target.value)}
                />
              </Box>
            )}
          </Box>
        );

      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Box bg={"#d8d7d7"} color={"#830b03"} h={"100vh"}>
      <Box position="relative">
        <Box
          w={"90%"}
          m={"auto"}
          pt={"40px"}
          display={{ base: "none", lg: "block" }}
          justifyContent={"space-between"}
        >
          <Stepper size="lg" index={activeStep} colorScheme="red">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>

        <Progress
          display={{ base: "flex", lg: "none" }}
          value={progressPercent}
          position="absolute"
          height="3px"
          width="full"
          top="10px"
          zIndex={1}
          colorScheme="red"
        />
      </Box>
      <Box p="4">
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          h={"80vh"}
        >
          <Box w={{ base: "100%", lg: "50%" }}>
            {getStepContent(activeStep)}
          </Box>
          <Box mt={"40px"}>
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleFinish}
                color={"white"}
                bg={"#810101"}
                _hover={{ bg: "black" }}
                borderRadius={"30px"}
                p={"10px 40px"}
                isLoading={loading}
              >
                Proceed To Activate
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                color={"white"}
                bg={"#810101"}
                _hover={{ bg: "black" }}
                borderRadius={"30px"}
                p={"10px 40px"}
              >
                <FaArrowRight />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StepperForm;
