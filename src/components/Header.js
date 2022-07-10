import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a href='#home'>
          <img src='/images/home-icon.svg' alt='home icon' />
          <span>HOME</span>
        </a>
        <a href='#search'>
          <img src='/images/search-icon.svg' alt='search icon' />
          <span>SEARCH</span>
        </a>
        <a href='#watchlist'>
          <img src='/images/watchlist-icon.svg' alt='watchlist icon' />
          <span>WATCHLIST</span>
        </a>
        <a href='#original'>
          <img src='/images/original-icon.svg' alt='original icon' />
          <span>ORIGINALS</span>
        </a>
        <a href='#movie'>
          <img src='/images/movie-icon.svg' alt='movie icon' />
          <span>MOVIES</span>
        </a>
        <a href='#series'>
          <img src='/images/series-icon.svg' alt='series icon' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/photo.jpg' />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 25px;
  flex: 1;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: white;
    cursor: pointer;

    img {
      height: 20px;
      margin-right: 2px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  cursor: pointer;
`;
