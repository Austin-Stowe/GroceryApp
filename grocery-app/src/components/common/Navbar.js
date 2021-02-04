import React, { useState } from 'react'

//Navbar imports
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

//Icon Imports
import HomeIcon from '@material-ui/icons/Home'
import TodayIcon from '@material-ui/icons/Today'
import ListAltIcon from '@material-ui/icons/ListAlt'
import KitchenIcon from '@material-ui/icons/Kitchen'

const Navbar = ({ navSelection, setNavSelection }) => {

    const handleChange = (event, newValue) => {
        setNavSelection(newValue)
    };

    return(
        <>
            <BottomNavigation value={navSelection} onChange={handleChange}>
                <BottomNavigationAction label="Home" value='home' icon={<HomeIcon />}/>
                <BottomNavigationAction label="Recipes" value='recipes' icon={<ListAltIcon />}/>
                <BottomNavigationAction label="Plan" value='planning' icon={<TodayIcon />}/>
                <BottomNavigationAction label="Groceries" value='groceries' icon={<KitchenIcon />}/>
            </BottomNavigation>
        </>
    )
}

export default Navbar