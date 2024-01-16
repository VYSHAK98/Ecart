import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { cartClear, removeCart } from '../redux/cartSlice';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Cart() {

  const cartArray = useSelector(state => state.cartSlice)

  const dispatch = useDispatch()

  if (cartArray.length > 0) {
    var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
  }

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleCart=()=>{
    dispatch(cartClear())
    alert("Checkout Success")
  }

  // console.log(cartArray);
  return (
    <div>
      {
        cartArray?.length > 0 ? (
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
                  cartArray.map((i, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i?.title}</td>
                      <td className='text-center'>
                        <img style={{ width: '50%', height: '80px' }} src={i?.image} alt="" />
                      </td>
                      <td>{i?.price} $</td>
                      <td className='text-center'>
                        <div className='btn' onClick={() => dispatch(removeCart(i?.id))}><i className="fa-solid fa-trash-can fa-xl text-danger p-2"></i></div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <div className='mb-5 text-center'>
              <h3>Total Price <b className='text-info'> {total}</b> $</h3>

              <Button onClick={handleShow} className='mt-5 btn-success'>
                Checkout
              </Button>

            </div>
          </div>

        ) : <h1>No products added to cart</h1>
      }
      <Modal show={show}>
        <Modal.Header closeButton className='bg-black text-white'>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body><h2 className='text-info'>Please click confirm to Checkout</h2></Modal.Body>
        <Modal.Footer className='bg-black text-white'>
          <Link to='/'>
            <Button variant="success" onClick={() =>handleCart() }>
              Confirm
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cart
