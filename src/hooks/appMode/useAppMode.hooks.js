import { createContext, useContext } from "react";

export const AppModeContext = createContext();

export const useAppMode = ()=> {
    const context = useContext(AppModeContext);
    if(context === undefined) throw new Error("AppModeContext was use outside of DarkModeProvider")
    return context;
}
