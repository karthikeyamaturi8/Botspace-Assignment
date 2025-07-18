import { Box } from "@mui/material";
import Love from "../../assets/emojis/img-1.png";
import Praise from "../../assets/emojis/img-2.png";
import Fire from "../../assets/emojis/img-3.png";
import Clap from "../../assets/emojis/img-4.png";
import Sad from "../../assets/emojis/img-5.png";
import LoveEyes from "../../assets/emojis/img-6.png";
import Shock from "../../assets/emojis/img-7.png";
import Laugh from "../../assets/emojis/img-8.png";

const Emojis = () => {
  return (
    <Box px={1} width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Box height={20} component={"img"} src={Love} alt="Love" />
      <Box height={20} component={"img"} src={Praise} alt="Praise" />
      <Box height={20} component={"img"} src={Fire} alt="Fire" />
      <Box height={20} component={"img"} src={Clap} alt="Clap" />
      <Box height={20} component={"img"} src={Sad} alt="Sad" />
      <Box height={20} component={"img"} src={LoveEyes} alt="Love-eyes" />
      <Box height={20} component={"img"} src={Shock} alt="Shock" />
      <Box height={20} component={"img"} src={Laugh} alt="Laugh" />
    </Box>
  );
};

export default Emojis;
