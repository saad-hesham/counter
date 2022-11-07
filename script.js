let secondsBlock = document.getElementById("seconds"); //seconds section
let minutesBlock = document.getElementById("minutes");//minutes section
let hoursBlock = document.getElementById("hours");//hours section
let daysBlock = document.getElementById("days");//days section
let i = secondsBlock.children[0].children[0].innerHTML;// seconds section value

setInterval(function(){ //this function will repeat the process of decreasing numbers of the block
    i--
    if(i<10){
        for(let x = 0 ; x <= 2 ; x++){ //this loop will change the value of all sections and will add 0 before when the number lower than 10
            secondsBlock.children[x].children[0].innerHTML="0"+i
            secondsBlock.children[1].classList.add("flib") 
        }
    }

    else {
    for(let x = 0 ; x <= 2 ; x++){
        secondsBlock.children[x].children[0].innerHTML=i
        secondsBlock.children[1].classList.add("flib") 
     }
    }

    if(i==0){ //this loop will reset the seconds counters and decrease the minutes number
        i=60;
        //------------------------------------------------------//
        for(let x = 0 ; x <= 2 ; x++){
            minutesBlock.children[x].children[0].innerHTML= minutesBlock.children[x].children[0].innerHTML-1
            minutesBlock.children[1].classList.add("flib")
            setTimeout(function(){minutesBlock.children[1].classList.remove("flib")},1000)
        }
    }
   if(minutesBlock.children[0].children[0].innerHTML==0){ //this loop will reset the minutes counters and decrease the hours number
    for(let x = 0 ; x <= 2 ; x++){
        minutesBlock.children[x].children[0].innerHTML= 60
        minutesBlock.children[1].classList.add("flib")
        setTimeout(function(){minutesBlock.children[1].classList.remove("flib")},1000)
        hoursBlock.children[x].children[0].innerHTML= hoursBlock.children[x].children[0].innerHTML-1
        hoursBlock.children[1].classList.add("flib")
        setTimeout(function(){hoursBlock.children[1].classList.remove("flib")},1000)
    }
   }

   if(hoursBlock.children[0].children[0].innerHTML==0){//this loop will reset the hours counters and decrease the days number
    for(let x = 0 ; x <= 2 ; x++){
        hoursBlock.children[x].children[0].innerHTML= 24;
        hoursBlock.children[1].classList.add("flib")
        setTimeout(function(){hoursBlock.children[1].classList.remove("flib")},1000)
        daysBlock.children[x].children[0].innerHTML= daysBlock.children[x].children[0].innerHTML-1
        daysBlock.children[1].classList.add("flib")
        setTimeout(function(){daysBlock.children[1].classList.remove("flib")},1000)
    }
   }
   
  


},1000)