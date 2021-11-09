import React, { useEffect } from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import s from './Header.module.scss';
import { useTheme } from '../../hooks/useTheme';

interface Props {}

export const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Нижний Новгород' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === 'dark' ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === 'dark' ? 'dark' : 'light',
    }),
  };
  const changeTheme = () => {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];
    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme.theme})`
      );
    });
  }, [theme.theme]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Погода Кости</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};
