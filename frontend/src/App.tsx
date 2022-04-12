import { BrowserRouter } from "react-router-dom"
import { AlertModal } from "./components/AlertModal"
import { MenuBar } from "./components/MenuBar"
import { NewCreateCidadeModal } from "./components/NewCidadeModal"
import { UpdateCidadeModal } from "./components/UpdateCidadeModal"
import { CrudProvider } from "./contexts/CrudContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <CrudProvider>
      <BrowserRouter>
        <GlobalStyles />
        <NewCreateCidadeModal />
        <UpdateCidadeModal />
        <AlertModal />
        <MenuBar />
        <AppRoutes />
      </BrowserRouter>
    </CrudProvider>
  )
}

export default App
