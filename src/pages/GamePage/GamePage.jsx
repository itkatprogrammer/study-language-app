import Slider from '../../components/Slider/Slider';
import data from './../../data';
import style from './GamePage.module.scss';

export default function GamePage() {
  return <Slider data={data} className={style.gamePageBox} />;
}
