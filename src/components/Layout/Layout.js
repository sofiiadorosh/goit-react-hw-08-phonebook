import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
