import React from 'react'
import { CircularProgress } from '@material-ui/core'

export default function CircularIndeterminate() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress disableShrink />
    </div>
  )
}
