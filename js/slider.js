const slider_1 = document.querySelector("#glide1");
if(slider_1){
    new Glide(slider_1, {
        type: 'carousel',
        startAt: 0,
        autoplay: 3000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        AnimationTimingFunc: "linear",
    }).mount()
}