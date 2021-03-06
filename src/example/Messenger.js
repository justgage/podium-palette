import React from 'react';
import '../podium.css';

// This is an older version of Messenger, it's out of date with the new version of Podium CSS so it's quite broken. However wouldn't
// be too hard to get working

export default () => (
  <div className="w-screen h-screen bg-whiteSmoke flex flex-col">
    <nav className="_nav flex-no-shrink w-full bg-black text-white flex h-11 items-center">
      <svg
        className="_podium-logo w-6 ml-5 mr-3 mt-2 flex-no-shrink"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Podium</title>
        <g>
          <path
            d="M59.925 18.23c1.634 0 2.45-.433 3.018-1.097.532-.63.816-1.414.816-2.317 0-.903-.29-1.727-.82-2.357-.57-.67-1.39-1.1-3.02-1.1h-3.98c-.2 0-.35.15-.35.35v6.17c0 .19.16.35.35.35h3.98zm-4.332 3.29v5.38c0 .192-.158.35-.35.35H52.22c-.194 0-.352-.158-.352-.35V8.422c0-.19.158-.35.352-.35h7.55c2.938 0 4.667.714 5.94 2.042 1.143 1.166 1.796 2.915 1.796 4.7 0 1.78-.653 3.528-1.796 4.695-1.24 1.29-3.002 2.01-5.94 2.01h-4.177zm23.947 2.716c3.642 0 6.347-2.96 6.347-6.575 0-3.61-2.705-6.57-6.348-6.57s-6.35 2.96-6.35 6.58 2.7 6.58 6.34 6.58zm0-16.437c5.96 0 10.072 4.4 10.072 9.86 0 5.45-4.112 9.86-10.073 9.86-5.96 0-10.08-4.41-10.08-9.87 0-5.456 4.11-9.86 10.07-9.86zm19.43 16.16c2.29 0 3.862-.8 4.94-2.14.882-1.1 1.404-2.57 1.404-4.17 0-1.59-.522-3.07-1.405-4.16-1.08-1.348-2.65-2.14-4.94-2.14h-2.41c-.2 0-.35.154-.35.35v11.9c0 .19.15.35.35.35h2.41zm-.415 3.28h-5.72c-.193 0-.35-.16-.35-.35V8.42c0-.19.157-.35.35-.35h5.72c3.062 0 5.078.66 6.65 1.81 2.373 1.75 3.836 4.602 3.836 7.78 0 3.176-1.46 6.027-3.83 7.78-1.57 1.15-3.59 1.807-6.65 1.807zm13.68-18.83c0-.196.157-.35.35-.35h3.023c.193 0 .35.154.35.35V26.9c0 .19-.157.35-.35.35h-3.022c-.194 0-.352-.16-.352-.35V8.422m8 10.745V8.422c0-.19.158-.35.352-.35h3.022c.193 0 .352.16.352.35v11.02c0 1.754.47 2.82 1.27 3.56.826.795 1.985 1.234 3.283 1.234 1.296 0 2.455-.44 3.284-1.233.8-.74 1.27-1.807 1.27-3.56V8.423c0-.192.157-.35.35-.35h3.022c.19 0 .35.158.35.35v10.744c0 2.933-.89 4.958-2.49 6.384-1.49 1.32-3.62 1.98-5.8 1.98-2.18 0-4.307-.66-5.796-1.97-1.6-1.42-2.484-3.45-2.484-6.38m29.813-3.193c.115.153.31.153.424 0l5.83-7.6c.118-.154.37-.28.566-.28h2.697c.193 0 .35.16.35.35V26.93c0 .192-.16.35-.35.35h-3.02c-.194 0-.352-.158-.352-.35V14.92c0-.19-.096-.223-.213-.07l-5.51 7.143c-.117.15-.31.15-.427 0l-5.504-7.15c-.12-.15-.216-.12-.216.073V26.92c0 .193-.16.35-.35.35h-3.02c-.196 0-.35-.157-.35-.35V8.444c0-.192.154-.35.35-.35h2.695c.19 0 .445.126.562.28l5.83 7.6"
            fill="#333333"
          />
        </g>
        <g>
          <path
            fill="#FFFFFE"
            d="M16.6,0.2H0.4C0.2,0.2,0,0.3,0,0.6v26.8c0,0.7,0.4,0.8,0.9,0.4l2.5-2.4l3.2-3.1c0.1-0.1,0.3-0.1,0.4-0.1h9.8 c5.9,0,10.5-5.1,10.5-10.9C27.2,5.3,22.5,0.2,16.6,0.2z M5.5,5.8c0-0.1,0.1-0.2,0.2-0.2h12.9c0.1,0,0.2,0.1,0.2,0.2v1.6 c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2V5.8z M18.9,16.3c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2v-1.6 c0-0.1,0.1-0.2,0.2-0.2h12.9c0.1,0,0.2,0.1,0.2,0.2V16.3z M21.6,11.9c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2v-1.6 c0-0.1,0.1-0.2,0.2-0.2h15.6c0.1,0,0.2,0.1,0.2,0.2V11.9z"
          />
        </g>
      </svg>
      <button className="mx-4 h-full text-white cursor-default">
        Messenger
      </button>
      <button className="mx-4 h-full text-steel hover:text-white md:block hidden">
        Dashboard
      </button>
      <button className="mx-4 h-full text-steel hover:text-white md:block hidden">
        Analytics
      </button>
      <button className="mx-4 h-full text-steel hover:text-white md:block hidden">
        Reviews
      </button>
      <button className="mx-4 h-full text-steel hover:text-white md:block hidden">
        Feedback
      </button>
      <button className="mx-4 h-full text-steel hover:text-white lg:block hidden">
        Leaderboard
      </button>
      <button className="mx-4 h-full text-steel hover:text-white lg:block hidden">
        Insights
      </button>
      <button className="mx-4 h-full text-steel hover:text-white lg:block hidden">
        Manage
      </button>
      <button className="mx-4 h-full text-steel hover:text-white lg:hidden block">
        ...
      </button>
      <div className="flex-1" />
      <button className="border-2 hover:border-white border-steel font-semibold ph-4 w-7 h-7 hover:text-white mx-4 rounded-full text-steel flex-no-shrink">
        ?
      </button>
      <button className="mx-4 btn bg-mineShaft hover:bg-steel text-white pl-4 pr-5 py-3 whitespace-no-wrap">
        <svg
          className="fill-current h-5 mr-3 -mb-2"
          color="#ffffff"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M511.736269,21.4285714 L438.594807,460.285714 C437.642444,465.809524 434.594883,470.095238 429.452124,473.142857 C426.785509,474.666667 423.833184,475.428571 420.59515,475.428571 C418.499952,475.428571 416.214282,474.952381 413.738138,474 L284.312036,421.142857 L215.170498,505.428571 C211.741992,509.809524 207.075414,512 201.170765,512 C198.694622,512 196.599424,511.619048 194.885171,510.857143 C191.266192,509.52381 188.361486,507.285714 186.171051,504.142857 C183.980617,501 182.8854,497.52381 182.8854,493.714286 L182.8854,394 L429.737833,91.4285714 L124.315089,355.714286 L11.4600988,309.428571 C4.41261423,306.761905 0.603163096,301.52381 0.0317454261,293.714286 C-0.349199687,286.095238 2.69836122,280.47619 9.17442814,276.857143 L484.593929,2.57142857 C487.451018,0.857142857 490.498579,0 493.736612,0 C497.546063,0 500.974569,1.04761905 504.02213,3.14285714 C510.307725,7.71428571 512.879104,13.8095238 511.736269,21.4285714 Z"
            id="Shape"
          />
        </svg>
        Review Invite
      </button>
      <div className="_avatar border-2 border-green flex h-8 items-center justify-center mr-4 rounded-full text-green w-8 flex-no-shrink">
        AF
      </div>
    </nav>
    <div className="_header p-5 flex items-center justify-between flex-no-shrink">
      <div className="_webchat-banner rounded font-semibold bg-mystic py-3 px-4 hidden md:block text-sm">
        ⚠️ You need to install Webchat!
        <button className="ml-4 btn btn--primary px-4 py-2">Install Now</button>
        <svg
          className="ml-4 hover:text-black cursor-pointer text-iron fill-current"
          height="12px"
          width="12px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="512 41.5739061 470.426094 0 256 214.426094 41.5739061 0 0 41.5739061 214.426094 256 0 470.426094 41.5739061 512 256 297.603308 470.426094 512 512 470.426094 297.573906 256" />
        </svg>
      </div>
      <button className="_location-picker flex flex-grow md:flex-no-grow items-center rounded bg-white py-4 px-5 text-blue font-bold">
        <span className="flex-grow truncate pr-5 cursor-pointer text-left">
          Blank's Good Car Company Of Utah
        </span>
        <svg
          className="h-5 fill-current"
          color="#4C76E0"
          height="16px"
          width="16px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,128 C0,110.326888 14.3292507,96 32.0036842,96 L479.996316,96 C497.671463,96 512,110.323002 512,128 C512,145.673112 497.670749,160 479.996316,160 L32.0036842,160 C14.3285375,160 0,145.676998 0,128 Z M0,256 C0,238.326888 14.3292507,224 32.0036842,224 L479.996316,224 C497.671463,224 512,238.323002 512,256 C512,273.673112 497.670749,288 479.996316,288 L32.0036842,288 C14.3285375,288 0,273.676998 0,256 Z M0,384 C0,366.326888 14.3292507,352 32.0036842,352 L479.996316,352 C497.671463,352 512,366.323002 512,384 C512,401.673112 497.670749,416 479.996316,416 L32.0036842,416 C14.3285375,416 0,401.676998 0,384 Z" />
        </svg>
      </button>
    </div>
    <div className="_main-wrapper flex-grow flex mx-5 shadow bg-white">
      <div className="_left-sidebar md:flex flex-col md:w-2/5 lg:w-1/3 hidden">
        <div className="_left-sidebar__header border-b border-mystic mx-6 h-11 flex items-stretch  flex-no-shrink">
          <button className="_new-message btn hover:text-darkBlue items-center mr-4 px-4 py-3 text-blue text-lg truncate">
            <svg
              className="_pen fill-current w-5 h-5 mr-3 -mb-1 flex-no-shrink"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M353.905803,84.7669304 L372.339459,66.3849745 C391.925218,46.8253445 426.078684,46.8253445 445.664443,66.3849745 L445.613239,66.3337713 C465.198997,85.9190029 465.198997,120.07155 445.613239,139.682384 L427.230788,158.089941 L353.905803,84.7669304 Z M81.0365003,370.250483 L131.626643,380.363118 L141.765154,430.9519 L60.7850817,451.202773 L81.0365003,370.250483 Z M144.991043,330.798402 L114.037864,324.628414 L317.729755,120.993208 L336.291422,139.554376 L144.991043,330.798402 Z M181.192694,367.02468 L372.46747,175.755052 L391.054739,194.290618 L187.38845,397.951424 L181.192694,367.02468 Z M481.866094,30.1586965 C462.382744,10.7014729 436.524422,0 408.976349,0 C381.47948,0 355.569953,10.7014729 336.112206,30.1842981 L44.0411782,322.273066 C40.7384816,325.550072 38.4086724,329.646329 37.2821712,334.152213 L0.747690494,480.183796 C-1.40290263,488.913945 1.15732728,498.156126 7.50669744,504.479723 C13.8304653,510.854524 23.0984976,513.414685 31.8032792,511.238548 L177.864395,474.705051 C182.344798,473.604182 186.466768,471.248834 189.743862,467.971828 L481.840492,175.88306 C501.298239,156.425837 512,130.517007 512,103.020878 C512,75.4991476 501.298239,49.5903184 481.814889,30.1330949 L481.866094,30.1586965 Z" />
            </svg>
            New Message
          </button>
        </div>
        <div className="_left-sidebar__tabs flex border-b border-mystic flex-no-shrink relative">
          <div className="absolute pin-b pin-l py-1 w-1/2 bg-black" />
          <button className="w-1/2 flex justify-center hover:bg-whiteSmoke uppercase text-sm font-semibold text-black">
            <svg
              className="fill-current w-5 h-5 mr-2"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384,263.876923 L384,129.969231 L128,129.969231 L128,263.876923 L170.666667,263.876923 C176.32,263.876923 181.738667,266.242626 185.749333,270.416082 L222.165333,308.512821 L289.834667,308.512821 L326.250667,270.416082 C330.261333,266.242626 335.68,263.876923 341.333333,263.876923 L384,263.876923 Z M85.3333333,263.876923 L85.3333333,85.3333333 L426.666667,85.3333333 L426.666667,263.876923 L448,263.876923 C459.776,263.876923 469.333333,273.875364 469.333333,286.194872 L469.333333,420.102564 C469.333333,432.422072 459.776,442.420513 448,442.420513 L64,442.420513 C52.224,442.420513 42.6666667,432.422072 42.6666667,420.102564 L42.6666667,286.194872 C42.6666667,273.875364 52.224,263.876923 64,263.876923 L85.3333333,263.876923 Z M85.3333333,397.784615 L426.666667,397.784615 L426.666667,308.512821 L350.165333,308.512821 L313.749333,346.609559 C309.738667,350.805333 304.32,353.148718 298.666667,353.148718 L213.333333,353.148718 C207.68,353.148718 202.261333,350.805333 198.250667,346.609559 L161.834667,308.512821 L85.3333333,308.512821 L85.3333333,397.784615 Z M170.666667,219.241026 L170.666667,174.605128 L341.333333,174.605128 L341.333333,219.241026 L170.666667,219.241026 Z" />
            </svg>
            Open
          </button>
          <button className="w-1/2 flex justify-center py-5 hover:bg-whiteSmoke uppercase text-sm font-semibold text-steel">
            <svg
              className="stroke-current w-5 h-5 mr-2"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                strokeWidth="80"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="120 300 216 396 408 140"
              />
            </svg>
            Closed
          </button>
        </div>
        <div className="_conversation-list overflow-auto flex-grow">
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Tuesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Monday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
          <div className="_item py-5 px-6 relative border-b border-mystic hover:bg-lightBlue cursor-pointer">
            <div className="text-jumbo font-bold text-sm"> Marisa Russo </div>
            <div className="border-l-2 px-5 my-2 font-bold border-iron">
              Drew Reilly: Hey Marisa, this is Drew…
            </div>
            <div className="absolute pin-t pin-r m-5 text-xs text-jumbo">
              Wednesday
            </div>
          </div>
        </div>
      </div>
      {/* MIDDLE PART */}
      <div className="_middle w-full flex flex-col flex-grow border-l border-r border-mystic">
        <div className="_middle-topbar h-11 border-b border-mystic px-4 items-center flex flex-no-shrink">
          <div className="_avatar px-4 flex items-center justify-center flex-no-shrink">
            <img
              className="h-8"
              src="https://s3.amazonaws.com/podium-prod/avatar/unknown-user.png"
            />
          </div>
          <div className="">
            <h2 className="md:text-lg text-base font-semibold truncate">
              Amy White
            </h2>
            <div className="-mt-3 text-sm text-steel">+1 801 139 1512</div>
          </div>
          <div className="flex-grow" />
          <button className="btn text-steel hover:bg-whiteSmoke px-4 py-3 mr-4 uppercase text-sm flex">
            <svg
              className="fill-current w-5 h-5 mr-2"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384,263.876923 L384,129.969231 L128,129.969231 L128,263.876923 L170.666667,263.876923 C176.32,263.876923 181.738667,266.242626 185.749333,270.416082 L222.165333,308.512821 L289.834667,308.512821 L326.250667,270.416082 C330.261333,266.242626 335.68,263.876923 341.333333,263.876923 L384,263.876923 Z M85.3333333,263.876923 L85.3333333,85.3333333 L426.666667,85.3333333 L426.666667,263.876923 L448,263.876923 C459.776,263.876923 469.333333,273.875364 469.333333,286.194872 L469.333333,420.102564 C469.333333,432.422072 459.776,442.420513 448,442.420513 L64,442.420513 C52.224,442.420513 42.6666667,432.422072 42.6666667,420.102564 L42.6666667,286.194872 C42.6666667,273.875364 52.224,263.876923 64,263.876923 L85.3333333,263.876923 Z M85.3333333,397.784615 L426.666667,397.784615 L426.666667,308.512821 L350.165333,308.512821 L313.749333,346.609559 C309.738667,350.805333 304.32,353.148718 298.666667,353.148718 L213.333333,353.148718 C207.68,353.148718 202.261333,350.805333 198.250667,346.609559 L161.834667,308.512821 L85.3333333,308.512821 L85.3333333,397.784615 Z M170.666667,219.241026 L170.666667,174.605128 L341.333333,174.605128 L341.333333,219.241026 L170.666667,219.241026 Z" />
            </svg>
            <span className="hidden lg:block truncate">open conversation</span>
          </button>
        </div>
        <div className="_messages-wrapper px-6 flex-grow flex flex-col-reverse overflow-auto">
          <div className="text-center text-jumbo text-xs">
            Webchat Conversation initiated
          </div>
          <a
            href="http://mrmrs.cc/writing/2016/03/24/scalable-css/"
            className="no-underline hover:underline w-1/3 mx-auto text-jumbo text-xs truncate mb-3"
          >
            http://mrmrs.cc/writing/2016/03/24/scalable-css/#this-is-a-very-long-one-for-sure
          </a>
          <div className="self-start mb-5">
            <div className="chat-left text-sm bg-blue text-white p-4">
              Hello, I would like to buy a car.
            </div>
            <div className="text-left text-sm text-jumbo">9:40 AM Oct 12</div>
          </div>
          <div className="chat-right text-sm bg-whiteSmoke p-4 self-end mb-5 max-w-xs leading-tight">
            Hi, Steve! Thank you for choosing Podium. Can you take 30 seconds
            and leave us a quick review? The link below makes it easy:
            <a
              className="no-underline hover:underline px-2 text-mineShaft"
              href="http://reviwed.co/WaPOew"
            >
              http://reviwed.co/WaPOew
            </a>
          </div>
          <div className="py-5 self-end">
            <img
              className="_review-invitation-image chat-right max-w-xs m-0"
              src="https://podium-prod.s3.amazonaws.com/mms%2F66dd18ab-e2c7-4f97-953c-cdda2833f3c9%2FPodium+MMS.png"
            />
            <div className="font-semibold text-right text-sm text-jumbo -mt-3">
              Brad Beeston <span className="font-normal ml-2">7:32 AM Tue</span>
            </div>
          </div>
        </div>
        <div className="_composer p-4">
          <textarea
            rows="1"
            placeholder="Type..."
            className="_message-input p-5 border-2 focus:border-blue border-iron w-full"
          />
          <div className="_actions-bar flex">
            <button className="_attachments btn mr-0 sm:mr-4 uppercase text-sm font-bold flex text-steel hover:bg-lightBlue px-4 py-3">
              <svg
                className="fill-current mr-2"
                height="17px"
                width="17px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M234.552139,490.4272 C172.779635,490.4272 127.937531,441.107282 127.937531,373.151131 L127.937531,191.906296 C127.937531,106.806515 187.513774,42.6458435 266.536522,42.6458435 C345.55927,42.6458435 405.135513,106.806515 405.135513,191.906296 L405.135513,341.166748 L362.48967,341.166748 L362.48967,191.906296 C362.48967,130.133791 322.125379,85.291687 266.536522,85.291687 C210.947665,85.291687 170.583374,130.133791 170.583374,191.906296 L170.583374,373.151131 C170.583374,410.316983 190.371045,447.781357 234.552139,447.781357 C278.733233,447.781357 298.520905,410.316983 298.520905,373.151131 L298.520905,213.229218 C298.520905,200.392819 295.407758,170.583374 266.536522,170.583374 C237.665286,170.583374 234.552139,200.392819 234.552139,213.229218 L234.552139,362.48967 L191.906296,362.48967 L191.906296,213.229218 C191.906296,162.203466 221.907647,127.937531 266.536522,127.937531 C311.165397,127.937531 341.166748,162.203466 341.166748,213.229218 L341.166748,373.151131 C341.166748,441.107282 296.324644,490.4272 234.552139,490.4272" />
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g>
                    <mask id="mask-2" fill="white" />
                    <g mask="url(#mask-2)" fill="#333333" fillRule="evenodd">
                      <rect x="0" y="0" width="512" height="512" />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="hidden sm:inline">Attachments</span>
            </button>
            <button className="_templates btn mr-0 sm:mr-4 uppercase flex text-sm font-bold text-steel hover:bg-whiteSmoke px-4 py-3">
              <svg
                className="fill-current mr-2"
                color="#778692"
                height="16px"
                width="16px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M233.6 278.4h105.6V320H233.6v-41.6zm0-86.4h128v41.6h-128V192zm0-86.4h128v41.6h-128v-41.6zM192 64v297.6h214.4V64H192zm0-41.6h214.4c22.4 0 41.6 19.2 41.6 41.6v297.6c0 22.4-19.2 41.6-41.6 41.6H192c-22.4 0-41.6-19.2-41.6-41.6V64c0-22.4 19.2-41.6 41.6-41.6zm-86.4 83.2V448h256v41.6h-256C83.2 489.6 64 470.4 64 448V105.6h41.6z" />
              </svg>
              <span className="hidden sm:inline">Templates</span>
            </button>
            <button className="_review-invite btn mr-0 sm:mr-4 uppercase flex text-sm font-bold text-steel hover:bg-whiteSmoke px-4 py-3">
              <svg
                className="_review-invite__star fill-current"
                height="20px"
                width="20px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M435.832031,220 L375.179922,211.771978 L282.894265,197.77174 L241.524941,113.882321 L199.847613,198.396318 L106.654272,211.948767 L174.089607,277.733739 L158.170284,370.62361 L241.302511,326.883993 L241.302511,391.266478 L133.605742,447.93061 C119.687819,455.253458 102.473444,449.898207 95.1563586,435.969324 C92.2426569,430.422769 91.2372107,424.069632 92.2956748,417.893453 L112.906408,297.629021 L25.5979415,212.457278 C14.3381053,201.473007 14.1077088,183.433406 25.0833364,172.164703 C29.453889,167.677446 35.1806264,164.757229 41.3769831,163.856137 L162.034316,146.309793 L215.993916,36.889598 C222.952877,22.7780975 240.02486,16.9842617 254.125256,23.9487035 C259.740107,26.7219808 264.284872,31.2703245 267.055967,36.889598 L321.015567,146.309793 L441.6729,163.856137 C457.233611,166.119021 468.015073,180.577834 465.753969,196.1508 C464.853586,202.352036 453.226562,222.232422 435.832031,220 Z M426.586824,355.532597 L483.528941,355.532597 C499.253073,355.532597 512,368.289563 512,384.026078 C512,399.762593 499.253073,412.519558 483.528941,412.519558 L426.586824,412.519558 L426.586824,469.506519 C426.586824,485.243034 413.839896,498 398.115765,498 C382.391633,498 369.644706,485.243034 369.644706,469.506519 L369.644706,412.519558 L312.702588,412.519558 C296.978457,412.519558 284.23153,399.762593 284.23153,384.026078 C284.23153,368.289563 296.978457,355.532597 312.702588,355.532597 L369.644706,355.532597 L369.644706,298.545636 C369.644706,282.809121 382.391633,270.052155 398.115765,270.052155 C413.839896,270.052155 426.586824,282.809121 426.586824,298.545636 L426.586824,355.532597 Z" />
              </svg>
            </button>
            <div className="flex-grow" />
            <button className="btn btn--secondary ml-3 px-5 py-3 truncate">
              Send {'&'} Close
            </button>
            <button className="btn btn--primary ml-3 px-5 py-3">Send</button>
          </div>
        </div>
      </div>
      <div className="_right-sidebar w-1/3 hidden lg:block relative">
        <div className="_user-topcard border-b border-mystic pb-7">
          <img
            className="absolute pin-t pin-r h-8 p-4 m-2 hover:bg-whiteSmoke rounded-full transition-all cursor-pointer"
            src="https://messenger.podium.com/static/media/menu.e418c7b4.svg"
          />
          <div className="_avatar px-4 flex items-center mt-7 justify-center flex-no-shrink">
            <img
              className="h-10 mb-4"
              src="https://s3.amazonaws.com/podium-prod/avatar/unknown-user.png"
            />
          </div>
          <div className="font-semibold leading-tight px-3 text-2 text-center">
            Amy White
          </div>
          <div className="_phone text-center mt-2">+1 801 123 1543</div>
        </div>
        <div className="_sidebar-actions flex flex-col">
          <div className="text-jumbo uppercase text-sm font-semibold mt-5 mx-5 mb-3">
            Assigned To
          </div>
          <button className="btn flex items-center p-4 mx-5 hover:bg-whiteSmoke">
            <img
              className="w-6 h-6 bg-cover bg-center rounded-full mr-3"
              style={{
                backgroundImage:
                  "url('https://podium-prod.s3.amazonaws.com/avatar%2F152426%2F10bf3611-3578-4638-8bbb-4eec340e3fce%2Favatar.jpeg')"
              }}
            />
            <span className="flex-grow text-left">Hunter Wright</span>
            <svg
              className="stroke-current fill-current h-4 w-4 rotate-270"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M87.4038671,124.979396 C67.4090235,105.006868 34.9909765, 105.006868 14.9961329,124.979396 C-4.99871078,144.951924 -4.99871078,177.33379 14.9961329, 197.306318 L256,438.04121 L497.003868,197.306318 C516.998712,177.33379 516.998712, 144.951924 497.003868,124.979396 C477.009024,105.006868 444.590976,105.006868 424.596132, 124.979396 L256,293.387364 L87.4038671,124.979396 Z"
                id="Shape"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);
