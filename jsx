import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, ShieldCheck, Home, PawPrint, Star, Calendar, Gift, Plus, Check, X, ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ES');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState(null);

  const languages = {
    ES: { code: 'ES', name: 'Español', flag: '🇪🇸' },
    EU: { code: 'EU', name: 'Euskara', flag: '🇪🇺' },
    CA: { code: 'CA', name: 'Català', flag: '🇨🇦' },
    EN: { code: 'EN', name: 'English', flag: '🇬🇧' },
    FR: { code: 'FR', name: 'Français', flag: '🇫🇷' },
    DE: { code: 'DE', name: 'Deutsch', flag: '🇩🇪' }
  };

  const translations = {
    header: {
      ES: ['Inicio', 'Únete al Club', 'Para Protectoras', 'Busca a tu Compañero', 'El Club', 'Sobre Nosotros'],
      EU: ['Hasiera', 'Egin zaitez Bazkide', 'Babesleentzat', 'Bilatu zure Laguna', 'Kluba', 'Guri Buruz'],
      CA: ['Inici', 'Uneix-te al Club', 'Per a Protectores', 'Cerca el teu Company', 'El Club', 'Sobre Nosaltres'],
      EN: ['Home', 'Join the Club', 'For Shelters', 'Find your Companion', 'The Club', 'About Us'],
      FR: ['Accueil', 'Rejoignez le Club', 'Pour les Refuges', 'Trouvez votre Compagnon', 'Le Club', 'À Propos'],
      DE: ['Startseite', 'Werden Sie Mitglied', 'Für Tierheime', 'Finde deinen Begleiter', 'Der Club', 'Über uns']
    },
    hero: {
      title: {
        ES: 'La Adopción ha Cambiado. Para Siempre.',
        EU: 'Adoptatzeak Aldatu Egin Da. Betiko.',
        CA: "L'Adopció ha Canviat. Per Sempre.",
        EN: 'Adoption has Changed. Forever.',
        FR: "L'Adoption a Changé. Pour Toujours.",
        DE: 'Adoption hat sich verändert. Für immer.'
      },
      subtitle: {
        ES: 'Bienvenido a CuidamiHuella, el club que transforma el miedo a adoptar en la certeza de haber encontrado a tu compañero ideal. Descubre un proceso seguro, con seguro incluido, y una comunidad que te acompaña para toda la vida.',
        EU: 'Ongi etorri CuidamiHuellara, adoptatzeko beldurra zure lagun ideala aurkitu izanaren ziurtasun bihurtzen duen klubera. Ezagutu prozesu seguru bat, asegurua barne, eta bizitza osorako lagunduko dizun komunitate bat.',
        CA: "Benvingut a CuidamiHuella, el club que transforma la por d'adoptar en la certesa d'haver trobat el teu company ideal. Descobreix un procés segur, amb assegurança inclosa, i una comunitat que t'acompanya per a tota la vida.",
        EN: 'Welcome to CuidamiHuella, the club that transforms the fear of adopting into the certainty of having found your ideal companion. Discover a safe process, with insurance included, and a community that supports you for life.',
        FR: 'Bienvenue chez CuidamiHuella, le club qui transforme la peur d\'adopter en la certitude d\'avoir trouvé votre compagnon idéal. Découvrez un processus sûr, assurance incluse, et une communauté qui vous accompagne pour la vie.',
        DE: 'Willkommen bei CuidamiHuella, dem Club, der die Angst vor der Adoption in die Gewissheit verwandelt, Ihren idealen Begleiter gefunden zu haben. Entdecken Sie einen sicheren Prozess, inklusive Versicherung, und eine Gemeinschaft, die Sie ein Leben lang begleitet.'
      },
      primaryButton: {
        ES: 'Descubre el Club',
        EU: 'Ezagutu Kluba',
        CA: 'Descobreix el Club',
        EN: 'Discover the Club',
        FR: 'Découvrez le Club',
        DE: 'Entdecken Sie den Club'
      },
      secondaryButton: {
        ES: 'Busca a tu Compañero',
        EU: 'Bilatu zure Laguna',
        CA: 'Cerca el teu Company',
        EN: 'Find your Companion',
        FR: 'Trouvez votre Compagnon',
        DE: 'Finde deinen Begleiter'
      }
    },
    valueProp: {
      title: {
        ES: 'Un Club para Todos los que Aman a los Animales',
        EU: 'Animaliak Maite dituzten Guztientzako Klub Bat',
        CA: 'Un Club per a Tots els qui Estimen els Animals',
        EN: 'A Club for Everyone Who Loves Animals',
        FR: 'Un Club pour Tous Ceux qui Aiment les Animaux',
        DE: 'Ein Club für alle, die Tiere lieben'
      },
      adopt: {
        title: {
          ES: '¿Pensando en Adoptar?',
          EU: 'Adoptatzea pentsatzen?',
          CA: 'Pensant a Adoptar?',
          EN: 'Thinking of Adopting?',
          FR: 'Vous Pensez à Adopter ?',
          DE: 'Denken Sie über eine Adoption nach?'
        },
        text: {
          ES: 'Elimina el miedo con nuestra "Experiencia de Acogida". Convive con tu futuro compañero durante 3 semanas de forma segura y toma la decisión más importante de tu vida con el corazón y la cabeza.',
          EU: 'Kendu beldurra gure "Harrera Esperientziarekin". Bizi zure etorkizuneko lagunarekin 3 astez modu seguruan eta hartu zure bizitzako erabakirik garrantzitsuena bihotzarekin eta buruarekin.',
          CA: "Elimina la por amb la nostra \"Experiència d'Acollida\". Conviu amb el teu futur company durant 3 setmanes de forma segura i pren la decisió més important de la teva vida amb el cor i el cap.",
          EN: 'Eliminate fear with our "Foster Experience". Live with your future companion for 3 weeks safely and make the most important decision of your life with your heart and your head.',
          FR: 'Éliminez la peur avec notre "Expérience d\'Accueil". Vivez avec votre futur compagnon pendant 3 semaines en toute sécurité et prenez la décision la plus importante de votre vie avec votre cœur et votre tête.',
          DE: 'Überwinden Sie die Angst mit unserer "Kennenlern-Pflegeerfahrung". Leben Sie 3 Wochen lang sicher mit Ihrem zukünftigen Begleiter und treffen Sie die wichtigste Entscheidung Ihres Lebens mit Herz und Verstand.'
        },
        link: {
          ES: 'Saber más sobre la Experiencia >',
          EU: 'Esperientziari buruz gehiago jakin >',
          CA: "Saber-ne més sobre l'Experiència >",
          EN: 'Learn more about the Experience >',
          FR: 'En savoir plus sur l\'Expérience >',
          DE: 'Mehr über die Erfahrung erfahren >'
        }
      },
      petOwner: {
        title: {
          ES: '¿Ya Tienes Mascota?',
          EU: 'Badaukazu jada maskotarik?',
          CA: 'Ja Tens Mascota?',
          EN: 'Already Have a Pet?',
          FR: 'Vous Avez Déjà un Animal ?',
          DE: 'Haben Sie bereits ein Haustier?'
        },
        text: {
          ES: 'Únete a la comunidad de dueños más comprometida de España. Accede a nuestra red de descuentos, foros con expertos, cadena de favores y mucho más. Dale a tu mascota los beneficios que se merece.',
          EU: 'Egin bat Espainiako jabe konprometituenen komunitatearekin. Sar zaitez gure deskontu-sarean, adituen foroetan, mesede-katean eta askoz gehiago. Eman zure maskotari merezi dituen onurak.',
          CA: "Uneix-te a la comunitat d'amos més compromesa d'Espanya. Accedeix a la nostra xarxa de descomptes, fòrums amb experts, cadena de favors i molt més. Dona-li a la teva mascota els beneficis que es mereix.",
          EN: 'Join the most committed community of pet owners in Spain. Access our network of discounts, expert forums, a mutual support network, and much more. Give your pet the benefits it deserves.',
          FR: 'Rejoignez la communauté de propriétaires d\'animaux la plus engagée d\'Espagne. Accédez à notre réseau de réductions, à nos forums d\'experts, à notre chaîne de faveurs et bien plus encore. Donnez à votre animal les avantages qu\'il mérite.',
          DE: 'Treten Sie der engagiertesten Gemeinschaft von Haustierbesitzern in Spanien bei. Greifen Sie auf unser Netzwerk von Rabatten, Expertenforen, ein Unterstützungsnetzwerk und vieles mehr zu. Geben Sie Ihrem Haustier die Vorteile, die es verdient.'
        },
        link: {
          ES: 'Hazte Socio Amigo >',
          EU: 'Egin zaitez Bazkide Laguna >',
          CA: 'Fes-te Soci Amic >',
          EN: 'Become a Friend Member >',
          FR: 'Devenez Membre Ami >',
          DE: 'Werden Sie Freundesmitglied >'
        }
      }
    },
    process: {
      title: {
        ES: 'Tu Viaje hacia el Compañero Perfecto, en 3 Pasos Seguros',
        EU: 'Zure Lagun Perfekturanzko Bidaia, 3 Pauso Segurutan',
        CA: "El teu Viatge cap al Company Perfecte, en 3 Passos Segurs",
        EN: 'Your Journey to the Perfect Companion, in 3 Safe Steps',
        FR: 'Votre Voyage vers le Compagnon Parfait, en 3 Étapes Sûres',
        DE: 'Ihr Weg zum perfekten Begleiter, in 3 sicheren Schritten'
      },
      steps: [
        {
          title: {
            ES: '1. Únete al Club y Activa tu Pack',
            EU: '1. Egin bat Klubarekin eta Aktibatu zure Paketea',
            CA: '1. Uneix-te al Club i Activa el teu Pack',
            EN: '1. Join the Club & Activate your Pack',
            FR: '1. Rejoignez le Club & Activez votre Pack',
            DE: '1. Treten Sie dem Club bei & Aktivieren Sie Ihr Paket'
          },
          text: {
            ES: 'Por una cuota única de 89€ activas tu "Pack de Bienvenida y Tranquilidad Total". Incluye tu seguro, la desparasitación del animal y un donativo a la protectora.',
            EU: '89€-ko kuota bakar baten truke zure "Ongi Etorri eta Erabateko Lasaitasun Paketea" aktibatzen duzu. Zure asegurua, animaliaren desparasitazioa eta babeslearentzako dohaintza bat barne hartzen ditu.',
            CA: "Per una quota única de 89€ actives el teu \"Pack de Benvinguda i Tranquil·litat Total\". Inclou la teva assegurança, la desparasitació de l'animal i un donatiu a la protectora.",
            EN: 'For a single fee of €89, you activate your "Welcome & Total Peace of Mind Pack". It includes your insurance, the pet\'s deworming, and a donation to the shelter.',
            FR: 'Pour un tarif unique de 89 €, vous activez votre "Pack de Bienvenue & Tranquillité Totale". Il inclut votre assurance, le vermifuge de l\'animal et un don au refuge.',
            DE: 'Für eine einmalige Gebühr von 89 € aktivieren Sie Ihr "Willkommens- & Sorglos-Paket". Es beinhaltet Ihre Versicherung, die Entwurmung des Tieres und eine Spende an das Tierheim.'
          }
        },
        {
          title: {
            ES: '2. Vive la Experiencia de Acogida',
            EU: '2. Bizi Harrera Esperientzia',
            CA: '2. Viu l\'Experiència d\'Acollida',
            EN: '2. Live the Foster Experience',
            FR: '2. Vivez l\'Expérience d\'Accueil',
            DE: '2. Erleben Sie die Pflegeerfahrung'
          },
          text: {
            ES: 'Elige un animal y disfrútalo en casa durante 3 semanas. Descubre su verdadero carácter y si sois el match perfecto, con el apoyo de nuestra comunidad.',
            EU: 'Aukeratu animalia bat eta gozatu etxean 3 astez. Ezagutu bere benetako izaera eta ea bat etortze perfektua zareten, gure komunitatearen laguntzarekin.',
            CA: "Tria un animal i gaudeix-lo a casa durant 3 setmanes. Descobreix el seu veritable caràcter i si sou la parella perfecta, amb el suport de la nostra comunitat.",
            EN: 'Choose a pet and enjoy it at home for 3 weeks. Discover its true character and see if you are the perfect match, with the support of our community.',
            FR: 'Choisissez un animal et profitez-en à la maison pendant 3 semaines. Découvrez son vrai caractère et voyez si vous êtes le match parfait, avec le soutien de notre communauté.',
            DE: 'Wählen Sie ein Tier und genießen Sie es 3 Wochen lang zu Hause. Entdecken Sie seinen wahren Charakter und sehen Sie, ob Sie perfekt zusammenpassen, mit der Unterstützung unserer Gemeinschaft.'
          }
        },
        {
          title: {
            ES: '3. Celebra tu Éxito',
            EU: '3. Ospatu zure Arrakasta',
            CA: '3. Celebra el teu Èxit',
            EN: '3. Celebrate your Success',
            FR: '3. Célébrez votre Succès',
            DE: '3. Feiern Sie Ihren Erfolg'
          },
          text: {
            ES: 'Formaliza una adopción basada en la realidad, no en una corazonada. La firma final con la protectora es solo un trámite para celebrar lo que ya sabes.',
            EU: 'Formalizatu errealitatean oinarritutako adopzio bat, ez susmo batean. Babeslearekin azken sinadura jada dakizuna ospatzeko tramite bat besterik ez da.',
            CA: "Formalitza una adopció basada en la realitat, no en una intuïció. La signatura final amb la protectora és només un tràmit per celebrar el que ja saps.",
            EN: 'Finalize an adoption based on reality, not a hunch. The final signature with the shelter is just a formality to celebrate what you already know.',
            FR: 'Finalisez une adoption basée sur la réalité, pas sur une intuition. La signature finale avec le refuge n\'est qu\'une formalité pour célébrer ce que vous savez déjà.',
            DE: 'Schließen Sie eine Adoption ab, die auf der Realität basiert, nicht auf einer Ahnung. Die endgültige Unterschrift beim Tierheim ist nur eine Formalität, um zu feiern, was Sie bereits wissen.'
          }
        }
      ]
    },
    testimonials: {
      title: {
        ES: 'Las Historias que nos Impulsan',
        EU: 'Bultzatzen Gaituzten Istorioak',
        CA: 'Les Històries que ens Impulsen',
        EN: 'The Stories That Drive Us',
        FR: 'Les Histoires qui nous Animent',
        DE: 'Die Geschichten, die uns antreiben'
      },
      items: [
        {
          quote: {
            ES: 'La "Experiencia de Acogida" fue clave. Descubrimos que necesitábamos un perro tranquilo como Bruno. Sin este proceso, nos habríamos equivocado.',
            EU: 'Harrera Esperientzia gakoa izan zen. Jakin genuen Bruno bezalako txakur lasai bat behar genuela. Prozesu hau gabe, akats egin genukeen.',
            CA: "L'\"Experiència d'Acollida\" va ser clau. Vam descobrir que necessitàvem un gos tranquil com en Bruno. Sense aquest procés, ens hauríem equivocat.",
            EN: 'The "Foster Experience" was key. We discovered we needed a calm dog like Bruno. Without this process, we would have made a mistake.',
            FR: 'L\'"Expérience d\'Accueil" a été déterminante. Nous avons découvert que nous avions besoin d\'un chien calme comme Bruno. Sans ce processus, nous nous serions trompés.',
            DE: 'Die "Pflegeerfahrung" war entscheidend. Wir entdeckten, dass wir einen ruhigen Hund wie Bruno brauchten. Ohne diesen Prozess hätten wir einen Fehler gemacht.'
          },
          author: {
            ES: '— Laura y David, Socios Fundadores y familia de Bruno.',
            EU: '— Laura eta David, sortzaile bazkideak eta Bruno familiakoa.',
            CA: '— Laura i David, socis fundadors i família d\'en Bruno.',
            EN: '— Laura and David, Founding Members and Bruno\'s family.',
            FR: '— Laura et David, Membres Fondateurs et famille de Bruno.',
            DE: '— Laura und David, Gründungsmitglieder und Brunos Familie.'
          }
        },
        {
          quote: {
            ES: 'Tener acceso al foro de expertos nos quitó toda la ansiedad de los primeros días. ¡Es como tener un veterinario en el bolsillo!',
            EU: 'Adituen forora sarbidea izateak egun lehenetako arazoi guztiak kendu zigun. Veterinario bat poltsan edukitzea bezala da!',
            CA: 'Tenir accés al fòrum d\'experts ens va treure tota l\'ansietat dels primers dies. És com tenir un veterinari a la butxaca!',
            EN: 'Having access to the expert forum took away all the anxiety of the first days. It\'s like having a veterinarian in your pocket!',
            FR: 'Avoir accès au forum d\'experts a dissipé toute l\'anxiété des premiers jours. C\'est comme avoir un vétérinaire dans votre poche !',
            DE: 'Der Zugang zum Expertenforum nahm uns alle Ängste der ersten Tage. Es ist, als hätte man einen Tierarzt in der Tasche!'
          },
          author: {
            ES: '— Mikel, Socio Fundador y compañero de Luna.',
            EU: '— Mikel, sortzaile bazkidea eta Luna laguna.',
            CA: '— Mikel, soci fundador i company de Luna.',
            EN: '— Mikel, Founding Member and Luna\'s companion.',
            FR: '— Mikel, Membre Fondateur et compagnon de Luna.',
            DE: '— Mikel, Gründungsmitglied und Lunas Begleiter.'
          }
        },
        {
          quote: {
            ES: 'Me uní como "Socio Amigo" por los descuentos en veterinarias. En un año me he ahorrado más de 100€. Y he encontrado un grupo de paseo para mi perro los domingos. ¡Increíble!',
            EU: 'Bazkide lagun gisa batu nintzen bezeroetarako deskontuengatik. Urte batean 100€ baino gehiago aurreztu dut. Eta igandetan nire txakurraren paseo taldea aurkitu dut. Irudikatzen ez da!',
            CA: 'M\'hi vaig unir com a "Soci Amic" pels descomptes en veterinaris. En un any m\'he estalit més de 100€. I he trobat un grup de passeig per al meu gos els diumenges. Increïble!',
            EN: 'I joined as a "Friend Member" for the discounts on veterinary services. In one year, I saved over €100. And I found a walking group for my dog on Sundays. Incredible!',
            FR: 'Je me suis inscrit en tant que "Membre Ami" pour les réductions sur les services vétérinaires. En un an, j\'ai économisé plus de 100 €. Et j\'ai trouvé un groupe de promenade pour mon chien le dimanche. Incroyable !',
            DE: 'Ich bin als "Freundesmitglied" wegen der Rabatte auf tierärztliche Leistungen beigetreten. In einem Jahr habe ich über 100 € gespart. Und ich habe eine Spaziergruppe für meinen Hund an Sonntagen gefunden. Unglaublich!'
          },
          author: {
            ES: '— Sofía, Socia Amiga y compañera de Coco.',
            EU: '— Sofía, bazkide laguna eta Coco laguna.',
            CA: '— Sofía, soci amic i companya de Coco.',
            EN: '— Sofía, Friend Member and Coco\'s companion.',
            FR: '— Sofía, Membre Amie et compagne de Coco.',
            DE: '— Sofía, Freundesmitglied und Cocos Begleiterin.'
          }
        }
      ]
    },
    shelters: {
      title: {
        ES: '¿Eres una Protectora o Centro de Acogida?',
        EU: 'Babesle edo Harrera Zentro Bat Zarete?',
        CA: 'Ets una Protectora o Centre d\'Acollida?',
        EN: 'Are you a Shelter or Rescue Center?',
        FR: 'Êtes-vous un Refuge ou un Centre d\'Accueil ?',
        DE: 'Sind Sie ein Tierheim oder eine Rettungsstation?'
      },
      text: {
        ES: 'Descubre cómo nuestra plataforma puede ahorrarte horas de trabajo, reducir las devoluciones y generarte una nueva vía de financiación. A coste cero.',
        EU: 'Ezagutu nola gure plataformak lan-orduak aurreztu, itzulketak murriztu eta finantzaketa bide berri bat sor diezazukeen. Zero kostutan.',
        CA: "Descobreix com la nostra plataforma pot estalviar-te hores de feina, reduir les devolucions i generar-te una nova via de finançament. A cost zero.",
        EN: 'Discover how our platform can save you hours of work, reduce returns, and create a new funding stream for you. At zero cost.',
        FR: 'Découvrez comment notre plateforme peut vous faire économiser des heures de travail, réduire les retours et vous créer une nouvelle source de financement. Sans aucun coût.',
        DE: 'Entdecken Sie, wie unsere Plattform Ihnen Stunden an Arbeit sparen, Rückgaben reduzieren und eine neue Einnahmequelle schaffen kann. Kostenlos.'
      },
      button: {
        ES: 'Colabora con Nosotros',
        EU: 'Gurekin Lankidetzan Aritu',
        CA: 'Col·labora amb Nosaltres',
        EN: 'Partner with Us',
        FR: 'Devenez Partenaire',
        DE: 'Werden Sie Partner'
      }
    },
    membership: {
      title: {
        ES: 'El Club para los que Aman de Verdad a sus Animales',
        EU: 'Animaliak Benetan Maite Dituztenentzako Kluba',
        CA: 'El Club per als que Aman de Veritat els seus Animals',
        EN: 'The Club for Those Who Truly Love Their Animals',
        FR: 'Le Club pour ceux qui aiment vraiment leurs animaux',
        DE: 'Der Club für diejenigen, die ihre Tiere wirklich lieben'
      },
      subtitle: {
        ES: 'Tanto si buscas a tu nuevo compañero como si ya lo tienes, CuidamiHuella es el ecosistema de confianza, ahorro y apoyo que necesitas. Elige tu camino para entrar.',
        EU: 'Zure lagun berria bilatzen ari zarenean edo jada baduzuenean, CuidamiHuella zure behar dituzun konfiantza, aurrezpen eta laguntzaren ekosistema da. Hautatu zure bidea sartzeko.',
        CA: "Tant si busques el teu nou company com si ja el tens, CuidamiHuella és l'ecosistema de confiança, estalvi i suport que necessites. Tria el teu camí per entrar.",
        EN: 'Whether you are looking for your new companion or already have one, CuidamiHuella is the ecosystem of trust, savings, and support you need. Choose your path to join.',
        FR: 'Que vous cherchiez votre nouveau compagnon ou que vous en ayez déjà un, CuidamiHuella est l\'écosystème de confiance, d\'économies et de soutien dont vous avez besoin. Choisissez votre chemin pour rejoindre.',
        DE: 'Ob Sie nach Ihrem neuen Begleiter suchen oder bereits einen haben, CuidamiHuella ist das Ökosystem aus Vertrauen, Einsparungen und Unterstützung, das Sie benötigen. Wählen Sie Ihren Weg, um beizutreten.'
      },
      founder: {
        title: {
          ES: 'SOCIO FUNDADOR',
          EU: 'SORTZAILE BAZKIDEA',
          CA: 'SOCI FUNDADOR',
          EN: 'FOUNDER MEMBER',
          FR: 'MEMBRE FONDATEUR',
          DE: 'GRÜNDUNGSMITGLIED'
        },
        for: {
          ES: 'Para los que inician su viaje adoptando con nosotros.',
          EU: 'Gurekin adoptatzen hasi direnentzat.',
          CA: 'Per als que inicien el seu viatge adoptant amb nosaltres.',
          EN: 'For those who start their journey by adopting with us.',
          FR: 'Pour ceux qui commencent leur parcours en adoptant avec nous.',
          DE: 'Für diejenigen, die ihre Reise durch die Adoption mit uns beginnen.'
        },
        price: {
          ES: '89 € (Pago único)',
          EU: '89 € (Ordainketa bakarra)',
          CA: '89 € (Pagament únic)',
          EN: '€89 (One-time payment)',
          FR: '89 € (Paiement unique)',
          DE: '89 € (Einmalzahlung)'
        },
        renewal: {
          ES: '29,90 €/año',
          EU: '29,90 €/urte',
          CA: '29,90 €/any',
          EN: '€29.90/year',
          FR: '29,90 €/an',
          DE: '29,90 €/Jahr'
        },
        benefits: {
          ES: [
            'Acceso a la "Experiencia de Acogida"',
            'Seguro de RC y Accidentes incluido en el Pack',
            'Acceso COMPLETO al Club (Descuentos, Expertos, Comunidad)',
            'Acceso EXCLUSIVO a la "Cadena de Favores" con estatus verificado'
          ],
          EU: [
            '"Harrera Esperientziara" sarbidea',
            'Paketean barne hartutako RC eta Alergia Segurua',
            'Kluba OSOAN SARBITZA (Deskontuak, Adituak, Komunitatea)',
            'BAIETSUN ESTATUA DUEN "Mesede KATEA"-ra SARBITZA EXKLUSIBOA'
          ],
          CA: [
            'Accés a la "Experiència d\'Acollida"',
            'Assegurança de RC i Accidents inclosa al Pack',
            'Accés COMPLET al Club (Descomptes, Experts, Comunitat)',
            'Accés EXCLUSIU a la "Cadena de Favors" amb estat verificat'
          ],
          EN: [
            'Access to the "Foster Experience"',
            'Liability and Accident Insurance included in the Pack',
            'FULL Access to the Club (Discounts, Experts, Community)',
            'EXCLUSIVE Access to the "Favor Chain" with verified status'
          ],
          FR: [
            'Accès à l\'"Expérience d\'Accueil"',
            'Assurance responsabilité civile et accidents incluse dans le Pack',
            'Accès COMPLET au Club (Remises, Experts, Communauté)',
            'Accès EXCLUSIF à la "Chaîne de Faveurs" avec statut vérifié'
          ],
          DE: [
            'Zugang zur "Pflegeerfahrung"',
            'Haftpflicht- und Unfallversicherung im Paket enthalten',
            'VOLLER Zugang zum Club (Rabatte, Experten, Gemeinschaft)',
            'EXKLUSIVER Zugang zur "Gefälligkeiten-Kette" mit verifiziertem Status'
          ]
        },
        button: {
          ES: 'Inicia tu Adopción',
          EU: 'Hasi zure Adoptazioa',
          CA: 'Inicia la teva Adopció',
          EN: 'Start your Adoption',
          FR: 'Commencez votre Adoption',
          DE: 'Beginnen Sie Ihre Adoption'
        }
      },
      friend: {
        title: {
          ES: 'SOCIO AMIGO',
          EU: 'BAZKIDE LAGUNA',
          CA: 'SOCI AMIC',
          EN: 'FRIEND MEMBER',
          FR: 'MEMBRE AMI',
          DE: 'FREUNDES-MITGLIED'
        },
        for: {
          ES: 'Para los que ya tienen mascota y quieren unirse al club.',
          EU: 'Jada maskotarik dituztenentzat eta kluba elkartu nahi dutenentzat.',
          CA: 'Per als que ja tenen mascota i volen unir-se al club.',
          EN: 'For those who already have a pet and want to join the club.',
          FR: 'Pour ceux qui ont déjà un animal de compagnie et souhaitent rejoindre le club.',
          DE: 'Für diejenigen, die bereits ein Haustier haben und dem Club beitreten möchten.'
        },
        price: {
          ES: '39,90 €/año',
          EU: '39,90 €/urte',
          CA: '39,90 €/any',
          EN: '€39.90/year',
          FR: '39,90 €/an',
          DE: '39,90 €/Jahr'
        },
        renewal: {
          ES: '29,90 €/año (¡Tu lealtad tiene premio!)',
          EU: '29,90 €/urte (Zure leialtasuna saria du!)',
          CA: '29,90 €/any (La teva lleialtat té premi!)',
          EN: '€29.90/year (Your loyalty is rewarded!)',
          FR: '29,90 €/an (Votre fidélité est récompensée !)',
          DE: '29,90 €/Jahr (Ihre Loyalität wird belohnt!)'
        },
        benefits: {
          ES: [
            'Acceso COMPLETO a la Red de Descuentos',
            'Acceso COMPLETO a los Foros de Expertos y Comunidad',
            'Posibilidad de acceder a la "Cadena de Favores" tras un proceso de verificación'
          ],
          EU: [
            'Deskontu Sarean OSO SARBITZA',
            'Adituen eta Komunitatearen Foroetan OSO SARBITZA',
            '"Mesede KATEA"-ra sarbidea balidazio-prozesu baten ondoren'
          ],
          CA: [
            'Accés COMPLET a la Xarxa de Descomptes',
            'Accés COMPLET als Fòrums d\'Experts i Comunitat',
            'Possibilitat d\'accedir a la "Cadena de Favors" després d\'un procés de verificació'
          ],
          EN: [
            'FULL Access to the Discount Network',
            'FULL Access to Expert Forums and Community',
            'Possibility to access the "Favor Chain" after a verification process'
          ],
          FR: [
            'Accès COMPLET au Réseau de Remises',
            'Accès COMPLET aux Forums d\'Experts et à la Communauté',
            'Possibilité d\'accéder à la "Chaîne de Faveurs" après un processus de vérification'
          ],
          DE: [
            'VOLLER Zugang zum Rabatt-Netzwerk',
            'VOLLER Zugang zu Experten-Foren und Gemeinschaft',
            'Möglichkeit, nach einem Verifizierungsprozess auf die "Gefälligkeiten-Kette" zuzugreifen'
          ]
        },
        button: {
          ES: 'Hazte Socio Amigo Ahora',
          EU: 'Egin zaitez Bazkide Lagun Orain',
          CA: 'Fes-te Soci Amic Ara',
          EN: 'Become a Friend Member Now',
          FR: 'Devenez Membre Ami Maintenant',
          DE: 'Werden Sie jetzt Freundesmitglied'
        }
      },
      value: {
        title: {
          ES: 'Tu Cuota Anual se Paga Sola. Y Varias Veces.',
          EU: 'Urteko kuota automatikoki ordaintzen da. Hainbat aldiz ere.',
          CA: 'La teva quota anual es paga sola. I diverses vegades.',
          EN: 'Your Annual Fee Pays for Itself. Several Times Over.',
          FR: 'Votre Frais Annuel se Paie Tout Seul. Plusieurs Fois.',
          DE: 'Ihr Jahresbeitrag zahlt sich selbst. Mehrfach.'
        },
        savings: {
          title: {
            ES: 'Ahorra Dinero',
            EU: 'Aurreztu Diru',
            CA: 'Estalvi Dinero',
            EN: 'Save Money',
            FR: 'Économisez de l\'Argent',
            DE: 'Geld sparen'
          },
          text: {
            ES: 'Solo con el seguro de RC obligatorio incluido en tu renovación, ya has recuperado la inversión. Súmale los cientos de euros que te ahorrarás en veterinarios, tiendas y peluquerías.',
            EU: 'RC segurua behartzen duen urteko berrikuntzan barne hartuta, inbertsioa berreskuratu duzu dagoeneko. Gehitu horri ehunak euro aurreztuko dituzun veterinarioetan, denda eta ileapaindegietan.',
            CA: 'Només amb l\'assegurança de RC obligatòria inclosa a la teva renovació, ja has recuperat la inversió. Suma-hi els centenars d\'euros que t\'estalviaràs en veterinaris, botigues i perruqueries.',
            EN: 'Just with the mandatory liability insurance included in your renewal, you have already recovered your investment. Add to that the hundreds of euros you will save on veterinarians, stores, and groomers.',
            FR: 'Avec seulement l\'assurance responsabilité civile obligatoire incluse dans votre renouvellement, vous avez déjà récupéré votre investissement. Ajoutez-y les centaines d\'euros que vous économiserez chez les vétérinaires, magasins et toiletteurs.',
            DE: 'Allein mit der obligatorischen Haftpflichtversicherung, die in Ihrer Verlängerung enthalten ist, haben Sie Ihre Investition bereits zurückerhalten. Addieren Sie dazu die Hunderte von Euro, die Sie bei Tierärzten, Geschäften und Friseuren sparen werden.'
          }
        },
        peace: {
          title: {
            ES: 'Gana Tranquilidad',
            EU: 'Irabazi Lasaitasuna',
            CA: 'Guanya Tranquil·litat',
            EN: 'Gain Peace of Mind',
            FR: 'Gagnez en Sérénité',
            DE: 'Erreichen Sie Ruhe'
          },
          text: {
            ES: 'Con una sola vez que uses nuestra "Cadena de Favores" para una urgencia, o que resuelvas una duda de salud con un experto sin ir a la clínica, la tranquilidad que ganas no tiene precio.',
            EU: 'Gure "Mesede KATEA" erabiliz, behin bakarrik, larrialdi batean edo klinikan joan gabe osasun-ikuspuntu batean aditu baten laguntzarekin arazo bat konponduz, lortzen duzun lasaitasuna preziorik gabea da.',
            CA: 'Amb una sola vegada que utilitzis la nostra "Cadena de Favors" per a una emergència, o que resolis una dubte de salut amb un expert sense anar a la clínica, la tranquil·litat que guanyes no té preu.',
            EN: 'With just one use of our "Favor Chain" for an emergency, or resolving a health question with an expert without going to the clinic, the peace of mind you gain is priceless.',
            FR: 'Avec une seule utilisation de notre "Chaîne de Faveurs" pour une urgence, ou en résolvant une question de santé avec un expert sans aller à la clinique, la sérénité que vous gagnez est inestimable.',
            DE: 'Mit nur einer Nutzung unserer "Gefälligkeiten-Kette" für einen Notfall oder der Lösung einer Gesundheitsfrage mit einem Experten ohne Klinikbesuch ist die Ruhe, die Sie gewinnen, unbezahlbar.'
          }
        },
        community: {
          title: {
            ES: 'Pertenece',
            EU: 'Hartu parte',
            CA: 'Pertany',
            EN: 'Belong',
            FR: 'Appartenez',
            DE: 'Gehören'
          },
          text: {
            ES: 'Encuentra tu "cuadrilla" de paseo, haz nuevos amigos y forma parte de una comunidad que comparte tus valores. El bienestar de tu mascota y el tuyo propio se multiplicarán.',
            EU: 'Aurkitu zure "paseo taldea", egin lagun berriak eta parte hartu balioak partekatzen dituzten komunitate batean. Zure maskotaren eta zure ongizatea biderkatuko dira.',
            CA: 'Troba la teva "cuadrilla" de passeig, fes nous amics i forma part d\'una comunitat que comparteix els teus valors. El benestar de la teva mascota i el teu propi es multiplicaran.',
            EN: 'Find your "walking crew", make new friends, and become part of a community that shares your values. The well-being of your pet and your own will multiply.',
            FR: 'Trouvez votre "équipe de promenade", faites de nouveaux amis et devenez membre d\'une communauté qui partage vos valeurs. Le bien-être de votre animal et le vôtre se multiplieront.',
            DE: 'Finden Sie Ihre "Spaziergangsgruppe", machen Sie neue Freunde und werden Sie Teil einer Gemeinschaft, die Ihre Werte teilt. Das Wohlbefinden Ihres Haustieres und Ihres eigenen wird sich vervielfachen.'
          }
        }
      }
    },
    footer: {
      slogan: {
        ES: 'CuidamiHuella: Zure aztarna zaintzen dugu.',
        EU: 'CuidamiHuella: Zure aztarna zaintzen dugu.',
        CA: 'CuidamiHuella: Protegim la teva empremta.',
        EN: 'CuidamiHuella: We protect your paw print.',
        FR: 'CuidamiHuella: Nous protégeons votre empreinte.',
        DE: 'CuidamiHuella: Wir schützen Ihre Pfote.'
      },
      navigation: {
        ES: ['Inicio', 'Únete al Club', 'Para Protectoras', 'Busca a tu Compañero', 'El Club', 'Sobre Nosotros'],
        EU: ['Hasiera', 'Egin zaitez Bazkide', 'Babesleentzat', 'Bilatu zure Laguna', 'Kluba', 'Guri Buruz'],
        CA: ['Inici', 'Uneix-te al Club', 'Per a Protectores', 'Cerca el teu Company', 'El Club', 'Sobre Nosaltres'],
        EN: ['Home', 'Join the Club', 'For Shelters', 'Find your Companion', 'The Club', 'About Us'],
        FR: ['Accueil', 'Rejoignez le Club', 'Pour les Refuges', 'Trouvez votre Compagnon', 'Le Club', 'À Propos'],
        DE: ['Startseite', 'Werden Sie Mitglied', 'Für Tierheime', 'Finde deinen Begleiter', 'Der Club', 'Über uns']
      },
      legal: {
        ES: ['Aviso Legal', 'Política de Privacidad', 'Política de Cookies', 'Términos y Condiciones'],
        EU: ['Legezko Oharra', 'Pribatutasun Politika', 'Cookie Politika', 'Baldintzak eta baldintzak'],
        CA: ['Avís Legal', 'Política de Privacitat', 'Política de Cookies', 'Termes i Condicions'],
        EN: ['Legal Notice', 'Privacy Policy', 'Cookie Policy', 'Terms and Conditions'],
        FR: ['Avis Légal', 'Politique de Confidentialité', 'Politique des Cookies', 'Conditions Générales'],
        DE: ['Rechtlicher Hinweis', 'Datenschutzrichtlinie', 'Cookie-Richtlinie', 'Allgemeine Geschäftsbedingungen']
      },
      help: {
        ES: ['Contacto', 'Preguntas Frecuentes (FAQ)'],
        EU: ['Harremana', 'Ohiko Galderak (FAQ)'],
        CA: ['Contacte', 'Preguntes Freqüents (FAQ)'],
        EN: ['Contact', 'Frequently Asked Questions (FAQ)'],
        FR: ['Contact', 'Questions Fréquentes (FAQ)'],
        DE: ['Kontakt', 'Häufig gestellte Fragen (FAQ)']
      },
      copyright: {
        ES: '© 2025 CuidamiHuella. Todos los derechos reservados.',
        EU: '© 2025 CuidamiHuella. Eskubide guztiak gordeta.',
        CA: '© 2025 CuidamiHuella. Tots els drets reservats.',
        EN: '© 2025 CuidamiHuella. All rights reserved.',
        FR: '© 2025 CuidamiHuella. Tous droits réservés.',
        DE: '© 2025 CuidamiHuella. Alle Rechte vorbehalten.'
      }
    },
    account: {
      ES: 'Acceder / Mi Cuenta',
      EU: 'Sartu / Nire Kontua',
      CA: 'Accedeix / El Meu Compte',
      EN: 'Login / My Account',
      FR: 'Connexion / Mon Compte',
      DE: 'Anmelden / Mein Konto'
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % translations.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + translations.testimonials.items.length) % translations.testimonials.items.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">CuidaMiHuella</div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {translations.header[currentLanguage].map((item, index) => (
                <a key={index} href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {Object.values(languages).map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                {translations.account[currentLanguage]}
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              {translations.header[currentLanguage].map((item, index) => (
                <a key={index} href="#" className="block text-gray-700 hover:text-emerald-600 font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://placehold.co/1920x1080/4ade80/ffffff?text=Happy+Family+with+Dog')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {translations.hero.title[currentLanguage]}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {translations.hero.subtitle[currentLanguage]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                {translations.hero.primaryButton[currentLanguage]}
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm border border-white/30">
                {translations.hero.secondaryButton[currentLanguage]}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {translations.valueProp.title[currentLanguage]}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 rounded-2xl bg-emerald-50">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {translations.valueProp.adopt.title[currentLanguage]}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {translations.valueProp.adopt.text[currentLanguage]}
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                {translations.valueProp.adopt.link[currentLanguage]}
              </a>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {translations.valueProp.petOwner.title[currentLanguage]}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {translations.valueProp.petOwner.text[currentLanguage]}
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                {translations.valueProp.petOwner.link[currentLanguage]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {translations.process.title[currentLanguage]}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {translations.process.steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {step.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.text[currentLanguage]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {translations.testimonials.title[currentLanguage]}
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6">
                "{translations.testimonials.items[currentTestimonial].quote[currentLanguage]}"
              </blockquote>
              <p className="text-gray-600 font-medium">
                {translations.testimonials.items[currentTestimonial].author[currentLanguage]}
              </p>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Shelters CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {translations.shelters.title[currentLanguage]}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {translations.shelters.text[currentLanguage]}
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
            {translations.shelters.button[currentLanguage]}
          </button>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {translations.membership.title[currentLanguage]}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            {translations.membership.subtitle[currentLanguage]}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Founder Membership */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {translations.membership.founder.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translations.membership.founder.for[currentLanguage]}
                </p>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {translations.membership.founder.price[currentLanguage]}
                </div>
                <div className="text-gray-500">
                  {translations.membership.founder.renewal[currentLanguage]}
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-3">
                  {translations.membership.founder.benefits[currentLanguage].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors">
                {translations.membership.founder.button[currentLanguage]}
              </button>
            </div>
            
            {/* Friend Membership */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {translations.membership.friend.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {translations.membership.friend.for[currentLanguage]}
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {translations.membership.friend.price[currentLanguage]}
                </div>
                <div className="text-gray-500">
                  {translations.membership.friend.renewal[currentLanguage]}
                </div>
              </div>
              
              <div className="mb-6">
                <ul className="space-y-3">
                  {translations.membership.friend.benefits[currentLanguage].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                {translations.membership.friend.button[currentLanguage]}
              </button>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              {translations.membership.value.title[currentLanguage]}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {translations.membership.value.savings.title[currentLanguage]}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {translations.membership.value.savings.text[currentLanguage]}
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {translations.membership.value.peace.title[currentLanguage]}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {translations.membership.value.peace.text[currentLanguage]}
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PawPrint className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {translations.membership.value.community.title[currentLanguage]}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {translations.membership.value.community.text[currentLanguage]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-4">CuidaMiHuella</div>
              <p className="text-gray-400 mb-6">
                {translations.footer.slogan[currentLanguage]}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegación</h3>
              <ul className="space-y-2">
                {translations.footer.navigation[currentLanguage].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {translations.footer.legal[currentLanguage].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Ayuda</h3>
              <ul className="space-y-2">
                {translations.footer.help[currentLanguage].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              {translations.footer.copyright[currentLanguage]}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
