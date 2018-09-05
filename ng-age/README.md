# ng-age

A filter for Angularjs to dynamically display a person's age based on their birthday

Check out the [Demo](http://thebeardydeveloper.com/ng-age).

Install
-------

    $ bower install ng-parallax
    
Dependencies
------------
Just [AngularJS](https://github.com/angular/angular.js).

## How to use ng-age


### Include the file in your index.html:
``` html
<script src="./bower_components/ng-age/ng-age.js"></script>
```

### Inject the `ng-age` filter into your app module:

```javascript
angular.module('myApp', ['ng-age']);
```

### When outputting your age, apply the filter to your birthday:
``` html
 <p> {{ 'dd/mm/yyyy' | age }} </p> 
 or 
 <p> {{ 'dd/mm/yy' | age }} </p>
```

You are also able to input a single digit for both day and month.

With years you will have to enter two digits at least. Any year from '00' - '09' will be considered as '2000' - '2009', however, any other two digit year will be considered as in the 1900s, e.g. entering '05/11/82' will be taken as the fifth of november 1982.
