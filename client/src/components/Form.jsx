import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Form({ getData }) {
  let [val, setVal] = useState("");

  let hnadleChage = (e) => {
    setVal(e.target.value);
  };
  let handleSubmit = () => {
    getData(val);
    setVal("");
  };
  return (
    <Box
      w={{ base: "90%", sm: "90%", md: "50%", lg: "30%" }}
      display={"flex"}
      m={"auto"}
      mt="30px"
    >
      <Input type="text" placeholder="Enter City" onChange={hnadleChage} value={val}/>
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
