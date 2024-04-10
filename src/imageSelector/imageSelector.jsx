import characterImage from "/Simpsons-Characters.jpg"
import styles from './imageSelector.module.css'
import { useState } from "react";

function ImageSelector() {
    const [targetCordXY, setTargetCoord] = useState(false)
    const placeHolderOptions = ["Sideshow Bob", "Homer Simposon", "Apu"]

    const handleEvent = (event) => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
        
    //   const height =
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight
    
    //   const scrolled = winScroll / height
      

        // console.log(document.documentElement.scrollTop)
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        setTargetCoord({ x: event.clientX - 25, y: event.clientY - 25 + winScroll})
        let imageX = 2000;
        let imageY = 959;
        let posX = imageX * (x / event.currentTarget.clientWidth)
        let posY = imageY * (y / event.currentTarget.clientHeight)
        console.log(posX)
        console.log(posY)
        console.log(x / event.currentTarget.clientWidth)
        console.log(y / event.currentTarget.clientHeight)
    
    }

    return (
        <>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={characterImage} onClick={handleEvent}></img>
                {targetCordXY ? <> <div className={styles.imageTarget} style={{ top: targetCordXY.y, left: targetCordXY.x }} >
                    <div className={styles.selectorList}>
                        {placeHolderOptions.map(element => <div className={styles.listitem}><p>{element}</p></div> )}
                    </div>
                    </div></> : ""}
            </div>
        </>
    )

}

export default ImageSelector