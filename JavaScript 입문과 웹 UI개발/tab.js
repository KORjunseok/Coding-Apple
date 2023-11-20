
// for 반복문 쓰는 법 
// for (let i = 0; i<3; i++){
//   $('.tab-button').eq(i).on('click', function(){
//    탭열기(i);
//   });
// }

// $('.list').click(function(e){
//   if(e.target == document.querySelectorAll('.tab-button')[0]){
//     탭열기(0)
//   }
//   if(e.target == document.querySelectorAll('.tab-button')[1]){
//     탭열기(1)
//   }
//   if(e.target == document.querySelectorAll('.tab-button')[2]){
//     탭열기(2)
//   }
// })

$('.list').click(function(e){
  console.log(e.target.dataset.id);
  탭열기(e.target.dataset.id);
})

function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show'); 
}