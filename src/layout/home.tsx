import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const HomeLayout = () => {
  return (
    <Flex direction={"column"} height={"100vh"} >
      <Flex flexGrow={1} >
        <Outlet />
      </Flex>
    </Flex>
  )
};

export default HomeLayout;
