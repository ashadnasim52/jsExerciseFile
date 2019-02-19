let myapp={
    appname:'1000+ Tech Facts',
    downloads:220,
    decs:'some desc',
    changename:function (name) {
        this.appname=name;
        
    }
}


// myapp.appname='ashad';
// myapp.changename('brother')

myapp.downloads=myapp.downloads+50;

console.log(myapp);
