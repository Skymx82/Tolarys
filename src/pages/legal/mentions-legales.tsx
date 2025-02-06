import Layout from "../../components/Layout";

export default function MentionsLegales() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Mentions Légales</h1>
        
        <div className="space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Informations légales</h2>
            <p>Le site Tolarys est édité par :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Tolarys</li>
              <li>Micro-entreprise</li>
              <li>Siège social : 4 Avenue de Toulouse, 31270 Cugnaux </li>
              <li>SIRET : En cour d'immatriculation</li>
              <li>Email : contact@tolarys-toulouse.fr</li>
              <li>Directeur de la publication : Mattias Mathevon</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Vercel Inc.</li>
              <li>340 S Lemon Ave #4133</li>
              <li>Walnut, CA 91789</li>
              <li>États-Unis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Liens hypertextes</h2>
            <p>Le site Tolarys peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site Tolarys. Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Responsabilité</h2>
            <p>La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités. Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
