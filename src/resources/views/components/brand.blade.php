<div class="flex justify-between md:justify-center items-center w-full md:w-64 bg-dark px-5 h-16">
  <a class="text-white text-xl" href="{{ $to ?? '#' }}">
      {{ $label ?? '' }}
  </a>
  <button class="block md:hidden focus:outline-none" onclick="toggle()">
      <svg class="fill-current flex-shrink-0 w-4 h-4 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
  </button>
</div>