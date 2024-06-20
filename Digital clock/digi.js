let ampm = document.getElementById("ampm")
function display(){
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  if(hr>12){
    hr = hr -12;
    ampm.innerHTML = "PM"
  }
  document.getElementById("hours").innerHTML =zero( hr);
  document.getElementById("mins").innerHTML =zero(min);
  document.getElementById("sec").innerHTML = zero(sec);
}
function zero(x){
    if(x<10){
        return "0"+x
    }
    else{
        return x
    }
}
setInterval(display,1000)