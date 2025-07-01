gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2", //this should be the parent element of the animating element to get the pin feature
        scroller:"body",
        markers: true,
        start:"top 0",
        end:"top -100%",
        scrub: 2,
        pin:true
    }
})