import { sliderData } from "@/data";
import Slider from "../Slider/Slider";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerTxt}>
                <h2>Minimalisn at its finest.</h2>
                <div className={styles.containerTxtWrapper}>
                    <div className={styles.line}></div>
                    <span>shop all</span>
                </div>
            </div>

            <div className={styles.slider}>

                <Slider data={sliderData} />
            </div>

        </div>
    )
}

export default Hero