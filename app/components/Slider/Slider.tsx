"use client";

import React, { useRef } from "react";
import styles from "./Slider.module.scss";
import Image from "next/image";

type SwiperItem = {
    id: number;
    title: string;
    image: string;
};

const Slider = ({ data = [] }: { data?: SwiperItem[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300;
        }
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.carousel} ref={scrollRef}>
                {
                    data.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <Image
                                src={item.image}
                                alt={""}
                                objectFit="cover"
                                className={styles.cardImage}
                                width={300}
                                height={583}
                            />
                        </div>
                    ))
                }
            </div>

            <div className={styles.navigation}>
                <button onClick={scrollLeft}>
                    <Image src={"/icons/leftArrow.svg"} alt="Scroll Left" width={65} height={65} />
                </button>
                <button onClick={scrollRight}>
                    <Image src={"/icons/rightArrow.svg"} alt="Scroll Right" width={65} height={65} />
                </button>
            </div>
        </div>
    );
};

export default Slider;
