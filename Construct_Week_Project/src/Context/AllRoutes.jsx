import {Routes,Route} from 'react-router-dom' ; 
import AutoPage from './AutoPage';
import CricketPage from './CricketPage';
import CryptoPage from './CryptoPage';
import EntertainmentPage from './EntertainmentPage';
import Home from './Home';
import IndiaPage from './IndiaPage';
import OpinionPage from './OpinionPage';
import PoliticsPage from './PoliticsPage';
import SportsPage from './SportsPage';
import TechPage from './TechPage';
import WorldPage from './WorldPage';


function AllRoutes(){


    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/india' element={<IndiaPage/>}/>
                <Route path='/world' element={<WorldPage/>}/>
                <Route path='/politics' element={<PoliticsPage/>}/>
                <Route path='/auto' element={<AutoPage/>}/>
                <Route path='/opinion' element={<OpinionPage/>}/>
                <Route path='/sports' element={<SportsPage/>}/>
                <Route path='/cricket' element={<CricketPage/>}/>
                <Route path='/entertainment' element={<EntertainmentPage/>}/>
                <Route path='/tech' element={<TechPage/>}/>
                <Route path='/crypto' element={<CryptoPage/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes ; 
