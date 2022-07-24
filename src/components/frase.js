import styles from './frase.module.css'
function frase() {
    return(
        <div className={styles.frase.Container}>
      <p className={styles.fraseContent}> Meu segundo componente; tão estilo a frase </p>    
        </div>
    )
}
export default frase
