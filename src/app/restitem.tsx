import { useState } from "react";
import star1 from "../assets/starEmpty.png";
import star2 from "../assets/starFilled.png";

import appModuleStyles from "./app.module.css";

interface RestItemProps {
    name: string,
    rating: number,
    delivery: string,
    opens: string
}

export const RestItem = (props: RestItemProps) => { 

    const [liked, setLiked] = useState(false);

    function getRandomItem(arr: string[]) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const isOpen: string[] = ["Yes", "no", "no", "no", "Yes", "Yes"];
    
    const isOpenClass = getRandomItem(isOpen) === "Yes" ? appModuleStyles.isOpenYes : appModuleStyles.isOpenNo;

    return (
        <div id={props.name}
            className={`
                ${appModuleStyles.outerWrapper} w-[389px] h-[105px] bg-white rounded-[10px] 
                shadow-[0px_0px_7px_#00000040]  font-Manjari p-[.8rem] pl-[1.5rem]`}
        >

            <div className="inner grid grid-rows-3">

                <div className="row1 flex justify-between">

                    { 
                        <img
                            src={ !liked ? star1 : star2 } 
                            alt="liked-star"
                            onClick={() => { setLiked(p => !p) }}
                            className="w-[18px] h-[18px] cursor-pointer"
                        />
                    }
                    

                    <label htmlFor={props.name}
                        className={` ${appModuleStyles.opens} ${isOpenClass}
                    font-bold text-[#878787] text-[15px]`}
                    >Opens {props.opens}</label>
                </div>

                <div className="row2 mb-[.2rem]">
                    <label htmlFor={props.name} className="font-bold text-[16px]">{props.name}</label>
                </div>

                <div className="row3 flex justify-between">
                    <div className={`${appModuleStyles.rating} tracking-tighter`}>{props.rating}</div>
                    <div className="
                        delivery font-bold text-[#151515] text-[14px]
                        whitespace-nowrap"
                    >{props.delivery}m</div>
                </div>

            </div>

        </div>
    );
};