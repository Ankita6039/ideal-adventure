import Image from 'next/image';

export default function save({ user, name, image, price }) {
  return (
    <section class="py-10">

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="/bglogin.jpg" alt="Hotel Photo" />
          {/* this is for the rating 
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-slate-400 ml-1 text-sm">4.9</span>
          </div> */}
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Hilton Hotel</h2>
          <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">$850</span>
              <span class="text-slate-400 text-sm">/night</span>
            </p>
          </div>
        </div>
    </article>

    {/* <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="/images/0WjOaKV5XYmAEPl0ZjOv4.png" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-slate-400 ml-1 text-sm">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Hilton Hotel</h2>
          <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">$450</span>
              <span class="text-slate-400 text-sm">/night</span>
            </p>

            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>

    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="/images/SUl-7YCPG1UsV_S9E8TAx.png" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-slate-400 ml-1 text-sm">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Hilton Hotel</h2>
          <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">$1,450</span>
              <span class="text-slate-400 text-sm">/night</span>
            </p>

            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article> */}
  {/* </div> */}
</section>

  );
}
