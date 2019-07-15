import React from 'react';
import '../podium.css';
import classNames from 'classnames';

let MobileNavItem = ({ icon, text, selected }) => (
  <div
    className={classNames(
      'flex',
      'flex-col',
      'items-center',
      'hover:text-darkBlue',
      'rounded-full',
      'flex-grow',
      'cursor-pointer',
      'transition-all',
      'flex-grow',
      selected ? 'text-blue' : 'text-mineShaft'
    )}
  >
    {icon}
    {text}
  </div>
);

let MobileNav = () => (
  <div
    className={classNames(
      'flex',
      'w-screen',
      'items-stretch',
      'h-16',
      'text-center',
      'bg-white',
      'text-xs',
      'p-3',
      'block',
      'sm:hidden',
      'border-t',
      'border-iron'
    )}
  >
    <MobileNavItem
      icon={
        <svg
          className="w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13,13.3257 L16.333,13.3257 L19,15.3257 L19,13.3257 L22,13.3257 L22,7.3257 L13,7.3257 L13,13.3257 Z M21,19.3257 L15.667,15.3257 L12.5,15.3257 C11.673,15.3257 11,14.6527 11,13.8257 L11,6.8257 C11,5.9987 11.673,5.3257 12.5,5.3257 L22.5,5.3257 C23.327,5.3257 24,5.9987 24,6.8257 L24,13.8257 C24,14.6527 23.327,15.3257 22.5,15.3257 L21,15.3257 L21,19.3257 Z" />
          <path d="M3,17 L3,13 L1.5,13 C0.673,13 0,12.327 0,11.5 L0,1.5 C0,0.673 0.673,0 1.5,0 L14.5,0 C15.327,0 16,0.673 16,1.5 L16,3.998 L14,3.998 L14,2 L2,2 L2,11 L5,11 L5,13 L7.667,11 L9.752,11 L9.752,13 L8.333,13 L3,17 Z" />
          <polygon points="3.404 5.5346 9.954 5.5346 9.954 3.5346 3.404 3.5346" />
          <polygon points="3.404 8.8136 8 8.8136 8 6.8136 3.404 6.8136" />
        </svg>
      }
      text="Customers"
    />
    <MobileNavItem
      selected
      icon={
        <svg
          className="w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
        >
          <defs />
          <g
            id="Symbols"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              d="M28.4622514,0 L19.6051086,0 C18.5626229,0 17.7141086,0.848514286 17.7141086,1.891 L17.7141086,4.66771429 L19.72468,4.66771429 L19.72468,2.01057143 L28.34268,2.01057143 L28.34268,7.97142857 L26.5429086,7.97142857 C26.3267943,7.97142857 26.1124514,8.04317143 25.9397371,8.17248571 L24.0053371,9.62328571 L24.0053371,8.97671429 C24.0053371,8.42225714 23.5545086,7.97142857 23.0000514,7.97142857 L20.8451086,7.97142857 L20.8451086,9.982 L21.9956514,9.982 L21.9956514,11.6338571 C21.9956514,12.0173714 22.2082229,12.3619143 22.5501086,12.5328571 C22.6891657,12.6028286 22.8450514,12.6391429 23.0000514,12.6391429 C23.2188229,12.6391429 23.4269657,12.5691714 23.6041086,12.4372 L26.8785943,9.982 L28.4622514,9.982 C29.5047371,9.982 30.3532514,9.13348571 30.3532514,8.091 L30.3532514,1.891 C30.3532514,0.848514286 29.5047371,0 28.4622514,0"
              id="Fill-1"
              fill="currentColor"
            />
            <path
              d="M14.4101286,8.97644857 C14.4101286,8.06593429 15.1514714,7.32459143 16.0619857,7.32459143 C16.9733857,7.32459143 17.7138429,8.06593429 17.7138429,8.97644857 C17.7138429,9.88696286 16.9733857,10.6283057 16.0619857,10.6283057 C15.1514714,10.6283057 14.4101286,9.88696286 14.4101286,8.97644857 M16.0619857,12.6388771 C18.0823,12.6388771 19.7244143,10.9958771 19.7244143,8.97644857 C19.7244143,6.95702 18.0823,5.31402 16.0619857,5.31402 C14.0425571,5.31402 12.3995571,6.95702 12.3995571,8.97644857 C12.3995571,10.9958771 14.0425571,12.6388771 16.0619857,12.6388771"
              id="Fill-3"
              fill="currentColor"
            />
            <path
              d="M5.55298571,7.00307714 C5.55298571,6.09256286 6.29432857,5.35122 7.20484286,5.35122 C8.11624286,5.35122 8.8567,6.09256286 8.8567,7.00307714 C8.8567,7.91359143 8.11624286,8.65493429 7.20484286,8.65493429 C6.29432857,8.65493429 5.55298571,7.91359143 5.55298571,7.00307714 M7.20484286,10.6655057 C9.22515714,10.6655057 10.8672714,9.02250571 10.8672714,7.00307714 C10.8672714,4.98364857 9.22515714,3.34064857 7.20484286,3.34064857 C5.18541429,3.34064857 3.54241429,4.98364857 3.54241429,7.00307714 C3.54241429,9.02250571 5.18541429,10.6655057 7.20484286,10.6655057"
              id="Fill-5"
              fill="currentColor"
            />
            <g id="Group-9" transform="translate(0.000000, 10.867271)">
              <polygon
                id="path-1"
                points="0 0.444628571 12.1128514 0.444628571 12.1128514 6.88377143 0 6.88377143"
              />
              <path
                d="M7.20510857,2.4552 C8.17762286,2.4552 9.06599429,2.59602857 9.84630857,2.87237143 L9.90742286,2.89451429 L9.95968,2.85377143 C10.4973086,2.43482857 11.1421086,2.09294286 11.8737086,1.83874286 L12.1128514,1.75548571 L11.8967371,1.62351429 C10.6372514,0.852057143 9.01462286,0.444628571 7.20510857,0.444628571 C2.96253714,0.444628571 -0.000177142857,2.67928571 -0.000177142857,5.87848571 L-0.000177142857,6.88377143 L7.76133714,6.88377143 L8.40436571,4.85902857 L2.20259429,4.8732 C2.79779429,3.39848571 4.73573714,2.4552 7.20510857,2.4552"
                id="Fill-7"
                fill="currentColor"
                mask="url(#mask-2)"
              />
            </g>
            <path
              d="M14.1065943,15.5181571 C14.72748,15.3702429 15.3855657,15.2958429 16.0622514,15.2958429 C17.7309371,15.2958429 19.1746514,15.7236429 20.1267943,16.5013 C20.5687657,16.8609 20.8831943,17.2683286 21.0647657,17.7138429 L11.0597371,17.7138429 C11.4795657,16.6766714 12.5787371,15.8813 14.1065943,15.5181571 M16.0622514,13.2852714 C13.05968,13.2852714 10.60448,14.4287286 9.49379429,16.3427571 C9.13950857,16.9530143 8.93313714,17.6270429 8.87910857,18.3444714 L8.87290857,18.4224143 C8.86493714,18.5207286 8.85696571,18.6181571 8.85696571,18.7191286 L8.85696571,19.7244143 L23.2675371,19.7244143 L23.2675371,18.7191286 C23.2675371,15.5199286 20.3048229,13.2852714 16.0622514,13.2852714"
              id="Fill-10"
              fill="currentColor"
            />
          </g>
        </svg>
      }
      text="Team"
    />
    <MobileNavItem
      icon={
        <svg
          className="w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M18,5.0388 C18,5.3438 17.863,5.6298 17.625,5.8198 L15.994,7.1248 C15.995,7.0828 16,7.0418 16,6.9998 L16,2.9998 L18,2.9998 L18,5.0388 Z M10,10.9998 C7.794,10.9998 6,9.2058 6,6.9998 L6,1.9998 L14,1.9998 L14,6.9998 C14,9.2058 12.206,10.9998 10,10.9998 L10,10.9998 Z M2.376,5.8208 C2.137,5.6298 2,5.3438 2,5.0388 L2,2.9998 L4,2.9998 L4,6.9998 C4,7.0418 4.005,7.0828 4.006,7.1248 L2.376,5.8208 Z M12,17.9998 L8,17.9998 L8,16.9998 L12,16.9998 L12,17.9998 Z M19,0.9998 L15.722,0.9998 C15.375,0.4048 14.737,-0.0002 14,-0.0002 L6,-0.0002 C5.263,-0.0002 4.625,0.4048 4.278,0.9998 L1,0.9998 C0.448,0.9998 0,1.4478 0,1.9998 L0,5.0388 C0,5.9548 0.41,6.8088 1.126,7.3818 L5.304,10.7238 C6.207,11.8598 7.51,12.6588 9,12.9098 L9,14.9998 L7,14.9998 C6.448,14.9998 6,15.4478 6,15.9998 L6,17.9998 L5,17.9998 L5,19.9998 L7,19.9998 L13,19.9998 L15,19.9998 L15,17.9998 L14,17.9998 L14,15.9998 C14,15.4478 13.552,14.9998 13,14.9998 L11,14.9998 L11,12.9098 C12.49,12.6588 13.793,11.8598 14.696,10.7238 L18.875,7.3818 C19.59,6.8088 20,5.9548 20,5.0388 L20,1.9998 C20,1.4478 19.552,0.9998 19,0.9998 L19,0.9998 Z"
            id="path-1"
          />
        </svg>
      }
      text="Leaderboard"
    />
    <MobileNavItem
      icon={
        <svg className="w-6 fill-current" viewBox="0 0 20 20" version="1.1">
          <path
            d="M9.5547,12.8625 C9.3867,12.7505 9.1937,12.6945 8.9997,12.6945 C8.8067,12.6945 8.6137,12.7505 8.4457,12.8625 L5.3757,14.9085 L6.4057,11.3015 C6.5107,10.9355 6.3977,10.5415 6.1157,10.2855 L3.5937,7.9995 L6.3327,7.9995 C6.7217,7.9995 7.0757,7.7745 7.2407,7.4205 L8.9997,3.6255 L10.7597,7.4205 C10.9237,7.7745 11.2777,7.9995 11.6667,7.9995 L14.4067,7.9995 L11.8847,10.2855 C11.6017,10.5415 11.4897,10.9355 11.5947,11.3015 L12.6247,14.9085 L9.5547,12.8625 Z M13.6877,11.3505 L17.6717,7.7405 C17.9777,7.4635 18.0817,7.0265 17.9327,6.6405 C17.7837,6.2545 17.4137,5.9995 16.9997,5.9995 L12.3057,5.9995 L9.9077,0.8285 C9.7427,0.4745 9.3887,0.2485 8.9997,0.2485 C8.6107,0.2485 8.2567,0.4745 8.0927,0.8285 L5.6947,5.9995 L0.9997,5.9995 C0.5867,5.9995 0.2157,6.2545 0.0667,6.6405 C-0.0823,7.0265 0.0217,7.4635 0.3287,7.7405 L4.3117,11.3505 L2.7057,16.9745 C2.5907,17.3775 2.7387,17.8095 3.0767,18.0565 C3.4167,18.3035 3.8727,18.3135 4.2217,18.0805 L8.9997,14.8955 L13.7787,18.0805 C13.9467,18.1935 14.1397,18.2485 14.3327,18.2485 C14.5407,18.2485 14.7467,18.1845 14.9227,18.0565 C15.2617,17.8095 15.4097,17.3775 15.2947,16.9745 L13.6877,11.3505 Z"
            id="path-1"
          />
        </svg>
      }
      text="Reviews"
    />
    <MobileNavItem
      icon={
        <svg className="w-6 fill-current" viewBox="-1 -1 24 24">
          <path
            d="M10.9074245,13.5140405 C12.2450239,13.5140405 13.3311115,12.4278624 13.3311115,11.0900758 C13.3311115,9.75228924 12.2450239,8.66611116 10.9074245,8.66611116 C9.56880446,8.66611116 8.48373756,9.75164332 8.48373756,11.0900758 C8.48373756,12.4285083 9.56880446,13.5140405 10.9074245,13.5140405 Z M10.9074245,15.3322223 C8.56447585,15.3322223 6.66555574,13.432488 6.66555574,11.0900758 C6.66555574,8.74766366 8.56447585,6.84792934 10.9074245,6.84792934 C13.2492119,6.84792934 15.1492933,8.74816906 15.1492933,11.0900758 C15.1492933,13.4319826 13.2492119,15.3322223 10.9074245,15.3322223 Z M21.8181818,8.51445713 L21.8181818,13.6656945 L19.7832145,13.6656945 C19.5929905,14.3161875 19.3302247,14.9430181 19.0006994,15.5372303 L20.4453435,16.9783091 L16.8056399,20.6234682 L15.3604702,19.1800216 C14.7649765,19.5105485 14.1370266,19.7739379 13.4862371,19.9638922 L13.4862371,22 L8.33527745,22 L8.33527745,19.9655587 C7.68478973,19.7756925 7.05712039,19.5124593 6.46187277,19.1821478 L5.01927087,20.6267125 L1.37441583,16.9867059 L2.81936902,15.5416323 C2.48862996,14.9460011 2.22524277,14.3179043 2.03473184,13.6656945 L0,13.6656945 L0,8.51445713 L2.03491379,8.51445713 C2.225312,7.86300703 2.48833449,7.23515142 2.81801337,6.64049665 L1.37487055,5.19723356 L5.01673963,1.55506101 L6.45980178,2.9982434 C7.05540933,2.66773701 7.68321367,2.40466366 8.33361106,2.21541768 L8.33361106,0.181818182 L13.4845708,0.181818182 L13.4845708,2.21546029 C14.1338332,2.40445255 14.7605001,2.66709073 15.355286,2.99698095 L16.8018518,1.55213758 L20.4433113,5.19390051 L18.9983897,6.63894251 C19.3292115,7.2352751 19.5927874,7.86322774 19.7832802,8.51445713 L21.8181818,8.51445713 Z M20,10.3326389 L18.3301847,10.3326389 L18.1819406,9.60504179 C17.9936664,8.68097294 17.6235087,7.80233714 17.0935089,7.00270193 L16.6829093,6.38321127 L17.872121,5.19390051 L16.8010326,4.12272285 L15.6099506,5.31238669 L14.9906974,4.90149039 C14.1937379,4.37267971 13.3160596,4.00351439 12.396371,3.818695 L11.6663889,3.67199879 L11.6663889,2 L10.1517929,2 L10.1517929,3.67199879 L9.42181086,3.818695 C8.50082116,4.00377586 7.62167318,4.3734612 6.82448932,4.90293277 L6.20473484,5.31455973 L5.01673963,4.12646553 L3.94606081,5.19723356 L5.13407722,6.38534896 L4.72256508,7.00503381 C4.19513381,7.7992781 3.82516164,8.67925481 3.63618545,9.60531533 L3.48776442,10.3326389 L1.81818182,10.3326389 L1.81818182,11.8475127 L3.4879971,11.8475127 L3.63624122,12.5751099 C3.82507652,13.5019326 4.19464889,14.3800678 4.7240082,15.1764483 L5.1359818,15.796231 L3.94651553,16.9857964 L5.01754118,18.0553973 L6.20599765,16.8653239 L6.82615571,17.2772189 C7.62280043,17.8063324 8.50237645,18.1765728 9.42482161,18.3633944 L10.1534593,18.5109644 L10.1534593,20.1818182 L11.6680553,20.1818182 L11.6680553,18.5092979 L12.396693,18.3617279 C13.3191381,18.1749063 14.1987142,17.8046658 14.9953589,17.2755524 L15.61471,16.8641933 L16.8039101,18.0519755 L17.8734216,16.9808609 L16.6835682,15.793944 L17.0956167,15.1734513 C17.6235885,14.3783931 17.9931967,13.500032 18.1819964,12.5748363 L18.3304174,11.8475127 L20,11.8475127 L20,10.3326389 Z M17.4472157,18.6945142 L16.1614694,18.6953791 L16.8039101,18.0519755 L17.4472157,18.6945142 Z"
            id="path-1"
          />
        </svg>
      }
      text="Settings"
    />
  </div>
);

let NavBar = () => (
  <nav className="_nav hidden sm:flex text-sm flex-no-shrink w-full bg-black text-white h-11 items-center">
    <svg
      className="_podium-logo w-6 ml-5 flex-no-shrink mt-1 mr-2"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <button className="mx-2 h-full text-white cursor-default relative">
      Inbox
      <span className="bg-red absolute top-0 right-0 px-1 rounded-full text-xs font-semibold mt-2 -mr-4">
        9+
      </span>
    </button>
    <button className="mx-2 h-full text-steel hover:text-white md:block hidden">
      Dashboard
    </button>
    <button className="mx-2 h-full text-steel hover:text-white md:block hidden">
      Analytics
    </button>
    <button className="mx-2 h-full text-steel hover:text-white md:block hidden">
      Reviews
    </button>
    <button className="mx-2 h-full text-steel hover:text-white lg:block hidden">
      Leaderboard
    </button>
    <button className="mx-2 h-full text-steel hover:text-white lg:block hidden">
      Insights
    </button>
    <button className="mx-2 h-full text-steel hover:text-white lg:block hidden">
      Manage
    </button>
    <button className="mx-2 h-full text-steel hover:text-white lg:hidden block">
      ...
    </button>
    <div className="flex-1" />

    <button className="flex items-center h-10 my-2 mx-4 btn bg-mineShaft hover:bg-steel text-white pl-4 pr-5 py-3 whitespace-no-wrap">
      <svg
        className="fill-current h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M20.821 3.18a4 4 0 0 0-2.847-1.178 3.997 3.997 0 0 0-2.846 1.179L3.72 14.59a.995.995 0 0 0-.263.464L2.03 20.759a1 1 0 0 0 1.213 1.212l5.705-1.427a.995.995 0 0 0 .464-.263L20.82 8.872a4.005 4.005 0 0 0 1.179-2.846 3.996 3.996 0 0 0-1.179-2.847l.001.001zM9.077 16.338l7.471-7.471.727.725-7.955 7.955-.243-1.209zm-1.414-1.415l-1.209-.241 7.956-7.955.725.726-7.472 7.47zm-2.497 1.541l1.976.395.396 1.977-3.163.791.791-3.163zM15.823 5.313l.72-.718c.766-.764 2.1-.764 2.864 0l-.002-.001c.765.765.765 2.099 0 2.864l-.718.72-2.864-2.865z" />
      </svg>
      New Message
    </button>
    <div className="text-steel flex mr-3">
      <svg
        className="h-6 fill-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 22C6.486 22 2 17.515 2 12 2 6.487 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
        <path d="M13 15h-2v-3h1a2 2 0 1 0-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.011 4.011 0 0 1-3 3.875V15z" />
        <circle cx="12" cy="17" r="1.25" />
      </svg>
      Help
    </div>
    <div className="_avatar border-2 border-green flex h-8 items-center justify-center mr-4 rounded-full text-green w-8 flex-no-shrink">
      AF
    </div>
  </nav>
);

const Sidebar = () => (
  <div className="bg-whiteSmoke p-5 w-64 flex-shrink-0 hidden sm:block h-full">
    <h2 className="text-xs uppercase font-semibold text-steel">Customers</h2>
    <div>
      <div className="px-3 text-sm hover:bg-whiteSmokeDark rounded font-semibold text-mineShaft my-1 py-1 flex">
        All <div className="flex-grow" />
        <span className="flex items-center justify-center bg-red text-white h-5 w-6 flex-shrink-0 rounded-full text-xs font-semibold">
          9+
        </span>
      </div>
      <div className="px-3 text-sm hover:bg-whiteSmokeDark rounded font-semibold text-mineShaft my-1 py-1 flex">
        Unassigned <div className="flex-grow" />
        <span className="flex items-center justify-center bg-red text-white h-5 w-6 flex-shrink-0 rounded-full text-xs font-semibold">
          1
        </span>
      </div>
      <div className="px-3 text-sm hover:bg-whiteSmokeDark rounded text-mineShaft my-1 py-1 flex">
        My Messages
      </div>
      <div className="px-3 text-sm hover:bg-whiteSmokeDark rounded text-mineShaft my-1 py-1 flex">
        Others...
      </div>
    </div>
    <hr className="my-8 py-px bg-whiteSmokeDark" />
    <h2 className="text-xs uppercase font-semibold text-steel">Team</h2>
  </div>
);

const Message = ({ message, name, avatarUrl }) => (
  <div className="group flex items-start py-2 px-4 text-sm hover:bg-whiteSmoke">
    <img className="_avatar h-8 rounded-full mr-2" src={avatarUrl} />
    <div className="flex-grow">
      <div className="font-semibold">{name}</div>
      <div>{message}</div>
    </div>
    <div className="float-right hidden sm:block invisible group-hover:visible flex-shrink-0">
      <div>
        <button className="hover:bg-whiteSmokeDark p-1 rounded">
          <svg
            className="fill-current text-jumbo h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14.5 3H9v14h10V3h-4.5zM21 3v14c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zM5 5v16h12v2H5c-1.1 0-2-.9-2-2V5h2z" />
          </svg>
        </button>
        <button className="hover:bg-whiteSmokeDark p-1 rounded">
          <svg
            className="fill-current text-jumbo h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6 21h15v-7.8l-7 4.7c-.2.1-.3.2-.5.2s-.3-.1-.5-.2l-7-4.7V21zm13.1-9H7.9l5.6 3.8 5.6-3.8zm2-2c1 0 1.9.9 1.9 2v9c0 1.1-.9 2-1.9 2H5.9c-1 0-1.9-.9-1.9-2v-9c0-1.1.9-2 1.9-2h15.2zM1 19V8.5C5.2 5 7.7 2.8 8.7 2 10.2.8 11.8.8 13.3 2c1 .8 3.8 3.2 8.3 7h-3.1c-4.1-3.4-6.2-5.3-6.5-5.5-.4-.4-1.4-.4-1.9 0-.3.2-2.7 2.2-7.1 5.9V19H1z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const Messenger = () => (
  <div className="h-full bg-white shadow-lg flex flex-grow flex-col">
    <div className="_top-bar flex items-center px-4 py-2 border-b border-mystic bg-white">
      <div>
        <div className="font-semibold">/dev/null</div>
        <div className="text-jumbo text-sm">You and 105 others</div>
      </div>
      <div className="flex-grow" />
      <div className="float-right">
        <svg
          className="h-5 fill-current text-jumbo"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 22C6.486 22 2 17.515 2 12 2 6.487 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
          <path d="M13 15v-4a1 1 0 0 0-1-1h-2v2h1v3H9v2h6v-2h-2z" />
          <circle cx="12" cy="8" r="1.25" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col-reverse flex-grow overflow-y-scroll ">
      <Message
        name="Junior Dog"
        message="Good question. We don't even understand wild horse migrations very well, so I'm assuming even less is known about the migration patterns of water horses. It's been awhile since I've seen any Podium water horses."
        avatarUrl="https://avatars.podium.com/467234/00c20150-3ed4-4f50-9d81-35ed2f8300ad/avatar.jpeg"
      />
      <Message
        name="Gage Peterson"
        message="CSS is interesting because unlike other types of code, you are most likely to find the most recent code towards the bottom of the file. Reading a css file from start to finish will often times reveal in chronological order how a defined system breaks down."
        avatarUrl="https://avatars.podium.com/206611/fdd1d206-fecd-46d1-8398-ed4decf761d4/avatar.jpeg"
      />
    </div>
    <ComposerBar />
  </div>
);

const ComposerBar = () => (
  <div
    class={classNames(
      '_composer-bar',
      'bg-white',
      'py-4',
      'px-2',
      'flex',
      'bg-white',
      'border-t',
      'border-mystic',
      'sm:flex-wrap'
    )}
  >
    <div
      className={classNames(
        '_input',
        'order-2',
        'relative',
        'sm:border-2',
        'sm:border-lightSteel',
        'sm:bg-white',
        'bg-whiteSmoke',
        'rounded',
        'flex',
        'flex-grow',
        'items-center',
        'sm:w-full',
        'sm:mb-3'
      )}
    >
      <input
        type="text"
        placeholder="Message /dev/null"
        className="flex-grow block p-2 sm:p-4 text-sm bg-transparent"
      />
      <Smiley />
    </div>
    <button className="order-3 block sm:hidden btn btn--primary px-4 py-1 opacity-75 ml-2">
      ->
    </button>
    <Clippy />
    <div className="sm:flex-grow order-3" />
    <button className="hidden order-3 sm:block btn btn--primary px-4 py-1 opacity-75">
      Send
    </button>
  </div>
);

const Clippy = () => (
  <div class="order-1 sm:order-3 flex items-center justify-center px-3 text-steel hover:bg-whiteSmoke rounded">
    <svg
      className="h-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M11 23c-2.897 0-5-2.313-5-5.5V9c0-3.991 2.794-7 6.5-7S19 5.009 19 9v7h-2V9c0-2.897-1.893-5-4.5-5S8 6.103 8 9v8.5c0 1.743.928 3.5 3 3.5s3-1.757 3-3.5V10c0-.602-.146-2-1.5-2S11 9.398 11 10v7H9v-7c0-2.393 1.407-4 3.5-4S16 7.607 16 10v7.5c0 3.187-2.103 5.5-5 5.5z" />
    </svg>
  </div>
);

const Smiley = () => (
  <svg
    class="_smiley h-8 p-2 mr-2 fill-current text-steel hover:text-blue rounded"
    viewBox="0 0 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M9,12.6 C7.8588,12.6 6.8094,12.0762 6.1209,11.1618 L4.6827,12.2445 C5.715,13.6152 7.2882,14.4 9,14.4 C10.7145,14.4 12.2895,13.6134 13.32,12.2409 L11.88,11.1591 C11.1924,12.0753 10.143,12.6 9,12.6"
        id="Fill-2837"
      />
      <path
        d="M9,16.2 C5.0301,16.2 1.8,12.9699 1.8,9 C1.8,5.0301 5.0301,1.8 9,1.8 C12.9699,1.8 16.2,5.0301 16.2,9 C16.2,12.9699 12.9699,16.2 9,16.2 M9,0 C4.0374,0 0,4.0374 0,9 C0,13.9635 4.0374,18 9,18 C13.9626,18 18,13.9635 18,9 C18,4.0374 13.9626,0 9,0"
        id="Fill-2838"
      />
      <polygon id="Fill-2872" points="7.2 5.4 5.4 5.4 5.4 8.1 7.2 8.1" />
      <polygon id="Fill-2873" points="10.8 8.1 12.6 8.1 12.6 5.4 10.8 5.4" />
    </g>
  </svg>
);

export default () => (
  <div className="font-sans mx-auto w-screen h-screen bg-whiteSmoke flex flex-col">
    <NavBar />
    <div className="flex flex-grow ">
      <Sidebar />
      <Messenger />
    </div>
    <MobileNav />
  </div>
);
