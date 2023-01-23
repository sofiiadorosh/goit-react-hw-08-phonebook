import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { AppBar } from 'components/AppBar';

const override = {
  textAlign: 'center',
};

export function Layout() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <PulseLoader
            color="#000000"
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
