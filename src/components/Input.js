import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../context'

export default function Input(props) {
  const dateRange = { min: props.min, max: props.max }
  return (
    <Consumer>
      {({ handleChange, handleKeyPress }) => (
        <TextField
          style={props.style}
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
