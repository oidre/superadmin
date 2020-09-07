<li>
  <a class="{{ (Route::currentRouteName() == $name) ? 'active' : '' }} flex space-x-2 p-2 hover:bg-graylight w-full text-sm font-semibold tracking-wider text-gray-600 hover:text-gray-800 rounded" href="{{ $to ?? '#' }}">
    {{ $svg ?? '' }}
    <span class="leading-tight">{{ $label ?? '' }}</span>
  </a>
</li>