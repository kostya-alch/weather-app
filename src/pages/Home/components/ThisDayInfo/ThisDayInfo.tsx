import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}
export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <div className={s.this__day__info}>
      <div className={s.this__day__info__items}>
        {items.map((item: Item) => {
          return <ThisDayItem key={item.icon_id} item={item} />;
        })}
      </div>
      <img src={cloud} className={s.cloud__img} alt="облако" />
    </div>
  );
};
