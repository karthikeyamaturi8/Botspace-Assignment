import { Box, Button, TextField, Typography } from "@mui/material";
import CustomRadio2 from "../customRadio";
import { useStarStore } from "../../stores/star";

const SelectComment = () => {
  const { comment, setComment, currentStep, onClickInput } = useStarStore();
  return (
    <>
      {currentStep >= 2 && (
        <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={2}>
          <Typography fontSize={"1.3rem"} fontWeight={"600"}>
            And this comment has
          </Typography>
          <Box gap={1} flexDirection={"column"} display={"flex"}>
            <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
              <Box display={"flex"} alignItems={"center"}>
                <CustomRadio2 checked />
                <Typography ml={1} fontSize={"1rem"} fontWeight={400}>
                  a specific word or words
                </Typography>
              </Box>
              <Box gap={"0.5rem"} display={"flex"} flexDirection={"column"}>
                <TextField
                  value={comment}
                  onClick={() => onClickInput()}
                  onChange={(e) => {
                    setComment(e.target.value);
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
                  placeholder="Enter a word or multiple"
                />
                <Typography color="gray" fontSize={"0.8rem"} fontWeight={400}>
                  Use commas to separate words
                </Typography>

                <Box gap={1} display={"flex"} alignItems={"center"}>
                  <Typography color="gray" fontSize={"0.8rem"} fontWeight={400}>
                    For Example:
                  </Typography>
                  <Box gap={0.5} display={"flex"} alignItems={"center"}>
                    <Button
                      onClick={() => {
                        setComment("Price");
                      }}
                      variant="outlined"
                      sx={{ padding: "2px !important", borderRadius: 10, textTransform: "none", color: "gray", bgcolor: "#EFF5FE", border: "1px solid #89D2FD" }}
                    >
                      Price
                    </Button>
                    <Button
                      onClick={() => {
                        setComment("Link");
                      }}
                      variant="outlined"
                      sx={{ padding: "2px !important", borderRadius: 10, textTransform: "none", color: "gray", bgcolor: "#EFF5FE", border: "1px solid #89D2FD" }}
                    >
                      Link
                    </Button>
                    <Button
                      onClick={() => {
                        setComment("Shop");
                      }}
                      variant="outlined"
                      sx={{ padding: "2px !important", borderRadius: 10, textTransform: "none", color: "gray", bgcolor: "#EFF5FE", border: "1px solid #89D2FD" }}
                    >
                      Shop
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2} bgcolor={"var(--secondary-color)"} width={"100%"} p={1.5} borderRadius={2}>
              <Box display={"flex"} alignItems={"center"} width={"100%"}>
                <CustomRadio2 />
                <Box ml={1} flexGrow={1}>
                  <Typography fontSize={"1rem"} fontWeight={400}>
                    any word
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SelectComment;
