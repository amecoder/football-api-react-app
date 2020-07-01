import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.scss';

class Calendar extends Component {
	state = {
		date: null
	};

	handleChange = date => {
		this.setState({
			date
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.setRange(this.state.date);
	};

	render() {

		return (
			<div className="calendar">
				<ReactCalendar
					className="react-calendar"
					onChange={this.handleChange}
					selectRange={true}
				/>
				<button className="calender-button" onClick={this.handleSubmit}>검색</button>
			</div>
		);
	}
}

export default Calendar;
