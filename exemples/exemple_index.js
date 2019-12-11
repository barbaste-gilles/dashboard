import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Title from './components/title';
import Sport from './components/sport'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sport : [] }
    }

    componentDidMount() {

        fetch('https://api.chucknorris.io/jokes/search?query=sport')
            .then(response => response.json())
            .then(data => {
                console.table(data.result);
                this.setState({sport : data.result});
            })
    }

    render() {
        console.log('state --------->', this.state.sport);
        // console.log('state value ------->', this.state.result.value);

        return (

            <div className="App">
                <Title/>
                {
                    this.state.sport.map(
                        item => <Sport
                            sport = {item.value}
                                />
                    )

                }


            </div>

        );

    }

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
