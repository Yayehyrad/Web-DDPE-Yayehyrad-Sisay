let v=document.getElementById("video");
let myFunction=()=> document.getElementById("123").innerHTML = "articles changed!";
  function play()
  {
    
    if(v.paused)
    {
      v.play();
      document.getElementById("button1").innerHTML="Pause";
    }
    else
    {
      v.pause();
      document.getElementById("button1").innerHTML = "Play";
    }
    
  }
  function resize()
  {
    let a=prompt("Enter the width: ");
    size(a);
  }
  function size(a)
  {
    if(a>10&&a<3000)
    v.width=a;
    else
    alert("Size isn't possible")    
  }