import React, { useEffect } from 'react'
// import axios from 'axios'
import { add } from '../Store/CartSlice'
import { useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'
import { useSelector } from 'react-redux'
import { STATUSES } from '../Store/ProductSlice'
import { fetchProducts } from '../Store/ProductSlice'

const Product = () => {
    const dispatch = useDispatch();
    const {data: prods, status} = useSelector((state) => state.product)


useEffect(() => {
  dispatch(fetchProducts())
},[])
//     const getdata = async() => await axios.get('http://fakestoreapi.com/products').then(res=>{
//         console.log(res.data)
// setFirst(res.data)
//     }) 
    const handleAdd = (items) => {
dispatch(add(items))
    }
    const handleRemove = (productId) => {
      dispatch(remove(productId))
          }
          if(status === STATUSES.LOADING){
            return<h3>Loading </h3>
          }
          if(status ===STATUSES.ERROR){
            return <h3>Error</h3>
          }
  return (
    <div>
        <div className='container'>

          <div class="row row-cols-1 row-cols-md-3 g-4">
{
    prods.map((items) => (
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100">
          <img src={items.image} class="card-img-top" alt="..." style={{maxHeight:350}}/>
          <div class="card-body">
            <h5 class="card-title">{items.title}</h5>
            <hr />
            <p class="card-text text-center">${items.price}</p>
            <hr />
            <p class="card-text text-center">{items.rating.rate}*</p>
            <hr />
            <p class="card-text text-center">${items.rating.count}</p>
            <hr />
            <div className='card-body'>
            <button  class="btn btn-secondary text-center" onClick={() => handleAdd(items)}>Add to cart </button> <hr />
          <button class="btn btn-dark text-center mt-2" onClick={() => handleRemove(items.id)}>Remove cart </button>
            </div>
       

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

export default Product