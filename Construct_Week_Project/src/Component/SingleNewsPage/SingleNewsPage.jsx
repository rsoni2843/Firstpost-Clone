import { Box, Flex, Hide, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePageData } from "../../Api/api";
import CurrentPage from "../CurrentPage";
import EmailSubscribe from "../EmailSubscribe";
import Footer from "../Footer";
import MostRead from "../MostRead";
// const apiKey = "20691abc5ccf42ab8a256c232b41cc45" ;

function SingleNewsPage() {
  const [data, setData] = useState([]);
  const [cp, setCp] = useState("");
  const [cp2, setCp2] = useState("");
  const params = useParams();

  useEffect(() => {
    getSinglePageData(params.id)
      .then((res) => {
        console.log(res);
        setData(res.results);
        setCp(res.results[0].keywords[0]);
        setCp2(res.results[0].pubDate);
      })
      .catch((err) => {
        console.log("ERROR HAI YEH");
      });
  }, []);
  console.log(data);
  return (
    <div>
      <Box mt={5} lineHeight={1}>
        <Text>
          <CurrentPage pageName={cp} />
        </Text>
        <br />
        <Text
          textDecoration={"underline"}
          textDecorationColor="yellow.300"
          textDecorationThickness={4}
          w="75%"
          fontWeight={"bold"}
          fontFamily="arial"
          m="auto"
          textAlign="left"
        >
          {cp2}
        </Text>
      </Box>
      <Flex mb={30} p={3} w={"72%"} m={"auto"} mt={6}>
        <Box w={{ md: "65%", base: "100%" }}>
          {data?.map((item) => {
            return (
              <Box textAlign={"left"} key={item?.title}>
                <Text
                  fontFamily={"Playfair Display"}
                  fontSize={{ md: "3xl", base: "xl" }}
                  fontWeight="1000"
                >
                  {item?.title}
                </Text>
                <Text mt={3} fontSize={"md"} fontFamily={"Playfair Display"}>
                  {item.description}
                </Text>
                <Flex mt={5}>
                  <Text
                    ml={3}
                    fontSize={"sm"}
                    fontFamily={"arial"}
                    fontWeight="bold"
                    pr={7}
                    borderRightWidth={"1px"}
                  >
                    {item?.source?.name}
                  </Text>
                  <Text
                    ml={3}
                    fontSize={"sm"}
                    fontFamily={"arial"}
                    color={"grey"}
                  >
                    {item?.pubDate}
                  </Text>
                </Flex>
                <Image
                  w={"100%"}
                  src={
                    !item?.image_url
                      ? "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                      : item?.image_url
                  }
                />
                <Box>
                  <Text fontSize={"md"} fontFamily={"Playfair Display"} ml={3}>
                    {item?.content}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Esse hic, tempore, modi itaque nam minima impedit dolore
                      explicabo nemo cum cumque voluptas earum ipsum in labore
                      aut architecto ullam quasi?
                    </p>
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Hide below={"md"}>
          <Box ml={5} w={"35%"}>
            <Box>
              <EmailSubscribe />
            </Box>
            <MostRead style={{ marginLeft: "4px" }} />
          </Box>
        </Hide>
      </Flex>
      <Box mt={5} mb={3} height={2} bgColor={"#585858"}></Box>
      <Footer />
    </div>
  );
}

export default SingleNewsPage;
