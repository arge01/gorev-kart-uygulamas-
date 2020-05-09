import React from 'react';
import '../App.css';

export default class header extends React.Component {
	render() {
		const {page, results} = this.props;
		return (
			<>
				<div>{`Sayfa: ${page}`}</div>
				<div>{`Card: ${results}`}</div>
			</>
		);
	}
}
