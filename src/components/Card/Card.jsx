
import style from '../Card/Card.module.css';
export default function Card(props) {
  return (
    <div className={style.card}>{props.children}</div>
  )
}
