// 'use client' 클라이언트 컴포넌트 
// import 작명 from './data'
import Hi from './data2'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  return (
    <div>
      <Hi/>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content ="롯데카드"/>
      <Banner content ="현대카드"/>
      <RedButton color ="Red" content="빨간"/>
      <RedButton color ="blue" content="파란"/>

    </div> 
  );
}

function Banner(props){
  return (
    <h5>{props.content} 결제 행사 중 </h5>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function RedButton(props){
  return (
    <button style={{ background : props.color }}>{props.content} 버튼</button>
  )
}
