import { Box, Button, TextField, Typography, Link, IconButton } from "@mui/material";
import { useStarStore } from "../../stores/star";
import IOSSwitch from "../iosSwitch";
import InfoIcon from "../../assets/info";

const SendMessage = () => {
  const { message, setMessage, currentStep, onClickInput, openingDM, setOpeningDM, openingDMLink, setOpeningDMLink } = useStarStore();
  return (
    <>
      {currentStep >= 4 && (
        <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={2}>
          <Typography fontSize={"1.3rem"} fontWeight={"600"}>
            They wil get
          </Typography>
          <Box gap={1} flexDirection={"column"} display={"flex"}>
            <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
              <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography ml={1} fontSize={"1rem"} fontWeight={400}>
                  an opening DM
                </Typography>
                <IOSSwitch checked />
              </Box>
              <Box gap={"0.5rem"} display={"flex"} flexDirection={"column"}>
                <TextField
                  multiline
                  rows={5}
                  value={openingDM}
                  onClick={() => onClickInput()}
                  onChange={(e) => {
                    setOpeningDM(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      padding: 2, // removes outer padding
                      "& input": {
                        padding: "10px !important", // removes input padding
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // thin border
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // keep thin border on focus
                        borderColor: "gray",
                        boxShadow: "none",
                      },
                    },
                  }}
                  variant="outlined"
                  placeholder="Write a opening DM"
                />
                <TextField
                  value={openingDMLink}
                  onClick={() => onClickInput()}
                  onChange={(e) => {
                    setOpeningDMLink(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      padding: 0, // removes outer padding
                      "& input": {
                        padding: "10px !important", // removes input padding
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // thin border
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // keep thin border on focus
                        borderColor: "gray",
                        boxShadow: "none",
                      },
                    },
                  }}
                  variant="outlined"
                  placeholder="Write a opening Link"
                />

                <Link href="#" fontSize={"0.9rem"}>
                  <IconButton
                    sx={{
                      height: 16,
                      width: 16,
                      padding: 0,
                      color: "#1976d2",
                      mb: "0.2rem",
                    }}
                  >
                    {<InfoIcon />}
                  </IconButton>{" "}
                  Why does an Opening DM matter?
                </Link>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
              <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography ml={1} fontSize={"1rem"} fontWeight={400}>
                  a DM with the link
                </Typography>
              </Box>
              <Box gap={"0.5rem"} display={"flex"} flexDirection={"column"}>
                <TextField
                  multiline
                  rows={3}
                  value={message}
                  onClick={() => onClickInput()}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      padding: 2, // removes outer padding
                      "& input": {
                        padding: "10px !important", // removes input padding
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // thin border
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px", // keep thin border on focus
                        borderColor: "gray",
                        boxShadow: "none",
                      },
                    },
                  }}
                  variant="outlined"
                  placeholder="Write a message"
                />
                <Typography display={currentStep >= 5 && message.length === 0 ? "flex" : "none"} ml={1} fontSize={"0.8em"} color="var(--error-color)" fontWeight={400}>
                  Create the DM you'd like to send
                </Typography>
                <Button variant="outlined" sx={{ textTransform: "none", color: "#000", border: "1px solid #ccc", background: "#fff" }}>
                  + Add A Link
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SendMessage;
