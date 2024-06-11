import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data,changedata]=useState([
        {
            "title":"one plus",
            "code":"251",
            "price":35000,
            "category":"electronics",
            "url":"https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png"
        },
        {
            "title":"jewellery",
            "code":"1134",
            "price":15000,
            "category":"fashion",
            "url":"https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
        },
        {
            "title":"watches",
            "code":"4421",
            "price":5000,
            "category":"electronics",
            "url":"https://m.media-amazon.com/images/I/71mR1c5l70L._AC_UY350_.jpg"
        },
        {
            "title":"cosmetics",
            "code":"2273",
            "price":35000,
            "category":"fashion",
            "url":"https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg"
        }
    ])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                    <img src={value.url} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                      <h5 class="card-title">{value.title}</h5>
                                      <p class="card-text">code:{value.code}</p>
                                      <p class="card-text">price:{value.price}</p>
                                      <p class="card-text">category:{value.category}</p>
                                      <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                  </div>
                                </div>
                                
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View