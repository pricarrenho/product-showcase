import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Head } from "../Head";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    setError(false);
    setLoading(true);

    try {
      const value = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`
      );
      if (value.status === 200) {
        const valueJson = await value.json();
        setProduct(valueJson);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <section className={styles.product + " animeLeft"}>
      <Head
        title={`Product Showcase | ${product?.nome}`}
        description={`Product Showcase | Esse é um produto: ${product?.nome}`}
      />
      <div>
        <img src={product?.fotos[0].src} alt={product?.fotos[0].titulo} />
      </div>

      <div>
        <h1 className={styles.name}>{product?.nome}</h1>
        <span className={styles.value}>R$ {product?.preco}</span>
        <p className={styles.description}>{product?.descricao}</p>
      </div>

      {error && (
        <div className={styles.error}>
          <p>Não foi possível localizar o conteúdo</p>
          <button onClick={getProduct}>Tentar novamente</button>
        </div>
      )}
      {loading && (
        <div className={styles["lds-spinner"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </section>
  );
};
