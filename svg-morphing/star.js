/** Original code https://codepen.io/Paolo-Duzioni/pen/jvrxpL **/
// Always remember: SVG animations: Polymorph always requires the same amount of points for the start and end shape 
function onLoad(){

    // Refs
    const wrapCta  = document.querySelector('#wrap-cta'),
    btnCta   = document.querySelector('#cta'),
    content  = document.querySelector('#content'),
    btnClose = document.querySelector('#close');
    
    
    // Anime.js Commons Values for SVG Morph
    const common = {
        targets: '.polymorph',
        easing: 'easeOutQuad',
        duration: 600,
        loop: false
    };
    
    
    // Show content
    btnCta.addEventListener('click', () => {
        // Elements apparence
        wrapCta.classList.remove('active');
        content.classList.add('active');
        
        // Morph SVG
        anime({
            ...common,
            scale: 2,
            points: [
                { value: '304.21 425.56 158.26 430.34 50.45 356.43 0.53 219.99 37.78 93.73 137.31 0.5 283.7 0.5 423.51 51.03 448.37 205.58 431.56 383.21 304.21 425.56' }
            ],
        });
    });
    
    
    // Hide content  
    btnClose.addEventListener('click', () => {
        // Elements apparence
        content.classList.remove('active');
        wrapCta.classList.add('active');
        
        // Morph SVG
        anime({
            // "..." is spread /rest operator
            // myFunction(...spread-operator): expand and expression where multiple arguments are expected
            // function(a, b,...the Args of rest operator): for functions with variable amount of arguments
            ...common,
            scale: 1,
            points: [
                { value: '267.38 426.15 158.67 324.88 13.62 357.02 76.34 222.34 0.94 94.33 148.41 112.35 246.87 1.09 275.3 146.91 411.54 206.17 281.63 278.26 267.38 426.15' }
            ]
        }); 
    });
}
    