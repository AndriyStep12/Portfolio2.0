import './project.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectsPage({isActive}) {
    const [repos, setRepos] = useState([]);

useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get("https://api.github.com/users/AndriyStep12/repos?page=1&per_page=100");
            const data = response.data;
            const filteredRepos = data.filter(repo => repo.description != null & repo.homepage != '' & repo.homepage != null &  repo.name != 'Portfolio2.0');
            filteredRepos.sort(function(a, b) {
                return a.stargazers_count - b.stargazers_count;
            });
            filteredRepos.reverse()
            setRepos(filteredRepos);
        } catch (error) {
            console.error(error);
            setRepos([]);
        }
    }
    fetchData();
}, []);



    return (
        <div className="projectCards" style={!isActive ? {marginLeft: '0%', overflowY: 'hidden', transition: '1s', display: 'flex'}: {display: 'none', marginLeft: '-100%', overflow: 'hidden', transition: '1s'}}>
            <h2>My Projects</h2>
            <div className="projects-cards">
                {repos.map(item => (
                    <Card
                        key={item.id}
                        homepage={item.homepage}
                        name={item.name}
                        likes={item.stargazers_count}
                        link={item.html_url}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;