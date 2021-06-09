
import '../style/Navbar.scss';
import React from 'react';
class Navbar extends React.Component {
    handleChange = e => {
        const value = e.target.value;
        const { setValue } = this.props;
        setValue(value); //回傳值給父組件
        
    };
    render() {
        return (
            <div className='navbar'>
                <div className='title'>我的青草店</div>
                <input className='filter'
                    type="text"
                    placeholder='搜尋篩選....'
        
                    onChange={this.handleChange}
                />
                <div className='user-name'>UserName</div>
            </div>)
    }
};
export default Navbar;