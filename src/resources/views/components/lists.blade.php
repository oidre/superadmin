<li x-data="{show: '{{ (request()->is($name . '*')) ? 'active' : '' }}' ? true : false}">
  <a class="{{ (request()->is($name . '*')) ? 'active' : '' }} relative flex items-end space-x-2 p-2 hover:bg-graylight w-full text-sm font-semibold tracking-wider hover:text-gray-800 text-gray-600 rounded transition duration-100 eas-in-out hover:text-gray-700 " href="javascript:void(0)" x-on:click="show = !show" x-bind:class="{'bg-graylight text-gray-800': show}">
      <!-- Leading Icon -->
      {{ $svg ?? '' }}
      <span class="leading-tight">{{ $label ?? '' }}</span>
      <!-- Arrow Bottom Icon -->
      <div 
          class="absolute inset-y-0 right-0 p-3" 
          x-show="!show"
          x-transition:enter="transition ease-out duration-150"
          x-transition:enter-start="opacity-0 transform translate-y-2"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          x-transition:leave="transition ease-in duration-150"
          x-transition:leave-start="opacity-100 transform translate-y-0"
          x-transition:leave-end="opacity-0 transform translate-y-2"
      >
          <svg class="fill-current flex-shrink-0 w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </div>
      <!-- Arrow Top Icon -->
      <div 
          class="absolute inset-y-0 right-0 p-3" 
          x-show="show"
          x-transition:enter="transition ease-out duration-150"
          x-transition:enter-start="opacity-0 transform -translate-y-2"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          x-transition:leave="transition ease-in duration-150"
          x-transition:leave-start="opacity-100 transform translate-y-0"
          x-transition:leave-end="opacity-0 transform -translate-y-2"
      >
          <svg class="fill-current flex-shrink-0 w-2 h-2 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
      </div>
  </a>
  <ul 
      class="pl-8 bg-lighter" 
      x-show="show"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0 transform translate-x-3"
      x-transition:enter-end="opacity-100 transform translate-x-0"
  >
      {{ $slot }}
  </ul>
</li>