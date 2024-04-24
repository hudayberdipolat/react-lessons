import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./pages/ders9/Home"

const Ders9App =()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Ders9App;