import {BrowserRouter, Route, Routes, createBrowserRouter} from 'react-router-dom';

import App from '../App';
// import NotFound from './404';
import P_Home from './P_Home';
import Student from './Student';
import StudentName from './StudentName';


// ver2
const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path: '',
                element: <P_Home />,
            },
        ],
    },
    {
        path:'/student',
        element:<App />,
        children:[
            {
                path:':id',
                element:<Student></Student>,
                children:[
                    {
                        path:'',
                        element:<StudentName></StudentName>
                    }
                ]
            }
        ]
    }

])

export default Router;
