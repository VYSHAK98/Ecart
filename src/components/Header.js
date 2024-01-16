import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../redux/productSlice';


function Header() {

    const cartArray = useSelector(state => state.cartSlice)
    //console.log(cartArray);
    const wishlistArray = useSelector(state => state.wishlistSlice)

    const dispatch=useDispatch()

    return (
        <div>
            <Navbar className="bg-dark">
                <Container>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand href="#home" className='text-white fs-2'>
                            <i class="fa-solid fa-shield-heart fa-flip fa-lg ms-5"></i>
                            <span id='head1' className='ms-3 mt-4'>Shopify</span>
                        </Navbar.Brand>
                    </Link>
                    <Row className='container ms-5'>
                        <Col xs="auto">
                            <Form.Control onChange={(e)=>dispatch(search(e.target.value))}
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2 ms-5"
                            />
                        </Col>
                        <Col className='btn' xs="auto ms-5 mt-1">
                            <i class=" fa-solid fa-magnifying-glass fa-xl text-white"></i>
                        </Col>
                    </Row>
                    <Link to='/cart'>
                        <div className='text-white btn justify-content-inline'>
                            <i class="fa-solid fa-cart-shopping fa-2xl mx-3"><span className='ms-2 fs-5'>
                                {
                                    cartArray ? cartArray.length : 0
                                }
                            </span></i>

                        </div>
                    </Link>
                    <Link to='/wishlist'>
                        <div className='btn ms-2'>
                            <i class="fa-solid fa-heart fa-2xl mx-2 text-danger">
                                <span className='ms-2 fs-5 text-white'>
                                    {
                                        wishlistArray ? wishlistArray.length : 0
                                    }
                                </span>
                            </i>

                        </div>

                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header