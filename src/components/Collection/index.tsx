import React from 'react'

import { ICollectionImage } from '../../interfaces/collection'

import { gsap, Expo } from 'gsap'

import { getPhotos } from '../../services'

import { useSlider } from '../../hooks/slider'

import { 
   CollectionWrapper,
   CollectionFigure,
   FigureInfo,
   FigureCount,
   FigureLine,
   FigureAuthor,
   Overlay,
   OverlayImage,
   CollectionActions,
   ActionButton,
   Progress,
   ProgressLine
} from './styles'

export const Collection = () => {
   const { setShowcaseWidth, setCount } = useSlider()
   
   const [collection, setCollection] = React.useState<ICollectionImage[]>([])
   const [isLoadingCollection, setIsLoadingCollection] = React.useState(false)
   const [calculatedWidth, setCalculatedWidth] = React.useState(0)
   const [activeIndex, setActiveIndex] = React.useState(0)
   const [progressIndex, setProgressIndex] = React.useState(0)
   const [progress, setProgress] = React.useState(0)
   const [enabledButton, setEnabledButton] = React.useState(true)

   const collectionWrapperRef = React.useRef<HTMLDivElement>(null)

   const collectionEnum = {
      WRAPPER_WIDTH: 300,
      WRAPPER_PADDING: 40,
      DEFAULT_COUNT: 3,
      MAX_COUNT: 3
   }

   const handleLoadCollection = async () => {
      setIsLoadingCollection(true)
   
      try {
         const { data = [] } = await getPhotos(11)

         setCollection(data)
      } catch (error) {
         console.error(error)
      } finally {
         setIsLoadingCollection(false)
      }
   }

   const handleCalculateWrapperWidth = () => {
      const { WRAPPER_WIDTH, WRAPPER_PADDING } = collectionEnum

      const _calculatedWidth = (WRAPPER_WIDTH + WRAPPER_PADDING) * collection.length

      setCalculatedWidth(_calculatedWidth)
   }

   const handleVisibleItems = (itemCount = collectionEnum.DEFAULT_COUNT) => {
      const { WRAPPER_WIDTH, WRAPPER_PADDING, MAX_COUNT } = collectionEnum

      itemCount = itemCount > MAX_COUNT ? MAX_COUNT : itemCount

      const _calculatedWidth = (WRAPPER_WIDTH + WRAPPER_PADDING) * itemCount

      setShowcaseWidth(_calculatedWidth)

      if (collectionWrapperRef?.current?.children) {
         gsap.to(collectionWrapperRef.current.children, {
            autoAlpha: 1,
            stagger: .15,
            duration: .5,
            ease: Expo.easeInOut
         })
      }
   }

   const handleFigureClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      console.log(event)
   }

   const handleNextClick = () => {
      handleSlide()
   }

   const handleResetBackwards = ({ child, propWidth, index }: { child: ChildNode, propWidth: number, index: number }) => {
      if (activeIndex === index) {
         gsap.to(child, {
            duration: 0,
            x: propWidth * (collection.length - 1 - activeIndex),
            y: -(25 * collection.length - 25)
         }).then(() => setTimeout(() => handleIncreaseActiveIndex()))
      }
   }

   const handleSlide = (elementPadding = 40, verticalTranslatePosition = 25, elementMargin = 0) => {
      setEnabledButton(false)
      handleIncreaseProgressIndex()

      collectionWrapperRef?.current?.childNodes
         .forEach((_, index: number) => {
            const child = collectionWrapperRef?.current?.children[index]

            if (child) {
               const [x, y] = gsap.getProperty(child, 'transform')
                  ?.toString()
                  ?.match(/[0-9\,\-]/g)
                  ?.join('')
                  ?.split(',') ?? ['0', '0']
               const propX = Number(x)
               const propY = Number(y)
               const propWidth = Number(gsap.getProperty(child, 'width')) + elementPadding + elementMargin
               const propXPosition = Math.abs(propX)
   
               console.log({ x, y, propX, propY, propWidth, propXPosition })
   
               if (propX > 0) {
                  gsap.to(child, {
                     // transform: `translate3d(${propX - propWidth}px, ${propY + -(index * verticalTranslatePosition)}px, 0)`,
                     transform: `translate3d(${propX - propWidth}px, 0, 0)`,
                     duration: 1,
                     ease: Expo.easeInOut
                  }).then(() => {
                     setEnabledButton(true)
                  })
               } else {
                  gsap.to(child, {
                     // transform: `translate3d(${-(propXPosition + propWidth)}px, ${propY + (index * verticalTranslatePosition)}px, 0)`,
                     transform: `translate3d(${-(propXPosition + propWidth)}px, 0, 0)`,
                     duration: 1,
                     ease: Expo.easeInOut
                  }).then(() => {
                     handleResetBackwards({ child, propWidth, index })
                     setEnabledButton(true)
                  })
               }
            }
         })
   }

   const handleIncreaseActiveIndex = () => {
      const _activeIndex = (activeIndex + 1) % collection.length

      setActiveIndex(_activeIndex)
   }

   const handleIncreaseProgressIndex = () => {
      const _progressIndex = (activeIndex + 1) % collection.length

      setProgressIndex(_progressIndex)
   }

   const handleUpdateProgress = () => {
      const _progress = progressIndex * 100 / (collection.length - 1)

      console.log(_progress)

      setProgress(_progress)
      setCount(progressIndex)
   }

   React.useEffect(() => {
      if (collection.length) {
         handleCalculateWrapperWidth()
         handleVisibleItems()
      } else {
         handleLoadCollection()
      }
   }, [collection])

   React.useEffect(() => {
      handleUpdateProgress()
   }, [progressIndex])

   return (
      <>
         <CollectionWrapper
            ref={collectionWrapperRef}
            width={calculatedWidth}
         >
            {collection?.map((image, index) => (
               <CollectionFigure
                  key={image.id}
                  index={index}
                  onClick={handleFigureClick}
               >
                  <FigureInfo>
                     <FigureCount active={progressIndex === index} >{index + 1}</FigureCount>
                     <FigureLine  active={progressIndex === index} />
                     <FigureAuthor active={progressIndex === index}>{image.user.name}</FigureAuthor>
                  </FigureInfo>
                  <Overlay active={progressIndex === index}>
                  </Overlay>
                  <OverlayImage src={image.urls.regular} />
               </CollectionFigure>
            ))}
         </CollectionWrapper>
         <CollectionActions>
            <ActionButton
               disabled={!enabledButton}
               onClick={handleNextClick}
            >
               N
            </ActionButton>
            <Progress>
               <ProgressLine width={progress} />
            </Progress>
         </CollectionActions>
      </>
   )
}