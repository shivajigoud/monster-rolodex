import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search/search.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'shivaji',
      monsters:[
        {name:'Kavya',id:1},
        {name:'Harshita',id:2},
        {name:'Laasya',id:3},
      ],
      searchTerm:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>data.map(d=>{
      switch(d.id){
        case 1:
        d.name = "Kavya Kasagovni"
        break;
        case 2:
        d.name = "Harshita Vummagoni"
        break;
        case 7:
        d.name = "Laasya Vummagoni"
        break;
        default:
          break
      }
      return d;
    }))
    .then(users=>{console.log(users);this.setState({monsters:users})})
  }
  render(){
    const {monsters,searchTerm} = this.state;
    const filterdMonsters = monsters.filter(monster=>{
      let pattern = "\\b"+searchTerm;
      let regex = new RegExp(pattern,'gi');
      return regex.test(monster.name) && monster;
    }
    )
  return (
    <div className="App">
    <Search placeholder="Search Monsters"
      handleChange={e=>{
      this.setState({searchTerm:e.target.value},()=> console.log(this.state.searchTerm));
     }}>
     </Search>
    <CardList monsters={filterdMonsters}>
       
    </CardList>
     
    </div>
  );
  }
}

export default App;
