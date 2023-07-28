import { Box, Flex, HStack, useColorModeValue, Text } from "@chakra-ui/react";
import { FooternTexts } from "../constants/TextConstants";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position="absolute"
      bottom="0"
      width="100%"
    >
      <Flex py={10} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"footer"} spacing={4} display="flex">
            <Text mr="5px">{FooternTexts.FOOTER}</Text>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
