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
        return <div className = 'searchform'>
                    <input className='inpfield' type="text" value={this.state.search} onChange={({target}) => this.setState({search: target.value})} placeholder="  Filter..." />
                    <ul className = 'listc'>
                        {rendering}
                    </ul>
                </div>;
    }
};

const App = () => (
        <Search Countries={ Countries }/>
);

export default App;

/*
const user = {name: 'df', age: 25}
const (name: new name = 'dddg')....
*/
