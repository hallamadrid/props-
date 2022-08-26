import React from 'react'
import PropTypes from 'prop-types'

function Abdallah({FullName ,bio ,Profession, click}) {
	return (
		<div>
            <h1 style={{ color:'red'}}>FullName:</h1>
			<h3 style={{ textDecoration :'underline red'}}>{FullName}</h3>
            <h1 style={{ color:'red'}}>Biography:</h1>
            <h2 style={{ textDecoration :'underline red'}}>{bio}</h2>
            <h1 style={{ color:'red'}}>Profession:</h1>
            <h3 style={{ textDecoration :'underline red'}}>{Profession}</h3>
            <button onClick={() => click()}>Handle Name</button>
		</div>
	);
}

export default Abdallah;