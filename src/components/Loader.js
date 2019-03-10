import React from 'react'
import { CircularProgress } from '@material-ui/core'

export default function CircularIndeterminate(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress disableShrink />
    </div>
  )
}
