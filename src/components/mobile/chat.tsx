import { Box, Typography, Button } from "@mui/material";
import { useStarStore } from "../../stores/star";

const Chat = () => {
  const { message, openingDM, openingDMLink } = useStarStore();
  const messages = [
    { id: 1, logo: "/botSpace.png", user: "SENDER", text: openingDM, link: true, linkUrl: "www.google.com", linkLabel: openingDMLink, color: "white" },
    { id: 2, user: "RECEIVER", text: "Send me the link", color: "white" },
    { id: 3, logo: "/botSpace.png", user: "SENDER", text: message || "Write a message", color: message.length > 0 ? "white" : "gray" },
  ];

  return (
    <Box width={"100%"} height={"100%"}>
      {messages.map((message) => {
        if (message.user === "SENDER") {
          return (
            <Box key={message.id} p={1} gap={1} display={"flex"} alignItems={"end"}>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"5px"} width={"25px"} height={"25px"} borderRadius={14} sx={{ background: "white" }}>
                <Box component="img" src={"/botSpace.png"} height="15px" width={"15px"} alt="botSpace" />
              </Box>
              <Box position={"relative"} display={"flex"} flexDirection={"column"} gap={1} marginRight={3} p={1} sx={{ background: "#232123", borderRadius: 3, borderBottomLeftRadius: 0 }}>
                <Typography dangerouslySetInnerHTML={{ __html: message?.text }} sx={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }} fontSize="0.7rem" color={message.color} />
                {message.link && (
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      bgcolor: "#302E30",
                      border: 0,
                      color: "White",
                    }}
                  >
                    {message.linkLabel}
                  </Button>
                )}
              </Box>
            </Box>
          );
        } else {
          return (
            <Box p={1} gap={1} display={"flex"} alignItems={"end"} justifyContent={"end"}>
              <Typography dangerouslySetInnerHTML={{ __html: message?.text }} marginLeft={3} p={1} sx={{ whiteSpace: "pre-wrap", background: "#6141EB", borderRadius: 3, borderBottomRightRadius: 0 }} fontSize="0.7rem" color={message.color} />
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default Chat;
