import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles"; // Changed from @mui/system
import { useStarStore } from "../stores/star";

// Styled Tabs with animated indicator
const CustomTabs = styled((props: any) => (
  <Tabs
    {...props}
    slotProps={{
      indicator: {
        children: <span className="MuiTabs-indicatorSpan" />,
      },
    }}
  />
))(() => ({
  backgroundColor: "#f0f0f5",
  borderRadius: 50,
  padding: 5,
  position: "relative",
  maxHeight: "45px !important",

  "& .MuiTabs-flexContainer": {
    position: "relative",
    zIndex: 2,
  },

  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
    transition: "all 0.3s ease",
    zIndex: 1,
  },

  "& .MuiTabs-indicatorSpan": {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "100%",
    height: "100%",
  },
}));

// Styled Tab
const CustomTab = styled(Tab)(() => ({
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  zIndex: 2,
  fontWeight: 500,
  color: "#888",
  fontSize: "1rem",
  minHeight: "30px !important",
  padding: "10px !important",
  "&.Mui-selected": {
    color: "#000",
  },

  // Remove touch/click animations
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));

// Component
const AnimatedTabs: React.FC = () => {
  const { view, setView } = useStarStore();
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setView(newValue);
  };

  return (
    <Box sx={{ width: "auto" }}>
      <CustomTabs value={view} onChange={handleChange}>
        <CustomTab label="Post" value={"POST"} />
        <CustomTab label="Comments" value={"COMMENTS"} />
        <CustomTab label="DM" value={"DM"} />
      </CustomTabs>
    </Box>
  );
};

export default AnimatedTabs;
