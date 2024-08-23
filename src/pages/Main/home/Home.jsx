import { useState } from "react";
import Header from "../../../components/Header/Header";
import style from "./Home.module.css";
import SchoolImage from "../../../assets/img/SchoolImage.png";
import ArrowDown from "../../../assets/svg/arrow_down.svg";
import ArrowRight from "../../../assets/svg/arrow_right.svg";

const TableRow = ({ title, content }) => (
  <div className={style.tableWrap}>
    <div className={style.tableTile}>{title}</div>
    <div className={style.tableContent}>{content}</div>
  </div>
);

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const rows = [
    { title: "교훈", content: "바르게 알고 바르게 행하자" },
    { title: "개교", content: "2021년 03월 01일" },
    { title: "유형", content: "마이스터고등학교" },
    { title: "성별", content: "남녀공학" },
    { title: "형태", content: "공립학교" },
    {
      title: "교목",
      content: "향나무 (성실 근면하며 봉사하는 생활자세를 보여라)",
    },
    {
      title: "교화",
      content: "장미 (아름답고 우아하며 그윽한 향기를 뿜어 사회에 봉사하라)",
    },
    { title: "관할 교육청", content: "경상북도의성교육지원청" },
    { title: "주소", content: "경상북도 의성군 봉양면 봉호로 14" },
  ];

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <main className={style.contentArea}>
          <figure className={style.homeWrap}>
            <div className={style.board}>
              <hgroup className={style.homeTitleWrap}>
                <div>
                  <h1 className={style.homeTitleText}>경소위키:대문 </h1>
                </div>
              </hgroup>
              <div className={style.homeClassify}>
                분류 : <span className={style.homeClassifyTitle}>대문</span>
              </div>
              <main className={style.homeDescriptionWrap}>
                <main className={style.homeDescriptionTextWrap}>
                  <section>
                    <h1 className={style.homeDescriptionText}>
                      여러분이 가꾸어 나가는{" "}
                      <b className={style.homeDescriptionTextHighlight}>
                        역사의 고서
                      </b>
                    </h1>
                    <h2 className={style.homeDescriptionSubText}>
                      <b className={style.homeDescriptionTextHighlight}>
                        경소위키
                      </b>
                      에 오신 것을 환영합니다.
                    </h2>
                  </section>
                  <section className={style.homeDescriptionContents}>
                    <p>
                      경소위키는
                      경북소프트웨어고등학교/경북소프트웨어마이스터고등학교
                      학생이라면누구나 기여할 수 있는 위키입니다.
                      <br />
                      검증되지 않았거나 편향된 내용이 있을 수 있습니다.
                      <br />
                      <span>
                        ※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는
                        문제에 대한 책임은 본인에게 있습니다. 주의해주세요! ※
                      </span>
                    </p>
                  </section>
                </main>
                <main className={style.titleBoxWrap}>
                  <section>
                    <hgroup className={style.titleBoxMainWrap}>
                      <h1 className={style.titleBoxMainTitle}>
                        경북소프트웨어마이스터고등학교
                      </h1>
                      <p className={style.titleBoxMainEngTitle}>
                        Gyeongbuk Software Meister High School
                      </p>
                    </hgroup>
                    <img
                      src={SchoolImage}
                      alt="경소고/경소마고"
                      className={style.schoolImage}
                    />
                    {rows.map((row, index) => (
                      <TableRow
                        key={index}
                        title={row.title}
                        content={row.content}
                      />
                    ))}
                  </section>
                </main>
              </main>
              <div className={style.summaryWrap}>
                <div className={style.accodianMenu} onClick={handleToggle}>
                  <img
                    src={open ? ArrowDown : ArrowRight}
                    alt="toggle_svg"
                    className={style.toggleSvg}
                  />
                  <h3
                    className={`${style.summaryTitle} ${
                      open ? style.titleOpen : style.titleClosed
                    }`}
                  >
                    개요
                  </h3>
                </div>
                <article
                  className={`${style.summaryArticle} ${
                    open ? style.open : ""
                  }`}
                >
                  <p className={style.summaryArticleContent}>
                    환영합니다! 바르게 알고 바르게 행하는
                    경북소프트웨어마이스터고등학교입니다. <br />
                    경북소프트웨어고등학교/경북소프트웨어마이스터고등학교
                    학생이라면 누구나 문서를 편집하고 작성할 수 있습니다. <br />
                    사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서
                    자유롭게 문서를 편집할 수 있습니다.
                    <br />
                    <br />
                    <span style={{ fontWeight: 700 }}>
                      교내의 모든 유/무선 네트워크 정보는 국가정보원
                      『국가·공공기관의 무선망 구축 보안 가이드라인,
                      국가정보보안 기본지침』과, <br /> 교육부
                      『정보보안기본지침』에 따라 대외비로 관리되고 있으니
                      절대로 기재해서는 안 됩니다.
                    </span>
                  </p>
                </article>
              </div>
            </div>
          </figure>
          <aside className={style.sidebar}></aside>
        </main>
      </main>
    </>
  );
};
export default Main;
