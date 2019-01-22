import { Album } from './album';
import { Artist } from './artist';

const DEMI: Artist = {
  name: 'Demi Lovato',
  age: 26,
  country: 'United States'
}

const a: string = "../assets/albums/";

export const ALBUMS: Album[] = [
  {name: 'Don\'t Forget', artist: DEMI, year: 2008, image: a + "dont_forget.png",
  songs: [
    {name: 'La La Land', duration: '3:16'},
    {name: 'Get Back', duration: '3:20'},
    {name: 'Trainwreck', duration: '3:17'},
    {name: 'Party', duration: '3:53'},
    {name: 'On the Line', duration: '3:26'},
    {name: 'Don\'t Forget', duration: '3:43'},
    {name: 'Gonna Get Caught', duration: '3:11'},
    {name: 'Two Worlds Collide', duration: '3:18'},
    {name: 'The Middle', duration: '3:05'},
    {name: 'Until You\'re Mine', duration: '3:31'},
    {name: 'Believe In Me', duration: '3:42'}]
  },
  {name: 'Here We Go Again', artist: DEMI, year: 2009, image: a + "here_we_go_again.png",
  songs: [
    {name: 'Here We Go Again', duration: '3:46'},
    {name: 'Solo', duration: '3:15'},
    {name: 'U Got Nothin\' On Me', duration: '3:38'},
    {name: 'Falling Over Me', duration: '4:06'},
    {name: 'Quiet', duration: '2:45'},
    {name: 'Catch Me', duration: '3:10'},
    {name: 'Every Time You Lie', duration: '3:49'},
    {name: 'Got Dynamite', duration: '3:25'},
    {name: 'Stop the World', duration: '3:34'},
    {name: 'World of Chances', duration: '2:51'},
    {name: 'Remember December', duration: '3:12'},
    {name: 'Everything You\'re Not', duration: '3:43'}]
  },
  {name: 'Unbroken', artist: DEMI, year: 2011, image: a + "unbroken.png",
  songs: [
    {name: 'All Night Long', duration: '3:14'},
    {name: 'Who\'s That Boy', duration: '3:12'},
    {name: 'You\'re My Only Shorty', duration: '3:06'},
    {name: 'Together', duration: '4:22'},
    {name: 'Lightweight', duration: '4:01'},
    {name: 'Unbroken', duration: '3:18'},
    {name: 'Fix a Heart', duration: '3:13'},
    {name: 'Hold Up', duration: '2:50'},
    {name: 'Mistake', duration: '3:33'},
    {name: 'Give Your Heart a Break', duration: '3:25'},
    {name: 'Skyscraper', duration: '3:42'},
    {name: 'In Real Life', duration: '2:57'},
    {name: 'My Love Is Like a Star', duration: '3:50'},
    {name: 'For the Love of a Daughter', duration: '4:00'}]
  },
  {name: 'Demi', artist: DEMI, year: 2013, image: a + "demi.png",
  songs: [
    {name: 'Heart Attack', duration: '3:30'},
    {name: 'Made in the USA', duration: '3:16'},
    {name: 'Without the Love', duration: '3:55'},
    {name: 'Neon Lights', duration: '3:53'},
    {name: 'Two Pieces', duration: '4:25'},
    {name: 'Nightingale', duration: '3:36'},
    {name: 'In Case', duration: '3:34'},
    {name: 'Really Don\'t Care', duration: '3:21'},
    {name: 'Fire Starter', duration: '3:24'},
    {name: 'Something That We\'re Not', duration: '3:17'},
    {name: 'Never Been Hurt', duration: '3:56'},
    {name: 'Shouldn\'t Come Back', duration: '3:48'},
    {name: 'Warrior', duration: '3:51'},
    {name: 'I Hate You, Don\'t Leave Me', duration: '3:33'},
    {name: 'Let It Go', duration: '3:45'}]
  },
  {name: 'Confident', artist: DEMI, year: 2015, image: a + "confident.png",
  songs: [
    {name: 'Confident', duration: '3:25'},
    {name: 'Cool for the Summer', duration: '3:34'},
    {name: 'Old Ways', duration: '3:24'},
    {name: 'For You', duration: '3:41'},
    {name: 'Stone Cold', duration: '3:11'},
    {name: 'Kingdom Come', duration: '4:04'},
    {name: 'Waitin\' for You', duration: '3:12'},
    {name: 'Wildfire', duration: '3:19'},
    {name: 'Lionheart', duration: '4:04'},
    {name: 'Yes', duration: '3:10'},
    {name: 'Father', duration: '3:55'},
    {name: 'Stars', duration: '3:08'},
    {name: 'Mr. Hughes', duration: '3:41'}]
  },
  {name: 'Tell Me You Love Me', artist: DEMI, year: 2017, image: a + "tell_me_you_love_me.png",
  songs: [
    {name: 'Sorry Not Sorry', duration: '3:23'},
    {name: 'Tell Me You Love Me', duration: '3:56'},
    {name: 'Sexy Dirty Love', duration: '3:33'},
    {name: 'You Don\'t Do It for Me Anymore', duration: '3:17'},
    {name: 'Daddy Issues', duration: '3:09'},
    {name: 'Ruin the Friendship', duration: '3:53'},
    {name: 'Only Forever', duration: '3:17'},
    {name: 'Lonely', duration: '4:41'},
    {name: 'Cry Baby', duration: '3:42'},
    {name: 'Games', duration: '3:08'},
    {name: 'Concentrate', duration: '3:17'},
    {name: 'Hitchhiker', duration: '3:43'},
    {name: 'Smoke & Mirrors', duration: '3:57'},
    {name: 'Ready for Ya', duration: '3:30'}]
  }
];
