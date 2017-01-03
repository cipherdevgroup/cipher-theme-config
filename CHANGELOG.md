## 3.0.0

- Bumped all dependencies to the latest version
- Removed some unused aliases
- Changed default directory structure
- Removed grunt-shell
- Removed Bower dependency
- Removed Composer dependency

## 2.1.0

- Bumped Grunt and other dependencies to the latest version
- Changed the default root value for pxtorem to 10px

## 2.0.0

This is a pretty large update. Some features have been removed and a few new ones have been added. There are a couple breaking changes in this update, so any themes using an older version of the config will need to be adjusted. Check out [Alpha](https://github.com/wpsitecare/alpha) for a working example of how to implement the config. Here's a breakdown of the changes:

- Removed grunt-banner
- Removed grunt-checktextdomain
- Removed grunt-webfont
- Removed grunt-wp-css
- Added support for Sass source maps
- Made task names more consistent
- Added grunt-version
- Added postcss-pxtorem
- Simplified the default Sass config
- Removed unused tasks
- Added some simple release tasks using grunt-version

## 1.0.0

- Changed peerDependencies to standard dependencies. This breaks compatibility with npm2 and older
- Bumped autoprefixer to the latest version

## 0.2.2

- Bumped to latest version of all PeerDependencies
- Relaxed versions for all PeerDependencies
- (bugfix) Removed an undefined path to Hybrid Core leftover from previous versions

## 0.2.1

- Watched PHP files by default; mainly for LiveReload
- Replaced grunt-composer with a grunt-shell command
- Bumped to latest version of all PeerDependencies

## 0.2.0

- Removed unused dependencies
- Replaced grunt-cssjanus with grunt-rtlcss
- Replaced grunt-autoprefixer with postcss
- Replaced bower install task with grunt-shell
- Various code and performance improvements

## 0.1.1

- Bumped to latest version of all PeerDependencies
- Excluded Composer from the makepot task

## 0.1.0

First public release.
