import { Box } from "@mui/material";
import Actions from "../components/actions";
import Mobile from "../components/mobile";

const Star = () => {
  return (
    <Box display={"flex"} width={"100%"} height={"100%"} sx={{ background: "white" }}>
      <Actions />
      <Mobile />
    </Box>
  );
};

export default Star;
