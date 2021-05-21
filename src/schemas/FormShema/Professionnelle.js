export default[
    {
        type:"checkbox",
        name:"mobilite",
        label:"Mobilite",
        options:{
            noumea:"Nouméa",
            "Grand Noumea":"Grand Nouméa",
            "Province Sud":"Province Sud",
            "Province Nord":"Province Nord",
            "Province des îles":"Province des îles"
        }
    },
    {
        type:"checkbox",
        name:"Transport",
        label:"Transport",
        options:{
            Vehicule:"Véhicule Personnel",
            "Famille/Ami":"Famille/Ami",
            "Transport en Commun":"Transport en commun",
            "A pied":"A pied",
        }
    },
    {
        type:"group",
        name:"Poste_rechercher",
        label:"Indiquez les postes recherchés",
        "add-label":"Ajouter un poste",
        "remove-label":"Supprimez un poste",
        "add-label-class":"button",
        value:[{}],
        repeatable:true,
        validation:"max:4,length",
        children:[
            {
                type:"text",
                name:"poste",
                label:"Poste",
                validation:"max:50,length"
            }
        ]
    },
    {
        type:"radio",
        name:"contrat_rechercher",
        label:"Contrat recherché",
        value:[],
        options:{
            interim:"Interim",
            recrutement:"Recrutement",
            "interim recrutement":"Interim et recrutement"
        }
    },
    {
        type:"submit",
        name:"Envoyez"
    }
]