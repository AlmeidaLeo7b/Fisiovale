import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // DIAGNÓSTICO: Vamos ver o que o código está enxergando
    console.log("Mudança de rota detectada!");
    console.log("Pathname:", pathname);
    console.log("Hash:", hash);

    if (hash) {
      console.log("Tentando rolar para o ID:", hash);
      
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        
        console.log("Elemento encontrado?", element); // Se der null, o elemento não existe ainda

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Aumentei um pouco o tempo para garantir
      
    } else {
      console.log("Sem hash, indo para o topo.");
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}