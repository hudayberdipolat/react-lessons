import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                </Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter> 
        </>

    )
}


export default App;