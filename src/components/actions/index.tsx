import SelectPost from "./selectPost";
import SelectComment from "./comment";
import SendMessage from "./message";
import { Box, Button } from "@mui/material";
import { useStarStore } from "../../stores/star";
import OtherThings from "./otherThings";
const Actions = () => {
  const { nextStep, currentStep } = useStarStore();

  return (
    <Box
      overflow={"scroll"}
      gap={2}
      flexDirection={"column"}
      p={3}
      maxWidth={"25%"}
      minWidth={"400px"}
      display={"flex"}
      flexGrow={1}
      sx={{
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
    >
      {<SelectPost />}
      {<SelectComment />}
      {<SendMessage />}
      {<OtherThings />}
      <Box display={currentStep >= 6 ? "none" : "flex"}>
        <Button onClick={() => nextStep()} variant="outlined" sx={{ fontSize: "1rem", textTransform: "none", color: "#000", border: "1px solid #edebeeff !important", borderRadius: 1.5}}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Actions;
