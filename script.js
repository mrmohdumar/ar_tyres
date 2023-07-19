$(document).ready(function(){
    $('.card').on('mouseenter',function(e){
        x = e.pageX - $(this).offset().left,
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.card').on('mouseout',function(e){
        x = e.pageX - $(this).offset().left,
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})

$(document).ready(function(){
    $('.mich').click(function(){
        window.location = "https://en.wikipedia.org/wiki/Michelin";
    });
});


$(document).ready(function(){
    $('.ceatt').click(function(){
        window.location = "CEAT/index.html";
    });
});

$(document).ready(function(){
    $('.good').click(function(){
        window.location = "Goodyear/index.html";
    });
});

// $(document).ready(function(){
//     $('.pire').click(function(){
//         window.location = "#";
//     });
// });

$(document).ready(function(){
    $('.yoko').click(function(){
        window.location = "https://en.wikipedia.org/wiki/Yokohama_Rubber_Company";
    });
});

$(document).ready(function(){
    $('.mrft').click(function(){
        window.location = "https://en.wikipedia.org/wiki/MRF_(company)";
    });
});

$(document).ready(function(){
    $('.jkty').click(function(){
        window.location = "https://www.jktyre.com";
    });
});

$(document).ready(function(){
    $('.apol').click(function(){
        window.location = "https://en.wikipedia.org/wiki/Apollo_Tyres";
    });
});

// $(document).ready(function(){
//     $('.falk').click(function(){
//         window.location = "#";
//     });
// });

// $(document).ready(function(){
//     $('.brid').click(function(){
//         window.location = "";
//     });
// });


