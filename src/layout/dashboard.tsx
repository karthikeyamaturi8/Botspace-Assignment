import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
const DashBoardLayout = () => {
    return (
        <Flex direction={"column"} height={"100vh"}>
            <Flex flexGrow={1} overflow={"hidden"} bg={"white"} >
                <Flex display={{ base: "none", md: "flex" }}>
                    <Sidebar />
                </Flex>
                <Flex containerType={"inline-size"} direction={"column"} flexGrow={1} borderRadius={10} >
                    <Flex containerType={"inline-size"} m={2} direction={"column"} flexGrow={1} overflowY={"auto"}>
                        <Outlet />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashBoardLayout;
