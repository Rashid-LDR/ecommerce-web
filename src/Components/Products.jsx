import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        <>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
        </>
    }
    const filterProducts=(cat)=>{
        const updated=data.filter((x)=>x.category===cat);
        setFilter(updated);
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("men's clothing")}>Men's Clothing c</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("electronics")}>Electronics</button>
                </div>
                {
                    filter.map((products) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div class="card h-100 text-center p-4" >
                                        <img src={products.image} class="card-img-top" alt={products.title} height={"250px"}/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{products.title.substring(0,12)}</h5>
                                            <p class="card-text lead fw-bold">${products.price}...</p>
                                            <Link to={`/Product/${products.id}`} class="btn btn-outline-dark">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="diplay-6 fw-bolder text-center">
                            <h1>Latest Products</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProduct />
                    }
                </div>
            </div>

        </>
    )

}

export default Products;