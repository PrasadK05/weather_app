import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w="100%"
      h={"70px"}
      display={"flex"}
      alignItems={"center"}
      px="20px"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} fontStyle={"italic"}>
        Weather Check
      </Text>
    </Box>
  );
}
