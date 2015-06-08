{

    // Use the configuration used by index.js.

    mainConfigFile: "config.js",

    // Define the `bower` alias.

    paths: {
        bower: "bower_components"
    },

    // Find `require` statements inside `require` statements.

    findNestedDependencies: true,

    // Follow dependencies from index.js and concatenate them into the built version.

    modules: [ {
        name: "index"
    } ],

    // Build into `dist`.

    dir: "dist",

    // Don't include files concatenated into index.js in the build.

    removeCombined: true,

    // Don't build standalone versions of files other than index.js.

    skipDirOptimize: false,

    // Don't copy these into the `dist` directory.

    fileExclusionRegExp: /^\.|^(package.json|node_modules|bower.json|test|testem.yml|npm.*.log)$/,

    // Don't minify the concatenated files.

    optimize: "none",

}
