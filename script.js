/*gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
   // scrollTrigger:"page2 #circle"
   scrollTrigger:{
    trigger:"#page2 #circle",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:true
   }
}) */

gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})