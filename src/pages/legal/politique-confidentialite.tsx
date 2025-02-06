import Layout from "../../components/Layout";

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Collecte des informations</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Messages envoyés via le formulaire de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Utilisation des informations</h2>
            <p>Les informations que nous collectons sont utilisées pour :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Communiquer avec vous concernant vos demandes</li>
              <li>Vous fournir les services demandés</li>
              <li>Améliorer notre service client</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Protection des informations</h2>
            <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Vos droits</h2>
            <p>Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact</h2>
            <p>Pour exercer vos droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez nous contacter :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Par email : contact@tolarys-toulouse.fr</li>
              <li>Par courrier : 4 Avenue de Toulouse, 31270 Cugnaux</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
