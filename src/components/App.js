import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tdl: [],
            usrInp: '',
        }
        this.inpChange=this.inpChange.bind(this)
    }

    inpChange(e, num){
        const tdl = this.state.tdl;
        tdl[num] = e.target.value
        if (this.state.usrInp.length === 0) {
            const tdl = this.state.tdl.concat(App);
            this.setState({usrInp: e.target.value, tdl});
        } else if (tdl[num] === '') {
            const tdl = this.state.tdl.splice(App);
            this.setState({usrInp: e.target.value});
        } else {
            this.setState({usrInp: e.target.value});
        }
    }

    render() {
        const tdl = this.state.tdl.map((Tdl,i) => {
            return <li key={i}> <Tdl/></li>
        });
        return <div className='background1'>
            <input type="text" onChange={this.inpChange}/>
            <ol>
                {tdl}
            </ol>
        </div>
    }
}

class Sth extends Component {
  render(){
    return(
      <div></div>
    )
  }
}
export default App;
