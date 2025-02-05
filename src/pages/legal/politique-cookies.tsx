import Layout from "../../components/Layout";

export default function PolitiqueCookies() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">Politique des Cookies</h1>
        
        <div className="space-y-8 text-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte qui peut être conservé sur votre ordinateur lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences sur une période donnée, pour que vous n'ayez pas à les réindiquer à chaque fois que vous visitez le site ou naviguez de page en page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Comment utilisons-nous les cookies ?</h2>
            <p>Nous utilisons les cookies pour :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Assurer le bon fonctionnement du site</li>
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic et l'utilisation du site</li>
              <li>Améliorer votre expérience utilisateur</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Types de cookies utilisés</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text-primary">Cookies essentiels</h3>
                <p>Nécessaires au fonctionnement du site, ils ne peuvent pas être désactivés.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Cookies analytiques</h3>
                <p>Nous permettent de comprendre comment vous utilisez le site (pages visitées, temps passé, etc.).</p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Cookies de préférences</h3>
                <p>Permettent de mémoriser vos choix et préférences pour une meilleure expérience.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Gestion des cookies</h2>
            <p>Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour qu'ils les bloquent. Toutefois, dans ce cas, vous devrez peut-être indiquer vous-mêmes certaines préférences chaque fois que vous vous rendrez sur un site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Plus d'informations</h2>
            <p>Pour en savoir plus sur la gestion des cookies, vous pouvez consulter la page d'aide de votre navigateur :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Chrome : <a href="https://support.google.com/chrome/answer/95647" className="text-pink hover:underline">Gérer les cookies</a></li>
              <li>Firefox : <a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox" className="text-pink hover:underline">Protection contre le pistage</a></li>
              <li>Safari : <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" className="text-pink hover:underline">Gérer les cookies</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
