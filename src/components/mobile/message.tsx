import { Box, Typography, IconButton, Divider } from "@mui/material";
import botSpace from "../../assets/botSpace.png";
import ChevronLeft from "../../assets/insta-svgs/chevronLeft";
import CallIcon from "../../assets/insta-svgs/call";
import VideoCallIcon from "../../assets/insta-svgs/videoCall";
import Signal from "../../assets/signal";
import Wifi from "../../assets/wifi";
import Battery from "../../assets/battery";
import Chat from "./chat";
import { CameraFilled } from "../../assets/insta-svgs/camera";
import Image from "../../assets/insta-svgs/image";
import Sticker from "../../assets/insta-svgs/sticker";
import Plus from "../../assets/insta-svgs/plus";

const message = () => {
  return (
    <Box zIndex={1} bottom={0} display={"flex"} flexDirection={"column"} position={"absolute"} height={"100%"} width={"100%"} bgcolor={"#000"} sx={{ borderRadius: "27px" }}>
      <Box py={1} pt={2} px={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box px={2}>
          <Typography color="white" fontSize="0.6rem" fontWeight={400}>
            1:37
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <IconButton
            sx={{
              height: 13,
              width: 13,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
            }}
          >
            {Signal()}
          </IconButton>
          <IconButton
            sx={{
              height: 13,
              width: 13,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
            }}
          >
            {Wifi()}
          </IconButton>
          <IconButton
            sx={{
              height: 15,
              width: 15,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
            }}
          >
            {Battery()}
          </IconButton>
        </Box>
      </Box>
      <Box p={2} pt={0} pb={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <IconButton
            sx={{
              height: 16,
              width: 16,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
            }}
          >
            {ChevronLeft()}
          </IconButton>
          <Box gap={1} display={"flex"} alignItems={"center"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"5px"} width={"25px"} height={"25px"} borderRadius={14} sx={{ background: "white" }}>
              <Box component="img" src={botSpace} height="100%" alt="box-star" />
            </Box>
            <Typography fontSize="0.8rem" color="white">
              botspacehq
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} gap={1} justifyContent={"center"} alignItems={"center"}>
          <IconButton
            sx={{
              height: 14,
              width: 14,
              color: "white",
              padding: 0,
            }}
          >
            {CallIcon()}
          </IconButton>
          <IconButton
            sx={{
              height: 14,
              width: 14,
              color: "white",
              padding: 0,
            }}
          >
            {VideoCallIcon()}
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ background: "#1C1D27" }} />
      <Box width={"100%"} flexGrow={1}>
        {Chat()}
      </Box>
      <Box p={1} width={"100%"} height={"60px"}>
        <Box gap={1} display={"flex"} alignItems={"center"} py={1} px={"0.2rem"} pr={1} height={"75%"} borderRadius={5} width={"100%"} sx={{ background: "#1C1D27" }}>
          <Box borderRadius={8} p={"0.3rem"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#0078FF"}>
            <IconButton
              sx={{
                height: 17,
                width: 17,
                color: "white",
                padding: 0,
                margin: 0,
              }}
            >
              {CameraFilled()}
            </IconButton>
          </Box>
          <Box flexGrow={1}>
            <Typography fontSize="0.8rem" color="#777783">
              Message...
            </Typography>
          </Box>
          <IconButton
            sx={{
              height: 18,
              width: 18,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
              margin: 0,
            }}
          >
            {Image()}
          </IconButton>
          <IconButton
            sx={{
              height: 18,
              width: 18,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
              margin: 0,
            }}
          >
            {Sticker()}
          </IconButton>
          <IconButton
            sx={{
              height: 19,
              width: 19,
              color: "white",
              bottom: 0,
              left: 0,
              padding: 0,
              margin: 0,
            }}
          >
            {Plus()}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default message;
