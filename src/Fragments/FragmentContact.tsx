import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import "../Styles/StyleContact.css";

function FragmentContact() {
  return (
    <>
      <div className="divContact">
        <div className="container">
          <img src={phone} className="iconita" />
          <h1>
            {"   "}Telefon : <a href="0744428561">0744428561</a>
          </h1>
        </div>
        <div className="container">
          <img src={mail} className="iconita" />
          <h1>
            {"   "}Mail :
            <a href="mailto:vasilesalistean@yahoo.com">
              vasilesalistean@yahoo.com
            </a>
          </h1>
        </div>
      </div>
    </>
  );
}

export default FragmentContact;
