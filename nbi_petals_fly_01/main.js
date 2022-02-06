let animTime = 1200;
let delay = -120;

function onLoad(){
    let tl = anime.timeline({
        easing: 'linear',
        duration: animTime,
        loop: '1',
        direction: 'reverse',
    })

    tl.add ({
        targets: '#center_petal',
        translateX: [0, -10],
        rotate: '-360deg',
        // duration: 2000,
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#right_1',
        translateX: [0, -40],
        delay: delay,
        duration: animTime + delay,
        rotate: '-60deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#right_2',
        translateX: [0, -70],
        delay: 2*delay,
        duration: animTime - 2 * delay,
        rotate: '-90deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#right_full',
        translateX: [0, -80],
        delay: 2* delay,
        duration: animTime - 2 * delay,
        rotate: '-240deg',
        opacity: [1, 0.2],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#right_3',
        translateX: [0, -100],
        delay: 3* delay,
        duration: animTime - 3 * delay,
        rotate: '-180deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#left_1',
        translateX: [0, 40],
        delay: delay,
        duration: animTime + delay,
        rotate: '-60deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#left_2',
        translateX: [0, 70],
        delay: 2*delay,
        duration: animTime - 2 * delay,
        rotate: '-90deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#left_full',
        translateX: [0, 80],
        delay: 2* delay,
        duration: animTime - 2 * delay,
        rotate: '-240deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
    tl.add ({
        targets: '#left_3',
        translateX: [0, 100],
        delay: 3* delay,
        duration: animTime - 3 * delay,
        rotate: '-180deg',
        opacity: [1, 0],
        easing: 'easeInOutSine'
    },0);
}