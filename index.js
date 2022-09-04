const axios = require('axios')
const cheerio = require('cheerio')
const urlRegex = require('url-regex');
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

const url = 'https://tamilguru.lk/power-cut-schedule/'

app.get('/', function (req, res) {
     res.json('This is my webscraper')
 })

app.get('/timetable', (req, res) => { 

     axios.get(url)
          .then(response => {
               const data = response.data
               const $ = cheerio.load(data)
               const g_date = []
               $('#post-11691 > div > p > mark:nth-child(1) > b > strong', data).each(function () { 
                    const date_o = $(this).text()
                    g_date.push(
                         date_o
                    )
               })
               
               
               const d1 = g_date[0].split(' ').join('')
               const d2 = g_date[1].split(' ').join('') 

               if(day === d1){
                    
                    var objToday_e = new Date(),
                    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                    dayOfWeek = weekday[objToday_e.getDay()],
                    domEnder = function() { var a = objToday_e; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
                    dayOfMonth = today + ( objToday_e.getDate() < 10) ? '0' + objToday_e.getDate() + domEnder : objToday_e.getDate() + domEnder,
                    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                    curMonth = months[objToday_e.getMonth()],
                    curYear = objToday_e.getFullYear()
                    var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

                    var objToday_s = new Date(),
                    weekday_s = new Array('ඉරිදා', 'සඳුදා ', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'),
                    dayOfWeek_s = weekday_s[objToday_s.getDay()],
                    domEnder_s = function() { var a = objToday_s; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "" }(),
                    dayOfMonth_s = today_s + ( objToday_s.getDate() < 10) ? '0' + objToday_s.getDate() + domEnder_s : objToday_s.getDate() + domEnder_s,
                    months_s = new Array('ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජුනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'),
                    curMonth_s = months_s[objToday_s.getMonth()],
                    curYear_s = objToday_s.getFullYear()
                    var today_s = dayOfWeek_s + " " + dayOfMonth_s + " of " + curMonth_s + ", " + curYear_s;
                    const date_e = dayOfMonth + " " + curMonth + ", " + curYear;
                    const date_s = dayOfMonth_s + " " + curMonth_s + ", " + curYear_s;
                    const day_s = dayOfWeek_s


                    const pdf = $("#post-11691 > div > ul:nth-child(6) > li > strong > a").attr('href')

                    const image =$("#post-11691 > div > div:nth-child(7) > figure").text()
                    const img = image.match(urlRegex());

                    res.json(
                         {result:{
                             Developed_By:'<./King Amda Developers.>',
                             author:'Pasindu Samarasingha',
                             data:{
                                   day_en:d2,
                                   day_si:day_s,
                                   date_en:date_e,
                                   date_si:date_s,
                                   img:img[0],
                                   pdf_link:pdf,
                             }
                         }
                     }
                     )
                    
               }else if (day === d2){

                    var objToday_e = new Date(),
                    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                    dayOfWeek = weekday[objToday_e.getDay()],
                    domEnder = function() { var a = objToday_e; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
                    dayOfMonth = today + ( objToday_e.getDate() < 10) ? '0' + objToday_e.getDate() + domEnder : objToday_e.getDate() + domEnder,
                    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                    curMonth = months[objToday_e.getMonth()],
                    curYear = objToday_e.getFullYear()
                    var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

                    var objToday_s = new Date(),
                    weekday_s = new Array('ඉරිදා', 'සඳුදා ', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'),
                    dayOfWeek_s = weekday_s[objToday_s.getDay()],
                    domEnder_s = function() { var a = objToday_s; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
                    dayOfMonth_s = today_s + ( objToday_s.getDate() < 10) ? '0' + objToday_s.getDate() + domEnder : objToday_s.getDate() + domEnder,
                    months_s = new Array('ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජුනි', 'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'),
                    curMonth_s = months_s[objToday_s.getMonth()],
                    curYear_s = objToday_s.getFullYear()
                    var today_s = dayOfWeek_s + " " + dayOfMonth_s + " of " + curMonth_s + ", " + curYear_s;
                    const date_e = dayOfMonth + " " + curMonth + ", " + curYear;
                    const date_s = dayOfMonth_s + " " + curMonth_s + ", " + curYear_s;
                    const day_s = dayOfWeek_s


                    const pdf = $("#post-11691 > div > ul:nth-child(10) > li > strong > a").attr('href')

                    const image =$("#post-11691 > div > div:nth-child(11) > figure").text()
                    const img = image.match(urlRegex());
                    
                    res.json(
                         {result:{
                             Developed_By:'<./King Amda Developers.>',
                             author:'Pasindu Samarasingha',
                             data:{
                                   day_en:d2,
                                   day_si:day_s,
                                   date_en:date_e,
                                   date_si:date_s,
                                   img:img[0],
                                   pdf_link:pdf,
                             }
                         }
                     }
                     )

               }else {
                    console.log('something went wrong');
               }
          })

})


app.get('/group', (req, res) => { 
     var place = req.query.city
     
     const url2 = `http://goanyone.com/powercut/search.php?search=${place}`

     axios.get(url2)
     .then(response => {
          const data = response.data
          const $ = cheerio.load(data)
          const groups = []
          const Substations = []
          const Feeders = []
          const Affecting_Areas = []

          const test =[]
          const table = $("#goareas").text()
          $('#goareas > tbody > tr > td > div > h2', data).each(function () { 
               const group = $(this).text()
               groups.push(
                    group
               )
          })
          $("#goareas > tbody > tr > td:nth-child(2) > div", data).each(function () { 
               const Substation = $(this).text()

               n_r = Substation.replace(/\r?\n|\r/g, " ")  //! \n remove
               t_r = n_r.replace(/\r?\t|\r/g, " "); //? \t remove
               let subs = t_r.split(' ').join('') //* space remove

               Substations.push(
                    subs
               )
          })
          $("#goareas > tbody > tr > td:nth-child(3) > div", data).each(function () { 
               const Feeder = $(this).text()

               n_r = Feeder.replace(/\r?\n|\r/g, " ")  //! \n remove
               t_r = n_r.replace(/\r?\t|\r/g, " "); //? \t remove
               let feed = t_r.split(' ').join('') //* space remove

               Feeders.push(
                    feed
               )
          })
          $("#goareas > tbody > tr > td:nth-child(4) > div", data).each(function () { 
               const Affecting_Area = $(this).text()

               n_r = Affecting_Area.replace(/\r?\n|\r/g, " ")  //! \n remove
               t_r = n_r.replace(/\r?\t|\r/g, " "); //? \t remove
               let s_r = t_r.split(' ').join('') //* space remove
               let area = s_r.split(/[ ,]+/);
               Affecting_Areas.push({
                    area
               })
          })

          async function myDisplay() {  
               for(let i=0;i<groups.length; i++){
                    const group = await groups[i]
                    const subs = await Substations[i]
                    const feed = await Feeders[i]
                    const area = await Affecting_Areas[i].area
                    await test.push({
                         group,
                         subs,
                         feed,
                         area
                    })      
               }

          }  
          
          async function final(){
               await myDisplay() 
               if(0 < test.length){
                    res.json({result:{
                         Developed_By:'<./King Amda Developers.>',
                         author:'Pasindu Samarasingha',
                         data:{
                              city:place,
                              info:test, 
                         },
                    },
               })
               }else{
                    res.json({erro_en:`Cannot Found '${place}' Plz Check Spellings`,erro_si:`'${place}' කියලා ගමක් හොයාගන්න බැරි උනා පොඩ්ඩක් අකුරු හරිද කියලා බලන්න`})   
                  }
          }
          final()
          
     })

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
