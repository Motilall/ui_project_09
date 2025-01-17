


var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.3
})

tl.to("#line1-part1", {

})

tl.from("#line1-part1",{
    opacity: 0,
    onStart: function(){
        var h5timmer = document.querySelector("#line1-part1 h5")
        var grow = 0 
        setInterval(function(){
            if(grow < 100){
                // grow++
                // console.log(grow)
                h5timmer.innerHTML = grow++
            }else{
                // grow = 100
                // console.log(grow)
                h5timmer.innerHTML = grow
            }
        },35);
    },
})

tl.to('.line h2',{
    animationName: "anime",
    opacity: 1
})

tl.to("#loader",{
    opacity: 0,
    duration: 0.2,
    delay: 3.8
})

tl.from("#page1",{
    delay: 0.2,
    y: 1600,
    duration: 0.5,
    opacity: 0,
    ease: Power4
})

tl.to("#loader",{
    display: "none"
})