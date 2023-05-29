const min =document.querySelector(".min");
const hour =document.querySelector(".hour");
const sec1=document.querySelector(".sec");
setInterval(() => {
    const time =new Date;
    console.log(time.getHours());
    const secDeg =time.getSeconds()/60 *360 -90;
    const minDeg =time.getMinutes()/60 *360 -90;
    const hourDeg =time.getHours()/12 *360 -90;
    const sec_ans="rotate("+secDeg+"deg)";
    const min_ans="rotate("+minDeg+"deg)";
    const hour_ans="rotate("+hourDeg+"deg)";
    
    sec1.style.transform=sec_ans;
    hour.style.transform=hour_ans;
    min.style.transform=min_ans;
    
}, 1000);