import { Box, Button, Divider, Typography } from "@mui/material";
import AnimatedTabs from "../../components/animationTabs";
import TitleSection from "./titleSection";
import PostSection from "./postSection";
import DescriptionSection from "./descriptionSection";
import NavSection from "./navSection";
import Comments from "./comments";
import Message from "./message";
import { useStarStore } from "../../stores/star";

const Mobile = () => {
  const { currentStep } = useStarStore();
  const TopSection = () => {
    return (
      <Box display="flex" width="100%" justifyContent="space-between" alignItems="start">
        <Typography color="grey.500" fontSize="1rem" fontWeight={500}>
          Preview
        </Typography>
        <Button
          variant={currentStep >= 6 ? "contained" : "outlined"}
          sx={{
            textTransform: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            bgcolor: currentStep >= 6 ? "var(--primary-color)" : "white",
            border: currentStep >= 6 ? "1px solid var(--primary-color) !important" : "1px solid #edebeeff !important",
            color: currentStep >= 6 ? "white" : "var(--text-primary)",
            borderRadius: 1.5,
          }}
        >
          Go Live
        </Button>
      </Box>
    );
  };
  const BottomSection = () => {
    return (
      <Box display="flex" width="100%" justifyContent="center" alignItems="center">
        <AnimatedTabs />
      </Box>
    );
  };

  const MobileSection = () => {
    return (
      <Box width="100%" display="flex" justifyContent="center" alignItems="center">
        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          width={"310px"}
          height={"640px"}
          sx={{
            border: "13px solid #1C1D27",
            background: "#010001",
            borderRadius: "40px",
          }}
        >
          {/* Top Section */}
          {TitleSection()}
          <Divider sx={{ background: "#1C1D27" }} />
          {PostSection()}
          {DescriptionSection()}
          <Divider sx={{ background: "#1C1D27" }} />
          {NavSection()}
          {Comments()}
          {Message()}
        </Box>
      </Box>
    );
  };

  return (
    <Box width={"100%"} display="flex" flexDirection="column" gap={4} alignItems="flex-start" bgcolor="var(--secondary-color)">
      <Box
        p={3}
        gap={4}
        width="100%"
        flexGrow={1}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "4px",
            transition: "opacity 1s",
          },
          "&::-webkit-scrollbar-track": {
            background: "#fff",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#fff", // default color
            borderRadius: "4px",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            background: "#999", // on hover
          },
        }}
        display="flex"
        flexDirection={"column"}
      >
        {TopSection()}
        {MobileSection()}
        {BottomSection()}
      </Box>
    </Box>
  );
};

export default Mobile;
