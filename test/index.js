require( [ "../config" ], function() {
  require( [ "config" ], function() {
    require( [ "main" ], function() {
      ( window.mochaPhantomJS || window.mocha ).run();
    } );
  } );
} );
