import $ from 'jquery';

$(function(){
//  미디어 크기 설정
let windowW = $(window).width();
// console.log(windowW)
if(windowW >1155){
  nav();
  asideNav();
}
else if(windowW > 980 && windowW <= 1154){
  nav();
}
else if(windowW > 580 && windowW <= 979){
  tNav()
}
else if(windowW <= 579){
  tNav()
}

})
//  함수 
function nav(){
  $('nav li>a').on('click',function(){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop: aPos - headerHeight},800);
    return false;
  })
}
function tNav(){
  let navW = $('nav').width();
  $('header .btn').on('click',function(){
    $(this).hide();
    $('nav').animate({left:0},500)
  });
  $('nav li>a').on('click',function(){
    let aHref = $(this).attr('href');
    let aPos = $(aHref).offset().top;
    let headerH = $('header').innerHeight();
    $('html,body'),animate({scrollTop:aPos - headerH},500);
    $('nav').css('left','-'+navW+'px');
    $('header .btn').show();
    return false;
  })
  $('nav .close').on('click',function(){
    $('nav').css('left','-'+navW+'px');
    $('header .btn').show();
  })
}

