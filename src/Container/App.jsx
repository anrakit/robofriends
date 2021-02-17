import React from 'react';
import CardList from '../Components/CardList.jsx';
import SearchBar from './SearchBar';
import '../Components/RoboFriends.css';
import { robots } from '../Components/robots';




class App extends React.Component{
    constructor (){
        super()
        this.state = {
            robots:robots,
            searchfield: ''
        }
    }
    
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => {this.setState({ robots: users})});
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
       }
    
    render()    
    {
        console.log(this.state.robots);
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <hi>Loading...</hi>
        } else {
        return (
            <div className ="app">
                <h1>Robofriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
        }
    }
}


export default App;