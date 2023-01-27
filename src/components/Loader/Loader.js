import PulseLoader from 'react-spinners/PulseLoader';

const override = {
  textAlign: 'center',
  margin: '0 auto',
};

export function Loader() {
  return (
    <PulseLoader
      color="#000000"
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
