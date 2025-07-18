import { Box, IconButton, Typography } from "@mui/material";
import ChevronLeft from "../../assets/insta-svgs/chevronLeft";

const TitleSection = () => {
  return (
    <Box position={"relative"} gap={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} p={1}>
      <Box zIndex={2} width={"55px"} height={"7px"} borderRadius={10} bgcolor={"#1C1D27"}></Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Typography color="grey.700" fontSize="0.6rem" fontWeight={800}>
          BOTSPACEHQ
        </Typography>
        <Typography color="white" fontSize="0.9rem" fontWeight={500}>
          Posts
        </Typography>
      </Box>
      <IconButton
        sx={{
          height: 30,
          width: 30,
          color: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        {ChevronLeft()}
      </IconButton>
    </Box>
  );
};

export default TitleSection;
