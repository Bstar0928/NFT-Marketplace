import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <section id="section-steps" data-bgcolor="#21273e">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Create and sell your NFTs</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Set up your wallet</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_wallet"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Add your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_cloud-upload_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Sell your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_tags_alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;