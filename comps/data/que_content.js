export const qs = [
    {
        title: "1. Occupation",
        question: "What type of job do you have?",
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
            adult: 1,
            young: 2,
            large: 0,
            medium: 1,
            small: 1,
        }
        ]
    },

    {
        title:"2. Costs",
        question:"How much are you willing to spend monthly on your potential dog?",
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
        title:"3. Housing",
        question: "Pick which suits your living situation.",
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
        title:"4. Daily Activity",
        question:"Are you willing to spend 30mins or more walking your dog?",
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
    young: 0,
    adult: 0,
    senior: 0,
    small: 0,
    medium: 0,
    large: 0,
}

export function changeResults(
    y,
    ad,
    sr,
    sm,
    md,
    l
){

    results.young = results.young + y;
    results.adult = results.adult + ad;
    results.senior = results.senior + sr;
    results.small = results.small + sm;
    results.medium = results.medium + md;
    results.large = results.large +l;
    console.log(results)

}

export function getResults(){
    return results;
}


    
