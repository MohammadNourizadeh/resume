import { createContext, useState, type ReactNode } from "react";
import type { ContextType } from "../types/contextType";

const MainContext = createContext<null | ContextType>(null)

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
    // state
    const [theme, setTheme] = useState<string>('dark')

    return (
        <MainContext.Provider value={{ theme, setTheme }}>
            {children}
        </MainContext.Provider>
    )
}



export default MainContext