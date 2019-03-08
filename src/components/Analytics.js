import React from 'react'
import { Grid } from '@material-ui/core'
import AnalyticsBox from './AnalyticsBox'

export default function Analytics(props) {
  return (
    <Grid
      spacing={8}
      style={{ marginTop: '35px' }}
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
