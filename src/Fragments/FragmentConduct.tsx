import harassment from "../assets/images/harassment.png";
import respect from "../assets/images/raspect.png";
import language from "../assets/images/language.png";
import "../Styles/StyleEfficiency.css";

function FragmentConduct() {
  return (
    <>
      <ul>
        <li>
          <h1 className="Text">
            Elevii ar trebui sa nu hartuiasca si sa intimideze in mediul online:
            sa nu tolereze si sa participe la comportamente dăunătoare online.
            Trebuie sa raportam incidentele la persoanele responsabile din
            platforma respectivă.
          </h1>
          <img className="Img" src={harassment} />
        </li>
        <li>
          <img className="Img" src={respect} />
          <h1 className="Text">
            Elevii trebuie sa aiba grija de tonul și conținutul mesajelor pe
            care le trimit online și sa se asigure că acestea sunt adecvate și
            respectuoase. Elevii trebuie sa se respecte reciproc , sa trateaze
            pe ceilalti elevii in online cu politețe și respect, cum ar face în
            viața reală.
          </h1>
        </li>
        <li>
          <h1 className="Text">
            In spațiul virtual navigarea presupune responsabilitate și respect .
            Aceste principii reprezinta esența pentru a beneficia de toate
            beneficiile pe care le oferă tehnologia modernă. Elevii sa fie
            responsabili si sa indepilineasca sarcinile scolare in mod
            corespunzaror. Sa nu perturbe elevii si profesori. Sa foloseasca un
            limbaj adegvat ,sa fie constient de actiunile sale din mediul
            on-line
          </h1>
          <img className="Img" src={language} />
        </li>
      </ul>
    </>
  );
}

export default FragmentConduct;
