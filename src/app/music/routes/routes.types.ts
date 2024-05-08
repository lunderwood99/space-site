export type AlbumImages = {
  url: string          
  height: number     
  width: number 
}

export type Artists = {         
  external_urls: {            
    spotify: string          
  },          
  href: string,         
  id: string,          
  name: string,          
  type: string,         
  uri: string        
}

export type Albums = {      
  album_type: string 
  total_tracks: number     
  available_markets: Array<string>    
  external_urls: {       
    spotify: string     
  }  
  href: string      
  id: string     
  images: AlbumImages   
  name: string,     
  release_date: string,     
  release_date_precision: string,      
  restrictions: {        
    reason: string     
  },      
  type: string  
  uri: string    
  artists: Array<Artists>     
  album_group: string    
}  

export type ArtistAlbumsResponse = {  
  href: string
  limit: number
  next: string
  offset: number
  previous: string 
  total: number
  items: Array<Albums>
}

export type SpotifyApiTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}