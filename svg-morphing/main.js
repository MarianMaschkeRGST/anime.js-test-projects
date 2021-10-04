/** Inspired by coursetro.com **/
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
            points: [
                { value: '215,110 0,110 186,86 215,0' }
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
            points: [
                { value: '215,110 0,110 0,0 215,0' }
            ]
        }); 
    });
}
    