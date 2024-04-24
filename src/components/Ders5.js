import { useState } from "react"

function Ders5() {

    const [inputs, setInputs] = useState({})
    const bilimi =[
      "yokary", "orta", "orta-hunar"  
    ];
    
    const handleChange = (e) => {

        const name = e.target.name; // Get the name of the input field
        const value = e.target.value; // Get the value of the input field
        const valid = e.target.validity.valid
        if (valid) {
            e.target.className ="form-control is-valid"
        }else{
            e.target.className ="form-control is-invalid"
        }
        console.log(e.target.validity.valid)
        setInputs(values => ({...values, [name]: value})); // Update the state with the new value
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
      
        console.log(inputs)
    }

    return (
        <>
            <div className="container mt-4">
                <form onSubmit={handleSubmit} autoComplete="off">
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
                                    className="form-control rounded-0"
                                    id="full_name" name="full_name"
                                    placeholder="Full name ..."
                                    required
                                    value={inputs.full_name || "" }
                                    onChange={handleChange}
                                />
                                  <div className="invalid-feedback">
                                    FullName min 3 harp bolmaly
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    min="18"
                                    className="form-control rounded-0"
                                    name="age" id="age"
                                    placeholder="Age..."
                                    value={inputs.age}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                   18 yasyndan kiciler girip bolmez
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputState" className="form-label">Bilimi</label>
                                <select
                                    id="inputState"
                                    name="bilimi"
                                    className="form-select rounded-0"
                                    value={inputs.bilimi || ""}
                                    onChange={handleChange}

                                >
                                    <option value="">Saylanmadyk</option>
                                    {
                                        bilimi.map((val , index)=>{
                                            return (
                                                <option key={index}>{val}</option>
                                            )
                                            
                                        })
                                    }
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

export default Ders5