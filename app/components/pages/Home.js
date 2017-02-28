import React, {Component, PropTypes} from 'react';
import  axios   from      'axios';
import  mapVal   from      'lodash/mapValues';
import './Home.scss';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userName: '',
            userEmail: '',
            userPass: ''
        };

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        axios.get('http://interspace.dev/wp-json/acf/v2/page/5/repeat')
            .then((response) => {

                const result = response.data.repeat;
                console.log(response.data.repeat);
                this.setState({
                    data: result
                })
            })

    }


    render() {
        return (
            <div className="page page--home">
                <div className="container">
                    <button className="button is-success is-large"
                            onClick={ this.fetchData }

                    >
                        { `Fetch data` }
                    </button>

                    <div>
                        {
                            this.state.data.map((item, index) =>
                                <div className="notification is-info" key={index}>
                                    <div className="text">{item.text}</div>
                                    { item.image != false ? <img src={ item.image }
                                                                 className="thumb"
                                                                 style={{maxWidth: '100px'}}/> : null }
                                </div>)
                        }
                    </div>

                </div>
            </div>
            )
        }
    }

    export default Home;