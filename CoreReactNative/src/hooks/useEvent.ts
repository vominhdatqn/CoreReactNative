import {useRef, useLayoutEffect, useCallback} from 'react'

function useEvent(handler: any) {
  const handlerRef = useRef<any>(null)

  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args: any) => {
    // In a real implementation, this would throw if called during render
    const fn = handlerRef?.current
    return fn?.(...args)
  }, [])
}

export {useEvent}
