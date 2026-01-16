import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/create' element={<CreateProduct/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;