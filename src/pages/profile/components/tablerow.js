import React from 'react'
import './css/custom.css'

const TableRow = ({no}) => {
    return(        
        <div className="nft__history">
            <div className="row">
                <div className="col-md-1"><p className="tableNo">{no}.</p></div>        
                <div className="col-md-1 nft__img"><img src="images/collections/coll-item-1.jpg" className="lazy" alt="" width="50" height="50"/></div>
                <div className="col-md-6"><p className="tableNo">0xd92e9e9551e3d5126e6bd6dce1adaaf46887fb74</p></div>
                <div className="col-md-2"><p className="tableNo">100ETH</p></div>
                <div className="col-md-2"><p className="tableNo">Saled</p></div>
            </div>                    
        </div>        
    )
}
export default TableRow