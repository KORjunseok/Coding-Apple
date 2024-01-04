import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'

export default async function Edit(props){
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").findOne({_id : new ObjectId(props.params.id)})

  await db.collection('post').updateOne({}, {$set : {title : '바보'}})

  console.log(result)


  return (
    <div className="p-20">
    <h4>수정페이지</h4>
    <form action="/api/post/new" method="POST">
      <input name="title" defaultValue={result.title}></input>
      <input name="content" defaultValue={result.content}></input>
      <button type="submit">버튼</button>
    </form>
  </div>
  )
}