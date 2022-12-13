import React from "react";
import styles from "./styles.module.css";
import Photograph from "../../img/contact.jpg";
import { Head } from "../Head";

export const Contact = () => {
  return (
    <section className={styles.contact + " animeLeft"}>
      <Head
        title="Product Showcase | Contato "
        description="Entre em contato"
      />
      <img src={Photograph} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.data}>
          <li>priscillaonil@gmail.com</li>
          <li>(19) 99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};
