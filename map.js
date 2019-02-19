let appFirst={
    appName:'my Weather app',
    downloads:200,
    activeDownloads:10
}
let appSecond={
    appName:'1000+ Tech Facts',
    downloads:250,
    activeDownloads:30
}
let appThird={
    appName:'Gk',
    downloads:100,
    activeDownloads:3
}
let appfourth={
    appName:'Video Status Splitter',
    downloads:750,
    activeDownloads:250,
    pinned:true
}

let map = new Map();


map.set('appFirst',appFirst);
map.set('appSecond',appSecond);
map.set('appThird',appThird);
map.set('appFourth',appfourth);


// console.log(map);


// console.log(map.get('appFirst'));


for (const value of map.values()) {
    console.log(value.pinned);
    
}
