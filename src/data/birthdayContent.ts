import laliniHeroImage from './WhatsApp Image 2026-10-10 at 7.31.57 AM.jpeg'
import laliniCreatorImage from './creatormain.jpeg'
import creatorGrid1 from './grid1.jpeg'
import creatorGrid2 from './grid2.jpeg'
import creatorGrid3 from './grid3.jpeg'
import creatorGrid4 from './grid4.jpeg'
import creatorGrid5 from './grid5.jpeg'
import creatorGrid6 from './grid6.jpeg'
import firstYearMemory from './bdaycel.jpeg'
import travelMemory from './journey.jpeg'
import midnightBirthdayMemory from './midnight.jpeg'
import collegeGardenMemory from './garden.jpeg'
import rainyBirthdayCakeMemory from './health.jpeg'
import shoppingMemory from './shopping.jpeg'
import gajuwakaMemory from './gajuwaka.jpeg'
import beachMemory from './beach.jpeg'

export type MemoryItem = {
  id: number
  title: string
  date: string
  teaser: string
  description: string
  image: string
  imagePosition?: string
  extraImages?: string[]
}

export const birthdayContent = {
  friendName: 'Lalini',
  yourName: 'Uha',
  heroImage: laliniHeroImage,
  heroTag: 'A LITTLE WORLD MADE JUST FOR YOU',
  subtitle: 'The world is a little more beautiful because you are in it.',
  handwrittenNote: 'Your story deserves its own little corner of the internet.',
  intro: {
    heading: 'Before You Scroll...',
    body:
      'Some people make ordinary moments feel special. You have this beautiful way of turning little things into memories, and watching you grow into the person you are today has been such a lovely thing.',
  },
  memories: [
    {
      id: 1,
      title: 'Your Birthday Party Celebration',
      date: 'Our first year together',
      teaser: 'Celebrating your birthday and going on our first outing with friends.',
      description:
        'In our first year as roommates, we celebrated your birthday party and went on our first outing with our friends. Those early moments became the beginning of so many memories together. Looking at this photo takes me back to the fun, laughter, and friendship we were building side by side.',
      image: firstYearMemory,
    },
    {
      id: 2,
      title: 'Our memorable travels',
      date: 'Adventures with friends',
      teaser: 'Every trip felt more exciting because we experienced it together.',
      description:
        'Our travels together gave us the kind of memories that still make me smile. From the excitement of going out with our friends to all the little moments along the way, every trip felt special because we shared it. I will always treasure these adventures and the laughter we carried with us.',
      image: travelMemory,
    },
    {
      id: 3,
      title: 'Midnight Birthday Magic',
      date: 'Birthday plans after dark',
      teaser: 'The planning, excitement, and happiness of celebrating together at midnight.',
      description:
        'The midnight birthday celebrations were full of excitement, happy planning, and so much enjoyment together. Being part of the surprise and seeing everyone come together to celebrate made the moment feel extra special. It is one of those joyful memories that still brings a smile whenever I look back.',
      image: midnightBirthdayMemory,
    },
    {
      id: 4,
      title: 'College Garden Days',
      date: 'Our first year together',
      teaser: 'Chitchats, games, cravings, and happy moments in the college garden.',
      description:
        'So many of our first-year memories were made in the college garden—spending time together, chatting about everything, playing games, and sharing all our cravings and food orders. Even the ordinary meetups became happy little moments because we had each other. I still treasure those simple days and the laughter that filled them.',
      image: collegeGardenMemory,
      imagePosition: '50% 20%',
    },
    {
      id: 5,
      title: 'A Birthday Made with Love',
      date: 'Rainy-day preparations',
      teaser: 'Making fruit cake and decorating by hand for Lalini’s birthday.',
      description:
        'Even the heavy rain could not stop us from making Lalini’s birthday special. We put our effort into making a fruit cake and decorating everything ourselves. It was all the teamwork, care, and laughter behind the preparations that made this celebration truly memorable.',
      image: rainyBirthdayCakeMemory,
    },
    {
      id: 6,
      title: 'Little Shopping Adventures',
      date: 'A day out together',
      teaser: 'Every little stop was more fun because we were side by side.',
      description:
        'Our shopping trips had a very serious plan: go in for one thing, browse absolutely everything, give each other a full fashion review, and somehow leave with stories instead of a shopping list. The best bargain was always the laughs we got for free. Honestly, the shops should give us a loyalty card just for all the time we spent deciding!',
      image: shoppingMemory,
    },
    {
      id: 7,
      title: 'Gajuwaka Day Out',
      date: 'Temple visit, shopping & food',
      teaser: 'A lovely day together visiting the Vinayaka temple, shopping, and eating.',
      description:
        'Our Gajuwaka outing had all the ingredients for a perfect day: a visit to the Vinayaka temple, time to wander around shopping, and, of course, delicious food to enjoy together. The best part was sharing every stop, laugh, and little decision with you. We went for an outing and came home with full hearts, happy memories, and probably very full stomachs!',
      image: gajuwakaMemory,
    },
    {
      id: 8,
      title: 'Our Happy Day by the Beach',
      date: 'Sea breeze & friendship',
      teaser: 'A beautiful day, lovely company, and a memory to keep close.',
      description:
        'A day by the beach feels even brighter when shared with your favorite people. I will always remember this lovely moment together—the open sky, the sea breeze, and all of us gathered side by side. It is one of those simple, happy memories that makes me grateful for every adventure and every laugh we share.',
      image: beachMemory,
    },
  ] as MemoryItem[],
  creatorProfile: {
    handle: '@glow_with_lalini',
    profileImage: laliniCreatorImage,
    description:
      'Fashion, beauty, little moments from everyday life, and places worth getting lost in — sharing the things that make life feel lovely.',
    categories: ['Fashion', 'Beauty', 'Lifestyle', 'Travel'],
    link: 'https://www.instagram.com/glow_with_lalini/',
    placeholders: ['Style inspiration', 'Beauty moments', 'Everyday stories', 'Travel notes'],
    shorts: ['vZuKqqGJg4k', 'xZe9Ay5K-TA', 'DYrIO89UiqA', '0XQUGUK4ddU'],
  },
  birthdayGallery: [
    creatorGrid1,
    creatorGrid2,
    creatorGrid3,
    creatorGrid4,
    creatorGrid5,
    creatorGrid6,
  ],
  letter: {
    lines: [
      'Happy Birthday to one of the most special people in my life.',
      'We stepped into college at the same time and became roommates, never knowing that we were also stepping into a friendship that would feel like home. From the everyday little things to the moments that mattered most, we have shared so much side by side.',
      'You are the one who celebrates my successes as if they were your own, and when life hurts me, you are often the first to feel it and cry with me. Your care has made even the hardest days feel less lonely, and every happy moment brighter.',
      'I hope you know how deeply grateful I am for you—not just for everything you do, but for the heart you bring into our friendship. Having you beside me is one of the loveliest parts of my life.',
      'I am truly sorry for the times my mistakes or words have hurt you. You deserve kindness and care, and I never want you to doubt how much our friendship means to me. I am listening, I am learning, and I will keep trying to do better.',
      'I hope this new chapter brings you the kind of happiness that stays, the kind of opportunities you have been dreaming about, and countless reasons to smile.',
      'Keep creating, keep growing, and keep being unapologetically yourself. Never forget that behind every beautiful post is a person with dreams, effort, and a heart that deserves just as much love as the happiness she shares with others.',
      'I hope you achieve everything you have been working towards and discover even more beautiful things along the way.',
      'No matter how much life changes or how far your journey takes you, I hope you always remember how special you are.',
      'Here is to more memories, more laughter, more achievements, and another beautiful year of being YOU.',
      'Happy Birthday, my girl. You deserve all the love in the world. ♡',
      'Forever cheering for you — Uha',
    ],
  },
}

