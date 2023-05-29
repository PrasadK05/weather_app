import { Badge, Box,  Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";


export default function CityWeather({
  name,
  date,
  country,
  icon,
  feels_like,
  loading,
  maxTemp,
  minTemp,
  humidity,
  pressure,
  visibility,
  windSpeed,
  desc,
  status,
  temp,
  error,
}) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // date = Date(date);
  date = new Date(date*1000);

  return (
    <>
      <Box
        w={{base:"100%", sm:"100%", md:"80%", lg:"70%"}}
        m="auto"
        display={loading ? "none" : "flex"}
        flexDirection={{base:"column", sm:"column", md:"row", lg:"row"}}
        bg={"#FFFFFF"}
        mt="30px"
      >
        <Box w={{base:"100%", sm:"100%", md:"50%", lg:"50%"}} px="30px" py="20px">
          <Text color={"#ea6e4b"}>{`${
            month[date.getMonth()]
          } ${date.getDate()}, ${days[date.getDay()]}`}</Text>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
          >{`${name}, ${country}`}</Text>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Text fontSize={"50px"}>{`${temp} °C`}</Text>
          </Box>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
          >{`Feels like ${feels_like}°C. ${desc}`}</Text>
          <Box
            width={"100%"}
            display={"grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            mt="10px"
          >
            <Text>{`Max Temp: ${maxTemp} °C`}</Text>
            <Text>{`Min Temp: ${minTemp} °C`}</Text>
            <Text>{`Humidity: ${humidity}%`}</Text>
            <Text>{`Pressure: ${pressure}hPa`}</Text>
            <Text>{`Wind Speed: ${windSpeed}m/s`}</Text>
            <Text>{`Visibilit: ${visibility / 1000}km`}</Text>
          </Box>
          <Badge ml="2" fontSize="16px" colorScheme="green" mt="10px">
            {status}
          </Badge>          
        </Box>
        <Box
          w={{base:"100%", sm:"100%", md:"50%", lg:"50%"}}
          boxShadow={
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
          }
        >
          <iframe
            title="City Map"
            src={`https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height={"100%"}
          ></iframe>
        </Box>        
      </Box>
      <Box
        display={loading ? "flex" : "none"}
        justifyContent={"center"}
        alignContent={"center"}
        w="70%"
        m="auto"
        mt="30px"
      >
        <Spinner size={"xl"} />
      </Box>
      <Box
        display={error ? "flex" : "none"}
        justifyContent={"center"}
        alignContent={"center"}
        w="70%"
        m="auto"
        mt="30px"
      >
        <Text fontSize={"2xl"} color={"red"}>
          Error While Loading Data
        </Text>
      </Box>
    </>
  );
}
