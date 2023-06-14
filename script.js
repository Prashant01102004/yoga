const burger=document.querySelector("nav svg");
burger.addEventListener("click",function() {
    if(burger.classList.contains("active")){
        gsap.to(".links",{x:"100%"});
        gsap.to(".line", {stroke:"#white"},{opacity:20});
        gsap.set('body',{overflow: "auto"});
        gsap.set('body',{overflowX: "hidden"});
    }
    else {
        gsap.to(".links",{x:"0%"});
        gsap.to("line", {stroke:"black"});
        gsap.fromTo(".links a",
        {opacity:0,y:0},
        {opacity:1,y:20,delay:0.25,stagger:0.25}
        );
        gsap.set('body',{overflow: "hidden"});
    }

    burger.classList.toggle("active");
});
const vedios=gsap.utils.toArray(".vedio");
gsap.set(vedios,{opacity:0});
vedios.forEach((vedio) => {
    ScrollTrigger.create({
        trigger:vedio,
        start: "top center",
        end:"bottom",
        // markers:true,
        onEnter:()=>{
        gsap.to(vedio,{opacity:1});
        vedio.play();
        },
        onEnterBack:()=>vedio.play(),
        onLeave:()=>vedio.pause(),
        onLeaveBack:()=>vedio.pause()
    });
});