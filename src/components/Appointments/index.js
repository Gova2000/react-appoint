// Write your code here
import {Component} from 'react'

import {v4 as Id} from 'uuid'

import Card from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {list: [], title: '', date: '', st: false}

  title = event => {
    this.setState({title: event.target.value})
  }

  date = event => {
    this.setState({date: event.target.value})
  }

  stared = id => {
    const {list} = this.state
    this.setState(prev => ({
      list: prev.list.map(each => {
        if (each.id === id) {
          return {...each, tog: !each.tog}
        }
        return each
      }),
    }))
  }

  get = () => {
    const {list, st} = this.state

    this.setState(prev => ({st: !prev.st}))
  }

  fil = () => {
    const {list, st} = this.state

    if (st) {
      return list.filter(each => each.tog === true)
    }

    return list
  }

  add = event => {
    const {list, title, date} = this.state

    event.preventDefault()
    const newbox = {
      id: Id(),
      title,
      date,
      tog: false,
    }

    this.setState(prev => ({list: [...prev.list, newbox], title: '', date: ''}))
  }

  render() {
    const {title, date, st} = this.state
    const filtered = this.fil()
    const btn = st ? 'bt' : 'button1'

    return (
      <div className="main">
        <div className="car1">
          <div className="car2">
            <form onSubmit={this.add}>
              <h1 className="h1">Add Appointments</h1>
              <label htmlFor="title">TITLE</label>
              <input
                value={title}
                onChange={this.title}
                id="title"
                placeholder="Title"
              />
              <label htmlFor="date">DATE</label>
              <input type="date" onChange={this.date} value={date} id="date" />
              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img1"
            />
          </div>
          <hr />
          <div className="app">
            <h1 className="hat">Appointments</h1>
            <button className={btn} type="button" onClick={this.get}>
              Starred
            </button>
          </div>
          <ul className="unorder">
            {filtered.map(each => (
              <Card det={each} key={each.id} click={this.stared} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
