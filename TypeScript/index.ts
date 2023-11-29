// let 오준석 : {} = {
//   name : "오준석",
//   age : 29,
//   출생지역 : "인천"
// }

// let 좋아요 :{제목: string, 가수:string} = {
//   제목 : "예뻤어",
//   가수 : "데이식스"
// }

// let project:{member:string[],days:number, started:boolean } = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }

// let 회원들 :(number|string)[] = [1,"2",3]
// let 오부젝트 :{a : string | number} = {a : '123'}

// let 이름:any;

// 숙제1 
// let user:string = 'kim';
// let age:undefined = undefined;
// let married:boolean = false; 
// let 철수:(string|boolean)[] = [user, age, married];

// let 학교 : {
//   score : (number|boolean)[],
//   teacher : string,
//   friend : string | string[]
// }

// = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher]

// console.log(학교.score)

// function 함수(x? :number) :void {
//    console.log(x + 3 )
// }
// function sayHi(x? :string ){
//   if (x) {
//     console.log('안녕하세요 ' + x)
//   } else {
//     console.log('왜입력안함')
//   }
// }
// function 결혼가능하냐(money :number, house :boolean, charm :string) :string|void{
//   let score :number = 0;
//   score += money;
//   if (house === true){
//     score += 500
//   }
//   if (charm === '상'){
//     score += 100
//   }
//   if (score >= 600){
//     return '결혼가능'
//   } 
// }
// console.log(결혼가능하냐(100,true,'상'))

// function 클리닝함수(a :(number|string)[]){

//   let 클리닝완료된거 :number[] = [];

//   a.forEach((b)=>{
//     if (typeof b === 'string') {
//       클리닝완료된거.push(parseFloat(b))
//     } else {
//       클리닝완료된거.push(b)
//     }
//   })

//   return 클리닝완료된거
// }

// console.log( 클리닝함수([123,'3']) )

// type Girlfriend = {
//   readonly name : string
// }

// const 여친 :Girlfriend = {
//   name : "카리나"
// }

// 여친.name = '윈터';
// console.log(여친.name)

// type PositionX = {x : number};
// type PositionY = {y : number};

// type NewType = PositionX & PositionY
// let position :NewType = { x : 100, y : 200}

// let 테스트 :{a? : string} = {
//   a : "냠냠"
// }

// // 숙제 
// type User = { name : string, email? : string, phone : string } 
// type Adult = { adult : boolean }

// type NewUser = User & Adult;

// let 회원가입정보 :NewUser = {
//   name : 'kim',
//   adult : false,
//   phone : "1234"
// }

// let 접니다 : "존잘"|"매력쟁이";

// 접니다 = "존잘"

// function 가위바위보게임 (x:"가위"|"바위"|"보") :("가위"|"바위"|"보")[]{
//   return ['가위']
// }
// 가위바위보게임("가위")

// var 자료 = {
// name : "준석"
// } as const;

// function 내함수(a : "준석") {

// }
// 내함수(자료.name)

// type 함수타입 = (a:string) => number;
// function 함수() {  
// }

let 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
  제목.innerHTML ="반가워요"
}

// if (제목 != null) {
//   제목.innerHTML ="반가워요"
// }

// if(제목?.innerHTML  != undefined){
//   제목.innerHTML = "반가워요"
// }

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com'
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function(){
  console.log('안녕')
})