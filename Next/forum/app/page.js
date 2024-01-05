import { connectDB } from "@/util/database"

export default async function Home() {
  const client = await connectDB;

  
  const db = client.db("nextforum")
  let result = await db.collection('post').find().toArray()
  console.log(result)

  // 캐싱에 사용함
  // await fetch('/URL', {cache : 'force-cache'})

  return (
    <div>안녕</div>
  )
}
