import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Navbar />
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;