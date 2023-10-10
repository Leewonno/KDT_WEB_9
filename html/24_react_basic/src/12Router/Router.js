import {BrowserRouter, Route, Routes, createBrowserRouter} from 'react-router-dom';

import App from '../App';
import Home from './Home';
import About from './About';
import Header from './Header';
import User from './User';
import Redirect from './Redirect';
import UserDetail from './UserDetail';
import NotFound from './404';
import Error from './Error';
import Comment from './Comment';


// ver1
// export default function Router(){
//     return<>
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/user' element={<User></User>} />
//                 <Route path='/redirect' element={<Redirect />} />
//                 <Route path='/user/:userid' element={<UserDetail />} />
//                 <Route path='/*' element={<NotFound />} />
//             </Routes>
//         </BrowserRouter>
//     </>
// }


// ver2
const Router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path: '',
                element: <Home></Home>,
                // 에러가 발생하면 404와는 다르게 띄우기 위해
                errorElement: <Error />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'redirect',
                element: <Redirect />,
            },
        ],
        errorElement:<NotFound />
    },
    {
        path:'/user',
        element:<App />,
        children:[
            {
                path:'',
                element:<User></User>
            },
            {
                path:':userid',
                element:<UserDetail></UserDetail>,
                children: [
                    {
                        path:"comment",
                        element:<Comment></Comment>
                    }
                ]
            }
        ]
    }

])

export default Router;
// export default function Router(){
//     return<>
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/user' element={<User></User>} />
//                 <Route path='/redirect' element={<Redirect />} />
//                 <Route path='/user/:userid' element={<UserDetail />} />
//                 <Route path='/*' element={<NotFound />} />
//             </Routes>
//         </BrowserRouter>
//     </>
// }