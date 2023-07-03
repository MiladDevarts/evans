"use client"

import React, { useContext } from 'react'
import { MenuContext } from '@/context/MenuProvider'

const HamburgerNav = () => {

    let menuVisibilty = useContext(MenuContext)

    const handleMenu = () => {
        menuVisibilty.setMenu(!menuVisibilty.menu)
    }

    return (
        <div>
            <input onClick={handleMenu} type="checkbox" id="menu" className="menu visuallyHidden" />
            <label htmlFor="menu">
                <div className="hamburger hamburger-inner">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
    )
}

export default HamburgerNav
