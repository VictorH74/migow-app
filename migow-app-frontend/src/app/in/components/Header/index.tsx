"use client"
import React from 'react';
import useHeader from "./useHeader"
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from '@/util/functions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import usePopup from '@/hooks/usePopup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationMenu from '../NotificationMenu';


export default function Header() {
  const hook = useHeader();
  const profilePopup = usePopup()
  const notificationsPopup = usePopup()

  return (
    <header className='h-20 max-[1400px]:px-2 bg-white'>
      <div className='h-full w-full max-w-[1400px] m-auto flex items-center justify-between'>
        <div className=''>LOGO</div>
        <div className='flex gap-7 text-gray-500'>
          {hook.navButtons.map(btn => (
            <button key={btn.label} {...(btn.rest ? btn.rest(notificationsPopup.open) : {})}  className='text-center' onClick={btn.rest ? notificationsPopup.handleClick : btn.onClick} >
              <btn.Icon className='text-[35px]' />
              <p>{btn.label}</p>
            </button>
          ))}
          <button className=''
            id="basic-button"
            aria-controls={profilePopup.open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={profilePopup.open ? 'true' : undefined}
            onClick={profilePopup.handleClick}
          >
            <Avatar {...stringAvatar("victor almeidaa", { width: 35, height: 35, fontSize: 13 })} />
            Me
            <span><ExpandMoreIcon /></span>
          </button>
          <Menu
            id="basic-menu"
            anchorEl={profilePopup.anchorEl}
            open={profilePopup.open}
            onClose={profilePopup.handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={profilePopup.handleClose}>See profile</MenuItem>
            <MenuItem onClick={profilePopup.handleClose}>Settings</MenuItem>
            <MenuItem onClick={profilePopup.handleClose}>Log out</MenuItem>
          </Menu>
          <NotificationMenu popup={notificationsPopup} />
        </div>
      </div>
    </header>
  );
}