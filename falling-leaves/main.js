function onLoad(){


    //svg name space
    const ns = "http://www.w3.org/2000/svg"

    // Create/copy a new svg group from the first svg and place in the dom for copies
    const svg = document.getElementsByTagName('svg')[0]
    const copyGroup = document.createElementNS(ns,'g')
    copyGroup.setAttribute('id','copy');
    svg.appendChild(copyGroup)


    const header = document.querySelector('header');
    // getComputedStyle returns object containing the values of all CSS properties of an element
    // .split(separator) -> splits string into ordered list of substrings. Split separator word being px
    // Here: takes the first entry of px in header height #1
    const header_height = getComputedStyle(header).height.split('px')[0];
    console.log(header_height);

    function changeArrow(direction){
    const arrow = document.querySelector('.scroll-direction');
    console.log(arrow)
    arrow.setAttribute('data-direction', direction)
    }

    // Function change is not working  when bound in onLoad function. Should be in Eventlistener.
    function changeDirection(){
        // Compares the header height #1 and compares to offset in scroll -> Fully dynamic scroll breakpoints
        if(window.pageYOffset > header_height){
            changeArrow("↑")    
        }
        if(window.pageYOffset < header_height){
            changeArrow("↓")
        }
    }


    console.log(window.pageYOffset)

    // Array helper for leafPicker function. 'collection' key matches svg data attribute, 'leafs' key creates a 
    const leafPickers = [
        {leafs:"orangeLeafs",
        collection: "Orange"},
        {leafs:"purpleLeafs",
        collection:"Purple"},
        {leafs:"redLeafs",
        collection: "Red"},
        {leafs:"pinkLeafs",
        collection:"Pink"},
        {leafs:"blueLeafs",
        collection:"blue"},
        {leafs:"greenLeafs",
        collection:"green"}
    ]

    // Function to copy leafs to a groupd tag in the dom
    let leafCopy = [];
    function leafPicker(collection){
        const leafs = document.querySelectorAll(`[data-name="${collection}"]`)
        for(const leaf of leafs){
            // .cloneNode creates a copy with all attributes, values, inline listeners
            // Does not copy event listeneres or listeners assigned to element properties(onclick etc.)
            leafCopy.push(leaf.cloneNode(true))
        }
    }

    // Iterate over leafPickers and create copy in leafCopy
    // Naming is very unfortunate: There are three different variables named "leafs"
    for(const leafs of leafPickers){
        leafPicker(leafs.collection)
    }

    console.log(leafCopy)

    function makeCopies(){
        for(const copies of leafCopy){
         copyGroup.appendChild(copies)

        const leafCopies = Array.from(document.getElementById('copy').querySelectorAll('[data-name]'))

        for(const [index, leafCopy] of leafCopies.entries()){
            leafCopy.setAttribute('id' , `copy-${index}`)
            }
        }  
    }

    makeCopies()

    // Get all copied leafs
    // logic: Original leafs should not move
    const leafCopies = Array.from(document.getElementById('copy').querySelectorAll('[data-name]'))

    let spring = {},
        summer = {},
        autumn = {};

    function shuffle(array) {
        var counter = array.length, temp, index;

        // While there are elements in the array
        while (counter--) {
            // Pick a random index
            index = (Math.random() * counter) | 0;

            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    spring = shuffle(leafCopies);
    spring.length = 20; // get 4 random elements


    summer = shuffle(leafCopies);
    summer.length = 40;


    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
        }

    // function checkSlide(){
    //   changeDirection()
    //   console.log(window.scrollY)
    // }
    changeDirection()


    const summerFall = anime({
    targets : summer,
    easing: 'easeInOutQuint',
    opacity : 0,
    translateY: 200,
    duration: function(el,i,l){
        return 2500 + (i * 100)
    },
        autoplay : false

    })

    function playAnimation(){

    if (window.pageYOffset <  10)
            {
        summerFall.play()  
            summerFall.restart()
            };
    };


    document.addEventListener("touchmove", ScrollStart, false);
    document.addEventListener("scroll", Scroll, false);

    function ScrollStart() {
        debounce(playAnimation,10)
    }

    function Scroll() {
        //end of scroll event for iOS
        //and
        debounce(playAnimation,10)
    //start/end of scroll event for other browsers
    }

    window.addEventListener('scroll' , debounce(playAnimation,10))
}