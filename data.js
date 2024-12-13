function londonTime() {
    const ldtime = new Date().toLocaleString("en-us", {
        timeZone: "Europe/London",
        timeStyle: "medium",
        hourCycle: 'h24'
    });
    document.getElementById('londonTime').innerHTML = ldtime;
   
}
londonTime();
setInterval(londonTime, 1000);//1000 for seconds

  function sgdTime() {
     const time = new Date().toLocaleString("en-us", {
         timeZone: "Asia/Singapore",
         timeStyle: "medium",
         hourCycle: 'h24'
     });
     document.getElementById('singaporeTime').innerHTML = time;
 }
 sgdTime();
 setInterval(sgdTime, 1000);

function cadTime() {
       const cadtime = new Date().toLocaleString("en-us", {
           timeZone: "America/Toronto",
           timeStyle: "medium",
            hourCycle: 'h24'
        });
       document.getElementById('canTime').innerHTML = cadtime;
    }
 cadTime();
setInterval(cadTime, 1000);

function hkTime() {
    const chktime = new Date().toLocaleString("en-us", {
        timeZone: "Asia/Hong_Kong",
        timeStyle: "medium",
         hourCycle: 'h24'
     });
    document.getElementById('hkTime').innerHTML = chktime;
 }
 hkTime();
setInterval(hkTime, 1000);

 function ausTime() {
     const time = new Date().toLocaleString("en-us", {
         timeZone: "Australia/Melbourne",
         timeStyle: "medium",
          hourCycle: 'h24'
      });
     document.getElementById('australiaTime').innerHTML = time;
  }
  ausTime();
 setInterval(ausTime, 1000);

function nykTime() {
    const nytime = new Date().toLocaleString("en-us", {
        timeZone: "America/New_York",
        timeStyle: "medium",
         hourCycle: 'h24'
     });
    document.getElementById('newyorkTime').innerHTML = nytime;
 }
 nykTime;
setInterval(nykTime, 1000);