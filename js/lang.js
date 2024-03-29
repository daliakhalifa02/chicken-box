let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a"),
    title = document.querySelector(".home__description"),
    desc = document.querySelector(".home__scroll_text"),
    aboutus = document.querySelector(".aboutus"),
    aboutdesc = document.querySelector(".about__description"),
    menutitle = document.querySelector(".menu_title"),
    crispy = document.querySelector(".crispy");
    crispy_desc = document.querySelector(".crispy_desc");
    box_combo = document.querySelector(".box_combo");
    box_desc = document.querySelector(".box_desc");
    wings = document.querySelector(".wings");
    wings_desc = document.querySelector(".wings_desc");
    sandwich = document.querySelector(".sandwich");
    sandwich_desc = document.querySelector(".sandwich_desc");
    lotus = document.querySelector(".lotus");
    lotus_desc = document.querySelector(".lotus_desc");
    oreo = document.querySelector(".oreo");
    oreo_desc = document.querySelector(".oreo_desc");
    menu__button = document.querySelector(".menu__button");
    exp = document.querySelector(".exp");
    desc1 = document.querySelector(".desc1");
    desc2 = document.querySelector(".desc2");
    contact__title = document.querySelector(".contact__title");
    fname = document.querySelector(".fname");
    email = document.querySelector(".email");
    message = document.querySelector(".message");
    contact__button = document.querySelector(".contact__button");
    hname = document.querySelector(".hname");
    hemail = document.querySelector(".hemail");
    hmessage = document.querySelector(".hmessage");
    home_nav = document.querySelector(".home_nav");
    about_nav = document.querySelector(".about_nav");
    menu_nav = document.querySelector(".menu_nav");
    review_nav = document.querySelector(".review_nav");


link.forEach(e =>{
    e.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        e.classList.add("active");

        let attr = e.getAttribute("language")

        title.textContent = data[attr].home__description
        desc.textContent = data[attr].home__scroll_text
        aboutus.textContent = data[attr].aboutus
        aboutdesc.textContent =  data[attr].about__description
        menutitle.textContent = data[attr].menu_title
        crispy.textContent = data[attr].crispy
        crispy_desc.textContent = data[attr].crispy_desc
        box_combo.textContent = data[attr].box_combo
        box_desc.textContent = data[attr].box_desc
        wings.textContent = data[attr].wings
        wings_desc.textContent = data[attr].wings_desc
        sandwich.textContent = data[attr].sandwich
        sandwich_desc.textContent = data[attr].sandwich_desc
        lotus.textContent = data[attr].lotus
        lotus_desc.textContent = data[attr].lotus_desc
        oreo.textContent = data[attr].oreo
        oreo_desc.textContent = data[attr].oreo_desc
        menu__button.textContent = data[attr].menu__button
        exp.textContent = data[attr].exp
        desc1.textContent = data[attr].desc1
        desc2.textContent = data[attr].desc2
        contact__title.textContent = data[attr].contact__title
        fname.textContent = data[attr].fname
        email.textContent = data[attr].email
        message.textContent = data[attr].message
        contact__button.textContent = data[attr].contact__button
        hname.textContent = data[attr].hname
        hemail.textContent = data[attr].hemail
        hmessage.textContent = data[attr].hmessage
        home_nav.textContent = data[attr].home_nav
        about_nav.textContent = data[attr].about_nav
        menu_nav.textContent = data[attr].menu_nav
        review_nav.textContent = data[attr].review_nav

    })  
})


let data = {
    Arabic: {
        home__description: "طعام شهي، لكل مزاج",
        home__scroll_text: "عرض المزيد",
        aboutus: "حولنا",
        about__description:"في صندوق الدجاج، نحن وجهتك المفضلة لتناول الدجاج المقرمش المثالي. انضم إلينا لتجربة مثيرة للشهية حيث يروي كل طبق قصة النكهة والراحة. تعال وجرب الفرق في صندوق الدجاج - حيث يلتقي الشغف بالكمال في كل لقمة.",
        menu_title:"ماذا نقدم",
        crispy:"دجاج مقرمش مقلي",
        crispy_desc:"شرائح لحم الدجاج المقرمشة المقدمة مع صلصة الغمس التي تختارها",
        box_combo:"علبة كومبو",
        box_desc:"مزيج من دجاجنا المقلي المميز مع اختيارك من الأطباق الجانبية.",
        wings:"أجنحة الدجاج",
        wings_desc:"أجنحة الدجاج المقرمشة المقلية والملقاة بصلصة اختيارك (بافلو، باربيكيو، خردل بالعسل، أو بارميزان بالثوم).",
        sandwich:"ساندويتش مقرمش",
        sandwich_desc:"صدر دجاج مقلي لذيذ مقدم على رغيف محمص مع الخس والطماطم وصلصتنا الخاصة.",
        lotus:"ميلك شيك لوتس",
        lotus_desc:"مزيج غني من الحليب الكريمي ومعجون بذور اللوتس الغريبة، مغطى بكريمة الخفق وبسكويت اللوتس المطحون لتقديم تحلية لذيذة.",
        oreo:"ميلك شيك أوريو",
        oreo_desc:" اندماج إلهي من الحليب الغني وكسر الكوكيز أوريو، مغطى بكريمة الخفق وفتات أوريو لإضافة لمسة مترفة.",
        menu__button:"عرض كل القائمة",
        exp:"شارك تجربتك.",
        desc1:"تعني ملاحظاتك الكثير بالنسبة لنا! نود أن نسمع عن تجربتك في مطعمنا.",
        desc2:"شارك أفكارك وساعدنا في خدمتك بشكل أفضل عن طريق ترك تقييم أدناه. شكرًا لتناول الطعام معنا!",
        contact__title:"اترك رسالة",
        fname:"الاسم الكامل",
        email:"البريد الإلكتروني",
        message:"الرسالة",
        contact__button:"إرسال الرسالة",
        hname:"الاسم الكامل",
        hemail:"البريد الإلكتروني",
        hmessage:"الرسالة",
        home_nav:"الصفحة الرئيسية",
        about_nav:"حولنا",
        menu_nav:"قائمة الطعام",
        review_nav:"تقييم",
    },
    English: {
        home__description: "Delicious food, for every mood",
        home__scroll_text:"Show More",
        aboutus: "About Us",
        about__description:"At Chicken Box, we're your go-to destination for perfectly crispy fried chicken and Southern hospitality. Join us for a mouthwatering experience where every dish tells a story of flavor and comfort. Come taste the difference at Chicken Box - where passion meets perfection in every bite.",
        menu_title:"What We Offer",
        crispy:"Crispy Fried Chicken",
        crispy_desc:"Tender strips of fried chicken served with your choice of dipping sauce.",
        box_combo:"Box Combo",
        box_desc:"A combination of our signature fried chicken with your choice of sides.",
        wings:"Chicken Wings",
        wings_desc:"Crispy fried chicken wings tossed in your choice of sauce (Buffalo, BBQ, Honey Mustard, or Garlic Parmesan).",
        sandwich:"Crispy Sandwich",
        sandwich_desc:"A succulent fried chicken breast served on a toasted bun with lettuce, tomato, and our special sauce.",
        lotus:"Lotus Milkshake",
        lotus_desc:"A luscious blend of creamy milk and exotic lotus seed paste, topped with whipped cream and crushed lotus biscuits for a delightful treat.",
        oreo:"Oreo Milkshake",
        oreo_desc:"A heavenly fusion of rich milk and crushed Oreo cookies, topped with whipped cream and Oreo crumbles for a decadent delight.",
        menu__button:"View All Menu",
        exp:"Share Your Experience",
        desc1:"Your feedback matters! We'd love to hear about your experience at our restaurant.",
        desc2:`Share your thoughts and help us serve you better by leaving a review below. Thank you for dining with us!`,
        contact__title:"Leave A Message",
        fname:"Full Name",
        email:"Email Address",
        message:"Message",
        contact__button:"Send Message",
        hname:"Full Name",
        hemail:"Email Address",
        hmessage:"Message",
        home_nav:"Home",
        about_nav:"About Us",
        menu_nav:"Menu",
        review_nav:"Review Us",
    },
    Turkish: {
        home__description:" Her ruha lezzetli yemek",
        home__scroll_text: "Daha Fazla Göster",
        aboutus: "Hakkımızda",
        about__description:"Chicken Box'ta, mükemmel derecede çıtır tavuk ve Güney misafirperverliği için gideceğiniz yeriz. Her yemekte lezzet ve konforun hikayesini anlattığı ağız sulandıran bir deneyim için bize katılın. Farkı Chicken Box'ta tatmaya gelin - tutkunun her lokmada mükemmel ile buluştuğu yer.",
        menu_title:"Sunduğumuz Şeyler",
        crispy:"Çıtır Tavuk Kızartması",
        crispy_desc: "Tavuk parçaları, tercih ettiğiniz daldırma sosu ile servis edilir.",
        box_combo:"Kutu Kombinasyonu",
        box_desc:"İmza tavuğumuzun yanında tercih ettiğiniz yan lezzetlerle bir kombinasyon.",
        wings:"Tavuk Kanatları",
        wings_desc:" Kızarmış çıtır tavuk kanatları, tercih ettiğiniz sosla (Buffalo, BBQ, Bal ve Hardal, veya Sarımsaklı Parmesan) karıştırılmış.",
        sandwich:"Çıtır Sandviç",
        sandwich_desc:"Izgara ekmeğin üzerinde servis edilen, marullar, domatesler ve özel sosumuz ile leziz bir tavuk göğsü.",
        lotus:"Lotus Sütü Shake",
        lotus_desc:"Kremsi süt ve egzotik lotus tohumu ezmesinin lezzetli bir karışımı, çırpılmış krema ve ezilmiş lotus bisküvileri ile süslenmiş bir lezzet şöleni için.",
        oreo:"Oreo Süt Shake",
        oreo_desc:" Zengin süt ve ezilmiş Oreo kurabiyelerinin göksel birleşimi, çırpılmış krema ve Oreo parçaları ile süslenmiş, lüks bir zevk için.",
        menu__button:"Tüm Menüyü Gör",
        exp:"Deneyimini Paylaş.",
        desc1:"Geri bildiriminiz önemli! Restoranımızdaki deneyiminiz hakkında duymaktan mutluluk duyarız.",
        desc2:"Düşüncelerinizi paylaşın ve bize daha iyi hizmet etmemize yardımcı olmak için aşağıya bir inceleme bırakın. Bizimle yemek yediğiniz için teşekkür ederiz!",
        contact__title:"Mesaj Bırak",
        fname:"Ad ve soyad",
        email:"E-posta Adresi",
        message:"Mesaj",
        contact__button:"Mesaj Gönder",
        hname:"Ad ve soyad",
        hemail:"E-posta Adresi",
        hmessage:"Mesaj",
        home_nav:"Ana Sayfa",
        about_nav:"Hakkımızda",
        menu_nav:"Menü",
        review_nav:"İnceleme",
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Get all language links
    var langLinks = document.querySelectorAll('.dropdown-content a');
  
    // Add click event listener to each language link
    langLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Get the language and flag from the clicked link
        var language = this.getAttribute('language');
        var flag = this.querySelector('.flag-icon').cloneNode(true);
  
        // Update the dropdown button text and flag
        var dropbtn = document.querySelector('.dropbtn');
        dropbtn.innerHTML = '';
        dropbtn.appendChild(flag);
        // dropbtn.appendChild(document.createTextNode(language));
      });
    });
  });
  