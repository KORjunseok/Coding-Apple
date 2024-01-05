import { connectDB } from "@/util/database"

export default async function ListGo(req, res){
  if(req.method == 'GET') {
    const client = await connectDB;

    const db = client.db("nextforum")
    let result = await db.collection('post').find().toArray()
    console.log(result)
  

    return res.status(200).json(result)


    }
}