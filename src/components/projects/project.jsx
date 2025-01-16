import './project.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectsPage({ isActive }) {
    const [repos, setRepos] = useState([]);

    const GITHUB_TOKEN = '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';

    async function fetchAllRepos() {
        let page = 1;
        let allRepos = [];
        let hasNextPage = true;

        while (hasNextPage) {
            const response = await axios.get("https://api.github.com/user/repos", {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
                params: {
                    visibility: 'all',
                    per_page: 100,
                    page: page
                }
            });
            allRepos = allRepos.concat(response.data);
            hasNextPage = response.headers.link && response.headers.link.includes('rel="next"');
            page++;
        }

        return allRepos;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchAllRepos();
                const filteredRepos = data.filter(repo => 
                    repo.description &&
                    repo.homepage &&
                    repo.name !== 'Portfolio2.0' &&
                    repo.name !== 'Portfolio' &&
                    repo.name !== 'meeting-platform-server'
                );
                filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(filteredRepos);
            } catch (error) {
                console.error(error);
                setRepos([]);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="projectCards" style={!isActive ? { marginLeft: '0%', overflowY: 'hidden', transition: '1s', display: 'flex' } : { display: 'none', marginLeft: '-100%', overflow: 'hidden', transition: '1s' }}>
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
