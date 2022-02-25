import { clientId } from '../config/clientId'

import { api } from './api'


export const getPhotos = async (itemCount: number) => {
   try {
      const response = await api.get(`/photos?client_id=${clientId}&per_page=${itemCount}&order_by=popular`)
      
      return response
   } catch (error: any) {
      console.error(error)

      return error
   }
}