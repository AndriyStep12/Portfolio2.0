import './about.css'

let tech_skills = ['React.js', 'HTML', 'CSS', 'JS', 'Bootstrap', 'jQuery', 'node.js', 'canvas.js', 'tippy.js', 'typed.js', 'email.js', 'MUI', 'SCSS', 'Redux', 'React Router']
let soft_skills = ['Teemwork', 'GTD', 'Creativity', 'Responsibility', 'Leadership', 'Motivation', 'Patience']  

function AboutMe ({isActive}){
    return (
        <div className="aboutMePage" style={!isActive ? {marginLeft: '0%', overflowY: 'auto', transition: '1s'}: {marginLeft: '-100%', overflowY: 'hidden', transition: '1s'}}>
            <div className="about-me">
                <div className="up">
                    <h2>About Me</h2>
                </div>
                <div className="down">
                    <div className="left">
                        <div className="blockImage"></div>
                    </div>
                    <div className="right">
                        <h4>Hi there🔥✋. I'm <span className="colorful">Andriy</span></h4>
                        <p>I'm a young <span className="colorful">programmer</span>. I <span className="colorful">study at Creator IT Academy</span> and I like it. During this time I learned something new and interesting and every new lesson it is adding to my knowledge. When I came there, everything seemed magical to me, from a regular page with text to a page with effects and a lot of functionality. I even didn't know if I could learn it all and write the code by myself. But as you can see, <span className="colorful">everything is possible, you just need to want it</span>. Before that I didn't understand computers at all (I can't even download a single program), and now I understand almost everything, at least in codes.</p>
                    </div>
                </div>
            </div>
            <div className="info">
                <h2>Info</h2>
                <p>const name = '<span className="red">Andriy</span>'</p>
                <p>const surname = '<span className="red">Stepaniak</span>'</p>
                <p>const years = '<span className="red">14</span>'</p>
                <p>const nationality = '<span className="blue">Ukr</span><span className="yellow">aine</span>'</p>
            </div>
            <div className="skills">
                <h2>My Skills</h2>
                <p>let tech_skills = [{tech_skills.map((item, index)=> <span className="block">'<span className='red'>{item}</span>'{index !== tech_skills.length-1 && ', '}</span>)}]</p>
                <p>let soft_skills = [{soft_skills.map((item, index) => <span className="block">'<span className='red'>{item}</span>'{index !== soft_skills.length-1 && ', '}</span>)}]</p>
            </div>
        </div>
    )
}

export default AboutMe;