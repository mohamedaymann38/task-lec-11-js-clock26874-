function showTime(){
    var dateTime =new Date();
    var Hours = dateTime.getHours()
    var Minutes = dateTime.getMinutes()
    var Seconds=dateTime.getSeconds()
    var timeZone ="AM"
    if (Hours == 0){
       Hours= 12;
    }
    if(Hours > 12){
        Hours = Hours - 12;
         timeZone ="PM"
    }
    var time = Hours + ":" + Minutes +":" + Seconds + " "   
    document.getElementById("maindiv").innerHTML=time ;
    setTimeout(showTime, 1000);
}
// document.write(showTime())
showTime();