// src/components/data.js (MODIFIED to include thumbnail paths)

// --- EPISODE DATA ARRAY ---
export const EPISODES = [
  {
    id: 'e1',
    season: 1,
    episode: 1,
    title: 'Discussions on Mahanati-Pranav B and Hemal',
    description: 'A modern telugu classic that’s impossible to not love.',
    url: 'https://open.spotify.com/episode/0JuqYcx6F3PSXFOMDc96wt?si=xLITRsdzQUersbX4G5j9jg', 
    isPopular: true,
    isLatest: false,
    // ADDED THUMBNAIL PROPERTY
    thumbnail: '/assets/mahanati.jpg', 
  },
  {
    id: 'e2',
    season: 1,
    episode: 2,
    title: 'Discussions on Parasite-Pranav B',
    description: 'Best Picture winner but did it happen overnight?Listen now to our breakdown of Parasite’s success and cultural impact!',
    url: 'https://open.spotify.com/episode/63HoKT1y9XZ0Jh4jrv0zMi?si=HLP0r75JTj-ETMyeJ1HEcQ',
    isPopular: true,
    isLatest: false,
    // ADDED THUMBNAIL PROPERTY
    thumbnail: '/assets/parasite.jpg',
  },
  {
    id: 'e3',
    season: 1,
    episode: 8,
    title: 'Discussions on The Social Network-Kushal N and Anek',
    description: "In the third and final episode of season three, Kushal and Anek discuss David Fincher's critically acclaimed The Social Network. They praise Aaron Sorkin's rhythmic dialogue and explore the film's underlying ideas, dissecting why it stands out in Fincher's filmography.",
    url: 'https://open.spotify.com/episode/3iocOwKvzh4XHcPPeHunw8?si=EKg1S93OQcmc-62Q9n48Qw',
    isPopular: false,
    isLatest: true,
    // ADDED THUMBNAIL PROPERTY
    thumbnail: '/assets/socialNetwork.jpg',
  },
  {
    id: 'e4',
    season: 1,
    episode: 9,
    title: ' Every FRIDAY Ever-Pranav B and Anand K',
    description: "Anand Karanam joins us to talk about his journey as a filmmaker and writer, while also primarily discussing the importance of film criticism and the impact of film reviews in today's world.",
    url: 'https://open.spotify.com/episode/7o7Zle42jyINGPmUEn0b4a?si=85Gf0BwtRF2TGQ_k2RgpLg',
    isPopular: false,
    isLatest: true,
    thumbnail: '/assets/FridayEver.jpg',
  },
];

// --- GUEST DATA ARRAY ---
export const GUESTS = [
  {
    id: 'g1',
    name: 'Praveen Kandregula',
    bio: 'Praveen Kandregula, acclaimed director of Cinema Bandi, Subham, and Paradha, joined Ten Out Of Ten to discuss his debut feature. Celebrated for his authentic storytelling and rooted cinematic voice, Praveen continues to shape the landscape of Telugu indie cinema.His films highlight everyday lives with rare sincerity and humor. In our conversation, he reflected on the making of Cinema Bandi and his journey as a filmmaker.',
    img: '/assets/praveen.jpg',
  },
  {
    id: 'g2',
    name: 'Vinod Anantoju',
    bio: 'Vinod Anantoju, director of the beloved Middle Class Melodies and the upcoming Netflix film Takshakudu, joined Ten Out Of Ten to discuss his debut feature.Celebrated for his heartfelt storytelling and relatable characters, Vinod has carved a niche in Telugu cinema.His work captures the warmth and humor of everyday life with striking authenticity.In our conversation, he reflected on Middle Class Melodies and the evolution of his filmmaking journey.',
    img: '/assets/vinod.jpg',
  },
  {
    id: 'g3',
    name: 'Pavan Sadineni',
    bio: 'Pavan Sadineni, director of Prema Ishq Kaadhal, Savitri, the acclaimed web series Dayaa, and the upcoming film Aakasham Lo Oka Taara, joined Ten Out Of Ten to discuss his neo-noir thriller Senapathi. A filmmaker known for his versatile storytelling and strong character work, Pavan continues to push creative boundaries in Telugu cinema. His projects often blend emotional depth with sharp visual style. Our conversation delved into Senapathi’s making and his evolving directorial vision.',
    img: '/assets/pavan.jpg',
  },
];

// --- BLOG DATA ARRAY ---
export const BLOGS = [
  {
    id: 'b1',
    title: 'BLOG TITLE',
    slug: 'blog-title-1', 
    description: 'A brief description of th blog upto this length and can increase the size in like a couple of lines',
    date: 'DD/MM/YYYY',
    content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    image: '/assets/blog-image-1.jpg',
  },
  {
    id: 'b2',
    title: 'SECOND BLOG POST',
    slug: 'second-blog-post',
    description: 'This is the description for the second blog post, which is slightly longer just to test the text wrapping.',
    date: '20/10/2025',
    content: [
        'Content for the second blog post goes here...',
        'It is usually much longer and more detailed than the description.',
    ],
    image: null, 
  },
  {
    id: 'b3',
    title: 'SECOND BLOG POST',
    slug: 'second-blog-post',
    description: 'This is the description for the second blog post, which is slightly longer just to test the text wrapping.',
    date: '20/10/2025',
    content: [
        'Content for the second blog post goes here...',
        'It is usually much longer and more detailed than the description.',
    ],
    image: null, 
  },
  {
    id: 'b4',
    title: 'SECOND BLOG POST',
    slug: 'second-blog-post',
    description: 'This is the description for the second blog post, which is slightly longer just to test the text wrapping.',
    date: '20/10/2025',
    content: [
        'Content for the second blog post goes here...',
        'It is usually much longer and more detailed than the description.',
    ],
    image: null, 
  },
];

export const COMPLETED_WORKS = [
    {
        id: 'w1',
        title: 'Lilly',
        type: 'Short Film',
        year: 2024,
        role: 'Production & Distribution',
        description: 'A powerful short film that explores themes of identity and belonging through the lens of contemporary Telugu storytelling.',
        link: 'https://youtu.be/GcdCW_XRoCk?si=Gxw9U0OQK78S4R9X', 
        image: '/assets/Lilypuku.jpg', // Replace with actual image path if available
    },
    {
        id: 'w2',
        title: 'Anjigaadu',
        type: 'Short Film',
        year: 2023,
        role: 'Publicity Collaborators',
        description: 'When his village faces a grave crisis, Anjigaadu devises a simple yet powerful solution. Directed by Sai Ram, this short film gained widespread attention for its emotionally driven storytelling and beautifully crafted screenplay.',
        link: 'https://youtu.be/ciQLCOhymHQ?si=aPScwgYl8mgEqh72',
        image: '/assets/AnjiModda.jpg', // Replace with actual image path if available
    },
    {
        id: 'w3',
        title: 'Friday',
        type: 'Independent Film',
        year: 2024,
        role: 'Presenters',
        description: 'Directed by Anand Karanam,this critically acclaimed independent feature tells the story of an insomniac IT employee who prepares for a crucial meeting.',
        link: 'https://youtu.be/O_qo4q1JDbs?si=3UNHuaFGgnTjckLg',
         image: '/assets/Friday.jpg',
    },
];

// --- UPCOMING WORK DATA ARRAY ---
export const UPCOMING_WORKS = [
    {
        id: 'u1',
        title: 'Tarunam',
        type: 'Short Film',
        year: 2025,
        role: 'Presenters',
        description: 'Releasing this year, this short directed by our very own team member,Amarthya Raj tells us the story of a chess player who fights demons of his own.',
        // link: '#',
        image: '/assets/tarunam.png',
    },
    {
          id: 'u2',
          title: 'Juliet',
          type: 'Short Film',
          year: 2025,
          role: 'Presenters',
          description: 'Sriram tells a story',
          // link: '#',
          image: '/assets/tarunam.png',
      },
];

// src/components/data.js (ADD THIS TO THE END OF THE FILE)

// --- TEAM MEMBER DATA ARRAY ---
export const TEAM_MEMBERS = [
    {
        id: 'tm1',
        firstName: 'Pranav',
        lastName: 'Bellary',
        position: 'Founder & Host',
        tenure: '',
        image: '/assets/pranavB.jpg',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm2',
        firstName: 'Tanmayi',
        lastName: 'Challa',
        position: 'Co Founder',
        tenure: '',
        image: '/assets/tanmayi.jpg',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm3',
        firstName: 'Prabhath',
        lastName: ' Reddy',
        position: 'Producer',
        tenure: '',
        image: '/assets/PrabhathReddy.jpg',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm4',
        firstName: 'Kushal',
        lastName: 'Neduru',
        position: 'Host',
        tenure: '',
        image: '/assets/kushal.jpg',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm5',
        firstName: 'Amarthya',
        lastName: 'Raj',
        position: 'Producer & Communications',
        tenure: '',
        image: '/assets/amarthya.jpg',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm6',
        firstName: 'Prachi',
        lastName: 'Sarda',
        position: 'Design',
        tenure: '',
        image: '/assets/prachi.png',
        // instagram: 'https://www.instagram.com',
    },
    {
        id: 'tm7',
        firstName: 'Hemal',
        lastName: 'Tummapudi',
        position: 'Producer',
        tenure: '',
        image: '/assets/hemal.jpg',
        // instagram: 'https://www.instagram.com',
    },
];

// --- ABOUT SECTION COPY ---
export const ABOUT_TEXT = "At Ten Out Of Ten, we dive into films that moved us, or moved the culture. With 3 seasons and 45 episodes, our podcast celebrates the art and joy of cinema. We spotlight stories worth watching and voices worth hearing.Beyond the mic, we present and distribute short and independent films across South India. Our collaborations include several critically acclaimed projects and filmmakers. Ten Out Of Ten is where passion for movies meets conversation that lasts.";
