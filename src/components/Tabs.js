import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles, AppBar, Tabs, Tab, Grid } from '@material-ui/core/'
import EnhancedTable from './Table'
import { DashBoardContext } from '../context'
import DataChart from './Chart'
import CircularIndeterminate from './Loader'

function TabContainer(props) {
  return (
    <Grid container alignItems="center" justify="center" component='div' style={{minHeight: 473 }}>
      <Grid xs >
      {props.child}
      </Grid>
    </Grid>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appBar: { backgroundColor: '#0288d1', marginTop: theme.spacing.unit * 3 },
})

function SimpleTabs(props) {
  const [value, setValue] = useState(0)

  const handleChange = (event, value) => {
    setValue(value)
  }

  const { classes } = props

  const {dataByDate} = useContext(DashBoardContext)

  return (
        <div className={classes.root}>
          <AppBar className={classes.appBar} position='static'>
            <Tabs
              indicatorColor='secondary'
              centered
              value={value}
              onChange={handleChange}
            >
              <Tab label='Table' />
              <Tab label='Chart' />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer child={
            props.loading 
            ? <CircularIndeterminate/> 
            : <EnhancedTable data={dataByDate} /> 
          }
            />
            
          )}
          {value === 1 && (
            <TabContainer child={
              props.loading 
              ? <CircularIndeterminate/> 
              : <DataChart data={dataByDate} /> 
            }
              />
          )}
        </div>
  )
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTabs)
