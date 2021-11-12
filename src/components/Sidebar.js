import { Avatar, IconButton } from "@material-ui/core";
import { ExitToApp, SearchOutlined, Add, Home, Message, PeopleAlt } from "@material-ui/icons";
import React from "react";
import SidebarList from './SidebarList';
import { auth } from '../firebase';
import "./Sidebar.css";
import { NavLink, Switch, Route } from 'react-router-dom';

export default function Sidebar({ user, page }) {
  const [menu, setmenu] = React.useState(1)


  function signOut() {
    auth.signOut();
  }

let Nav;
if (page.isMobile) {
  Nav = NavLink;
} else {
  Nav = props => (
    <div
      className={`${props.activeClass ?
         "sidebar__menu--selected" : ""}`}
         onClick={props.onClick}
    >
        {props.children}
    </div>
  )
}

  return( <div className="sidebar" style={{
    minHeight: page.isMobile ? page.height : "auto",
  }}>
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user?.photoURL} />
          <h4>{user?.displayName}</h4>
        </div>
        <div className="sidebar__header--right">
          <IconButton onClick={signOut}>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
    <div className="sidebar__search">
      <form className="sidebar__search--container">
        <SearchOutlined />
        <input
          placeholder="Search for Users or Rooms"
          type="text"
          id="search"
        />
      </form>
    </div>

    <div class="sidebar__menu">
    <Nav
        to="/chats"
        activeClass="sidebar__menu--selected"
        onClick={() => setmenu(1)}
        activeClass={menu === 1}
      >
        <div className="sidebar__menu--home">
          <Home />
          <div className="sidebar__menu--line" />


        </div>
      </Nav>
      <Nav
        to="/chats"
        activeClass="sidebar__menu--selected"
        onClick={() => setmenu(2)}
        activeClass={menu === 2}
      >
        <div className="sidebar__menu--home">
          <Message />
          <div className="sidebar__menu--line" />


        </div>
      </Nav>
      <Nav
        to="/users"
        activeClass="sidebar__menu--selected"
        onClick={() => setmenu(3)}
        activeClass={menu === 3}
      >
        <div className="sidebar__menu--users">
          <PeopleAlt />
          <div className="sidebar__menu--line" />


        </div>
      </Nav>
    </div>


    {page.isMobile ? (
    <Switch>
      <Route path="/chats">
        <SidebarList />
      </Route>
      <Route path="/rooms">
        <SidebarList />
      </Route>
      <Route path="/users">
        <SidebarList />
      </Route>
      <Route path="/search">
        <SidebarList />
      </Route>
    </Switch>
  ) : menu === 1 ? (
    <SidebarList />
  )
  : menu === 2 ? (
    <SidebarList />
  )
  : menu === 3 ? (
    <SidebarList />
  )
  : menu === 4 ? (
    <SidebarList />
  ) : null}

    <div className="sidebar__chat--addRoom">
        <IconButton>
          <Add />
        </IconButton>
      </div>
    </div>
  );
}
