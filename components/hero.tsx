export default function Hero() {
  return (
    <div
      className={
        "flex flex-col md:flex-row w-full h-auto min-h-[60vh] sm:min-h-[75vh] justify-between px-4 sm:px-8 md:px-12 lg:px-24 items-center font-poppins text-front py-8 sm:py-0"
      }
    >
      {/* Mobile Photo - Top */}
      <div className="md:hidden w-full flex justify-center mb-6">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <img
            src="/umut copy.png"
            alt="Umut Bideci"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>
      </div>
      
      <div className="w-full leading-none z-10">
        <p className="font-medium text-xl sm:text-2xl md:text-3xl">Hello! I&apos;m Umut,</p>
        <p className="font-extrabold text-[2.5em] sm:text-[3.5em] md:text-[5em] lg:text-[6em] relative left-[-3px] sm:left-[-5px] md:left-[-7px] lg:left-[-10px] pt-2.5">
          High School
        </p>
        <p className="font-extrabold text-[2.5em] sm:text-[3.5em] md:text-[5em] lg:text-[6em] relative left-[-3px] sm:left-[-5px] md:left-[-7px] lg:left-[-10px]">
          Student
        </p>
        <p className="font-medium text-xl sm:text-2xl md:text-3xl pt-4">studying at Inanc High School.</p>
        <p className="font-medium text-lg sm:text-xl md:text-2xl pt-2">passionate about Computer Science and Music.</p>
      </div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-full overflow-hidden">
        <svg
          width="750"
          height="500"
          className="absolute scale-75 lg:scale-110 top-[16%] right-0"
        >
          <mask id="svgmask3">
            <g transform="translate(125, 0)" width="100%" height="100%">
              <circle fill="#ffffff" r="225" cx="250" cy="275" />
            </g>
          </mask>
          <image
            xlinkHref="/umut copy.png"
            mask="url(#svgmask3)"
            className="w-[750px] h-[500px]"
          ></image>
        </svg>
        <svg
          width="750"
          height="500"
          className="absolute z-20  -right-[7%] top-[20%]"
        >
          <path
            d="M143.385 479.93L143.385 479.929C86.1603 457.468 37.9742 403.063 14.9662 333.777C-7.95257 264.576 -5.57458 180.566 36.1367 115.425C77.9457 50.1815 159.226 3.66055 244.33 0.656615C329.356 -2.3478 418.26 38.0833 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C266.679 492.947 200.512 502.389 143.385 479.93Z"
            stroke="#54576D"
            fill="none"
          />
        </svg>
        <svg
          width="104"
          height="30"
          viewBox="0 0 104 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-30 absolute w-1/4 top-2/3 right-1/4"
        >
          <rect
            x="12.2021"
            width="5"
            height="30"
            transform="rotate(24 12.2021 0)"
            fill="#54576D"
          />
          <rect
            x="33.9719"
            width="5"
            height="30"
            transform="rotate(24 33.9719 0)"
            fill="#54576D"
          />
          <rect
            x="55.7418"
            width="5"
            height="30"
            transform="rotate(24 55.7418 0)"
            fill="#54576D"
          />
          <rect
            x="77.5116"
            width="5"
            height="30"
            transform="rotate(24 77.5116 0)"
            fill="#54576D"
          />
          <rect
            x="99.2813"
            width="5"
            height="30"
            transform="rotate(24 99.2813 0)"
            fill="#54576D"
          />
        </svg>
        <svg
          width="50"
          height="56"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-30 absolute top-[20%] right-[10%]"
        >
          <rect x="9" y="16" width="6" height="24" rx="3" fill="#54576D" />
          <rect
            y="31"
            width="6"
            height="24"
            rx="3"
            transform="rotate(-90 0 31)"
            fill="#54576D"
          />
          <rect x="35" y="32" width="6" height="24" rx="3" fill="#54576D" />
          <rect
            x="26"
            y="47"
            width="6"
            height="24"
            rx="3"
            transform="rotate(-90 26 47)"
            fill="#54576D"
          />
          <rect x="35" width="6" height="24" rx="3" fill="#54576D" />
          <rect
            x="26"
            y="15"
            width="6"
            height="24"
            rx="3"
            transform="rotate(-90 26 15)"
            fill="#54576D"
          />
        </svg>
      </div>
    </div>
  );
}
