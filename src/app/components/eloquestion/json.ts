export const surveyJson = {
    "title": "Memoire Fin d'étude",
    "description": "L'objectif de ce travail est de tirer les leçons d'un projet précédemment réalisé au sein de l'entreprise, et donc terminé et sur lequel vous n’êtes pas intervenu. De plus, il est accompagné d'une dimension économique. Ce document définit un cadre de référence pour mener à bien cette mission. Selon la nature  de l'entreprise et du projet choisi, il est nécessaire de redimensionner le périmètre d'études. Les items listés ci-dessous ne sont pas exhaustifs, mais ils donnent une structure partielle du rapport. Les grands titres doivent être respectés. ",
     "logo": "assets/logo1.jpg",
    
    "logoWidth": 100,
    "logoHeight": 100,
 
    pages: [
     {
       "name": "title",
       "title": " Bilan du projet Club Degré Plus ",
       "elements": [
        {
          "name": "nom",
         "title": "Nom",
         "type": "text",
         "description": "Entrez votre Nom",
       },
       {
         "type": "text",
         "name": "prenom",
         "title": "Prénom",
         "description": "Entrez votre Prénom",
         "startWithNewLine": false,
       },
       
         {
            "name": "question1",
           "title": "Quel etais le Budget prévisionnel du projet ?",
           "type": "comment",
           "description": "Dimension économique.",
         },
         {
           "type": "comment",
           "name": "question2",
           "title": "Comment c'est passé le Suivi du budget au cours du projet ?",
           "description": "	Dimension économique.",
         },
         {
            "name": "question3",
            "type": "comment",
            "title": "Y a-t-il eu des Indicateurs sur la rentabilité du projet ?",
            "description": "Dimension économique.",
         },          
         
       ]
     },
    
    ]

    
   
   };

// export const surveyJson = {
//     "title": "Memoire Fin d'étude",
//     "description": "L'objectif de ce travail est de tirer les leçons d'un projet précédemment réalisé au sein de l'entreprise, et donc terminé et sur lequel vous n’êtes pas intervenu. De plus, il est accompagné d'une dimension économique. Ce document définit un cadre de référence pour mener à bien cette mission. Selon la nature  de l'entreprise et du projet choisi, il est nécessaire de redimensionner le périmètre d'études. Les items listés ci-dessous ne sont pas exhaustifs, mais ils donnent une structure partielle du rapport. Les grands titres doivent être respectés. ",
//      "logo": "assets/logo1.jpg",
    
//     "logoWidth": 100,
//     "logoHeight": 100,
//     pages:[
//         {"name":"",
            
//         "elements": [
//             {
//               "type": "multipletext",
//               "name": "pricelimit",
//               "title": "What is the... ",
//               "items": [
//                 {
//                   "name": "mostamount",
//                   "title": "Most amount you would every pay for a product like ours"
//                 },
//                 {
//                   "name": "leastamount",
//                   "title": "The least amount you would feel comfortable paying"
//                 }
//               ]
//             }
//           ]
//         }
//     ]
    
//   };