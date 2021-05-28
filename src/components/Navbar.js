
import '../style/Navbar.scss';
const Navbar = () => (
    <div className='navbar'>
        <div className='title'>我的青草店</div>
        <input className='filter' type="text" placeholder='搜尋篩選....' />
        <div className='user-name'>UserName</div>
    </div>
);
export default Navbar;