import { Box, Divider, IconButton, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserIcon from "../assets/user";
import HomeIcon from "../assets/home";
import MessageIcon from "../assets/message";
import ArrowIcon from "../assets/arrow";
import SettingsIcon from "../assets/settings";
import StarDot from "../assets/starDot";
import Logo from "../assets/logo.png";
import StarBox from "../assets/botSpace.png";

type IconFunction = () => any;

const Sidebar: React.FC = () => {
  const renderNavItem = (to: string, IconComponent: IconFunction, customIconSize?: number) => (
    <NavLink to={to}>
      {({ isActive }: { isActive: boolean }) => (
        <Box display="flex" alignItems="center" position="relative" justifyContent={"center"} height={60} maxWidth={60} overflow={"hidden"} width={"100%"}>
          <IconButton
            sx={{
              height: customIconSize || 40,
              width: customIconSize || 40,
              color: isActive ? "green" : "black",
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
          <Box display="flex" flexDirection="column" alignItems="center" py={1}>
            {renderNavItem("/home", HomeIcon)}
            {renderNavItem("/user", UserIcon)}
            {renderNavItem("/", StarDot, 45)}
            {renderNavItem("/messages", MessageIcon)}
            {renderNavItem("/share", ArrowIcon)}
            {renderNavItem("/settings", SettingsIcon, 86)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
