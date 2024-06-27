export type AlbumImage = {
  url: string          
  height: number     
  width: number 
}

export type Artist = {         
  external_urls: {            
    spotify: string          
  },          
  href: string,         
  id: string,          
  name: string,          
  type: string,         
  uri: string        
}

export type Album = {      
  album_type: string 
  total_tracks: number     
  available_markets: Array<string>    
  external_urls: {       
    spotify: string     
  }  
  href: string      
  id: string     
  images: Array<AlbumImage>
  name: string,     
  release_date: string,     
  release_date_precision: string,      
  restrictions: {        
    reason: string     
  },      
  type: string  
  uri: string    
  artists: Array<Artist>     
  album_group: string    
}  

export type ArtistAlbumsResponse = {  
  href: string
  limit: number
  next: string
  offset: number
  previous: string 
  total: number
  items: Array<Album>
}

export type SpotifyApiTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}