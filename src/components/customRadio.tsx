// CustomRadio.tsx
import { Radio } from "@mui/material";
import type { RadioProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomRadio = styled((props: RadioProps) => <Radio disableRipple {...props} />)(() => ({
  display: "inline-flex",
  position: "relative",
  paddingLeft: 8,
  paddingTop: -5,
  color: "#ccc",

  "& svg": {
    display: "none", // hide default icon
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    transition: "border-color 0.2s",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 5,
    left: 5,
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#222",
    opacity: 0,
    transform: "scale(0)",
    transition: "all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53)",
  },

  "&.Mui-checked": {
    color: "#222",

    "&::after": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}));

export default CustomRadio;
