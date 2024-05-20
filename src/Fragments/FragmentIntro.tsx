import copchil from "../assets/images/computer.png";
import rachetutza from "../assets/images/rocket.png";
import "../Styles/StyleIntro.css";

function FragmentIntro() {
  return (
    <>
      <div className="divIntroducere">
        <div className="hayaaa">
          <h1 className="textIntroducere">
            Spatiul on-line este o resursă valoroasă pentru educație și
            dezvoltarea personală a elevilor, iar utilizarea poate contribui
            semnificativ la succesul lor în școală și în viață , este important
            ca elevii să fie învățați să folosească internetul în mod
            responsabil și să fie conștienți de riscurile existente . In
            continuare vom prezenta un ghid cu trei directii eficienta ,
            conduita și securitate online.
          </h1>
          <img src={copchil} className="copchil" />
        </div>
        <img src={rachetutza} className="rachetutza" />
        <h1 className="textSaIncepem">SA INCEPEM !</h1>
      </div>
    </>
  );
}

export default FragmentIntro;
