import React from "react";
import axios from "axios";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../../components";
import { Message_data } from "../../../context/Context";
import { useContext } from "react";
import { useRouter } from "next/router";
const ProductDetails = ({product, likeProducts}) =>{
    const {qty} = useContext(Message_data);
    const {incQty, decQty} = useContext(Message_data);
    const {onAdd} = useContext(Message_data);
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={product.image} alt="" className="product-detail-image"/>
                    </div>
                </div>
                <div className="product-detail-desc">
                        <h1>{product.name}</h1>
                        <div className="reviews">
                            <div>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar></AiOutlineStar>
                            </div>
                        </div>
                        <h4>Details</h4>
                        <p>{product.description}</p>
                        <p className='product-name'>{product.name}</p>
                        <span>&#8377;<span className='buying-price'>{product.buying_price}</span> <span style={{color : 'red'}}>{product.discount}%</span></span>
                        <p className='product-price'>&#8377;{product.selling_price}</p>
                        <div className="quantity">
                            <h3>Quantity</h3>
                            <p className="quantity-desc">
                                <span className="minus" onClick={()=>decQty()}><AiOutlineMinus/></span>
                                <span className="num">{qty}</span>
                                <span className="plus" onClick={()=>incQty()}><AiOutlinePlus/></span>
                            </p>
                        </div>
                        <div className="buttons">
                            <button type="button" className="add-to-cart" onClick={()=>onAdd(product, qty)}>Add to Cart</button>
                            <button type="button" className="buy-now">Buy Now</button>
                        </div>
                </div>
                
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container z">
                    {likeProducts.map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export const getStaticPaths = async () =>{
    const query = `http://127.0.0.1:8000/products/getallproducts/`
    const products = await axios.get(query)
    const _products = await products.data
    const paths = _products.map((product) => ({
        params: {
            id: String(product.id)
        }
    }))
    return {
        paths, 
        fallback : 'blocking'
    }
}

export const getStaticProps = async ({params : id}) =>{
    console.log(id)
    const query = `http://127.0.0.1:8000/products/getSingleProduct/${id.id}/`
    const data = await axios.get(query)
    const product = await data.data
    const like_query = `http://127.0.0.1:8000/products/fetchByCategory/?my_param=${product.category}`
    const likeProduct = await axios.get(like_query)
    const _likeProducts = likeProduct.data
    const shuffled = _likeProducts.sort(() => 0.5 - Math.random());
    let likeProducts = shuffled.slice(0, 3);
    return {
      props : {product, likeProducts}
    }
  }
export default ProductDetails;