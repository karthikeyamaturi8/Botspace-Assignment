import Notfound from "../assets/notFound.jpg"
import { Box } from "@mui/material";

const NotFound = () => {
    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Box component="img" src={Notfound} width="35%" height="50%" alt="Not Found" />
        </Box>
    );
};

export default NotFound;