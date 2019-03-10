import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Grid } from '@material-ui/core'
import CircularIndeterminate from './Loader'
import {DashBoardContext} from '../context'

export default function AnalyticsBox(props) {
  const styles = {
    Paper: {
      height: '100%',
      minHeight: 170,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  const { loading } = useContext(DashBoardContext)

  return (
    <Paper style={styles.Paper}>
      <Grid container direction='column' alignItems='center'>
        <Grid item xs>
          <Typography color='textSecondary' variant='h6' align='center'>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs>
          {loading
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

AnalyticsBox.propTypes = {
  data: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
