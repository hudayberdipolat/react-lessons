import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/ders10/Home";

function Ders10App(){
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


export default Ders10App;