
function Ders1() {
    return(
      <>
      <Ball/>
      </>
    )
  }
  
  function Ball() {
    const ball = 100
    if(ball >= 50) {
      return(
        <Gecdin/>
      )
    }else {
      return (
        <Yykyldyn/>
      )
    }
  }
  
  function Gecdin(){
    return (
      <>
        <div>
          <h1 style={{ color:"white", backgroundColor:"green", padding:"10px"}}>Gecdin!!!</h1>
        </div>
      </>
    )
  
  }
  
  function Yykyldyn(){
    return(
      <>  
      <div>
        <h1 style={{color:"white", backgroundColor:"red", padding:"10px"}}>Yykyldyn!!!</h1>
      </div>
      </>
    )
  }

  export default Ders1