import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import { RightSideTexts } from "../constants/TextConstants";

export default function Instructions() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      width="350px"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text mr="5px">{RightSideTexts.INSTRUCTIONS}</Text>
    </Box>
  );
}
