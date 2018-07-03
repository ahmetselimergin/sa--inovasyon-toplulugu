/**
 * Created by ahmetselimergin on 3.03.2018.
 */
function setPosition() {
    // sugar beallitasa/set radius
    var r = 150;

    // linkek beallitasa / set anchor elements
    var links = $('.center-circle').find('.little-circle');

    // linkek szamlalasa / count anchor elements
    var counter = links.length-1;

    // lepesszog beallitasa / set angle steps
    var step = 180/counter;

    // kezdeti szog beallitasa / set starting angle
    var angle = 0-(180/counter);

    // radianba konvertalas / convert to radian
    var rad = angle * (Math.PI / 180);

    var x = 0;
    var y = 0;

    // ciklus futtatasa a linkeken / loop in links
    $.each(links, function(){
        angle += step;
        rad = angle * (Math.PI / 180);
        x = Math.round(r * Math.cos(rad)) + 125;
        y = Math.round(r * Math.sin(rad));
        //$(this).css({ left: x + 'px', 'margin-top': -1*y + 'px' });
        $(this).animate({ left: x + 'px', 'margin-top': -1*y + 'px' });
    });

    links.hover(function(e){
        e.preventDefault();
        var name = $(this).data('name');
        console.log(name);
        var link = $(this).attr('href');
        $('.categories a').text(name);
        $('.categories a').attr('href',link);
    });
}

$(document).ready(function(){
    setPosition();
});


