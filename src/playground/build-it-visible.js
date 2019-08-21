class VisibiltyToggle extends React.Component{
   constructor (props){
     super(props)
     this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
     this.state = {
       visibilty : false
     }
   }
handleToggleVisiblity(){
  this.setState((pre)=>{
    return{
      visibilty : !pre.visibilty 
    } 
  })
}
  render() {
    return(
      <div>
      <h1>Visibilty Toggle</h1>
      <button onClick={this.handleToggleVisiblity}>{this.state.visibilty? 'hide details' : "show details"}</button>
      {this.state.visibilty &&(
        <div> 
        <p>Here are some details</p> 
        </div>)}
      </div>
    );
  }
}

ReactDOM.render(<VisibiltyToggle/>, document.getElementById('app') );



// console.log('working');
// const secondApp = document.getElementById('app5')
// let visibilty = false;

// const toggleVisibility = () =>{
//   visibilty = !visibilty;
//   render()
// };

// const render = () =>{
//     const jsx = (
//     <div> 
//     <h1>Visibilty Toggle</h1>
//     <button onClick = {toggleVisibility}>
//     {visibilty? "Hide Details" : "Show Details"}
//     </button>
//     {visibilty && (
//         <div>
//         <p>Hey, this are some details you can now see </p>
//         </div>
//     )}
//     </div>
//     );
    
// ReactDOM.render(jsx, secondApp ); 
// };
    
// render ()





