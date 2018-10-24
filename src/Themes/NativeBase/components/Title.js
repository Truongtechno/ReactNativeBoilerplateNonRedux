import { Platform } from "react-native";

import variable from "./../variables/platform";

export default (variables = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    fontWeight: "500",
    color: variables.titleFontColor,
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    textAlign: "center"
  };

  return titleTheme;
};
