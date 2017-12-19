import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.artists.helpers({
artists(){
  return Session.get('artists');
}
});
Template.search.events({
  'keyup #searchArtist':function() {
    let searchText = event.target.value;

    if(searchText == ''){
      Session.set('artists', null);
    }

    Meteor.call('searchArtist', searchText, (err, artists) => {
      if(err){
        console.log(error);
      }else {
        console.log(artists);
        Session.set('artists', artists);
      }
    });
  }
});
