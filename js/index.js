import $ from 'jquery';

$(function(){
//  미디어 크기 설정
let windowW = $(window).width();
// console.log(windowW)
if(windowW >1155){
  nav();
 
}
else if(windowW > 980 && windowW <= 1154){
  nav();
}
else if(windowW > 580 && windowW <= 979){
  tNav();
  gallery();
}
else if(windowW <= 579){
  tNav();
  gallery();
  form();
}
// 화면의 크기 변경의 reload
$(window).on('resize',function(){
  window.location.reload();
})

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

// gallery
function gallery(){
let figureW = $('#all figure').width();
$('#all>figure:last').prependTo('#all');
$('#all').css('margin-left','-'+figureW+'px');

$('#gallery .prev').on('click',function(){
  $('#all').animate({marginLeft:'+='+figureW+'px'},600,function(){
    $('#all>figure:last').prependTo('#all');
    $('#all').css('margin-left','-'+figureW+'px')
  })
});
$('#gallery .next').on('click',function(){
  $('#all').animate({marginLeft:'-='+figureW+'px'},600,function(){
    $('#all>figure:first').appendTo('#all');
    $('#all').css('margin-left','-'+figureW+'px');
  })
});
}

function form(){
const $liForm = $('#box04 li>input, #box04 li>textarea');
$liForm.removeAttr('placeholder');
$liForm.on('focus',function(){
  $(this).prev('label').fadeOut(400);
});

$liForm.on('blur',function(){
  const str = $(this).val();
  if(str === ''){
    $(this).prev('label').fadeIn(400);
  }
})
}

//객체 만들기
function Modal(title,pic,year,program,url,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.url = url;
  this.text = text;
}

Modal.prototype.action = function(){
document.querySelector('#modal h4').innerHTML = this.title;
document.querySelector('#modal figure>img').setAttribute('src',this.pic);
document.querySelector('#modal figure>figcaption').innerHTML =  this.title;
document.querySelector('#modal dl>dd:nth-child(2)').innerHTML = this.year;
document.querySelector('#modal dl>dd:nth-child(4)').innerhHTML = this.program;
document.querySelector('#modal dl>dd>a').setAttribute('href',this.url)
document.querySelector('#modal dl>dd>a').innerHTML = this.url;
document.querySelector('#modal dl>dd:nth-child(8)').innerHTML = this.text;
}
let mymodal = [
  new Modal('title01','./images/pic01.png','2001','프로그램1','http://www.a1.com','text01'),
  new Modal('title02','./images/pic02.png','2002','프로그램2','http://www.a12.com','text02'),
  new Modal('title03','./images/pic03.png','2003','프로그램3','http://www.a3.com','text03'),
  new Modal('title04','./images/pic04.png','2004','프로그램4','http://www.a4.com','text04'),
  new Modal('title05','./images/pic01.png','2005','프로그램5','http://www.a5.com','text05'),
  new Modal('title06','./images/pic02.png','2006','프로그램6','http://www.a6.com','text06')
]
const btn = document.querySelectorAll('#box03 #all>figure');
const close = document.querySelector('#modal .close');

btn.forEach(function(item,index){
  item.addEventListener('click',function(){
    document.querySelector('#modal').style.display = 'block';
    mymodal[index].action();
  })
});

close.addEventListener('click',function(){
  document.querySelector('#modal').style.display = 'none';
});

// 11 - 21
