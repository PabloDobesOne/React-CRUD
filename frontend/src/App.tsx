import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
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
        <MenuBar />
        <AppRoutes />
      </BrowserRouter>
    </CrudProvider>
  )
}

export default App
