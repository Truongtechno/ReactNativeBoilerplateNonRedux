import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: "#eef5f9",
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: "#eef5f9"
    }
  };

  return contentTheme;
};
