import React from 'react'
import Chart from 'react-apexcharts'

export default function DataChart(props) {
  let { data } = props
  data = data.sort((a, b) => {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
  })

  const series = [
    {
      name: 'Conversations',
      data: data.map(item => item.conversation_count),
    },
    {
      name: 'Missed chats',
      data: data.map(item => item.missed_chat_count),
    },
    {
      name: 'Visitors with conversation',
      data: data.map(item => item.visitors_with_conversation_count),
    },
  ]
  const options = {
    chart: {
      id: 'apexchart-example',
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: data.map(item => item.date),
      labels: {
        show: false,
      },
      title: { text: 'Date' },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {title:{text: 'Count'}},
    legend: { position: 'top' },

    title: {
      text: 'Conversation data',
      align: 'center'
    },
  }
  return <Chart options={options} series={series} type='line' height='100%' />
}