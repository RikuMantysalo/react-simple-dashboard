import React, { Component } from 'react'
import './App.css'
import Settings from './components/Settings'
import Analytics from './components/Analytics'
import Tabs from './components/Tabs'
import AnalyticsBox from './components/AnalyticsBox'
import SimpleSnackbar from './components/Alert'
import { DashBoardContext } from './context'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '2017-05-01',
      endDate: '2017-06-15',
      token: '',
      totalConversationCount: 0,
      totalUserMessageCount: 0,
      totalVisitorMessageCount: 0,
      dataByDate: [],
      validToken: true,
      loading: false,
      alert: false,
    }
    this.saveData = JSON.parse(localStorage.saveData || null) || {}
  }

  componentDidMount() {
    // Setting state according to localStorage values
    // If localStorage is empty, keep the inital value
    this.setState(
      {
        startDate: this.saveData.startDate || this.state.startDate,
        endDate: this.saveData.endDate || this.state.endDate,
        token: this.saveData.token || this.state.token,
      },
      () => {
        if (this.state.token !== '') this.getData()
      }
    )
  }

  handleChange = event => {
    const { name, value, type } = event.target
    // Some checks to make sure the date is valid as min and max attributes don't work for keyboard input.
    // Also prevents resetting the date on mobile
    
      this.setState({ [name]: value }, () => {
        if (type === 'date' && value) {
          // Setting localStorage values
          this.saveData.startDate = this.state.startDate
          this.saveData.endDate = this.state.endDate
          localStorage.saveData = JSON.stringify(this.saveData)
          this.getData()
      }
      else {
        this.saveData.token = this.state.token
        localStorage.saveData = JSON.stringify(this.saveData)}
    })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alert: false });
  };

  getData = () => {
    this.setState({ loading: true })
    const url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${
      this.state.startDate
    }&end_date=${this.state.endDate}`
    const token = 'Token ' + this.state.token
    fetch(url, { method: 'GET', headers: { Authorization: token } })
      .then(res => {
        if (res.status === 401) {
          // Status 401: Unauthorized
          this.setState({ validToken: false, loading: false })
          return Promise.reject(res.status)
        } 
        else if (res.status === 400) {
          this.setState({alert: true, loading: false})
          return Promise.reject(res.status) 
          }
        else return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          totalConversationCount: data.total_conversation_count,
          totalUserMessageCount: data.total_user_message_count,
          totalVisitorMessageCount: data.total_visitor_message_count,
          dataByDate: data.by_date,
          loading: false,
          validToken: true,
        })
      })
  }

  // If user presses enter while in the token field, get data
  handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.name === 'token') {
      this.getData()
    }
    else if (event.target.name !== 'token') {event.preventDefault()}
  }

  // Using context API to pass handler functions down in the component tree
  getContext = () => ({
    ...this.state,
    handleChange: this.handleChange,
    handleKeyPress: this.handleKeyPress,
  })

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#2196f3',
          dark: '#bbdefb',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#90caf9',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
      typography: {
        useNextVariants: true,
      },
    })

    const {
      totalConversationCount,
      totalUserMessageCount,
      totalVisitorMessageCount,
      startDate,
      endDate,
      token,
      validToken,
    } = this.state

    const { classes } = this.props // Magic from withStyles

    return (
      <DashBoardContext.Provider value={this.getContext()}>
        <MuiThemeProvider theme={theme}>
        <SimpleSnackbar handleClose={this.handleClose} open={this.state.alert}/>
          <div className={classes.root} style={{ padding: 10 }}>
            <Analytics
              left={
                <AnalyticsBox
                  title='Total conversation count'
                  data={totalConversationCount}
                />
              }
              middle={
                <AnalyticsBox
                  title='Total user message count'
                  data={totalUserMessageCount}
                />
              }
              right={
                <AnalyticsBox
                  title='Total visitor message count'
                  data={totalVisitorMessageCount}
                />
              }
            />
            <Settings
              startDate={startDate}
              endDate={endDate}
              token={token}
              validToken={validToken}
            />
            <Tabs/>
          </div>
        </MuiThemeProvider>
      </DashBoardContext.Provider>
    )
  }
}

const styles = () => ({
  root: {
    backgroundColor: '#03a9f4',
  },
})

export default withStyles(styles)(App)
