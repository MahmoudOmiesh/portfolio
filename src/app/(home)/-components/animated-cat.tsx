interface AnimatedCatProps {
  className?: string;
  width?: number;
}

export function AnimatedCat({ className = "", width = 120 }: AnimatedCatProps) {
  return (
    <div className={`animated-cat ${className}`}>
      <svg
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="428 200 88 75"
      >
        {/* Cat face base */}
        <path
          d="M489.07,274.63h-61.28v-23.2h33.36c17.648734-6.57,27.92,7,27.92,23.2Z"
          fill="#141414"
        />

        {/* Animated whiskers */}
        <path
          className="whisker-animation"
          d="M 483.59 271.66 C 490.68 272.45 498.59 271.84 498.59 260.95 C 498.59 246.4 506.59 244.88 511.41 247.16"
          fill="none"
          stroke="#141414"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />

        {/* Cat ears */}
        <g
          className="ear-animation"
          style={{ transformOrigin: "444.334992px 239.720001px" }}
        >
          <g transform="translate(-444.334991,-239.720001)">
            <path
              d="M430.61125,226.54139l13.4338,16.08158l14.27525-17.08886c.95113-1.03826,2.41428-.73624,2.41428,1.10987l-.00001,27.42998h-32.79913v-26.17327c-.05514-2.29213,1.51096-2.41728,2.67581-1.35929v-.00001Z"
              transform="translate(0 0.000001)"
              fill="#141414"
            />
            <path
              d="M429.15,229.82l15.185,18.17793L459.52,229.82v19.8h-30.37v-19.8Z"
              fill="#514f4f"
            />
          </g>
        </g>

        {/* Tail line */}
        <line
          className="tail-animation"
          x1="444.32"
          y1="257.23"
          x2="444.32"
          y2="231.539304"
          transform="matrix(-1 0 0-1 888.629998 482.969304)"
          fill="none"
          stroke="#141414"
          strokeWidth="33"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeDashoffset="25.690696"
          strokeDasharray="25.690696"
        />

        {/* Eyes group */}
        <g
          className="eyes-animation"
          style={{ transformOrigin: "444.345001px 249.885002px" }}
        >
          <g transform="translate(-444.345001,-249.885002)">
            {/* Left eye */}
            <g>
              <path
                d="M-2.75,0c0-1.518783,1.231217-2.75,2.75-2.75s2.75,1.231217,2.75,2.75-1.231217,2.75-2.75,2.75-2.75-1.231217-2.75-2.75Z"
                transform="translate(437.74 247.61)"
                fill="#f3c50f"
                stroke="#6e6a6a"
                strokeWidth="0.5"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <circle
                r="1.56"
                transform="translate(437.74 247.61)"
                fill="#141414"
              />
              <circle
                r="0.62"
                transform="translate(437.42 247.24)"
                fill="#fff"
              />
              <g
                className="pupil-left-animation"
                style={{ transformOrigin: "437.73999px 246.97022px" }}
              >
                <path
                  d="M-2.75,0c0-1.518783,1.231217-2.75,2.75-2.75s2.75,1.231217,2.75,2.75-1.231217,2.75-2.75,2.75-2.75-1.231217-2.75-2.75Z"
                  transform="scale(1.133182,1.133182) translate(0.00001,-0.000001)"
                  fill="#141414"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                />
              </g>
            </g>

            {/* Right eye */}
            <g transform="translate(13.201441 0)">
              <path
                d="M-2.75,0c0-1.518783,1.231217-2.75,2.75-2.75s2.75,1.231217,2.75,2.75-1.231217,2.75-2.75,2.75-2.75-1.231217-2.75-2.75Z"
                transform="translate(437.74 247.61)"
                fill="#f3c50f"
                stroke="#6e6a6a"
                strokeWidth="0.5"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <circle
                r="1.56"
                transform="translate(437.74 247.61)"
                fill="#141414"
              />
              <circle
                r="0.62"
                transform="translate(437.42 247.24)"
                fill="#fff"
              />
              <g
                className="pupil-right-animation"
                style={{ transformOrigin: "437.73999px 246.97022px" }}
              >
                <path
                  d="M-2.75,0c0-1.518783,1.231217-2.75,2.75-2.75s2.75,1.231217,2.75,2.75-1.231217,2.75-2.75,2.75-2.75-1.231217-2.75-2.75Z"
                  transform="scale(1.133182,1.133182) translate(0.00001,-0.000001)"
                  fill="#141414"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                />
              </g>
            </g>

            {/* Nose and mouth */}
            <g>
              <path
                d="M444.84,252.81l.58-.68c.182107-.203583.226978-.495427.114439-.744312s-.361302-.407955-.634439-.405688h-1.18c-.273137-.002267-.5219.156803-.634439.405688s-.067668.540729.114439.744312l.59.68c.131096.153716.322974.242256.525.242256s.393904-.08854.525-.242256Z"
                fill="#6e6a6a"
              />
              <path
                d="M444.31,253c0,1.054864-.855136,1.91-1.91,1.91s-1.91-.855136-1.91-1.91"
                fill="none"
                stroke="#6e6a6a"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
              <path
                d="M448.2,253c0,.682377-.364044,1.31292-.955,1.654109s-1.319044.341188-1.91,0-.955-.971732-.955-1.654109"
                fill="none"
                stroke="#6e6a6a"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </g>

        {/* Bottom circle with mask */}
        <g mask="url(#catMask)">
          <circle
            r="12.64"
            transform="translate(444.059982,279.059982)"
            fill="#595757"
          />
        </g>

        {/* Mask definition */}
        <defs>
          <mask
            id="catMask"
            maskUnits="userSpaceOnUse"
            x="-150%"
            y="-150%"
            height="400%"
            width="400%"
          >
            <path
              d="M489.07,274.63h-61.28v-23.2h33.36c17.841359-6.627692,27.92,7,27.92,23.2Z"
              fill="#fff"
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
}

export default AnimatedCat;
