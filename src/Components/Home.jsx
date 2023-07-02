import React from 'react'
import Products from './Products';

function Home() {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white">
                <img src="/assists/bg.png" class="card-img" alt="Background Image" height="650px"/>
                    <div class="card-img-overlay text-center ">
                        <div className="container ">
                        <h5 class="card-title display-5 fw-bolder mb-0">New Season Arrivals</h5>
                        <p class="card-text Lead fs-3">CHECK OUTS ALL THE TRENDS</p>
                        
                        </div>
                    </div>
            </div>
           <Products/>
        </div>
        
    )

}

export default Home;


