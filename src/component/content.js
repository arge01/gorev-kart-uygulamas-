import React from 'react';
import axios from 'axios';
import Card from './card';
import Header from './header';
import Forms from './form';
import '../App.css';

export default class content extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            text: '',
            page: 0,
            results: 0,
            contacts: []
        };
    };
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=15')
            .then(res => {
                const page = res.data.info.page;
                const results = res.data.info.results;
                const contacts = res.data.results;
                
                this.setState({ results, page, contacts });
            })
    };
    delEl = (phone) => {
        let updateCont = this.state.contacts;
        let results = this.state.results;
        
        updateCont = updateCont.filter(f => f.phone !== phone);
        
        this.setState({contacts: updateCont});
        this.setState({results: results -= 1});
    };
    addEl = (el) => {
        let updateCont = this.state.contacts;
        let results = this.state.results;
        
        updateCont.push(el);
        
        this.setState({contacts: updateCont});
        this.setState({results: results += 1});
    }
	render() {
	    const {page, results, contacts} = this.state;
		return (
		    <main className="main">
                <header className="header">
                    <Header page={page} results={results}/>
                </header>
                <section className="form">
                    <Forms addEl={this.addEl}/>
                </section>
                <section className="card">
                    {
                        contacts.map((contact, key) => {
                            return <Card
                                contact={contact}
                                id={key}
                                key={key}
                                delEl={this.delEl}
                            /> 
                        })
                    }
                </section>
            </main>
		);
	}
}
