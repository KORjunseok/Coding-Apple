import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  if (req.method == 'DELETE'){
  
    const db = (await connectDB).db("nextforum");
    let result = await db.collection("post").deleteOne({ _id : new ObjectId(req.query)})
    console.log(result)
    res.status(200).json('삭제완료')
  }

  // console.log('안녕')
  // return res.status(200).json()
}