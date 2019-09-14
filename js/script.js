$(document).ready(function () {
    
    particlesJS.load('particles-js', 'js/particles.json', function() {
    });
    

    $(".accordion-header").click(() => { 
        $(".accoridion-section+p").toggleClass("toggle-para");
    })

});