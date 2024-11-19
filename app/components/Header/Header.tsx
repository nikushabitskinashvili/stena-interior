import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
const Header = () => {
    return (

        <div className={styles.container}>

            <Image src={"/icons/headerLogo.svg"} alt={"logo "} width={195} height={50} />


            <div className={styles.headerLinks}>
                <ul>
                    <li>
                        <Link href={"#"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Categories</Link>
                    </li>
                    <li>
                        <Link href={"#"}>About</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Contacts</Link>
                    </li>
        
                </ul>
            </div>

            <div className={styles.headerSocial}>
                <Image src={"/icons/mail.svg"} alt={"mail"} width={30} height={30} />
                <Image src={"/icons/bar.svg"} alt={"bar"} width={30} height={30} />
            </div>
        </div>
    )
}

export default Header