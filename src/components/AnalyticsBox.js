import React from 'react'
import { Paper, Typography, Grid } from '@material-ui/core'
import CircularIndeterminate from './Loader'

export default function AnalyticsBox(props) {
  console.log(props.loading)
  const styles = {
    Paper: {
      height: '100%',
      minHeight: 170,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  return (
    <Paper style={styles.Paper}>
      <Grid container direction='column' alignItems='center'>
        <Grid item xs>
          <Typography color='textSecondary' variant='h6' align='center'>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs>
          {props.loading 
          ? (<CircularIndeterminate />) 
          : (<Typography
              color='textPrimary'
              variant='h4'
              align='center'
              style={{ marginTop: 'auto' }}
            >
              {props.data}
            </Typography>
            )
          }
        </Grid>
      </Grid>
    </Paper>
  )
}
