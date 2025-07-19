import { Box, Button, Typography } from "@mui/material";
import { useStarStore } from "../../stores/star";
import CustomRadio2 from "../customRadio";

const SelectPost = () => {
  const { posts, selectedPost, setSelectedPost } = useStarStore();
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={2}>
      <Typography fontSize={"1.3rem"} fontWeight={"600"}>
        When someone comments on
      </Typography>
      <Box gap={1} flexDirection={"column"} display={"flex"}>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box display={"flex"} alignItems={"center"}>
            <CustomRadio2 checked />
            <Typography ml={1} fontSize={"1rem"} fontWeight={400}>
              a specific post or reel
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={1}>
            {posts.map((post) => {
              return (
                <Box
                  key={post?.id}
                  component={"button"}
                  onClick={() => setSelectedPost(post)}
                  p={0}
                  height={100}
                  width={78}
                  borderRadius={2}
                  sx={{
                    border: selectedPost.id === post.id ? "2px solid #0078FF" : 0,
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={post.imageUrl}
                    bgcolor="gray"
                    height={"100%"}
                    width={"100%"}
                    borderRadius={2}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
          <Button
            variant="text"
            sx={{
              alignSelf: "start",
              width: "auto",
              textTransform: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              bgcolor: "transparent",
              borderColor: "transparent",
              color: "#0078FF",
            }}
          >
            Show All
          </Button>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box display={"flex"} alignItems={"center"} width={"100%"}>
            <CustomRadio2 />
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"1rem"} fontWeight={400}>
                any post or reel
              </Typography>
            </Box>
            <Box bgcolor={"#0078FF"} p={"0.1rem"} px={"0.3rem"} borderRadius={"0.2rem"}>
              <Typography color="white" fontSize={"0.5rem"} fontWeight={400}>
                PRO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box display={"flex"} alignItems={"center"} width={"100%"}>
            <CustomRadio2 />
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"1rem"} fontWeight={400}>
                next post or reel
              </Typography>
            </Box>
            <Box bgcolor={"#0078FF"} p={"0.1rem"} px={"0.3rem"} borderRadius={"0.2rem"}>
              <Typography color="white" fontSize={"0.5rem"} fontWeight={400}>
                PRO
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectPost;
