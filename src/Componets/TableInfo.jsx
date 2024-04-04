import React from 'react'
import "./tableInfo.css";

function TableInfo() {
    return (
        <table className='data-table'>
            <tr>
                <th>Patient ID</th>
                <th>Status</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>P.Method</th>
            </tr>
            <tr>
                <td>
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                        <img src='./abdo.jpg' style={{ borderRadius: "50px", height: "50px", width: "50px" }}></img>
                        <div>
                            <h6 style={{ margin: "0" }}>Ahmed</h6>
                            <p >#22452</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div style={{ color: "#19955c", backgroundColor: "#0b1431", fontSize: "20px", borderRadius: "50px" }}>
                        Paid
                    </div>
                </td>
                <td>
                    12/02/2023 | 09:25 AM
                </td>
                <td>
                    $280.00
                </td>
                <td style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <img src="./visa.jpg" width={30}></img>
                    <div>....4242</div>
                </td>
            </tr>

            <tr style={{ backgroundImage: "linear-gradient(#c640f6, #7f24fb)", borderRadius: "10px" }}>
                <td>
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                        <img src='./abdo.jpg' style={{ borderRadius: "50px", height: "50px", width: "50px" }}></img>
                        <div>
                            <h6 style={{ margin: "0" }}>Ahmed</h6>
                            <p >#22452</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div style={{ color: "white", backgroundColor: "#0b1431", fontSize: "20px", borderRadius: "50px" }}>
                        Part Paid
                    </div>
                </td>
                <td>
                    12/02/2023 | 09:25 AM
                </td>
                <td>
                    $280.00
                </td>
                <td style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <img src="./visa.jpg" width={30}></img>
                    <div>....4242</div>
                </td>
            </tr>

            <tr>
                <td>
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                        <img src='./abdo.jpg' style={{ borderRadius: "50px", height: "50px", width: "50px" }}></img>
                        <div>
                            <h6 style={{ margin: "0" }}>Ahmed</h6>
                            <p >#22452</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div style={{ color: "#19955c", backgroundColor: "#0b1431", fontSize: "20px", borderRadius: "50px" }}>
                        Paid
                    </div>
                </td>
                <td>
                    12/02/2023 | 09:25 AM
                </td>
                <td>
                    $280.00
                </td>
                <td style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <img src="./visa.jpg" width={30}></img>
                    <div>....4242</div>
                </td>
            </tr>

            <tr>
                <td>
                    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                        <img src='./abdo.jpg' style={{ borderRadius: "50px", height: "50px", width: "50px" }}></img>
                        <div>
                            <h6 style={{ margin: "0" }}>Ahmed</h6>
                            <p >#22452</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div style={{ color: "#19955c", backgroundColor: "#0b1431", fontSize: "20px", borderRadius: "50px" }}>
                        Paid
                    </div>
                </td>
                <td>
                    12/02/2023 | 09:25 AM
                </td>
                <td>
                    $280.00
                </td>
                <td style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <img src="./visa.jpg" width={30}></img>
                    <div>....4242</div>
                </td>
            </tr>
        </table>
    )
}

export default TableInfo