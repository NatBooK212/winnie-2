const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
message.delete()
    var blague = []
    blague[0]= " "
    blague[1] =["Deux gars discutent:",
       "– Tu ferais quoi si aujourd’hui c’était la fin du monde?",
        "– Moi je tirerais tout ce qui bouge et toi ?",
        "– Moi je bougerais pas..." ]
    blague[2]=["Tu connais la blague du chauffeur de bus ?",
        "Moi je sais pas, j’étais à l’arrière…"]
    blague[3]=["Comment on fait pour doubler la valeur d’une Twingo ?",
        "On fait le plein d’essence"]
    blague[4]=["Une femme observe son mari en train de planter un clou.",
        "Quelques minutes après, elle lui dit :",
        "– Tu me fais penser à la foudre.",
        "– Parce que je suis rapide hein ?",
        "– Non, parce que tu ne frappes jamais au même endroit !"]
    blague[5]=["2 paysannes ramassent des patates.", 
        "La première en saisit deux grosses pleines de terre et dit à l’autre :",
        "– Vindiou ! Elles sont comme les couilles de mon mari !",
        "– Aussi grosses ?!",
        "– Non, aussi sales !"]
    blague[6]=["Comment se reproduisent les hérissons ?",
        "En faisant attention."]
    blague[7]=["Quelle est la différence entre les maths et le sexe ?",
        "Les maths : Plus c’est facile et mieux ça rentre.",
        "Le sexe : Plus c’est dur et mieux ça rentre."]
    blague[8]=["Qui est le leader spirituel de tous les roux ?",
        "Le gourou"]
    blague[9]=["2 copains : »Tien, j’ai croisé ta copine hier mais elle ne m’a pas vu ",
        "Oui je sais, elle me l’a dit"]
    blague[10]=["Quel est le point commun entre les maths et le sexe ?",
        "– Plus il y a d’inconnues, plus c’est chaud."]
    blague[11]=["Melon et Melèche jardinent :",
        "Au printemps, Melon taille les haies et Melèche, l’été tond."]
    blague[12]=["Qu’est-ce qui est rose et dur en rentrant, et chaud et mou en ressortant ?",
        "Un Malabar."]
    blague[13]=["Docteur, je crois que j’ai besoin de lunettes.",
        "Oui certainement. Ici c’est une banque."]
    blague[14]=["Lors d’une conférence, un belge demande à Albert Einstein :",
        "– Quelle est la différence entre le temps et l’éternité ?",
        "– Cher Monsieur, je devrais consacrer tout mon temps à vous l’expliquer, et il vous faudrait une éternité pour le comprendre."]
    blague[15]=["Melon et Melaiche étudie l’astronomie.",
        "Quel est leur sujet de recherche ?",
        "Melon observe les comètes et Melaiche le Trou Noir."]
    blague[16]=["Un ingénieur et un physicien profitent du beau temps et décide de faire une promenade en ballon.",
        "Le temps se couvre rapidement, l’ingénieur et le physicien finissent par se perdre complètement dans les nuages.",
        "Par chance, il y a une éclaircie et ils voient quelqu’un au sol. Il lui crient :",
        "   – Où sommes nouuuuuuuuuuuuuus?",
        "Et la personne répond :",
        "   – Dans un balloooooooooooon.",
        "L’ingénieur dit alors au physicien :",
        "   – C’est sûrement un mathématicien qui a répondu.",
        "   – Mais comment le sais-tu ?",
        "   – Il satisfait deux propriétés caractéristiques :",
        "       (1) la réponse est parfaitement exacte ;",
        "       (2) elle est également parfaitement inutile."]
    blague[17]=["Le juge demande à un accusé, pris en flagrant délit du meurtre de son père et de sa mère :",
        "– Qu’avez-vous à dire pour votre défense ?",
        "– Vous n’allez pas condamner un pauvre orphelin ?"]
    blague[18]=["Pourquoi est-ce que les mexicains mangent-ils aux toilettes ?",
        "Parce qu’ils aiment manger épicé"]
    blague[19]=["Au lit, un homme dit tendrement à sa femme :",
        "– J’aimerais bien mettre mon zizi dans ton oreille.",
        "– Pourquoi pas… mais fais gaffe à ce que je ne devienne pas sourde.",
        "– Y’a pas de danger, depuis 30 ans je te le mets dans ta bouche, et jamais tu l’as fermée."]
    blague[20]=["Dans un camping, 3 potes dorment dans une même tente. Au petit matin, ils discutent :",
        "– J’ai rêvé qu’on me caressait le zizi.",
        "– Moi aussi j’ai rêvé de ça !",
        "Le dernier gars, qui a dormi au milieu, dit :",
        "– J’ai rêvé que je faisais du ski de fond…"]
    blague[21]=["Deux coiffeuses discutent :",
        "Alors ça s’arrange tes problèmes de couple ?",
        "Penses-tu… ",
        "Pour émoustiller mon mari, j’avais mis un masque noir et une guêpière.",
        "Quand il est rentré du boulot, il m’a dit :",
        "« Hola Zorro ! On mange quoi ce soir ? »"]
    blague[22]=["Deux auvergnats assistent à une messe.",
         "Arrive le moment où un enfant tend le panier pour la quête. ",
         "Le premier met une pièce de 1 centime. Le deuxième s’avance et dit :",
        "-C’est pour nous deux."]
    blague[23]=["Melon et Melaiche vont à la pêche.",
        "Comment se divisent-ils les tâches ?",
        "Melon prépare sa gaule et Melaiche l’asticot"]
    blague[24]=["C’est l’histoire de Why.",
        "Why est bûcheron,",
        "car depuis tout petit,",
        "Why aime scier (Y-M-C-A)."]
    blague[25]=["C’est l’histoire d’un vieux couple marié depuis 25 ans.",
        "Chaque fois qu’ils font l’amour, l’homme demande à le faire dans le noir.", 
        "La femme accepte, puis un soir, allume la lumière et s’aperçoit que son mari utilise un sextoy.",
        "– Salaud, dire que ça fait depuis 25 ans que tu me fais croire que c’est toi qui me fais l’amour !",
        "– Écoute, je veux bien t’expliquer pour le sextoy, mais toi, faut que tu m’expliques pour les enfants "]
    blague[26]=["Un gynécologue examine une patiente et lui dit :",
        "– Madame, je dois vous avouer que je n’ai jamais vu quelque chose d’aussi grand, d’aussi grand, d’aussi grand…",
        "– Pas besoin de répéter docteur.",
        "– Je ne répète pas, ce sont les échos !"]
    blague[27]=["Des bombardements se succèdent. Où est allé le petit garçon qui se trouvait sur les lieux ?",
        "– Partout."]
    blague[28]=["Un auvergnat dit à sa femme :",
        "– Chérie, mets ton manteau !",
        "– Chouette, tu m’emmènes au restaurant ?",
        "– Non, j’ai coupé le chauffage."]
    blague[29]=["Un prof de physique interroge sa classe d’élèves :",
        "– Quels sont les meilleurs matériaux combustibles ?",
        "Un élève juif lève la main avec excitation :",
        "– Je sais ! Je sais ! Moi Monsieur ! Moi !",
        "– Excellente réponse, et quoi d’autres ?"]
    blague[30]=["Un homme voit sa petite copine faire ses valises. Intrigué, il lui demande :",
        "– Que fais-tu ?",
        "– Je te quitte !",
        "– Je peux savoir pourquoi ??",
        "– Parce que tu es un pédophile !",
        "– Mais comment peux-tu connaître un mot pareil à 10 ans !?"]
    blague[31]=["Qu’est-ce qu’un nord-gasme ?",
        "– C’est un orgasme, mais avec quelqu’un de sa famille."]
    blague[32]=["Pourquoi les hommes ont-ils toujours les jambes écartées lorsqu’ils sont assis?",
        "– Pour aérer leur cerveau"]
    blague[33]=["Un garçon sans bras ni jambes est envoyé dans un camp de vacances par ses parents.",
        "L’animateur propose une activité piscine et l’enfant tronc attend sur le bord. ",
        "Ce dernier s’avance en rampant, saute dans la piscine, nage comme un dauphin et revient tranquille. ",
        "L’animateur devant cette scène lui dit :",
        "– Comment as-tu appris à nager ??",
        "– C’est papa qui m’a appris depuis tout petit. Le plus dur, c’est d’enlever le sac poubelle."]
    blague[34]=["Un enfant atteint d’un cancer en phase terminale demande à sa mère :",
        "– J’aimerais rencontrer Maître Gims.",
        "– Il n’est pas disponible, en revanche tu vas pouvoir rencontrer Johnny Halliday.",
        "– Mais enfin maman, Johnny est mort.",
        "– Oui, je sais."]
    blague[35]=["Qu’est-ce qu’un nordiste sans frères et soeurs ?",
        "– Un malheureux."]
    blague[36]=["Un prêtre entre dans un McDo :",
        "– Bonjour, je voudrais un menu enfant.",
        "– Frites et coca ?",
        "– Juste l’enfant, s’il vous plaît !"]
    blague[37]=["Un enfant entre dans la chambre de ses parents et aperçoit son père en train de se tripoter :",
        "– Dis papa, qu’est-ce tu fais ?",
        "– Je me masturbe et tu feras bientôt pareil.",
        "– Ah bon ? Pourquoi ?",
        "– Je commence à avoir une crampe !"]
    blague[38]=["Quel est le point commun entre un prof et des hémorroïdes ?",
        "– Les deux sortent du corps enseignant."]
    blague[39]=["Blague racontée par un zoophile :",
        "– C’est l’histoire d’un mec qui rentre dans un bar, et s’enfile quelques vers"]
    blague[40]=["Quel est le comble du boulanger ?",
        "– Plus il a de la brioche, moins on voit sa baguette."]
    blague[41]=["Un scatophile, un sadique, un psychopathe, un zoophile, nécrophile et un masochiste croisent un chat.",
    "Le scatophile : « Mangeons donc ses crottes ! »",
    "Le psychopathe : « Oui mais avant, on le tue ! »",
    "Le sadique : « Ok, mais on le torture d’abord ! »",
    "Le zoophile : « D’accord mais on n’oublie pas de lui faire l’amour ! »",
    "Le nécrophile : « Ok mais on lui fait aussi l’amour après l’avoir tué ! »",
    "Tout le monde se tourne vers le maso, et lui dit :",
    "« Et toi, tu veux quoi ? »",
    "Le maso : « miaouuuuuuuuuu »"]
    blague[42]=["Dans une animalerie, un homme demande à un vendeur :",
    "– Je veux un chien de garde pour me défendre.",
    "– Très bien. Je sais ce qu’il vous faut.",
    "Le vendeur ramène un caniche. L’homme lui dit :",
    "– Je ne veux pas un chien de salon, mais un chien de garde !",
    "– Oui mais ce caniche fait du karaté. C’est d’ailleurs son nom.",
    "L’homme étant sceptique, le vendeur lui dit :",
    "– Je vous fais une démo. Karaté, karaté la porte !",
    "Le caniche casse la porte. Le vendeur continue :",
    "– Karaté, karaté la table !",
    "Le caniche casse la table en deux.",
    "Séduit, l’homme prend le chien. Un ami arrive chez lui, et lui dit :",
    "– Alors, il est où ton gros chien terrifiant ?",
    "L’homme lui montre son caniche. Son ami éclate de rire puis lui dit :",
    "– C’est ton chien de garde ? Tu t’es bien fait avoir !",
    "– Non, il fait du karaté.",
    "– Mais bien sûr ! Karaté, karaté mes couilles !"]
    blague[43]=["Un jeune motard postule chez un club de bikers. Le chef lui dit :",
    "« Pour être membre, il faut réussir 3 épreuves :",
    "– D’abord, boire 20 litres de bière ;",
    "– Puis retirer l’aphte du pitbull sous le bar ;",
    "– Enfin, faire l’amour 10 fois à la grand-mère assise là-bas. »",
    "Motivé, le jeune homme commence à ingurgiter les 20 litres de bière.",
    "Complètement ivre, il se dirige vers le pitbull sous le comptoir. ",
    "D’énormes bruits de lutte se produisent entre le jeune et le pitbull qui hurle à la mort pendant des heures.",
    "Le motard ressort, les cheveux ébouriffés, puis demande aux bikers :",
    "– Alors elle est où c’te vieille que je lui retire son aphte ?"]
    blague[44]=["Vous savez pourquoi Valbuena rigole quand il joue au foot ?",
    "Parce que l'herbe lui chatouille les couilles !"]
    blague[45]=["Le viagra c'est comme l'enfer, Satan l'habite"]
    blague[46]=["Les témoins de jehovah c'est comme les couilles, ",
    "ils se baladent toujours par paire et n'ont jamais droit de rentrer"]
    blague[47]=["Pendant l'acte :",
    "Dit moi des chose sale !",
    "La cuisine, la salle de bain..."]
    blague[48]=["-Maman, Maman! Les copains m'disent tous que j'ai une grosse tête, hein que c'est pas vrai ?",
    "- Mais non voyons ! Et puis au lieu de discuter, va donc me chercher 5 kilos depatates à la cave avec ton béret!"]
    blague[49]=["- Maman, maman, je ne veux plus dormir avec mon petit frère.",
    "- Tais-toi! Je t'ai déjà dit qu'on avait pas assez d'argent pour l'enterrer."]
    blague[50]=["- Maman, maman, c'est quoi l'esclavage ?" ,
    "- Tais-toi... Quand tu parles, tu pédales moins vite et la lumière du salonbaisse d'intensité !"]
    blague[51]=["Une petite file va voir son père en pleurant:",
    "- Papa ! Tout le monde se moque demoi à l'école parce que j'ai une grande bouche ! ",
    "Ne les écoute pas, ils disent n'importe quoi ! Allez, prends ta pelle et bois ta soupe !"]
    blague[52]=["Les bonnes mammans te laissent lécher le batteur aprés avoir cuisiné ...",
    "Les meilleurs l'éteignent d'abord !"]
    blague[53]=["- Papa ?",
"- Oui ma chérie ?",
"- C'est quoi l'humour noir",
"- Je sais pas, demande à ta mère !",
"- Mais Papa, Maman est morte !"]
    blague[54]=["- Papa, papa !",
    "- Quoi ?",
"- Je n'aime pas mamie !",
"- Eh bien laisse la sur le bord de ton assiette est mange le reste !"]
    blague[55]=["Momo et Farid sont dans une voiture. Qui conduit ? La police…"]
    blague[56]=[" C’est deux curés dans une église qui vont faire pipi.",
    "Une fois dans les toilettes, le premier dit : ",
    "« Oula ! ton pén*s n’a pas grossi ». ",
    "Le deuxième lui répond :",
    "« Non ! mais c’est suffisant pour rentrer dans du 12 ans. »"]
    blague[57]=[""]
    blague[58]=[""]
    blague[59]=[""]
    blague[60]=[""]
    blague[61]=[""]


var debut = [" ","    Que penses-tu de celle-ci ?","    J'me lance !","    Une blague ? Pourquoi pas !"] 

message.channel.send(debut[Math.floor((Math.random() * 3) + 1)])
var reac = await message.channel.send(blague[Math.floor((Math.random() * 56) + 1)], {tts: true})     
await reac.react("✅") 
await reac.react("❌") 
}


module.exports.help = {
    name:"boutade"
}