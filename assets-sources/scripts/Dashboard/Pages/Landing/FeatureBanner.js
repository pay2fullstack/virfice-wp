import React from "react";
import Card from "../../Molecules/Card";
import Button from "../../Molecules/Button";
import { VIRFICE_APP_PREFIX } from "../../../conf";
import FeatureListItem from "../../Molecules/FeatureListItem";
import { addParams } from "../../../functions";

const FeatureBanner = () => {
  return (
    <Card className={`${VIRFICE_APP_PREFIX}-feature-card`}>
      <div
        className={`${VIRFICE_APP_PREFIX}-flex-center-center ${VIRFICE_APP_PREFIX}-gap-24`}
        style={{ marginLeft: -20 }}
      >
        <svg
          width="302"
          height="301"
          viewBox="0 0 302 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M194.623 83.6111C182.5 79.9297 184.483 86.756 186.99 90.6294C177.21 88.9637 176.267 92.041 180.231 99.2252C171.25 105.345 167.289 122.976 166.431 131.026C166.253 132.505 165.099 136.936 161.903 142.835C154.228 153.612 158.189 151.96 157.886 153.806C157.583 155.651 151.633 162.953 150.556 165.114C149.478 167.275 137.271 174.235 135.132 175.696C132.993 177.157 128.171 177.805 122.051 179.033C115.932 180.261 109.803 177.48 108.252 175.412C107.64 173.964 107.092 173.718 106.894 173.776C106.557 173.627 105.635 173.494 104.639 174.16C103.394 174.992 104.722 180.96 105.08 182.066C95.581 176.017 96.3081 182.676 97.8378 186.514C101.013 194.585 113.572 213.388 138.407 224.028C169.45 237.328 202.753 234.539 212.925 225.453C220.296 218.027 223.269 209.489 223.833 206.148C225.012 207.462 228.113 209.476 231.091 207.02C234.07 204.564 233.963 198.775 233.538 196.188C236.054 199.981 241.867 206.531 244.982 202.39C248.097 198.248 246.38 192.114 245.132 189.564C248.163 192.709 255.178 198.003 258.996 194.011C262.813 190.019 258.344 182.861 255.633 179.782C259.965 180.493 269.122 180.944 271.094 177.058C273.066 173.172 269.031 169.038 266.766 167.457C270.241 167.82 277.519 167.293 278.841 162.281C280.163 157.27 274.479 153.877 271.471 152.806C274.561 151.378 280.611 147.687 280.095 144.353C279.579 141.019 274.498 139.645 272.021 139.375C266.022 138.926 252.028 140.327 244.053 149.513C235.597 161.341 229.764 163.585 227.797 160.895C226.223 158.742 227.32 141.258 228.065 132.785C229.442 125.179 230.709 108.185 224.759 101.056C217.322 92.146 209.777 88.2129 194.623 83.6111Z"
            fill="#B5D72D"
          />
          <path
            d="M86.9113 99.881C86.3335 100.911 86.1496 102.221 86.369 103.79C86.742 106.486 88.2968 108.972 90.7457 110.793C93.3948 112.761 96.7567 113.658 99.738 113.191C103.463 112.607 106.751 110.944 109.593 108.591C106.463 103.46 101.526 99.2296 96.5703 97.7333C93.1781 96.7086 89.7683 97.0866 87.8867 98.6975C87.4872 99.0391 87.1623 99.4332 86.9113 99.881ZM114.679 127.49C114.347 128.082 113.976 128.656 113.566 129.211C107.683 137.188 97.102 137.6 89.161 135.326L90.2339 131.583C96.9185 133.5 105.735 133.274 110.435 126.902C113.813 122.308 113.121 117.139 111.945 113.6C111.775 113.093 111.587 112.589 111.38 112.087C108.185 114.603 104.504 116.383 100.34 117.035C96.2883 117.669 91.9468 116.532 88.4252 113.917C85.1309 111.469 83.0306 108.062 82.5135 104.325C81.8852 99.7746 83.7135 97.1464 85.3561 95.7408C88.2642 93.2533 92.992 92.5886 97.6938 94.0066C103.26 95.6877 108.787 100.259 112.443 105.852C118.708 98.9303 122.225 88.5973 122.884 80.7517C124.277 64.146 117.87 49.9069 112.251 40.885C106.387 31.4717 97.9958 22.9481 87.9874 16.2342C80.1029 10.945 71.0033 6.98321 63.0212 5.36309C17.5842 -3.85681 -6.93434 42.8373 -13.3639 57.374L-16.9235 55.8C1.05331 15.2057 31.2108 -5.06248 63.796 1.54947C72.2577 3.26576 81.8629 7.4408 90.1548 13.0012C100.618 20.019 109.401 28.9504 115.554 38.8299C124.06 52.482 127.935 67.0917 126.762 81.0783C126.021 89.9228 121.862 101.658 114.412 109.345C114.887 110.339 115.298 111.351 115.638 112.371C117.463 117.859 117.112 123.15 114.679 127.49Z"
            fill="#D3E883"
          />
          <path
            d="M238.974 262.364L239.372 265.077C227.941 266.755 220.439 270.894 217.071 277.384C212.035 287.091 217.962 299.05 218.024 299.17L215.578 300.41C215.304 299.871 208.952 287.104 214.63 276.138C218.421 268.811 226.612 264.178 238.974 262.364Z"
            fill="#D3E883"
          />
          <path
            d="M226.793 191.042C227.398 187.646 227.366 169.705 227.274 161.159C230.157 162.132 236.997 162.081 241.294 154.09C246.666 144.1 254.954 143.214 258.744 141.624C262.173 144.409 264.356 150.07 257.804 155.582C263.048 160.957 257.115 165.398 251.602 167.026C256.36 171.688 249.904 178.439 243.759 178.519C246.794 185.264 239.11 185.896 234.217 184.408C234.729 188.314 230.374 191.881 226.793 191.042Z"
            fill="#D3E883"
          />
          <path
            d="M137.052 187.625C129.106 191.121 128.648 182.907 129.412 178.363C133.083 177.086 140.977 171.98 151.632 164.998C160.157 159.412 170.193 160.765 174.145 162.139C187.125 166.316 191.493 180.257 192.055 186.706C190.952 188.618 187.372 191.771 181.871 189.082C178.858 199.453 172.753 198.021 170.077 196.009C168.17 198.943 163.017 202.753 157.658 194.518C151.222 199.062 138.606 200.573 137.052 187.625Z"
            fill="#D3E883"
          />
          <path
            d="M189.228 103.32C187.698 104.626 186.659 104.493 186.331 104.263C185.846 104.203 185.218 103.687 186.584 102.1C188.292 100.116 191.978 99.4321 194.532 100.722C196.575 101.754 196.118 103.274 194.987 103.135C193.694 102.976 190.758 102.013 189.228 103.32Z"
            fill="#1F1F1F"
          />
          <path
            d="M218.123 105.903C217.537 105.311 215.402 105.351 214.407 105.445C214.15 104.846 215.005 104.545 215.778 104.234C216.552 103.924 218.491 104.328 218.947 104.462C219.422 104.601 220.282 104.951 220.748 105.17C221.214 105.39 221.5 105.75 221.909 106.45C222.319 107.149 221.678 107.72 221.023 107.72C220.367 107.721 218.855 106.642 218.123 105.903Z"
            fill="#1F1F1F"
          />
          <ellipse
            cx="7.61187"
            cy="9.20623"
            rx="7.61187"
            ry="9.20623"
            transform="matrix(0.996089 0.0822537 -0.0719269 0.997957 185.18 106.204)"
            fill="white"
          />
          <ellipse
            cx="5.15579"
            cy="6.78919"
            rx="5.15579"
            ry="6.78919"
            transform="matrix(0.992278 0.124091 -0.114628 0.993415 187.822 108.98)"
            fill="#272727"
          />
          <ellipse
            cx="2.45133"
            cy="2.42156"
            rx="2.45133"
            ry="2.42156"
            transform="matrix(0.992274 0.124124 -0.114598 0.993419 186.119 109.916)"
            fill="white"
          />
          <ellipse
            cx="6.69611"
            cy="8.04631"
            rx="6.69611"
            ry="8.04631"
            transform="matrix(0.99607 0.0825265 -0.0716457 0.997981 210.201 109.127)"
            fill="white"
          />
          <ellipse
            cx="4.53558"
            cy="5.93376"
            rx="4.53558"
            ry="5.93376"
            transform="matrix(0.992277 0.124094 -0.114626 0.993415 212.527 111.556)"
            fill="#272727"
          />
          <ellipse
            cx="2.15646"
            cy="2.11643"
            rx="2.15646"
            ry="2.11643"
            transform="matrix(0.992274 0.124124 -0.114598 0.993419 211.029 112.372)"
            fill="white"
          />
          <rect
            x="160.183"
            y="223.846"
            width="12.8897"
            height="20.3556"
            rx="6.44483"
            transform="rotate(28.0052 160.183 223.846)"
            fill="#FD8E08"
          />
          <rect
            x="189.816"
            y="226.031"
            width="12.8897"
            height="20.3556"
            rx="6.44483"
            transform="rotate(12.6621 189.816 226.031)"
            fill="#FD8E08"
          />
          <path
            d="M223.652 138.5C224.788 137.904 225.695 135.08 220.847 128.942C219.264 126.938 217.111 125.576 214.891 124.544C211.673 123.048 208.78 121.78 206.679 121.909C204.422 122.286 203.919 123.774 200.412 127.097C196.216 127.236 188.993 127.332 191.689 134.348C198.254 148.851 212.367 147.314 216.544 147.335C219.886 147.352 219.524 145.47 218.925 144.527C217.792 142.785 215.665 138.959 216.219 137.591C219.185 137.464 222.516 139.095 223.652 138.5Z"
            fill="#F85D1C"
          />
          <path
            d="M212.924 134.301C201.357 133.475 198.256 129.496 198.151 127.61C198.036 127.433 198.089 127.032 199.225 126.845C200.645 126.611 202.558 124.972 203.888 123.424C204.952 122.185 205.971 121.968 206.348 122.014C207.431 121.63 211.231 121.861 217.771 125.853C225.946 130.842 225.007 136.022 224.499 136.856C223.99 137.69 221.692 137.735 220.433 136.603C219.174 135.472 215.669 134.637 212.924 134.301Z"
            fill="#FF8D05"
          />
          <path
            d="M210.431 137.839C206.876 138.196 200.291 135.55 197.444 134.182C198.6 135.643 201.358 139.052 203.145 140.999C205.379 143.432 210.346 144.759 211.396 143.447C212.445 142.135 211.783 140.164 210.431 137.839Z"
            fill="#FFCAB3"
          />
          <path
            d="M212.585 137.648L210.266 137.854C213.84 143.674 209.601 143.482 206.208 143.067C210.97 145.77 216.801 145.667 215.827 144.895C215.048 144.278 213.341 139.807 212.585 137.648Z"
            fill="#A76C24"
          />
          <ellipse
            cx="218.06"
            cy="127.722"
            rx="1.55149"
            ry="0.628745"
            transform="rotate(39.3267 218.06 127.722)"
            fill="#FFBC4D"
          />
          <ellipse
            cx="221.168"
            cy="131.432"
            rx="2.26137"
            ry="0.809784"
            transform="rotate(54.8599 221.168 131.432)"
            fill="#FFBC4D"
          />
          <rect
            width="47.1322"
            height="28.8364"
            transform="matrix(0.980749 0.195193 -0.190073 0.981755 255.538 133)"
            fill="#09FB66"
          />
          <path
            d="M255.611 138.1L274.537 154.994L298.837 146.683"
            stroke="#04AF45"
            strokeWidth="2"
          />
        </svg>
        <div
          className={`${VIRFICE_APP_PREFIX}-flex-col ${VIRFICE_APP_PREFIX}-gap-8`}
        >
          <h1 className={`${VIRFICE_APP_PREFIX}-heading`}>Howdy!</h1>
          <p className={`${VIRFICE_APP_PREFIX}-sub-heading`}>
            <strong>Virfice</strong> is here, design, test, and preview
            WooCommerce emails effortlessly.
          </p>
          <Button
            type="primary"
            title="Customize now!"
            link={addParams({ menu: "brand-settings" })}
          />
          {/* https://www.virfice.com/docs */}
        </div>
      </div>
      <div className={`${VIRFICE_APP_PREFIX}-feature-list-wrapper`}>
        <FeatureListItem
          title={"Send test email"}
          Illustration={
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="6" fill="#F4F9E1" />
              <path
                d="M26.7878 41.9522L29.5687 37.5222L61.7505 27.7623L44.6042 46.0511L34.6702 47.8693L26.956 54L26.7897 42.1581L26.7873 42.1533L26.7897 42.1523L26.7873 41.9527L26.7878 41.9522Z"
                fill="#89A31F"
              />
              <path
                d="M60.5487 28.3486L26.9607 42.0821L26.7877 41.9519L16.1504 33.9669L63.2375 26.9999L42.0521 53.4111L34.6701 47.8695L30.1769 44.4967L60.5487 28.3486Z"
                fill="#B5D72D"
              />
            </svg>
          }
        />
        <FeatureListItem
          title={"Live preview"}
          Illustration={
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="6" fill="#F4F9E1" />
              <path
                d="M54.3575 49.6311L26.9837 51.4346L19.2378 26.7135L53.2963 23L54.3575 49.6311Z"
                fill="#8EAA1D"
              />
              <path
                d="M36.5848 52.63L46.5476 51.7685L46.5848 55.2685L36.585 55.7685L36.5848 52.63Z"
                fill="#8EAA1D"
              />
              <path
                d="M22.585 28.7686L52.085 24.7686L54.085 47.2686L27.585 50.2686L22.585 28.7686Z"
                fill="#B5D72D"
              />
              <path
                d="M50.1033 30.2473L60.1024 30.7469L58.0334 46.1373L48.5851 45.6918L50.1033 30.2473Z"
                fill="#89A31F"
              />
              <rect
                x="52.9274"
                y="32.1846"
                width="4"
                height="1"
                transform="rotate(3.71754 52.9274 32.1846)"
                fill="#FFFEFA"
              />
            </svg>
          }
        />
        <FeatureListItem
          title={"Customize"}
          Illustration={
            <svg
              width="46"
              height="39"
              viewBox="0 0 46 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5001 38.5L0.689453 36.313L5.78101 5.02934L23.5001 6.49999L20.5001 38.5Z"
                fill="#89A31F"
              />
              <path
                d="M41.1699 27.2593L27.6934 38.2862L5.2007 12.6496L19.2568 1.31811L41.1699 27.2593Z"
                fill="#B5D72D"
              />
              <path
                d="M45.2532 5.06501L43.9711 21.509L10.6139 18.0162L12.08 0.0899963L45.2532 5.06501Z"
                fill="#B5D72D"
              />
              <path
                d="M15.7364 7.47522L13.685 8.77882L13.1895 10.6896L14.5524 12.1156L16.8751 11.9526L17.8651 9.64893L15.7364 7.47522Z"
                fill="#89A31F"
              />
              <path
                d="M10.6139 18.0162L39.1232 24.8353L35.5691 20.6302L10.6139 18.0162Z"
                fill="#89A31F"
              />
              <path
                d="M26.0475 4.86008L23.9553 16.9066L26.2711 17.9113L28.8844 5.08126L26.0475 4.86008Z"
                fill="#FFFEFA"
              />
              <path
                d="M31.9369 5.50194L30.9645 17.974L33.6672 18.1847L34.8366 5.54532L31.9369 5.50194Z"
                fill="#FFFEFA"
              />
              <path
                d="M38.6835 6.11934L41.042 6.57726L39.7788 18.6612L37.0993 18.7555L38.6835 6.11934Z"
                fill="#FFFEFA"
              />
            </svg>
          }
        />
        <FeatureListItem
          title={"Configuration"}
          Illustration={
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3901 6.9498L21.0433 5.67989L23.9544 -0.00156403L32.4243 2.26628L31.8957 8.58563L35.508 12.3797L41.4439 11.1422L43.7951 21.4768L39.235 23.5828L37.6408 28.5439L40.1144 34.047L33.2745 40.962L29.1354 37.7828L23.2556 39.1929L21.3305 43.6697L11.9605 41.1609L12.1529 36.0311L8.89577 32.1018L2.95673 31.8364L0.47876 22.1076L5.39262 19.7539L6.58059 14.2804L3.77699 9.78941L10.4251 3.64199L15.3901 6.9498Z"
                fill="#B5D72D"
              />
              <path
                d="M27.1693 10.401L14.9446 10.5177L8.49644 21.6972L15.5908 33.1463L28.931 34.1787L34.7636 25.681L34.4736 17.2723L27.1693 10.401Z"
                fill="#89A31F"
              />
              <path
                d="M30.6879 17.6623L23.7178 16.4102L23.4695 15.4185L21.2113 14.0225L19.2641 15.5012L16.6051 14.7124L16.2291 15.8815L18.981 16.6616L19.1342 18.1259L21.7524 18.9569L23.5325 17.8153L30.6251 19.1101L30.6874 17.6641L30.6879 17.6623ZM21.809 17.4956L21.5145 17.7573L20.2973 17.2523L20.2941 17.2199L20.1607 16.1448L21.0946 15.5169L21.2197 15.4322L21.527 15.5933L22.3862 16.0458L22.2467 17.1108L21.809 17.4956Z"
                fill="#FFFEFA"
              />
              <path
                d="M29.1291 22.8592L26.9725 22.3409L27.0517 21.6849L26.7516 21.1439L24.3993 19.9963L22.7028 20.9653L22.3699 21.2089L15.0892 19.4327L14.4941 20.6041L22.3301 22.5192L22.5941 23.7828L25.2252 24.5877L26.5114 23.6072L28.9356 24.1992L29.1277 22.8569L29.1291 22.8592ZM25.112 23.2089L24.9064 23.396L24.8226 23.4739L24.1893 23.2217L23.6 22.9891L23.5968 22.9568L23.4491 21.8837L24.227 21.3459L24.3744 21.2436L24.4976 21.1585L24.8082 21.3145L25.4477 21.6393L25.6732 21.7528L25.5489 22.82L25.1175 23.2104L25.112 23.2089Z"
                fill="#FFFEFA"
              />
              <path
                d="M27.7115 28.3303L20.2323 25.8986L18.7404 23.7432L16.8035 23.9116L16.0882 24.0468L15.8866 24.6307L13.7135 24.0488L13.2805 25.1514L15.6334 25.8996L15.6713 26.5081L17.5946 28.2358L19.5601 27.9018L19.562 27.9023L19.8587 27.397L27.4565 29.7385L27.7138 28.329L27.7115 28.3303ZM18.6512 26.7528L18.0969 26.9332L17.7231 27.0575L17.2763 26.6013L16.8009 26.1196L16.8093 26.0884L17.1098 25.0468L18.2116 24.8359L18.3611 24.807L18.5808 25.0745L18.6134 25.1147L19.1924 25.8269L18.6493 26.7524L18.6512 26.7528Z"
                fill="#FFFEFA"
              />
            </svg>
          }
        />
      </div>
    </Card>
  );
};

export default FeatureBanner;