import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import "./finCard.css"

function FinCard({title , value }) {
    return (
        <div className='fin-card'>
            <div className='info-card'>
                <div className='card-top'>
                    <div style={{ backgroundColor: "white", padding: '5px', borderRadius: '50%' }}>
                        <FontAwesomeIcon style={{ color: 'black' }} icon={faCreditCard} />
                    </div>
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                </div>
                <p>{title}</p>
                <h5>{value}</h5>
            </div>
        </div>

    )
}

export default FinCard