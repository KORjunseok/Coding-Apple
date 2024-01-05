'use client'
import { useRouter } from "next/navigation"

export default function DetailLink(){
  let router = useRouter()
  return (
    <button onClick={()=>{ router.push('/') }}>버튼</button>
  )
}

// import {usePathname, useSearchParams, useParams} from 'next/navigation'

// export default function DetailLink(){

// usePathname() 쓰면 현재 URL 출력해주고 
// useSearchParams() 쓰면 search parameter (query string) 출력해주고
// useParams() 쓰면 [dynamic route]에 입력한내용 (URL 파라미터) 을 출력해운다

//   let a = usePathname()
//   let b = useSearchParams()
//   let c = useParams()
//   console.log(a)
// }