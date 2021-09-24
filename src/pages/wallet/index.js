import React, {Component} from "react";

// Import components
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import useToken from '../useToken';
import Wallet from '../../components/WalletComponent/wallet'
import WalletTitle from '../../components/WalletComponent/wallettitle'
function WalletPage(){      

    return (
        <div>
            <WalletTitle />
            <Wallet />           
        </div>
    );
    
}

export default WalletPage;