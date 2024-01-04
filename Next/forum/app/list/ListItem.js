"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>

          <span
            onClick={() => {
              fetch("/api/test", {
                method: "POST",
                body: JSON.stringify([1, 2, 3]),
              }).then(() => {
                console.log(123123);
              });
            }}
          >
            🗑️
          </span>

          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
