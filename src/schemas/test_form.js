export default [
  /* Username */
  {
    component: "h3",
    class: "md-display-1",
    children: "username"
  },
  {
    type: "username",
    label: "Votre identifiant",
    tooltip: "Votre identifiant, votre numéro CAFAT, ou votre email",
    name: "username",
    validation: "required|alpha",
    validationName: "identifiant"
  },
  /* Text */
  {
    component: "h3",
    class: "md-display-1",
    children: "text"
  },
  {
    component: "div",
    class: "md-layout md-gutter",
    children: [
      {
        component: "FormulateInput",
        type: "text",
        label: "Votre nom",
        name: "nom",
        icon: "face",
        "outer-class": "md-layout-item md-size-50",
        validation: "required|alpha",
        validationName: "Le nom"
      },
      {
        type: "text",
        label: "Votre prenom",
        name: "prenom",
        "outer-class": "md-layout-item md-size-50",
        validation: "^required|^alpha|^min:5,length",
        validationName: "Le prenom"
      }
    ]
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "password"
  },
  {
    type: "password",
    label: "Votre mot de passe",
    name: "password",
    validation: "required",
    validationName: "mot de passe"
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "email"
  },
  {
    type: "email",
    label: "Votre email",
    name: "email",
    placeholder: "nom.prenom@gmail.com",
    validation: "required|email"
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "tel"
  },
  {
    type: "tel",
    label: "Votre numéro de téléphone",
    name: "phone",
    validationName: "Téléphone",
    validation: "number|min:6,length"
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "textarea"
  },
  {
    type: "textarea",
    label: "Votre Commentaire",
    name: "commentaire",
    "validation": "required|max:100,length",
    "error-behavior": "live",
    ":help": "`Il vous reste ${100 - commentaire.length} sur 100 characteres`"
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "number"
  },
  {
    type: "number",
    label: "Votre numéro CAFAT",
    name: "cafat",
    validationName: "numéro CAFAT",
    validation: "required|number|max:10000000"
  },
  {
    component: "h3",
    class: "md-display-1",
    children: "groups"
  },
  {
      component: "h3",
      children: "Social profile"
    },
    {
      type: "image",
      name: "headshot",
      label: "Your headshot"
    },
    {
      type: "group",
      name: "accounts",
      validation: "min:2,length",
      repeatable: true,
      "add-label": "+ Add platform",
      value: [{}],
      children: [{
          type: "select",
          name: "platform",
          label: "Social platform",
          placeholder: "Select one",
          options: {
            twitter: "Twitter",
            facebook: "Facebook",
            instagram: "Instagram",
            linkedin: "LinkedIn"
          }
        },
        {
          type: "text",
          name: "url",
          label: "Profile url",
          validation: "required|url"
        }
      ]
    },
    {
      type: "submit",
      label: "Submit"
    }
  ]
