const flightPath =  {
    curviness: 1.25,
    autoRotate: true,
    values: [{x:100, y:-20}]
};

const tween = new TimelineLite();

tween.add(
    Tweenlite.to('.paper-plane', 1, {
        bazier: flightPath,
        ease: Power1.easeInOut
    })
);