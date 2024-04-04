
import React from 'react'
import './Financial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faBars } from '@fortawesome/free-solid-svg-icons'
import Chart from './Chart'
import FinCard from './FinCard'
import TableInfo from './TableInfo'

function Financial({toggle,setToggle}) {
    return (
        <div className='financial'>

            {/* search and language */}
            <div className='search-lang'>
                <div className='menu' onClick={()=>setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='search-inp'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' placeholder='Search'></input>
                    <FontAwesomeIcon icon={faMicrophone} />
                </div>
                <select className='select-lang'>
                    <option>English (US)</option>
                    <option>Arabic (AR)</option>
                </select>
            </div>

            {/* fin info */}
            <div className='fin-info'>
                <h3>Financial</h3>
                <select className='select-filter'>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>

            {/* fin cards */}
            <div className='fin-cards'>
                <FinCard title={"Total Income"} value={"$4,156,45"}></FinCard>
                <FinCard title={"Total Outcome"} value={"$4,156,45"}></FinCard>
                <FinCard title={"Income"} value={"$4,156,45"}></FinCard>
                <FinCard title={"Expenses"} value={"$4,156,45"}></FinCard>
            </div>

            {/* chart */}
            <Chart />


            {/*data*/}
            <div className='data-info'>
                <div className='data-felter'>
                    <select>
                        <option value="" selected disabled>Data Range</option>
                        <option>test1</option>
                        <option>test2</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Status</option>
                        <option>test1</option>
                        <option>test2</option>
                    </select>
                    <select>
                        <option value="" selected disabled>P.Method</option>
                        <option>test1</option>
                        <option>test2</option>
                    </select>
                </div>
                <input className='cal' type='date' />
            </div>


            {/* table */}
            <TableInfo></TableInfo>
        </div>
    )
}

export default Financial