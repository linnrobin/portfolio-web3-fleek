// Import Assets
import profile from '../assets/profile.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Robin Widjaja" />

            <div className='header__content'>
                <h1>Hi, I'm Robin Widjaja</h1>
                <p>Project Manager</p>
                <a href="mailto:robinsalim@yahoo.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;