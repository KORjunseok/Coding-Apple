let 오준석 : {} = {
  name : "오준석",
  age : 29,
  출생지역 : "인천"
}

let 좋아요 :{제목: string, 가수:string} = {
  제목 : "예뻤어",
  가수 : "데이식스"
}

let project:{member:string[],days:number, started:boolean } = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

let 회원들 :(number|string)[] = [1,"2",3]
let 오부젝트 :{a : string | number} = {a : '123'}

let 이름:any;

// 숙제1 
// let user:string = 'kim';
// let age:undefined = undefined;
// let married:boolean = false; 
// let 철수:(string|boolean)[] = [user, age, married];

let 학교 : {
  score : (number|boolean)[],
  teacher : string,
  friend : string | string[]
}

= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

console.log(학교.score)