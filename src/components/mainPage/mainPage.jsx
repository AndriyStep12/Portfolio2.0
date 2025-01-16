import './mainPage.css'

function MainPage({isActive}){
    return(
        <div className="mainPage" style={!isActive ? {marginLeft: '0%', overflowY: 'auto', transition: '1s'}: {marginLeft: '-100%', overflowY: 'hidden', transition: '1s'}}>
            <div className="left">
                <h1>Hello <br />I'm Andriy</h1>
                <a href='tel:+380680803866' className='connecting'>Connect with me</a>
                <div className='skillsMainPage'>
                    <p className='goodAt'>//Skilled in JS, React.js, Next.js, Node.js</p>
                </div>
                <div className="emailMainPage">
                    <p className="email"><span className="red">andystep2008</span>@gmail.com</p>
                </div>
            </div>
            <div className="right">
                
            </div>
        </div>
    )
}

export default MainPage;