gsap.from("#page1 #circle",{
    scale:0.5,
    rotate:1440,
    delay:0.5,
    duration:1,
    scrollTrigger:{ //setting the properties for scroll trigger
        trigger:"#page1 #circle", //selecting the element
        scroller: "body",//selecting the scroll element
        // markers: true,// markers will be visible in the page
        start:"top 40%", // starting of the trigger point
        end:"top 30%", // end of the trigger point
        scrub: 2 //this line makes the scroll animation reversible with the scroll movement (1-5 or true/false)
    }
})
gsap.from("#page2 #circle",{
    scale:0,
    rotate:1440,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller: "body",
        // markers: true,
        start:"top 60%",
        end:"top 30%",
        scrub: 2
    }
})