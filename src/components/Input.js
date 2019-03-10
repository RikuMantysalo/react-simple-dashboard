import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { DashBoardContext } from '../context'
import { withStyles, TextField } from '@material-ui/core'

function Input(props) {
  const dateRange = { min: props.min, max: props.max }
  const { classes } = props
  const { handleChange, handleKeyPress } = useContext(DashBoardContext)
  return (
    <TextField
      className={classes.root}
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={handleChange}
      label={props.label}
      inputProps={dateRange}
      error={props.error}
      helperText={props.error ? 'Invalid token!' : ''}
      required
      // eslint-disable-next-line
      InputProps={props.InputProps}
      InputLabelProps={{ shrink: true }}
      onKeyPress={handleKeyPress}
    />
  )
}
Input.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  error: PropTypes.bool,
  InputProps: PropTypes.object,
}
const styles = () => ({
  root: {
    margin: 5,
  },
  textField: {
    color: 'white',
  },
})

export default withStyles(styles)(Input)
