import React from 'react';
import ReactDOM from 'react-dom/client';
import Bhai from './Archan';
import Ary from './Ary';
import signup, { login } from './compo';
import FAF, { Series, myfn, numbersCombined, Pms} from './compo1';
import Chill, { Mini,Inc, Watch } from './hookss';
import MovAry from './MovAry';
import Movie from './Moviesss';
import Event from './Event';
import Dataget from './Forms';
import Secondform from './Secondform';
import Thirdform from './Thirdform';
import Hook, { Baroda, Tendate } from './hook';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Api from './API';
import Redu from './Redu';
import ReduCls from './ReduCls';
import { Provider } from 'react-redux';
import Design from './Design';
import infotech from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
<h1 style={{color:'Green'}}>REDUX</h1>
<React.StrictMode>
  <Provider store={infotech}>
    <Design/>
  </Provider>
</React.StrictMode>

<hr/>

<h1 style={{color:'Green'}}>Reducer use class</h1>
<ReduCls/>

<h1 style={{color:'Green'}}>Reducer</h1>
<Redu/>

<hr/>

<h1 style={{color:'Green'}}>API</h1>
<Api/>

<hr/>

 <BrowserRouter>
  
   <App />
  
 </BrowserRouter>

<hr/>

<h1 style={{color:'Green'}}>HOOKS : UseEffect</h1>
<Hook />

<hr/>

<h1 style={{color:'Green'}}>HOOKS : UseEffect (TASK)</h1>
<Tendate/>
<hr/>
<h1 style={{color:'Green'}}>HOOKS : UseEffect (TASK:2)</h1>
<Baroda/>
<hr/>


<h1 style={{color:'red'}}>HOOKS : UseState : 3rd GetDataForm (Use Spread Op)</h1>
<Thirdform/>

<hr/>

<h1 style={{color:'red'}}>HOOKS : UseState : 2nd GetDataForm </h1>
<Secondform/>

<hr/>

<h1 style={{color:'red'}}>HOOKS : UseState : 1st GetDataForm</h1>
<Dataget/>

<hr/>

<center>
<h1 style={{color:'red'}}>Types Of Hooks</h1>
<h3 style={{color:'chocolate',textDecorationLine:'underline'}}>Basic Hooks</h3>
<h4 style={{color:'green'}}>useState()<br></br>
useEffect()<br></br>
useContext()</h4>

<hr/>

<h3 style={{color:'chocolate',textDecorationLine:'underline'}}>Additional Hooks</h3>
<h4 style={{color:'green'}}>useReducer()<br></br>
useMemo()<br></br>
useCallback()<br></br>
useImperativeHandle()<br></br>
useDebugValue()<br></br>
useRef()<br></br>
useLayoutEffect()<br></br>
</h4>
</center>

<hr/>

<h1 style={{color:'red'}}>EVENT</h1>
<Event/>

<hr/>

  <h1 style={{color:'red'}}>How to calling Components</h1>
  <h2>1.Create Function 2.Export function and 3.import function in Index.js and call function in render.</h2>

  <hr/>
  
  <h1 style={{color:'red'}}>FAT ARROW FUNCTION</h1>
  <h2>Arrow functions allow us to use the fat arrow operator to quickly define JavaScript functions, with or without parameters. We are able to omit the curly braces and the function and return keywords when creating a new JavaScript function to write shorter function syntax.</h2>

  {FAF()}

  <FAF/>  

  <hr/>
  
  
  <h1 style={{color:'red'}}>React.js Module</h1>
  {signup()}
  {login()}
  

  <hr/>

  <h1 style={{color:'red'}}>Spread Operator</h1>  
  {numbersCombined()}
  
  <hr/>

  <h1 style={{color:'red'}}>Array Method</h1>
  {myfn()}

  <hr/>

  {/* <h1 style={{color:'red'}}>PROPS Method</h1>
  {pms()}
  <Pms a='10' b='10' c='10'/>
  <Pms a='10' b='20' c='30'/>
  
  <hr/>

  <h1 style={{color:'purple'}}>Props With Fat Arrow Function</h1>
  <Series/>

  <hr/>

  <h1 style={{color:'purple'}}>Props With Fat Arrow Function</h1>
  {Movie()} */}
  {/* {MovAry{}}
  
  <Movie 
  img={MovAry[0].img}
  name={MovAry[0].name}
  p={MovAry[0].p}
  link={MovAry[0].link}
  />
  <Movie 
  img={MovAry[1].img}
  name={MovAry[1].name}
  p={MovAry[1].p}
  link={MovAry[1].link}
  />
  
  <hr/>

   {/* <Bhai name = 'archan' language = 'react js'/>
   <Bhai name = 'krunalBhai' language = 'node js' /> */}
   

   <Bhai
   name={Ary[0].name}
   language={Ary[0].language}
   />
   <Bhai
   name={Ary[1].name}
   language={Ary[1].language}
   />

  <hr/>

  <h1 style={{color:'Brown'}}>.Map() in Props using Array</h1>

   {MovAry.map((item) =>
    {
      return(
        <Movie 
        img={item.img}
        name={item.name}
        p={item.p}
        link={item.link}
        />

      )
    }
    )
   }

<hr/>

<h1 style={{color:'Brown'}}>useState</h1>
<Chill/>

<hr/>

<h1 style={{color:'Brown'}}>useState (TASK 1)</h1>
<Inc/>

<hr/>

<h1 style={{color:'Brown'}}>useState (TASK 2)</h1>
<Watch/>

<hr/>

<h1 style={{color:'Brown'}}>SetInterval (Mini Project)</h1>
<Mini/>

<hr/> 


</>

);


