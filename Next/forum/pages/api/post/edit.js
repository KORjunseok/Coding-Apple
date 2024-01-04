import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    // console.log(req.body)
    let 변경할거 = {
      title: req.body.title,
      content: req.body.content,
    };
    const db = (await connectDB).db("nextforum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: 변경할거 });
      res.status(302).redirect('/list')
  }
}
