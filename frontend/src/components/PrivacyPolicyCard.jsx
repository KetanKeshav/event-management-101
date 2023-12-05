import {
    Flex,
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Link as ChakraLink,
  } from "@chakra-ui/react";
  
  export default function PrivacyPolicyCard() {
    return (
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Privacy Policy
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
                Thank you for using our application. This Privacy Policy describes how we collect,
                use, and disclose information about you.
              </Text>
              <Text>
                <strong>Information We Collect:</strong> We collect information you provide
                directly to us, such as your name, email address, and other details when you use our
                services.
              </Text>
              <Text>
                <strong>How We Use Your Information:</strong> We use the information we collect to
                provide, maintain, and improve our services, as well as to communicate with you.
              </Text>
              <Text>
                <strong>Sharing Your Information:</strong> We may share your information with
                third-party service providers to help us operate, analyze usage patterns, and improve
                our services.
              </Text>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                <ChakraLink color={"blue.400"} href="/terms-and-conditions">
                  Terms and Conditions
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
  