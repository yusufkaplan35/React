import Spacer from "./components/00-common/spacer";
import {HelloWorld} from "./components/01-hello-world";
import Jsx1 from "./components/02-jsx/jsx1";
import Jsx2 from "./components/02-jsx/jsx2";
import Jsx3 from "./components/02-jsx/jsx3";
import Jsx4 from "./components/02-jsx/jsx4";
import Jsx5 from "./components/02-jsx/jsx5";
import Jsx6 from "./components/02-jsx/jsx6";
import Jsx7 from "./components/02-jsx/jsx7";
import Style1 from "./components/03-style/style1";
import Style2 from "./components/03-style/style2";
import Style3 from "./components/03-style/style3";
import Style4 from "./components/03-style/style4";
import Style5 from "./components/03-style/style5";
import Clock1 from "./components/04-clock/clock1";
import Greetings from "./components/05-props/greetings";
import Products from "./components/05-props/products";
import Clock2 from "./components/06-clock/clock2";


const App = () =>{
  return <div>
    {/* <HelloWorld/>
    <Jsx1/>
    <Jsx2/>
    <Jsx3/>
    <Jsx4/>
    <Jsx5/>
    <Jsx6/>
    <Jsx7/> 
    <Style1/>
    <Style2/>
    <Style3/>
    <Style4/>
    <Style5/>
    <Clock1/>
    <Greetings/>
    <Products/>
*/}

    
    <Clock2 textColor="white" bgColor="brown" showTime={false}/>
    <Spacer height='20px'/>
    <Clock2 textColor="yellow" bgColor="navy"/>
    

    </div>;
};

export default App;
