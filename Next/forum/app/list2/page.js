import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 캐싱 결과를 20초 동안 보관하고 사용함. 20초 지나면 URL에 새로 요청
export const revalidate = 20

export default async function List() {
  const db = (await connectDB).db("nextforum");
  let result = await db.collection("post").find().toArray();
  return (
    <ListItem result={result} />
  );
}
