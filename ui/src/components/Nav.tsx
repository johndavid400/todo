import { useState, useEffect, useReducer, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TokenUtils from "@/utils/token";
import AuthContext from '@/context/AuthContext'
import siteLogo from '@/assets/site-logo.png';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const unAuthenticatedNavbar = () => {
    return (
      <>
      </>
    )
  }

  const authenticatedNavbar = () => {
    return (
      <div className='main-nav'>
        <div className='site-logo'>
          <img src={siteLogo} className="logo" alt="Site logo" />
        </div>
        <div className='menu'>
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link to="/test">Test Counters</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/users">Users</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/lists">Lists</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/nottest">Blank Page</Link></DropdownMenuItem>
              <hr />
              <DropdownMenuItem><Link to="/logout">Logout</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }

  return (
    <>
      {user ? authenticatedNavbar() : unAuthenticatedNavbar()}

    </>
  )
};

export default Nav;
