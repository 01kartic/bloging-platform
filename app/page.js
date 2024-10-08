'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { X, List } from '@phosphor-icons/react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-4">
              <span className="sr-only">Your Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-black" viewBox="0 0 1280 1280">
                <g transform="translate(0,1280) scale(0.1,-0.1)" stroke="none">
                  <path d="M5315 12518 c-164 -10 -302 -50 -454 -130 -88 -46 -201 -122 -209 -140 -2 -5 -7 -8 -12 -8 -7 0 -28 -18 -100 -84 -8 -7 -49 -53 -90 -101 -164 -190 -292 -428 -389 -720 -33 -99 -63 -198 -66 -220 -4 -22 -11 -54 -16 -71 -5 -17 -14 -65 -19 -105 -5 -41 -13 -103 -19 -139 -41 -274 -33 -645 21 -930 11 -63 24 -135 28 -160 14 -85 94 -337 154 -484 49 -120 162 -336 217 -414 66 -95 189 -246 276 -337 42 -45 136 -125 146 -125 4 0 25 -14 46 -31 45 -36 74 -52 201 -114 52 -26 103 -51 112 -56 46 -24 289 -71 368 -72 46 0 195 15 235 23 56 13 274 89 285 100 3 3 15 11 28 18 12 6 32 18 45 25 12 6 24 14 27 18 3 3 21 15 41 27 91 55 265 221 317 302 9 14 26 34 38 45 18 17 52 69 114 175 60 102 82 145 105 200 15 36 35 83 45 105 10 22 23 56 30 75 7 19 16 44 20 55 4 11 15 47 25 80 9 33 23 80 30 105 16 53 48 209 48 230 -1 8 3 33 8 55 17 84 20 103 27 195 7 97 5 552 -3 625 -28 254 -93 523 -195 810 -33 94 -171 367 -220 435 -11 16 -20 33 -20 39 0 5 -6 14 -13 18 -7 4 -24 26 -38 48 -34 52 -180 219 -233 268 -75 68 -248 197 -266 197 -4 0 -10 3 -12 8 -5 11 -185 96 -208 97 -3 0 -10 4 -17 8 -6 4 -33 12 -60 17 -26 5 -79 16 -118 25 -86 19 -132 22 -260 13z" />
                  <path d="M9120 11764 c-138 -14 -151 -17 -300 -64 -138 -43 -350 -149 -469 -234 -23 -17 -54 -38 -67 -47 -13 -8 -38 -29 -56 -45 -18 -16 -48 -41 -66 -54 -69 -51 -280 -273 -362 -381 -47 -62 -92 -119 -101 -129 -8 -9 -18 -23 -21 -32 -3 -8 -23 -41 -45 -73 -49 -75 -76 -120 -102 -170 -11 -22 -29 -56 -40 -75 -84 -145 -234 -530 -256 -655 -4 -21 -13 -51 -20 -65 -13 -25 -30 -99 -40 -175 -3 -22 -10 -62 -15 -90 -5 -27 -12 -81 -15 -120 -4 -38 -9 -83 -11 -100 -6 -51 -7 -377 0 -435 3 -30 9 -77 12 -105 18 -159 74 -379 128 -500 13 -27 29 -66 36 -85 7 -19 19 -42 25 -50 7 -8 23 -35 35 -60 24 -46 53 -91 83 -124 9 -11 17 -23 17 -27 0 -18 224 -226 281 -261 19 -11 36 -23 39 -27 18 -22 221 -105 285 -116 11 -2 61 -11 110 -20 244 -45 569 26 875 192 46 25 190 122 214 145 11 10 25 18 32 18 7 0 14 4 16 8 2 5 28 30 58 57 131 113 290 276 339 345 28 41 72 102 97 135 24 33 61 87 82 119 20 32 52 82 70 109 71 109 141 246 202 397 12 30 26 64 30 75 28 68 61 158 76 210 9 33 20 67 25 75 4 8 20 69 34 135 15 66 35 156 46 200 33 141 48 340 44 580 -4 218 -8 268 -25 335 -5 19 -12 53 -15 75 -26 174 -148 475 -252 622 -55 78 -244 272 -286 293 -16 8 -40 24 -53 37 -13 12 -24 20 -24 17 0 -3 -17 7 -37 21 -21 14 -42 25 -46 25 -9 0 -68 24 -99 41 -10 5 -28 9 -41 9 -13 0 -27 4 -32 9 -10 10 -121 29 -230 40 -33 3 -107 1 -165 -5z" />
                  <path d="M2245 10202 c-4 -4 -10 -7 -13 -7 -84 -7 -271 -66 -332 -105 -8 -6 -22 -13 -30 -17 -8 -3 -55 -34 -103 -67 -49 -34 -96 -65 -106 -71 -9 -5 -32 -26 -51 -45 -19 -19 -37 -35 -41 -35 -4 0 -18 -13 -31 -30 -12 -16 -40 -47 -60 -67 -21 -21 -38 -41 -38 -46 0 -4 -18 -25 -40 -47 -21 -22 -39 -44 -40 -49 0 -5 -16 -29 -36 -52 -19 -24 -32 -44 -29 -44 4 0 -3 -13 -14 -29 -12 -16 -21 -32 -21 -35 0 -3 -14 -29 -31 -58 -59 -100 -129 -267 -199 -478 -22 -66 -86 -363 -95 -440 -3 -30 -7 -66 -9 -80 -14 -104 -20 -217 -20 -350 1 -330 36 -586 117 -870 16 -58 30 -113 30 -122 1 -10 4 -18 8 -18 4 0 10 -16 14 -36 7 -38 7 -39 80 -209 72 -166 106 -234 152 -304 24 -35 43 -69 43 -75 0 -6 8 -19 18 -27 9 -9 37 -44 61 -78 72 -100 220 -260 306 -329 44 -35 90 -73 103 -83 12 -11 25 -19 29 -19 3 0 21 -11 39 -25 18 -14 37 -25 43 -25 6 0 11 -4 11 -10 0 -5 7 -10 15 -10 9 0 33 -11 55 -25 22 -14 44 -25 49 -25 4 0 30 -10 57 -22 27 -11 63 -25 79 -29 17 -5 55 -15 85 -24 109 -30 316 -35 455 -10 152 28 350 117 491 221 39 29 74 51 77 48 3 -3 8 3 12 13 3 10 23 32 44 48 40 32 142 147 203 230 21 28 41 55 46 60 4 6 8 12 8 15 -1 5 43 71 54 80 6 6 36 60 68 125 13 28 27 52 31 55 3 3 6 10 6 15 1 6 9 28 19 50 11 22 26 56 34 75 8 19 18 42 22 50 3 8 19 56 34 105 15 50 32 97 36 106 12 22 75 333 90 439 34 241 34 569 0 835 -31 250 -123 597 -206 783 -14 31 -33 73 -41 92 -35 81 -88 187 -105 213 -11 15 -16 27 -11 27 4 0 0 5 -9 11 -10 5 -18 15 -18 21 0 6 -23 45 -52 87 -53 78 -62 89 -88 120 -8 9 -33 39 -55 66 -77 97 -221 232 -308 290 -31 21 -57 42 -57 46 0 5 -6 9 -14 9 -8 0 -16 4 -18 8 -1 4 -55 33 -118 64 -122 60 -265 109 -340 116 -84 8 -338 11 -345 4z" />
                  <path d="M11095 8531 c-16 -4 -61 -14 -100 -21 -134 -25 -372 -130 -514 -229 -41 -28 -81 -51 -88 -51 -7 0 -13 -7 -13 -15 0 -8 -4 -15 -9 -15 -6 0 -39 -25 -75 -55 -35 -30 -67 -55 -70 -55 -7 0 -110 -104 -184 -185 -30 -33 -59 -59 -63 -58 -5 2 -9 -3 -9 -11 0 -8 -19 -36 -42 -63 -24 -26 -47 -55 -53 -64 -29 -45 -80 -109 -87 -109 -4 0 -8 -5 -8 -11 0 -11 -107 -178 -125 -194 -6 -5 -28 -45 -49 -87 -20 -42 -48 -93 -62 -113 -13 -20 -24 -40 -24 -46 0 -5 -24 -60 -54 -122 -65 -135 -106 -233 -106 -253 0 -8 -4 -14 -9 -14 -4 0 -11 -16 -14 -34 -3 -19 -12 -50 -20 -68 -26 -58 -41 -104 -77 -243 -52 -201 -86 -369 -104 -525 -31 -269 -29 -602 6 -825 7 -44 13 -82 13 -85 1 -3 5 -27 9 -55 4 -27 11 -61 16 -75 5 -14 25 -79 46 -145 84 -272 244 -515 442 -667 60 -46 199 -128 218 -128 7 0 33 -9 59 -20 84 -36 154 -46 300 -45 197 3 332 34 530 123 33 15 62 29 65 32 3 3 30 18 60 34 30 17 78 44 105 62 28 17 53 31 57 30 4 0 13 6 20 15 20 25 207 179 217 179 5 0 11 4 13 9 2 5 28 36 58 68 87 92 176 194 208 238 16 22 42 54 57 70 16 17 29 32 28 35 0 11 50 79 63 84 8 3 14 12 14 21 0 8 19 46 43 83 50 80 73 118 89 152 7 14 17 28 23 32 5 4 7 8 3 8 -4 0 8 26 27 58 19 31 35 62 35 69 0 6 6 18 13 25 22 23 167 368 167 399 0 10 5 21 10 24 6 3 10 17 10 31 0 13 5 24 10 24 6 0 10 12 10 26 0 14 5 35 12 47 41 76 144 579 164 797 3 36 7 81 9 100 6 54 7 342 1 370 -3 14 -8 67 -11 119 -3 52 -7 97 -9 100 -3 4 -14 62 -26 131 -38 216 -128 457 -227 605 -18 27 -33 52 -33 56 0 9 -67 85 -135 152 -68 67 -211 177 -231 177 -7 0 -17 6 -21 13 -4 7 -33 20 -63 30 -30 10 -64 23 -75 27 -68 30 -370 51 -440 31z" />
                  <path d="M6408 7665 c-3 -3 -43 -5 -89 -6 -46 0 -120 -7 -164 -16 -44 -8 -91 -17 -105 -20 -161 -29 -382 -123 -541 -230 -37 -24 -75 -55 -85 -69 -74 -102 -145 -192 -163 -208 -11 -11 -21 -24 -21 -29 0 -16 -201 -277 -222 -288 -10 -5 -16 -14 -14 -18 3 -4 -11 -28 -32 -52 -20 -24 -40 -48 -44 -54 -4 -5 -39 -45 -77 -88 -39 -43 -71 -82 -71 -87 0 -5 -26 -40 -58 -77 -32 -38 -68 -81 -80 -98 -61 -80 -369 -424 -379 -424 -7 -1 -13 -7 -13 -13 -1 -14 -105 -128 -116 -128 -8 0 -38 -33 -89 -98 -22 -28 -45 -51 -52 -52 -7 0 -18 -10 -24 -22 -17 -33 -61 -78 -76 -78 -7 0 -13 -5 -13 -11 0 -14 -132 -151 -138 -144 -3 3 -10 -5 -16 -18 -6 -12 -21 -26 -34 -32 -12 -5 -22 -14 -22 -20 0 -13 -36 -45 -50 -45 -6 0 -10 -3 -10 -8 0 -10 -41 -53 -131 -136 -41 -38 -106 -99 -145 -135 -142 -134 -257 -236 -267 -240 -5 -2 -23 -19 -40 -37 -16 -19 -33 -34 -37 -34 -4 0 -25 -17 -47 -37 -70 -68 -101 -93 -112 -93 -6 0 -11 -4 -11 -10 0 -5 -24 -28 -52 -51 -50 -39 -130 -106 -167 -139 -41 -38 -229 -185 -253 -199 -16 -9 -28 -20 -28 -24 0 -11 -122 -167 -130 -167 -4 0 -7 -6 -7 -12 0 -7 -16 -38 -35 -68 -99 -155 -188 -380 -231 -585 -40 -190 -50 -302 -44 -485 7 -203 20 -305 53 -424 14 -50 27 -95 28 -101 1 -5 4 -14 7 -20 4 -5 10 -23 14 -40 5 -16 9 -32 10 -35 1 -3 11 -25 22 -50 23 -49 35 -83 33 -89 -1 -2 2 -7 7 -10 4 -3 17 -24 28 -46 11 -22 39 -69 62 -105 24 -36 43 -70 43 -77 0 -7 4 -13 8 -13 5 0 37 -37 73 -81 69 -88 249 -259 273 -259 8 0 24 -14 36 -30 12 -17 25 -30 30 -30 8 0 109 -59 120 -70 18 -18 257 -119 320 -134 216 -55 425 -65 695 -35 264 30 808 32 1005 4 25 -4 63 -8 85 -9 100 -8 259 -35 445 -76 47 -11 96 -21 110 -24 31 -5 167 -44 195 -56 11 -5 67 -23 125 -41 58 -17 129 -42 157 -55 29 -13 65 -27 80 -30 16 -4 30 -10 33 -14 3 -4 37 -20 75 -35 72 -28 486 -232 495 -243 5 -7 24 -18 95 -57 58 -32 119 -68 125 -75 16 -18 208 -94 346 -135 160 -49 270 -66 444 -67 174 -2 274 10 460 53 148 35 371 127 509 211 34 21 65 38 67 38 3 0 10 5 17 10 7 6 44 33 82 61 39 28 100 78 137 110 36 33 71 59 76 59 5 0 21 15 35 33 14 17 42 50 62 72 61 67 148 175 184 229 18 28 38 53 42 54 5 2 9 8 9 13 0 6 15 33 33 62 65 102 162 313 199 437 57 185 71 245 84 345 2 22 7 48 10 59 10 30 13 81 18 271 4 208 -3 302 -40 480 -9 44 -17 89 -19 100 -1 11 -5 27 -8 35 -3 8 -8 28 -12 43 -8 39 -150 409 -176 459 -5 10 -32 75 -59 145 -28 71 -55 137 -60 148 -5 11 -32 74 -60 140 -28 66 -55 128 -60 137 -6 10 -10 23 -10 29 0 6 -16 45 -36 87 -51 109 -137 300 -173 387 -5 11 -32 68 -60 127 -28 59 -51 110 -51 112 0 3 -5 17 -12 33 -6 15 -12 30 -13 33 -4 13 -61 134 -114 243 -98 200 -227 458 -260 522 -17 33 -48 96 -70 140 -57 119 -129 255 -142 271 -6 8 -8 14 -3 14 5 0 5 4 -1 8 -14 10 -26 31 -89 157 -53 105 -88 168 -135 245 -11 19 -28 51 -37 70 -9 19 -20 37 -24 40 -4 3 -20 30 -35 60 -14 30 -31 62 -36 70 -5 8 -20 35 -32 60 -13 25 -49 89 -80 144 -32 54 -57 100 -57 103 0 2 -11 16 -25 31 -14 15 -38 45 -52 67 -15 22 -40 52 -55 67 -15 15 -28 30 -28 33 0 16 -218 205 -236 205 -3 0 -23 13 -43 28 -106 82 -308 176 -424 197 -20 4 -40 11 -43 16 -3 5 -24 9 -47 9 -23 0 -58 5 -77 10 -19 6 -61 12 -93 15 -32 3 -62 7 -66 10 -5 2 -10 2 -13 0z" />
                  <path d="M3654 675 c11 -8 22 -12 25 -9 6 6 -19 24 -34 24 -5 -1 -1 -7 9 -15z" />
                </g>
              </svg>
              <h1 className="text-3xl font-bold">desper</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <List aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=sky&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#38bdf8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-sky-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create, Collaborate, and scale your blogs and docs.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              uniquely designed case studies to evaluate your project building journey
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#38bdf8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}