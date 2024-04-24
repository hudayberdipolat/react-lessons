import { useState } from "react";
import About from "./About";

const Home =()=>{
     // eslint-disable-next-line
    const [count, setCount] = useState(0)
    // eslint-disable-next-line
    const [names , setNames] = useState([])

        const clickButton =()=>{
            setCount(c=>c+1)
        }

    return (
        <>
            <div className="alert alert-success">
                <h1 className="text-black">Home Page</h1>
            </div>
            <h3>{count}</h3>
            <button className="btn btn-primary" onClick={clickButton}>Click me!</button>
            <About names={names} />

        </>
    )
}

export default Home;