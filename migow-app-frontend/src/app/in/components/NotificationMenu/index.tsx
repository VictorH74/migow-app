"use client"
import React from 'react';
import useNotificationMenu, { NotificationMenuProps } from "./useNotificationMenu"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { formatISODate, stringAvatar } from '@/util/functions';


export default function NotificationMenu(props: NotificationMenuProps) {
  const hook = useNotificationMenu(props);

  return (
    <Menu
      id="notification-menu"
      anchorEl={props.popup.anchorEl}
      open={props.popup.open}
      onClose={props.popup.handleClose}
      MenuListProps={{
        'aria-labelledby': 'notification-btn',
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
      <div className='p-2 h-[400px] w-[300px]'>
        <h2 className='text-center text-xl'>Notifications</h2>
        <div className='bg-blue-400 w-full h-[2px] my-2' />
        {hook.loading ?
          (<div className='h-[300px] grid place-items-center'>
            <p>Loading...</p>
          </div>)
          : (<>
            {hook.notifications.map((notfication) => (
              <MenuItem key={notfication.id} onClick={props.popup.handleClose}>
                <Avatar
                  {...stringAvatar(notfication.user.name, { width: 35, height: 35, fontSize: 13 })}
                />
                <p className='h-auto w-full text-wrap mx-2 text-sm'>
                  <span className='font-semibold'>{notfication.user.username}</span>
                  {" "}
                  {
                    hook.getNotificationSegment(
                      notfication?.["relatedComment" || "relatedPost" || "relatedComment"]?.user.name
                    )[notfication.type]}
                </p>
                <p className='text-sm' >{formatISODate(notfication.createdAt)}</p>
              </MenuItem>
            ))}
          </>)
        }
      </div>

    </Menu>
  );
}