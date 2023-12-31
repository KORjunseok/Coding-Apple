export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a, i)=> {
          return <div className="food">
          <h4>{상품[i]} $40</h4>
        </div>
        })
      }

    </div>
  )
} 