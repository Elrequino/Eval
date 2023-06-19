window.addEventListener('DOMContentLoaded', (event) => {
    const boutonBlague = document.getElementById('blagueBtn');
    const blagueAffichee = document.getElementById('blague');
  
    boutonBlague.addEventListener('click', () => {
      const blagues = [
            "Quelle est la femelle du hamster? L'Amsterdam.",
            "Que dit un oignon quand il se cogne ? Aïe.",
            "Quel est l'animal le plus heureux ? Le hibou, parceque sa femme est chouette.",
            "Pourquoi le football c'est rigolo ? Parce que Thierry en rit",
            "Quel est le sport le plus fruité ? La boxe , parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
            "Que se fait un schtroumpf quand il tombe ? Un bleu.",
            "Quel est le comble pour un marin ? D'avoir le nez qui coule.",
            "Qu'est ce que les enfants usent le plus à l'école ? Le professeur !",
            "Quel est le sport le plus silencieux ? Le para-chuuuute !",
            "Quel est le comble pour un joueur de bowling ? De perdre la boule."
      ];
      
      const index = Math.floor(Math.random() * blagues.length);
      const blague = blagues[index];
      
      blagueAffichee.textContent = blague;
    });
  });
  