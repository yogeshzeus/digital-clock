let clock = () => {

    var hour= document.getElementById('hours');
    var minutes=document.getElementById('minutes');
    var seconds=document.getElementById('seconds');
    var ampm=document.getElementById('am');

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    hour.innerHTML=hrs;
    minutes.innerHTML=mins;
    seconds.innerHTML=secs;
    ampm.innerHTML=period;
  
 
    setTimeout(clock, 1000);
  };
  
  clock();






  function settfun(){
    
    let waketime = document.getElementById("setwakeuptime");
    var wt = waketime.options[waketime.selectedIndex].text;
    let lunchtime = document.getElementById("setlunchtime");
    var lt = lunchtime.options[lunchtime.selectedIndex].text;

    let naptime = document.getElementById("setnaptime");
    var nt = naptime.options[naptime.selectedIndex].text;

    

    if(waketime=="" || lunchtime=="" || naptime=="" ){

    }
    else{
    var wwtim = document.getElementById("waket").innerText = "wake up time is "+wt;
   
    var lltim = document.getElementById("luncht").innerText = "lunch up time is  "+lt;
    var natim = document.getElementById("napt").innerText = "nap up time is "+nt;

    document.getElementById("divbox2").style.display = "block";
    
    }

  }



  function settime(){

    var i =document.getElementById("setwakeuptime").value;
    var j =document.getElementById("setlunchtime").value;
    var k =document.getElementById("setnaptime").value;
  
    var hour=new Date().getHours();
  
  
    if(i==hour){
      document.getElementById("lunchbottom").style.backgroundImage="url(./img/wake_up.png)";
      document.getElementById("lunch").innerHTML="Wake up!!";
    }
    else if(j==hour){
      document.getElementById("lunchbottom").style.backgroundImage="url(./img/lunch_image.png)";
      document.getElementById("lunch").innerHTML="Lets Have Some Lunch";
    }
    else if(k==hour){
      document.getElementById("lunchbottom").style.backgroundImage="url(./img/goodnight.png)";
      document.getElementById("lunch").innerHTML="Good Night !!";
    }
    else{
      document.getElementById("lunchbottom").style.backgroundImage="url(./img/1.png)";
    }
    settfun();

  }
