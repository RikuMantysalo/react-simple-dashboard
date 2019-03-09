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
        <AnalyticsBox
          title='Total conversation count'
          data={props.data.totalConversationCount}
          loading={props.loading}
        />
      </Grid>
      <Grid item xs>
        <AnalyticsBox
          title='Total user message count'
          data={props.data.totalUserMessageCount}
          loading={props.loading}
        />
      </Grid>
      <Grid item xs>
        <AnalyticsBox
          title='Total visitor message count'
          data={props.data.totalVisitorMessageCount}
          loading={props.loading}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Analytics)