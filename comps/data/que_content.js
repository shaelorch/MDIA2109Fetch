export const qs = [
    {
        image: '/1stpage.svg',
        title: "1. Occupation",
        question: "What type of job do you have?",
        choices: [{
            txt: "Part-time",
            senior: 6,
            adult: 1,
            young: 2,
            large: 3,
            medium: 5,
            small: 4,

        },
        {
            txt:"Full-time",
            senior: 1,
            adult: 5,
            young: 6,
            large: 2,
            medium: 4,
            small: 3,
        }
        ]
    },

    {
        image: '/2ndpage.svg',
        title:"2. Costs",
        question:"How much are you willing to spend monthly on your potential dog?",
        choices: [{
            txt: "$150-300",
            senior: 3,
            adult: 6,
            young: 1,
            large: 2,
            medium: 5,
            small: 4,
        },
        {
            txt: "$300-500",
            senior: 4,
            adult: 2,
            young: 6,
            large: 3,
            medium: 1,
            small: 5,
        },
        {            
            txt: "$500-800",
            senior: 6,
            adult: 1,
            young: 4,
            large: 5,
            medium: 2,
            small: 3,
        },
        ]
    },
    {
        image: '/3rdpage.svg',
        title:"3. Housing",
        question: "Pick which suits your living situation.",
        choices: [{
            txt: "House",
            senior: 3,
            adult: 4,
            young: 1,
            large: 6,
            medium: 5,
            small: 2,
        },
        {
            txt: "Apartment",
            senior: 2,
            adult: 3,
            young: 4,
            large: 1,
            medium: 5,
            small: 6,
        }
        ]
    },
    {
        image: '/4thpage.svg',
        title:"4. Daily Activity",
        question:"Are you willing to spend 45mins or more walking your dog?",
        choices: [{
            txt: "Yes",
            senior: 1,
            adult: 3,
            young: 6,
            large: 5,
            medium: 4,
            small: 2,
        },
        {
            txt: "No",
            senior: 6,
            adult: 5,
            young: 2,
            large: 1,
            medium: 3,
            small: 4,
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


    
