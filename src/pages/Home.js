import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productSlice';


function Home() {

    const dispatch = useDispatch()
    const { loading, allProducts, error } = useSelector(state => state.productSlice)


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log(allProducts);

    return (
        <div>
            <Row>
                {loading && <h1>Loading..</h1>}

                {
                    allProducts?.length > 0 ? (
                        allProducts?.map(i => (
                            <Col lg={3} md={4} sm={6}>
                                <Card className='m-5 p-2' style={{ width: '18rem', height: '550px' }}>
                                    <Card.Img style={{ height: '300px' }} variant="top" src={i.image} />
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                        <Card.Text>
                                            Price <b className='text-primary fs-4'>{i.price} $</b>
                                        </Card.Text>
                                        <hr />
                                        <div className='d-flex justify-content-between mt-3'>
                                            <div onClick={() => dispatch(addToCart(i))} className='btn'>
                                                <i class="fa-solid fa-cart-shopping fa-2xl text-success"></i>
                                            </div>

                                            <div className='btn' onClick={() => dispatch(addToWishlist(i))}>
                                                <i class="fa-solid fa-heart-circle-plus fa-2xl text-danger"></i>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) :
                        <img className='w-25 container' src="https://i.postimg.cc/0yQ9bt85/output-onlinegiftools-2.gif" alt="" />
                }
                
            </Row>

        </div>
    )
}

export default Home