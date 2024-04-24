import { memo } from "react"

const About = ({names}) => {
    console.log("About Component render edildi!!!")
    const today = new Date()
    console.log("today-->", today.getMinutes())
    return (
        <>
            <div className="alert alert-warning">
                <h1 className="text-black">About Page</h1>
            </div>
            <div className="contianer">
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
        </>
    )
}

export default memo(About);