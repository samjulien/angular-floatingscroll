# angular-floatingscroll

This is an Angular 1.x directive wrapper and package for Amphiluke's [floatingscroll](https://github.com/Amphiluke/jquery-plugins/tree/master/src/floatingscroll) jQuery plugin. The plugin isn't currently on npm or bower, so the dependency needs to be managed manually. The current version I've included is from September 26, 2015.

Note that this uses jQuery proper, not jQLite.

### Installation

```sh
npm install angular-floatingscroll
```

You'll need to include the ngFloatingScroll module as a dependency in your Angular app (and the JS in your build of course). You'll also need to include the floatingscroll JS and CSS in your build process for now.

### Usage

This is as easy as:

```html
<div ng-floating-scroll></div>
```

Currently, the directive will watch the height of the element and update the floating scroll on change.

##### License
MIT