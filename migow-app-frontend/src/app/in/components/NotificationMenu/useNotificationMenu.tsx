"use client"
import usePopup from '@/hooks/usePopup';
import { notificationsMock } from '@/mockData';
import { NotificationType, NotificationTypeEnum } from '@/types';
import React from 'react';

export interface NotificationMenuProps {
  popup: ReturnType<typeof usePopup>
}

const getNotificationSegment = (finalUserName: string | undefined): Record<any, string> => ({
  COMMENT_REPLAY: `replied to ${finalUserName}'s comment`,
  NEW_POST: "posted something",
  POST_COMMENT: `commented on ${finalUserName}'s post`
})

export default function useNotificationMenu({ popup }: NotificationMenuProps) {
  const [loading, setLoading] = React.useState(true);
  const [notifications, setNotifications] = React.useState<NotificationType[]>([]);

  React.useEffect(() => {
    if (popup.open) {
      (async () => {
        // TODO: fetch owner notifications
        // temp
        const data = await new Promise<NotificationType[]>((res) => {
          setTimeout(() => res(notificationsMock), 1000)
        })
        setNotifications(data)
        setLoading(false)
      })()
    } else {
      setTimeout(() => setLoading(true), 500)
    }
  }, [popup.open])

  return { loading, notifications, getNotificationSegment }
}