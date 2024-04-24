import axios from "axios"

const Home = () => {
    const conatinerStyle = {
        backgroundColor: "#b1cfe6",
        color: "black",
    }
    const getAllToDoWithAxios = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }


    const postMethodWithAxios=()=>{
           let model ={
            userId:17,
            id:17, 
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugiat!",
            completed:true
           } 

           axios.post('https://jsonplaceholder.typicode.com/todos', 
            model,
        )
        .then(res=>{
            console.log("add new todo")
        })
        .catch(err=>{
            if (err.code ==  "ERR_NETWORK"){
                console.log("ERR_NETWORK test")
            }
        })
    } 

    return (
        <>
            <div className="w-50 mt-5 mx-auto p-5 " style={conatinerStyle} >
                <h1 className="text-center " >Home Page  Axios </h1>
                <hr />
                <button className="btn btn-primary w-100 " onClick={getAllToDoWithAxios} >Get All ToDo Lists</button>
                <hr />
                <button className="btn btn-success w-100 " onClick={postMethodWithAxios} >add ToDo</button>
            </div>
        </>
    )
}

export default Home;