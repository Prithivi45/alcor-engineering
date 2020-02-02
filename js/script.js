$(document).ready(function () {

    var scrollkey = null;
    scrollkey = localStorage.getItem('scrollkey');

    if (scrollkey != null) {
        $('html,body').animate({
            scrollTop: $('#' + scrollkey).offset().top - 75
        }, 4000);
        console.log(scrollkey);
        if(scrollkey == 'contact')
            $('#cid').addClass("menu-active");
        else
            $('#aid').addClass("menu-active");
        localStorage.clear();
    }

    $("#aboutid").click(function () {
        window.location.href = "index.html";
        localStorage.setItem('scrollkey', 'portfolio');
    });

    $("#contactid").click(function () {
        window.location.href = "index.html";
        localStorage.setItem('scrollkey', 'contact');
    });
});