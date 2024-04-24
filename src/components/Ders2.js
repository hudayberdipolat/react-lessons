
function Ders2() {
    const users = [
        {
            id: 1,
            username: "polat",
            fullName: "Hudayberdi Polatov",
            age: 23,
        },
        {
            id: 2,
            username: "rysgal",
            fullName: "Rysgal Garajayew",
            age: 25,
        },
        {
            id: 3,
            username: "nuryagdy",
            fullName: "Nuryagdy Jumayyev",
            age: 30,
        },
        {
            id: 4,
            username: "gena",
            fullName: "Geldimyrat Gurbangulyyev",
            age: 17,
        },
    ]


    return (
        <>
            <div>
            <table border="2"  style={{border:"1px solid black", width:"100%", borderCollapse:"collapse", textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, index) => {
                       return(
                        <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.username}</td>
                        <td>{val.fullName}</td>
                        <td>{val.age}</td>
                    </tr>
                       )
                    })}
                </tbody>
            </table>
            </div>
        </>
    )

}


// function UserTable(users) {
//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Username</th>
//                         <th>FullName</th>
//                         <th>Age</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((val) => {
//                         <tr>
//                             <td>{val.id}</td>
//                             <td>{val.username}</td>
//                             <td>{val.fullName}</td>
//                             <td>{val.age}</td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
//         </>
//     )
// }



export default Ders2