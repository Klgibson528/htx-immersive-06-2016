var cities = [{name: "Los Angeles", temperature: 60.0}, {name: 'Atlanta', temperature: 52}, {name:'Detroit', temperature: 48}, {name: 'New York', temperature: 80}]



var results = cities.filter(function(dictionaryItem){

    if(dictionaryItem["temperature"] <= 70){
        return dictionaryItem;
    }

})

console.log(results);

