import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request){

  const session = await getToken({req : request})

  if (request.nextUrl.pathname.startsWith('/write')){
    if (session == null){
    return NextResponse.redirect(new URL('http://localhost:3000/api/auth/signin'), request.url)

    }
  }

  // startsWith 는 /list/어쩌구 항목들도 적용하는 함수
  if (request.nextUrl.pathname.startsWith === '/list'){
    console.log(new Date())
    console.log(request.headers.get('sec-ch-ua=platform'))
    return NextResponse.next()
  }

}