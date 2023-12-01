// import { Name } from './a';
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
// let 제목 = document.querySelector('#title');
// if (제목 instanceof Element) {
//   제목.innerHTML ="반가워요"
// }
// if (제목 != null) {
//   제목.innerHTML ="반가워요"
// }
// if(제목?.innerHTML  != undefined){
//   제목.innerHTML = "반가워요"
// }
// let 링크 = document.querySelector('.link');
// if (링크 instanceof HTMLAnchorElement) {
//   링크.href = 'https://kakao.com'
// }
// let 버튼 = document.querySelector('#button');
// 버튼?.addEventListener('click', function(){
//   console.log('안녕')
// })
// class Person {
//   name : string;
//   constructor(a : string){
//     this.name = a
//   }
//   함수(a:string) {
//     console.log('안녕'+a)
//   }
// }
// let 사람1 = new Person('kim');
// let 사람2 = new Person('park');
// interface Square {color : string, width : number};
// let 네모:Square = {color : 'red', width: 100}
// type Animal = {name: string}
// type Cat = { age : number } & Animal
// interface Student {
//   name : string
// }
// // 인터페이스는 중복이 가능 
// interface Student {
//   score ?: number 
// }
// interface Teacher extends Student {
//   age : number
// }
// let 학생 :Student = {name : 'kim'}
// let 선생 : Teacher = {name : 'kim', age : 20}
// function 함수(...a:number[]) {
//   console.log(a)
// }
// 함수(1,2,3,4,5,6)
// let {student, age} = {student : true, age : 20}
// console.log(student) 
// type Fish = {swim : string}
// type Bird = {fly : string}
// function 함수(animal : Fish | Bird){
//   if ('swim' in animal) {
//     animal.swim
//   }
// }
// type Car = {
//   wheel : '4개',
//   color : string
// }
// type Bike = {
//   wheel : '2개',
//   color : string
// }
// function 함수(x: Car | Bike){
//   if (x.wheel === '4개'){
//     console.log('x는 Car타입이에요')
//   } else {
//     console.log('x는 Bike타입이에요')
//   }
// }
// naver 타입을 알아보자 
// function 함수(parameter :string){
//   if (typeof parameter == 'string'){
//     console.log(parameter)
//   } else {
//     console.log(parameter)
//   }
// }
// let 함수2 = function(){
//   throw new Error()
// }
// class User {
//   name : string
//   private familyname : string = 'kim';
//   constructor(a){
//     this.name = a + this.familyname
//   }
//   이름변경함수(){
//     this.familyname= 'park'
//   }
// }
// let 유저1 = new User('민수')
// 유저1.이름변경함수()
// console.log(유저1)
// class Person {
//     constructor(public name){
//     }
// }
// let 자식 = new Person('kim')
// console.log(자식)
// class User {
//   protected x =10
// }
// class NewUser extends User {
//   dothis() {
//     this.x = 20;
//   }
// }
// class User {
//   static x = 10;
//   y = 20;
// }
// let 자식 = new User();
// console.log(User)
// class User {
//   static skill = 'js';
//   intro = User.skill + '전문가입니다';
// }
// let 철수 = new User();
// console.log(철수)
// User.skill = 'ts';
// let 철수2 = new User();
// console.log(철수2)
// import {네임스페이스, 나이} from './a'
// let 변수:네임스페이스.Name = 'park';
// console.log(변수)
// function 함수<MyType>(x:unknown[]){
//   return x[0]
// }
// let a = 함수<number>([4,2])
// console.log(a)
// function 함수2<MyType extends number>(x: MyType){
//   return x -1 
// }
// let b = 함수2<number>(100);
// interface LengthCheck {
//   length : number
// }
// function 함수<MyType extends LengthCheck>(x :MyType){
//   return x.length
// }
// let a = 함수<string[]>(['100']);
// let 멍멍 : [string, boolean?] = ['dog', true]
// function 함수(...rest :[string, boolean, ...(number|string)[] ]){
// }
// 함수('a', true, 6, 3, '1', 4)
// function 함수2(...rest :(string|number)[]){
//   let result :[string[], number[]] = [[],[]];
//   rest.forEach((a)=>{
//     if (typeof a === 'string') {
//       result[0].push(a)
//     } else {
//       result[1].push(a)
//     }
//   })
//   return result;  
// } 
// let b: Dog = '이이이';
// console.log(a+1);
// import {Age} from './test.d'
// let age:Age;
var 이름 = '김';
