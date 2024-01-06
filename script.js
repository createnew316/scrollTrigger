gsap.to("#page2 h1",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        scrub:2,
        marker:true,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
})