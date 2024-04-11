import characterImage from "/Simpsons-Characters.jpg"
import styles from './imageSelector.module.css'
import { useRef, useState } from "react";

function ImageSelector() {
    const [targetCordXY, setTargetCoord] = useState(false)
    let imageClickPosition = useRef({x:0,y:0})
    const placeHolderOptions = ["Sideshow Bob", "Homer Simposon", "Apu"]
    const testSpotX = 660;
    const testSpotY = 715;


    const handleEvent = (event) => {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
    
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        setTargetCoord({ x: x - (((bounds.right) * 0.03) / 2), y:y - ((bounds.bottom * 0.07/2))})
        let imageX = 2000;
        let imageY = 959;
        let posX = imageX * (x / event.currentTarget.clientWidth)
        let posY = imageY * (y / event.currentTarget.clientHeight)
        imageClickPosition.current = {x:posX,y:posY}
        if(posX  > testSpotX - 25  && posX < testSpotX + 25){
            console.log("Abu X")
        }
        if(posY  > testSpotY - 25  &&  posY < testSpotY + 25){
            console.log("Abu Y")
        }
        
    
    }

    function evalClick(){
        console.log(imageClickPosition.current.x)
         console.log(imageClickPosition.current.y)
    }
    return (
        <>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={characterImage} onClick={handleEvent}></img>
                {targetCordXY ? <> <div className={styles.imageTarget} style={{ top: targetCordXY.y, left: targetCordXY.x }} >
                    <div className={styles.selectorList}>
                        {placeHolderOptions.map(element => <div  onClick={evalClick} key={element} className={styles.listitem}><p>{element}</p></div> )}
                    </div>
                    </div></> : ""}
            </div>
        </>
    )

}

export default ImageSelector