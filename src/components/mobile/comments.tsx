import { Box, Divider, Typography, IconButton } from "@mui/material";
import arrow from "../../assets/arrow";
import DemoImage from "../../assets/demo-profile.png";
import Like from "../../assets/insta-svgs/like";
import botSpace from "../../assets/botSpace.png";
import Emojis from "./emojis";

const Comments = () => {
  return (
    <>
      <Box bottom={0} position={"absolute"} height={"100%"} width={"100%"} bgcolor={"#232123"} sx={{ borderRadius: "27px", opacity: 0.4 }}></Box>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"} bottom={0} position={"absolute"} height={"68%"} width={"100%"} bgcolor={"#232123"} sx={{ borderRadius: "27px" }}>
        <Box width={"100%"} p={2} gap={1} display={"flex"} alignItems={"center"} flexDirection={"column"} bottom={0}>
          <Box width={"45px"} height={"4px"} borderRadius={10} bgcolor={"#9F9E9F"}></Box>
          <Box position={"relative"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography color="#fff" fontSize="1rem" fontWeight={400}>
              Comments
            </Typography>
            <IconButton
              sx={{
                height: 18,
                width: 18,
                color: "white",
                padding: 0,
                position: "absolute",
                right: 0,
              }}
            >
              {arrow()}
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ width: "100%", background: "#616061" }} />
        <Box width={"100%"} height={"100%"} px={1} py={2}>
          <Box gap={1.5} display={"flex"} justifyContent={"center"} width={"100%"} height={"auto"}>
            <Box>
              <Box borderRadius={30} height={30} component="img" src={DemoImage} width={"100%"} alt="demo-user" />
            </Box>
            <Box flexGrow={1} gap={"0.3em"}>
              <Box gap={1} display={"flex"} alignItems={"center"}>
                <Typography color="#fff" fontSize="0.8rem" fontWeight={400}>
                  Username
                </Typography>
                <Typography color="#616061" fontSize="0.7rem" fontWeight={400}>
                  Now
                </Typography>
              </Box>
              <Typography color="#fff" fontSize="0.8rem" fontWeight={400}>
                Price
              </Typography>
              <Typography color="#616061" fontSize="0.8rem" fontWeight={400}>
                Reply
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={2}>
              <IconButton
                sx={{
                  height: 18,
                  width: 18,
                  color: "#616061",
                  padding: 0,
                  position: "absolute",
                }}
              >
                {Like()}
              </IconButton>
            </Box>
          </Box>
        </Box>
        {Emojis()}
        <Box gap={1} p={1} display={"flex"} mb={"10%"} width={"100%"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"8px"} width={"35px"} height={"35px"} borderRadius={14} sx={{ background: "white" }}>
            <Box component="img" src={botSpace} height="100%" alt="box-star" />
          </Box>
          <Box display={"flex"} justifyContent={"start"} p={1} alignItems={"center"} width={"100%"} borderRadius={10} border={"1px solid #616061"}>
            <Typography fontSize={"0.7em"} color="#616061">
              Add a comment for username...
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Comments;
