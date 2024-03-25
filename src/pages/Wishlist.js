import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../redux/wishlistSlice'
import Table from 'react-bootstrap/Table';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {

  const wishlistArray = useSelector(state => state.wishlistSlice)

  const dispatch = useDispatch()

  const handleAddCart=(i)=>{
    dispatch(addToCart(i))
    dispatch(removeWishlist(i.id))
  }

  return (
    <div>
      {
        wishlistArray?.length > 0 ? (
          <div>
            <Table striped bordered hover className='w-90 container mt-5 mb-5'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  wishlistArray.map((i, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i?.title}</td>
                      <td className='text-center'>
                        <img style={{ width: '50%', height: '80px' }} src={i?.image} alt="" />
                      </td>
                      <td>${i?.price}</td>
                      <td className='text-center'>
                        <div onClick={() => dispatch(removeWishlist(i?.id))} className='btn'>
                          <i className="fa-solid fa-trash-can fa-2xl text-danger p-2"></i>
                        </div>
                        <div onClick={() => handleAddCart(i)} className='btn'>
                          <i className="fa-solid fa-cart-plus fa-2xl text-success ms-5"></i>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>

        ) : <h1>No products added to wishlist</h1>
      }
    </div>
  )
}

export default Wishlist