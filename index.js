(function () {
  var NAV_BAR_HTML = `
  <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="300">
  <div class="container">
    <div class="navbar-translate">
      <a class="navbar-brand" href="https://demos.creative-tim.com/paper-kit/index.html" rel="tooltip" title="Coded by Creative Tim" data-placement="bottom" target="_blank">
        Paper Kit 2
      </a>
      <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="../index.html" class="nav-link"><i class="nc-icon nc-layout-11"></i> Components</a>
        </li>
        <li class="nav-item">
          <a href="https://demos.creative-tim.com/paper-kit-2/docs/1.0/getting-started/introduction.html" target="_blank" class="nav-link"><i class="nc-icon nc-book-bookmark"></i> Documentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
            <i class="fa fa-twitter"></i>
            <p class="d-lg-none">Twitter</p>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
            <i class="fa fa-facebook-square"></i>
            <p class="d-lg-none">Facebook</p>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
            <i class="fa fa-instagram"></i>
            <p class="d-lg-none">Instagram</p>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial" target="_blank">
            <i class="fa fa-github"></i>
            <p class="d-lg-none">GitHub</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  `;


  window.onLoadBackground = function () {
    // section profile-content
    // document.querySelector(".page-header.page-header-xs")
    document.querySelector(".section.profile-content")
      .style.backgroundImage = "url('./education-1920.jpg')";
  }

  var PAGE_HEADER = `
    <div class="page-header page-header-xs" data-parallax="true" ">
    </div>
`;

  var PROFILE_CONTENT = `
  <div class="section profile-content" style="background-image: url('./education-320.jpg');">
    <img 
      src="./education-1920.jpg" 
      style="display: none;"
      onload="onLoadBackground()"
    />
    ${PAGE_HEADER}
    <div class="container">
      <div class="owner">
        <div class="avatar">
          <img src="./avatar.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive">
        </div>
        <div class="name">
          <h1 class="title">
            Catherine
            <br />
          </h1>
          <h4 class="description">English Teacher and Dubber</h4>
        </div>
      </div>
      <div class="row about-myself">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <p>
          Hello my name is Catherine, I’m a native English speaker from the United States. I’m a professional 
          certified English teacher, TESOL TESL TEFL, certified through Oxford.
          </p>
        </div>
      </div>
      <div class="skills-section"></div>
    </div>
    <div id="blur"></div>
  </div>
  `;

  var FOOTER = `
  <footer class="footer">
  <div class="container">
    <div class="row">
      <nav class="footer-nav">
        <ul>
          <li>
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com/" target="_blank">Blog</a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license" target="_blank">Licenses</a>
          </li>
        </ul>
      </nav>
      <div class="credits ml-auto">
        <span class="copyright">
          ©
          <script>
            document.write(new Date().getFullYear())
          </script>, made with <i class="fa fa-heart heart"></i> by Creative Tim
        </span>
      </div>
    </div>
  </div>
</footer>
  `;

var TEACHER_CONTENT = `
<div class="section teacher">
  <div class="container">
    <h3 class="italki-header">Italki</h3>
    <br />
    <br />
  </div>
</div>
` 


var VOICE_COVER_GALLERY = `
<div class="section voice-cover">
  <div class="container">
    <h3 class="italki-header">My Voice Cover Videos</h3>
    <br />
    <br />
  </div>
</div>
` 

  var INTRO_VIDEO = `
  <div class="row" style="height: 50vmin;">
    <div id="player"></div>
  </div>
`;


  // var QUOTE_3_HEBREW =
  // "I signed up to Italki for practicing my verbal English. " 
  // + "My first lesson with Catherine was the first time I spoke in English, but I have a good background. " 


  var QUOTE_3_ENGLISH =
    "I signed up to Italki for practicing my verbal English. " 
  + "My first lesson with Catherine was the first time I spoke in English, but I have a good background. " 
  + "After around 10 hours of practicing with her, I pased an interview in English, the feeling was amazing. " 
  + "<br />"
  + "<br />"
  + "If you are looking for an amazing teacher, an interesting person and great converstaions, you should totaly schedule a lesson with her. "
  + "An impertant thing, she knows <b>how</b> to correct your mistakes (not everyone knows how to do that). "    
  + "She makes you feel comfortable about yourself and together you build your confident. "
  + "I have not met a teacher like Catherine, she really cares about her students and pushes them to their limits. "
  + "When talking to her, you can hear her passion about learning and teaching languages. "
  + "<br />"
  + "<br />"
  + "My main goal was reaching the level that I could pass an interview in English and I could communicate with people in a work place"
  + "<br />"    
  + "I am working in my work place over a year now, and I keep scheduling meetings with her, I think it says everything. "

  var QUOTE_3 =
      "היי, " 
    + "<br />"
    + "החלטתי להסתיר הקדשה בעברית (אני יודע כמה את אוהבת עברית"
    + "&#128522;"
    + "). "
    + "<br />"
    + "<br />"
    + "אז ככה, כשחשבתי לשפר את האנגלית שלי לא היו לי ציפיות גדולות מידי. "
    + "הנחתי שאגיע לרמה סבירה תוך כמה חודשים, אבל איתך התהליך היה מאוד מהיר. "
    + "הייתי בהרבה מסגרות, ובחיים לא פגשתי מישהו כמוך, כל כך מסורה ומשקיעה. "
    + 'אפילו כשבדקתי ״בתי ספר״ לשיפור האנגלית, '
    + "עשו לי מבחן קטן ונאלצתי להקריא משהו בקול, הקראתי בצורה שגויה והבוחנת תיקנה אותי אבל בצורה מזלזלת. "
    + "את פשוט עלית על כל הציפיות והרבה מעבר להן. "
    + "<br />"
    + "בנוסף, את הצלחת בדרכך המיוחדת להעביר לי את התשוקה ללמוד עוד, וזה מדהים בעיניי. "
    + "אני לא מאמין שמישהו אחר היה עושה את זה כל כך טוב כמוך. "
    + "מעבר לזה שאת מאוד מקצועית ומשקיעה, את גם אדם שיחה מאוד מעניין. "
    + "לא האמנתי שאהנה כל כך מלדבר אנגלית. "
    + "<br />"
    + "<br />"
    + "אני לא יודע עד מתי תמשיכי ללמד ואם נשמור על קשר אחרי, אז לפחות שתהיה לך מזכרת ממני"
    + "&#128522;"
    + "תמשיכי בעבודת הקודש שאת עושה, כי את עושה עבודה מדהימה!"

    // // + "החלטתי להסתיר סוג של הקדשה בעברית, היא מתגלה כאשר לוחצים על השם שלי. " 
    // + "בגדול זה תרגום חופשי למה שכבר כתבתי באנגלית. "
    // + "<br />"
    // + "<br />"
    // + "נרשמתי ל Italki לפני שנה וחצי כדי לתרגל את הדיבור באנגלית. "
    // + "אחרי כ10 שעות תרגול איהה, עברתי ראיון ראשון באנגלית בהצלחה, ההרגשה הייתה מדהימה. "
    + "<br />"
    + "<br />"

  function renderQuote(quote, id, name) {
    var html = "<blockquote" 
    + ' id="' 
    + id 
    + '" >'
    + "<p>"
    + quote
    + "</p>" 
    + '<span class="author">' 
    + name
    + "</span>" 
    + "</blockquote>";
    var Quote = new Component(html);
    return Quote;
  }

  function renderQuotes() {
    var row = document.createElement("div");
    row.className = "row reviews";

    var quote1 = renderQuote(
      "It was our 22nd lesson. It's always a very friendly and pleasant atmosphere during every our class and I always feel free to ask her any question because of her tolerance and respect to other cultures. We can talk about everything. Also there is another thing I really like and it's corrections of my mistakes. It means she listens to me and she cares about what and how I say. That's exactly what I needed from native speakers.",
      "blockquote-1",
      "Indiria"
    );
    var quote2 = renderQuote(
      "Fabulous, Catherine was supportive and helpful in pushing me just to where I knew I was learning at my maximum rate.",
      "blockquote-2",
      "Jackson Berler"
    );

    var quote3 = renderQuote(
      QUOTE_3_ENGLISH,
      "blockquote-3-en",
      "— Liran Reuven"
    )

    var quote3He = renderQuote(
      QUOTE_3,
      "blockquote-3-he",
      "— לירן ראובן"
    )

    var quoteWrapper = document.createElement('div');
    quoteWrapper.className = "blockquote-wrapper";
    quoteWrapper.id = "blockquote-3";

    var quoteInner = document.createElement('div');
    quoteInner.className = "blockquote-inner";
    
    quoteWrapper.style.setProperty('position', 'relative');
    var overlay = document.createElement('div');
    // overlay.style.setProperty('height', '100%');
    // overlay.style.setProperty('position', 'absolute');
    // overlay.style.setProperty('top', 0);
    // overlay.style.setProperty('width', '100%');
    // overlay.style.setProperty('background-color', 'black');
    overlay.className = 'overlay';
    quoteWrapper.appendChild(overlay);
    quoteWrapper.appendChild(quoteInner);
    quoteInner.appendChild(quote3);
    quoteInner.appendChild(quote3He)

    quote3.querySelector('.author').addEventListener('click', function() {
      // quoteWrapper.classList.remove("fade-in-long");
      // setTimeout(() => {
        quoteInner.classList.add('flip');
      // }, 1000);
    })

    var header = document.createElement("h4");
    header.className = "reviews-header";
    header.textContent = "What my students think about me:";

    row.appendChild(header);
    row.appendChild(quote1);
    row.appendChild(quote2);
    row.appendChild(quoteWrapper);
    // row.appendChild(quote3);

    return row;
  }

  function renderVideo({ id, width, height, header, original }) {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/" + id;
    iframe.setAttribute("frameborder", "0");  
    iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");  
    iframe.setAttribute("allowfullscreen", "true");  
    iframe.setAttribute("width", "100%");  
    iframe.setAttribute("height", "100%");  

    // var div = document.createElement("div");
    // div.className = "video";

    // var h6 = document.createElement("h6");
    // h6.className = 'type';
    // h6.textContent = header;
    // div.appendChild(h6);
    // div.appendChild(iframe);

    const video = document.createElement('div');
    video.className = 'video';
    video.appendChild(iframe);

    const linkToOriginal = document.createElement('a');
    linkToOriginal.className = 'btn btn-danger btn-round';
    linkToOriginal.target="_blank";
    linkToOriginal.href = 'https://www.youtube.com/watch?v=' + original;

    const longText = document.createElement('span');
    longText.className = 'btn long-text';
    longText.textContent = "Watch the original video on YouTube";

    const shortText = document.createElement('span');
    shortText.className = 'btn short-text';
    shortText.textContent = "Watch the original video";


    const icon = document.createElement('i');
    icon.className = 'fa fa-youtube-play'
    
    linkToOriginal.appendChild(icon);
    // linkToOriginal.appendChild(longText);
    linkToOriginal.appendChild(shortText);
    

    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    videoWrapper.appendChild(video);
    videoWrapper.appendChild(linkToOriginal);

    return videoWrapper;
  }

  function Component(html) {
    const element = document.createElement("div");
    element.innerHTML = html.trim();
    return element.firstChild;
  }

  function renderNavBar() {
    var NavBar = new Component(NAV_BAR_HTML);
    return NavBar;
  }

  function renderPageHeader() {
    var PageHeader = new Component(PAGE_HEADER);
    return PageHeader;
  }

  function renderProfileContent() {
    var ProfileContent = new Component(PROFILE_CONTENT);
    var Container = ProfileContent.querySelector(
      ".section.profile-content > .container"
    );

  
    return ProfileContent;
  }

  function renderFooter() {
    var Footer = new Component(FOOTER);
    return Footer;
  }

  function createBubble(text, language) {
    var div = document.createElement("div");
    div.classList.add("bubble-main");
    div.classList.add(language);
   
    const arrow = document.createElement("div");
    arrow.classList.add("bubble-arrow");
       
    const innerArrow = document.createElement("div");
    innerArrow.classList.add("bubble-arrow-inner");
    arrow.appendChild(innerArrow);

    if (language === "he") {
      arrow.classList.add("bubble-arrow-left");
    } else if (language === "en") {
      arrow.classList.add("bubble-arrow-right");
    } else if (language === "ru") {
      arrow.classList.add("bubble-arrow-down");
    }

    const textSpan = document.createElement("span");
    textSpan.textContent = text;

    const exclamationMarkSpan = document.createElement("span");
    exclamationMarkSpan.textContent = "!";
    exclamationMarkSpan.className = "exclamation-mark";

    div.appendChild(textSpan);
    div.appendChild(exclamationMarkSpan);
    // div.appendChild(arrow);

    return div;
    // document.body.appendChild(div);
  }

  function createSkillBar(name, rate) {
    const div = document.createElement("div");
    div.classList.add("bar");
    div.classList.add("front");
    div.classList.add(rate);
    div.setAttribute("data-skill", name);
    return div;
  }

  function createSkillsSection() {
    // const skillsSection = document.createElement('div');
    // skillsSection.classList.add('skills-section');
    var skillsSection = document.querySelector(".skills-section");
    skillsSection.appendChild(createSkillBar("English", "expert"));
    skillsSection.appendChild(createSkillBar("Hebrew", "expert"));
    skillsSection.appendChild(createSkillBar("Russian", "advanced"));
    // document.body.appendChild(skillsSection);
  }

  function renderIntoVideo() {
    var Footer = new Component(INTRO_VIDEO);
    return Footer;
  }

  function renderTeacher () {
    var Teacher = new Component(TEACHER_CONTENT);
    var Container = Teacher.querySelector(".container");
    Container.appendChild(renderIntoVideo());
    Container.appendChild(renderQuotes());
    return Teacher;
  }

  function renderVoiceCovers () {
    const VIDEOS = [[
      "355S1kxpAWs",
      "3mBZpqwHUMU"
    ], [
      "EWz7lwd8Gmk",
      "ZxSEGYZ-45Y"
    ], [
      "86HU5dV44Dk",
      "bK_32xdS3Fw"
    ], [
      "QdcpacrgxUw",
      "8_1Hc47tkyo"
    ]]
    const VoiceCovers = new Component(VOICE_COVER_GALLERY);
    const Container = VoiceCovers.querySelector(".container");
    const row = document.createElement('div');
    row.className = 'row videos-list';
    Container.appendChild(row);

    VIDEOS.forEach(([original, voice]) => {
    
      row.appendChild(renderVideo({
        id: voice,
        height: 315,
        width: 500,
        header: "Voice Cover Version",
        original
      }));

  
      // row.appendChild(renderVideo({
      //   id: original,
      //   height: 315,
      //   width: 500,
      //   header: "Original Version"
      // }));
      // row.appendChild(renderVideo({
      //   id: voice,
      //   height: 315,
      //   width: 500,
      //   header: "Voice Cover Version"
      // }));
    })
   
    // Container.appendChild(renderQuotes());
    return VoiceCovers;
  }


  function renderCover () {
    var div = document.createElement('div');
    div.className = "cover";
    return div;
  }

  
  function render() {
    var components = [
      // renderNavBar(),
      // renderCover(),
      // renderPageHeader(),
      renderProfileContent(),
      renderTeacher(),
      renderVoiceCovers(),
      renderFooter(),
    ];

    for (var i = 0; i < components.length; i += 1) {
      document.getElementById("root").appendChild(components[i]);
    }

    var bubbles = document.createElement("div");
    bubbles.className = "bubbles";
    bubbles.appendChild(createBubble("Hello", "en"));
    bubbles.appendChild(createBubble("Привет", "ru"));
    bubbles.appendChild(createBubble("שלום", "he"));

    document.querySelector(".page-header").appendChild(bubbles);

    createSkillsSection();
  }

  render();


  var quoteInner = document.querySelector('#blockquote-3 .blockquote-inner');
  quoteInner.style.setProperty('transition-duration', '0.1s');
  var blockquote3 = document.querySelector('#blockquote-3 ');
  // blockquote3.style.setProperty('display', 'block');
  // blockquote3.classList.add('hide');
  quoteInner.classList.add('flip');
  setTimeout(() => {
    quoteInner.classList.remove('flip');
    setTimeout(() => {
      // blockquote3.classList.remove('hide');
      // blockquote3.querySelector('.overlay').style.setProperty('display', 'none');
      quoteInner.style.setProperty('transition-duration', '1s');
    }, 150)
  }, 150);
})();
