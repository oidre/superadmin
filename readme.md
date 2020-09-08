# SuperAdmin

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Installation

Via Composer

``` bash
$ composer require oidre/superadmin
```

## Usage

**Step 1**

Install Tailwind CSS

``` bash
$ yarn add tailwindcss
```

**Step 2**

Publish Vendor

``` bash
$ php artisan vendor:publish --tag=superadmin
```

**Step 3**

Add *superadmin.js* into **resources/js/app.js**

``` bash
require('./superadmin');
```

Add *_superadmin.scss* into **resources/sass/app.scss**

``` bash
@import 'superadmin';
```

**Step 4**

Add *tailwind.config.js* into **webpack.mix.js**

``` bash
const tailwindcss = require('tailwindcss');
.
.
.
mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  });
```

**Step 5**

``` bash
$ yarn install && yarn run dev
```

**Step 6**

Add compiled css & js into main layout

``` bash
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
<script src="{{ asset('js/app.js') }}"></script>
```

**Step 7**

Just embed **wrapper component inside *body* tag**

``` bash
<x-sa.wrapper/>
```

**Step 8**

Enjoy!


## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [Andre Prilly Kurniawan][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/oidre/superadmin.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/oidre/superadmin.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/oidre/superadmin/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/oidre/superadmin
[link-downloads]: https://packagist.org/packages/oidre/superadmin
[link-travis]: https://travis-ci.org/oidre/superadmin
[link-author]: https://github.com/oidre
[link-contributors]: ../../contributors
