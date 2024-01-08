import { connectDB } from "@/util/database"
import { revalidatePath } from "next/cache"

export default async function Write2(){

  const db = (await connectDB).db('nextforum')
  let result = await db.collection('post_test').find().toArray()

  async function handelSubmit(formData){
    'use server'
    const db = (await connectDB).db('nextforum')
    await db.collection('post_test').insertOne({title : formData.get('title') })
    // 페이지를 새로고침하는 함수. 페이지 전체가 새로 고침이 아니라 차이점만 변갱해준다.
    revalidatePath('/write2')
  }

  return (
    <div>
      <form action={handelSubmit}>
          <input name="title"></input>
          <button type="submit">버튼</button>
      </form>
      {
        result ? result.map(a=>
          <p>글제목 : {a.title}</p>) : null
      }
    </div>
  )

}