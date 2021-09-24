import styled from "styled-components";
import Button from "@mui/material/Button";
import { COLORS } from "../../utilities/constants";

// export const Register = styled(Button)({
//   fontSize: "1.2rem",
//   fontWeight: "bold",
//   opacity: "0.9",
//   color: COLORS.red,
//   margin: 0,
//   padding: "0 1rem",
//   background: COLORS.white,
//   "&:hover": {
//     background: COLORS.red,
//     color: COLORS.white,
//   },
// });
export const Register = styled(Button)`
  && {
    font-size: 1.2rem;
    font-weight: bold;
    opacity: 0.9;
    color: ${COLORS.red};
    margin: 0 0.5rem;
    padding: 0 1rem;
    background: ${COLORS.white};
    &:hover {
      background: ${COLORS.red};
      color: ${COLORS.white};
    }
  }
`;
