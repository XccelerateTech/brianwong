let interval = prompt("set a timeframe in seconds from 1-60 seconds")

while (interval <1 || interval >60){
    alert("Error")
    interval = prompt("set a timeframe in seconds from 1-60 seconds")
}

function alerm(){
    let time = new Date()
    console.log(`Alarm ringing at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
}

setInterval(alerm,interval*1000);


