import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../utilities/constants";

export const Register = styled(Button)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  opacity: "0.9",
  color: COLORS.red,
  margin: 0,
  padding: "0 1rem",
  background: COLORS.white,
  "&:hover": {
    background: COLORS.red,
    color: COLORS.white,
  },
});
