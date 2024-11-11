//for dynamic compnents

function Hello(){
  var myname='taha';
  let Age=()=>{
    return '22'
  }
  var myage=22
  return <h3>
   My Name is {myname} .My age is {myage}
  </h3>
}
export default Hello;