import React from "react";
import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Isotope from "isotope-layout";
import Modal from "./Modal";
import logo from "../assets/logo.png";
import about from "../assets/about.png";
import courses from "../assets/courses.png";
import dashboard from "../assets/dashboard.png";
import guides from "../assets/guides.png";
import mentoring from "../assets/mentoring.png";
import resources from "../assets/resources.png";
import logout from "../assets/logout.png";
import footericon from "../assets/footericon.png";
import newsletter from "../assets/newsletter.png";
import aliabrar from "../assets/people/aliabrar.png";
import taabishahmed from "../assets/people/taabishahmed.png";
import hamzabinmajid from "../assets/people/hamzabinmajid.png";
import anant from "../assets/people/anant.png";
import hafsah from "../assets/people/hafsah.png";
import aman from "../assets/people/aman.png";
import hussnain from "../assets/people/hussnain.png";
import burak from "../assets/people/burak.png";
import peopleicon from "../assets/peopleicon.png";
import expand from "../assets/expand.png";
import Abdelrahman from "../assets/people/Abdelrahman.png";
import Aelina from "../assets/people/Aelina.png";
import Aiza from "../assets/people/Aiza.png";
import Amin from "../assets/people/Amin.png";
import Ammar from "../assets/people/Ammar.png";
import Aniya from "../assets/people/Aniya.png";
import Ardis from "../assets/people/Ardis.png";
import Atika from "../assets/people/Atika.png";
import Auyoon from "../assets/people/Auyoon.png";
import Ayaan from "../assets/people/Ayaan.png";
import Badriyah from "../assets/people/Badriyah.png";
import Bilal from "../assets/people/Bilal.png";
import Etas from "../assets/people/Etas.png";
import George from "../assets/people/George.png";
import Habibah from "../assets/people/Habibah.png";
import Hadi from "../assets/people/Hadi.png";
import Haroon from "../assets/people/Haroon.png";
import Isra from "../assets/people/Isra.png";
import Janina from "../assets/people/Janina.png";
import Kirat from "../assets/people/Kirat.png";
import Laiba from "../assets/people/Laiba.png";
import Maria from "../assets/people/Maria.png";
import Mariam from "../assets/people/Mariam.png";
import Michael from "../assets/people/Michael.png";
import Naoseen from "../assets/people/Naoseen.png";
import Raahim from "../assets/people/Raahim.png";
import Radeya from "../assets/people/Radeya.png";
import Rania from "../assets/people/Rania.png";
import Rawen from "../assets/people/Rawen.png";
import Saarah from "../assets/people/Saarah.png";
import Samira from "../assets/people/Samira.png";
import Shashank from "../assets/people/Shashank.png";
import Soha from "../assets/people/Soha.png";
import Sonia from "../assets/people/Sonia.png";
import Subhan from "../assets/people/Subhan.png";
import Taslima from "../assets/people/Taslima.png";
import Youssef from "../assets/people/Youssef.png";
import Zara from "../assets/people/Zara.png";
import Zaynah from "../assets/people/Zaynah.png";

const navigation = [
  //Add links
  { name: "Home", href: "/home" },
  { name: "Our Team", href: "/team" },
  { name: "Mentoring", href: "/mentoring" },
  { name: "Resources", href: "/resources" },
  { name: "Guides", href: "/guides" },
];

const people = [
  {
    id: 0,
    name: "Hussnain Khan",
    education: "University of Liverpool",
    imageUrl: hussnain,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 1,
    name: "Hafsah Qamar",
    education: "Academy Teacher",
    imageUrl: hafsah,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Aman Sabih",
    education: "DFT Year",
    imageUrl: aman,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Ali Abrar",
    education: "University of Oxford",
    imageUrl: aliabrar,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Burak Ayan",
    education: "Academy Teacher",
    imageUrl: burak,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Tabish Ahmed",
    education: "University of Sheffield",
    imageUrl: taabishahmed,
    subject: "biology",
    description:
      "Tabish is one of our senior GCSE Biology mentors, and one of the most versatile and naturally talented members of our team. His captivating public speeches and ability to connect with the youth, mouth-watering designs… and constant input of creative energy into The Empire is the one of the main reasons that we’ve been able to advance Medology to where it is today. An inspiration to us all.",
  },
  {
    id: 6,
    name: "Hamza Bin-Majid",
    education: "University of Manchester",
    imageUrl: hamzabinmajid,
    subject: "biology",
    description:
      "Hamza is the A2 Biology wizard and the man at the helm of the Medology Academy. There’s many amazing traits that he possesses, but by far the most outstanding one is the way he can find the most innovative solutions to any problem. He’s probably the best teacher in the entire team too, with the way that he can find an analogy to help you understand the most difficult of concepts. Hamza is truly a Principled Lion.",
  },
  {
    id: 7,
    name: "Anand Dandotiya",
    education: "University of Liverpool",
    imageUrl: anant,
    subject: "biology",
    description:
      "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    name: "Aelina Mousa",
    education: "University of Southampton",
    imageUrl: Aelina,
    subject: "biology",
    description:
      "Aelina is the glue in the GCSE Biology Team, and actually, Medology as a whole. She keeps everyone happy and gelled, and makes sure we’re running like a well oiled machine. Her ability to connect with people is out of this world, and she’s an example we can all learn the art of managing relationships extremely well from. We’ve also nicknamed her Corp, because she’s a boss.",
  },
  {
    id: 9,
    name: "Amin Hashmi",
    education: "University of Glasgow",
    imageUrl: Amin,
    subject: "biology",
    description:
      "Amin is one of our senior A Level Biology mentors, but he’s so much more than that. We see him as the Captain of the Medology Ship, leading us through both calm waters and treacherous storms on our journey to build up the Empire. He dips his toes across all the different wings of Medology, keeping the team nicely aligned and constantly planting our flag into new territory. Jack of all trades and master of all, The Future is looking bright with Amin’s vision locked onto it!",
  },
  {
    id: 10,
    name: "Auyoon Iqbal",
    education: "University of Plymouth",
    imageUrl: Auyoon,
    subject: "biology",
    description:
      "The best adjective to describe Auyoon with is - bubbly. She just brings that energy to her students and is someone who gets the best out of the people around her. What’s her secret? Well, we think it’s the strong mindset that she has. You’ll have to meet her to find out. When she’s not being a bubble machine, you’ll probably find Auyoon traversing through nature, travelling to a random country… or picking up a new language!",
  },
  {
    id: 11,
    name: "Etas Ali",
    education: "University College London",
    imageUrl: Etas,
    subject: "biology",
    description:
      "Etas Ali proudly carries the title of Unique Wali. Her rich life experiences and passion for teaching make her an ideal mentor for the next generation of Medology students. Some would say she’s on a mission to rock your world. In the rare occasions that Etas manages to catch a break, you’ll probably find her either drinking Desi Chai, watching Pakistani Dramas, or crying over Pakistan’s latest cricketing disappointment.",
  },
  {
    id: 12,
    name: "Isra Parwez",
    education: "King’s College London",
    imageUrl: Isra,
    subject: "biology",
    description:
      "At this moment in time, we’re munching through buckets and buckets of popcorn, watching and cheering Isra on through her mission to become a polyglot! But is that all there is to Isra? Nah! She’s a very cheery and enthusiastic individual, always smiling and adding positive vibes wherever she goes. Her passion for Medicine and teaching GCSE Biology is clear and we have full faith that she’s going to develop into one of the leading doctors of tomorrow.",
  },
  {
    id: 13,
    name: "Janina Kugathasan",
    education: "University of Edinburgh",
    imageUrl: Janina,
    subject: "biology",
    description:
      "Janina is a very goal-driven individual who loves putting herself in new experiences and challenges. She’s always willing to learn and grow while still remaining genuine and true to herself - her principle is to act from the heart and she puts her soul into all that she does. Some would say Janina is one of the most balanced members of the team! We can’t wait to see the impact she leaves.",
  },
  {
    id: 14,
    name: "Kirat Dhillon",
    education: "University of Bristol",
    imageUrl: Kirat,
    subject: "biology",
    description:
      "Kirat absolutely radiates positive energy and good vibes to not just Tribe A, but to the rest of the Medology team too! Her approachable nature works a charm at getting on a level with her students and her relatable insights are yet another thing they love her for. Kirat’s presence in the team is like a refreshing breeze, infusing it with vitality, and as she’d probably put it herself - she simply slays every day",
  },
  {
    id: 15,
    name: "Radeya Miah",
    education: "Edge Hill University",
    imageUrl: Radeya,
    subject: "biology",
    description:
      "The R in Radeya stands for reliable. Rain, sun, moon or shine… you know Radeya will turn up to deliver, day in, day out. Her drive to get stuck in with everything that we do at the Medology Academy makes her the dream team member, and we’re all so proud of her achievements till now!",
  },
  {
    id: 16,
    name: "Rawen Ibrahim",
    education: "Anglia Ruskin University",
    imageUrl: Rawen,
    subject: "biology",
    description:
      "Rawen really is a Medology superstar, and the GCSE Biology GOAT. Regardless of staying lowkey… she gets the work done. Not only that, but to an amazing standard. Her students constantly describe her as dedicated, committed and striving for perfection! Not only that, but she’s incredibly motivated to develop herself in every way possible, especially for the betterment of the people around her, especially you, the Medology Lions!",
  },
  {
    id: 17,
    name: "Soha Khan",
    education: "University of Sheffield",
    imageUrl: Soha,
    subject: "biology",
    description:
      "Soha can click with anyone on the planet. Her open mindedness, positive mentality and wide range of hobbies and interests verily and truly make her The People’s Warrior. During her time as a student, she was one of the best… adding life to the community, and now as a member of our team, she’s here to make sure that future generations of Medology Lions have an even better experience!",
  },
  {
    id: 18,
    name: "Sonia Mengal",
    education: "Dental Student",
    imageUrl: Sonia,
    subject: "biology",
    description:
      "Sonia is known for her ever-present smile and deep passion for storytelling - perhaps the most powerful combination of attributes of anyone on the team! With her infectious enthusiasm and genuine joy, Sonia is sure to create an unbreakable bond with anyone fortunate enough to be her student. We’re very excited to see her share her talents with her A Level Biology students!",
  },
  {
    id: 19,
    name: "Subhan Khan",
    education: "University of Southampton",
    imageUrl: Subhan,
    subject: "biology",
    description:
      "S Khan, also known as The Shahzada, is the living and breathing avatar of the English noun, enigma. It’s almost like that word in the M Webster dictionary was created for him. This man is like no other. Whether it’s his novel perspectives on the issues plaguing our society and youth today, or general reflections on life… you could listen to him all day. That’s not all there is to Subhan though, but words cannot do him justice. He didn’t come to play the game. He came to change it. Do not judge this man on first contact.",
  },
  {
    id: 20,
    name: "Ammar Motala",
    education: "Imperial College London",
    imageUrl: Ammar,
    subject: "chemistry",
    description:
      "Motala is versatile. Motala is many things. Sometimes you’ll find Motala on the ground being an absolute inspiration to the next generation, and other times you’ll find Motala working hard behind the scenes sending seismic waves throughout the Medology World. Motala is like an onion that we’re still peeling, waiting to see what truly lies at the core. Motala, Motala.",
  },
  {
    id: 21,
    name: "Badriyah Islam",
    education: "Imperial College London",
    imageUrl: Badriyah,
    subject: "chemistry",
    description:
      "Badriyah is everything. Medical student, university society leader, professional photographer, charity ambassador, tutor, teacher, mentor… she’s truly got one of the most diverse portfolios in the Medology team. As one of our most senior team members, we’ve always been very proud to have her in our ranks, and she’s certainly someone that we all look up to.",
  },
  {
    id: 22,
    name: "George Ashton",
    education: "Academy Mentor",
    imageUrl: George,
    subject: "chemistry",
    description:
      "George is probably the deepest thinker on the team. Some would say philosopher, whilst others would say he’s going to shape the world. Whatever it is, he is 1 special human. He describes himself a somebody who is introspective and is excited by meeting new people, learning from them in the process. George really is somebody who will also go to immense levels to make sure you feel supported through your academic journey!",
  },
  {
    id: 23,
    name: "Haroon Hussain",
    education: "Queen’s University, Belfast",
    imageUrl: Haroon,
    subject: "chemistry",
    description:
      "Haroon moved from Preston to Belfast to study Dentistry, but really he’s on an undercover mission to figure out how Medology can infiltrate Irish Land to expand The Empire. Do you know what really makes Haroon special though? He’s an eager beaver, a Chemistry wizard… and he’s in this team to do powerful things.",
  },
  {
    id: 24,
    name: "Laiba Sheikh",
    education: "University of Leeds",
    imageUrl: Laiba,
    subject: "chemistry",
    description:
      "Laiba is like a grenade. You can throw her anywhere, and she will detonate… causing tectonic ripples. What do we mean by that? We mean that she has the ability, and proven track record, to create magical moments at Medology. Explosions. There’s not enough space to list them out here, but what we will say is that she’s been one of the leading mentors since Day 1, and most certainly one of the bedrocks of the A Level Chemistry team.",
  },
  {
    id: 25,
    name: "Maria Yusufi",
    education: "University of Manchester",
    imageUrl: Maria,
    subject: "chemistry",
    description:
      "What we love about Maria is how she’s not afraid to jump head on into anything that Medology does. She will follow Medology to the ends of the Earth. The most loyal warrior we have in our ranks, which coupled together with her noble ambitions and lofty goals… make her the life and soul of the mission we have at Medology. We can only imagine how much of an impact she leaves on her students. ",
  },
  {
    id: 26,
    name: "Naoseen Alam",
    education: "Dental Student",
    imageUrl: Naoseen,
    subject: "chemistry",
    description:
      "The bubbly one. Her energy is infectious and she’s the type of person who knows how to instil confidence into anyone she crosses paths with. But, she’s also hard working and a mentor you can place full trust in. She carries herself like an absolute Boss Woman and we’re proud to have her with us in the GCSE Chemistry team :) ",
  },
  {
    id: 27,
    name: "Raahim Omer",
    education: "University of Leicester",
    imageUrl: Raahim,
    subject: "chemistry",
    description:
      "Raahim is an absolute chiller. You’ll never catch him stressing but he’ll still pull through every single time. While everyone’s keeping up with life, life’s keeping up with Raahim. Be it an interview or a speech to a crowd, this man will be as cool as a cucumber. That’s great, but what does that mean for the people around him? Raahim is going to make it his mission to transfuse that same ice-cold mentality into everyone he touches.",
  },
  {
    id: 28,
    name: "Samira Ali",
    education: "Hull York Medical School",
    imageUrl: Samira,
    subject: "chemistry",
    description:
      "Samira puts her mind, heart, and soul into the things and people she cares for. The positive, heartfelt vibes you get from Samira are instant and lasting. There’s never a demotivated moment when you’re around her (or a dull one for that matter). Feeling down or upset? Samira is the one-stop doc for mental rejuvenation.",
  },
  {
    id: 29,
    name: "Taslima Bushra",
    education: "Queen Mary, University of London",
    imageUrl: Taslima,
    subject: "chemistry",
    description:
      "Taslima brings the excitement to the Medology Academy. Always questioning decisions, making us think further and never leaving a stone unturned. She also has an incredible creative edge which all of team is inspired by. Taslima is also somebody who is renowned for putting heart and soul into each and every one of her students, instilling in them confidence and a desire to really improve as individuals!",
  },
  {
    id: 30,
    name: "Youssef Mohamed",
    education: "University of Manchester",
    imageUrl: Youssef,
    subject: "chemistry",
    description:
      "For Youssef, we think the best way to describe him is with a haiku: ‘smart and serious, chilled yet charismatic, a Medology asset’. His personable character and genuineness as a speaker shine bright and when he shares his thoughts he embodies the mantra of ‘quality over quantity’. His mission is simple - to make the day brighter for everyone around him, and that goes double for his future students!",
  },
  {
    id: 31,
    name: "Zara Mansukhani",
    education: "University of Nottingham",
    imageUrl: Zara,
    subject: "chemistry",
    description:
      "Zara is a natural-born conquerer with lion-like confidence. Zara is a woman of action. She knows what she wants and she’ll put her full mind to it. She’s already conquered academia and she’s opted for a much greater challenge… what is that you may ask? To help Medology continue to change the game and make A Level Chemistry a smooth, buttery ride",
  },
  {
    id: 32,
    name: "Aniya Guttoor",
    education: "Medical Student",
    imageUrl: Aniya,
    subject: "physics",
    description:
      "Aniya is a master communicator and was one of the brightest and fastest developing students in Medology History. She’s learned a lot as a student of Medology and now she’s ready to pass down the her inestimable expertise to the next generation of Lions, with her own flare. Armed with the invaluable ability to keep any conversation going with anyone, her students are going to be in for a treat!",
  },
  {
    id: 33,
    name: "Bilal Sheraz",
    education: "University of Manchester",
    imageUrl: Bilal,
    subject: "physics",
    description:
      "Bilal is the GCSE Physics Lead and responsible for ensuring that the entire Dental Team at Medology is happy and running like clockwork. When this man is in the zone, he’s unstoppable. No one can match the energy he gives to students, and the burden he can carry by all himself on his shoulders. Most people would crumble under such pressure, but Bilal manages to keep smiling and jumping up and down like Pingu!",
  },
  {
    id: 34,
    name: "Habibah Jalgaonkar",
    education: "Dental Student",
    imageUrl: Habibah,
    subject: "physics",
    description:
      "Fun fact: Habibah used to be the local henna dealer at her college with queues lining up for her services during EidSZN, fully booked. And you best believe, she brings that same spirit to Medology too. Bursting with energy and optimism, she’s on a mission to help everyone find their true potential. Habibah is convinced that every Lion has it in them to succeed and she isn’t gonna rest until she’s unlocked the hidden potential of her students. No wonder we can always rely on her :)",
  },
  {
    id: 35,
    name: "Michael Ndulor",
    education: "Keele University",
    imageUrl: Michael,
    subject: "physics",
    description:
      "Where do we even start with Professor M? His passion and drive for advancing the Medology Mission to new heights is unmatched. He’s also one of the most sincere people you’ll ever meet, and his presence is truly an uplifting one. The heartbeat of the Medology team. The engine. The oil. Medology would not principally be the same without this man. There’s no need to waffle any more on this description, because we’ve said all that needs to be said.",
  },
  {
    id: 36,
    name: "Rania Ocho",
    education: "King’s College London",
    imageUrl: Rania,
    subject: "physics",
    description:
      "Rania is one of the most resilient individuals we have here in the entire Medology team. Having been in the Medology ecosystem for nearly 3 years now, she’s never failed to surprise us. Whether it’s her ability to bounce back, her kind nature, or her willingness to just contribute to anything and everything, Rania is somebody who inspires us, and will inspire you too!",
  },
  {
    id: 37,
    name: "Abdelrahman Abouzeid",
    education: "University of Manchester",
    imageUrl: Abdelrahman,
    subject: "maths",
    description:
      "Abdelrahman is the ultimate sharer. He shares words, thoughts, vibes, and more. Abdelrahman’s brain is a melting pot of ideas and passion and it’s the recipe for the next big thing. Abdelrahman isn’t the type to bite his tongue or hold back. If you need limitless brainstorming or some unfiltered opinions, Abdelrahman is your man.",
  },
  {
    id: 38,
    name: "Ardis Rexha",
    education: "Medical Student",
    imageUrl: Ardis,
    subject: "maths",
    description:
      "As the Sun and Earth care for the people they host, Ardis cares for the people around him. Ardis has worked so hard to get where he is and all he wants is for everyone else to follow him on the path of their passion. He won’t make the journey boring either, his bubbles are contagious and his aura makes you feel at home. He cannot bear to watch anyone suffer alone, so don’t be surprised if you find yourself with Ardis by your side.",
  },
  {
    id: 39,
    name: "Atika Nabeel",
    education: "Lancaster University",
    imageUrl: Atika,
    subject: "maths",
    description:
      "Atika wears many hats alongside her duties within the GCSE Maths team and Medology. She’s certainly no ordinary medical student, with talents stretching far and wide. Whether it’s her ability to touch souls with poetic verse… her artistic flair or her creativity that doth not possess any bound, she’s most verily and truly one of the rising stars to watch out for over coming years.",
  },
  {
    id: 40,
    name: "Hadi Qureshi",
    education: "Technology Intern",
    imageUrl: Hadi,
    subject: "maths",
    description:
      "At Medology we love Hadi’s brain. We call him A Sood Doe, because of his impeccable attention to detail and principled work ethic. Recently, he’s taken on a brand new role as one of the members of our technology team. As well as that, he’s one of the key architects behind the Medology Academy… making sure that everyone here has an incredible experience.",
  },
  {
    id: 41,
    name: "Saarah Khan",
    education: "University of Leicester",
    imageUrl: Saarah,
    subject: "maths",
    description:
      "At Medology, Saarah is for sure one of the most dedicated and keen members of the team. She’ll always turn up, no matter what, and her ability to connect with her students is spectacular. Her teaching style is grounded in authenticity, and her banging insights captivate and inspire anyone who she teaches. Trust us, if you hear Saarah start giving advice, you won’t want to stop listening!",
  },
  {
    id: 42,
    name: "Shashank Karunakar",
    education: "Dental Student",
    imageUrl: Shashank,
    subject: "maths",
    description:
      "Shashank. Another Medology wildcard. Master communicator, master of the knowledge, and all round genius. Shashank has an incredibly bright future as being the star teacher. He just knows ball. His students are very, very lucky.",
  },
  {
    id: 43,
    name: "Zaynah Nawaz",
    education: "Aston University",
    imageUrl: Zaynah,
    subject: "maths",
    description:
      "Zaynah is like a soft cloud you look up to as you gaze at the sky. The comfort you get when you’re around Zaynah reassures you everything will be ok. No matter what you’re stressed about, talking through your thoughts with Zaynah will make life seem that much brighter. Sometimes the one thing you need to get over the hill is that undeniable, positive mindset. Zaynah knows that all too well.",
  },
  // More people...
];

const navfooter = {
  //add links
  menu: [
    { name: "About", href: "/home" },
    { name: "Courses", href: "/courses" },
    { name: "Mentoring", href: "/mentoring" },
    { name: "Resources", href: "/resources" },
    { name: "Guides", href: "/guides" },
  ],
  information: [
    { name: "Privacy Policy", href: "#" },
    { name: "Safeguarding Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Contact", href: "#" },
  ],
  //addlinks
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

const Team = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [peopleIndex, setPeopleIndex] = useState(0);
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <div
        //on lg screen
        className="bg-black -mb-32"
      >
        <header className="bg-black absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">the medology academy</span>
                <img className="ml-2 lg:ml-14 h-12 w-48" src={logo} alt="" />
              </a>
            </div>

            <div
              //nav sidebar
              className="flex lg:hidden"
            >
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-12 w-12 mr-2 lg:mr-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              //navlinks
              className="hidden lg:flex lg:gap-x-12"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-white color-primary h-10 w-32 rounded-full mr-10 text-sm font-medium">
                Dashboard
              </button>
            </div>
          </nav>
          <Dialog
            //on small screen
            as="div"
            className="lg:hidden "
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-[999]" />
            <Dialog.Panel className="fixed left-40 inset-y-0 right-0 z-[999] lg:w-full overflow-y-auto bg-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white font-semibold absolute right-8"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="mt-24 flow-root ml-4">
                <div className="-my-6 divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="flex">
                      <img src={about} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="/"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        About
                      </a>
                    </div>
                    <div className="flex">
                      <img src={courses} alt="" className="w-6 h-6" />
                      <a
                        href="/courses"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Courses
                      </a>
                    </div>
                    <div className="flex">
                      <img src={mentoring} alt="" className="w-6 h-6" />
                      <a
                        href="/mentoring"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Mentoring
                      </a>
                    </div>
                    <div className="flex">
                      <img src={resources} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="/resources"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Resources
                      </a>
                    </div>
                    <div className="flex">
                      <img src={guides} alt="" className="w-6 h-6" />
                      <a
                        href="guides"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Guides
                      </a>
                    </div>
                    <div className="flex">
                      <img src={dashboard} alt="" className="w-6 h-6" />
                      <a
                        //add link
                        href="#"
                        className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                      >
                        Dashboard
                      </a>
                    </div>
                  </div>
                  <div className="pt-64 flex">
                    <img src={logout} alt="" className="w-6 h-6" />
                    <a
                      href="#"
                      className="-mt-1 mb-5 ml-8 text-xl font-normal text-color leading-7 hover:text-white"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative bg-black isolate px-6 pt-14 pb-4 mb-32 lg:mb-32 lg:px-8">
          <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-36 divheight ">
            <div className="text-center">
              <h1 className="text-4xl -mt-16 font-bold tracking-tight text-white sm:text-6xl">
                Our
                <span className="text-color-primary"> Team</span>
              </h1>
              <p className="mt-4 text-lg font-semibold leading-8 text-white">
                Supporting you across your educational journey and pushing you
                to new limits.
              </p>
              <p className="mt-2 text-sm leading-8 tracking-wide text-slate-200">
                These are the best mentors on the planet.
              </p>
              <span className="isolate inline-flex rounded-full shadow-sm mt-10 h-14 bg-black border-2 border-secondary ">
                <button
                  type="button"
                  onClick={handleFilterKeyChange("biology")}
                  className="relative inline-flex items-center rounded-l-full px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:border-2 hover:border-l-0 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Biology
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("chemistry")}
                  className="relative -ml-px inline-flex items-center px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:rounded-l-full hover:border-2 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Chemistry
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("physics")}
                  className="relative -ml-px inline-flex items-center px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:rounded-l-full hover:border-2 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Physics
                </button>
                <button
                  type="button"
                  onClick={handleFilterKeyChange("maths")}
                  className="relative inline-flex items-center rounded-l-full px-12 py-6 text-sm font-semibold text-white filterbutton hover:color-primary focus:z-10 hover:rounded-r-full hover:border-2 hover:border-l-0 hover:border-t-0 hover:border-b-0 hover:bg-teal-700 hover:border-teal-700"
                >
                  Maths
                </button>
              </span>
            </div>
          </div>
          <div //team grid
            className="-mt-[6rem]"
          >
            <div className="lg:mx-6 lg:px-8">
              <ul
                role="list"
                className="filter-container grid grid-cols-2 gap-y-10 gap-x-2 lg:gap-x-4 sm:grid-cols-2 lg:mx-6 max-w-none lg:grid-cols-4"
              >
                {people.map((person) => (
                  <div
                    key={person.id}
                    className={`lg:w-[16rem] sm:w-[16rem] mb-4 ml-4 rounded-xl bg-color-box px-2 pt-2 filter-item ${person.subject} `}
                  >
                    <button
                      onClick={() => {
                        setOpenModal(true);
                        setPeopleIndex(person.id);
                      }}
                    >
                      <img
                        src={expand}
                        alt=""
                        className="relative z-50 -mb-10 left-48 -mt-2"
                      />
                    </button>
                    <img
                      className="h-[16rem] w-64 rounded-xl md:h-[14rem] md:w-[18rem] sm:h-[14rem] sm:w-72 -mt-6"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="flex justify-between">
                      <h3 className="mt-2 text-lg font-semibold leading-7 tracking-tight mb-1 text-white">
                        {person.name}
                      </h3>
                    </div>
                    <p className="flex justify-start text-sm mb-4 font-semibold leading-6 text-color-primary">
                      {person.education}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          {openModal && (
            <Modal closeModal={setOpenModal} people={people[peopleIndex]} />
          )}
          <div className="lg:mt-8 flex items-center justify-center gap-x-6 sm:mt-4 mt-2">
            <a
              href="#"
              className="rounded-full w-28 bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      <div //service section
        className="relative color"
      >
        <div className="lg:ml-20 lg:mr-20 relative mx-auto lg:flex lg:justify-between">
          <div className="px-6 py-16 lg:col-span-2 lg:px-8 lg:py-20 xl:pr-12">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-7xl">
                <p className="lg:text-5xl font-bold tracking-tight text-gray-900 text-4xl">
                  <span className="text-color-primary">Need help</span> with one
                  or more of your subjects?
                </p>
                <p className="mt-6 text-sm text-gray-600 mb-6">
                  Arrange 1-1 sessions with a member of our team and watch your
                  grades rocket!
                </p>
                <a
                  href="#"
                  className="-ml-2 rounded-full w-28 bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-sm "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 sm:py-4 lg:col-span-3 lg:px-16 lg:py-24 lg:-mr-10 sm:mx-[10rem]">
            <img src={peopleicon} alt="" />
          </div>
        </div>
      </div>

      <div //Newsletter section
        className="color py-12 sm:py-16"
      >
        <div className="mx-4 lg:mx-[10rem] max-w-7xl sm:px-2 lg:px-8 sm:mx-[2rem]">
          <div className="relative overflow-hidden newsletter px-6 py-16 sm:rounded-3xl sm:px-6">
            <img src={newsletter} alt="" className="mx-auto mb-4" />
            <h2 className="mx-auto max-w-2xl text-center lg:text-5xl font-bold tracking-tight text-black text-4xl">
              Never miss a thing.
            </h2>
            <p className="mx-auto max-w-xl text-center text-sm text-gray-600 leading-5 my-6">
              There’s a lot going on every month in the Medology Empire and if
              you want to stay at the bleeding edge, make sure you’ve subscribed
              to our newsletter!
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-lg form-color newsletter px-4 py-3 placeholder-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-teal-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="color my-4">
        <footer //footer
          className="bg-black rounded-xl mx-4"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-10 pb-6 pt-6 sm:pt-8 lg:px-4 lg:pt-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <img
                className="h-28 lg:ml-24 mx-auto sm:mb-4"
                src={footericon}
                alt="Company name"
              />
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:col-span-2 xl:mt-0 ml-[20rem] block">
                <div className="md:grid md:grid-cols-2 md:gap-8 flex justify-between lg:ml-16 -ml-[20rem] sm:-ml-[16rem]">
                  <div className="lg:-mt-10 ">
                    <h3 className="text-lg text-color-primary font-semibold leading-6 mt-10">
                      Menu
                    </h3>
                    <ul role="list" className="mt-4 space-y-2">
                      {navfooter.menu.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base leading-6 text-gray-400 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0 mb-4 lg:ml-24 w-full lg:-mr-[20rem] ml-[10rem] sm:ml-[14rem]">
                    <h3 className="text-lg text-color-primary font-semibold leading-6">
                      Information
                    </h3>
                    <ul role="list" className="mt-4 space-y-2">
                      {navfooter.information.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base leading-6 text-gray-400 hover:text-white "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex lg:mt-64 lg:right-32 -mb-4 space-x-6 sm:right-20 sm:-mt-4 absolute right-10 ">
                  {navfooter.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-color-primary hover:text-gray-400"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:mx-[6rem] mt-14 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between sm:text-center">
              <p className="mt-8 font-semibold text-base leading-5 text-gray-400 md:order-1 md:mt-0">
                &copy; 2023, Medology Ltd | All rights reserved | Powered by
                <span className="text-color-primary"> Quirky Agency</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Team;
