import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box display="flex" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
