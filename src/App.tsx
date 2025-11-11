import { ThemeProvider } from "@mui/material/styles"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { darkTheme, lightTheme } from "./assets/styles/theme"
import useMyContext from "./customHooks/useMyContext"
import { routes } from "./routes"

function App() {
  // context
  const { theme } = useMyContext()
  const myRoutes = createBrowserRouter(routes)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <RouterProvider router={myRoutes} />
    </ThemeProvider>
  )
}

export default App
