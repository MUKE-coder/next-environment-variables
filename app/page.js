import Image from "next/image";
import styles from "./page.module.css";
import getCoins from "./lib/getCoins";
export default async function Home() {
  const {
    data: { coins },
  } = await getCoins();
  // console.log(coins);
  return (
    <main>
      <div className="coins">
        {coins.map((coin) => {
          return (
            <div key={coin.uuid}>
              <h3>{coin.name}</h3>
              <Image
                src={coin.iconUrl}
                width={60}
                height={60}
                alt={coin.name}
              />
            </div>
          );
        })}
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0eu4_lLFkGk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}
