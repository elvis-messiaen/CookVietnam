import styles from "./Recipe.module.scss";
import pho from '../assets/images/recette.jpg'
export default function Recipe() {
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={pho} alt="image pho" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center `}>
                <h3>Phô vietnam</h3>
            </div>
        </div>
    )
}

