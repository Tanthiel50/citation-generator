let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");
let nouveau = document.querySelector("#nouveau");
let dernier = 0;
let nombreAleatoire = 0;


// Tableau de citations
let citations = [
    ["En vérité, la vérité, il n'y a pas de vérité.", "Jean-Claude Van Damne"],
    ["Quand vraiment on a une confiance, on devient confiant.", "Jean-Claude Van Damne"],
    ["Il ne faut pas prendre les gens pour des cons, il y a assez de cons qu'on prend pour des gens.", "Guy Bedos"],
    ["Il faut rire de la mort surtout quand c'est les autres.", "Guy Bedos"],
    ["Il m'est arrivé de prêter l'oreille à un sours. Il n'entendait pas mieux", "Raymond Devos"],
    ["Un jardinier qui sabote une pelouse est un assassin en herbe", "Raymond Devos"],
    ["Est-ce l'oeuf le pere de la poule ou la poule la mère de l'oeuf", "Raymond Devos"],
    [" Si vous cassez un bout de bois en deux, il y a encore deux bouts à chaque bout.", "Raymond Devos"],
    ["Si tu parles à ton eau de Javer pendant que tu fais la vaisselle, elle est moins concentrée.", "Jean-Claude Van Damne"],
    ["The More Time You Spend Awake The More Time You Spend Asleep.", "Jaden Smith"],
    ["Un humoriste c'est un philosophe qui rit jaune...", "Emile Coderre"],
    ["Un humoriste est rarement bien rémunéré. C'est sans doute parce qu'il est impayable", "Vincent Roca"],
    ["Se pencher sur son passé, c'est riquer de tomber dans l'oubli", "Coluche"],
    ["Les aspirations des pauvres ne sont pas très éloignées des réalités des riches.", "Pierre Desproges"],
    ["Une chose est certaine nous approchons sans cesse de plus tard", "Philippe Geluck"],
    ["Si Christophe Colomb n'avait rien découvert, Kennedy serait toujours vivant", "Francis Blanche"],
    ["Il faut une infinie patience pour attendre toujours ce qui n'arrive jamais", "Pierre Dac"],
    ["Pour voir loin, il faut y regarder de près", "Pierre Dac"],
    ["Le succès est le meilleur des somnifères", "Popeck"],
    ["Quand un homme ne dit rien alors que tout le monde parle, on n'entend plus que lui !", "Raymond Devos"]
  ];

  //permet de générer un nombre aléatoire
  function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //Detecter lorsque bouton nouveau est cliqué
nouveau.addEventListener("click", ()=>{
  do {
    nombreAleatoire = genererNombreEntier(citations.length)
  } while (nombreAleatoire==dernier)

  citation.textContent = citations[nombreAleatoire][0];
  auteur.textContent   = citations[nombreAleatoire][1];
  dernier              = nombreAleatoire;
}
); 

