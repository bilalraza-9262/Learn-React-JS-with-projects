import { createContext, useContext } from "react";

export const ThemeCtx = createContext({
	themeMode: "dark",
	lightTheme: () => { },
	darkTheme: () => { },
});

export const ThemeProvider = ThemeCtx.Provider;

export default function useTheme() {
	return useContext(ThemeCtx)
}