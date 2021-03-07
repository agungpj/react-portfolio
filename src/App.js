import React from "react";
import NavSection from "./components/NavSection";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <NavSection />
      <AnimatePresence exitBeforeEnter>
        {/* animate key untuk ngasih tau kapan animasi mulai */}
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <About />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};
export default App;
