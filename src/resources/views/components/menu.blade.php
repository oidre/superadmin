<div class="pl-5 pr-4 py-2">
  <ul class="flex flex-col space-y-1">
      @isset ($label)
      <li class="flex uppercase text-gray-600 text-sm">
          <span class="py-2">{{ $label ?? '' }}</span>
      </li>
      @endisset
      {{ $slot }}
  </ul>
</div>