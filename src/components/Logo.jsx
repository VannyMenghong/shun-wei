import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Logo() {
  return (
    <a className={`${styles.logo}`} href="#" rel="noopener noreferrer">
      <Image
        src="/favicon.jpeg"
        alt="Shun Wei"
        width={50}
        height={50}
        priority
      />
      <h2 style={{'whiteSpace':"nowrap"}}>Shun Wei</h2>
    </a>
  );
}

export default Logo;
