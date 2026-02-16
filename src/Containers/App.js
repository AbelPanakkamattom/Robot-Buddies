import React, {Component} from 'react';
import CardList from '../Components/CardList.js';
import Scroll from '../Components/Scroll.js';
import Searchbox from '../Components/Searchbox.js';
import {Robot} from '../Robot.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state ={
        Robot: Robot/*[]*/,
        searchfield:''
}
    }
    
    componentDidMount() {
        
     /*fetch('https://jsonplaceholder.typicode.com/users')*/
     fetch('Robot.js')
     .then(response=> response.json())
     .then(user => this.setState({Robot: user}));
        this.setState({Robot: Robot});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    } 
    render() {
    const {Robot, searchfield} = this.state;
    const filteredRobot = Robot.filter(Robot =>{
      return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

    return !Robot.length ?
    
         <h1>Loading</h1> :
     (
    <div className="tc">
     <h1 className='f1'> Robo Buddies </h1>
     <Searchbox searchChange={this.onSearchChange}/>
     <Scroll>
    <CardList Robot={filteredRobot} />
    </Scroll>
    </div>
    )
}
    }
export default App;
