import React, {Component} from 'react';
import Countries from './countries.js';

class Search extends React.Component{
  constructor() {
          super();
          this.state = {search: ''};
    }
    render() {
        let Countries = this.props.Countries;
        const search = this.state.search.toLowerCase();
            Countries = Countries.filter(country => country.name.toLowerCase().match( search ));
            const rendering =   Countries.map((country,i)=>{
                return <li key={i}>{country.name} {/*   * search.length = {search.length}   *  country.name.length =  {country.name.length} */}</li>
            })
        return <div>
                    <input type="text" value={this.state.search} onChange={({target}) => this.setState({search: target.value})} placeholder="Filter..." />
                    <ul>
                        {rendering}
                    </ul>
                </div>;
    }
};

const App = () => (
  <div className = 'container'>
        <Search Countries={ Countries }/>
  </div>
);

export default App;

/*
const user = {name: 'df', age: 25}
const (name: new name = 'dddg')....
*/
