"use client"
import React from 'react';
import usePostCard from "./usePostCard"
import Avatar from '@mui/material/Avatar';
import { PostType } from '@/types';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { formatISODate, stringAvatar } from '@/util/functions';
import usePopup from '@/hooks/usePopup';


export default function PostCard(props: PostType) {
  const hook = usePostCard();
  const popup = usePopup()

  return (
    <div className='bg-white p-4 w-full max-w-[780px] rounded-md flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Avatar {...stringAvatar(props.owner.name)} />
          <Link href={"/in/profile/" + props.owner.id}>{props.owner.name}</Link>
          <div className='bg-gray-700 size-[6px] rounded' />
          <p>{formatISODate(props.createdAt)}</p>
        </div>

        <Button
          id="basic-button"
          aria-controls={popup.open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={popup.open ? 'true' : undefined}
          onClick={popup.handleClick}
        >
          <div className='flex flex-row gap-[3px]'>
            {Array(3).fill(null).map((_, i) => (<span key={i} className='bg-gray-700 size-[6px] rounded' />))}
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={popup.anchorEl}
          open={popup.open}
          onClose={popup.handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={popup.handleClose}>Follow user</MenuItem>
          <MenuItem onClick={popup.handleClose}>Report post</MenuItem>
        </Menu>

      </div>

      <div className='flex flex-col gap-2'>
        <p>{props.text}</p>
        <Image width={700} height={300} className='h-fit w-fit m-auto max-h-[700px]' src={props.midiaURLs[0]} alt='post midia' />
      </div>
    </div>
  );
}