import styles from "./Card.module.css"
import iconEdit from "./iconEdit.png"
import iconDelete from "./iconDelete.png"

function Card({id, capa, titulo}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}></img>
            <h2>{titulo}</h2>
            
            <div className={styles.botones}>
            <a><img src={iconDelete} alt="Icono Eliminar"></img> Eliminar</a>
            <a><img src={iconEdit} alt="Icono Editar"></img> Editar</a>
            </div>
            
        </div>
    )
}

export default Card