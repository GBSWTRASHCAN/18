import React from "react";
import style from "./Header.module.css";
import Logo from "../../assets/img/logo.png";
import Student from "../../assets/svg/student.svg";
import Teacher from "../../assets/svg/teacher.svg";
import Case from "../../assets/svg/case.svg";
import Group from "../../assets/svg/group.svg";
import Search from "../../assets/svg/search.svg";

const NavItem = ({ href, src, alt, label }) => (
  <li className={style.nav_item}>
    <a href={href} className={style.nav_link} aria-label={label}>
      <img src={src} alt={alt} className={style.svg} aria-hidden="true" />
      <span>{label}</span>
    </a>
  </li>
);

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.header_list}>
          <li>
            <a href="/" aria-label="경소위키 로고">
              <img src={Logo} alt="경소위키 로고" className={style.logo} />
            </a>
          </li>
          <NavItem href="#" src={Student} alt="student_svg" label="학생" />
          <NavItem href="#" src={Teacher} alt="teacher_svg" label="선생님" />
          <NavItem href="#" src={Case} alt="case_svg" label="사건/사고" />
          <NavItem href="#" src={Group} alt="group_svg" label="동아리" />
        </ul>
      </nav>
      <div className={style.search_box}>
        <form action="#" className={style.search_form}>
          <input
            type="text"
            placeholder="검색어를 입력하세요.."
            className={style.search_input}
          />
          <button
            type="submit"
            className={style.search_button}
            aria-label="검색"
          >
            <img src={Search} alt="검색" className={style.search_svg} />
          </button>
        </form>
        <NavItem href="#" src={Student} alt="student_svg" label="로그인" />
      </div>
    </header>
  );
};

export default Header;
