function listener(e) {
    let x;
    // let y;
    // To do: Still bugging but find way to make z-index back to 1 on mouseleave
    if(e.type == "mouseenter")
        x = 2.5;
        // y = 10;
    else if (e.type == "mouseleave")
        x = 1;
        // y = 1;
    anime({targets: e.target, 
            scale: x, 
            zIndex:{
                value: 10,
                round: true,
            }});
    }

// Create Grid 9*16 
// i is rows, j is columns
function loadPage(){
    let counter = 0;
    for(let i = 0; i < 9; i++)
        for(let j = 0; j < 16; j++) {
            counter++;
            let div = document.createElement('div');
            div.classList.add(`image-banner`)
            div.classList.add(`img-${counter}`)
            document.getElementById("banner").appendChild(div);
        }
    
    let divs = Array.from(document.getElementsByTagName("div"));
    console.log("array created")
    divs.forEach(item => { item.onmouseenter = listener;
                            item.onmouseleave = listener; });
    }


