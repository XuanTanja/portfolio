import '../style/App.css';

import MainContent from './MainContent';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import { motion } from 'framer-motion';


function Home() {
  const menuTitle = [
    {
      title: "MA",
      path:"hero"
    }
  ]
  const menuItems = [
    {
        title: "About me",
        path: "about"
    },
    {
        title: "Projects",
        path: "all-projects"
    },
    {
        title: "Contact",
        path: "contact-footer"
    }
  ]

  return (
    <motion.div initial={{ opacity:1 }} animate={{ opacity:1, duration:3 }} exit={{ opacity:0, duration:3 }}>
      <Navbar projectTitle={null} menuTitle={menuTitle} menuItems={menuItems} maxPixel={80}></Navbar>
      {/* <Hero></Hero> */}
      <MainContent className="main"></MainContent>
      <ContactFooter></ContactFooter>
    </motion.div>
  );
}

export default Home;
