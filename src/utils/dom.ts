import React from 'react'

export const toArray = (element: any): React.ReactNode[] => {
   return [].slice.call(element);
}