import Slider from '../../components/Slider/Slider';
import data from './../../data';
import style from './GamePage.module.scss';
import { useContext } from 'react';
import { WordContext } from '../../context/WordContext';

export default function GamePage() {
  const { words } = useContext(WordContext);

  return <Slider data={words} className={style.gamePageBox} />;
}
