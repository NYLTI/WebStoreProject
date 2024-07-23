/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../css/landingpage.css";
import CardView from "./CardView";
import Offer from "./Offer";
import SideBar from "./SideBar";
import { getAllProducts } from "../../services/productservices/ProductFunctions";

function Landing() {

    const [products, setProducts] = useState(null)

    const getProducts = async() =>{
        let response = await getAllProducts()
            .then(function (res){
                return res.data;
            })
            .catch(function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("no errors");
                }
            })
        setProducts(response);
        console.log(response)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <div id="mainWrapper">
                <Offer></Offer>
                <div id="content">
                    <SideBar />
                    <section class="mainContent">
                        <div class="productRow">
                            {(products != null) ?
                                (<>
                                    {products?.map((product) => 
                                        <CardView product = {product}/>
                                    )}
                                </>)
                                :
                                (<></>)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Landing;