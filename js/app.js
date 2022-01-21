const container = document.querySelector(".container")
const coffees = [
  { name: "tele1", image: "https://www.youtube.com/embed/4GCH7_Gj0ro" },
  { name: "tele2", image: "https://www.youtube.com/embed/NxSU6fcQmPs" },
  { name: "bg1", image: "videos/video.mp4" },
  { name: "bg2", image: "videos/video2.mp4" },
  { name: "bg3", image: "videos/video3.mp4" },
  { name: "logo1", image: "img/muslim-logo2-0١.png" },
  { name: "logo2", image: "img/muslim-logo1-0١.png" },
  { name: "sunna", image: "img/Sunna.webp" },
  { name: "quran", image: "img/quran.png" },
  { name: "pray", image: "img/مصلية.svg"},
]

const showCoffees = () => {
    let output =`
        <section id="Home">
        <div id="container">
            <section id="change-photo">
                <div id="exit" onclick="removeChange(this)">
                    <div></div>
                    <div></div>
                </div>
                <h1>اختر فيديو</h1>
                <div id="photos">
                    <video  src=${coffees[2].image} muted autoplay loop onclick="changeToVideo(this.src)"></video>
                    <video  src=${coffees[3].image} muted autoplay loop onclick="changeToVideo(this.src)"></video>
                    <video  src=${coffees[4].image} muted autoplay loop onclick="changeToVideo(this.src)"></video>
                </div>
            </section>
            <div id="cover">
                <video id="video-cover" src=${coffees[2].image} muted autoplay loop ></video>
            </div>
            <nav>
                <figure>
                    <img src=${coffees[5].image} width="50" height="75" alt="muslim-logo">
                    <figcaption>مسلم</figcaption>
                </figure>
                <div id="navbar">
                    <ul>
                        <li><a href="#">مواقيت الصلاة</a></li>
                        <li><a href="#">الزكاة</a></li>
                        <li><a href="#">التسبيح</a></li>
                        <li><a href="#">القرأن الكريم</a></li>
                    </ul>
                    <button id="change-img" onclick="addChange(this)">تغيير الخلفية</button>
                </div>
                <div id="toggle" onclick="myFunction(this)">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <section id="landing">
                // <iframe id="television"src=${coffees[0].image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div id="change-channel">
                    <div id="cont-div">
                        <h1>اختر القناة المناسبة</h1>
                        <div id="slider">
                            <div id="prev" onclick="plusSlides(-1)">&#10094;</div>
                            <div id="channels">
                                <img  class="mySlides" src=${coffees[7].image} width="170" height="170" alt="السنة النبوية">
                                <img class="mySlides" src=${coffees[8].image} width="120" height="116" alt="القرأن الكريم">
                                <h1 class="mySlides">مخصص</h1>
                            </div>
                            <div id="next" onclick="plusSlides(+1)">&#10094;</div>
                        </div>
                        <!-- <button id="choose">اضغط هنا</button> -->
                    </div>
                    <button id="custom" onclick="prompt(this)">رابط يوتيوب مخصص</button>
                    <div id="prompt">
                        <figure id="logo-prompt">
                            <img src=${coffees[6].image} width="50" height="75" alt="muslim-logo">
                            <figcaption>مسلم</figcaption>
                        </figure>
                        <div id="insertUrl">
                            <label for="link">ادخل الرابط</label>
                            <input type="text" name="link" id="link">
                            <br>
                            <input type="button" value="اضغط هنا" onclick="changeLink(this)">
                        </div>
                        <div id="exit" onclick="removeChange(this)">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>

    <!-- pray timer -->
    <section id="pray-timer">
        <div id="container">
            <div id="title">
                <img src=${coffees[9].image} width="200" height="121" alt="مصلية">
                <h1>مواقيت الصلاة</h1>
                <img src=${coffees[9].image} width="200" height="121" alt="مصلية">
            </div>
            <div id="filter">
                <h1>من فضلك اختر البلد و المدينة</h1>
                <select id="country">
                    <option value="">اختر البلد</option>
                    <option value="eg">مصر</option>
                    <option value="se">المملكة العربية السعودية</option>
                </select>
                <select id="city">
                    <option value="">اختر المدينة</option>
                    <option value="cairo">القاهرة</option>
                    <option value="Alexandria">الأسكندرية</option>
                    <option value="Giza">الجيزة</option>
                    <option value="Aswan">أسوان</option>
                    <option value="PortSaid">بورسعيد</option>
                    <option value="Jeddah">جدة</option>
                </select>
            </div>
            <div id="timers"></div>
        </div>
    </section>

    <!-- zakat -->
    <section id="zakat">
        <div id="container">
            <div id="title">
                <h1>الزكاة</h1>
            </div>
            <div id="content">
                <div id="type-zakat">
                   <h1>اختر نوع الزكاة</h1>
                   <div id="type" >
                        <h2 onclick="appearValue1(this)">زكاة المال</h2>
                        <input type="text" name="money" id="money" placeholder="ادخل القيمة">
                   </div>
                   <div id="type" >
                        <h2 onclick="appearValue2(this)">زكاة الذهب و الفضى</h2>
                        <input type="text" name="silveandgold" id="silveandgold" placeholder="ادخل القيمة بالجرام">
                  </div>
                </div>
                <div id="value-zakat">
                    <h1>قيمة الذكاة</h1>
                    <div id="see-value">
                        <div>
                            <span>المال:</span>
                            <h2 id="money-value"></h2>
                        </div>
                        <div>
                            <span>الذهب و الفضى:</span>
                            <h2 id="gold-value"></h2>
                        </div>
                        <!-- <div>
                            <span>الأجمالي:</span>
                            <h3 id="all-value"></h3>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- sebha -->
    <section id="sebha">
        <div id="container">
            <div id="title">
                <h1>السبحة</h1>
                <img src="img/سبحة-0١.svg" alt="">
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="circles circles1"></div>
                <div class="circles circles2"></div>
                <div class="circles circles3"></div>
                <div class="circles circles4"></div>
                <div class="circles circles5"></div>
                <div class="circles circles6"></div>
                <div class="circles circles7"></div>
                <div class="circles circles8"></div>
                <div class="circles circles9"></div>
                <div class="circles circles10"></div>
                <div class="circles circles11"></div>
                <div class="circles circles12"></div>
                <div class="circles circles13"></div>
                <div class="circles circles14"></div>
                <div class="circles circles15"></div>
                <div class="circles circles16"></div>
                <div class="circles circles1"></div>
                <div class="circles circles2"></div>
                <div class="circles circles3"></div>
                <div class="circles circles4"></div>
                <div class="circles circles5"></div>
                <div class="circles circles6"></div>
                <div class="circles circles7"></div>
                <div class="circles circles8"></div>
                <div class="circles circles9"></div>
                <div class="circles circles10"></div>
                <div class="circles circles11"></div>
                <div class="circles circles12"></div>
                <div class="circles circles13"></div>
                <div class="circles circles14"></div>
                <div class="circles circles15"></div>
                <div class="circles circles16"></div>
                <div class="circles circles16"></div>
            </div>

            <button id="start-sebha" onclick="incrementValue()">سبح</button>
            <div id="sebha-now">
                <div id="taha-aya">
                    <h1>يقول الله -تبارك وتعالى</h1>
                    <h1>وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ غُرُوبِهَا ۖ وَمِنْ آنَاءِ اللَّيْلِ فَسَبِّحْ وَأَطْرَافَ النَّهَارِ لَعَلَّكَ تَرْضَىٰ</h1>
                    <h1>سورة طه:130</h1>
                </div>
                <button onclick="addSebha(this)">سبح الأن</button>
            </div>
        </div>
        <div id="sebha-nums">
            <input type="text" id="number1" value="-1325"  disabled style="display: none;">
            <form action="index2.html" id="sebha-result">
                <div id="group">
                    <div>
                        <label for="number2">عدد التسبيح في الدورة</label>
                        <input type="text" id="number2" name="number2"  value="0" disabled>
                    </div>
                    <div>
                        <label for="number3">عدد دورات التسبيح</label>
                        <input type="text" id="number3" name="number3" value="0" disabled>
                    </div>
                </div>

                <div id="group">
                    <div>
                        <label for="number4">اجمالي تسبيح اليوم</label>
                        <input type="text" id="number4" name="number4"  value="0" disabled>
                    </div> 
                    <div>
                        <label for="number5">اجمالي تسبيح الاسبوع</label>
                        <input type="text" id="number5" name="number5"  value="0" disabled>
                    </div>  
                </div>
            </form>
 
        </div>
    </section>
 
    <section id="quran">
         <div id="container">
              <div id="title">
                    <img src="img/مصحف-0١.svg" width="150" height="114" alt="مصحف">
                    <h1>القرأن الكريم</h1>
                    <img src="img/مصحف-0١.svg" width="150" height="114" alt="مصحف">
              </div>
              <div id="content">
                  <div id="read">
                     <div id="cover">
                         <a href="#">قراءه</a>
                     </div>
                  </div>
                  <div id="listen">
                    <div id="cover">
                        <a href="#">صوتي</a>
                    </div>
                 </div>
              </div>
         </div>
    </section>
<select id="sebha-text">
    <option value="سبحان الله"> سبحان الله</option>
    <option value="الحمد لله">الحمد لله</option>
    <option value="الله واكبر">الله واكبر</option>
</select>
                `;

    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)


  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


  