import { Dashboard } from "./Pages/Dashboard"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Signup } from "./Pages/Signup"
import { Signin } from "./Pages/Signin"
import { Base } from "./Pages/Base"
import { ShareBrainDashBoard } from "./Pages/ShareBrainDashBoard"

function App() {

  return (<>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/brain/:hash" element={<ShareBrainDashBoard/>}/>
          </Routes>
        </BrowserRouter>
    </> 
  )
}

export default App
