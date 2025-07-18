import { Box, IconButton } from "@mui/material";
import Home from "../../assets/insta-svgs/home";
import Search from "../../assets/insta-svgs/search";
import NewPost from "../../assets/insta-svgs/newPost";
import Reels from "../../assets/insta-svgs/reels";
import botSpace from "../../assets/botSpace.png";

const NavSection = () => {
  return (
    <Box flexGrow={1} p={1} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-between"}>
      <Box gap={3} display={"flex"} justifyContent={"center"}>
        <IconButton sx={{ height: 28, width: 28, color: "white", padding: 0 }}>{Home()}</IconButton>
        <IconButton sx={{ height: 28, width: 28, color: "white", padding: 0 }}>{Search()}</IconButton>
        <IconButton sx={{ height: 28, width: 28, color: "white", padding: 0 }}>{NewPost()}</IconButton>
        <IconButton sx={{ height: 28, width: 28, color: "white", padding: 0 }}>{Reels()}</IconButton>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"5px"} width={22} height={22} borderRadius={14} sx={{ background: "white" }}>
          <Box component="img" src={botSpace} height="100%" alt="box-star" />
        </Box>
      </Box>
      <Box zIndex={1} width={"100px"} height={"4px"} borderRadius={10} bgcolor={"#fff"}></Box>
    </Box>
  );
};

export default NavSection;
