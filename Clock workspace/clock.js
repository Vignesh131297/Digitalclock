function change(){
date=new Date();
hour=date.getHours();
minute=date.getMinutes();
second=date.getSeconds();
timing=date.toLocaleTimeString();
x=document.getElementById("time")
x.innerHTML=timing;

if(second%2==0){
    x.style.color="red"
}
else{
    x.style.color="purple"
}
}

function start(){
    clear=setInterval(change,1000);
}
function stop(){
    clearInterval(clear);
}
