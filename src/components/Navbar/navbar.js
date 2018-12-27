import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap/lib';
import './navbar.css';

const NoUsersItem = () => (
    <MenuItem>Currently No Users</MenuItem>
);

const UserIcon = () => (
    <i className="User-Icon fas fa-user"></i>
);

const NavigationBarView = ({users, username}) => {
    const NavBarDropdownItems = users.map((user,index) => (
        <MenuItem>
            <UserIcon/>
            <span className="Username-List-Item">
                {user.username}
                { username === user.username && (' (You)') }
            </span>
        </MenuItem>
    ));
    
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    Online Jukebox
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown title="Users" id="Users-Nav-Dropdown">
                        { users.length > 0 ? (NavBarDropdownItems) : <NoUsersItem/> }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = state => {
    return {
        username: state.user.username,
        users: state.lobby.users
    }
};

const NavigationBar = connect(mapStateToProps)(NavigationBarView);

export default NavigationBar
