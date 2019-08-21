

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount () {
             let data = localStorage.getItem('counts');
             let newData = parseInt(data, 10)
             this.setState(()=>{
                 return {
                   count:  newData
                 }
             })
    }
    componentDidUpdate(prevpProps, preState) {
          const data = parseInt(this.state.count,10)
          localStorage.setItem('counts', data)
    }
    handleAddOne () {
     this.setState((preState)=>{
         return{
             count: preState.count +1
         }
     })   
    }
    handleMinusOne () {
        this.setState((preState)=>{
            return{
                count: preState.count -1
            }
        }) 
    }  
    handleReset () {
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }
  render() {
      return (
         <div>   
         
          
        <h1>Count : {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
          </div>
      );
  }
}


ReactDOM.render(<Counter  />, document.getElementById('app'))
//  let count = 0; 
//  const addOne = () =>{
//    count ++;
//    renderCounterApp();
//    console.log('one has been added',count)
//  }
 
//  const minusOne = () =>{
//    count --;
//    renderCounterApp();
//    console.log('one has been removed', count)
//  }
 
//  const resetFun = () => {
//    count = 0;
//    renderCounterApp();
//    console.log('item rested', count)
//  }
     

//  const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//   let templateTwo = (
//     <div>
     
//        <h1>Count : {count}</h1>
//        <button onClick ={addOne}> +1</button>
//        <button onClick={minusOne} >-1</button>
//        <button onClick={resetFun} >reset</button>
       
       
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot); 
// }
//   renderCounterApp();
