
// Date methods
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
// day equal date - 1
let day = date.getDate()-1;
// test code of day

let selects = document.querySelectorAll('#pray-timer select');
selects.forEach((select)=>{
    // every any change happend on any select on praytime section run this function
    select.addEventListener('change',function(){
        // asynchronous function to fetch data from aladahn.com abote date and pray time 
        let country = document.querySelector("#country").value;
        let city = document.querySelector("#city").value;
        let api1 = `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=5&month=${month}&year=${year}`;
        console.log(api1);
        // apiStorage(country,city,api1);
        async function getData1(){
            try{
                const res = await fetch(api1);
                // test if data resived success or find any error
                let Data = await res.json();
                
                document.querySelector("#timers").innerHTML=`
                <div class="time time1">
                <div style="text-align: center;">
                    <h1>الفجر</h1>
                    <h2>${Data.data[day].timings.Fajr.slice(0,5)}ص</h2>
                </div>
            </div>
            <div class="time time2">
                <div style="text-align: center;">
                    <h1>الشروق</h1>
                    <h2>${Data.data[day].timings.Sunrise.slice(0,5)}ص</h2>
                </div>
            </div>
            <div class="time time3">
                <div style="text-align: center;">
                    <h1>الظهر</h1>
                    <h2>${Data.data[day].timings.Dhuhr.slice(0,5)}ص</h2>
                </div>
            </div>
            <div class="time time4">
                <div style="text-align: center;">
                    <h1>العصر</h1>
                    <h2>${parseInt(Data.data[day].timings.Asr.slice(0,5)) - 12}${Data.data[day].timings.Asr.slice(2,5)}م</h2>
                </div>
            </div>
            <div class="time time5">
                <div style="text-align: center;">
                    <h1>المغرب</h1>
                    <h2>${parseInt(Data.data[day].timings.Maghrib.slice(0,5)) - 12}${Data.data[day].timings.Maghrib.slice(2,5)}م</h2>
                </div>
            </div>
            <div class="time time6">
                <div style="text-align: center;">
                    <h1>العشاء</h1>
                    <h2>${parseInt(Data.data[day].timings.Isha.slice(0,5)) - 12}${Data.data[day].timings.Isha.slice(2,5)}م</h2>
                </div>
            </div>
                `;
            }catch(error){
                console.log("error",error); // if not success send error message
            }
        }
        getData1(api1);
    });
});
