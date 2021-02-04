import React from 'react'

function Home(){
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" /> 
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.ytimg.com/vi/LhKRTIG0Pfc/maxresdefault.jpg" />
                </div>
                <div className="text-wrapper item">
                 <span>IPhone</span>
                 <span>Price : $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                  <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;