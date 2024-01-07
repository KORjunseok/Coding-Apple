'use client'
import { useEffect, useState } from 'react'

export default function Comment(props){
  let [comment, setComment] = useState('')
  let [data, setData] = useState([])
  useEffect(()=>{
    fetch('/api/comment/list?id=' + props._id).then(r=>r.json()).then((result)=>{
      setData(result)
      console.log(data)
    })
  },[])
  return (
    <div>
      <div>댓글목록</div>
      {/* 댓글 목록을 보여주는 map 함수 */}
      {
        data.length > 0 ?
        data.map((a, i)=>{
          return (
            <p key={i}>{a.content}</p>
          )
        }): '댓글없음'
      } 
      <input onChange={(e)=>{ setComment(e.target.value)}}/>
      <button onClick={()=>{
        console.log(comment)
        fetch('/api/comment/new', {method : 'POST', body : JSON.stringify({comment : comment, _id : props._id})})}}>댓글전송</button>
    </div>
  );
}
