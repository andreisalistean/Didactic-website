import balance from "../assets/images/balance.png";
import clock from "../assets/images/clpck.png";
import tool from "../assets/images/tools.png";
import "../Styles/StyleEfficiency.css";

function FragmentEfficiency() {
  return (
    <>
      <ul>
        <li>
          <h1 className="Text">
            Programarea timpului online este un program echilibrat pentru
            utilizarea internetului, care include timp pentru învățare,
            divertisment și odihnă pentru elevii
          </h1>
          <img className="Img" src={balance} />
        </li>
        <li>
          <img className="Img" src={clock} />
          <h1 className="Text">
            Elevii ar trebui sa fie dechisi la invatare continua si sa se
            adapteze la mediul virtual. Concentrare si focusarea pe perioada
            activităților online trebuie eliminate distragerile și trebuie sa
            facem in asa fel incat elevii sa se concentrează-te asupra
            sarcinilor importante.
          </h1>
        </li>
        <li>
          <h1 className="Text">
            Utilizarea resurselor: Sa folosim instrumentele și resursele online
            în mod inteligent pentru a-ți îmbunătăți cunoștințele și
            abilitățile. Sa se foloseasca aplicatii adaptate la nivelul lor de
            intelrgere
          </h1>
          <img className="Img" src={tool} />
        </li>
      </ul>
    </>
  );
}

export default FragmentEfficiency;
