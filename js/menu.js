// Logic for menu page
 function listener(e){
     let x;
     if(e.type == "mouseenter")
        x = 20;
    else if (e.type == "mouseleave")
        x = 0;
    anime({targets: e.target, translate: x})
 }