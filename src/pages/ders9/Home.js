import { useEffect } from "react";


const Home = () => {
    const conatinerStyle = {
        backgroundColor: "#b1cfe6",
        color: "black",
    }

    const GetAllToDO =()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(val => {
            console.log(val)
        })
    }

    const createToDo =()=>{
       
        let model ={
            userId:1,
            id:0, 
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat!",
            completed:true
        }
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method:"POST", 
            body: JSON.stringify(model)
        })
        .then(res=>res.json())
        .then(val => {
            console.log(val)
        })
    }

    useEffect(() => {
      
    })

    return (
        <>
            <div className="w-50 mt-5 mx-auto p-5 " style={conatinerStyle} >
                <h1 className="text-center " >Home Page Fetch</h1>
                <hr />
                <button className="btn btn-primary w-100 " onClick={GetAllToDO}>Get All ToDo Lists</button>
                <hr />
                <button className="btn btn-success w-100 " onClick={createToDo}>add ToDo</button>
            </div>
        </>
    )
}

export default Home;