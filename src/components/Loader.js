import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, CircularProgress } from '@material-ui/core'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    align: 'center',
  },
})

function CircularIndeterminate(props) {
  const { classes } = props
  return (
    <div>
      <CircularProgress disableShrink className={classes.progress} />
    </div>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)
