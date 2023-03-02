import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'
const Cart = () => {
    const dispatch =useDispatch();
    const product = useSelector((state) => state.cart)
    const handleRemove = (productId) => {
dispatch(remove(productId))
    }
  return (
    <div>
                <div className='container'>

<div class="row row-cols-1 row-cols-md-3 g-4">
{
product.map((items) => (
<div class="col-sm-6 col-md-4 col-lg-3">
<div class="card h-100">
<img src={items.image} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{items.title}</h5>
  <hr />
  <p class="card-text text-center">${items.price}</p> 
  <button class="btn btn-dark text-center mt-2" onClick={() => handleRemove(items.id)}>Remove cart </button>
</div>
</div>
</div>

))
}
</div>
</div>
    </div>
  )
}

export default Cart