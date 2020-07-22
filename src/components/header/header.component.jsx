import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contact' className="option">CONTACT</Link>
                {
                    currentUser
                    ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/sign'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                !hidden ?
                <CartDropdown />
                :
                null
            }            
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);