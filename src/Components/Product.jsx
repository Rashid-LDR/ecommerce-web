import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data)
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }, [])
    const Loading = () => {
        return (
            <>
                Loading......
            </>)
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="row">
                    <div className="col-md-6">
                       <img src={product.image} alt={product.title} />
                       <div className="col-md-6">
                        <h4 className='text-uppercase text-blank-50'>{product.category}</h4>
                       </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
