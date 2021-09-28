        function onLoad(){
            let animation = anime({
                targets: '.seek-anim .content-card',
                opacity: 1,
                delay: function(el, i) { return i * 200; },
                elasticity: 200,
                easing: 'easeInOutSine',
                autoplay: false
                });

            let bars = Array.from(document.getElementsByClassName('bar'));
            let seekProgressEl = document.querySelector('.progress');
            seekProgressEl.oninput = function() {
                animation.seek(animation.duration * (seekProgressEl.value / 100));                           
                };
            }


// if i < pv-10 && pv+9 > i
// width = Math.abs((pv - i))*10


