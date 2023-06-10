import './mainPage.css'

function MainPage({isActive}){
    return(
        <div className="mainPage" style={!isActive ? {marginLeft: '0%', overflowY: 'auto', transition: '1s'}: {marginLeft: '-100%', overflowY: 'hidden', transition: '1s'}}>
            <div className="left">
                <h1>Hello <br />I'm Andriy</h1>
                <button className='connecting'>Connect with me</button>
                <div className='skillsMainPage'>
                    <p className='goodAt'>//I am good at <br />//JS, ReactJS, HTML, CSS, SCSS</p>
                </div>
                <div className="emailMainPage">
                    <p className="email"><span className="red">andystep</span>.developer@gmail.com</p>
                </div>
            </div>
            <div className="right">
                
            </div>
        </div>
    )
}

export default MainPage;