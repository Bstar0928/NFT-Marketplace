import React from "react";
import TableRow from "./tablerow";


const Transaction = () => {
    return(
        <div>
            <div className="col-md-12">
                <div className="de_tab tab_simple">

                    <ul className="de_nav">
                        <li className="active"><span>Filter by Bidding</span></li>
                        <li><span>Filter by Bought</span></li>
                        <li><span>Filter by Sold</span></li>
                    </ul>
                    
                    <div className="de_tab_content">
                        <div className="tab-1">
                            <div className="row">
                                <TableRow no={1}/>
                                <TableRow no={2}/> 
                                <TableRow no={3}/> 
                                <TableRow no={4}/> 
                            </div>
                        </div>
                        <div className="tab-2">
                            <div className="row">
                                <TableRow no={1}/>
                                <TableRow no={2}/> 
                                <TableRow no={3}/> 
                            </div>
                        </div>
                        <div className="tab-3">
                            <div className="row">
                                <TableRow no={1}/>
                                <TableRow no={2}/> 
                                <TableRow no={3}/> 
                                <TableRow no={4}/> 
                                <TableRow no={4}/>                                
                            </div>
                        </div>            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Transaction