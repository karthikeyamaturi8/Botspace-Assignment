import { Flex, Image, Link, Icon, Separator, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserIcon from "../assets/user";
import HomeIcon from "../assets/home";
import MessageIcon from "../assets/message";
import ArrowIcon from "../assets/arrow";
import SettingsIcon from "../assets/settings";
import StarDot from "../assets/starDot";
import Logo from "../assets/logo.png";
import StarBox from "../assets/boxStar.png";

const Sidebar = () => {

    return (
        <Flex flexGrow={1} gap={3} direction={"column"} w={"70px"} minW={"70px"} flexShrink={0} >
            <Flex bg={"secondary"} direction={"column"} flexGrow={1}>
                <Flex p={4} justifyContent={"center"} >
                    <Link href="/" outline={"none"} >
                        <Image src={Logo} h={"100%"} />
                    </Link>
                </Flex>
                <Separator borderColor={"blackAlpha.400"} />
                <Flex position={"relative"} py={6} justifyContent={"center"} >
                    <Image src={StarBox} h={"22px"} />
                    <Box bottom={4} right={2} position={"absolute"} px={1} borderRadius={5} color={"white"} bg={"gray"} fontSize={"10px"} >FREE</Box>
                </Flex>
                <Separator borderColor={"blackAlpha.400"} />
                <Flex direction={"column"} flexGrow={1} justifyContent={"space-between"}  >
                    <Flex direction={"column"} alignItems={"center"} p={2}>
                        <NavLink to={"/home"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"25px"} w={"25px"} color={isActive ? "green.600" : "dark"} >{HomeIcon()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                        <NavLink to={"/user"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"25px"} w={"25px"} color={isActive ? "green.600" : "dark"} >{UserIcon()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                        <NavLink to={"/"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"30px"} w={"30px"} color={isActive ? "green.600" : "dark"} >{StarDot()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                        <NavLink to={"/messages"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"25px"} w={"25px"} color={isActive ? "green.600" : "dark"} >{MessageIcon()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                        <NavLink to={"/share"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"25px"} w={"25px"} color={isActive ? "green.600" : "dark"} >{ArrowIcon()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                        <NavLink to={"/settings"}  >
                            {({ isActive }) => (
                                <Flex alignItems={"center"} gap={3} position={"relative"} m={0} my={2} p={2}
                                    borderRadius={10} borderRightRadius={10}>
                                    <Flex overflow={"hidden"} maxH={"30px"} maxW={"30px"} alignItems={"center"} justifyContent={"center"} >
                                        <Icon h={"65px"} w={"65px"} color={isActive ? "green.600" : "dark"} >{SettingsIcon()}</Icon>
                                    </Flex>
                                </Flex>
                            )}
                        </NavLink>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )

}

export default Sidebar