import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import AnalyticsBox from './AnalyticsBox'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit
  },
})
function Analytics(props) {
  const {classes} = props
  return (
    <Grid
      className={classes.root}
      spacing={8}
      container
      justify='space-evenly'
    >
      <Grid item xs>
      {props.left}
      </Grid>
      <Grid item xs>
      {props.middle}
      </Grid>
      <Grid item xs>
      {props.right}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Analytics)