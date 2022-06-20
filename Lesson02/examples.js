//  Creation phase & Execution phase
//  CREATION PHASE
// function b(){ -> Se kreira ne se izvrshuva
//         var myVar;
//         console.log(myVar);
//     }
//     function a(){  -> Se kreira ne se izvrshuva
//         var myVar = 2;
//         console.log(myVar);
//         b();
//     }
//     var myVar = undefined;
//     myVar = 1;
//     var myVar = 1;
//     console.log(myVar);
//     a();
//     console.log(myVar);
    //=================================================
//  EXECUTION PHASE
//     myVar = 1;
//     console.log(myVar); --> se pechati 1
//     a(); -> vleguva vo a() i pravi nov CREATION PHASE
//  LEXICAL SCOPE - ja bara fizicki kade e definirana funkcijata okolu
//  CREATION PHASE za a()
//     function a(){
//     var myVar = undefined;
//     myVar = 2;
//  EXECUTION PHASE
//     console.log(myVar); --> se pechati 2
//     b(); -> se povikuva b()
//  Sega ja bara funkcijata b() vo okolinata okolu nego(f-jata a), ova se narekuva Leksichki Kontekts
//  CREATION PHASE za b()
//     function b(){
//     var myVar = undefined;
//  EXECUTION PHASE
//     console.log(myVar); --> se pecati undefined
//     } -> se iskaca od izvrshen kontekts na funkcijata b
//   } -> se iskaca od izvrshen kontekts na funkcijata a
//  prodolzuva izvrshniot kontekts na programata i
//     console.log(myVar); --> se pecati 1
    function b(){
        var myVar;
        console.log(myVar);
    }
    function a(){
        var myVar = 2;
        console.log(myVar);
        b();
    }
    var myVar = 1;
    console.log(myVar);
    a();
    console.log(myVar);
    // 1 2 undefined 1