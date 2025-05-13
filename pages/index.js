import Layout from '../components/Layout';
import CosmonautSvg from '../public/svgs/Cosmonaut';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
            <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }

      h2 {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 50px;
        margin-bottom: 90px;
        margin-top: 0px;
        color: rgb(116, 175, 217);
        font-family: "Oswald", sans-serif;
      }

      h3 {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 50px;
        margin-bottom: 30px;
        margin-top: 30px;
        color: rgb(24, 46, 61);
        font-family: "Oswald", sans-serif;
      }

      p {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-family: "Oswald", sans-serif;
      }

      .firstParagraph {
        font-size: 30px;
        margin-bottom: 30px;
        margin-top: 0px;
        color: rgb(116, 175, 217);
      }

      .secondParagraph {
        font-size: 30px;
        margin-bottom: 0px;
        margin-top: 20px;
        color: rgb(24, 46, 61);
      }

      .mainContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

      .centered-div {
          display: flex;             
          flex-direction: column;      
          justify-content: center;     
          align-items: center;         
          text-align: center;       
          background-color: rgb(116, 175, 217);
          margin-top: 120px;
          margin-bottom: 100px;
      }

      button {
        padding: 15px 40px 15px 40px;
        border: none;
        border-radius: 25px;
        font-size: 26px;
        cursor: pointer;
        align-self: center;
        text-decoration: none;
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 30px;
      }

      .contactButton {
          background-color: rgb(116, 175, 217);
          color: rgb(24, 46, 61);
        }

      .contactButton:hover {
        background-color: rgb(169, 222, 242);
      }

      .aboutUsButton {
          background-color: rgb(24, 46, 61);
          color: rgb(116, 175, 217);
        }

      .aboutUsButton:hover {
        color: rgb(169, 222, 242);
      }
    `}</style>
      <Layout>
        <section id="home" className="mainContainer">
          <div>
            <h2>We deliver Zalupa <br />Programming on Time!</h2>
            <p className="firstParagraph">
              Fiora Solutions is a youthful and trustworthy company <br />
              That provides reliable, tailored software development <br />
              Services within the context of customer needs. <br />
              We are passionate about our work and genuinely care <br />
              About the results of every project. <br />
            </p>
          </div>
          <CosmonautSvg />
        </section>

        <section className="centered-div">
          <p className="secondParagraph">

          </p>
        </section>

        <section id="services">
          <Services />
        </section>

        <section  id="about">
          <h1>About Us</h1>
          <p>This is the about page of the SPA.</p>
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </Layout>
    </div>
  );
}
