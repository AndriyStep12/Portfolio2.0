import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import ProjectsPage from './components/projects/project';
import Contacts from './components/contacts/contacts';
import AboutMe from './components/about/about';
import { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import './menu.css'
import './adaptive.css'

function App() {

  const [isActive, setIsActive] = useState(false);
  const githubToken = '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';


  return (
    <Router>
      <div className="App" style={!isActive ? {overflowY: 'hidden'}: {overflow: 'hidden'}}>
        <Header
          isActive={isActive}
          setIsActive={setIsActive}
        />
        {/* {isActive === false ? null :  } */}

        <div className="menuAll" style={!isActive ? {marginLeft: '100%'}: {marginLeft: '0%'}}>
          <Link to="/" onClick={function(){
            setIsActive(!isActive)
          }}>Homepage</Link>
          <Link to="/about-me" onClick={function(){
            setIsActive(!isActive)
          }}>About me</Link>
          <Link to="/projects" onClick={function(){
            setIsActive(!isActive)
          }}>Projects</Link>
          <Link to="/contacts" onClick={function(){
            setIsActive(!isActive)
          }}>Contacts</Link>
          {/* <a href='/CV.pdf' className='cvBtn' download>CV download</a> */}
          <a 
            href={process.env.PUBLIC_URL + "CV.pdf"} 
            download={"CV.pdf"}
            className="cvBtn"
          >
            CV downloader
          </a>
        </div>
        
        <Switch>
          <Route exact path="/">
            <MainPage
              isActive={isActive}
            />
          </Route>
          <Route path="/about-me">
            <AboutMe
              isActive={isActive}
            />
          </Route>
          <Route path="/projects">
            <ProjectsPage
              isActive={isActive}
              GITHUB_TOKEN={githubToken}
            />
          </Route>
          <Route path="/contacts">
            <Contacts
              isActive={isActive}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
