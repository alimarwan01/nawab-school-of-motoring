export interface Testimonial {
  name: string;
  quote: string;
  result?: string;
  source: "google" | "freeindex" | "website";
  photo?: string;
}

export const testimonials: Testimonial[] = [
  // FreeIndex reviews (with dates, most recent first)
  { name: "Halima Diriye", quote: "PASSED FIRST TIME I had a lovely experience learning with Nawab. Very supportive, punctual and professional.", result: "Passed first time", source: "freeindex", photo: "/students/halima-diriye.jpeg" },
  { name: "Raya Juma", quote: "Honestly the best driving instructor I could have asked for. From the first lesson he made me feel comfortable and confident behind the wheel. He explains everything clearly, stays patient, and always makes sure you understand what you're doing 10/10 experience would recommend.", result: "Passed first time", source: "freeindex", photo: "/students/raya-saleh-ali-juma.jpeg" },
  { name: "S Bapuji", quote: "Absolutely great to know you as human firstly and then learn from you which is in very depth with all aspects covered greatly. Very well. And will recommended to any one to use his services.", source: "freeindex" },
  { name: "Dhanesh Puloth Sedhumadhavan", quote: "I'm really happy to say I passed my driving test today, and I want to thank my instructor for all his support and guidance throughout my lessons. He is very professional and knowledgeable, and he made sure I was fully prepared for the test.", result: "Passed", source: "freeindex", photo: "/students/dhanesh-sedhumadhavan.jpeg" },
  { name: "Sandeep Kumar", quote: "I have passed my driving practical test in 1st attempt with the help of nawab (my instructor) he is very calm, supportive. He teach me with very patience and nicely told about all the rules and regulations.", result: "Passed first attempt", source: "freeindex", photo: "/students/sandeep-kumar.jpeg" },
  { name: "Gurbaj Singh", quote: "1st attempt Pass. With only two minors. An excellent person and an excellent instructor! He has guided me in detail, about every single step.", result: "Passed first attempt with 2 minors", source: "freeindex", photo: "/students/gurbaj-singh.jpeg" },
  { name: "Akhil Roy", quote: "Patient, professional instructor who explained everything clearly, built my confidence, and fully prepared me to pass my driving test.", source: "freeindex", photo: "/students/akhil-roy.jpeg" },
  { name: "Artur Lidzer", quote: "Hi. I passed my practical driving test on the first attempt thanks to my instructor, Nawab, and I'm extremely grateful to him. He is a fantastic instructor who explains everything very clearly and calmly.", result: "Passed first attempt", source: "freeindex", photo: "/students/artur-lidzer.jpeg" },
  { name: "Lovepreet Kaur", quote: "I don't know about the others but I want to say that Sir Leicester has the best inspector I ever thought I would never be able to get a license but Sir got me through the license office today.", result: "Passed", source: "freeindex", photo: "/students/lovepreet-kaur.jpeg" },
  { name: "Ansh Ansh", quote: "PASSED FIRST TIME!!! I had a wonderful experience with Mr Nawab. Hes a very patient and professional person who got me ready for my test with full confidence Thank you Mr Nawab.", result: "Passed first time", source: "freeindex" },
  { name: "Navpreet Kaur", quote: "I had a very good experience with my driving instructor. He stays calm, well organised, and easy to understand. Highly recommended. Lessons were well structured and helpful.", source: "freeindex" },
  { name: "Amarpal Singh", quote: "PASSED WITH ZERO FAULTS!!! Very good instructor. Went through every topic thoroughly to make sure I pass with the best result possible.", result: "Passed with zero faults", source: "freeindex" },
  { name: "Rajaa H", quote: "From the first lesson, the approach was friendly, professional, patient, and very supportive, which really helped build my confidence on the road.", source: "freeindex" },
  { name: "Yusuf Zaman", quote: "Passed with only two minors and had a very good instructor throughout. He was calm, patient, and extremely knowledgeable, which made a huge difference to my confidence.", result: "Passed with 2 minors", source: "freeindex" },
  { name: "Rohan Am Rat", quote: "I am happy to share that I successfully cleared my driving test on my first attempt. My training experience with Nawab Sir was extremely positive.", result: "Passed first attempt", source: "freeindex" },
  { name: "M Faisal Ansari", quote: "An excellent person and an excellent instructor! He has guided me in detail, about every single step, what to do and what not to do.", source: "freeindex" },
  { name: "Pyarjit Singh", quote: "1st attempt Pass. I had an excellent experience learning with Nawab sir. They were patient, professional, and always made me feel comfortable behind the wheel.", result: "Passed first attempt", source: "freeindex" },
  { name: "Vajidali Saiyed", quote: "PASS AT FIRST ATTEMPT. Alhamdulillah, I'm so grateful to have learned car with Irfan Bhai at Nawab Driving School.", result: "Passed first attempt", source: "freeindex" },
  { name: "Arron Singh", quote: "Nawab is an excellent driving instructor who helped me perfect my driving skills. He is a very calm and patient instructor and always makes sure that you correct your mistakes.", source: "freeindex", photo: "/students/arronpreet-singh.jpeg" },
  { name: "Rayhaan Lakdawala", quote: "PASSED FIRST TIME WITH 1 MINOR FAULT. He is a great instructor who provides clear explanations and is very patient when learning.", result: "Passed first time with 1 minor", source: "freeindex", photo: "/students/rayhaan-lakdawala.jpeg" },

  // Google reviews (most recent first)
  { name: "Lucky Singh", quote: "I m so glad. i passed my practical test in first attempt. Nawab's nature very friendly and polite.", result: "Passed first attempt", source: "google" },
  { name: "Davinder Sharma", quote: "PASS FIRST TIME WITH TWO MINORS. He is very nice. He is good instructor.", result: "Passed first time with 2 minors", source: "google" },
  { name: "Ranjit Sandhu", quote: "Nawab sur is a best trainer I have ever met. Very calm and experienced person.", source: "google" },
  { name: "Vishvajitsinh Umat", quote: "I PASSED IN ONE ATTEMPT. He is so polite and teach each and everything very understandable.", result: "Passed first attempt", source: "google" },
  { name: "Sarah", quote: "PASSED FIRST TIME!! Amazing instructor would highly recommend!!", result: "Passed first time", source: "google" },
  { name: "Karolina Stanczyk", quote: "PASSED FIRST TIME WITH 1 MINOR FAULT! I'm so happy I chose Nawab.", result: "Passed first time with 1 minor", source: "google" },
  { name: "Nomzz", quote: "PASSED FIRST TIME! Only 2 minor faults, Mr. Nawab is an amazing instructor.", result: "Passed first time with 2 minors", source: "google" },
  { name: "Fiza Khalid", quote: "PASSED FIRST TIME!! A very good instructor, explains things vividly.", result: "Passed first time", source: "google" },
  { name: "Manpreet Kaur", quote: "BEGINNER PASS FIRST TIME!! Professional driving instructor, punctual.", result: "Passed first time", source: "google" },
  { name: "Naqiyah S", quote: "I passed my driving exam with zero faults all thanks to Mr. Irfan Nawab!", result: "Passed with zero faults", source: "google" },
  { name: "Ayoub Khous", quote: "First time zero minors: I got a great experience with Nawab.", result: "Passed first time with zero faults", source: "google" },
  { name: "Gurman Batth", quote: "I passed my test in first go with zero fault with the help.", result: "Passed first attempt with zero faults", source: "google" },
  { name: "Amrin Shaikh", quote: "PASSED FIRST ATTEMPT With only 2 MINOR FAULTS I am so grateful.", result: "Passed first attempt with 2 minors", source: "google" },
  { name: "Asma Arafat Patel", quote: "First time pass today!!! Nawab is honestly the most amazing driving instructor!", result: "Passed first time", source: "google" },
  { name: "Reece Ladwa", quote: "Passed first time with 2 minors. Couldn't be happier!", result: "Passed first time with 2 minors", source: "google" },
  { name: "Anisa Zaman", quote: "PASSED FIRST TIME! Great instructor and really helped increase my confidence.", result: "Passed first time", source: "google" },
  { name: "Hiba Chabani", quote: "I passed yesterday with only three minor faults, my husband passed with zero.", result: "Passed with 3 minors", source: "google" },
  { name: "Moe Amad", quote: "Passed First Time! Top Instructor! You pay for quality.", result: "Passed first time", source: "google" },

  // Website reviews (longer, more detailed)
  { name: "Hiba Khous", quote: "I passed yesterday with only three minor faults, my husband passed with zero minors. We contacted nawab by chance by seeing the positive reviews on google. A very patient and professional instructor, explains very well and friendly.", result: "Passed with 3 minors", source: "website" },
  { name: "Navjot Kaur", quote: "I passed my driving test with just 1 minor fault. All credit goes to Mr. Nawab Sir. Thank you for being the best instructor ever! With your guidance and patience you taught me the skills to become a safe driver.", result: "Passed with 1 minor", source: "website" },
  { name: "Parminder Singh", quote: "Nawab is a brilliant driving instructor, very patient and relaxed. He helped me a lot to pass my test and made me really confident driver. I highly recommend Nawab to my friends and anyone who is wanting to drive!", result: "Passed", source: "website" },
  { name: "Naina Vala", quote: "Nawab is absolutely professional patient and ensure to fine tune your areas of weaknesses. Have been lucky to have him as my instructor and thankfull to him for transforming me into a confident driver on the road.", result: "Passed", source: "website" },
  { name: "Srushti Patel", quote: "He is good instructor.", source: "website", photo: "/students/srushti-patel.jpeg" },
  { name: "Suhana Ilyas Fasa", quote: "Great experience learning with Nawab. Very supportive throughout.", source: "website", photo: "/students/suhana-ilyas-fasa.jpeg" },
];
