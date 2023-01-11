import { getData } from "../Api/api";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Progress,
  Text,
  Image,
  Skeleton,
  Stack,
  Hide,
} from "@chakra-ui/react";
import ImageSlider from "./Slider/ImageSlider";
import EmailSubscribe from "./EmailSubscribe";
import MostRead from "./MostRead";
import Paginations from "./Pagenation";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import CurrentPage from "./CurrentPage";

function AllPages({ endPoint, pageName }) {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = Number(searchParams.get("page") || 1);

  const [current, setCurrent] = useState(initPage);
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [i1, setI1] = useState({});
  const [i2, setI2] = useState({});
  const [i3, setI3] = useState({});
  useEffect(() => {
    handleGetData();
  }, [current]);
  function handleGetData() {
    setLoading(true);
    return getData({ endPoint, current })
      .then((res) => {
        setLoading(false);
        setPage(res.data.totalResults);
        setI1(res.data.results[0]);
        setI2(res.data.results[1]);
        setI3(res.data.results[2]);
        setImage(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }
  useEffect(() => {
    setSearchParams({ current });
  }, [current, setSearchParams]);
  const onChange = (currentPage) => {
    setCurrent(currentPage);
  };
  console.log(data);
  if (loading) {
    return (
      <div>
        <Skeleton colorScheme={"grey.200"} h={"600px"} />
      </div>
    );
  }
  return (
    <div>
      <CurrentPage pageName={pageName} />
      <Flex w="75%" m="auto">
        <Box w={{ md: "65%", base: "98%" }} m={"auto"}>
          <Text textTransform={"uppercase"} fontSize={30} fontWeight={"bold"}>
            {pageName} News
          </Text>

          <Box justifyContent="space-between" display="flex" w="95%" m="auto">
            <Box w="38%">
              <hr color="black" />
            </Box>
            <Box w="20%">
              <Progress colorScheme="yellow" size={"xs"} value={100} />
            </Box>
            <Box w="38%">
              <hr color="black" />
            </Box>
          </Box>
          <Hide below={"md"}>
            <ImageSlider img1={i1} img3={i2} img2={i3} data={image} />
          </Hide>
          <Box mt={5}>
            {data?.map((item, index) => {
              return (
                <Link key={index} to={`news/${item.title}`}>
                  {" "}
                  <Box
                    pos={{ md: "relative" }}
                    mt={{ md: "100px", base: "30px" }}
                  >
                    <Image
                      minH={{ md: "400px", base: "100%" }}
                      w={"100%"}
                      src={
                        item?.image_url
                          ? item?.image_url
                          : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                      }
                      alt={item.source_id ? item.source_id : "No Image"}
                    />
                    <Box
                      p={4}
                      mb={"10px"}
                      bgColor={"white"}
                      m="auto"
                      pos={{ md: "absolute" }}
                      bottom={{ md: "-100px", base: "0" }}
                      right="25px"
                      w={{ md: "90%", base: "100%" }}
                      textAlign={"left"}
                    >
                      <Box
                        fontFamily={"arial"}
                        fontWeight="bold"
                        textDecoration={"underline"}
                        textDecorationColor="yellow.500"
                        textDecorationThickness={3}
                        fontSize="sm"
                        textTransform="uppercase"
                        color={"#585858"}
                      >
                        {item?.category[0]}
                      </Box>
                      <Box
                        color={"black"}
                        fontFamily={"Playfair Display"}
                        fontSize={{ md: "2xl", base: "md" }}
                        fontWeight="1000"
                      >
                        {item?.title}
                      </Box>
                      <Hide below="md">
                        <Box
                          fontSize={{ md: "sm", base: "xsm" }}
                          fontFamily={"arial"}
                          color="#333333"
                        >
                          {item?.description}
                        </Box>
                      </Hide>
                    </Box>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Box>
        <Hide below="md">
          <Box ml={5} w={["30%", null]}>
            <Box>
              <EmailSubscribe />
            </Box>
            <Box mt={20} top="30px" scrollBehavior={"smooth"}>
              <MostRead data={data} />
            </Box>
          </Box>
        </Hide>
      </Flex>
      <Paginations
        changingPage={onChange}
        currentPage={current}
        pageData={page}
      />

      <Box mt={5} mb={3} height={2} bgColor={"#585858"}></Box>
      <Footer />
    </div>
  );
}
export default AllPages;
