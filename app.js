const flightPath =  {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:1400, y:0},
        {x:1000, y:20},
      
        // {x:window.innerWidth, y:-200},
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".second-face",
    duration: 2500,
    triggerHook: 0
})
.setTween(tween)
.setPin('.second-face')
.addTo(controller);
