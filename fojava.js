const xWings = [];

// const audio = new Audio('./assets/Star Wars Jedi Theme (320 kbps).mp3');
// audio.play();

let createInterval;
let moveInterval;
console.log(window.innerWidth);

const startX = window.width;
const startY = window.innerHeight + 300;

const targetX = window.width * 0.8;
const targetY = window.innerHeight * 0.2;



function xWingHorde(event) {
    const xWing = document.createElement('img');
    xWing.classList.add('x-wing');
    xWing.src = './assets/x-wing.png';
    document.body.appendChild(xWing);
    // xWing.style.position = 'absolute';

    // console.log('asdasd');
    // xWing.style.top = startY + 'px';
    // xWing.style.left = startX * Math.random + 'px';
    // xWing.style.width = '150px';
    // xWing.style.height = 'auto';

    // xWing.style.top = startY + 'px';
    // xWing.style.left = '-200px';
    // xWing.style.width = '150px';
    // xWing.style.height = 'auto';

    xWing.setAttribute('draghable', false);

    xWing.style.filter += `brightness(${Math.random() + 0.2})`;

    xWings.push(xWing);
}


function moveAll() {
    for (let xWing of xWings) {
        xWing.classList.add('translate');
    }
}

(function start() {
    createInterval = setInterval(xWingHorde, 800);
    moveInterval = setInterval(moveAll, 11);
})()



var boxOne = document.querySelector('.box');

document.querySelector('.animation').onclick = function() {
//   if(this.innerHTML === 'Play') 
//   { 
//     this.innerHTML = 'Pause';
    boxOne.classList.add('horizTranslate');
//   } else {
//     this.innerHTML = 'Play';
//     var computedStyle = window.getComputedStyle(boxOne),
//         marginLeft = computedStyle.getPropertyValue('margin-left');
//     boxOne.style.marginLeft = marginLeft;
//     boxOne.classList.remove('horizTranslate');    
//   }  
}







document.querySelector("#bombazohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == bombazo;
}

document.querySelector("#cirkalohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == cirkalo;
}

document.querySelector("#csatahajohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == csatahajo;
}

document.querySelector("#elfogovadaszhtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == elfogovadasz;
}

document.querySelector("#rombolohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == rombolo;
}

document.querySelector("#teherhajohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == teherhajo;
}

document.querySelector("#utasszalitohtml").onclick()= function(){
    document.querySelector("#Main").innerHTML == utasszalito;
}
document.querySelector("#vadaszgephtml").onclick()= function(){
  document.querySelector("#Main").innerHTML == vadaszgep;
}
/*
.onmouseover()
let isHidden = false
isHidden = !isHidden;
if (isHidden){

}
.classlist.remove(hidden)
elsodiv = `dfghjkztrertzuiuhgfcfghuiugftzui` sortöréses altgr+7*/

vadaszgep =
`
<table>
                  <tr>
                    <td>
                      <div class="card" style="width: 12rem;">
                        <img id="magassag" class="card-img-top" src="vadaszgepek/kepek/droid-tri-vadász.webp" alt="droid-tri-vadász" title="droid-tri-vadász">
                        <div class="card-body">
                          <p class="card-title" id="leirasNev">Droid-Tri-Vadász</p>
                          <p id="leirasKredit">90.000 Kredit</p>
                          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="card" style="width: 12rem;">
                        <img id="magassag" class="card-img-top" src="vadaszgepek/kepek/AurekFighter.webp" alt="AurekFighter" title="AurekFighter">
                        <div class="card-body">
                          <p class="card-title" id="leirasNev">Aurek vadászgép</p>
                          <p id="leirasKredit">75.000 Kredit</p>
                          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="card" style="width: 12rem;">
                        <img class="card-img-top" src="vadaszgepek/kepek/Droidstarfighter.webp" alt="Droid-Vadász" title="Droid-Vadász">
                        <div class="card-body">
                          <p class="card-title" id="leirasNev">Droid <br> Vadász</p>
                          <p id="leirasKredit">81.000 Kredit</p>
                          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="card" style="width: 12rem;">
                        <img class="card-img-top" src="vadaszgepek/kepek/N-1_BF2.webp" alt="N-1_BF2 Vadászgép" title="N-1_BF2 Vadászgép">
                        <div class="card-body">
                          <p class="card-title" id="leirasNev">N-1_BF2 vadászgép</p>
                          <p id="leirasKredit">65.0000 Kredit</p>
                          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="card" style="width: 12rem;">
                        <img id="magassag" class="card-img-top" src="vadaszgepek/kepek/X-Wing_Fighter_(49560729806).jpg" alt="X-Wing Vadászgép" title="X-Wing Vadászgép">
                        <div class="card-body">
                          <p class="card-title" id="leirasNev">X-Wing vadászgép</p>
                          <p id="leirasKredit">95.000 Kredit</p>
                          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                        </div>
                      </div>
                    </td>
                </tr>
              </table>
`
utasszalito =
`
<table>
<tr>
  <td>
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" src="Utasszálítók/Képek/CorellianStarShuttleModel-SWBRBD1.webp" alt="CSS-1 Corellian Star Shuttle" title="CSS-1 Corellian Star Shuttle">
      <div class="card-body">
        <p id="leirasNev">CSS-1 Corellian Star Shuttle</p>
        <p  id="leirasKredit">700.000 Kredit</p>
        <a href="A.wing.html" class="btn btn-primary button container">Tovább a termékre</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" src="Utasszálítók/Képek/Genesis_Starliner_-_Flying_away_from_Terra_Prime.jpg" alt="Genesis Starliner" title="Genesis Starliner">
      <div class="card-body">
        <p id="leirasNev">Genesis Starliner</p>
        <p  id="leirasKredit">4.000.000 Kredit</p>
        <a href="Delta7B.html" class="btn btn-primary button container">Tovább a termékre</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" src="Utasszálítók/Képek/PassengerStarliner-BoBFCh5.webp" alt="PassengerStarliner" title="PassengerStarliner">
      <div class="card-body">
        <p id="leirasNev">PassengerStarliner</p>
        <p  id="leirasKredit">2.000.000 Kredit</p>
        <a href="Eta-2.html" class="btn btn-primary button container">Tovább a termékre</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" src="Utasszálítók/Képek/Taylander-shuttle-SWESV.webp" alt="Taylander shuttle" title="Taylander shuttle">
      <div class="card-body">
        <p id="leirasNev">Taylander shuttle</p>
        <p  id="leirasKredit">650.000 Kredit</p>
        <a href="TIE-Barion.html" class="btn btn-primary button container">Tovább a termékre</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" src="Utasszálítók/Képek/veh_ia_1752_040381b2.webp" alt="Lambda-class T-4a Utasszálító" title="Lambda-class T-4a Utasszálító">
      <div class="card-body">
        <p id="leirasNev">Lambda-class T-4a Utasszálító</p>
        <p  id="leirasKredit">240.000 Kredit</p>
        <a href="TIE-Inter.html" class="btn btn-primary button container">Tovább a termékre</a>
      </div>
    </div>
  </td>
</tr>
</table>
`
teherhajo =
`
<table>
                      <tr>
                          <td>
                            <div class="card" style="width: 12rem;">
                              <img class="card-img-top" src="Teherhajók/kepek/YT-2400.jfif" alt="PTB-625 Bolygóbombázó" title="PTB-625_bolygóbombázó">
                              <div class="card-body">
                                <p class="card-title" id="leirasNev">Outrider YT-2400</p>
                                <p id="leirasKredit">350.000 Kredit</p>
                                <a href="PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="card" style="width: 12rem;">
                              <img class="card-img-top" src="Teherhajók/kepek/Ebon Hawk.jfif" alt="TIE_Bomber_BF2 Bombázó" title="TIE_Bomber_BF2_bombázó">
                              <div class="card-body">
                                <p id="leirasNev">Ebon Hawk</p>
                                <p id="leirasKredit">430.000 Kredit</p>
                                <a href="PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="card" style="width: 12rem;">
                              <img class="card-img-top" src="Teherhajók/kepek/Eravana.jfif" alt="Y-Wing_Fighter_Bomber" title="Y-Wing_átalakított_bombázó">
                              <div class="card-body">
                                <p id="leirasNev">Eravana</p>
                                <p id="leirasKredit">381.000 Kredit</p>
                                <a href="PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="card" style="width: 12rem;">
                              <img class="card-img-top" src="Teherhajók/kepek/Quadjumper TUG-b13.jfif" alt="Cobalt_Hammer_Bombázó" title="Cobalt_Hammer_bombázó">
                              <div class="card-body">
                                <p id="leirasNev">Quadjumper TUG-b13</p>
                                <p id="leirasKredit">210.000 Kredit</p>
                                <a href="PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="card" style="width: 12rem;">
                              <img class="card-img-top" src="Teherhajók/kepek/VCX-100.jfif" alt="Imperial_Bombázó" title="Imperial_bombázó">
                              <div class="card-body">
                                <p id="leirasNev">VCX-100 GHOST</p>
                                <p id="leirasKredit">300.000 Kredit</p>
                                <a href="PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                              </div>
                            </div>
                          </td>
                      </tr>
                  </table>
`
rombolo =
`
<table>
                  <tr>
                      <td>
                        <div class="card" style="width: 12rem;">
                          <img class="card-img-top" src="Rombolok/kepek/Venator.jfif" alt="Venator Romboló" title="Venator Romboló">
                          <div class="card-body">
                            <p class="card-title" id="leirasNev">Venator Romboló</p>
                            <p id="leirasKredit">2.000.000 Kredit</p>
                            <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="card" style="width: 12rem;">
                          <img class="card-img-top" src="Rombolok/kepek/Victory I-es.jfif" alt="Victory I-es Romboló" title="Victory I-es Romboló">
                          <div class="card-body">
                            <p class="card-title" id="leirasNev">Victory I-es Romboló</p>
                            <p id="leirasKredit">1.700.000 Kredit</p>
                            <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="card" style="width: 12rem;">
                          <img class="card-img-top" src="Rombolok/kepek/Szuper csillagromboló.jfif" alt="Szuper csillagromboló" title="PTB-625_bolygóbombázó">
                          <div class="card-body">
                            <p class="card-title" id="leirasNev">Szuper<br>Csillagromboló</p>
                            <p id="leirasKredit">1.300.000 Kredit</p>
                            <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="card" style="width: 12rem;">
                          <img class="card-img-top" src="Rombolok/kepek/Birodalmi II. csillagromboló.jfif" alt="/Birodalmi II. csillagromboló." title="PTB-625_bolygóbombázó">
                          <div class="card-body">
                            <p class="card-title" id="leirasNev">Birodalmi II.<br>Csillagromboló</p>
                            <p id="leirasKredit">1.045.000 Kredit</p>
                            <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="card" style="width: 12rem;">
                          <img class="card-img-top" src="Rombolok/kepek/mega csillagromboló.jfif" alt="mega csillagromboló" title="PTB-625_bolygóbombázó">
                          <div class="card-body">
                            <p class="card-title" id="leirasNev">Mega<br>Csillagromboló</p>
                            <p id="leirasKredit">1.150.000 Kredit</p>
                            <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
                          </div>
                        </div>
                      </td>
                  </tr>
              </table>
`
elfogovadasz = 
`
<table>
<tr>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="Interceptor/Képek/A-wing_DICE.png" alt="RZ-1A-WING" title="RZ-1A-WING elfogóvadász">
        <div class="card-body">
          <p id="leirasNev">RZ-1A-WING elfogóvadász</p>
          <p  id="leirasKredit">70.000 Kredit</p>
          <a href="A.wing.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" id="magassag" src="Interceptor/Képek/Delta7B-TCWs3BR3.png" alt="Delta7B Könnyű elfogó" title="Delta7B könnyű elfogóvadász">
        <div class="card-body">
          <p id="leirasNev">Delta7B könnyű elfogóvadász</p>
          <p  id="leirasKredit">75.000 Kredit</p>
          <a href="Delta7B.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="Interceptor/Képek/Eta-2JediInterceptor-USC.png" alt="Eta-2 Jedi elfogóvadász" title="Eta-2 Jedi elfogóvadász">
        <div class="card-body">
          <p id="leirasNev">Eta-2 Jedi elfogóvadász</p>
          <p  id="leirasKredit">86.000 Kredit</p>
          <a href="Eta-2.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="Interceptor/Képek/FO_TIE_Barion_Interceptor_FFG.png" alt="TIE-Barion Interceptor" title="TIE-Barion elfogóvadász">
        <div class="card-body">
          <p id="leirasNev">TIE-Barion Interceptor</p>
          <p  id="leirasKredit">91.000 Kredit</p>
          <a href="TIE-Barion.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="Interceptor/Képek/TIE_Interceptor_BF.png" alt="TIE elfogóvadász" title="TIE elfogóvadász">
        <div class="card-body">
          <p id="leirasNev">TIE elfogóvadász</p>
          <p  id="leirasKredit">78.000 Kredit</p>
          <a href="TIE-Inter.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
</tr>
</table>
`
csatahajo = 
`
<table>
                    <tr>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="InvisibleHand.html"><img class="card-img-top" src="Battleship/Képek/InvisibleHandROTS.webp" alt="InvisibleHand" title="InvisibleHand csatahalyó"></a>
                            <div class="card-body">
                              <p id="leirasNev">InvisibleHand <br>csatahajó</p>
                              <p  id="leirasKredit">60.000.000 Kredit</p>
                              <a href="InvisibleHand.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Kumauri.html"></a><img class="card-img-top" src="Battleship/Képek/KumauriWhatchamajigger-EGW.webp" alt="Kumauri_battleship" title="Kumauri csatahalyó"></a>
                            <div class="card-body">
                              <p id="leirasNev">Kumauri <br>csatahajó</p>
                              <p  id="leirasKredit">40.000.000 Kredit</p>
                              <a href="Kumauri.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Lucrehulk.html"><img class="card-img-top" src="Battleship/Képek/Lucrehulk_battleship_TCW.webp" alt="Lucrehulk_battleship" title="Lucrehulk csatahalyó"></a>
                            <div class="card-body">
                              <p id="leirasNev">Luncrehulk <br>csatahajó</p>
                              <p  id="leirasKredit">50.000.000 Kredit</p>
                              <a href="Lucrehulk.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Unity.html"><img class="card-img-top" src="Battleship/Képek/Unity-FFG.webp" alt="Unity_battleship" title="A Unity csatahajó"></a>
                            <div class="card-body">
                              <p id="leirasNev">Unity <br>csatahajó</p>
                              <p  id="leirasKredit">30.000.000 Kredit</p>
                              <a href="Unity.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Xyston.html"><img class="card-img-top" src="Battleship/Képek/Xyston-SD-Full.png" alt="Xyston-SD-Full" title="Xyston osztályú Csatahalyó/Csillagromboló"></a>
                            <div class="card-body">
                              <p id="leirasNev">Xyston <br>csatahajó</p>
                              <p  id="leirasKredit">55.000.000 Kredit</p>
                              <a href="Xyston.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                    </tr>
                  </table>
`
cirkalo =
`
                <table>
                    <tr>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <img class="card-img-top" src="Cruisers/Képek/Acclamator.webp" alt="Acclamator_Heavy_Cruiser" title="Acclamator_Nehézcirkáló"></a>
                            <div class="card-body">
                              <p id="leirasNev">Acclamator Nehézcirkáló</p>
                              <p  id="leirasKredit">2.200.000 Kredit</p>
                              <a href="Acclamator.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Arrestor.html"></a><img class="card-img-top" src="Cruisers/Képek/Arrestor_cruiser.webp" alt="Arrestor_cruiser" title="Cantwell_osztályú_elfogó_cirkáló"></a>
                            <div class="card-body">
                              <p id="leirasNev">Cantwell osztályú elfogó cirkáló</p>
                              <p  id="leirasKredit">1.200.000 Kredit</p>
                              <a href="Arrestor.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Gozanti.html"><img class="card-img-top" src="Cruisers/Képek/Gozanti-class_cruiser_SWR.webp" alt="Gozanti-class_cruiser" title="Gozanti_osztályú_cirkáló"></a>
                            <div class="card-body">
                              <p id="leirasNev">Gozanti osztályú cirkáló</p>
                              <p  id="leirasKredit">800.000 Kredit</p>
                              <a href="Gozanti.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="card" style="width: 12rem;">
                            <a href="Hapan.html"><img class="card-img-top" src="Cruisers/Képek/Hapan_Battledragon.webp" alt="Hapan_Battledragon" title="Haponi_harcisárkány"></a>
                            <div class="card-body">
                              <p id="leirasNev">Hapani harcisárkány</p>
                              <p  id="leirasKredit">950.000 Kredit</p>
                              <a href="Hapan.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                           <div class="card" style="width: 12rem;">
                            <a href="NeutronStar.html"><img class="card-img-top" src="Cruisers/Képek/NeutronStarBulkCruiser-SWR.webp" alt="NeutronStarBulkCruiser" title="Neutroncsillag_osztályú_megerősített_nehézcirkáló"></a>
                            <div class="card-body">
                              <p id="leirasNev">Neutroncsillag_osztályú_megerősített_nehézcirkáló</p>
                              <p  id="leirasKredit">5.000.000 Kredit</p>
                              <a href="NeutronStar.html" class="btn btn-primary button container">Tovább a termékre</a>
                            </div>
                          </div>
                        </td>
                    </tr>
                </table>
                `
bombazo =
`
<table>
<tr>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" id="magassag" src="bombazok/Képek/PTB-625_heavy_bomber.webp" alt="PTB-625 Bolygóbombázó" title="PTB-625_bolygóbombázó">
        <div class="card-body">
          <p class="card-title" id="leirasNev">PTE-625<br>Bolygó- <br> bombázó</p>
          <p id="leirasKredit">150.000 Kredit</p>
          <a href="/Kategóriák/bombazok/PTB-625.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="bombazok/Képek/TIE_Bomber_BF2.webp" alt="TIE_Bomber_BF2 Bombázó" title="TIE_Bomber_BF2_bombázó">
        <div class="card-body">
          <p id="leirasNev">TIE Bomber BF2 <br>Könnyű Bombázó</p>
          <p id="leirasKredit">130.000 Kredit<br>+60.000 Kredit haddíj</p>
          <a href="/Kategóriák/bombazok/TIE_Bomber.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" id="magassag" src="bombazok/Képek/Y-Wing-Fighter_0e78c9ae.jpeg" alt="Y-Wing_Fighter_Bomber" title="Y-Wing_átalakított_bombázó">
        <div class="card-body">
          <p id="leirasNev">Y-Wing Starfighter-Bomber</p>
          <p id="leirasKredit">135.000 Kredit</p>
          <a href="/Kategóriák/bombazok/Y-Wing.html.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="bombazok/Képek/tlj-db-cobolt-squadron-main-image_3cff3b44.webp" alt="Cobalt_Hammer_Bombázó" title="Cobalt_Hammer_bombázó">
        <div class="card-body">
          <p id="leirasNev">Cobalt <br> Hammer</p>
          <p id="leirasKredit">175.000 Kredit</p>
          <a href="/Kategóriák/bombazok/Cobalt_Hammer.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
    <td>
      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="bombazok/Képek/Imperial_bomber.webp" alt="Imperial_Bombázó" title="Imperial_bombázó">
        <div class="card-body">
          <p id="leirasNev">Imperial bomber</p>
          <p id="leirasKredit">190.000 Kredit</p>
          <a href="/Kategóriák/bombazok/Imperial.html" class="btn btn-primary button container">Tovább a termékre</a>
        </div>
      </div>
    </td>
</tr>
</table>
`