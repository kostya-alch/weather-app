import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';
interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const time = () => {
   return new Date().toLocaleTimeString()
  }
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block__wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day__name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{new Date().toLocaleTimeString()}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
