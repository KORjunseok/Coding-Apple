// 'use client' 클라이언트 컴포넌트 
// import 작명 from './data'
import Hi from './data2'

export default function Cart() {
  return (
    <div>
      <Hi/>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />

    </div> 
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
