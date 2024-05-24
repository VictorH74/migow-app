import React from 'react';

export default function useUserActivities() {
  const allBtnRef = React.useRef<HTMLButtonElement | null>(null)
  const postsBtnRef = React.useRef<HTMLButtonElement | null>(null)
  const commentsBtnRef = React.useRef<HTMLButtonElement | null>(null)
  const reactionsBtnRef = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    const refs = [allBtnRef, postsBtnRef, commentsBtnRef, reactionsBtnRef]

    if (refs.every(ref => !!ref.current)) {
      const btnWidths = refs.map(r => r.current!.getBoundingClientRect().width)
      const maxWidth = Math.max(...btnWidths)

      for(const ref of refs) {
        ref.current!.style.width = maxWidth + "px"
      }
    }
  }, [])

  return {allBtnRef, postsBtnRef, commentsBtnRef, reactionsBtnRef}
}