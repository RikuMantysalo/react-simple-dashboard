import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../context'
import { withStyles } from '@material-ui/core';

function Input(props) {
  const dateRange = { min: props.min, max: props.max }
  const {classes} = props
  return (
    <Consumer>
      {({ handleChange, handleKeyPress }) => (
        <TextField
          className={classes.root}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={handleChange}
          placeholder={props.placeholder}
          label={props.label}
          inputProps={dateRange}
          error={props.error}
          helperText={props.error ? 'Invalid token!' : ''}
          required
          InputProps={props.InputProps}
          InputLabelProps={{ shrink: true }}
          onKeyPress={handleKeyPress}
        />
      )}
    </Consumer>
  )
}
const styles = () => ({
  root: {
    margin: 5
  },
  textField: {
    color: 'white'
  },
})

export default withStyles(styles)(Input)
