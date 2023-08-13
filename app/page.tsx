import Link from "next/link";
import style from "../styles/home.module.css";

export default async function Home() {
  return (
    <div className={style.home}>
      <div>
        <h1>Hi my name is Ahmad Awji</h1>
      </div>
      <div>
        <Link href="/blog">Check out my blog!</Link>
      </div>
      <div>
        <Link href="/contact">Contact me</Link>
      </div>
    </div>
  );
}
