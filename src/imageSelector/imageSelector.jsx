import characterImage from "/Simpsons-Characters.jpg"
import Test from "/images.jpeg"
import styles from './imageSelector.module.css'
import { useRef, useState } from "react";

function ImageSelector() {
    const targetBoxSizeXPercentage = 0.03
    const targetBoxSizeYPercentage = 0.07
    const targetBoxSize = 50;

    const [targetCordXY, setTargetCoord] = useState(false)
    let imageClickPosition = useRef({x:0,y:0})
    const placeHolderOptions = ["Sideshow Bob", "Homer Simposon", "Apu"]
    const testSpotX = 660;
    const testSpotY = 715;


    const handleEvent = (event) => {

        //notes need to click so its a 50 x 50 grid on original image which it checks, 
        //then the visual need to be scaled by the current size to show how much it takes up
    
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        //placeholder for original image size
        let orginalImageX = 2000;
        let orginalImageY = 959;
        //get scale factor for the original image (e.g 500/1000 = 0.5, original is 0.5 the size of current, orginal/currentsize)
        let scaleX = orginalImageX / event.currentTarget.clientWidth;
        let scaleY = orginalImageY / event.currentTarget.clientHeight;
        //scale the click by the scale factor to find click position in original image
        let posX = x * scaleX
        let posY = y * scaleY;
        //targeting area of the box
        let targetingArea = targetBoxSize / 2
        //scale the width and height of the box to be x = 3% of client width and y = 7%
        let scaledTargetWidth = event.currentTarget.clientWidth * targetBoxSizeXPercentage;
        let scaledTargetHeight= event.currentTarget.clientHeight *  targetBoxSizeYPercentage;

        setTargetCoord({ x: x - (scaledTargetWidth / 2 ), y:y - (scaledTargetHeight / 2 ), width: scaledTargetWidth,height :scaledTargetHeight })

        imageClickPosition.current = {x:posX,y:posY}
        if(posX  > testSpotX - targetingArea && posX < testSpotX + targetingArea){
            console.log("Abu X")
        }
        if(posY  > testSpotY - targetingArea  &&  posY < testSpotY + targetingArea){
            console.log("Abu Y")
        }
        
    
    }

    function evalClick(){
        console.log(imageClickPosition.current.x)
        console.log(imageClickPosition.current.y)
        console.log("send a request to get image data from the server")
    }
    return (
        <>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={characterImage} onClick={handleEvent}></img>
                {targetCordXY ? <> <div className={styles.imageTarget} style={{ top: targetCordXY.y, left: targetCordXY.x, width: targetCordXY.width,height: targetCordXY.height }} >
                    <div className={styles.selectorList}>
                        {placeHolderOptions.map(element => <div  onClick={evalClick} key={element} className={styles.listitem}><p>{element}</p></div> )}
                    </div>
                    </div></> : ""}
            </div>
        </>
    )

}

export default ImageSelector