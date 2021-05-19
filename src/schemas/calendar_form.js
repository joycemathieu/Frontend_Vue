export default [
    {
        component: "h3",
        class: "md-display-1",
        children: "horraires"
    },
    {
        type: "group",
        name: "days",
        repeatable: true,
        "add-label": "add Days",
        value: [{}],
        children:[
            {
                component: "h2",
                class: "md-display-1",
                children: "Matin"
            },
            {
                type: "text",
                name: "matin de",
                label: "De",
                placeholder: "De",
            },
            {
                type: "text",
                name: "matin a",
                label: "A",
                placeholder: "A",
            },

        ]
    },
    {
    type: "submit",
    label: "Submit"
    }


]