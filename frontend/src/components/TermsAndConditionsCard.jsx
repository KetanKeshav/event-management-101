import {
    Flex,
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Link as ChakraLink,
  } from "@chakra-ui/react";
  
  export default function TermsAndConditionsCard() {
    return (
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Terms and Conditions
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.dark")}
            boxShadow={"lg"}
            p={8}
            w={{
              base: "full",
              sm: "400px",
            }}
          >
            <Stack spacing={4}>
              <Text>
                Welcome to Universe! By using our services, you agree to comply with
                and be bound by the following terms and conditions.
              </Text>
              <Text>
                <strong>Use of Our Services:</strong> You must only use our services for lawful
                purposes and in accordance with these terms.
              </Text>
              <Text>
                <strong>User Accounts:</strong> To access certain features of our services, you may
                be required to create a user account. You are responsible for maintaining the
                confidentiality of your account credentials.
              </Text>
              <Text>
                <strong>Content:</strong> Users are solely responsible for the content they submit
                on our platform. We reserve the right to remove any content that violates these terms.
              </Text>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                <ChakraLink color={"blue.400"} href="/privacy-policy">
                  Privacy Policy
                </ChakraLink>{" "}
                |{" "}
                <ChakraLink color={"blue.400"} href="/contact-us">
                  Contact Us
                </ChakraLink>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  