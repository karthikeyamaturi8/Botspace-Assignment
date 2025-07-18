import { Box, Typography, IconButton } from "@mui/material";
import Like from "../../assets/insta-svgs/like";
import Comment from "../../assets/insta-svgs/comment";
import Share from "../../assets/insta-svgs/share";
import Save from "../../assets/insta-svgs/save";

const DescriptionSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} p={"0.2rem 0.6rem"} gap={"0.2rem"}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <Box gap={"0.2em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Like()}</IconButton>
            <Typography fontSize="0.7rem" color="white">
              18
            </Typography>
          </Box>
          <Box gap={"0.2em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Comment()}</IconButton>
            <Typography fontSize="0.7rem" color="white">
              0
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Share()}</IconButton>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Save()}</IconButton>
        </Box>
      </Box>
      <Box height={"8.5rem"} overflow={"hidden"}>
        <Typography fontSize="0.7rem" color="white">
          botspacehq WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta’s strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features. Looking to ride this wave? BotSpace, a Meta Business Partner, helps your business shine on WhatsApp with top-notch customer engagement, automation, and more. Handle everyday tasks effortlessly while increasing conversions and
          maintaining a 98% message open rate.
        </Typography>
        <Typography fontSize="0.7rem" color="#616061">
          View all comments
        </Typography>
        <Typography fontSize="0.7rem" color="#616061">
          03 May, 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default DescriptionSection;
