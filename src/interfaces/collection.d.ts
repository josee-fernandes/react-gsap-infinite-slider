export interface IUrl {
   regular: string
}

export interface IUser {
   name: string
   location: string
   instagram_username: string
}

export interface ICollectionImage {
   id: string
   urls: IUrl
   created_at: Date
   user: IUser
}