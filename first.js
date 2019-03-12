var TabJoueurs =[];
function Initialiser(){
    TabJoueurs=[];
    var NbrJoueur =Number(document.getElementById('NbrJoueur').value);
    for( var i =0 ;i<NbrJoueur;i++){
        TabJoueurs[i]=[];
    }
    var cartes =construction();
    cartes = melange(cartes);
    distribution(cartes);
}

function construction(){
    var cartes=[];
    var Ensaignes=['hearts','diam','spades','clubs'];
    var Valleurs =['A','2','3','4','5','6','7','8','9','10','V','D','R'];
    for(i in Ensaignes)
    {
        var Couleur=(Ensaignes[i]==='hearts' ||Ensaignes[i]==='diam')? 'red':'black' ;
        for( v in Valleurs)
        {
            var carte ={
                enseigne:Ensaignes[i],
                Nombre:Valleurs[v],
                couleur:Couleur
            }
            cartes.push(carte);
        }
    }
    return cartes;
}
function melange(cartes){
    for(var k= cartes.length -1 ; k > 0 ;k--)
    {
        var NombreTemporaire= Math.floor(Math.random()* (k+ 1)) ;
        var CarteTemporaire =cartes[k];
        cartes[k]=cartes[NombreTemporaire];
        cartes[NombreTemporaire]= CarteTemporaire;
    }

    return cartes;
}
function distribution(cartes){
    var NombreJoueur =TabJoueurs.length;
    var chaquesJouer=0;
    cartes.forEach(function(carte){
        TabJoueurs[chaquesJouer].push(carte);
        chaquesJouer++;
        if(chaquesJouer ===NombreJoueur){
            chaquesJouer=0;
        }
    });
    for(var i = 0 ;i < NombreJoueur;i++ )
    {
        var Text =document.getElementById('sortie');
        Text.innerHTML +="<div class='Joueurs'>"
        Text.innerHTML +='<h2> Joueur ( '+(i+1)+' ) </h2>';
        for(var v = 0 ;v <TabJoueurs[i].length;v++) 
        {
            var H =TabJoueurs[i][v];
            Text.innerHTML+="<span class='carte' style='color:"+H.couleur+"'>"+H.Nombre+ "</span>";
        }
        Text.innerHTML +="</div'>";

    }
}
var test =new XMLHttpRequest();