import React from "react"
import "./RatesTable.css"

function RatesTable({rates_data}) {
    return(
        <div className="table_container">
            <h4 >Exchange Rates</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th> No. </th>
                        <th> Currencies </th>
                        <th> Rate </th>
                    </tr>
                </thead>
                <tbody>  
                    {
                        rates_data.map(({currency,rate}, index) => (
                           <tr>
                                <td>{index + 1}</td>
                                <td>{currency}</td>
                                <td>{rate}</td>
                           </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default RatesTable

