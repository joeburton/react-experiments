import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span className="none">{children}</span>
    }

    return (
        <a href="#" className="link" onClick={e => { onClick(); return false; }} >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link