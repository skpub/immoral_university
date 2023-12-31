import { css } from '@emotion/react'
import imface from '../assets/imface_center.jpg'

export default function Index() {
  return (
    <>
    <div css={css`
      margin: 30px;
    `}>
      <h1 css={css`
        text-align: center;
      `}>
        学長挨拶
      </h1>
      <div css={css`
        display: flex;
        justify-content: center;
        /* align-items: center; */
        align-items: stretch;
        @media screen and (max-width: 767px) {
          flex-direction: column-reverse;
        }
      `}>
        <div css={css`
          margin: 20px;
          flex: 0 0 50%;
          @media screen and (min-width: 1280px) {
            flex: 0 0 70%;
          }
        `}>
          <p>
            新入生の皆さん、インモラル大学へようこそ(150dB)。大学全入時代突入と言われて久しいですが、最近になって
          </p>
          <p>
            「大学は就職予備課程と化しているのではないか。」
          </p>
          <p>
            「成果主義に陥って、基礎研究を蔑ろにして、短期的な利益ばかりを追い求めていないか。」
          </p>
          <p>
            といった非難が各所から出ております。社会の情勢に応じた変化を大学教育に求めるのは正当なことですが、一方で教育機関であるばかりでなく研究機関でもある大学の側面を鑑みれば、こうした状況に手をこまねいてはいられません。
          </p>
          <p>
            「利益を齎すのとは逆に、寧ろ莫大な不利益を社会に齎す大学があってもよいのではないか。」
          </p>
          <p>
            この新構想を実現するため、議会前365日爆音デモを挙行し、政治家に圧力を掛けて濫りに建学したのが、他でもない本学なのです。
          </p>
          <p>
            インモラル大学は、騒音学部、実践ハラスメント学部、狂学部、そしてマナー講師学部からなるインモラル学領域特化大学です。ちなみにマナー講師学部を卒業すると自称マナー講師の称号が得られます。
          </p>
          <p>コンプライアンスを破壊し、マナーを破壊し、モラルを破壊し、しっかり実践技術を身に着けて、社会に羽ばたいて行ってください。4年後を楽しみにしています。</p>
          <p>最後に私の座右の銘を。</p>
          <b>
            <i>
            知性を疎むヒトは刹那の孤独を齎し、知性を愛する人間は永遠の自由を齎す。
            </i>
          </b>
        </div>
        <div css={css`
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-flow: column;
          h3, h4 {
            margin: 0;
          }
          div {
            margin: 10px;
          }
        `}>
          <img src={imface} alt="" css={css`
            max-width: 100%;
            border-radius: 2%;
          `}/>
          <div>
            <h3>インモラル大学学長</h3>
            <h3>兼 騒音学部長</h3>
          </div>
          <div>
            <h4>佐藤 海音</h4>
            <h4>博士(騒音) (インモラル大学) ※</h4>
            <p css={css`
              color: gray;
            `}>※このサイトはジョークで作っています。上記の私のプロフィールは名前と顔以外全て虚偽です。</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
