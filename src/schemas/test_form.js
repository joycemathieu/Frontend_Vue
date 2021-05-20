export default [
  /* Username */
  {
    component: "h3",
    class: "subtitle is-1",
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
    class: "subtitle is-1",
    children: "text"
  },
  {
    component: "div",
    class: "columns",
    children: [
      {
        type: "text",
        label: "Votre nom",
        name: "nom",
        icon: "fa-users",
        "outer-class": "column is-6",
        validation: "required|alpha",
        validationName: "Le nom"
      },
      {
        type: "text",
        label: "Votre prenom",
        name: "prenom",
        "outer-class": "column is-6",
        validation: "^required|^alpha|^min:5,length",
        validationName: "Le prenom"
      }
    ]
  },
  {
    component: "h3",
    class: "subtitle is-1",
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
    class: "subtitle is-1",
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
    class: "subtitle is-1",
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
    class: "subtitle is-1",
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
    class: "subtitle is-1",
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
    class: "subtitle is-1",
    children: "Select"
  },
  {
    type: "select",
    label: "Selection",
    name: "selection",
    options: [
      {
        label: "Option A",
        value: "optionA",
        selected: true,
      },
      {
        label: "Option B",
        value: "optionB",
      },
      {
        label: "Option C",
        value: "optionC",
        disabled: true,
      },
    ],
  },
  {
    component: "h3",
    class: "subtitle is-1",
    children: "Image"
  },
  {
    type: "image",
    name: "headshot",
    label: "Your headshot"
  },
  {
    component: "h3",
    class: "subtitle is-1",
    children: "groups"
  },
  {
      component: "h3",
      children: "Social profile"
    },
    {
      type: "group",
      name: "accounts",
      validation: "min:2,length",
      repeatable: true,
      "add-label": "+ Add platform",
      "remove-label": "Enlever",
      "add-label-class": "button",
      class: "",
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
          },
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
      component: "h3",
      class: "subtitle is-1",
      children: "Radio"
    },
    {
      type: "radio",
      name: "choix",
      label: "Hello",
      options: {
        a: "Choix A",
        b: "Choix B",
      }
    },
    {
      component: "h3",
      class: "subtitle is-1",
      children: "Checkbox"
    },
    {
      type: "checkbox",
      name: "choix2",
      label: "checkboxes",
      options: {
        a: "Choix A",
        b: "Choix B",
      }
    },
    {
      type: "submit",
      label: "Submit"
    }
  ]
