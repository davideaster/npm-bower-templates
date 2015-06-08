require( [ "config" ], function() {
  require( [ "es6!lib/main", "bower/react/react.min" ], function( App, React ) {
      var content = document.createElement( "div" );
      document.body.appendChild( content );
      React.render( React.createElement( App ), content );
  } );
} );
