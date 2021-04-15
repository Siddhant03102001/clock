function clock(){
    document.getElementById('time').innerHTML = new Date().toLocaleString('en-IN', {timeZone: 'Asia/kolkata',hourCycle:'h12'});
}
clock();
setInterval(clock, 1000);

// document.getElementById('time').innerText = "Time : " + a[1] ;