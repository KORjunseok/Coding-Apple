
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

var car = ['소나타', 50000, 'white'];
var car2 = {name:'소나타',price:[50000, 3000, 4000]}
console.log(car2.name)

car.sort();
console.log(car)

document.querySelector('.car-title').innerHTML =car2.name
document.querySelector('.car-price').innerHTML =car2.price[0]

console.log(car2['price'])

let products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

console.log(products[0].title)
console.log(products[1].title)
