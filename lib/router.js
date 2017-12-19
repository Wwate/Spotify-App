//Routes
outer.configure({
  layoutTemplate: 'layout'
});

//Routes mapped
Router.map(function(){
  this.route('/', function(){
    //Renders a template called search
    this.render('search');
  });

  this.route('/artist/:id', function(){
    Meteor.call('getArtist', this.params.id, (err, artist) => {
      if(err){
        console.log(err);
      }else {
        Meteor.call('getAlbums',this.params.id , (err, albums) => {
            if(err){
              console.log(err);
            }else {
              artist.albums = albums;
              artist.theImage = artist.images[0].url;
              this.render('artist',{data:artist});
            }
        });

      }
    });
  });
});
