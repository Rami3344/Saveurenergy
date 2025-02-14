import Button from 'react-bootstrap/Button';
import Carousel from './components/carousel/carousel.js'
import Cards from './components/card/card.js'
import './Home.css'
export default function App() {
  return (
    <div className='home'>
      <Carousel/>
      <h1 className='text-center text-6xl pb-10'>A TRUSTED PARTNER FOR EVERY MISSION</h1>
      <h2 className='text-center w-8/12 pb-10'>US21 has been supporting programs and missions for the U.S. Military, federal agencies, and government contractors for over 20 years.</h2>
      <h3 className='text-center text-xl w-8/12 pb-10'> We provide equipment & gear, training, supply chain solutions and logistics services to those who serve our nation. We partner with global companies to offer integrated and customized solutions to get your mission done on time and under budget.</h3>
      <Button variant="outline-secondary" className='btn'><a href='/About' className='no-underline text-gray-700'>Learn More About US21</a></Button>


      <h1 className='text-center pt-10 pb-10 '>Our Strategic Focus</h1>
      <div className='flex justify-center'>
        <Cards name="Military" desc="testing desc desc desc" imgsrc="media/img1.jpg" />
        <Cards name="Military" desc="testing desc desc desc" imgsrc="media/img1.jpg" />
        <Cards name="Military" desc="testing desc desc desc" imgsrc="media/img1.jpg" />
      </div>

      <h1 className='text-center pt-10 pb-3'>Who We Serve</h1>
      <h2 className='text-center w-6/12 pb-3'>At US21, we believe in empowering everyone that works to make the world safer.</h2>
      <h3 className='text-center text-xl w-6/12 pb-3'>We proudly do our part by supporting those who protect our nation first, our troops, federal government agencies, and the intelligence community. The impact we make can be found in many frontlines around the world.</h3>
    </div>
  );
}
