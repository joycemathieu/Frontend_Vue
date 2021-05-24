export default[
    {
        type: "username",
        name: "username",
        label: "Nom de compte",
        validation: "required",
    },
    {
        type: "email",
        name: "email",
        label: "Votre email",
        placeholder: "example@example.com",
        validation: "required|email"
    },
    {
        type: "password",
        name: "password",
        label: "Votre mot de passe",
        validation: "required"
    },
    {
        type: "password",
        name: "password_confirm",
        label: "Confirmez votre mote de passe",
        validation: "required|confirm"
    },
    {
        type: "submit",
        name: "Envoyez"
    }
]
