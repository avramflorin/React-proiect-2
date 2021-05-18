import Header from '../components/Header';
import Footer from '../components/Footer';

import './Layout.css';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout;