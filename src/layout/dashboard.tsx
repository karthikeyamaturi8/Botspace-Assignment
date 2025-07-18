import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const DashBoardLayout = () => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Box display="flex" flexGrow={1} overflow="hidden" bgcolor="white">
                <Box display={{ xs: "none", md: "flex" }}>
                    <Sidebar />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    flexGrow={1}
                    borderRadius={2}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        flexGrow={1}
                        sx={{ overflowY: "auto" }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DashBoardLayout;
