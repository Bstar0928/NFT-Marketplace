import { Collection } from "mongoose";
import {React} from "react";
import BasicInfo from './basicInfo'
import NFTList from "./NFTlist";
import Transaction from "./transaction";
import Collections from "./collection";
import MintNFT from "./mintNFT";
const Profile = ({token}) => {
   
    return (
        <section aria-label="section" className="text-light overflow-hidden" data-bgimage="url(/images/background/bg-shape-1-dark.jpg) top">
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#v-pills-basic" type="button" role="tab" aria-controls="v-pills-basic" aria-selected="true">Basic Information</button>
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#v-pills-NFTlist" type="button" role="tab" aria-controls="v-pills-NFTlist" aria-selected="false">My NFT List</button>
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#v-pills-MintNFT" type="button" role="tab" aria-controls="v-pills-MintNFT" aria-selected="false">Mint NFT</button>
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#v-pills-Collection" type="button" role="tab" aria-controls="v-pills-Collection" aria-selected="false">Collection</button>
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#v-pills-Transaction" type="button" role="tab" aria-controls="v-pills-Transaction" aria-selected="false">Transcation History</button>
                        </div>
                    </div>
                    <div className="col-sm-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                            <BasicInfo token={token}/>                            
                        </div>
                        <div className="tab-pane fade" id="v-pills-NFTlist" role="tabpanel" aria-labelledby="v-pills-NFTlist-tab">
                            <NFTList/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-MintNFT" role="tabpanel" aria-labelledby="v-pills-MintNFT-tab">
                           <MintNFT/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-Collection" role="tabpanel" aria-labelledby="v-pills-Collection-tab">
                            <Collections/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-Transaction" role="tabpanel" aria-labelledby="v-pills-Transaction-tab">
                            <Transaction/>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>       
        </section>
    );
};

export default Profile;