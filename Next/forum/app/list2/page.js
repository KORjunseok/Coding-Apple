import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 캐싱 20초 
export const revalidate = 20

export default async function List() {
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").find().toArray();
  return (
    <ListItem result={result} />
  );
}
