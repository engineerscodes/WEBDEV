import React ,{Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput"

class App extends Component 
{  state ={ info :[
    {name:"Bala"},
    {name: "PRAVEEN"},
    {name: "Naveen"}
]
}
changeName =(event)=>
{
  this.setState({info :[
    {name:event.target.value},
    {name:event.target.value},
    {name:event.target.value}
]
     
});
}
  render(){
  return (
    <div className="App">
        <ol>
          <li>Create Two new Components UserInput and UsernOutput</li>
          <li>UserInput should hold an Input Element And Output should must display 2 par</li>
          <li>Output Multiple UserOutput components </li>
        </ol>

        <UserInput change={this.changeName} Names={this.state.info[0].name}/>
        <UserOutput name={this.state.info[0].name} age="100"/>
        <UserOutput name={this.state.info[1].name} age="13"/>
        <UserOutput name={this.state.info[2].name}age="15"/>
    </div>
  );
  }
}

export default App;
