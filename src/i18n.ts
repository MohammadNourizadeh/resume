import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      myName: "Mohammad Nourizadeh",
      home: "home",
      about: "about",
      contact: "contact",
      jobTitle: "front-End developer",
      jobDes: "I am a front-end developer with a focus on user experience",
      downloadRes: "download resume",
      skills: "skills",
      institute: "institute",
      wdp: "web design pack",
      mft: "tehran institute of technology",
      date: "date ",
      download: "download",
      react: "React Development",
      littleMoreAboutMe: "a little more about me",
      myDes: `Front-End Developer with practical experience in JavaScript, React.js, and modern state management solutions such as Redux, Redux Toolkit, and Context API. Skilled in designing and implementing structured, maintainable user interfaces with a focus on performance and scalability.
              Background in C, currently expanding skills toward Full-Stack Development through hands-on experience with PHP, advanced SQL queries, and database management using MySQL.
              Proficient in implementing RESTful APIs and AJAX to create dynamic, interactive web application features, and familiar with integrating front-end components with back-end services to ensure smooth data flow and optimal performance.`,
      aiField: "M.Sc. in Artificial Intelligence",
      computerField: "Computer Engineering",
      qodsUni: "Islamic Azad University, Qods Branch",
      currentlyStudying: "Currently Studying",
      gpa: "GPA",
      graduated: "Graduated",
      scienceUni: "Islamic Azad University, Science and Research Branch",
      educations: "education",
      certifications: "certifications",
      email: "email",
      github: "github",
      mobile: "mobile",
      designedWith: "designed with",
      by: "by",
    },
  },
  fa: {
    translation: {
      myName: "محمد نوری زاده",
      home: "خانه",
      about: "درباره من",
      contact: "تماس",
      jobTitle: "توسعه دهنده فرانت",
      jobDes: "توسعه دهنده فرانت با تمرکز بر رابط کاربری",
      downloadRes: "دانلود رزومه",
      skills: "مهارت ها",
      institute: "موسسه",
      wdp: "وب دیزاین پک",
      mft: "مجتمع فنی تهران",
      date: "تاریخ ",
      download: "دانلود",
      react: "ریکت",
      littleMoreAboutMe: "اطلاعات بیشتر راجب من",
      myDes: `توسعه‌دهنده Front-End با تجربه عملی در JavaScript، React.js و راهکارهای مدیریت state مدرن مانند Redux، Redux Toolkit و Context API. ماهر در طراحی و پیاده‌سازی رابط‌های کاربری ساختارمند و قابل نگهداری با تمرکز بر عملکرد و مقیاس‌پذیری.
              پس‌زمینه‌ای در زبان C دارد و در حال گسترش مهارت‌های خود به سمت توسعه Full-Stack از طریق تجربه عملی با PHP، کوئری‌های پیشرفته SQL و مدیریت پایگاه داده با MySQL است.
              مهارت‌مند در پیاده‌سازی RESTful APIs و AJAX برای ایجاد قابلیت‌های داینامیک و تعاملی در وب‌اپلیکیشن‌ها، و آشنا با یکپارچه‌سازی کامپوننت‌های front-end با سرویس‌های back-end جهت تضمین جریان داده روان و عملکرد بهینه.`,
      aiField: "کارشناسی ارشد هوش مصنوعی",
      qodsUni: "دانشگاه ازاد اسلامی واحد شهرقدس",
      computerField: "مهندسی کامپیوتر",
      currentlyStudying: "درحال تحصیل",
      gpa: "معدل",
      graduated: "فارغ التحصیل",
      scienceUni: "دانشگاه آزاد اسلامی واحد علوم و تحقیقات",
      educations: "تحصیلات",
      certifications: "مدرک ها",
      email: "ایمیل",
      github: "گیت هاب",
      mobile: "موبایل",
      designedWith: "طراحی شده با",
      by: "توسط",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
