import React from "react";
import { useEffect, useState } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";

const Navbar = ({token}) => {
        
    const { connect,getAccounts, metaState } = useMetamask();   

    useEffect(() => {

        if (metaState.isAvailable) {
          (async () => {
            try {             
              let account = await getAccounts();

            } catch (error) {
              console.log(error);
            }
          })();
        }
      }, []);

    const signOutBtnClick = async e =>{        
        sessionStorage.removeItem("token");
    }
    
    const connectWallet = async e =>{
        if(!window.web3){
            window.open("https://metamask.io/download.html")      
            return
        }
        if (!metaState.isConnected) {
            
            (async () => {
                try {
                    
                    await connect(Web3);
                    console.log("btn click")
                    let account = await getAccounts();
                    console.log("account information")
                    console.log(account)

                } catch (error) {                                  
                    console.log(error);
                }
            })();
        }
        

    }
    return (
        <header className="transparent">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex sm-pt10">
                        <div className="de-flex-col">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <a href="/">
                                        <img alt="" src="images/logo-light.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="de-flex-col">
                                <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                            </div>
                        </div>
                        <div className="de-flex-col header-col-mid">
                            <ul id="mainmenu">
                                <li>
                                    <a href="/">Home<span></span></a>                                    
                                </li>
                                <li>
                                    <a href="/#">Filter<span></span></a>
                                    <ul>
                                        <li><a href="/category">Catetory</a></li>
                                        <li><a href="/price">Price</a></li>
                                        <li><a href="/author">Author</a></li>
                                        <li><a href="/owner">Owner</a></li>
                                        <li><a href="/collections">Collection</a></li>
                                        <li><a href="/keyboard">Keyboard</a></li>
                                        <li><a href="/cryptcurrency">Cryptocurrency</a></li>                                        
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages<span></span></a>
                                    <ul>
                                        {!token &&
                                            <li><a href="/signin">Sign In</a></li>                                            
                                        }
                                        {token &&
                                            <li><a href="/signin" onClick={signOutBtnClick}>Sign Out</a></li>
                                        }
                                        
                                        <li><a href="/signup">Sign Up</a></li>
                                        {token &&
                                            <li><a href="/profile">Profile</a></li>
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <a href="/collectioninfo">Collection<span></span></a>
                                </li>
                                <li>
                                    <a href="#">Elements<span></span></a>
                                    <ul>
                                        <li><a href="dark-icons-elegant.html">Elegant Icons</a></li>
                                        <li><a href="dark-icons-etline.html">Etline Icons</a></li>
                                        <li><a href="dark-icons-font-awesome.html">Font Awesome Icons</a></li>
                                        <li><a href="dark-accordion.html">Accordion</a></li> 
                                        <li><a href="dark-alerts.html">Alerts</a></li>
                                        <li><a href="dark-counters.html">Counters</a></li>
                                        <li><a href="dark-modal.html">Modal</a></li>
                                        <li><a href="dark-popover.html">Popover</a></li>
                                        <li><a href="dark-pricing-table.html">Pricing Table</a></li>
                                        <li><a href="dark-progress-bar.html">Progress Bar</a></li>
                                        <li><a href="dark-tabs.html">Tabs</a></li>
                                        <li><a href="dark-tooltips.html">Tooltips</a></li>
                                    </ul>
                                </li>
                                {token &&
                                <li>
                                    <a href="/signin" onClick={signOutBtnClick}>Sign Out<span></span></a>                                    
                                </li>
                                }
                            </ul>
                            <div className="menu_side_area">
                                {metaState.isConnected 
                                    ? <a className="btn-main"><i className="icon_wallet_alt"></i><span>View Wallet Info</span></a>
                                    : <a onClick={connectWallet} className="btn-main"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                }
                                
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Navbar;