import Layout from "../../components/Layout";

export default function CGV() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">Conditions Générales de Vente</h1>
        
        <div className="space-y-8 text-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">1. Objet</h2>
            <p>Les présentes conditions générales de vente régissent les relations contractuelles entre Tolarys et ses clients. Toute commande implique l'acceptation sans réserve par le client des présentes conditions générales de vente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">2. Services</h2>
            <p>Tolarys propose des services de développement web et mobile, incluant :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Création de sites web</li>
              <li>Développement d'applications mobiles</li>
              <li>Maintenance et support technique</li>
              <li>Conseil et formation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">3. Prix et paiement</h2>
            <p>Les prix sont indiqués en euros et hors taxes. Le paiement s'effectue selon les modalités suivantes :</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>30% à la commande</li>
              <li>40% au développement</li>
              <li>30% à la livraison</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">4. Délais de livraison</h2>
            <p>Les délais de livraison sont donnés à titre indicatif. Tout retard raisonnable dans la livraison des services ne pourra pas donner lieu au profit du client à l'allocation de dommages et intérêts ou à l'annulation de la commande.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">5. Propriété intellectuelle</h2>
            <p>Le transfert de propriété des droits d'auteur et autres droits de propriété intellectuelle n'est effectif qu'après le paiement complet du prix convenu. Jusqu'à ce moment, le client bénéficie d'une licence d'utilisation temporaire.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">6. Garantie et maintenance</h2>
            <p>Tolarys s'engage à corriger toute anomalie de fonctionnement pendant une période de 3 mois après la livraison. Cette garantie ne couvre pas les modifications demandées par le client après la livraison.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">7. Responsabilité</h2>
            <p>La responsabilité de Tolarys ne pourra être engagée qu'en cas de faute ou de négligence prouvée et sera limitée aux préjudices directs à l'exclusion de tout préjudice indirect, de quelque nature que ce soit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">8. Résiliation</h2>
            <p>En cas de manquement par l'une des parties à l'une de ses obligations, le contrat pourra être résilié de plein droit 30 jours après l'envoi d'une mise en demeure restée sans effet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">9. Droit applicable</h2>
            <p>Les présentes conditions générales sont soumises au droit français. Tout litige relatif à leur interprétation et leur application relève de la compétence exclusive des tribunaux de Toulouse.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
