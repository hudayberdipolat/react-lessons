import { useEffect, useState } from "react"

const ReactHook = () => {
    // eslint-disable-next-line
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count => count + 1)
    }

   

    return (
        <>
            <div className="w-50 mx-auto mt-5">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">React Hook</h1>
                    </div>
                    <div className="card-body">
                        <h3 className="text-center">Count: {count}</h3>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary w-100 rounded-0" onClick={increment}>Click me !</button>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default ReactHook