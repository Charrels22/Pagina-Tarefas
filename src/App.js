import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./Routes/routes";

export default function App(){
  return(
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}