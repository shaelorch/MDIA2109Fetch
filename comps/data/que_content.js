export const rs = {
    young:{
        title:'you are young'
    }
}

export const qs = [
    {
        title:"What type of job do you have?",
        choices: [{
            txt: "Part-time",
            senior: 2,
            adult: 0,
            young: 0,
            large: 0,
            medium: 1,
            small: 1,

        },
        {
            txt:"Full-time",
            senior: 0,
            adult: 0,
            young: 2,
            large: 0,
            medium: 1,
            small: 1,
        }
        ]
    },

    {
        title:"How much are you willing to spend monthly on your potential dog?",
        choices: [{
            txt: "$150-300",
            senior: 0,
            adult: 2,
            young: 0,
            large: 0,
            medium: 2,
            small: 1,
        },
        {
            txt: "$300-500",
            senior: 2,
            adult: 1,
            young: 2,
            large: 2,
            medium: 1,
            small: 2,
        },
        {            
            txt: "$500-800",
            senior: 4,
            adult: 1,
            young: 3,
            large: 3,
            medium: 2,
            small: 3,
        },
        ]
    },
    {
        title:"Pick which suits your living situation.",
        choices: [{
            txt: "House",
            senior: 1,
            adult: 1,
            young: 1,
            large: 3,
            medium: 2,
            small: 1,
        },
        {
            txt: "Apartment",
            senior: 1,
            adult: 1,
            young: 1,
            large: 1,
            medium: 2,
            small: 3,
        }
        ]
    },
    {
        title:"Are you willing to spend 30mins or more walking your dog?",
        choices: [{
            txt: "Yes",
            senior: 1,
            adult: 2,
            young: 4,
            large: 3,
            medium: 3,
            small: 1,
        },
        {
            txt: "No",
            senior: 4,
            adult: 2,
            young: 1,
            large: 1,
            medium: 1,
            small: 2,
        }
        ]
    }

]

export const results = {
    young: 2,
    adult: 4,
    senior: 9,
    small: 0,
    medium: 2,
    large: 1,
}

export function changeResults(
    y
){

    results.young = results.young + y;
    console.log(results)

}


    
