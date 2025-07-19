import { Box, Typography } from "@mui/material";
import { useStarStore } from "../../stores/star";
import IOSSwitch from "../iosSwitch";

const OtherThings = () => {
  const { currentStep } = useStarStore();
  return (
    <Box width={"100%"} display={currentStep === 6 ? "flex" : "none"} flexDirection={"column"} gap={2}>
      <Typography fontSize={"1.3rem"} fontWeight={"600"}>
        Other things to automate
      </Typography>
      <Box gap={1} flexDirection={"column"} display={"flex"}>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box gap={1} display={"flex"} alignItems={"center"} width={"100%"}>
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"0.9rem"} fontWeight={400}>
                Reply under the post so people feel seen and special
              </Typography>
            </Box>
            <IOSSwitch />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box gap={1} display={"flex"} alignItems={"center"} width={"100%"}>
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"0.9rem"} fontWeight={400}>
                Follow up to re-engage and build trust
              </Typography>
            </Box>
            <Box bgcolor={"#0078FF"} p={"0.1rem"} px={"0.3rem"} borderRadius={"0.2rem"}>
              <Typography color="white" fontSize={"0.5rem"} fontWeight={400}>
                PRO
              </Typography>
            </Box>
            <IOSSwitch />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box gap={1} display={"flex"} alignItems={"center"} width={"100%"}>
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"0.9rem"} fontWeight={400}>
                Automatically ask for a follow to build your audience
              </Typography>
            </Box>
            <Box bgcolor={"#0078FF"} p={"0.1rem"} px={"0.3rem"} borderRadius={"0.2rem"}>
              <Typography color="white" fontSize={"0.5rem"} fontWeight={400}>
                PRO
              </Typography>
            </Box>
            <IOSSwitch />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
          <Box gap={1} display={"flex"} alignItems={"center"} width={"100%"}>
            <Box ml={1} flexGrow={1}>
              <Typography fontSize={"0.9rem"} fontWeight={400}>
                Ask for emails in DMs to keep in touch beyond social
              </Typography>
            </Box>
            <Box bgcolor={"#0078FF"} p={"0.1rem"} px={"0.3rem"} borderRadius={"0.2rem"}>
              <Typography color="white" fontSize={"0.5rem"} fontWeight={400}>
                PRO
              </Typography>
            </Box>
            <IOSSwitch />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherThings;
