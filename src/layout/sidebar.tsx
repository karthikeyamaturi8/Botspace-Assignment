import { Box, Button, Divider, IconButton, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserIcon from "../assets/user";
import HomeIcon from "../assets/home";
import MessageIcon from "../assets/message";
import ArrowIcon from "../assets/arrow";
import SettingsIcon from "../assets/settings";
import StarDot from "../assets/starDot";
import Logo from "../assets/logo.png";
import StarBox from "../assets/botSpace.png";
import QuestionIcon from "../assets/question";
type IconFunction = () => any;

const Sidebar: React.FC = () => {
  const renderNavItem = (to: string, IconComponent: IconFunction, customIconSize?: number) => (
    <NavLink to={to}>
      {({ isActive }: { isActive: boolean }) => (
        <Box display="flex" alignItems="center" position="relative" justifyContent={"center"} height={55} maxWidth={55} overflow={"hidden"} width={"100%"}>
          <IconButton
            sx={{
              height: customIconSize || 40,
              width: customIconSize || 40,
              color: isActive ? "var(--success-color)" : "black",
            }}
          >
            {IconComponent()}
          </IconButton>
        </Box>
      )}
    </NavLink>
  );

  return (
    <Box display="flex" flexDirection="column" gap={2} minWidth="70px" width="70px" flexShrink={0}>
      <Box flexGrow={1} bgcolor="var(--secondary-color)" display="flex" flexDirection="column">
        <Box p={2} display="flex" justifyContent="center">
          <Link href="/" underline="none">
            <Box component="img" src={Logo} height="100%" alt="Logo" />
          </Link>
        </Box>
        <Divider />
        <Box position="relative" py={3} display="flex" justifyContent="center">
          <Box component="img" src={StarBox} height={22} />
          <Box position="absolute" bottom={13} right={10} px={0.5} borderRadius={1} color="white" bgcolor="grey.600" fontSize={10}>
            FREE
          </Box>
        </Box>

        <Divider />

        <Box display="flex" flexDirection="column" flexGrow={1} justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            {renderNavItem("/home", HomeIcon)}
            {renderNavItem("/user", UserIcon)}
            {renderNavItem("/", StarDot, 45)}
            {renderNavItem("/messages", MessageIcon)}
            {renderNavItem("/share", ArrowIcon)}
            {renderNavItem("/settings", SettingsIcon, 86)}
          </Box>
          <Box gap={3} display="flex" flexDirection="column" alignItems="center" py={1}>
            <Box height={30} width={30}>
              <Box height={"100%"} width={"100%"} borderRadius={15} component={"img"} alt="profile-pic" src="/profile.png" />
            </Box>
            <Box width={25} height={25}>
              <IconButton
                sx={{
                  height: 25,
                  width: 25,
                  color: "#616061",
                  padding: 0,
                  position: "absolute",
                }}
              >
                {<QuestionIcon />}
              </IconButton>
            </Box>
            <Button
              variant={"contained"}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                bgcolor: "var(--primary-color)",
                border: "1px solid var(--primary-color) !important",
                color: "white",
                borderRadius: 1.5,
                p: 1,
                maxHeight: "35px",
                width: "70%",
              }}
            >
              Rene...
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
