<li>
  <a class="{{ (Route::currentRouteName() == $name) ? 'link-active' : '' }} flex py-1 text-sm font-medium tracking-wide hover:text-gray-800 text-gray-600" href="{{ $to ?? '#' }}">
    {{ $label ?? '' }}
  </a>
</li>