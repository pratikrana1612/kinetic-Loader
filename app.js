var root = document.querySelector(':root');
// root.style.setProperty("--bg-color",'green');
let before=0;
let after=90;

setInterval(() => {
   
    // if(after===2800)
    // {
    //     after=90;
    // }
    // before=before===180?360:180;
    // after=after===90?270:90;
    before=before+180;
    after=after+180;
    root.style.setProperty("--before-rotate",`${before}deg`);
    root.style.setProperty("--after-rotate",`${after}deg`);
    // if(before===360)
    // {
    //     before=0;
    // }
}, 1000);
