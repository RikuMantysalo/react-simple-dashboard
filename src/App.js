import React, { Component } from 'react'
import './App.css'
import Settings from './components/Settings'
import Analytics from './components/Analytics'
import EnhancedTable from './components/Table'
import { Provider } from './context'
import { withStyles } from '@material-ui/core'

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
    }
    this.saveData = JSON.parse(localStorage.saveData || null) || {}
  }

  componentDidMount() {
    this.setState(
      {
        startDate: this.saveData.startDate || this.state.startDate,
        endDate: this.saveData.endDate || this.state.endDate,
        token: this.saveData.token || '',
      },
      () => {
        if (this.state.token !== '') this.getData()
      }
    )
  }

  handleChange = event => {
    const { name, value, type } = event.target
    this.setState({ [name]: value }, () => {
      if (type === 'date') {
        this.saveData.startDate = this.state.startDate
        this.saveData.endDate = this.state.endDate
        this.saveData.token = this.state.token
        localStorage.saveData = JSON.stringify(this.saveData)
        this.getData()
      }
    })
  }

  getData = () => {
    this.setState({ loading: true })
    const url = `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${
      this.state.startDate
    }&end_date=${this.state.endDate}`
    const token = 'Token ' + this.state.token
    fetch(url, { method: 'GET', headers: { Authorization: token } })
      .then(res => {
        if (res.status === 401) {
          this.setState({ validToken: false, loading: false })
          return Promise.reject(res.status)
        } else return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          totalConversationCount: data.total_conversation_count,
          totalUserMessageCount: data.total_user_message_count,
          totalVisitorMessageCount: data.total_visitor_message_count,
          dataByDate: data.by_date,
          loading: false,
        })
      })
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.name === 'token') {
      this.getData()
    }
  }

  getContext = () => ({
    ...this.state,
    handleChange: this.handleChange,
    handleKeyPress: this.handleKeyPress,
  })

  render() {
    const { classes } = this.props
    return (
      <Provider value={this.getContext()}>
          <div className={classes.root} style={{ padding: 10 }}>
            <Settings
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              token={this.state.token}
              validToken={this.state.validToken}
            />
            <Analytics data={this.state} loading={this.state.loading} />
            <EnhancedTable
              data={this.state.dataByDate}
              loading={this.state.loading}
            />
          </div>
      </Provider>
    )
  }
}

const styles = () => ({
  root: {
    backgroundColor: "#03a9f4"
  },
})

export default withStyles(styles)(App)
