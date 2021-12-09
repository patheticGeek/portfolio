import type { Configuration } from "twind";
import * as twindColors from "twind/colors";

const twindConfig: Configuration = {
  theme: {
    extend: {
      colors: {
        ...twindColors,
      },
      fontFamily: {
        sans: ["Fira Code", "sans-serif"],
      },
    },
  },
};

export default twindConfig;
