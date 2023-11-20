// 버튼 0 누르면 
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모드 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가 

// var 버튼 = $('.tab-button');
//   $('.tab-button').eq(0).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// });

// for 반복문 쓰는 법 
for (let i = 0; i<3; i++){
  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  });
}