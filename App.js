import React from 'react';
import Header from './header'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      todo:"",    
      lst:[],
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })

  }
  handleClick(ClearInput){
      this.setState({[this.state.todo.vlaue]:""})
    if(this.state.todo===""){
      alert("Enter your today's Todo")
    }
    else{
      this.setState({
        lst:[...this.state.lst,this.state.todo],
        id:Date.now()
      })
    }
    
  }
  deleteItem(id){
    const lst = [...this.state.lst]
    const updatedLst = lst.filter(item => item.id !== id)
    this.setState({
      lst:updatedLst
    })
  }
  updateInput(input){
    this.setState({todo:input});
  }
  
  render(){

    return(
      <div className="App">
      <div>
        <Header />
      </div>
      <div className="inputs">
        <input 
          name="todo"
          type="text" 
          size="30"
          placeholder="Write your todo here"
          defaultValue=""
          onChange={this.handleChange}
          required/>
        <button 
          className="btnAdd"
          onClick={this.handleClick}>ADD</button>
      </div>
      <h1 className="todo">TODO's</h1>
      <div>
        <ul>
          {this.state.lst.map(item => (
            <li key={item.id}>
             {item}
              <button 
                className="btndone"
                onClick={this.doneClick}>Done</button>
              <button 
                className="btndel"
                onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    )

  }
}

export default App;


//Api Check.......>>

/*class App extends React.Component{

  constructor(){
    super()
    this.state={
      list:[]
    }
  }

  componentDidMount(){
    fetch("https://api.brewerydb.com/v2/")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        list:data
      })
      console.log(data)
    })
  }


  render(){
    return(
      <div className="App">
        <h1>Spotify Api !</h1>
      </div>
    )
  }

}
export default App*/
