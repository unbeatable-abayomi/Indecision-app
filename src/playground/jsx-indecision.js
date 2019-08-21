
console.log('app is running');
const appRoot = document.getElementById('app');
// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle:'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = (e) =>{
e.preventDefault();
const option = e.target.elements.option.value;
if (option){
  app.options.push(option);
  e.target.elements.option.value='';
  renderCounterApp2();
  

}

console.log(option)
console.log(app.options.length)
};
 
const onRemovesAll = () =>{
  app.options.length = [];
  renderCounterApp2();
}
const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option)
  console.log(randomNum);
}

const numbers = [20,30,40,50];
const renderCounterApp2 = () =>{
const template =  (
<div> 
   <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length>0 ? "Here are your opttions" :"No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should i do?</button> 
      <button onClick={onRemovesAll}>Remove all</button>
        {
           numbers.map((num)=>{
             return <p key={num}> Number : {num} </p>
           })
        }

        <ol>
          {
            app.options.map((option)=>{
                return <li key={option}> item : {option}</li>
            })
          } 
          
         </ol>
         <form onSubmit={onFormSubmit}>
           <input type="text" name="option" id="yomi"/>
           <button>Add Option</button>
         </form>


 </div>
 )
 ReactDOM.render(template, appRoot );  
}
 renderCounterApp2();
