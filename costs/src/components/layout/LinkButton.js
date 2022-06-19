import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css'

const LinkButton = ({ to, text }) => { // 'to' pra onde vai quando o usuario clicar. 'text' mudar o texto baseado onde eu vou utilizar ele
  return ( 
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
   ); 
}
 
export default LinkButton;