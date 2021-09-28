function listener(e) {
    let x;
    // let y;
    // To do: Still bugging but find way to make z-index back to 1 on mouseleave
    if(e.type == "mouseenter")
        x = 0.5;
        // y = 10;
    else if (e.type == "mouseleave")
        x = 0;
        // y = 1;
    anime({targets: e.target, 
            scale: x+1, 
            zIndex:{
                value: x*10,
                round: true,
            },
            duration: 200,
            easing: "easeOutCirc",
            borderColor: "#ffffff",
            borderWidth: x*6,
        });
    }

// Create Grid 4*6 
// i is rows, j is columns
// Adjust css variables --gallery-img-wno and --gallery-img-hno. accordingly.
function loadPage(){
    let counter = 0;
    for(let i = 0; i < 4; i++)
        for(let j = 0; j < 6; j++) {
            counter++;
            let div = document.createElement('div');
            div.classList.add(`image-banner`)
            // div.classList.add(`img-${counter}`)
            div.setAttribute("style", `background-image: url(./img/img-${counter}.jpeg);`)
            document.getElementById("banner").appendChild(div);
        }
    
    let divs = Array.from(document.getElementsByTagName("div"));
    console.log("array created")
    divs.forEach(item => { item.onmouseenter = listener;
                            item.onmouseleave = listener; });
    }


