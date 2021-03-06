
// .......................................................................Browser,devtool........milestone-7.....................................................
// ব্রাউজার এবং জাভাস্ক্রিপ্ট রিলেটেড জিনিসগুলা প্রাকটিস করে ফেলো।  

// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

// ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 

// ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 

// ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 
// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
// //........................................................
// ডিবাগ চেকলিস্ট 

// ১. console tab utilities API লিখে গুগলে সার্চ দাও। তারপর সেই সার্চ রেজাল্টে গিয়ে ৩০-৪৫ মিনিট ধরে ধরে যা যা আছে সেগুলা পড়ো। 

// ২. কিভাবে বুঝবে একটা বাটনে কোন একটা ইভেন্ট হ্যান্ডলার যোগ করা আছে কিনা? সেটা ডেভ টুল এর কোন কোন জায়গায় দেখা যায়। চিন্তা করে বা ডেভ টুল খুলে বের করার চেষ্টা করো। 

// ৩. কিভাবে তুমি console ট্যাব এর মধ্যে কোন একটা ফাংশনকে কল করে সেই ফাংশনের প্রথম লাইনে কোড ব্রেক করে ফেলবে। অর্থাৎ সেখানে গেলে কোড অটোমেটিক বন্ধ হয়ে যাবে। ক্লিক করে কোন ব্রেক পয়েন্ট যোগ করা লাগবে না?

// ৪. একটা কন্ডিশনাল ব্রেক পয়েন্ট সেট করতে হয় কিভাবে? সেটা নিজে নিজে সেট করে ফেলো 

// --------------

// ৫. accessibility কি জিনিস?

// ৬. call stack কি জিনিস? দরকার হলে গুগলে সার্চ দিয়ে শেখার চেষ্টা করো। 

// ৭. Regular এক্সপ্রেশন কি জিনিস। এইটা কি কাজে লাগে?

// ৮. Lighthouse ট্যাব দিয়ে কি করে?

// -------------

// টাস্ক-১:

// ৯. সিম্পল একটা ওয়েবসাইট বানাও। সেখানে একটি ইনপুট ফিল্ডে ইমেইল লিখবে। তারপর সেটার পাশে একটা submit নামে বাটন আছে। সেই সাবমিট বাটনে চাপ দিলে রেগুলার এক্সপ্রেশন (গুগলে সার্চ দিয়ে বের করবে) দিয়ে চেক করবে এটা ভ্যালিড ইমেইল কিনা। 

// ১০. ইমেইল যদি ভ্যালিড হয়। তাহলে একটা গ্রিন কালার দিয়ে কোন একটা টেক্সট লিখে দিয়ে বলবে তোমার ইমেইল ঠিক আছে। আর যদি ইমেইল ঠিক না হয়। তাহলে একটা লাল কালারের টেক্সট দিয়ে বলবে। ইমেইল ঠিক নাই। ভালো করে ইমেইল দাও। 
// ------------
// টাস্ক-২:
// ১১. আমাদের গিটহাব এ issue-tracker নামে একটা রিপোজিটরি আছে। সেখানে কোন একটা issue যোগ করার পর সেটাকে close করা যায়না। আবার ডিলিট ও করা যায় না। তো তোমার কাজ হচ্ছে সেই সাইটের বাগ ফিক্স করা। 

// 12.meal db debuging. if any problem solve it???????????
// 13.salary App.

// ............................Thank You kosto kore korar jonno....................
