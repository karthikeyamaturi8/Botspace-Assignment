import { Box, Typography, IconButton } from "@mui/material";
import botSpace from "../../assets/botSpace.png";
import options from "../../assets/insta-svgs/options";
import { useStarStore } from "../../stores/star";

const PostSection = () => {
  const { selectedPost } = useStarStore();

  return (
    <>
      <Box p={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box gap={1} display={"flex"} alignItems={"center"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"5px"} width={"25px"} height={"25px"} borderRadius={14} sx={{ background: "white" }}>
            <Box component="img" src={botSpace} height="100%" alt="box-star" />
          </Box>
          <Typography fontSize="0.7rem" color="white">
            botspacehq
          </Typography>
        </Box>
        <IconButton
          sx={{
            height: 13,
            width: 13,
            color: "white",
            padding: 0,
          }}
        >
          {options()}
        </IconButton>
      </Box>
      <Box component="img" src={selectedPost.imageUrl} sx={{ objectFit: "cover" }} height="274px" width={"100%"} alt="box-star" />
    </>
  );
};

export default PostSection;
