import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About'
import Hero from './components/Hero';
import { Route,Routes
 } from 'react-router-dom';
import Events from './components/Events';
import Footer from './components/Footer';
//import SubmitQuery from './components/Popup';
import Student from './components/Student';
import PlacementDetail from './components/PlacementDetail';
import Home from './components/Home';
//import FeedbackForm from './components/FeedbackForm';
import Lookingjob from './components/Lookingjob';
import FullStack from './components/FullStack';
import Internship from './components/Internship';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import PricingR from './components/PricingR';
import Term from './components/Term';
import Privacy from './components/Privacy';
import Practice from './components/Practice';
import Private from './components/Private';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';

function App() {
  return (
    <div className="App">
    <Header/>
   

    <Routes>
  
      <Route path='/Lookingjob' element={<Lookingjob/>}></Route>

    <Route path='/Student' element={<Student/>}/>

    <Route path='/Home' element={<Home/>}/>

    <Route path='/Events' element={<Events/>}/>

    <Route path='/Hero'
      element={<Hero/>} />

    <Route path='/About'
      element={<About/>} />

<Route path='/Practice'
      element={<Practice/>} />

<Route path='/Blog'
      element={<Blog/>} />

<Route path='/PlacementDetail' element={<PlacementDetail/>}/>

<Route path='/Contact'
      element={<Contact/>} />

<Route path='/Blog1'
      element={<Blog1/>} />

<Route path='/Blog2'
      element={<Blog2/>} />

<Route path='/Blog3'
      element={<Blog3/>} />


<Route path='/Courses'
      element={<Courses/>} />


<Route path='/FullStack'
      element={<FullStack/>} />

      <Route path='/Backend'
      element={<Backend/>} />

      <Route path='/Frontend'
      element={<Frontend/>} />

<Route path='/Internship'
      element={<Internship/>} />
   

   <Route path='/PricingR'
      element={<PricingR/>} />

      <Route path='/Term'
      element={<Term/>} />

<Route path='/Privacy'
      element={<Privacy/>} />



 <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />




    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
