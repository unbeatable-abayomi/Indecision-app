// import "./utilis.js";
import React from "react";
import ReactDOM from "react-dom";
import{IndecisionApp}  from "./components/IndecisionApp.js"
import './styles/styless.scss';
// import validator from "validator"
// import {square, add} from "./utilis.js";
// import isSenior, {isAdult,canDrink} from "./person";



  
  
  // class Header extends React.Component {
  //   render () {
  //     return (
  //       <div>
  //       <h1>{this.props.title}</h1>
  //         <h2>{this.props.subTitle}</h2>
  //       </div>
  //     );
  //   }
  // }
  
 
  
  // class Action extends React.Component {
  
    
  //   render () {
  //     return (
  //       <div>
  //         <button onClick={this.props.handlePick}
  //          disabled={!this.props.hasOptions} 
  //         >What shloud i do</button>
          
  //       </div>
  //     );
  //   }
  // } 
  
  
  
  // class Options extends React.Component {
  //   render () {
  //     return (
  //       <div>
  //       <button onClick={this.props.handleDeleteOptions}>Remove all</button>
  //       {this.props.options.map((num)=> <Option key={num} optionText ={num}/>)}
      
  //       </div>
  //     );
  //   }
  // }
 

  // class Option extends React.Component {
  //   render () {
  //     return (
  //       <div>
  //       Option : {this.props.optionText}
  //       </div>
  //     ); 
  //   }
  // }
  

  
  
  // const App = {
  //   title : 'indesicion app',
  //   subTitle : 'put ur life in the hands ',
  //   times:['one', 'two', 'three']
  //   // Location: "Yaba" 
  // }
  
  //  function getOtherTitle (inputted) {
  //    if (inputted){
  //      return <p>Location :{inputted}</p>
  //    }
  // }
  //  const sudMiited = (e) =>{
  // e.preventDefault();
  // const time = e.target.elements.optiom.value;
  // if(time){
  //   App.times.push(time)
  //   e.target.elements.optiom.value='';
  //   onformSubit();
  // }
  
  // }
  // const removeAll = () =>{
  //   App.times.length = 0;
  //   onformSubit();
  // }
  
  // onformSubit = () => {
  //   const  template =  (
  //   <div> 
  //     <h1>{App.title ? App.title:"aNIYMOUS"}</h1>
  //     {(App.time && App.time >= 20) &&<P>Time: {App.time}</P> }
  //     <p>{App.times.length }</p>
  //     {
  //       App.times.map((num)=> <li key={num}> time: {num}</li>  )
  //     }
  //      {getOtherTitle(App.Location)}
  //      {App.time.length>9? "here are options": "no options"}
  //      <form onSubmit={sudMiited}>
  //      <input type="text" name="optiom" />
  //      <button>add option</button>
  //      <button onClick={removeAll}>remove</button>
  //      </form>
  //   </div>
  // );
  // ReactDOM.render(template  , appRoot ); 
  // }
  // onformSubit()
  
  
  
  const appRoot = document.getElementById('app')
  ReactDOM.render(<IndecisionApp />  , appRoot );
  
  class OldSyntax {
        constructor () {
          this.name = 'kunle';
          this.getGreeting = this.getGreeting.bind(this)
        }
      getGreeting() {
        return `hi my name is ${this.name}`;
      }
  }
  const oldsyntax = new OldSyntax();
  console.log(oldsyntax)
const getGreeting = oldsyntax.getGreeting;
console.log(getGreeting())
   



  class NewSyntax  {
    name = 'wisdom';
    getNewGreeting =()=>{
      return `hi my name is ${this.name}`;
    }
  }
  const newSyntax = new NewSyntax (); 
  const anotherGreeting = newSyntax.getNewGreeting;
  console.log(anotherGreeting())
  console.log(newSyntax);

  
  
  




// console.log('app.js is running well!')
// console.log(validator.isEmail('from@gmail.com'))
// console.log(square(3))
// console.log(add(3,4)) 
// console.log(isAdult(34)) 
// console.log(canDrink(3)) 
// console.log(isSenior(93))



