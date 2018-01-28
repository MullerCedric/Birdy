#Birdy
##Fonctionnalités de l'application
- [x] Inscription
    - [x] Avec le système d'authentification de firebase
    - [x] Vérifie dans la base de donnée si le numéro d'ISN est bien parmi ceux disponibles
    - [x] Ajoute des infos dans la base de donnée en plus de la création du compte dans le système d'authentification
- [x] Connexion/Déconnexion
- [x] Navigation
    - [x] Navigations imbriquées (StackNavigator > TabNavigator > StackNavigator)
    - [x] Tab personnalisés avec un component custom (swipe pour changer de tab)
- [x] Encyclopédie
    - [x] Liste des oiseaux enregistrés dans la base de donnée (3)
    - [x] Au clic, détail sur cet oiseau
        - [x] Affichage d'une image selon une regex (https et extensions contrôllées)
    - [x] Remplacement automatique des champs vide par une phrase définie
- [x] Affichage de toutes les listes de captures enregistrées dans la base de données
    - [x] Précision de la date de création selon un timestamp et de l'utilisateur est le créateur de la liste
    - [x] Pull to refresh
    - [x] Filtre disponible via un switch pour n'afficher que ses listes
    - [x] Au clic, visualisation de la liste et modification/suppression possible de la liste (suppression avec confirmation requise) si la liste ocnsultée a été crée par l'utilisateur
- [x] Ajout d'une nouvelle liste de capture
    - [x] Bouton de géolocalisation pour faciliter l'ajout de coordonées
    - [x] Ajout d'un nombre illimité d'oiseaux pour une même liste
    - [x] Un oiseau = un menu déroulant pour s'y retrouver plus facilement lorsqu'il y a plusieurs oiseaux, et pouvoir revenir dessus à tout moment

##Dépendances
- react-native-permission
    - Pour permettre la géolocalisation
- react-navigation
    - Le système de navigation recommandé dans la doc officielle de react-native
- firebase
    - Pour le côté back-end
- lodash
    - Pour faciliter la gestion des FlatList
- redux & react-redux
- redux-thunk (middelware)

##Bon à savoir
- Firebase refuse les mot de passe de moins de 6 caractères
- Reload le simulateur (_RR_) empêche parfois le bouton de localisation à fonctionner
- Sur certains émulateurs Android (dont le mien), firebase crée des _warning_ régulièrement. D'après Google, on ne peut rien y faire à part rendre les warnings invisibles (ce que j'ai choisi de ne _pas_ faire)
- Voici la liste des numéros d'ISN qui sont disponnibles actuellement
    - AI84BP
    - PQ41LC
    - MB11XO
    - QI78AO
    - FA57SQ
    - GN63RE
    - RP15KL
    - BJ49FO
    - JS72DZ
    - OI20WS

##Test
N'ayant pas les moyens financiers pour un bon ordinateur, je n'ai pu tester que sur un simulateur android.

Cela m'a semblé être un réel handicap durant le travail, mais à force de temps et de patience, j'ai réussi à mener à bien ce projet

Configuration de mon simulateur :
- Nexus One
- API 25
- Android 7.1.1
- 2Go de RAM

##Firebase
Ci-dessous, voici l'export __JSON__ de ma base de donnée firebase

Vous remarquerez que les oiseaux des listes de captures sont des objets imbriqués dans la liste

```json
{
  "encyclopedia" : [ {
    "commonName" : "Martin-pêcheur d'Europe",
    "description" : "Le Martin-pêcheur d'Europe (Alcedo atthis) est une espèce d'oiseau, espèce type de la famille des Alcedinidae. Cet oiseau est un bon indicateur naturel de la qualité d'un milieu aquatique",
    "family" : "Alcedinidae",
    "flightType" : "",
    "food" : "Petits poissons et de petits animaux aquatiques",
    "habitats" : "Falaises calcaires ou sédimentaires, et abords des étendues d'eau",
    "height" : "Environ 16cm",
    "latinName" : "Alcedo atthis",
    "lifespan" : "",
    "location" : "",
    "nestingPlaces" : "Pentes escarpées et meubles dans lesquelles il peut facilement creuser son terrier",
    "pictures" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/290px-Common_Kingfisher_Alcedo_atthis.jpg",
    "voice" : "",
    "weight" : "Environ 40g",
    "wingspan" : ""
  }, {
    "commonName" : "Flamant nain",
    "description" : "Le Flamant nain (Phoeniconaias minor) est une espèce d'oiseaux qui se rencontre depuis l’Afrique (principalement dans la grande vallée du Rift) jusqu’en Inde. C’est le plus petit et le plus nombreux des flamants, comptant probablement jusqu’à un ou deux millions et demi d’individus.",
    "family" : "Phoenicopteridae",
    "flightType" : "",
    "food" : "Cyanobactéries",
    "habitats" : "Lacs",
    "height" : "De 80 à 90cm",
    "latinName" : "Phoeniconaias minor",
    "lifespan" : "",
    "location" : "",
    "nestingPlaces" : "Lac Natron en Tanzanie",
    "pictures" : "",
    "voice" : "",
    "weight" : "De 1.2 à 2.7kg",
    "wingspan" : "De 90 à 105cm"
  }, {
    "commonName" : "Colibri d'Elena",
    "description" : "Le Colibri d'Elena (Mellisuga helenae), ou colibri-abeille, est une espèce d'oiseau de la famille des Trochilidae. Ce nom lui a été donné en l'honneur d'Elena Booth, l'épouse d'un ami de Juan Gundlach, célèbre naturaliste allemand qui a séjourné pendant plusieurs années à Cuba.",
    "family" : "Trochilidae",
    "flightType" : "",
    "food" : "Nectar et petits insectes",
    "habitats" : "Bois, marécages, massifs d’arbustes et jardins",
    "height" : "De 5 à 6cm",
    "latinName" : "Mellisuga helenae",
    "lifespan" : "",
    "location" : "À Cuba et sur l’île de la Jeunesse",
    "nestingPlaces" : "Nid placé sur une branche en hauteur",
    "pictures" : "",
    "voice" : "",
    "weight" : "De 1,6 à 2,6g",
    "wingspan" : ""
  } ],
  "isn-number" : {
    "AI84BP" : "AI84BP",
    "BJ49FO" : "BJ49FO",
    "FA57SQ" : "FA57SQ",
    "GN63RE" : "GN63RE",
    "JS72DZ" : "JS72DZ",
    "MB11XO" : "MB11XO",
    "OI20WS" : "OI20WS",
    "PQ41LC" : "PQ41LC",
    "QI78AO" : "QI78AO",
    "RP15KL" : "RP15KL"
  },
  "lists" : {
    "-L3mwxyw3Gtn3HEls18S" : {
      "birds" : [ {
        "adiposity" : "Métallique",
        "age" : "Vieux",
        "caughtBack" : false,
        "latinName" : "Droidus",
        "ring" : "R2D2",
        "ringType" : "En fer",
        "sex" : "/",
        "uid" : 0,
        "weight" : "6kg",
        "wingspan" : "34cm"
      }, {
        "adiposity" : "Mince",
        "age" : "Vieux",
        "caughtBack" : true,
        "latinName" : "Droidus",
        "ring" : "C3PO",
        "ringType" : "En or",
        "sex" : "/",
        "uid" : 1,
        "weight" : "63kg",
        "wingspan" : "1m67"
      } ],
      "captureDate" : 1516978292355,
      "catchType" : "Au filet",
      "location" : "37.42, -122.08",
      "userId" : "qgSqAFgT8VXA3tvcXBAWTOSZzNL2"
    },
    "-L3sMeOQgkKy4T2_HoHg" : {
      "birds" : [ {
        "adiposity" : "Lourd",
        "age" : "40 ans",
        "caughtBack" : false,
        "latinName" : "Petrificus Totalus",
        "ring" : "EF78",
        "ringType" : "En plomb",
        "sex" : "mâle",
        "uid" : 0,
        "weight" : "87kg",
        "wingspan" : "50cm"
      }, {
        "adiposity" : "Très léger",
        "age" : "1 jour",
        "caughtBack" : true,
        "latinName" : "Alea",
        "ring" : "69QK",
        "ringType" : "Alliance",
        "sex" : "Femelle",
        "uid" : 1,
        "weight" : "500gr",
        "wingspan" : "32cm"
      } ],
      "captureDate" : 1517069174862,
      "catchType" : "",
      "location" : "",
      "userId" : "qgSqAFgT8VXA3tvcXBAWTOSZzNL2"
    },
    "-L3tHM4MSsC_PJ4ADTzF" : {
      "birds" : [ {
        "adiposity" : "Gros",
        "age" : "48 ans",
        "caughtBack" : false,
        "latinName" : "Fillius",
        "ring" : "1",
        "ringType" : "En bronze",
        "sex" : "mâle",
        "uid" : 0,
        "weight" : "42kg",
        "wingspan" : "62cm"
      } ],
      "captureDate" : 1517084561326,
      "catchType" : "Au nid",
      "location" : "40.34, 8.62",
      "userId" : "BSVse9jG7jNGhM2ClIQ6eoNRQR22"
    },
    "-L3tbe_QTxt-th1EH54f" : {
      "birds" : [ {
        "adiposity" : "",
        "age" : "",
        "caughtBack" : false,
        "latinName" : "Nouvel oiseau",
        "ring" : "K2000",
        "ringType" : "En acier",
        "sex" : "",
        "uid" : 0,
        "weight" : "240kg",
        "wingspan" : "3m50"
      } ],
      "captureDate" : 1517090146339,
      "catchType" : "Au ciel",
      "location" : "37.42, -122.08",
      "userId" : "qgSqAFgT8VXA3tvcXBAWTOSZzNL2"
    },
    "-L3vkUMFhNoVWFHpT3Vh" : {
      "captureDate" : 1517126021391,
      "catchType" : "Au réseau",
      "location" : "118 218",
      "userId" : "BSVse9jG7jNGhM2ClIQ6eoNRQR22"
    }
  },
  "users" : {
    "-L3Xs_Wjvdbo3AVAs86P" : {
      "email" : "muller.cedric.96@gmail.com",
      "firstName" : "Cédric",
      "isnNumber" : "CE45DR",
      "lastName" : "Müller"
    },
    "-L3Ynu0_vmIe4XrNuLiQ" : {
      "email" : "a@a.be",
      "firstName" : "Test",
      "isnNumber" : "AA11AA",
      "lastName" : "Doe"
    },
    "-L3xF2P-X9wdyDbUd65I" : {
      "email" : "a@b.be",
      "firstName" : "JON",
      "isnNumber" : "toto02",
      "lastName" : "SNO"
    }
  }
}

``` 