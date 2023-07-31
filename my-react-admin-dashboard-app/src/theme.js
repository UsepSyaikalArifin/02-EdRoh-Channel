/* 01 - Tokens Colors */
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#d1d1d1",
          200: "#a4a3a2",
          300: "#767674",
          400: "#494845",
          500: "#1b1a17",
          600: "#161512",
          700: "#10100e",
          800: "#0b0a09",
          900: "#050505",
        },
        lightYellow: {
          100: "#fff9df",
          200: "#fff3be",
          300: "#ffed9e",
          400: "#ffe77d",
          500: "#ffe15d",
          600: "#ccb44a",
          700: "#998738",
          800: "#665a25",
          900: "#332d13",
        },
        darkBlue: {
          100: "#d0d0d8",
          200: "#a1a1b1",
          300: "#73718a",
          400: "#444263",
          500: "#15133c",
          600: "#110f30",
          700: "#0d0b24",
          800: "#080818",
          900: "#04040c",
        },
        white: {
          100: "#fefffa",
          200: "#fefff5",
          300: "#fdfff1",
          400: "#fdffec",
          500: "#fcffe7",
          600: "#caccb9",
          700: "#97998b",
          800: "#65665c",
          900: "#32332e",
        },
        grey: {
          100: "#e3e4e5",
          200: "#c7c9ca",
          300: "#abadb0",
          400: "#8f9295",
          500: "#73777b",
          600: "#5c5f62",
          700: "#45474a",
          800: "#2e3031",
          900: "#171819",
        },
      }
    : {
        black: {
          100: "#050505",
          200: "#0b0a09",
          300: "#10100e",
          400: "#161512",
          500: "#1b1a17",
          600: "#494845",
          700: "#767674",
          800: "#a4a3a2",
          900: "#d1d1d1",
        },
        lightYellow: {
          100: "#332d13",
          200: "#665a25",
          300: "#998738",
          400: "#ccb44a",
          500: "#ffe15d",
          600: "#ffe77d",
          700: "#ffed9e",
          800: "#fff3be",
          900: "#fff9df",
        },
        darkBlue: {
          100: "#04040c",
          200: "#080818",
          300: "#0d0b24",
          400: "#110f30",
          500: "#15133c",
          600: "#444263",
          700: "#73718a",
          800: "#a1a1b1",
          900: "#d0d0d8",
        },
        white: {
          100: "#32332e",
          200: "#65665c",
          300: "#97998b",
          400: "#caccb9",
          500: "#fcffe7",
          600: "#fdffec",
          700: "#fdfff1",
          800: "#fefff5",
          900: "#fefffa",
        },
        grey: {
          100: "#171819",
          200: "#2e3031",
          300: "#45474a",
          400: "#5c5f62",
          500: "#73777b",
          600: "#8f9295",
          700: "#abadb0",
          800: "#c7c9ca",
          900: "#e3e4e5",
        },
      }),
});

/* 02 - ThemeSettings */
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.lightYellow[500],
            },
            secondary: {
              main: colors.lightYellow[400],
            },
            neutral: {
              dark: colors.white[900],
              main: colors.white[500],
              light: colors.white[100],
            },
            background: {
              default: colors.darkBlue[500],
            },
          }
        : {
            primary: {
              main: colors.lightYellow[100],
            },
            secondary: {
              main: colors.lightYellow[400],
            },
            neutral: {
              dark: colors.white[900],
              main: colors.white[500],
              light: colors.white[100],
            },
            background: {
              default: colors.white[500],
            },
          }),
    },
    typography: {},
  };
};
