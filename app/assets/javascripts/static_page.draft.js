$(document).ready(function(){
    console.log("I am ready");
    $(window).scroll(function(){
     $("#cam1, #cam2, #cam3").addClass("camZoom");

        $('#onboard_1').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        
                        src: '/assets/Onboarding-1.png',
                        width: 100,
                        height:100
                    },
            xs: {
                animation: 'bounceInUp',
                src: '/assets/Onboarding-1.png',
                width: 200,
                height:400
            }
            
        });
        $('#onboard_2').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/Onboarding-2.png',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/Onboarding-2.png',
                width: 200,
                height:400
            }
            
        });
        $('#onboard_3').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/Onboarding-3.png',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/Onboarding-3.png'
            }
            
        });
    })
})