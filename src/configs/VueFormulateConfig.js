import { fr } from '@braid/vue-formulate-i18n'


export default {
  plugins: [ fr ],
  locale: 'fr',

  slotComponents: {
    label: 'myLabel',
  },

  slotProps: {
    label: ['tooltip'],
  },

  library: {
    username: {
      classification: "text",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    text: {
      classification: "text",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    password: {
      classification: "password",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    email: {
      classification: "email",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    tel: {
      classification: "tel",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    number: {
      classification: "number",
      component: 'myInput',
      slotProps: {
        component: ['icon']
      },
    },
    textarea: {
      classification: "text",
      component: "myTextarea",
    }
  }
}
