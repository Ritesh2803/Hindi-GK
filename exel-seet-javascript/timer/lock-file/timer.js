function startTimer(){
    let timeLimit=30;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
      timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
            
            }
            if(timeLimit < 6){
                remainingTime.classList.add("less-time");  
            }
            remainingTime.innerHTML=timeLimit;
            if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
    }
    },1000)
}