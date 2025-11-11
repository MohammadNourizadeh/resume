import { useContext } from "react";
import MainContext from "../contexts/MainContext";

export default function useMyContext() {
    const context = useContext(MainContext)

    if (!context) {
        throw new Error("MainContext must be used within MainContextProvider");
    }

    return context
}
