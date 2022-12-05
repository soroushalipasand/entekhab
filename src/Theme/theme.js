import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    h1: {
      fontFamily: "pelak_bold !important",
    },
    h4: {
      fontFamily: "pelak_light !important",
    },
    subtitle1: {
      fontFamily: "pelak_light !important",
    },

    button: {
      borderRadius: "5px !impotant",
      fontFamily: "pelak_bold !important",
    },
    fontFamily: "pelak_medium !important",
    color: "#4F4F4F",
  },
});

export default theme;
