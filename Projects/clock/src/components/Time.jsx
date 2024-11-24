let Time =()=>{
  let time = new Date()
  return <p  className="lead">
    This Is the Currect Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </p>
  
  };
  export default Time;