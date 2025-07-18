import { Box, Typography, Button } from "@mui/material";

const Chat = () => {
  const messages = [
    { logo: "/botSpace.png", user: "SENDER", text: "Hey there! i'm so happy you're here, thanks so much for your interest 😊 <br><br>Click below and I'll send you the link in just a sec ✨", link: true, linkUrl: "www.google.com" },
    { user: "RECEIVER", text: "Send me the link" },
    { logo: "/botSpace.png", user: "SENDER", text: "hey" },
  ];

  return (
    <Box width={"100%"} height={"100%"}>
      {messages.map((message) => {
        if (message.user === "SENDER") {
          return (
            <Box p={1} gap={1} display={"flex"} alignItems={"end"}>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"5px"} width={"25px"} height={"25px"} borderRadius={14} sx={{ background: "white" }}>
                <Box component="img" src={"/botSpace.png"} height="15px" width={"15px"} alt="botSpace" />
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={1} marginRight={3} p={1} sx={{ background: "#232123", borderRadius: 3, borderBottomLeftRadius: 0 }}>
                <Typography dangerouslySetInnerHTML={{ __html: message?.text }} fontSize="0.7rem" color="white" />
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
                    Send me the link
                  </Button>
                )}
              </Box>
            </Box>
          );
        } else {
          return (
            <Box p={1} gap={1} display={"flex"} alignItems={"end"} justifyContent={"end"}>
              <Typography dangerouslySetInnerHTML={{ __html: message?.text }} marginLeft={3} p={1} sx={{ whiteSpace: "pre-wrap", background: "#6141EB", borderRadius: 3, borderBottomRightRadius: 0 }} fontSize="0.7rem" color="white" />
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default Chat;
