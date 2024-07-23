/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/landingpage.css";
import CardView from "./CardView";

function ProductCard() {
    return (
        <div>
            <div id="mainWrapper">
                <section id="offer">
                    {/* <!-- The offer section displays a banner text for promotions --> */}
                    <h2>OFFER 50%</h2>
                    <p>REALLY AWESOME DISCOUNTS THIS JULY</p>
                </section>
                <div id="content">
                    <section class="sidebar">
                        {/* <!-- This adds a sidebar with 1 searchbox,2 menusets, each with 4 links --> */}
                        <input type="text" id="search" placeholder="search" />
                        <div id="menubar">
                            <nav class="menu">
                                <h2>MENU ITEM 1 </h2>
                                <hr />
                                <ul>
                                    {/* <!-- List of links under menuset 1 --> */}
                                    <li><a href="#" title="Link">Link 1</a></li>
                                    <li><a href="#" title="Link">Link 2</a></li>
                                    <li><a href="#" title="Link">Link 3</a></li>
                                    <li class="notimp"><a href="#" title="Link">Link 4</a></li>
                                </ul>
                            </nav>
                            <nav class="menu">
                                <h2>MENU ITEM 2 </h2>
                                <hr />
                                <ul>
                                    {/* <!--List of links under menuset 2 --> */}
                                    <li><a href="#" title="Link">Link 1</a></li>
                                    <li><a href="#" title="Link">Link 2</a></li>
                                    <li><a href="#" title="Link">Link 3</a></li>
                                    <li class="notimp"><a href="#" title="Link">Link 4</a></li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <section class="mainContent">
                        <div class="productRow">
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                            <CardView />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;