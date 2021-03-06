import React, {FC} from 'react';
import style from './style.module.scss';
import {Menu} from "./Menu/Menu";
import thePenguins from "../../../assets/img/ThePenguins.png";
import penguin1 from "../../../assets/img/penguin1.png";

export const Home:FC = () =>  {
    return (
        <div className={style.home} id='home'>
            <Menu />
            <div className={style.logos}>
                <img src={thePenguins}
                     alt="the Penguins"
                     className={style.logo_left}
                />
                <img src={penguin1}
                     alt=""
                     className={style.logo_right}
                />

            </div>



        </div>
    );
}


