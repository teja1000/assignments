const clock=()=>{
  let time=new Date();
  let hours=time.getHours();
  let minutes=time.getMinutes();
  let seconds=time.getSeconds();
  console.log(hours+":"+minutes+":"seconds)
}
