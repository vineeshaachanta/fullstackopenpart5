import React from 'react'
import PropTypes from 'prop-types'

const Oerror = {
  color: 'red',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}

const Osuccess = {
  color: 'green',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}

const ONotification = ({ errorMessage, successMessage }) => {
  if (successMessage === null && errorMessage === null) {
    return null
  } else if (successMessage){
    return (
      <div id='success' style={Osuccess}>
        {successMessage}
      </div>
    )
  } else {
    return (
      <div id='error' style={Oerror}>
        {errorMessage}
      </div>
    )
  }
}

ONotification.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default ONotification
