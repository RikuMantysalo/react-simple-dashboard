import React from 'react'
import Input from './Input'
import {Grid, InputAdornment} from '@material-ui/core'
import {AccountCircle, CalendarToday} from '@material-ui/icons'
export default function Settings(props) {
  const dateAdornment = {
    startAdornment: (
      <InputAdornment position='start'>
        <CalendarToday />
      </InputAdornment>
    ),
  }
  const tokenAdornment = {
    startAdornment: (
      <InputAdornment position='start'>
        <AccountCircle />
      </InputAdornment>
    ),
  }
  return (
    <React.Fragment>
      <Grid container justify="center" style={{paddingTop: 20}}>
      <Grid item>
      <Input
        label='Start date'
        placeholder='Enter date..'
        name='startDate'
        value={props.startDate}
        type='date'
        min='2017-05-01'
        max={props.endDate}
        InputProps={dateAdornment}
      />
      <Input
        label='End date'
        placeholder='Enter date..'
        name='endDate'
        value={props.endDate}
        type='date'
        min={props.startDate}
        max='2017-06-15'
        InputProps={dateAdornment}
      />
      <Input
        value={props.token}
        name='token'
        type='password'
        label='API Token'
        error={!props.validToken}
        errorText='Invalid token!'
        InputProps={tokenAdornment}
      />
      </Grid>
      </Grid>
    </React.Fragment>
  )
}
