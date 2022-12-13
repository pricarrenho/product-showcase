import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
