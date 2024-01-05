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
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: result[i]._id,
              }).then((r)=>{
                r.json().then(()=>{
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'},1000)
                })
              })

              // query string 혹은 URL parameter 로 가능 
              // fetch('/api/abc/어쩌구')
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
