import { createBrowserRouter, useMatch, Link, NavLink, Outlet, useRouteError } from 'react-router-dom';
import './index.scss';

const FourOFour = () => {
  const error = useRouteError() as any;
  console.log(error);

  return <>
    <h1>{error.status} {error.statusText}</h1>
    <Link to="/">Retour</Link>
  </>
};

const One = () => {
  const route = useMatch('/one');
  console.log(route);
  return <h1>One</h1>;
};
const Two = () => <h1>Two</h1>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <NavLink to="/one" style={({ isActive }) => {
        if (!isActive) return;
        return {
          color: 'green',
          fontSize: '1.9rem'
        };
      }}>Vers One</NavLink>
      <NavLink to="/two">Vers Two</NavLink>
      <Outlet />
    </>,
    errorElement: <FourOFour />,
    children: [
      {
        path: '/one',
        element: <One />,
      },
      {
        path: '/two',
        element: <Two />
      },
    ]
  },
]);