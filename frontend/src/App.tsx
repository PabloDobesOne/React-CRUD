import { BrowserRouter } from "react-router-dom"
import { MenuBar } from "./components/MenuBar"
import { AppRoutes } from "./routes"
import { GlobalStyles } from "./styles/global"

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <MenuBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
