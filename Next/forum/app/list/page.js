import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <p>뭔데</p>
      {result.map((a, i) => (
        <div className="list-item">
          <h4>{result[i].title}</h4>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
