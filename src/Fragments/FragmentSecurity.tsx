import thief from "../assets/images/thief.png";
import gossip from "../assets/images/gossip.png";
import fake_news from "../assets/images/fake_news.png";
import rule1 from "../assets/images/rules1.png";
import rule2 from "../assets/images/rules2.png";
import parents from "../assets/images/parents.png";
import "../Styles/StyleEfficiency.css";

function FragmentSecurity() {
  return (
    <>
      <ul>
        <li>
          <h1 className="Text">
            Elevii trebuie sa nu vorbeasca cu necunoscuti , o persoana cunoscuta
            pe Internet poate avea intentii rele, sa nu dea informatii personale
            ,despre numele sau ,scoala la care studiaza si sa aiba grija de
            conturile sale, si sa nu inpartaseasca cu nimeni parolele sale
          </h1>
          <img className="Img" src={thief} />
        </li>

        <li>
          <img className="Img" src={gossip} />
          <h1 className="Text">
            Inainte de aposta ceva in mediul virtual sa se gandeasca ca o va
            vedea toata lumea ,sa nu uite ca internetul este un loc public, in
            cazul in care elevii sunt deranjati de o persoana ,acestia o pot
            bloca si raporta, sa aiba grija pe ce site-uri intra pentru ca pe
            Internet circula multe informatii false si sa ceara ajutor cand se
            simt amenintati pe Inernet
          </h1>
          <img src={fake_news} className="Img" />
        </li>
        <hr></hr>
        <li>
          <img src={rule1} className="ImgFake" />
          <h1 className="Text">
            Sa comunicam pe internet in siguranta este cel mai important lucreu
            pentru elevi. Pentru ca elevul sa foloseasca chat-ul sau să comunice
            online cu alte persoane ar terbui sa urmareasca anumite reguli
          </h1>
          <img className="ImgFake" src={rule2} />
        </li>
        <li>
          <img className="Img" src={parents} />
          <ul className="ulMic">
            <li className="liMic">
              dacă părinții spun că pot folosi chatul și pot trimite mesaje
              online
            </li>
            <li className="liMic">
              elevii vor folosi chatul și vor trimite mesaje doar pe
              website-urile pentru copii care au moderator
            </li>
            <li className="liMic">
              elevul va sa fie verficat de un adult de încredere dacă e sigur să
              trimit un răspuns sau un mesaj unei persoane pe care nu am
              întâlnit-o niciodată
            </li>
            <li className="liMic">
              elevii sa foloseasca nume de înregistrare/utilizator (username)
              care să nu conțină informații despre identitatea lor
            </li>
            <li className="liMic">
              elevii nu vor accepta să se întâlnesca cu cineva pe care l-a
              cunoscut pe Internet fără să fie însoțit de părinți sau de către
              un alt adult în care pot avea încredere.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default FragmentSecurity;
