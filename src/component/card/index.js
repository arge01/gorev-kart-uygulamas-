import React from 'react';
import '../../App.css';

export default class card extends React.Component {
    constructor(props) {
        super(props);
    };
    del = () => {
        this.props.delEl(this.props.contact.phone)
    };
    render() {
        const { ...data } = this.props.contact;
        return (
            <article className="card-article">
                <section className={`item ${data.gender}`}>
                    <div className="head">
                        <img src={data.picture.large}></img>
                        <div className="title">
                            <h1>{`${data.name.first} ${data.name.last}`}</h1>
                            <h4>{data.email}</h4>
                        </div>
                    </div>
                    <div className="content">
                        <div className="city">
                            {`
			                    ${data.location.city} | ${data.location.country}
			                `}
                            {`
			                    ${data.location.street.name} ${data.location.street.number}
			                `}
                        </div>
                        <div className="phone">
                            <div>{`Phone: ${data.phone}`}</div>
                            <div>{`Cell: ${data.cell}`}</div>
                        </div>
                    </div>
                    <a onClick={this.del} className="delete">X</a>
                </section>
            </article>
        );
    }
}
