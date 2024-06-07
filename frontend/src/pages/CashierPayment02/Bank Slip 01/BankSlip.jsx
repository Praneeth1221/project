import React from 'react'
import './bankslip.css'

export default function BankSlip() {
  return (
    <div>
      <div className='topicBox'>
        <p>Bank Slip</p>
     </div>
     <div>
        <table>
            <tr>
                <th>Order ID</th>
                <th>Buyer Name</th>
                <th>Income(Rs:)</th>
                <th>Status</th>
                <th></th>

            </tr>
            <tr>
                <td>001</td>
                <td>Nimali</td>
                <td>1500.00</td>
                <td>Pending</td>
                <td>
                    <a href=" ">View slip</a>
                </td>
            </tr>
            <tr>
                <td>002</td>
                <td>Amali</td>
                <td>1580.00</td>
                <td>Pending</td>
                <td>
                    <a href=" ">View slip</a>
                </td>
            </tr>
        </table>
     </div>
      

    </div>
  )
}