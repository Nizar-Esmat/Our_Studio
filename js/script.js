$(document).ready(function(){
    $('#loading').slideUp(2000);
})

$(window).scroll(function () {
    let top = $('#services').height();
    let myhight = $(window).scrollTop()
    console.log(myhight)
    console.log(top)
    if(myhight > top){
        $('.navbar').addClass('nav-active')
    }else{
        $('.navbar').removeClass('nav-active')
    }
})
