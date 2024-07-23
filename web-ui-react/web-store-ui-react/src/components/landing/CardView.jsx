

import React from "react"
import "../../css/landingpage.css";

function CardView({product}) {
    return (
        <>
            <article class="productInfo">
                <div>
                    <img alt="sample" src={product.imageURLs[0]} />
                    <h1 class="price">${product.price}</h1>
                    <p class="productContent">{product.name}</p>
                    <input type="button" name="button" value="Add to Cart" class="buyButton" />
                </div>
            </article>
        </>
    )
}

export default CardView