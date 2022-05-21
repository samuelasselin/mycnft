import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  xl: "80em",
  lg: "64em",
});

const theme = extendTheme({
  components: {
    Modal: {
      baseStyle: {
        dialogContainer: {
          "@supports(height: -webkit-fill-available)": {},
        },
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
