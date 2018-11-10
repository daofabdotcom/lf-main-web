$(document).ready(() =>{
    console.log("ready");
    $(window).scroll(() =>{
        $('#leadership_1').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/Leland.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/Leland.jpg',
                width: 200,
                height:400
            }
            
        });
        $('#leadership_2').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/isaac.png',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/isaac.png',
                width: 200,
                height:400
            }
        });
        $('#leadership_3').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/kovalan.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/kovalan.jpg',
                width: 200,
                height:400
            }
        });
        $('#leadership_4').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/chrispowell.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/chrispowell.jpg',
                width: 200,
                height:400
            }
        });
        $('#leadership_5').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/rena.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/rena.jpg',
                width: 200,
                height:400
            }
        });
        $('#leadership_6').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/anurag.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/anurag.jpg',
                        width: 200,
                        height:400
            }
        });
        $('#leadership_7').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/suchitra.jpg',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/suchitra.jpg',
                width: 200,
                height:400
            }
        });
        $('#leadership_8').bttrlazyloading({
            animation: 'bounceInUp',
            md: {
                        src: '/assets/biplav.png',
                        width: 100,
                        height:100
                    },
            xs: {
                src: '/assets/biplav.png',
                width: 200,
                height:400
            }
        });
    })
})