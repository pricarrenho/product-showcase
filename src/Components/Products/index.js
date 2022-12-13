import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Head } from "../Head";

export const Products = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const getProducts = async () => {
    setError(false);
    setLoading(true);

    try {
      const value = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      if (value.status === 200) {
        const valueJson = await value.json();
        setProducts(valueJson);
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
    getProducts();
  }, []);

  return (
    <section className={styles.products + " animeLeft"}>
      <Head
        title="Product Showcase"
        description="Descrição do site Product Showcase"
      />
      {products?.map((product) => (
        <Link to={`produto/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
      {error && (
        <div className={styles.error}>
          <p>Não foi possível localizar o conteúdo</p>
          <button onClick={getProducts}>Tentar novamente</button>
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
