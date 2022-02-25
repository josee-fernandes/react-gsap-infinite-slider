import React from 'react'

import { ICollectionImage } from '../../interfaces/collection'

import { gsap, Expo } from 'gsap'

import { getPhotos } from '../../services'

import { useShowcase } from '../../hooks/showcase'

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
   const { setShowcaseWidth } = useShowcase()
   
   const [collection, setCollection] = React.useState<ICollectionImage[]>([])
   const [isLoadingCollection, setIsLoadingCollection] = React.useState(false)
   const [calculatedWidth, setCalculatedWidth] = React.useState(0)


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

   React.useEffect(() => {
      if (collection.length) {
         handleCalculateWrapperWidth()
         handleVisibleItems()
      } else {
         handleLoadCollection()
      }
   }, [collection])
   
   return (
      <>
         <CollectionWrapper
            ref={collectionWrapperRef}
            width={calculatedWidth}
         >
            {collection?.map((image, index) => (
               <CollectionFigure key={image.id} index={index}>
                  <FigureInfo>
                     <FigureCount active={false} >{index + 1}</FigureCount>
                     <FigureLine  active={false} />
                     <FigureAuthor active={false}>{image.user.name}</FigureAuthor>
                  </FigureInfo>
                  <Overlay active={false}>
                  </Overlay>
                  <OverlayImage src={image.urls.regular} />
               </CollectionFigure>
            ))}
         </CollectionWrapper>
         <CollectionActions>
            <ActionButton>
               N
            </ActionButton>
            <Progress>
               <ProgressLine />
            </Progress>
         </CollectionActions>
      </>
   )
}