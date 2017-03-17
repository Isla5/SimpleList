import React, {Component} from 'react';



class Search extends React.Component{
  constructor() {
          super();
          this.state = {search: ''};
    }
    render() {
        let countries = this.props.countries;
        const search = this.state.search.trim();

        if(search.length > 0){
            countries = countries.filter(country => country.name.match( search ));
        }
        return <div>
                    <input type="text" value={this.state.search} onChange={({target}) => this.setState({search: target.value})} placeholder="Type here" />
                    <ul>
                        { countries.map((country,i)=>{
                            return <li key={i}>{country.name}    * search.length = {search.length}   *  country.name.length =  {country.name.length}</li>
                        })
                      }
                    </ul>
                </div>;
    }
};


const  countries = [
    { name: 'tesht1', code: 'esiminh1'},
    { name: 'test2', code: 'ch2'},
    { name: 'tst3', code: 'esim'}
];

const App = () => (
  <div className = 'container'>
        <Search countries={ countries }/>
  </div>
);

export default App;
