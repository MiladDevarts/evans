import React from 'react'

const HamburgerNav = () => {
    return (
        <div>
            <input type="checkbox" id="menu" className="menu visuallyHidden" />
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
