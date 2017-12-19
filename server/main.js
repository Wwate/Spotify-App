import { Meteor } from 'meteor/meteor';
var client_id = '03deeb088bfa45a8b257e2a994aa609e'; // Your client id
var client_secret = 'bb34906315ba46dab698b4af008c382c'; // Your secret
var redirect_uri = 'localhost:3000/callback'; // Your redirect uri

//Out dated version of guerying the spotify API
Meteor.methods({
  'searchArtist'(searchText){
    const result = HTTP.call('GET', 'https://api.spotify.com/v1/search?query=' +searchText+'&offset=0&limit=15&type=artist&market=US');
    return result.data.artists.items;
  },
  'getArtist'(id){
    const result = HTTP.call('GET', 'https://api.spotify.com/v1/artists/'+id);
    return result.data;
  }
/*
  'getAlbums'(artistId){
    const result = HTTP.call('GET', 'https://api.spotify.com/v1/artists/'+artistId+'/albums');
    return result.data.items;
  }
*/
});
