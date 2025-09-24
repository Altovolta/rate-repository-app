import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTag: "white",
    primary: '#0366d6',
    appBar: "#adadadff",
    appBarButtonHighlight: "#cacacaff",
    mainBackground: "#e1e4e8",
    borderColor: '#b3b3b3ff',
    remove:"#da3c4cff" ,
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    appBarItem: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'sans-serif',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borders: {
    borderRadius: 3,
    width: 1,
  },
  tinyImage: {
    width: 50, 
    height: 50,
  },
  spacing: {
    xs: 3,
    sm: 5,
    mid: 7,
    textInput: 10,
    formPage: 20,
  },
};

export default theme;