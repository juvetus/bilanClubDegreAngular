export const surveyJson = {
    "title": "Préparation thèse fin d'études.",
    "description": "L'objectif de ce travail est de tirer les leçons d'un projet antérieur dans l'entreprise (Club Degree plus).Ce sondage me permettra de rédiger un compte rendu de ce projet dans le cadre de la préparation de ma thèse finale. ",
     "logo": "assets/logo.png",
    
    "logoWidth": 250,
    "logoHeight": 100,
 
    pages: [
     {
       "name": "title",
       "title": " Bilan Club Degré Plus : Dimension économique. ",
       "elements": [
        {
          "name": "nom",
         "title": "Nom",
         "type": "text",
         "description": "Entrez votre Nom",
         isRequired: true
       },
       {
         "type": "text",
         "name": "prenom",
         "title": "Prénom",
         "description": "Entrez votre Prénom",
         "startWithNewLine": false,
         isRequired: true
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

