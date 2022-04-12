import { BrowserRouter } from "react-router-dom"
import { MenuBar } from "./components/MenuBar"
import { CrudProvider } from "./contexts/CrudContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/global"

function App() {

  return (
    <CrudProvider>
      <BrowserRouter>
        <GlobalStyles />
        <MenuBar />
        <AppRoutes />
      </BrowserRouter>
    </CrudProvider>
  )
}

export default App
