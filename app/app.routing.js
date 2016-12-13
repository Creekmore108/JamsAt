"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
var contact_component_1 = require('./components/contact/contact.component');
var festival_component_1 = require('./components/festival/festival.component');
var musicsearch_component_1 = require('./components/musicsearch/musicsearch.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
var AppRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'festival',
        component: festival_component_1.FestivalComponent
    },
    {
        path: 'musicsearch',
        component: musicsearch_component_1.MusicsearchComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routing.js.map