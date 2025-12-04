export interface CurriculumWord {
  en: string;
  ar: string;
  img: string;
  pro: string;
}

export const curriculumData: Record<string, Record<string, CurriculumWord[]>> = {
  "5": {
     "1": [
         {en:"Arabic", ar:"اللغة العربية", img:"Arabic.jpg", pro:"/ˈærəbɪk/"},
         {en:"English", ar:"اللغة الإنجليزية", img:"English.jpg", pro:"/ˈɪŋɡlɪʃ/"},
         {en:"Maths", ar:"الرياضيات", img:"Maths .jpg", pro:"/mæθs/"},
         {en:"PE", ar:"التربية الرياضية", img:"PE.png", pro:"/ˌpiː ˈiː/"},
         {en:"Science", ar:"العلوم", img:"science.jpg", pro:"/ˈsaɪəns/"}
     ],
     "2": [
         {en:"Art", ar:"فن / رسم", img:"art.webp", pro:"/ɑːrt/"},
         {en:"Cinema", ar:"سينما", img:"cinema.jpeg", pro:"/ˈsɪnəmə/"},
         {en:"Class", ar:"صف / حصة", img:"class.jpg", pro:"/klæs/"},
         {en:"Email", ar:"بريد إلكتروني", img:"email.png", pro:"/ˈiːmeɪl/"},
         {en:"Film", ar:"فيلم", img:"film.jpeg", pro:"/fɪlm/"},
         {en:"Internet", ar:"إنترنت", img:"internet.jpeg", pro:"/ˈɪntərnet/"},
         {en:"Parents", ar:"الوالدين", img:"parents.jpeg", pro:"/ˈperənts/"},
         {en:"Race", ar:"سباق", img:"race.jpg", pro:"/reɪs/"},
         {en:"Twin", ar:"توأم", img:"twin.jpeg", pro:"/twɪn/"},
         {en:"Work", ar:"عمل", img:"work.webp", pro:"/wɜːrk/"}
     ],
     "4": [
         {en:"Boat", ar:"قارب", img:"boat.jpeg", pro:"/boʊt/"},
         {en:"Building", ar:"مبنى", img:"building.png", pro:"/ˈbɪldɪŋ/"},
         {en:"Cable car", ar:"تلفريك", img:"cable car.jpeg", pro:"/ˈkeɪbl kɑːr/"},
         {en:"Famous", ar:"مشهور", img:"famous.jpeg", pro:"/ˈfeɪməs/"},
         {en:"Father", ar:"أب", img:"father.jpeg", pro:"/ˈfɑːðər/"},
         {en:"Hiking", ar:"المشي الجبلي", img:"hiking.jpeg", pro:"/ˈhaɪkɪŋ/"},
         {en:"Mother", ar:"أم", img:"mother.jpeg", pro:"/ˈmʌðər/"},
         {en:"People", ar:"ناس", img:"people.jpg", pro:"/ˈpiːpl/"},
         {en:"Photo", ar:"صورة", img:"photo.webp", pro:"/ˈfoʊtoʊ/"},
         {en:"Stadium", ar:"ملعب / استاد", img:"stadium.jpg", pro:"/ˈsteɪdiəm/"},
         {en:"Valley", ar:"وادي", img:"valley.jpeg", pro:"/ˈvæli/"},
         {en:"Wheel", ar:"عجلة / دولاب الهواء", img:"wheel.jpeg", pro:"/wiːl/"}
     ],
     "6": [
         {en:"Hopping", ar:"القفز (على رجل واحدة)", img:"hopping.png", pro:"/ˈhɑːpɪŋ/"},
         {en:"Jumping", ar:"القفز", img:"jumping.jpeg", pro:"/ˈdʒʌmpɪŋ/"},
         {en:"Running", ar:"الجري", img:"running.jpeg", pro:"/ˈrʌnɪŋ/"},
         {en:"Skipping", ar:"نط الحبل", img:"skipping.jpeg", pro:"/ˈskɪpɪŋ/"},
         {en:"Swimming", ar:"السباحة", img:"swimming.jpeg", pro:"/ˈswɪmɪŋ/"}
     ],
     "8": [
         {en:"Cold", ar:"بارد", img:"cold.jpeg", pro:"/koʊld/"},
         {en:"Hot", ar:"حار", img:"hot.jpeg", pro:"/hɑːt/"},
         {en:"Rainy", ar:"ممطر", img:"rainy.jpeg", pro:"/ˈreɪni/"},
         {en:"Snowy", ar:"مثلج", img:"snowy.jpeg", pro:"/ˈsnoʊi/"},
         {en:"Windy", ar:"عاصف", img:"windy.jpeg", pro:"/ˈwɪndi/"}
     ]
  },
  "6": {
    "1": [
        {en:"Accident", ar:"حادث", img:"accident.jpeg", pro:"/ˈæksɪdənt/"},
        {en:"Awful", ar:"فظيع / سيء جداً", img:"awful.webp", pro:"/ˈɔːfl/"},
        {en:"Bang", ar:"ارتطام / صوت خبطة", img:"bang.jpg", pro:"/bæŋ/"},
        {en:"Call", ar:"يتصل / ينادي", img:"call.jpg", pro:"/kɔːl/"},
        {en:"Crash", ar:"يتحطم / يصطدم", img:"crash.webp", pro:"/kræʃ/"},
        {en:"Fall", ar:"يسقط", img:"fall.gif", pro:"/fɔːl/"},
        {en:"Miss", ar:"يفتقد / يخطئ", img:"miss.avif", pro:"/mɪs/"},
        {en:"Stairs", ar:"درج / سلالم", img:"stairs.jpeg", pro:"/sterz/"},
        {en:"Still", ar:"لا يزال / ساكن", img:"still.jpg", pro:"/stɪl/"},
        {en:"Summer camp", ar:"مخيم صيفي", img:"summer camp.jpeg", pro:"/ˈsʌmər kæmp/"},
        {en:"Tired", ar:"متعب", img:"tired.jpeg", pro:"/ˈtaɪərd/"},
        {en:"Welcome back", ar:"أهلاً بعودتك", img:"welcome back.webp", pro:"/ˌwelkəm ˈbæk/"}
    ],
    "2": [
        {en:"Anyone", ar:"أي شخص", img:"anyone.png", pro:"/ˈeniwʌn/"},
        {en:"Argue", ar:"يجادل", img:"argue.jpeg", pro:"/ˈɑːrɡjuː/"},
        {en:"Cry", ar:"يبكي", img:"cry.jpeg", pro:"/kraɪ/"},
        {en:"Give back", ar:"يعيد (الشيء)", img:"give back.jpeg", pro:"/ɡɪv bæk/"},
        {en:"Go away", ar:"يذهب بعيداً", img:"Go away.webp", pro:"/ɡoʊ əˈweɪ/"},
        {en:"Invite", ar:"يدعو", img:"invite.jpg", pro:"/ɪnˈvaɪt/"},
        {en:"Lend", ar:"يقرض / يعير", img:"lend.jpeg", pro:"/lend/"},
        {en:"Problem", ar:"مشكلة", img:"problem.jpeg", pro:"/ˈprɒbləm/"},
        {en:"Quiz", ar:"اختبار قصير", img:"quiz.jpg", pro:"/kwɪz/"},
        {en:"Share", ar:"يشارك", img:"share.jpg", pro:"/ʃer/"},
        {en:"Someone", ar:"شخص ما", img:"someone.jpg", pro:"/ˈsʌmwʌn/"},
        {en:"Understand", ar:"يفهم", img:"understand.jpeg", pro:"/ˌʌndərˈstænd/"}
    ],
    "4": [
        {en:"Adventure", ar:"مغامرة", img:"adventure.jpeg", pro:"/ədˈventʃər/"},
        {en:"Burst", ar:"ينفجر", img:"burst.jpeg", pro:"/bɜːrst/"},
        {en:"Chase", ar:"يطارد", img:"chase.jpeg", pro:"/tʃeɪs/"},
        {en:"Eighteenth", ar:"الثامن عشر (18)", img:"eighteenth.jpeg", pro:"/ˌeɪˈtiːnθ/"},
        {en:"Fifteenth", ar:"الخامس عشر (15)", img:"fifteenth.jpeg", pro:"/ˌfɪfˈtiːnθ/"},
        {en:"Fourteenth", ar:"الرابع عشر (14)", img:"fourteenth.jpeg", pro:"/ˌfɔːrˈtiːnθ/"},
        {en:"Nineteenth", ar:"التاسع عشر (19)", img:"nineteenth.jpeg", pro:"/ˌnaɪnˈtiːnθ/"},
        {en:"Seventeenth", ar:"السابع عشر (17)", img:"seventeenth.jpeg", pro:"/ˌsevənˈtiːnθ/"},
        {en:"Sixteenth", ar:"السادس عشر (16)", img:"sixteenth.jpeg", pro:"/ˌsɪksˈtiːnθ/"},
        {en:"Thirteenth", ar:"الثالث عشر (13)", img:"thirteenth.jpeg", pro:"/ˌθɜːrˈtiːnθ/"},
        {en:"Thirtieth", ar:"الثلاثون (30)", img:"thirtieth.jpeg", pro:"/ˈθɜːrtiəθ/"},
        {en:"Turn over", ar:"يقلب (الصفحة)", img:"turn over.jpeg", pro:"/tɜːrn ˈoʊvər/"},
        {en:"Twentieth", ar:"العشرون (20)", img:"twentieth.jpeg", pro:"/ˈtwentiəθ/"},
        {en:"Twenty-first", ar:"الحادي والعشرون (21)", img:"twenty first.png", pro:"/ˌtwenti ˈfɜːrst/"}
    ],
    "6": [
        {en:"Attack", ar:"يهاجم", img:"attack.jpg", pro:"/əˈtæk/"},
        {en:"Diver", ar:"غواص", img:"diver.jpg", pro:"/ˈdaɪvər/"},
        {en:"Funny", ar:"مضحك", img:"funny.jpg", pro:"/ˈfʌni/"},
        {en:"Mouse", ar:"فأر", img:"mouse.jpg", pro:"/maʊs/"},
        {en:"Noise", ar:"ضجيج / إزعاج", img:"noise.jpg", pro:"/nɔɪz/"},
        {en:"Other", ar:"آخر", img:"other.jpg", pro:"/ˈʌðər/"},
        {en:"Ox", ar:"ثور", img:"ox.jpg", pro:"/ɑːks/"}, 
        {en:"Push", ar:"يدفع", img:"push.jpg", pro:"/pʊʃ/"},
        {en:"Safe", ar:"آمن", img:"safe.jpg", pro:"/seɪf/"},
        {en:"Together", ar:"معاً", img:"together.jpg", pro:"/təˈɡeðər/"},
        {en:"While", ar:"بينما", img:"while.png", pro:"/waɪl/"}
    ],
    "8": [
        {en:"Burger", ar:"برجر", img:"burger.jpg", pro:"/ˈbɜːrɡər/"},
        {en:"Prefer", ar:"يفضل", img:"prefer.jpg", pro:"/prɪˈfɜːr/"},
        {en:"A little", ar:"قليل", img:"a little.jpg", pro:"/ə ˈlɪtl/"},
        {en:"Bottom", ar:"أسفل", img:"bottom.jpg", pro:"/ˈbɑːtəm/"},
        {en:"Fizzy drink", ar:"مشروب غازي", img:"fizzy drink.jpg", pro:"/ˈfɪzi drɪŋk/"},
        {en:"Food pyramid", ar:"الهرم الغذائي", img:"food pyramid.jpg", pro:"/fuːd ˈpɪrəmɪd/"},
        {en:"Fried", ar:"مقلي", img:"fried.jpg", pro:"/fraɪd/"},
        {en:"Good advice", ar:"نصيحة جيدة", img:"good advice.jpg", pro:"/ɡʊd ədˈvaɪs/"},
        {en:"Should", ar:"يجب / ينبغي", img:"should.jpg", pro:"/ʃʊd/"},
        {en:"Soup", ar:"حساء / شوربة", img:"soup.jpg", pro:"/suːp/"},
        {en:"Sweet", ar:"حلوى", img:"sweet.jpg", pro:"/swiːt/"},
        {en:"Top", ar:"قمة / أعلى", img:"top.jpg", pro:"/tɑːp/"}
    ]
  },
  "7": {
    "2": [
        {en:"Always", ar:"دائماً", img:"always.jpg", pro:"/ˈɔːlweɪz/"},
        {en:"Nurse", ar:"ممرضة", img:"nurse.jpg", pro:"/nɜːrs/"},
        {en:"Usually", ar:"عادةً", img:"usually.jpg", pro:"/ˈjuːʒuəli/"},
        {en:"Sometimes", ar:"أحياناً", img:"sometimes.jpg", pro:"/ˈsʌmtaɪmz/"},           
        {en:"Often", ar:"غالبا", img:"often.jpg", pro:"/ɔːfn/"},              
        {en:"Every", ar:"كل", img:"every.jpg", pro:"/ˈevri/"}
    ],
    "3": [
        {en:"Email", ar:"بريد إلكتروني", img:"email.jpg", pro:"/ˈiːmeɪl/"},
        {en:"Dear", ar:"عزيزي", img:"dear.jpg", pro:"/dɪr/"}
    ],
    "5": [
        {en:"Now", ar:"الآن", img:"now.jpg", pro:"/naʊ/"},
        {en:"Listen", ar:"استمع", img:"listen.jpg", pro:"/ˈlɪsn/"}
    ],
    "7": [
        {en:"Feel", ar:"يشعر", img:"feel.jpg", pro:"/fiːl/"},
        {en:"Smell", ar:"يشم / رائحة", img:"smell.jpg", pro:"/smel/"}
    ],
    "8": [
        {en:"Address", ar:"عنوان", img:"address.jpg", pro:"/əˈdres/"},
        {en:"Chat", ar:"دردشة", img:"chat.jpg", pro:"/tʃæt/"}
    ]
  },
  "8": {
    "1": [
        {en:"Channel", ar:"قناة", img:"channel.png", pro:"/ˈtʃænəl/"},
        {en:"Dining room", ar:"غرفة الطعام", img:"dining room.jpg", pro:"/ˈdaɪnɪŋ ruːm/"},
        {en:"Documentary", ar:"فيلم وثائقي", img:"documentary.jpg", pro:"/ˌdɒkjuˈmentəri/"},
        {en:"Dry", ar:"جاف", img:"Dry.jpeg", pro:"/draɪ/"},
        {en:"Family", ar:"عائلة", img:"family.jpg", pro:"/ˈfæməli/"},
        {en:"Forecast", ar:"توقعات الطقس", img:"forecast.jpg", pro:"/ˈfɔːrkæst/"},
        {en:"Go online", ar:"يتصل بالإنترنت", img:"go online.jpg", pro:"/ɡoʊ ˈɒnlaɪn/"},
        {en:"Grandma", ar:"جدة", img:"grandma.jpg", pro:"/ˈɡrænmɑː/"},
        {en:"Hall", ar:"صالة / ردهة", img:"hall.jpg", pro:"/hɔːl/"},
        {en:"Hurricane", ar:"إعصار", img:"hurricane.jpg", pro:"/ˈhʌrɪkeɪn/"},
        {en:"In time", ar:"في الوقت المناسب", img:"in time.png", pro:"/ɪn taɪm/"},
        {en:"Information", ar:"معلومات", img:"information.jpg", pro:"/ˌɪnfərˈmeɪʃən/"},
        {en:"Landline", ar:"هاتف أرضي", img:"landline.jpg", pro:"/ˈlændlaɪn/"},
        {en:"Mrs", ar:"السيدة", img:"mrs.jpg", pro:"/ˈmɪsɪz/"},
        {en:"Nationality", ar:"جنسية", img:"nationality.jpg", pro:"/ˌnæʃəˈnæləti/"},
        {en:"On the phone", ar:"على الهاتف", img:"on the phone.jpg", pro:"/ɒn ðə foʊn/"},
        {en:"Project", ar:"مشروع", img:"project.jpg", pro:"/ˈprɒdʒekt/"},
        {en:"Serious", ar:"جاد / خطير", img:"serious.jpg", pro:"/ˈsɪriəs/"},
        {en:"Special", ar:"خاص / مميز", img:"special.jpg", pro:"/ˈspeʃəl/"},
        {en:"Speed", ar:"سرعة", img:"speed.jpg", pro:"/spiːd/"},
        {en:"Wall", ar:"جدار / حائط", img:"wall.jpg", pro:"/wɔːl/"},
        {en:"Wardrobe", ar:"خزانة ملابس", img:"wardrobe.jpg", pro:"/ˈwɔːrdroʊb/"},
        {en:"Wet", ar:"مبلل / رطب", img:"wet.jpg", pro:"/wet/"}
    ],
    "3": [
        {en:"Always", ar:"دائماً", img:"always.jpg", pro:"/ˈɔːlweɪz/"},
        {en:"Usually", ar:"عادةً", img:"usually.jpg", pro:"/ˈjuːʒuəli/"},
        {en:"Often", ar:"غالباً", img:"often.jpg", pro:"/ˈɔːfn/"},
        {en:"Sometimes", ar:"أحياناً", img:"sometimes.jpg", pro:"/ˈsʌmtaɪmz/"},
        {en:"Never", ar:"أبداً", img:"never.jpg", pro:"/ˈnevər/"},
        {en:"Every", ar:"كل", img:"every.jpg", pro:"/ˈevri/"},
        {en:"Fact", ar:"حقيقة", img:"fact.jpg", pro:"/fækt/"},
        {en:"Habit", ar:"عادة", img:"habit.jpg", pro:"/ˈhæbɪt/"},
        {en:"Routine", ar:"روتين", img:"routine.jpg", pro:"/ruːˈtiːn/"},
        {en:"Now", ar:"الآن", img:"now.jpg", pro:"/naʊ/"},
        {en:"Look", ar:"انظر", img:"look.jpg", pro:"/lʊk/"},
        {en:"Listen", ar:"استمع", img:"listen.jpg", pro:"/ˈlɪsn/"}
    ],
    "5": [
        {en:"Age", ar:"عمر", img:"age.jpg", pro:"/eɪdʒ/"},
        {en:"Culture", ar:"ثقافة", img:"culture.jpg", pro:"/ˈkʌltʃər/"},
        {en:"Guitar", ar:"جيتار", img:"guitar.jpg", pro:"/ɡɪˈtɑːr/"},
        {en:"Pizza", ar:"بيتزا", img:"pizza.jpg", pro:"/ˈpiːtsə/"},
        {en:"Poem", ar:"قصيدة", img:"poem.jpg", pro:"/ˈpoʊəm/"},
        {en:"Folk song", ar:"أغنية شعبية", img:"folk song.jpg", pro:"/foʊk sɔːŋ/"},
        {en:"Instrument", ar:"آلة موسيقية", img:"instrument.jpg", pro:"/ˈɪnstrəmənt/"},
        {en:"Used to", ar:"اعتاد أن", img:"used to.jpg", pro:"/ˈjuːst tuː/"}
    ],
    "7": [
        {en:"Feel", ar:"يشعر", img:"feel.jpg", pro:"/fiːl/"},
        {en:"Look", ar:"يبدو", img:"look.jpg", pro:"/lʊk/"},
        {en:"Smell", ar:"رائحة", img:"smell.jpg", pro:"/smel/"},
        {en:"Sound", ar:"صوت", img:"sound.jpg", pro:"/saʊnd/"},
        {en:"Taste", ar:"طعم", img:"taste.jpg", pro:"/teɪst/"},
        {en:"Need", ar:"يحتاج", img:"need.jpg", pro:"/niːd/"},
        {en:"Can", ar:"يستطيع", img:"can.jpg", pro:"/kæn/"},
        {en:"Could", ar:"استطاع", img:"could.jpg", pro:"/kʊd/"},
        {en:"Watch", ar:"يشاهد", img:"watch.jpg", pro:"/wɑːtʃ/"}
    ],
    "8": [
        {en:"Paris", ar:"باريس", img:"paris.jpg", pro:"/ˈpærɪs/"},
        {en:"Radio", ar:"راديو", img:"radio.jpg", pro:"/ˈreɪdioʊ/"}
    ]
  },
  "9": {
    "1": [
        {en:"Airport", ar:"مطار", img:"airport.jpg", pro:"/ˈerpɔːrt/"},
        {en:"Attendant", ar:"مضيف / مرافق", img:"attendent.jpeg", pro:"/əˈtendənt/"},
        {en:"Captain", ar:"قبطان / كابتن", img:"captain.jpeg", pro:"/ˈkæptɪn/"},
        {en:"Community", ar:"مجتمع", img:"community.jpeg", pro:"/kəˈmjuːnəti/"},
        {en:"Cooking", ar:"طبخ", img:"cooking.jpeg", pro:"/ˈkʊkɪŋ/"},
        {en:"Damascus Gate", ar:"باب العمود", img:"damascus gate.jpeg", pro:"/dəˈmæskəs ɡeɪt/"},
        {en:"Gate", ar:"بوابة", img:"gate.png", pro:"/ɡeɪt/"},
        {en:"Guide", ar:"مرشد", img:"guide.jpeg", pro:"/ɡaɪd/"},
        {en:"Land", ar:"يهبط", img:"land.jpeg", pro:"/lænd/"},
        {en:"Landing card", ar:"بطاقة هبوط", img:"landing card.jpg", pro:"/ˈlændɪŋ kɑːrd/"},
        {en:"Local", ar:"محلي", img:"local.jpeg", pro:"/ˈloʊkl/"},
        {en:"Mini-bus", ar:"حافلة صغيرة", img:"mini-bus.jpeg", pro:"/ˈmɪni bʌs/"},
        {en:"Museum", ar:"متحف", img:"museum.jpeg", pro:"/mjuˈziːəm/"},
        {en:"Passport", ar:"جواز سفر", img:"passport.jpeg", pro:"/ˈpæspɔːrt/"},
        {en:"Religious", ar:"ديني", img:"religious.jpg", pro:"/rɪˈlɪdʒəs/"},
        {en:"Right now", ar:"الآن / فوراً", img:"right now.png", pro:"/raɪt naʊ/"},
        {en:"Schedule", ar:"جدول مواعيد", img:"schedule.jpeg", pro:"/ˈskedʒuːl/"},
        {en:"Site", ar:"موقع / مكان", img:"site.jpeg", pro:"/saɪt/"},
        {en:"Take off", ar:"يقلع (للطائرة)", img:"take off.png", pro:"/teɪk ɔːf/"},
        {en:"Through", ar:"عبر / خلال", img:"through.jpeg", pro:"/θruː/"},
        {en:"Village", ar:"قرية", img:"village.jpeg", pro:"/ˈvɪlɪdʒ/"}
    ],
    "2": [
        {en:"Away", ar:"بعيداً، غائباً", img:"away.jpg", pro:"/əˈweɪ/"},
        {en:"Continue", ar:"يستمر، يواصل", img:"continue.jpeg", pro:"/kənˈtɪnjuː/"},
        {en:"Dry", ar:"جاف، يجفف", img:"dry.jpeg", pro:"/draɪ/"},
        {en:"Keep out", ar:"منع الدخول", img:"keep out.png", pro:"/kiːp aʊt/"},
        {en:"Relax", ar:"يسترخي، يستريح", img:"relax.jpg", pro:"/rɪˈlæks/"},
        {en:"Put up", ar:"يثبت، ينصب", img:"put up.jpg", pro:"/pʊt ʌp/"},
        {en:"Wet", ar:"مبلل، يبلل", img:"wet.jpg", pro:"/wet/"},
        {en:"Carpet", ar:"سجادة", img:"carpet.jpg", pro:"/ˈkɑːpɪt/"},
        {en:"Curtain", ar:"ستارة", img:"curtain.jpeg", pro:"/ˈkɜːtən/"},
        {en:"Dining room", ar:"غرفة الطعام", img:"dining room.jpg", pro:"/ˈdaɪnɪŋ ruːm/"},
        {en:"Hall", ar:"ردهة، مدخل", img:"hall.jpg", pro:"/hɔːl/"},
        {en:"Wall", ar:"حائط، جدار", img:"wall.jpg", pro:"/wɔːl/"},
        {en:"Wardrobe", ar:"خزانة ملابس", img:"wardrobe.jpg", pro:"/ˈwɔːrdroʊb/"},
        {en:"In time", ar:"في الوقت المناسب", img:"in time.jpg", pro:"/ɪn taɪm/"},
        {en:"Special", ar:"خاص، مميز", img:"special.jpg", pro:"/ˈspeʃəl/"}
    ]
  }
};