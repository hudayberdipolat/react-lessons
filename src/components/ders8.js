import { useEffect, useState } from "react";

function Ders8() {
    // eslint-disable-next-line
    const [count, setCount] = useState(0);
    const [names , setNames] = useState([])

  
    useEffect(() => {
       setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 0.500);
    }, [names])

    const addName= () =>{
        setNames(val => [...val, `name ${count}`])
    }
    return (
        <div className="w-50 mx-auto mt-5">
            <div className="card">
                <div className="card-header">
                    <h1 className="text-center">React UseEffect</h1>
                </div>
                <div className="card-body">
                    <h3 className="text-center">Count: {count}</h3>
                    <div>
                    <ul className="list-group">
                    {
                        names.map((val, index)=>{
                            return (
                                <li className="list-group-item" key={index}>{val}</li>
                            )
                        })
                    }

                </ul>
                    </div>
                </div>
                <div className="card-footer">
                        <button className="btn btn-primary w-100 rounded-0" onClick={addName}>Click me !</button>
                    </div>
            </div>
        </div>
    );
}

export default Ders8;


