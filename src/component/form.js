import React from 'react';
import '../App.css';
import axios from 'axios';

export default class header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { contacts: [] };
	}
	componentDidMount() {
		axios.get('https://randomuser.me/api')
			.then(res => {
				const contacts = res.data.results;

				this.setState({ contacts });
			});
	}
	add = () => {
		this.componentDidMount();
		
		this.props.addEl(this.state.contacts[0])
	};
	render() {
		return (
			<>
				<button onClick={this.add}>Random Yeni Ekle</button>
			</>
		);
	}
}
