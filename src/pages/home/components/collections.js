import React, { Component } from 'react';

class Collections extends Component {
    render() {
        return (
            <section id="section-collections" data-bgcolor="#21273e">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Hot Collections</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" className="owl-carousel wow fadeIn">

                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-1.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-1.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Abstraction</h4></a>
                                    <span>ERC-192</span>
                                </div>
                            </div>
                        
                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-2.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Patternlicious</h4></a>
                                    <span>ERC-61</span>
                                </div>
                            </div>
                        
                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-3.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-3.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Skecthify</h4></a>
                                    <span>ERC-126</span>
                                </div>
                            </div>
                        
                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-4.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-4.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Cartoonism</h4></a>
                                    <span>ERC-73</span>
                                </div>
                            </div>
                        
                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-5.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-5.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Virtuland</h4></a>
                                    <span>ERC-85</span>
                                </div>
                            </div>
                        
                            <div className="nft_coll">
                                <div className="nft_wrap">
                                    <a href="dark-collection.html"><img src="images/collections/coll-6.jpg" className="lazy img-fluid" alt="" /></a>
                                </div>
                                <div className="nft_coll_pp">
                                    <a href="dark-collection.html"><img className="lazy" src="images/author/author-6.jpg" alt="" /></a>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div className="nft_coll_info">
                                    <a href="dark-collection.html"><h4>Papercut</h4></a>
                                    <span>ERC-42</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Collections;