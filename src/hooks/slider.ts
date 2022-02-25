import React from 'react'

import { SliderContext } from '../contexts/slider'

export const useSlider = () => {
   const {
      showcaseWidth,
      setShowcaseWidth,
      count,
      setCount
   } = React.useContext(SliderContext)

   return {
      showcaseWidth,
      setShowcaseWidth,
      count,
      setCount
   }
}