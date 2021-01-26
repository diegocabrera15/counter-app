import React from 'react'
import PropTypes from "prop-types";
const CounterApp1 = ({value}) => {
    return(
        <>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        </>
    )
}

CounterApp1.pr = {
    value: PropTypes.number
}

export default CounterApp1