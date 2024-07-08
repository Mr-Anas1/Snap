import React from 'react'
import './sidebar.css'
import SidebarCategory from '../../UI/Sidebar-UI/SidebarCategory/SidebarCategory'
import SidebarColor from '../../UI/Sidebar-UI/SidebarSize/SidebarSize'
import SidebarPrice from '../../UI/Sidebar-UI/SidebarPrice/SidebarPrice'

const Sidebar = () => {




  return (
    <>
        <div className="sidebar-container">
            <SidebarCategory />
            <SidebarPrice />
            <SidebarColor />
        </div>
    </>
  )
}

export default Sidebar