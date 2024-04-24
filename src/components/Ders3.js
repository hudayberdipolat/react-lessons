import { useState } from "react"

function Ders3() {
    // eslint-disable-next-line
    const [name, setName] = useState("Hudayberdi");

   const changeName=(e)=>{
        setName(e.target.value)
    }


    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(name)
    }

    return (
        <>
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "25px" }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input value={name} type="text" name="name" id="name"  
                    onChange={changeName}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Ders3


