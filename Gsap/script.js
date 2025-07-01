//time line makes the animation in order as it is executed in the order of code
var tl = gsap.timeline()
tl.to("#box1",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
})
tl.to("#box2",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
})
tl.to("#box3",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
    })