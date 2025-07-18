import { Box, Button, Divider, Typography } from "@mui/material";
import AnimatedTabs from "../../components/animationTabs";
import TitleSection from "./titleSection";
import PostSection from "./postSection";
import DescriptionSection from "./descriptionSection";
import NavSection from "./navSection";
import Comments from "./comments";
import { useStarStore } from "../../stores/star";
import Message from "./message";

const Mobile = () => {
  const { view } = useStarStore();
  const TopSection = () => {
    return (
      <Box display="flex" width="100%" justifyContent="space-between" alignItems="start">
        <Typography color="grey.500" fontSize="1rem" fontWeight={500}>
          Preview
        </Typography>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            bgcolor: "white",
            borderColor: "var(--text-secondary)",
            borderWidth: 1,
            color: "var(--text-primary)",
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
          width={"300px"}
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
          {view === "COMMENTS" && Comments()}
          {view === "DM" && Message()}
        </Box>
      </Box>
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} alignItems="flex-start" bgcolor="grey.50" flexGrow={1} p={2}>
      {TopSection()}
      {MobileSection()}
      {BottomSection()}
    </Box>
  );
};

export default Mobile;
