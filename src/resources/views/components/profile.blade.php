<div class="pt-5 pb-2 pl-5 pr-4 flex flex-col items-center space-y-3">
  <img class="rounded-full w-16 h-auto" src="{{ $src ?? '#' }}" />
  <div class="flex flex-col items-center">
    <div class="text-gray-700 font-medium">{{ $title ?? '' }}</div>
    <div class="text-gray-600 text-xs">({{ $subtitle ?? '' }})</div>
  </div>
</div>