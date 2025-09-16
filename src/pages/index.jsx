import Carrossel1 from "@/template/carrossel/carrossel1";
import Carrossel2 from "@/template/carrossel/Carrossel2";
import Carrossel4 from "@/template/carrossel/Carrossel4";
import Carrosel3d from "@/template/carrossel/carrossel3d";
import Carrossel5 from "@/template/carrossel/Carrossel5";

export default function Home() {
  return (
    <div>
      <Carrossel4 />
      <Carrossel5/>
      <Carrosel3d />
      <Carrossel1 />
      <Carrossel2 />
    </div>
  );
}
