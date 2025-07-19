import { Box, Typography, IconButton } from "@mui/material";
import Like from "../../assets/insta-svgs/like";
import Comment from "../../assets/insta-svgs/comment";
import Share from "../../assets/insta-svgs/share";
import Save from "../../assets/insta-svgs/save";
import { useStarStore } from "../../stores/star";

const DescriptionSection = () => {
  const { selectedPost } = useStarStore();

  return (
    <Box display={"flex"} flexDirection={"column"} p={"0.2rem 0.6rem"} gap={"0.2rem"}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <Box gap={"0.2em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Like()}</IconButton>
            <Typography fontSize="0.7rem" color="white">
              {selectedPost.likes}
            </Typography>
          </Box>
          <Box gap={"0.2em"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton sx={{ height: 25, width: 25, color: "white", padding: 0 }}>{Comment()}</IconButton>
            <Typography fontSize="0.7rem" color="white">
              {selectedPost.comments}
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
        <Box display={"flex"} alignItems={"center"}>
          <Typography dangerouslySetInnerHTML={{ __html: "botspacehq " + selectedPost?.description }} fontSize="0.75rem" fontWeight={400} color="white" />
        </Box>

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
