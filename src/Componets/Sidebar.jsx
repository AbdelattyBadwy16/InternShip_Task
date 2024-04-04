import React, { useState } from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar, faUser, faDollarSign, faRibbon, faGear, faChevronRight, faChevronDown ,faBars } from '@fortawesome/free-solid-svg-icons'

function SideBar({ toggle , setToggle}) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  function handelActive(item) {
    if (item == activeTab) setActiveTab(0);
    else setActiveTab(item);
    setActiveSubTab(1);
  }

  return (
    <div className={`side-bar`} style={{
      display: toggle ? "block" : ""
    }}>
      {/* logo */}
      <div className='side-top'>
        <div className='side-menu' style={{
          display : toggle ? "block" : ""
        }} onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faBars} size='lg' />
        </div>
        <h3 className='logo'>DOCCURE</h3>
      </div>
      {/* sidebar */}
      <ul className='side-bar-ul'>
        <li className='side-bar-li' >
          {/* title */}
          <div className='side-bar-item' onClick={() => handelActive(1)}>
            <div className={` li-title ${activeTab === 1 ? "activeTab" : ""}`}>
              <FontAwesomeIcon icon={faHouse} />
              <h6>Dashboard</h6>
            </div>
            {
              activeTab !== 1 ?
                <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
            }
          </div>

          {/* sub menu */}
          <ul className={`side-bal-sub-ul ${activeTab === 1 ? "" : "d-none"}`}>
            <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 1 ? "li-before" : ""}`}>Overview</li>
            <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 1 ? "li-before" : ""}`}>Reports</li>
            <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 1 ? "li-before" : ""}`}>Appointments</li>
            <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 1 ? "li-before" : ""}`}>Schdule</li>
            <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 1 ? "li-before" : ""}`}>Financial</li>
          </ul>
        </li>

        <li className='side-bar-li' >
          {/* title */}
          <div className='side-bar-item' onClick={() => handelActive(2)}>
            <div className={` li-title ${activeTab === 2 ? "activeTab" : ""}`}>
              <FontAwesomeIcon icon={faStar} />
              <h6>Features</h6>
            </div>

            {
              activeTab !== 2 ?
                <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
            }
          </div>

          {/* sub menu */}
          <ul className={`side-bal-sub-ul ${activeTab === 2 ? "" : "d-none"}`}>
            <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 2 ? "li-before" : ""}`}>Overview</li>
            <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 2 ? "li-before" : ""}`}>Reports</li>
            <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 2 ? "li-before" : ""}`}>Appointments</li>
            <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 2 ? "li-before" : ""}`}>Schdule</li>
            <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 2 ? "li-before" : ""}`}>Financial</li>
          </ul>
        </li>


        <li className='side-bar-li' >
          {/* title */}
          <div className='side-bar-item' onClick={() => handelActive(3)}>
            <div className={` li-title ${activeTab === 3 ? "activeTab" : ""}`}>
              <FontAwesomeIcon icon={faUser} />
              <h6 style={{ marginLeft: '3px' }}>Users</h6>
            </div>
            {
              activeTab !== 3 ?
                <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
            }
          </div>

          {/* sub menu */}
          <ul className={`side-bal-sub-ul ${activeTab === 3 ? "" : "d-none"}`}>
            <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 3 ? "li-before" : ""}`}>Overview</li>
            <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 3 ? "li-before" : ""}`}>Reports</li>
            <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 3 ? "li-before" : ""}`}>Appointments</li>
            <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 3 ? "li-before" : ""}`}>Schdule</li>
            <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 3 ? "li-before" : ""}`}>Financial</li>
          </ul>
        </li>


        <li className='side-bar-li' >
          {/* title */}
          <div className='side-bar-item' onClick={() => handelActive(4)}>
            <div className={` li-title ${activeTab === 4 ? "activeTab" : ""}`}>
              <FontAwesomeIcon icon={faDollarSign} />
              <h6 style={{ marginLeft: '7px' }}>Pricing</h6>
            </div>
            {
              activeTab !== 4 ?
                <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
            }
          </div>

          {/* sub menu */}
          <ul className={`side-bal-sub-ul ${activeTab === 4 ? "" : "d-none"}`}>
            <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 4 ? "li-before" : ""}`}>Overview</li>
            <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 4 ? "li-before" : ""}`}>Reports</li>
            <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 4 ? "li-before" : ""}`}>Appointments</li>
            <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 4 ? "li-before" : ""}`}>Schdule</li>
            <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 4 ? "li-before" : ""}`}>Financial</li>
          </ul>
        </li>

        <li className='side-bar-li' >
          {/* title */}
          <div className='side-bar-item' onClick={() => handelActive(5)}>
            <div className={` li-title ${activeTab === 5 ? "activeTab" : ""}`}>
              <FontAwesomeIcon icon={faRibbon} />
              <h6 style={{ marginLeft: '3px' }}>Integrations</h6>
            </div>

            {
              activeTab !== 5 ?
                <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
            }
          </div>

          {/* sub menu */}
          <ul className={`side-bal-sub-ul ${activeTab === 5 ? "" : "d-none"}`}>
            <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 5 ? "li-before" : ""}`}>Overview</li>
            <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 5 ? "li-before" : ""}`}>Reports</li>
            <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 5 ? "li-before" : ""}`}>Appointments</li>
            <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 5 ? "li-before" : ""}`}>Schdule</li>
            <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 5 ? "li-before" : ""}`}>Financial</li>
          </ul>
        </li>
      </ul>


      <hr />

      {/* setting */}
      <div className='settings' >
        <div className='side-bar-item' onClick={() => handelActive(6)}>
          <div className={` li-title ${activeTab === 6 ? "activeTab" : ""}`}>
            <FontAwesomeIcon icon={faGear} />
            <h6>Settings</h6>
          </div>
          {
            activeTab !== 6 ?
              <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
          }
        </div>

        {/* sub menu */}
        <ul className={`side-bal-sub-ul ${activeTab === 6 ? "" : "d-none"}`}>
          <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 6 ? "li-before" : ""}`}>Overview</li>
          <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 6 ? "li-before" : ""}`}>Reports</li>
          <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 6 ? "li-before" : ""}`}>Appointments</li>
          <li onClick={() => setActiveSubTab(4)} className={`${activeSubTab === 4 && activeTab === 6 ? "li-before" : ""}`}>Schdule</li>
          <li onClick={() => setActiveSubTab(5)} className={`${activeSubTab === 5 && activeTab === 6 ? "li-before" : ""}`}>Financial</li>
        </ul>
      </div>


      {/* profile */}
      <div className='profile' >
        <div className='side-bar-item' style={{ display: 'flex', alignItems: 'center' }} onClick={() => handelActive(7)}>

          <div className='profile-info'>
            <img src='./abdo.jpg' className='profile-img'></img>
            <div style={
              { marginTop: '3px' }
            }>
              <h6 style={
                { margin: '0' }
              }>John Carter</h6>
              <p style={
                { color: "#a8b2d5", fontSize: "12px" }
              }>Docter</p>
            </div>
          </div>
          {
            activeTab !== 7 ?
              <span className='arrow'><FontAwesomeIcon icon={faChevronRight} size='xs' /></span> : <span><FontAwesomeIcon icon={faChevronDown} size='xs' /></span>
          }
        </div>

        {/* sub menu */}
        <ul className={`side-bal-sub-ul ${activeTab === 7 ? "" : "d-none"}`} style={{ color: "#a8b2d5" }}>
          <li onClick={() => setActiveSubTab(1)} className={`${activeSubTab === 1 && activeTab === 7 ? "li-before" : ""}`}>Overview</li>
          <li onClick={() => setActiveSubTab(2)} className={`${activeSubTab === 2 && activeTab === 7 ? "li-before" : ""}`}>Reports</li>
          <li onClick={() => setActiveSubTab(3)} className={`${activeSubTab === 3 && activeTab === 7 ? "li-before" : ""}`}>Appointments</li>
        </ul>
      </div>

    </div>
  )
}

export default SideBar