import { Routes, Route} from 'react-router-dom';

import Admin from '../Pages/Admin/admin';
import Home from '../Pages/Home/home';
import Register from '../Pages/Register/register';
import Private from './Private';


function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/admin' element={ <Private> <Admin /> </Private> } />
        </Routes>
    )
}

export default RoutesApp;