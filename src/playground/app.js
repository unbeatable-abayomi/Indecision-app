class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }
  componentDidMount(){
     try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json)
      if (options) {
        this.setState(()=>{
          return {
            options:options
          }
        })
      }

     }catch (e) {
// DO NOTHING AT ALL
     }
    // console.log('fecthing Data')
  } 
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      // console.log('saving Data')
    }
        
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  handleDeleteOptions() {
    // this.setState (()=>{
    //   return {
    //     options : []
    //   }
    // })
    this.setState(()=> ({ options : []}));
  }
  handleDeleteOption (optionToRemove) {
    this.setState((prevState)=>{
      return {
         options:prevState.options.filter((option)=>{
           return optionToRemove !== option ;
         })
      }
    })
  }
  handlePick () {
    let random = Math.floor(Math.random()*this.state.options.length)
     let option = this.state.options[random]
    alert(option)
  }
  handleAddOption (option){
    if(!option){
      return "Enter Valid value to add item"
    }else if(this.state.options.indexOf(option) > -1){
      return 'This Option already Exists'
    }
  // this.setState((preState)=>{
  //   return{
  //     options: preState.options.concat(option)
  //   }
  // })
  this.setState((preState)=>({options: preState.options.concat(option)}))
  }

  render () {
    // const appTitle = 'Indecision';
    const appTitleSubtitle = 'Put your life in the hands of a computer';
    return (
       <div>  
       <Header  subTitle={appTitleSubtitle}/>
       <Action  hasOptions = {this.state.options.length > 0}
         handlePick = {this.handlePick} 
       />
       <Options options={this.state.options} 
       handleDeleteOptions={this.handleDeleteOptions}
       handleDeleteOption = {this.handleDeleteOption}
       />
       <AddOption  
       handleAddOption={this.handleAddOption} 
       />
   <template/>
       </div>
    );
  }
}



const Header = (props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
      </div>
  );
}
Header.defaultProps = {
  title : "Indecsion"
}

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

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
       disabled={!props.hasOptions} 
      >What should i do</button>
      
    </div>
  );
}

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

const Options = (props)=> {
  return (
    <div>

      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length ===0 && <p>Please add an option to get started</p>}
      {props.options.map((num)=> 
        <Option key={num} 
        optionText ={num}
        handleDeleteOption = {props.handleDeleteOption}
        />)}
    
      </div>
  );
}

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

const Option = (props) => {
  return (
    <div>
      Option : {props.optionText}
      <button onClick={(e)=>{
         props.handleDeleteOption(props.optionText);
      }}
      
      >remove</button>
      </div>
  );

}

// class Option extends React.Component {
//   render () {
//     return (
//       <div>
//       Option : {this.props.optionText}
//       </div>
//     ); 
//   }
// }

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    };
  }
  handleAddOption (e) {
     e.preventDefault();
     const option = e.target.elements.option.value.trim();
    const error =  this.props.handleAddOption(option);  
   
    // this.setState (()=>{
    //   return {error}
    // })
    this.setState(()=>({error}));
   if(!error){
    e.target.elements.option.value = '';
   }

  }
  
  render () {
    return (
      <div>
      {this.state.error&&<p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


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



