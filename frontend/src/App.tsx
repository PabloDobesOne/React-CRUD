import { BrowserRouter } from "react-router-dom"
import { AlertModal } from "./components/AlertModal"
import { MenuBar } from "./components/MenuBar"
import { NewCreateCidadeModal } from "./components/NewCidadeModal"
import { UpdateCidadeModal } from "./components/UpdateCidadeModal"
import { CrudProvider } from "./contexts/CrudContext"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/global"
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import { NewCreateClienteModal } from "./components/NewClienteModal"
import { UpdateClienteModal } from "./components/UpdateClienteModal"

function App() {
  return (
    <CrudProvider>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
        <NewCreateCidadeModal />
        <NewCreateClienteModal />
        <UpdateCidadeModal />
        <UpdateClienteModal />
        <AlertModal />
        <MenuBar />
        <AppRoutes />
      </BrowserRouter>
    </CrudProvider>
  )
}

export default App
