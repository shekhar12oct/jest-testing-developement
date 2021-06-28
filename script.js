const googleDatabase=[
    'cats.com',
    'dogs.com',
    'souprecipes.com',
    'cricket.com',
    'animals.com',
    'horses.com',
    'virat kohli',
    'shekhar dubey'
]

const googleSearch=(searchInput,db)=>{
    const matches=db.filter(website=>{
        return website.includes(searchInput);
    })

    return matches.length>3 ? matches.slice(0,3): matches
};


// console.log(googleSearch('soup'));


module.exports=googleSearch;