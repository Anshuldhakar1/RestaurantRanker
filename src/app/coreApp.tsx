/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import burgerImg from "../assets/burger.png";
import vec1 from "../assets/Vector1.png";

export default function CoreApp() {
    return (
        <div className="frame" id="home">
            
            <div className="group absolute top-0 right-0">
                <img alt="Vector1" className="vector" src={vec1} />
            </div>

            <div className="overlap p-8">

                <nav className="flex justify-between w-full text-center font-normal leading-[normal] tracking-[0] text-black">
                    
                    <div className="mainLogo flex">
                        <div id="rect1" className="bg-[#05ac54] rounded-[12px] w-[70px] h-[70px] grid place-items-center">
                            <img className="w-[50px] h-[50px] object-cover" alt="Burger Image" src={burgerImg} />
                        </div>
                        <label htmlFor="rect1" className="self-center ml-[1.75rem] font-Manjari text-[24px] tracking-[1.20px]">
                            Restaurant Ranker
                        </label>
                    </div>

                    <div className="links font-LuckiestGuy flex items-center gap-[3rem] top-[-0.5rem] relative left-[-8rem] font-normal text-black text-[22px]">
                        <a href="RestaurantRanker/#home" className="">Home</a>
                        <a href="RestaurantRanker/#app" className="">App</a>
                        <a href="#" className="">Share</a>
                    </div>

                </nav>

                <div className="hero grid grid-cols-2 pt-[4.5rem]">
                    <div className="hero-left place-items-center relative pl-[4rem] top-[2rem]">
                        <div className="grid gap-[3.5rem]">
                            <div className="">
                                <span className="yummy relative top-[1rem] font-TrainOne font-normal text-[85px] tracking-[0.85px] whitespace-nowrap">
                                    YUMMY
                                </span>
                                <p className="FOOD h-min font-WendyOne text-black text-[85px] relative top-[-1rem]">
                                    <span className="span">FOOD ! </span>
                                    <span className="text-wrapper-2">&nbsp;</span> 
                                    <span className="font-Lato text-[18px] absolute left-[4px] bottom-[3px]">Your search for the best restaurant is over</span>
                                </p>
                            </div>
                            <div className="discover w-[177px] h-[52px]">
                                <a href="RestaurantRanker/#app" className="block relative w-[175px] h-[52px] bg-[#7f5c48] rounded-[31px] border border-solid border-[#00000061]">
                                    <div className="absolute w-[112px] top-[10px] left-[31px] font-LuckiestGuy font-normal text-[#fef7e7] text-[24px] tracking-[0.24px] leading-[normal] whitespace-nowrap">
                                        Discover
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right place-items-center relative left-[4.8rem] w-min">
                        <div className="noodlesSVG scale-110">
                            <svg width="499" height="474" viewBox="0 0 499 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="chinese-noodles-with-bowl-and-chopsticks-vectorportal 1" filter="url(#filter0_dd_18_21)">
                                <g id="g8">
                                <g id="g10">
                                <path id="path168" fill-rule="evenodd" clip-rule="evenodd" d="M63.1195 394.103H430.414C445.277 394.103 457.435 404.205 457.435 416.552C457.435 428.898 445.277 439 430.414 439H63.1195C48.2568 439 36.0959 428.898 36.0959 416.552C36.0959 404.205 48.2568 394.103 63.1195 394.103Z" fill="#ADDA1A"/>
                                <path id="path170" fill-rule="evenodd" clip-rule="evenodd" d="M167.666 424.866H407.485C417.67 424.866 426.002 417.944 426.002 409.485C426.002 401.024 417.67 394.103 407.485 394.103H167.666C157.483 394.103 149.152 401.024 149.152 409.485C149.152 417.944 157.483 424.866 167.666 424.866Z" fill="#9AC421"/>
                                <path id="path172" fill-rule="evenodd" clip-rule="evenodd" d="M17.4789 11.9119H427.79C433.553 11.9119 438.268 15.8283 438.268 20.6156C438.268 25.4037 433.553 29.321 427.79 29.321H17.4789C11.7154 29.321 7 25.4037 7 20.6156C7 15.8283 11.7154 11.9119 17.4789 11.9119Z" fill="#CC2D23"/>
                                <path id="path174" fill-rule="evenodd" clip-rule="evenodd" d="M22.1664 13.8601H275.165C277.745 13.8601 279.852 15.6122 279.852 17.7533V17.7541C279.852 19.8952 277.745 21.6482 275.165 21.6482H22.1664C19.5882 21.6482 17.4789 19.8952 17.4789 17.7541V17.7533C17.4789 15.6122 19.5882 13.8601 22.1664 13.8601Z" fill="#F04421"/>
                                <path id="path176" fill-rule="evenodd" clip-rule="evenodd" d="M318.734 13.8601H302.048C299.471 13.8601 297.36 15.6122 297.36 17.7533V17.7541C297.36 19.8952 299.471 21.6482 302.048 21.6482H318.734C321.31 21.6482 323.42 19.8952 323.42 17.7541V17.7533C323.42 15.6122 321.31 13.8601 318.734 13.8601Z" fill="#F04421"/>
                                <path id="path178" fill-rule="evenodd" clip-rule="evenodd" d="M48.3609 31.1531H171.345V10.0789H48.3609V31.1531Z" fill="#463D3B"/>
                                <path id="path180" fill-rule="evenodd" clip-rule="evenodd" d="M48.3618 13.8601H171.345V21.6482H48.3618V13.8601Z" fill="#766864"/>
                                <path id="path182" fill-rule="evenodd" clip-rule="evenodd" d="M268.474 218.684C304.899 218.684 334.609 194.004 334.609 163.746C334.609 133.488 304.899 108.809 268.474 108.809C232.049 108.809 202.339 133.488 202.339 163.746C202.339 194.004 232.049 218.684 268.474 218.684Z" fill="#FAB40A"/>
                                <path id="path184" fill-rule="evenodd" clip-rule="evenodd" d="M200.238 230.956C230.186 230.956 254.614 210.665 254.614 185.786C254.614 160.907 230.186 140.616 200.238 140.616C170.289 140.616 145.863 160.907 145.863 185.786C145.863 210.665 170.289 230.956 200.238 230.956Z" fill="#FBCA07"/>
                                <path id="path186" fill-rule="evenodd" clip-rule="evenodd" d="M142.273 226.495C164.548 226.495 182.716 211.403 182.716 192.9C182.716 174.395 164.548 159.302 142.273 159.302C119.997 159.302 101.829 174.395 101.829 192.9C101.829 211.403 119.997 226.495 142.273 226.495Z" fill="#F9DE1C"/>
                                <path id="path188" fill-rule="evenodd" clip-rule="evenodd" d="M244.937 234.05C262.862 234.05 277.482 221.905 277.482 207.014C277.482 192.123 262.862 179.977 244.937 179.977C227.012 179.977 212.391 192.123 212.391 207.014C212.391 221.905 227.012 234.05 244.937 234.05Z" fill="#FAF462"/>
                                <path id="path190" fill-rule="evenodd" clip-rule="evenodd" d="M345.947 209.316C373.1 209.316 395.245 190.919 395.245 168.363C395.245 145.807 373.1 127.411 345.947 127.411C318.794 127.411 296.648 145.807 296.648 168.363C296.648 190.919 318.794 209.316 345.947 209.316Z" fill="#FBCA07"/>
                                <path id="path192" fill-rule="evenodd" clip-rule="evenodd" d="M416.045 229.6C440.561 229.6 460.557 212.989 460.557 192.624C460.557 172.259 440.561 155.648 416.045 155.648C391.529 155.648 371.534 172.259 371.534 192.624C371.534 212.989 391.529 229.6 416.045 229.6Z" fill="#F9DE1C"/>
                                <path id="path194" fill-rule="evenodd" clip-rule="evenodd" d="M333.055 230.956C356.02 230.956 374.748 215.397 374.748 196.322C374.748 177.246 356.02 161.688 333.055 161.688C310.093 161.688 291.363 177.246 291.363 196.322C291.363 215.397 310.093 230.956 333.055 230.956Z" fill="#FAF462"/>
                                <path id="path196" fill-rule="evenodd" clip-rule="evenodd" d="M189.532 344.32H370.421V406.351C370.421 416.681 360.248 425.132 347.813 425.132H212.141C199.707 425.132 189.532 416.681 189.532 406.351V344.32Z" fill="#463D3B"/>
                                <path id="path198" fill-rule="evenodd" clip-rule="evenodd" d="M189.532 344.32H370.421V406.351C370.421 416.681 360.248 425.132 347.813 425.132H219.321C236.27 424.696 252.44 423.443 267.501 421.026C273.474 420.066 277.678 415.802 277.637 410.751C277.595 405.695 273.317 401.48 267.326 400.59C236.211 395.971 210.107 384.979 189.532 366.967V344.32Z" fill="#2F2825"/>
                                <path id="path200" fill-rule="evenodd" clip-rule="evenodd" d="M480.604 223.496C477.147 313.077 388.653 384.818 279.978 384.818C171.301 384.818 82.8067 313.077 79.3514 223.496H480.604Z" fill="#CC2D23"/>
                                <path id="path202" fill-rule="evenodd" clip-rule="evenodd" d="M146.248 254.253H231.729C246.29 254.253 258.202 264.149 258.202 276.243C258.202 288.338 246.29 298.234 231.729 298.234H146.248C131.689 298.234 119.777 288.338 119.777 276.243C119.777 264.149 131.689 254.253 146.248 254.253Z" fill="#F04421"/>
                                <path id="path204" fill-rule="evenodd" clip-rule="evenodd" d="M480.604 223.496C477.147 313.077 388.653 384.818 279.978 384.818C245.852 384.818 213.72 377.74 185.584 365.263C233.106 372.826 277.576 370.054 315.795 357.887C346.813 348.012 364.537 321.748 358.492 294.614C352.447 267.478 324.585 248.22 291.363 248.22H82.5224C80.7514 240.166 79.6761 231.91 79.3514 223.496H480.604Z" fill="#AE2721"/>
                                <path id="path206" fill-rule="evenodd" clip-rule="evenodd" d="M473.938 261.125C464.945 289.146 447.393 314.262 423.747 334.424H136.208C112.561 314.262 95.009 289.146 86.0172 261.125H473.938Z" fill="#463D3B"/>
                                <path id="path208" fill-rule="evenodd" clip-rule="evenodd" d="M473.938 261.125C464.945 289.146 447.393 314.262 423.747 334.424H349.841C358.277 322.897 361.667 308.877 358.492 294.615C355.456 280.981 346.912 269.338 334.947 261.125H473.938Z" fill="#2F2825"/>
                                <path id="path210" fill-rule="evenodd" clip-rule="evenodd" d="M87.528 200.131H472.425C484.841 200.131 495 208.57 495 218.884V218.885C495 229.197 484.841 237.637 472.425 237.637H87.528C75.1128 237.637 64.9541 229.197 64.9541 218.885V218.884C64.9541 208.57 75.1128 200.131 87.528 200.131Z" fill="#F04421"/>
                                <path id="path212" fill-rule="evenodd" clip-rule="evenodd" d="M100.098 206.837H311.598C317.588 206.837 322.489 210.908 322.489 215.885C322.489 220.86 317.588 224.93 311.598 224.93H100.098C94.1091 224.93 89.2085 220.86 89.2085 215.885C89.2085 210.908 94.1091 206.837 100.098 206.837Z" fill="#F25636"/>
                                <path id="path214" fill-rule="evenodd" clip-rule="evenodd" d="M356.502 206.837H343.856C337.867 206.837 332.965 210.908 332.965 215.885C332.965 220.86 337.867 224.93 343.856 224.93H356.502C362.49 224.93 367.391 220.86 367.391 215.885C367.391 210.908 362.49 206.837 356.502 206.837Z" fill="#F25636"/>
                                <path id="path216" fill-rule="evenodd" clip-rule="evenodd" d="M127.071 261.125H250.908C255.423 265.074 258.202 270.402 258.202 276.243C258.202 288.338 246.29 298.234 231.729 298.234H146.248C131.689 298.234 119.777 288.338 119.777 276.243C119.777 270.402 122.557 265.074 127.071 261.125Z" fill="#69605F"/>
                                <path id="path218" fill-rule="evenodd" clip-rule="evenodd" d="M419.793 187.143C425.102 187.143 429.445 190.751 429.445 195.16V263.879C429.445 268.289 425.102 271.896 419.793 271.896C414.485 271.896 410.142 268.289 410.142 263.879V195.16C410.142 190.751 414.485 187.143 419.793 187.143Z" fill="#F9DE1C"/>
                                <path id="path220" fill-rule="evenodd" clip-rule="evenodd" d="M248.83 190.35C252.622 190.35 255.725 192.928 255.725 196.077V255.398C255.725 258.547 252.622 261.125 248.83 261.125C245.04 261.125 241.937 258.547 241.937 255.398V196.077C241.937 192.928 245.04 190.35 248.83 190.35Z" fill="#FAF462"/>
                                <path id="path222" fill-rule="evenodd" clip-rule="evenodd" d="M149.285 182.104H149.286C153.229 182.104 156.455 184.784 156.455 188.061V238.912C156.455 242.186 153.229 244.866 149.286 244.866H149.285C145.342 244.866 142.116 242.186 142.116 238.912V188.061C142.116 184.784 145.342 182.104 149.285 182.104Z" fill="#F9DE1C"/>
                                <path id="path224" fill-rule="evenodd" clip-rule="evenodd" d="M194.478 185.31C197.647 185.31 200.238 187.463 200.238 190.096V226.17C200.238 228.802 197.647 230.956 194.478 230.956C191.309 230.956 188.717 228.802 188.717 226.17V190.096C188.717 187.463 191.309 185.31 194.478 185.31Z" fill="#FBCA07"/>
                                <path id="path226" fill-rule="evenodd" clip-rule="evenodd" d="M340.653 4.57764e-05C344.901 4.57764e-05 348.374 2.88637 348.374 6.41301V137.438C348.374 140.966 344.901 143.851 340.653 143.851C336.407 143.851 332.934 140.966 332.934 137.438V6.41301C332.934 2.88637 336.407 4.57764e-05 340.653 4.57764e-05Z" fill="#FBCA07"/>
                                <path id="path228" fill-rule="evenodd" clip-rule="evenodd" d="M367.676 4.57764e-05C371.924 4.57764e-05 375.397 2.88637 375.397 6.41301V137.438C375.397 140.966 371.924 143.851 367.676 143.851C363.431 143.851 359.955 140.966 359.955 137.438V6.41301C359.955 2.88637 363.431 4.57764e-05 367.676 4.57764e-05Z" fill="#FBCA07"/>
                                <path id="path230" fill-rule="evenodd" clip-rule="evenodd" d="M409.038 6.10352e-05H409.04C413.287 6.10352e-05 416.76 2.88638 416.76 6.41302V174.088C416.76 177.617 413.287 180.502 409.04 180.502H409.038C404.792 180.502 401.319 177.617 401.319 174.088V6.41302C401.319 2.88638 404.792 6.10352e-05 409.038 6.10352e-05Z" fill="#F9DE1C"/>
                                <path id="path232" fill-rule="evenodd" clip-rule="evenodd" d="M17.4789 37.942H427.79C433.553 37.942 438.268 41.8576 438.268 46.6457C438.268 51.433 433.553 55.3494 427.79 55.3494H17.4789C11.7154 55.3494 7 51.433 7 46.6457C7 41.8576 11.7154 37.942 17.4789 37.942Z" fill="#CC2D23"/>
                                <path id="path234" fill-rule="evenodd" clip-rule="evenodd" d="M22.1664 40.8885H275.165C277.745 40.8885 279.852 42.6406 279.852 44.7826C279.852 46.9253 277.745 48.6774 275.165 48.6774H22.1664C19.5882 48.6774 17.4789 46.9253 17.4789 44.7826C17.4789 42.6406 19.5882 40.8885 22.1664 40.8885Z" fill="#F04421"/>
                                <path id="path236" fill-rule="evenodd" clip-rule="evenodd" d="M318.734 40.8885H302.048C299.471 40.8885 297.36 42.6406 297.36 44.7826C297.36 46.9253 299.471 48.6774 302.048 48.6774H318.734C321.31 48.6774 323.42 46.9253 323.42 44.7826C323.42 42.6406 321.31 40.8885 318.734 40.8885Z" fill="#F04421"/>
                                <path id="path238" fill-rule="evenodd" clip-rule="evenodd" d="M48.3609 58.1824H171.345V37.109H48.3609V58.1824Z" fill="#463D3B"/>
                                <path id="path240" fill-rule="evenodd" clip-rule="evenodd" d="M48.3618 40.8885H171.345V48.6774H48.3618V40.8885Z" fill="#766864"/>
                                </g>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_dd_18_21" x="-4" y="0" width="503" height="482" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_21"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_18_21" result="effect2_dropShadow_18_21"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_18_21" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                </div>

                <div className="shareIcon absolute bottom-8 right-8 z-10">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="#805D49"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1641 18.7778C29.1641 16.1391 31.3706 14 34.0924 14C36.8143 14 39.0208 16.1391 39.0208 18.7778C39.0208 21.4165 36.8143 23.5556 34.0924 23.5556C32.7181 23.5556 31.476 23.0099 30.5831 22.132L23.7606 26.6556C23.8236 26.9609 23.8567 27.2763 23.8567 27.5983C23.8567 28.2362 23.7272 28.8459 23.4926 29.4032L30.9734 34.1897C31.8225 33.5164 32.9088 33.1111 34.0924 33.1111C36.8143 33.1111 39.0208 35.2502 39.0208 37.889C39.0208 40.5276 36.8143 42.6667 34.0924 42.6667C31.3706 42.6667 29.1641 40.5276 29.1641 37.889C29.1641 37.1978 29.316 36.5399 29.589 35.9459L22.1687 31.1981C21.3031 31.9307 20.1692 32.3761 18.9283 32.3761C16.2065 32.3761 14 30.237 14 27.5983C14 24.9596 16.2065 22.8205 18.9283 22.8205C20.4935 22.8205 21.8868 23.5277 22.7889 24.6284L29.4009 20.2442C29.2471 19.7815 29.1641 19.2884 29.1641 18.7778Z" fill="#FEF7E7" stroke="black" stroke-width="0.00114"/>
                    </svg>
                </div>                      

            </div>
        </div>
           
    );
}
