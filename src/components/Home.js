import '../style/App.css';

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
        title: "Über mich",
        path: "about"
    },
    {
        title: "Projekte",
        path: "all-projects"
    },
    {
        title: "Kontakt",
        path: "contact-footer"
    }
  ]

  return (
    <motion.div initial={{ opacity:1 }} animate={{ opacity:1, duration:3 }} exit={{ opacity:0, duration:3 }}>
      <Navbar projectTitle={null} menuTitle={menuTitle} menuItems={menuItems} maxPixel={150}></Navbar>
      <ContactFooter></ContactFooter>
    </motion.div>
  );
}

export default Home;
