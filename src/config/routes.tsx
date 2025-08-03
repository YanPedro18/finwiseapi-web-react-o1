import { createBrowserRouter } from 'react-router-dom';

import Error from '../error';
import DashboardLayout from '../layouts/DefaultLayout';
import SignIn from '../Pages/SignIn';

export const router = createBrowserRouter([
  {
    path: '/sign',
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: '/dash',
    element: <DashboardLayout />, // usa o layout completo com menu + header + outlet
    errorElement: <Error />,
    // children: [
    //   {
    //     path: '',
    //     element: <DashboardPage />,
    //   },
    //   {
    //     path: 'usuarios/listar',
    //     element: <UsuariosList />,
    //   },
    //   {
    //     path: 'usuarios/novo',
    //     element: <UsuarioNovo />,
    //   },
    // ],
  },
]);
