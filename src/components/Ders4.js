import { useState } from "react"

function Ders4() {
    // eslint-disable-next-line
    const [fullName, setFullName] = useState("")
    // eslint-disable-next-line
    const [age, setAge] = useState("18")
    // eslint-disable-next-line
    const [bilimi, setBilimi] = useState("")

    const handleSumbit =(e)=>{
        e.preventDefault()
        console.log(fullName, age, bilimi)
    }
    return (
        <>
            <div className="container mt-4">
                <form onSubmit={handleSumbit}>
                    <div className="card rounded-0">
                        <div className="card-header">
                            <h3 >Form</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="full_name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    minLength="3"
                                    className="form-control"
                                    id="full_name" name="full_name"
                                    placeholder="Full name ..."
                                    value={fullName}
                                    onChange={(e)=> setFullName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    min="18"
                                    className="form-control"
                                    name="age" id="age"
                                    placeholder="Age..."
                                    value={age}
                                    onChange={(e)=> setAge(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputState" className="form-label">Bilimi</label>
                                <select
                                    id="inputState"
                                    name="bilimi"
                                    className="form-select"
                                    value={bilimi}
                                    onChange={(e)=> setBilimi(e.target.value)}

                                >
                                    <option value="">Saylanmadyk</option>
                                    <option value="yokary">Yokary</option>
                                    <option value="orta">Orta</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary w-25" type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Ders4