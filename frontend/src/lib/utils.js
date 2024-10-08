import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const Articles = [
  {
    source: { id: "cnn", name: "CNN" },
    author: "Issy Ronald, CNN",
    title:
      "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
    description:
      '"We have a score to settle," Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.',
    url: "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
    publishedAt: "2022-05-05T10:06:14Z",
    content:
      '(CNN)"We have a score to settle," Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag\u2026 [+2830 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Esha Mitra, Rhea Mogul",
    title:
      "A 13-year-old girl told the police she had been gang-raped. Then a police officer allegedly raped her",
    description:
      "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.",
    url: "https://www.cnn.com/2022/05/05/india/india-rape-teenager-police-arrested-intl-hnk/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220505013803-lalitapur-india-map.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-05T09:58:01Z",
    content:
      "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.\r\nAuthorities in U\u2026 [+4395 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Reuters",
    title: "Turkey's inflation hits two-decade high of 70%",
    description:
      "Turkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commodity prices after last year's lira crash.",
    url: "https://www.cnn.com/2022/05/05/economy/turkey-inflation-soars/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220505053006-istanbul-shooppers-0406-super-tease.jpg",
    publishedAt: "2022-05-05T09:37:48Z",
    content:
      "IstanbulTurkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commod\u2026 [+1030 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ben Church",
    title:
      "Chris Paul masterclass inspires Phoenix Suns to 2-0 lead in NBA playoffs",
    description:
      "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.",
    url: "https://www.cnn.com/2022/05/05/sport/chris-paul-phoenix-suns-nba-playoff-spt-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220505044755-02-chris-paul-0504.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-05T09:33:40Z",
    content:
      "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.\r\nPaul, who turns 37 on Friday, racked\u2026 [+2470 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Reuters",
    title: "Shell posts record quarterly profit of $9 billion",
    description:
      "Shell on Thursday reported a record first-quarter profit of $9.13 billion, boosted by higher oil and gas prices, stellar refining profits and the strong performance of its trading division.",
    url: "https://www.cnn.com/2022/05/05/investing/shell-earnings-record-profit/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220505051920-02-shell-refinery-file-04292021-super-tease.jpg",
    publishedAt: "2022-05-05T09:25:29Z",
    content:
      "LondonShell on Thursday reported a record first-quarter profit of $9.13 billion, boosted by higher oil and gas prices, stellar refining profits and the strong performance of its trading division.\r\nTh\u2026 [+2872 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Melissa Alonso and Christina Maxouris, CNN",
    title:
      "Massachusetts child protective system failed missing 7-year-old Harmony Montgomery, state office says",
    description:
      "Massachusetts state officials involved in the welfare case of Harmony Montgomery, the 7-year-old girl last seen in 2019, failed to prioritize her well-being and safety throughout her life, according to a report issued Wednesday.",
    url: "https://www.cnn.com/2022/05/05/us/harmony-montgomery-massachusetts-report/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220105134350-harmony-montgomery-missing-super-tease.jpg",
    publishedAt: "2022-05-05T09:12:42Z",
    content:
      "(CNN)Massachusetts state officials involved in the welfare case of Harmony Montgomery, the 7-year-old girl last seen in 2019, failed to prioritize her well-being and safety throughout her life, accor\u2026 [+7532 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Melanie Radzicki McManus, CNN",
    title: "Rock climbing brings unexpected benefits",
    description:
      "Rock climbing may seem like a niche sport, possibly one fraught with danger. After all, it involves scaling the side of a cliff or simulated rock wall. But experts say it offers participants a wide variety of physical and mental health benefits that are not a\u2026",
    url: "https://www.cnn.com/2022/05/05/health/rock-climbing-benefits-wellness/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220421201315-01-rock-climber-file-072221-super-tease.jpg",
    publishedAt: "2022-05-05T08:20:50Z",
    content:
      "(CNN)Rock climbing may seem like a niche sport, possibly one fraught with danger. After all, it involves scaling the side of a cliff or simulated rock wall. But experts say it offers participants a w\u2026 [+6279 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "By Jacopo Prisco, CNN",
    title: "This solar-powered plane could stay in the air for months",
    description:
      'Solar Impulse 2 circumnavigated the Earth without using a drop of fuel. Now, Skydweller Aero aims to use the plane to create the world\'s first commercially viable "pseudo-satellite."',
    url: "https://www.cnn.com/travel/article/skydweller-solar-powered-plane-solar-impulse-climate-scn-spc-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504141537-restricted-02-skydweller-solar-impulse-story-card-super-tease.jpg",
    publishedAt: "2022-05-05T07:49:15Z",
    content:
      "(CNN) In 2016, a bizarre-looking plane, covered with more than 17,000 solar panels, showed the world a glimpse of the future of flight. With the wingspan of a Boeing 747, but weighing only as much as\u2026 [+5707 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Jacqui Palumbo, CNN",
    title: "The internet's famous dancing baby from 1996 is getting a new look",
    description:
      'If you were born before 1990, you may remember the 3D graphic of an almost-naked baby that danced on a loop to become one of the internet\'s earliest viral phenomenons. The strange-yet-sassy "Dancing Baby" began spreading via forwarded email chains in 1996 bef\u2026',
    url: "https://www.cnn.com/style/article/dancing-baby-meme-nft/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504125439-01-dancing-baby-remix-super-tease.jpg",
    publishedAt: "2022-05-05T07:32:34Z",
    content:
      "arts\r\nIf you were born before 1990, you may remember the 3D graphic ofan almost-naked baby that danced on a loop to become one of the internet's earliest viral phenomenons. The strange-yet-sassy \"Dan\u2026 [+5815 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Elizabeth Wolfe, Amara Walker and Jade Gordon, CNN",
    title:
      "Search for Alabama corrections officer and inmate enters 7th day as officials piece together why they disappeared",
    description:
      "Investigators are pleading for Alabama corrections official Vicky White to turn herself in as the search for her and the inmate she disappeared, Casey White, with enters its seventh day.",
    url: "https://www.cnn.com/2022/05/05/us/alabama-vicky-white-casey-white-search-thursday/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220501071557-vicki-white-casey-white-super-tease.jpg",
    publishedAt: "2022-05-05T07:14:08Z",
    content:
      "(CNN)Investigators are pleading for Alabama corrections official Vicky White to turn herself in as the search for her and the inmate she disappeared with enters its seventh day. \r\n\"Vicky, you've been\u2026 [+6562 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Jackie Wattles, CNN Business",
    title:
      "SpaceX's jam-packed schedule continues with another astronaut return",
    description:
      "Three NASA astronauts and a European astronaut are returning home from the International Space Station, capping off their six-month mission during which they worked alongside Russian cosmonauts and hosted the first all-private crew to visit the orbiting outpo\u2026",
    url: "https://www.cnn.com/2022/05/05/tech/spacex-crew-3-nasa-undock-scn/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220505012300-01-spacex-crew3-undock-0505-super-tease.jpg",
    publishedAt: "2022-05-05T05:29:13Z",
    content:
      "New York (CNN Business)Three NASA astronauts and a European astronaut are returning home from the International Space Station, capping off their six-month mission during which they worked alongside R\u2026 [+7271 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: null,
    title:
      "CNN speaks to the Ukrainian oligarch helping fund fight against Putin",
    description:
      "CNN's Nic Robertson speaks to Ukrainian oligarch Dmitry Firtash, a major contributor to the war effort against Russia, who is facing extradition to the US.",
    url: "https://www.cnn.com/videos/business/2022/05/05/ukrainian-oligarch-dmitry-firtash-robertson-pkg-ovn-intl-vpx.cnn",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220505003801-dmitry-firtash-thumb-robertson-pkg-vpx-super-tease.jpg",
    publishedAt: "2022-05-05T05:03:44Z",
    content: "",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author:
      'By <a href="/profiles/helen-regan">Helen Regan</a> and <a href="/profiles/andrew-raine">Andrew Raine</a>, CNN',
    title: "Russia's war in Ukraine",
    description:
      'A Ukrainian commander at the Azovstal steel plant said there are "bloody battles" unfolding with Russian forces inside the complex after they breached the perimeter. Follow here for live updates.',
    url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-05-22/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504143212-azovstal-mariupol-ukraine-steel-plant-blurred-super-tease.jpg",
    publishedAt: "2022-05-05T04:03:15Z",
    content:
      'A Ukrainian commander at the Azovstal steel plant in Mariupol said there are "bloody battles" unfolding with Russian forces inside the complex after they breached the perimeter, even as Russia said i\u2026 [+2017 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Mary Kay Mallonee",
    title:
      "Cawthorn addresses video released by opposition group showing him naked in bed 'being crass'",
    description:
      'An opposition group that is actively campaigning against Rep. Madison Cawthorn has released a video clip appearing to show the North Carolina Republican naked in bed and, as Cawthorn described it, "being crass with a friend" and "acting foolish."',
    url: "https://www.cnn.com/2022/05/04/politics/cawthorn-response-opposition-group-video/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504224551-03-cawthorn-response.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-05T03:27:03Z",
    content:
      "An opposition group that is actively campaigning against Rep. Madison Cawthorn has released a video clip appearing to show the North Carolina Republican naked in bed and, as Cawthorn described it, be\u2026 [+3281 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Text by Lilit Marcus, CNN; Video by Max Burnell, CNN",
    title: "How to build a runway out of solid ice",
    description:
      "Just about everything that supports human life on Antarctica must be brought in from elsewhere, usually by aircraft. And in order for that aircraft to have a place to land somebody has to construct a runway out of solid ice.",
    url: "https://www.cnn.com/travel/article/ice-runway-antarctica-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220404092705-wolfs-fang-runway-super-tease.jpg",
    publishedAt: "2022-05-05T02:27:48Z",
    content:
      "Text by Lilit Marcus, CNN; Video by Max Burnell, CNNPublished 5th May 2022\r\n(CNN) Just about everything that supports human life on Antarctica must be brought in from elsewhere, usually by aircraft. \u2026 [+7207 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Dakin Andone",
    title:
      "Some abortion clinics are preparing for more out-of-state patients if Roe v. Wade is overturned",
    description:
      "Abortion clinics in states likely to maintain access to the procedure are preparing for a potential influx of out-of-state patients following the report of a leaked draft of a Supreme Court majority opinion that would overturn Roe v. Wade.",
    url: "https://www.cnn.com/2022/05/04/us/abortion-out-of-state-patients-roe-v-wade/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504130235-01-jackson-womens-health-organization-0503.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-05T01:05:21Z",
    content:
      "Abortion clinics in states likely to maintain access to the procedure are preparing for a potential influx of out-of-state patients following the report of a leaked draft of a Supreme Court majority \u2026 [+6701 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Opinion by Alice Stewart",
    title:
      "Opinion: Conservatives held our noses and voted for Trump. Reversing Roe would be our reward",
    description:
      '"As a pro-life social conservative, I received my fair share of criticism for supporting Donald Trump for president," writes commentator Alice Stewart. "But I focused on the value of lifetime appointments to the high court that would elevate jurists who belie\u2026',
    url: "https://www.cnn.com/2022/05/04/opinions/supreme-court-abortion-conservatives-roe-stewart/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220221215729-march-for-life-closeup-file-01202022-super-tease.jpg",
    publishedAt: "2022-05-05T00:08:07Z",
    content:
      "Alice Stewart is a CNN Political Commentator and board member at the John F. Kennedy Institute of Politics at Harvard University. The views expressed in this commentary are her own. Read more opinion\u2026 [+4687 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Raja Razek, CNN",
    title:
      "Alabama church known for role in voting rights movement is on the list of most endangered historic places",
    description:
      "A Selma, Alabama, church with historic ties to the 1960s voting rights movement has landed on the 2022 Most Endangered Places list -- because of termites.",
    url: "https://www.cnn.com/2022/05/04/us/selma-alabama-church-most-endangered-historic-places-list/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504150051-01-brown-chapel-african-methodist-episcopal-church-super-tease.jpg",
    publishedAt: "2022-05-05T00:07:35Z",
    content:
      "(CNN)A Selma, Alabama, church with historic ties to the 1960s voting rights movement has landed on the 2022 Most Endangered Places list -- because of termites.\r\nBrown Chapel African Methodist Episcop\u2026 [+1993 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Brian Fung, CNN",
    title:
      "New York City pension funds sue Activision Blizzard, seeking records on CEO Bobby Kotick",
    description:
      "New York City pension fund officials sued Activision Blizzard late last month in a bid to force the company to disclose records that may uncover whether CEO Bobby Kotick breached his fiduciary duty to investors, according to a newly released copy of the compl\u2026",
    url: "https://www.cnn.com/2022/05/04/tech/activision-blizzard-lawsuit-kotick-new-york/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504194620-bobby-kotick-file-070621-super-tease.jpg",
    publishedAt: "2022-05-04T23:56:20Z",
    content:
      "(CNN Business)New York City pension fund officials sued Activision Blizzard late last month in a bid to force the company to disclose records that may uncover whether CEO Bobby Kotick breached his fi\u2026 [+2627 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Holmes Lybrand and Hannah Rabinowitz, CNN",
    title:
      "Two men accused of attacking DC Officer Michael Fanone on Jan. 6 set to enter into plea agreements this week",
    description:
      "Two of the alleged assailants of former DC police Officer Michael Fanone have plea agreement hearings scheduled before the DC District Court this week, bringing a partial close to one of the most high-profile assault cases of the January 6, 2021, US Capitol r\u2026",
    url: "https://www.cnn.com/2022/05/04/politics/michael-fanone-case-assault-plea-agreements/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210617121330-0617-officerfanone-super-tease.jpg",
    publishedAt: "2022-05-04T23:23:19Z",
    content:
      "(CNN)Two of the alleged assailants of former DC police Officer Michael Fanone have plea agreement hearings scheduled before the DC District Court this week, bringing a partial close to one of the mos\u2026 [+2465 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Natasha Bertrand and Paul LeBlanc, CNN",
    title:
      "Biden asks Congress to help provide Afghan refugees a pathway to become US residents",
    description:
      "President Joe Biden has asked Congress to provide tens of thousands of Afghan refugees with a pathway to become legal permanent residents of the United States, according to a proposal included in the supplemental budget request he sent to lawmakers last week.",
    url: "https://www.cnn.com/2022/05/04/politics/white-house-afghan-refugees-ukraine-aid-bill/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504174853-joe-biden-050422-super-tease.jpg",
    publishedAt: "2022-05-04T22:41:15Z",
    content:
      "Washington (CNN)President Joe Biden has asked Congress to provide tens of thousands of Afghan refugees with a pathway to become legal permanent residents of the United States, according to a proposal\u2026 [+2562 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Nimi Princewill, CNN",
    title:
      "'The world has not forgotten us': Nigeria's Buhari thankful for UN chief's visit amid war in Ukraine",
    description:
      "Nigeria's President Muhammadu Buhari has thanked UN Secretary-General Antonio Guterres for his visit to the country, saying that he is grateful the West African nation hasn't been forgotten amid the Russia-Ukraine conflict.",
    url: "https://www.cnn.com/2022/05/04/africa/un-guterres-first-visit-nigeria-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504133001-buhari-guterres-0504-super-tease.jpg",
    publishedAt: "2022-05-04T22:05:36Z",
    content:
      "Abuja, Nigeria (CNN)Nigeria's President Muhammadu Buhari has thanked UN Secretary-General Antonio Guterres for his visit to the country, saying that he is grateful the West African nation hasn't been\u2026 [+3677 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Hannah Rabinowitz, Holmes Lybrand and Katelyn Polantz, CNN",
    title:
      "Top Oath Keepers member says he overheard extremist group's leader trying to connect with Trump after US Capitol riot",
    description:
      "A top member of the Oath Keepers said in court on Wednesday that he overheard the leader of the group, Stewart Rhodes, trying and failing to get in touch with then-President Donald Trump after the January 6, 2021, attack on the US Capitol.",
    url: "https://www.cnn.com/2022/05/04/politics/oath-keepers-wilson-rhodes/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504155710-01-us-capitol-breech-file-010621-super-tease.jpg",
    publishedAt: "2022-05-04T21:43:53Z",
    content:
      "(CNN)A top member of the Oath Keepers said in court on Wednesday that he overheard the leader of the group, Stewart Rhodes, trying and failing to get in touch with then-President Donald Trump after t\u2026 [+3715 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sharif Paget, CNN",
    title:
      "Multiple people trapped and injured at scene of a partial building collapse at a former power plant in South Boston",
    description:
      "One person has sustained life-threatening injuries and multiple people are trapped following a partial building collapse at the Edison Power Plant building in South Boston, Police Department spokesman Andre Watson said Wednesday.",
    url: "https://www.cnn.com/2022/05/04/us/boston-power-plant-site-collapse/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504160727-01-boston-power-plant-floor-collapse-super-tease.jpg",
    publishedAt: "2022-05-04T21:15:35Z",
    content:
      "(CNN)One person has sustained life-threatening injuries and multiple people are trapped following a partial building collapse at the Edison Power Plant building in South Boston, Police Department spo\u2026 [+546 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Stephanie Elam, CNN",
    title:
      "Officials worry Southern California won't have enough water to get through summer without unprecedented cuts",
    description:
      '"I don\'t want anybody to turn on the faucet and not have water," said one Southern California water manager.',
    url: "https://www.cnn.com/2022/05/04/us/california-drought-water-restrictions-climate/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504162227-01-california-drought-water-restrictions-climate-super-tease.jpg",
    publishedAt: "2022-05-04T20:54:58Z",
    content:
      "Why the Great American Lawn is terrible for the West's water crisis\r\nLake Powell officials face an impossible choice in the West's megadrought: Water or electricity\r\nLake Mead plummets to unfathomabl\u2026 [+290 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Clare Foran and Melanie Zanona, CNN",
    title:
      "New audio: McCarthy said 25th Amendment 'takes too long' and wanted to reach out to Biden after January 6 attack",
    description:
      'House Republican leader Kevin McCarthy discussed the 25th Amendment on a call with GOP leadership days after the January 6, 2021, attack on the Capitol and said the process "takes too long," according to an audio recording obtained by two New York Times repor\u2026',
    url: "https://www.cnn.com/2022/05/04/politics/mccarthy-audio-25th-amendment-biden/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220426160656-kevin-mccarthy-0121-file-super-tease.jpg",
    publishedAt: "2022-05-04T20:49:14Z",
    content:
      '(CNN)House Republican leader Kevin McCarthy discussed the 25th Amendment on a call with GOP leadership days after the January 6, 2021, attack on the Capitol and said the process "takes too long," acc\u2026 [+4938 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ryan Nobles, Annie Grayer and Zachary Cohen, CNN",
    title: "Donald Trump Jr. met with the House January 6 committee on Tuesday",
    description:
      "Donald Trump Jr., the son of former President Donald Trump, met on Tuesday with the House select committee investigating the January 6 insurrection, according to two sources familiar with the meeting.",
    url: "https://www.cnn.com/2022/05/04/politics/donald-trump-jr-january-6-committee/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220411154647-donald-trump-jr-0227-super-tease.jpg",
    publishedAt: "2022-05-04T20:34:52Z",
    content:
      "(CNN)Donald Trump Jr., the son of former President Donald Trump, met on Tuesday with the House select committee investigating the January 6 insurrection, according to two sources familiar with the me\u2026 [+1408 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Review by Brian Lowry, CNN",
    title:
      "'Moon Knight' took Marvel in a different orbit, but it didn't rise to the occasion",
    description:
      'Despite the show\'s ambition and visual flair, "Moon Knight" felt like a creative misfire.',
    url: "https://www.cnn.com/2022/05/04/entertainment/moon-knight-finale-review/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220329084335-02-moon-knight-handout-super-tease.jpeg",
    publishedAt: "2022-05-04T20:29:28Z",
    content:
      'The following contains spoilers about the "Moon Knight" finale.\r\n (CNN)After four series featuring characters seen in the "Avengers" franchise, "Moon Knight" marked Marvel\'s first attempt at a true o\u2026 [+2905 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author:
      "Ivana Kottasov\u00e1, Petro Zadorozhnyy and Lauren Said-Moorhouse, CNN",
    title:
      "Russia's attacks on Ukraine's supply lines are intensifying. Ukraine's national railway hasn't buckled",
    description:
      "The smell of burnt wire and rubber still lingered in the air around the railway power station on the outskirts of Lviv Wednesday morning, hours after the blaze was extinguished.\u00a0A group of investigators was\u00a0collecting\u00a0debris\u00a0from\u00a0the Russian rockets that stru\u2026",
    url: "https://www.cnn.com/2022/05/04/europe/ukraine-russia-railways-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504154141-02-lviv-railways-power-station-super-tease.jpg",
    publishedAt: "2022-05-04T20:27:59Z",
    content:
      "Lviv, Ukraine (CNN)The smell of burnt wire and rubber still lingered in the air around the railway power station on the outskirts of Lviv Wednesday morning, hours after the blaze was extinguished.\u00a0A \u2026 [+5331 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Peter Bergen, CNN National Security Analyst",
    title:
      "Retired US major general: What it will take for the Ukrainians to win",
    description:
      "Peter Bergen interviews former commander of the US Special Operations Command in Europe, retired US Army Maj. Gen. Mike Repass, who says the international community has to greatly increase its support for Ukraine if the embattled nation is ever going to be ab\u2026",
    url: "https://www.cnn.com/2022/05/04/opinions/bergen-repass-ukraine-interview/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220422111820-01-mariupol-042122-super-tease.jpg",
    publishedAt: "2022-05-04T20:20:15Z",
    content:
      "Peter Bergen is CNN's national security analyst, a vice president at New America and a professor of practice at Arizona State University. His forthcoming paperback is \"The Cost of Chaos: The Trump Ad\u2026 [+11696 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ashley Strickland, CNN",
    title:
      "Largest known North American cave art remained hidden for more than 1,000 years",
    description:
      "Massive Native American drawings, unseen in an Alabama cave for more than 1,000 years, have been revealed thanks to 3D imaging. It's the largest known cave art ever discovered in North America.",
    url: "https://www.cnn.com/style/article/largest-native-american-cave-art-scn/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504111409-04-largest-native-american-cave-art-super-tease.jpg",
    publishedAt: "2022-05-04T20:18:57Z",
    content:
      "arts\r\nMassive Native American drawings -- which remained unseen in an Alabama cave for more than 1,000 years -- have been unveiled by a team of scientists. It's the largest known cave art ever discov\u2026 [+6966 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Jennifer Agiesta, Ariel Edwards-Levy",
    title: "CNN Poll: Most Americans have a dismal view of the US economy",
    description:
      "The US public's view of the nation's economy is the worst it's been in a decade, a new CNN Poll conducted by SSRS finds, with many Americans also saying they feel financial strain in their own lives.",
    url: "https://www.cnn.com/2022/05/04/politics/cnn-poll-economy-biden-approval/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504154726-inflation-shopping-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T20:00:12Z",
    content:
      "The US publics view of the nations economy is the worst its been in a decade, a new CNN Poll conducted by SSRS finds, with many Americans also saying they feel financial strain in their own lives.\r\nT\u2026 [+6942 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Analysis by Chris Cillizza, CNN Editor-at-large",
    title:
      "Why Republicans are ignoring the substance of the leaked Roe v. Wade draft opinion",
    description:
      "The real issue, to hear Republicans tell it, isn't that the Supreme Court could overturn Roe v. Wade, according to a copy of the draft opinion written by Justice Samuel Alito.",
    url: "https://www.cnn.com/2022/05/04/politics/republicans-roe-v-wade-abortion-leak-real-issue/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503004720-supreme-court-abortion-protest-0502-super-tease.jpg",
    publishedAt: "2022-05-04T19:57:51Z",
    content:
      "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ryan Bergeron, CNN",
    title:
      "Help moms around the world with these Mother's Day ways to give back",
    description:
      "Mother's Day is a chance to celebrate, pamper and shower moms with love. But for many moms around the world, this Mother's Day will still see them struggling to make ends meet. If your mom is one of those who \"doesn't need a gift\" (just her baby), here are a \u2026",
    url: "https://www.cnn.com/2022/05/04/us/iyw-giving-back-mothers-day-donations-wellness/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220502143158-ukraine-mother-daughter-super-tease.jpg",
    publishedAt: "2022-05-04T19:45:11Z",
    content:
      "(CNN)Mother's Day is a chance to celebrate, pamper and shower moms with love. But for many moms around the world, this Mother's Day will still see them struggling to make ends meet. If your mom is on\u2026 [+5223 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Tim Lister, Paul P. Murphy",
    title:
      "Drone footage shows how Russians destroyed one Ukrainian town in savage battle",
    description:
      "A 22-minute video shot by a surveillance drone over the Ukrainian town of Popasna has illustrated the stunning destruction being inflicted on settlements across the eastern regions of Luhansk and  Donetsk.",
    url: "https://www.cnn.com/2022/05/04/europe/ukraine-drone-footage-popasna-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504143225-01-popasna-drone-footage.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T19:17:40Z",
    content:
      "A 22-minute video shot by a surveillance drone over the Ukrainian town of Popasna has illustrated the stunning destruction being inflicted on settlements across the eastern regions of Luhansk and Don\u2026 [+4090 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Tina Burnside, CNN",
    title:
      "An 8-month-old died in a hot car after her father's arrest, Georgia police say",
    description:
      "The father of an 8-month-old girl who died after she was left inside of a hot car has been charged with second-degree murder, Georgia Bureau of Investigation officials said during a news conference on Wednesday.",
    url: "https://www.cnn.com/2022/05/04/us/georgia-child-car-death-during-arrest/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504120038-snellville-pd-file-super-tease.jpg",
    publishedAt: "2022-05-04T19:15:08Z",
    content:
      "(CNN)The father of an 8-month-old girl who died after she was left inside of a hot car has been charged with second-degree murder, Georgia Bureau of Investigation officials said during a news confere\u2026 [+1426 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Matt Egan, CNN Business",
    title: "Here's how higher rates will impact you",
    description: "The Covid era of free money has come to an end.",
    url: "https://www.cnn.com/2022/05/04/economy/fed-may-interest-rates/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220127113105-restricted-us-house-for-sale-mortgage-rates-super-tease.jpg",
    publishedAt: "2022-05-04T19:14:16Z",
    content:
      "This is an updated version of a story that ran on March 17, 2022.\r\nNew York (CNN Business)The Covid era of free money is over, and the Federal Reserve is stepping up its fight against inflation.\r\nFed\u2026 [+5974 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Jennifer Hansler, CNN",
    title:
      "Family members of Americans detained abroad gather to raise awareness and seek meeting with Biden",
    description:
      "Family members of Americans imprisoned around the world gathered near the White House on Wednesday in the hope of getting a meeting with President Joe Biden and to raise awareness about the plight of wrongful detainees.",
    url: "https://www.cnn.com/2022/05/04/politics/bring-our-families-home-campaign-white-house/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504131709-02-families-of-detained-prisoners-0504-super-tease.jpg",
    publishedAt: "2022-05-04T19:06:02Z",
    content:
      "Washington (CNN)Family members of Americans imprisoned around the world gathered near the White House on Wednesday in the hope of getting a meeting with President Joe Biden and to raise awareness abo\u2026 [+3419 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: null,
    title: "Whoopi Goldberg goes off on anti-abortion advocates",
    description:
      "\"The View\" co-host Whoopi Goldberg gave an impassioned speech about abortion and women's rights during the show's broadcast days after a draft opinion written by Supreme Court Justice Samuel Alito striking down Roe v. Wade was leaked.",
    url: "https://www.cnn.com/videos/media/2022/05/04/whoopi-goldberg-abortion-roe-v-wade-scotus-opinion-draft-reaction-mxp-sot-vpx.hln",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504150349-whoopi-goldberg-screengrab-for-video-new-super-tease.jpg",
    publishedAt: "2022-05-04T19:05:36Z",
    content: "Morning Express with Robin Meade",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Catherine Thorbecke",
    title: "Elon Musk says fees for some users may be coming to Twitter",
    description:
      "Elon Musk said Twitter might soon charge fees for certain users, as the billionaire continues to tease how he might change the platform as its new owner.",
    url: "https://www.cnn.com/2022/05/04/tech/elon-musk-twitter-fee/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504143626-elon-musk-050222.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T18:50:44Z",
    content:
      "Elon Musk said Twitter might soon charge fees for certain users, as the billionaire continues to tease how he might change the platform as its new owner.\r\nMusk, who struck a roughly $44 billion deal \u2026 [+2927 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Tami Luhby, CNN",
    title:
      "'We're in danger of running out of food.' Higher prices and demand squeeze food banks",
    description:
      "About 65% of the 200 food banks in the Feeding America network reported seeing a greater demand for food assistance in March compared with the previous month, with an average increase of 15% more people. Food banks and pantries around the US are also contendi\u2026",
    url: "https://www.cnn.com/2022/05/04/politics/inflation-high-prices-food-banks/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220502161533-02-food-banks-under-stress-super-tease.jpg",
    publishedAt: "2022-05-04T18:25:53Z",
    content:
      "(CNN)The swift rise in food prices has led Kay O'Reilly to hang out outside her local Amazon warehouse in Virginia Beach, Virginia, to see if it has any extra eggs, milk, meat or produce to spare. \r\n\u2026 [+9082 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Rachel Ramirez",
    title:
      "Stanford University announces new climate change school with $1.1 billion from renowned venture capitalist",
    description:
      "Stanford University announced Wednesday it is launching a new school later this year focused on climate change and funded by John Doerr, a renowned Silicon Valley venture capitalist.",
    url: "https://www.cnn.com/2022/05/04/us/stanford-university-climate-school/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504131533-stanford-campus-2020-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T18:25:16Z",
    content:
      "Stanford University announced Wednesday it is launching a new school later this year focused on climate change and funded by John Doerr, a renowned Silicon Valley venture capitalist. \r\nDoerr and his \u2026 [+2825 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Omar Jimenez, CNN",
    title:
      "A federal judge accepts Derek Chauvin's plea deal and will sentence him to 20 to 25 years",
    description:
      "The federal judge presiding over the cases of the four Minneapolis police officers implicated in the killing of George Floyd has accepted Derek Chauvin's plea deal and will sentence him to 20 to 25 years in prison.",
    url: "https://www.cnn.com/2022/05/04/us/derek-chauvin-sentence-federal-civil-rights-trial/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220427083349-01-derek-chauvin-file-super-tease.jpg",
    publishedAt: "2022-05-04T18:13:06Z",
    content:
      "(CNN)The federal judge presiding over the cases of the four Minneapolis police officers implicated in the killing of George Floyd has accepted Derek Chauvin's plea deal and will sentence him to 20 to\u2026 [+596 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Nikki Carvajal",
    title:
      "Biden praises Team USA in first White House visit since pandemic for 'your endurance and your state of mind'",
    description:
      'President Joe Biden praised US Olympic and Paralympic athletes at the White House on Wednesday for not only their "incredible athleticism, but your endurance and your state of mind."',
    url: "https://www.cnn.com/2022/05/04/politics/team-usa-white-house-visit/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504120020-01-biden-team-usa-0504.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T18:10:25Z",
    content:
      "President Joe Biden praised US Olympic and Paralympic athletes at the White House on Wednesday for not only their incredible athleticism, but your endurance and your state of mind. \r\nIt was the first\u2026 [+2833 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Analysis by Chris Cillizza, CNN Editor-at-large",
    title:
      "The amazing -- but true! -- reason J.D. Vance is now favored to become a US senator",
    description:
      "On Tuesday night, author and first-time candidate J.D. Vance won the Ohio Republican Senate nomination, a victory that establishes him as the front-runner to win the general election this fall.",
    url: "https://www.cnn.com/2022/05/04/politics/vance-trump-ohio-senate-endorsement/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504140057-vance-trump-handshake-0423-super-tease.jpg",
    publishedAt: "2022-05-04T18:05:04Z",
    content:
      "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Scottie Andrew, CNN",
    title: "Oscar winner Ariana DeBose will host the 2022 Tony Awards",
    description:
      "Fresh off her Oscar win, Ariana DeBose will return to her Broadway roots to host the upcoming Tony Awards, which honor the year's best musicals and plays on the Great White Way, the American Theatre Wing announced Wednesday.",
    url: "https://www.cnn.com/2022/05/04/entertainment/ariana-debose-tony-awards-host-cec/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504132551-ariana-debose-file-0327-super-tease.jpg",
    publishedAt: "2022-05-04T17:39:45Z",
    content:
      "(CNN)Fresh off her Oscar win, Ariana DeBose will return to her Broadway roots to host the upcoming Tony Awards, which honor the year's best musicals and plays on the Great White Way, the American The\u2026 [+1550 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sonia Moghe",
    title:
      "Amber Heard is 'looking forward to finally telling her story' ahead of taking stand in defamation trial",
    description:
      "Amber Heard is \"looking forward to finally telling her story and protecting her freedoms under the First Amendment,\" a source close to the actress tells CNN ahead of Heard's testimony in her ex-husband Johnny Depp's defamation trial against her.",
    url: "https://www.cnn.com/2022/05/04/entertainment/johnny-depp-amber-heard-defamation-case/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504114708-01-depp-heard-trial-0503.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T17:39:34Z",
    content:
      "Amber Heard is looking forward to finally telling her story and protecting her freedoms under the First Amendment, a source close to the actress tells CNN ahead of Heards testimony in her ex-husband \u2026 [+2419 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Devan Cole, CNN",
    title:
      "Plaintiff in landmark same-sex marriage case says marriage equality is at risk",
    description:
      "Jim Obergefell, the gay rights activist and named plaintiff in the 2015 Supreme Court case that legalized same-sex marriage nationwide, argued Wednesday that a constitutional right to marriage equality is at risk if the high court decides to overturn Roe v. W\u2026",
    url: "https://www.cnn.com/2022/05/04/politics/jim-obergefell-same-sex-marriage-roe-reversal-cnntv/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220118123250-02-jim-obergefell-file-super-tease.jpg",
    publishedAt: "2022-05-04T17:27:21Z",
    content:
      "Washington (CNN)Jim Obergefell, the gay rights activist and named plaintiff in the 2015 Supreme Court case that legalized same-sex marriage nationwide, argued Wednesday that a constitutional right to\u2026 [+3264 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Kate Sullivan",
    title:
      "Biden goes after the 'ultra-MAGA agenda' as he sharpens his midterm message",
    description:
      'President Joe Biden on Wednesday sharpened the contrast between his policies and what he derided as an "ultra-MAGA agenda" on the right as he looks to hone his midterm message heading into a high-stakes campaign season.',
    url: "https://www.cnn.com/2022/05/04/politics/biden-ultra-maga-midterms/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504112316-04-biden-economy-remarks-0504.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T17:09:30Z",
    content:
      "President Joe Biden on Wednesday sharpened the contrast between his policies and what he derided as an ultra-MAGA agenda on the right as he looks to hone his midterm message heading into a high-stake\u2026 [+3650 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Frank Pallotta",
    title: "Star Trek tries to steal May the 4th from Star Wars",
    description:
      "It's May the 4th, a day for Star Wars nerds to geek out on Luke Skywalker, lightsabers and the Millennium Falcon. So why are so many sci fi fans talking about Spock, phasers and the USS Enterprise?",
    url: "https://www.cnn.com/2022/05/04/media/star-wars-may-the-4th-star-trek-streaming/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220425155100-02-star-trek-strange-new-worlds-series.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T17:05:29Z",
    content:
      "Its May the 4th, a day for Star Wars nerds to geek out on Luke Skywalker, lightsabers and the Millennium Falcon. So why are so many sci fi fans talking about Spock, phasers and the USS Enterprise?\r\nE\u2026 [+3442 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Opinion by Paul Sracic",
    title: "Opinion: Ohio primary proves the power of Trump's endorsement",
    description:
      "As witnessed from the latest Ohio primary result, the power of Donald Trump's endorsement will continue to prove to be pivotal as the 2022 primary season continues, Paul Sracic writes.",
    url: "https://www.cnn.com/2022/05/04/opinions/ohio-primary-trump-endorsement-sracic/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503124735-jd-vance-0501-super-tease.jpg",
    publishedAt: "2022-05-04T16:28:11Z",
    content:
      'Paul Sracic is a professor of politics and international relations at Youngstown State University and the coauthor of "Ohio Politics and Government" (Congressional Quarterly Press, 2015). Follow him \u2026 [+5039 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sana Noor Haq, CNN",
    title:
      "Gianni Versace's lavish New York mansion is on sale for $70 million",
    description:
      "Gianni Versace's former townhouse in Manhattan has gone on sale for $70 million.",
    url: "https://www.cnn.com/style/article/gianni-versace-new-york-mansion-sothebys-intl-scli/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504082302-01-versace-new-york-mansion-sothebys-super-tease.jpg",
    publishedAt: "2022-05-04T16:22:05Z",
    content:
      "Gianni Versace's former townhouse in Manhattan has gone on sale for $70 million.\r\nThe late fashion designer bought the seven-bedroom mansion in 1995 and fully refurbished the interior, according to t\u2026 [+2000 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Matias Grez, CNN",
    title:
      "Diego Maradona's iconic 'Hand of God' shirt sells for record-breaking $9.3 million at online auction",
    description:
      "The shirt Diego Maradona wore against England at the 1986 World Cup -- synonymous with his brilliance at that tournament in Mexico -- has sold for almost $9.3 million in an online auction, smashing the record for an item of sports memorabilia.",
    url: "https://www.cnn.com/2022/05/04/football/diego-maradona-hand-of-god-shirt-record-sale-spt-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220405131731-04-maradona-shirt-super-tease.jpg",
    publishedAt: "2022-05-04T16:08:42Z",
    content:
      "(CNN)The shirt Diego Maradona wore against England at the 1986 World Cup -- synonymous with his brilliance at that tournament in Mexico -- has sold for almost $9.3 million in an online auction, smash\u2026 [+2204 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Matt Egan",
    title:
      "Stock market selloff is exactly what the Fed wants, former NY Fed chief says",
    description:
      "Turmoil on Wall Street is a feature, not a bug, of the Federal Reserve's fight against inflation, according to former New York Federal Reserve President Bill Dudley.",
    url: "https://www.cnn.com/2022/05/04/investing/stock-selloff-fed/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504111928-nyse-050222.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T16:00:52Z",
    content:
      "Turmoil on Wall Street is a feature, not a bug, of the Federal Reserves fight against inflation, according to former New York Federal Reserve President Bill Dudley.\r\nWhats happening right now is exac\u2026 [+3019 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Opinion by Nicole Hemmer",
    title: "Opinion: Alito's draft opinion is as unpopular as it is radical",
    description:
      "There is perhaps no greater farce than Justice Samuel Alito's appeal to democracy in his draft opinion on abortion, writes historian Nicole Hemmer, who argues anti-abortion extremism, already an unpopular and deadly force in US politics, will kill more Americ\u2026",
    url: "https://www.cnn.com/2022/05/04/opinions/abortion-rights-samuel-alito-roe-v-wade-hemmer/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504113400-supreme-court-050322-super-tease.jpg",
    publishedAt: "2022-05-04T15:58:12Z",
    content:
      'Nicole Hemmer is an associate research scholar at Columbia University with the Obama Presidency Oral History Project and the author of "Messengers of the Right: Conservative Media and the Transformat\u2026 [+7691 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sandra Gonzalez",
    title: "Amber Heard donates divorce settlement to charity",
    description:
      "Amber Heard has made good on her promise to give the millions she received from her divorce settlement with Johnny Depp to charity.",
    url: "https://www.cnn.com/2016/08/18/entertainment/amber-heard-donates-divorce-settlement/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/160802153601-amber-heard-arrives-for-the-costume-institute-benefit-at-the-metropolitan-museum-of-art.jpg?q=x_80,y_216,h_2223,w_3951,c_crop/w_800",
    publishedAt: "2022-05-04T15:29:44Z",
    content:
      "Amber Heard has given $7 million from her divorce settlement to two charities\r\nFunds given to the ACLU will benefit the organization's efforts to end domestic abuse against women\r\nEditors Note: Since\u2026 [+1860 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Opinion by William S. Cohen and Gary Hart",
    title:
      "Opinion: Most Americans don't know about these secret presidential powers",
    description:
      "William S. Cohen and Gary Hart write that our Founding Fathers believed that constitutional checks and balances would prevent the concentration of power in the hands of a dangerous few. But they did not reckon with the accumulation of secret presidential powe\u2026",
    url: "https://www.cnn.com/2022/05/04/opinions/secret-presidential-powers-unite-states-cohen-hart/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503171932-white-house-at-night-file-102721-super-tease.jpg",
    publishedAt: "2022-05-04T15:19:38Z",
    content:
      "William S. Cohen, a Republican, is a former United States senator from Maine and the former secretary of defense under President Bill Clinton. Gary Hart, a Democrat, is a former United States senator\u2026 [+5938 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Harmeet Kaur",
    title: "The term 'Asian American' has a radical history",
    description:
      "Asian American is a term that is both ambitious and contentious, depending on who you ask. The label today encompasses more than 22 million people with roots in more than 20 countries. But while some find the term limited in how it categorizes people, others \u2026",
    url: "https://www.cnn.com/2022/05/04/us/history-of-term-asian-american-cec/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220503145045-anti-asian-violence-march-file-2021.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T15:11:32Z",
    content:
      "Asian American is a term that is both ambitious and contentious, depending on who you ask.\r\nThe label today encompasses more than 22 million people with roots in more than 20 countries, each with dis\u2026 [+6151 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Megan Marples",
    title:
      "Chronic diseases are more likely to develop in these groups of people with anxiety and depression",
    description:
      "Researchers looked at medical data from over 40,000 adults and found both women of all ages and younger men who suffer from anxiety and/or depression were significantly more likely to develop chronic illnesses like hypertension and most cancers.",
    url: "https://www.cnn.com/2022/05/04/health/depression-anxiety-chronic-conditions-wellness/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220503123040-depression-anxiety-chronic-conditions-wellness-stock.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T14:53:35Z",
    content:
      "Women of all ages and younger men with certain mood disorders are more likely to develop certain chronic illnesses, according to new research. \r\nResearchers of a retrospective study published in the \u2026 [+5029 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Chandelis Duster, CNN",
    title:
      "Parents of sailor who died by suicide on USS George Washington blast Navy's 'ridiculous' response",
    description:
      'The parents of a sailor who died by suicide while on board the USS George Washington -- one of the seven crew members who have died in the past year, including four by suicide -- on Wednesday blasted the Navy\'s response to the crisis as "ridiculous."',
    url: "https://www.cnn.com/2022/05/04/politics/xavier-sandor-parents-cnntv/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504084033-xavier-sandor-with-parents-super-tease.jpg",
    publishedAt: "2022-05-04T14:50:35Z",
    content:
      "(CNN)The parents of a sailor who died by suicide while on board the USS George Washington -- one of the seven crew members who have died in the past year, including four by suicide -- on Wednesday bl\u2026 [+3494 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Gregory Krieg, Dan Merica and Eric Bradner, CNN",
    title:
      "'Do something': Looming Supreme Court decision on abortion rights contrasts power of state officials with Democratic inaction in Washington",
    description:
      'The throngs of demonstrators amassed outside the US Supreme Court, enraged over a report that a draft majority opinion would strike down abortion rights protected by Roe v. Wade, chanted a crisp, clipped demand to Democratic officials: "Do something!"',
    url: "https://www.cnn.com/2022/05/04/politics/supreme-court-abortion-midterms-governors-state-races/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503142934-roe-wade-protest-050222-super-tease.jpg",
    publishedAt: "2022-05-04T14:35:15Z",
    content:
      "(CNN)The throngs of demonstrators amassed outside the US Supreme Court, enraged over a report that a draft majority opinion would strike down abortion rights protected by Roe v. Wade, chanted a crisp\u2026 [+12733 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Chris Cillizza",
    title: "Winners and losers from Tuesday's primaries",
    description:
      "The 2022 primary season kicked off in earnest on Tuesday, with voters in Ohio and Indiana going to the polls to choose nominees for Senate, governor and a myriad of House races.",
    url: "https://www.cnn.com/2022/05/04/politics/ohio-indiana-primary-winners-losers/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220503223107-04-jd-vance-ohio-wins-050322.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T14:24:51Z",
    content:
      "The 2022 primary season kicked off in earnest on Tuesday, with voters in Ohio and Indiana going to the polls to choose nominees for Senate, governor and a myriad of House races.\r\nI went through the r\u2026 [+4096 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Jordan Valinsky, CNN Business",
    title:
      "TurboTax to refund customers $141 million after allegedly steering them away from free services",
    description:
      "Intuit, the owner of tax filing software TurboTax, has agreed to pay $141 million in a settlement with all 50 states for allegedly steering millions of low-income Americans away from free tax-filing services.",
    url: "https://www.cnn.com/2022/05/04/business/turbotax-intuit-settlement/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504094044-turbo-tax-file-2018-super-tease.jpg",
    publishedAt: "2022-05-04T14:21:02Z",
    content:
      "New York (CNN Business)Intuit, the owner of tax filing software TurboTax, has agreed to pay $141 million in a settlement with all 50 states for allegedly steering millions of low-income Americans awa\u2026 [+1385 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: null,
    title:
      "Behind the scenes: Stanley Tucci falls to make his tour guide laugh",
    description:
      'Stanley Tucci jokes around while filming in Piedmont for "Stanley Tucci: Searching for Italy." Don\'t miss an all-new episode this Sunday at 9 p.m. ET/PT only on CNN.',
    url: "https://www.cnn.com/videos/travel/2022/04/15/stanley-tucci-searching-for-italy-shots-bonus-origseriesfilms.cnn",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220415112510-stanley-tucci-searching-for-italy-shots-bonus-origseriesfilms-00002011-super-tease.png",
    publishedAt: "2022-05-04T14:19:56Z",
    content: "'Stanley Tucci: Searching for Italy'",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Scottie Andrew, CNN",
    title:
      "A new 'Obi-Wan Kenobi' trailer teases appearances from Darth Vader and young Luke Skywalker",
    description:
      '"Obi-Wan Kenobi" is back -- but, based on the new trailer for the Disney+ series, the droll Jedi master no longer has the high ground.',
    url: "https://www.cnn.com/2022/05/04/entertainment/obi-wan-kenobi-trailer-may-fourth-cec/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504094908-01-obi-wan-series-disney-super-tease.jpg",
    publishedAt: "2022-05-04T14:00:00Z",
    content:
      '(CNN)"Obi-Wan Kenobi" is back -- but, based on the new trailer for the Disney+ series, the droll Jedi master no longer has the high ground. \r\nReleased on -- when else? -- May the Fourth, the trailer \u2026 [+1316 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Hadas Gold, CNN",
    title: "Is Lavrov's Hitler remark the last straw for Israel?",
    description:
      "In the months since Russia invaded Ukraine, Israel has tried to maintain a delicate diplomatic balancing act. But comments made by Russian Foreign Minister Sergey Lavrov have hit a raw nerve.",
    url: "https://www.cnn.com/2022/05/04/middleeast/israel-russia-lavrov-comments-mime-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504082855-sergei-lavrov-0324-super-tease.jpg",
    publishedAt: "2022-05-04T13:42:47Z",
    content:
      "A version of this story first appeared in CNN's Meanwhile in the Middle East newsletter, a three-times-a-week look inside the region's biggest stories. Sign up here.\r\nJerusalem (CNN)In the months sin\u2026 [+9215 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Marianne Garvey",
    title: "Kaley Cuoco and 'Ozark' actor Tom Pelphrey are dating",
    description:
      'Looks like things are taking off with Kaley Cuoco and "Ozark" actor Tom Pelphrey.',
    url: "https://www.cnn.com/2022/05/04/entertainment/kaley-cuoco-tom-pelphrey-dating/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220504085123-kaley-cuoco-tom-pelphrey-split.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T13:41:42Z",
    content:
      "Looks like things are taking off with Kaley Cuoco and Ozark actor Tom Pelphrey.\r\nThe Flight Attendant star took to Instagram with Polaroid pictures of the two snuggling together during a scenic mount\u2026 [+683 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Daniel Dale",
    title:
      "Fact check: Jody Hice, running to oversee Georgia elections, makes yet more false 2020 claims",
    description:
      'At a Monday debate between the Republican candidates for Georgia secretary of state, incumbent Brad Raffensperger said his leading opponent, US Rep. Jody Hice, "has just not been honest for the last 18 months, and he has been spreading misinformation, disinfo\u2026',
    url: "https://www.cnn.com/2022/05/04/politics/fact-check-jody-hice-georgia-secretary-of-state-raffensperger/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220503203238-jody-hice-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T13:18:09Z",
    content:
      "At a Monday debate between the Republican candidates for Georgia secretary of state, incumbent Brad Raffensperger said his leading opponent, US Rep. Jody Hice, has just not been honest for the last 1\u2026 [+7607 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ben Morse, CNN",
    title:
      "Tampa Bay Buccaneers to face Seattle Seahawks in first regular season NFL game in Germany",
    description:
      "The Tampa Bay Buccaneers will face the Seattle Seahawks in Munich, Germany, in what will be the first-ever NFL regular-season game in the country.",
    url: "https://www.cnn.com/2022/05/04/sport/buccaneers-seahawks-nfl-germany-spt-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504074037-01-allianz-arena-munich-file-super-tease.jpg",
    publishedAt: "2022-05-04T12:29:44Z",
    content:
      "(CNN)The Tampa Bay Buccaneers will face the Seattle Seahawks in Munich, Germany, in what will be the first-ever NFL regular-season game in the country. \r\nThe match-up was announced on Wednesday, with\u2026 [+1968 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Eliza Mackintosh and Hafsa Khalil, CNN",
    title: "The US is closely watching this Covid surge for clues",
    description:
      "Covid-19 cases are spiking in South Africa, and public health experts in the United States are following the data closely, waiting to see what it might reveal about how immunity from previous infections behaves over time.",
    url: "https://www.cnn.com/2022/05/04/world/coronavirus-newsletter-intl-05-04-22/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/200417130109-02-coronavirus-cdc-image-super-tease.jpg",
    publishedAt: "2022-05-04T11:24:46Z",
    content:
      "This is the weekly edition of CNN's coronavirus newsletter. Look out for your roundup every Wednesday. If you haven't subscribed yet, sign up here.\r\n (CNN)Covid-19 cases are spiking in South Africa, \u2026 [+9522 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Silvia Marchetti, CNN",
    title: "One euro home sell-off has created a 'Little America' in Italy",
    description:
      "Sambuca in rural Sicily was among the first Italian towns to sell off old houses for next to nothing. Local officials say most of the buyers are from the US or elsewhere in North America.",
    url: "https://www.cnn.com/travel/article/little-america-italy-sambuca-sicily/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220418145527-little-america-sicily-card-restricted-super-tease.jpg",
    publishedAt: "2022-05-04T11:24:13Z",
    content:
      "Editor's Note Sign up to CNN Travel's Unlocking Italy newsletter for insider intel on Italy's best loved destinations and lesser-known regions to plan your ultimate trip. Plus, we'll get you in the m\u2026 [+8643 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Andy Miller, Kaiser Health News",
    title:
      "More states allow fentanyl test strips as a tool to prevent overdoses",
    description:
      "With time running out in the 2022 legislative session, Georgia lawmakers took up a bill to regulate raw milk.",
    url: "https://www.cnn.com/2022/05/04/health/fentanyl-test-strips-khn/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/211201181533-fentanyl-test-strip-gupta-pkg-vpx-super-tease.jpg",
    publishedAt: "2022-05-04T11:12:49Z",
    content:
      "(KHN)With time running out in the 2022 legislative session, Georgia lawmakers took up a bill to regulate raw milk.\r\nAn amendment suddenly got tacked onto the House version of the bill, although the n\u2026 [+7746 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sana Noor Haq, CNN",
    title: "Phoebe Bridgers says she had an abortion last year",
    description:
      "US singer-songerwriter Phoebe Bridgers told her Twitter followers that she had an abortion last year, saying everyone deserves access to the procedure.",
    url: "https://www.cnn.com/2022/05/04/entertainment/phoebe-bridgers-abortion-intl-scli/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504054109-phoebe-bridgers-met-gala-2022-super-tease.jpg",
    publishedAt: "2022-05-04T11:01:18Z",
    content:
      '(CNN)Phoebe Bridgers has said that she had an abortion last year.\r\n"I had an abortion in October of last year while I was on tour," the American singer-songwriter wrote in a post published to her ver\u2026 [+2024 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ariane de Vogue, CNN Supreme Court Reporter",
    title:
      "It's impossible to wall off reversing Roe from landmark marriage and contraception rulings",
    description:
      "Justice Samuel Alito, in his draft opinion that would overturn Roe v. Wade, tries to make clear it should not necessarily impact other decisions such as the right to marry a person of a different race or sex and the right to contraception, which rely on some \u2026",
    url: "https://www.cnn.com/2022/05/04/politics/roe-alito-obergefell-loving/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503130306-02-same-sex-marriage-supreme-court-super-tease.jpg",
    publishedAt: "2022-05-04T11:00:04Z",
    content:
      "(CNN)Justice Samuel Alito, in his draft opinion that would overturn Roe v. Wade, tries to make clear it should not necessarily impact other decisions such as the right to marry a person of a differen\u2026 [+7204 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "By CNN Business",
    title: "Stocks rise ahead of expected Fed rate hike",
    description: "Here's the latest news on what stocks are doing.",
    url: "https://www.cnn.com/business/live-news/stock-market-news-fed-rate/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220429155452-nyse-042822-super-tease.jpg",
    publishedAt: "2022-05-04T10:48:24Z",
    content:
      "The European Union is proposing to\u00a0ban all oil imports from Russia\u00a0by the end of the year and remove the country's biggest bank, Sberbank,\u00a0from the\u00a0SWIFT international payments\u00a0network.\r\nEuropean Com\u2026 [+610 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Nick Valencia, CNN",
    title:
      "Louisiana lawmakers and former state police leader at odds over cooperation in Ronald Greene death probe",
    description:
      "A special legislative committee investigating the 2019 death of Ronald Greene in police custody is seeking to hold the former head of Louisiana State Police in contempt for allegedly failing to cooperate with a subpoena for journals he kept during his tenure,\u2026",
    url: "https://www.cnn.com/2022/05/04/us/ronald-greene-investigation-subpoena/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503224533-kevin-reeves-2017-file-super-tease.jpg",
    publishedAt: "2022-05-04T10:46:56Z",
    content:
      "(CNN)A special legislative committee investigating the 2019 death of Ronald Greene in police custody is seeking to hold the former head of Louisiana State Police in contempt for allegedly failing to \u2026 [+4094 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Laura He, CNN Business",
    title: "Warren Buffett-backed BYD shrugs off China's lockdowns",
    description:
      "BYD, the Warren Buffett-backed Chinese electric vehicle maker, had a bumper month in the world's largest car market, despite strict Covid lockdowns that have disrupted production and sales for many of its major rivals.",
    url: "https://www.cnn.com/2022/05/04/business/byd-china-ev-boom-covid-lockdowns-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504040805-byd-0316-super-tease.jpg",
    publishedAt: "2022-05-04T10:46:31Z",
    content:
      "Hong Kong (CNN Business)BYD, the Warren Buffett-backed Chinese electric vehiclemaker, had a bumper month in the world's largest car market, despitestrict Covid lockdowns that have disrupted productio\u2026 [+2497 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Anneken Tappe, CNN Business",
    title: "The Fed is about to make history again",
    description:
      "All eyes are on the Federal Reserve Wednesday as the central bank wraps up its latest policy meeting and is expected to raise interest rates by a half-percentage point.",
    url: "https://www.cnn.com/2022/05/04/economy/federal-reserve-interest-rate-hike/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220502215411-02-jerome-powell-0321-restricted-super-tease.jpg",
    publishedAt: "2022-05-04T10:21:42Z",
    content:
      "New York (CNN Business)All eyes will be on the Federal Reserve Wednesday as it wraps up a crucial policy meeting in Washington, DC, the outcome of which will have repercussions for millions of Americ\u2026 [+993 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Delia Gallagher, CNN",
    title:
      "Pope Francis slams pro-war Russian patriarch: Don't be 'Putin's altar boy'",
    description:
      'Pope Francis warned the leader of the Russian Orthodox Church, Patriarch Kirill, not to become "Putin\'s altar boy," he said in an interview this week.',
    url: "https://www.cnn.com/2022/05/04/europe/pope-francis-patriarch-kirill-ukraine-invasion-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220314184451-patriarch-kirill-file-010622-super-tease.jpg",
    publishedAt: "2022-05-04T10:15:08Z",
    content:
      'Rome (CNN)Pope Francis warned the leader of the Russian Orthodox Church, Patriarch Kirill, not to become "Putin\'s altar boy," he said in an interview this week. \r\nIn his strongest words to date again\u2026 [+591 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Laura He, CNN Business",
    title:
      "China market analyst quits after his social media accounts were frozen",
    description:
      "Hong Hao, a prominent market analyst in China, has left the state-owned bank he worked for just days after his social media accounts were shut down following downbeat remarks he made about the economy.",
    url: "https://www.cnn.com/2022/05/04/investing/hong-hao-resign-bocom-international-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504053029-02-hao-hong-file-12062017-super-tease.jpg",
    publishedAt: "2022-05-04T09:59:40Z",
    content:
      "Hong Kong (CNN Business)Hong Hao, a prominent market analyst in China, has left the state-owned bank he worked for just days after his social media accounts were shut down following downbeat remarks \u2026 [+646 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Kate Sullivan, CNN",
    title: "White House will host first food insecurity conference in 50 years",
    description:
      "President Joe Biden will convene a White House conference in September focused on ending hunger and improving nutrition across the nation, a White House official told CNN, as the US sees higher rates of food insecurity amid the coronavirus pandemic.",
    url: "https://www.cnn.com/2022/05/04/politics/white-house-conference-food-insecurity-jose-andres/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/180515120442-white-house-exterior-05-13-2018-super-tease.jpg",
    publishedAt: "2022-05-04T09:06:33Z",
    content:
      "(CNN)President Joe Biden will convene a White House conference in September focused on ending hunger and improving nutrition across the nation, a White House official told CNN, as the US sees higher \u2026 [+3973 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Virginia Langmaid",
    title:
      "Fewer than 1 in 5 US parents say they'll get Covid-19 vaccines for kids under 5 as soon as they can, survey finds",
    description:
      "US children under 5 are getting closer to authorized Covid-19 vaccines, but most parents may be reluctant to actually get them when they become available, a new survey found.",
    url: "https://www.cnn.com/2022/05/04/health/kff-vaccine-monitor-survey/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/210920145813-pfizer-vaccine-file.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T09:01:59Z",
    content:
      "US children under 5 are getting closer to authorized Covid-19 vaccines, but most parents may be reluctant to actually get them when they become available, a new survey found.\r\nAccording to the Kaiser\u2026 [+2133 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Nectar Gan, CNN",
    title:
      "A Chinese man surnamed 'Ma' was detained. The news wiped off $26 billion from Alibaba's stock",
    description:
      "For Chinese tech tycoon Jack Ma, there's a price to freedom: $26 billion.",
    url: "https://www.cnn.com/2022/05/04/business/china-jack-ma-rumor-detention-intl-hnk/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220504035829-jack-ma-alibaba-file-05162019-super-tease.jpg",
    publishedAt: "2022-05-04T08:45:57Z",
    content:
      "A version of this story appeared in CNN's Meanwhile in China newsletter, a three-times-a-week update exploring what you need to know about the country's rise and how it impacts the world. Sign up her\u2026 [+5686 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Casey Barber, CNN",
    title:
      "Feeling cooking burnout? Let yourself off the hook with these 'good enough' strategies",
    description:
      'Instead of beating ourselves up over what we think a "good cook" should be, cookbook author Leanne Brown encourages us to think of what is "good enough" and reframe our approach to the process of cooking with a few mental shifts and tactics.',
    url: "https://www.cnn.com/2022/05/04/health/cooking-tips-good-enough-recipes-wellness/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220429132354-01-good-enough-recipes-wellness-stock-super-tease.jpg",
    publishedAt: "2022-05-04T08:13:34Z",
    content:
      "(CNN)It has been a long two years in the kitchen. Whether you were an enthusiastic home cook or a reluctant one, the pandemic has made everyone burned out by the act of cooking. It's also made us rea\u2026 [+6970 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Leanne Brown, CNN",
    title: "Cauliflower-Cheese Pita Sandwich",
    description:
      "The Cauliflower-Cheese Pita Sandwich makes for a filling lunch, with its crispy and vibrant, mustardy cauliflower and gooey cheese and spinach.",
    url: "https://www.cnn.com/2022/05/04/health/cauliflower-cheese-pita-sandwich-recipe-wellness/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220429134037-cauliflower-cheese-pita-sandwich-recipe-wellness-super-tease.jpg",
    publishedAt: "2022-05-04T08:10:23Z",
    content:
      'This recipe is featured in the CNN story "Feeling cooking burnout? Let yourself off the hook with these \'good enough\' strategies." Leanne Brown is the author of "Good Enough: A Cookbook."\r\n (CNN)I fi\u2026 [+871 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Leanne Brown, CNN",
    title: "Fast White Bean, Chorizo and Hearty Greens Stew",
    description:
      "Fast White Bean, Chorizo and Hearty Greens Stew is made of pantry staples, comes together quickly, and makes a delicious and nourishing meal.",
    url: "https://www.cnn.com/2022/05/04/health/bean-chorizo-stew-recipe-wellness/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220429133432-bean-chorizo-stew-recipe-wellness-super-tease.jpg",
    publishedAt: "2022-05-04T08:10:09Z",
    content:
      'This recipe is featured in the CNN story "Feeling cooking burnout? Let yourself off the hook with these \'good enough\' strategies." Leanne Brown is the author of "Good Enough: A Cookbook."\r\n (CNN)It h\u2026 [+2559 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Elizabeth Wolfe and Amara Walker, CNN",
    title:
      "New details emerge about the relationship between an Alabama inmate and corrections officer as search for them continues",
    description:
      "As the search continues for a fugitive inmate and Alabama corrections officer accused of helping him escape, new details are emerging about the pair's relationship and the officer's apparent preparations for their getaway.",
    url: "https://www.cnn.com/2022/05/04/us/alabama-vicky-white-casey-white-search-wednesday/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220501071557-vicki-white-casey-white-super-tease.jpg",
    publishedAt: "2022-05-04T07:53:07Z",
    content:
      "(CNN)As the search continues for a fugitive inmate and Alabama corrections officer accused of helping him escape, new details are emerging about the pair's relationship and the officer's apparent pre\u2026 [+5962 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Luke McGee",
    title:
      "Boris Johnson faces his first serious electoral test since his reputation hit rock bottom",
    description:
      'Ever since the "Partygate" scandal rocked Boris Johnson\'s premiership at the end of last year, the British Prime Minister has repeatedly dodged questions about his future by asserting that what the public wants is for politicians to get on with running the co\u2026',
    url: "https://www.cnn.com/2022/05/04/world/boris-johnson-electoral-test-analysis-intl-cmd/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220412085815-boris-johnson-0407.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T06:35:35Z",
    content:
      "Ever since the Partygate scandal rocked Boris Johnsons premiership at the end of last year, the British Prime Minister has repeatedly dodged questions about his future by asserting that what the publ\u2026 [+7986 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Ivana Kottasov\u00e1, CNN",
    title:
      "There is still much stigma around the condition that cost this woman and her son their lives",
    description:
      "Here is what to do when you or someone you know might be at risk of suicide.",
    url: "https://www.cnn.com/2022/05/04/uk/as-equals-post-partum-depression-intl-cmd/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220429083618-01-as-equals-maternal-mental-health-top-super-tease.jpg",
    publishedAt: "2022-05-04T05:03:28Z",
    content:
      'The Expert View: According to Raines, as many as 80% of all new mothers experience "baby blues": temporary bouts of anxiety, tearfulness or low mood in the first weeks after giving birth, explaining \u2026 [+466 chars]',
  },
  {
    source: { id: "cnn", name: "CNN" },
    author:
      'By Se\u00e1n Federico-O\'Murch\u00fa, <a href="/profiles/brad-lendon">Brad Lendon</a> and <a href="/profiles/andrew-raine">Andrew Raine</a>, CNN',
    title: "Russia's war in Ukraine",
    description:
      "More than 150 people evacuated from the besieged city of Mariupol arrived in the city of Zaporizhzhia, President Volodymyr Zelensky said Tuesday night, while another government official said four more evacuation corridors were planned for Wednesday. Follow he\u2026",
    url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-04-22/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503145430-zaporizhzhia-refugees-050322-super-tease.jpg",
    publishedAt: "2022-05-04T04:16:33Z",
    content:
      "Russian forces launched attacks on several targets that appear related to the transport of military equipment in Ukraine. They included three railway power substations damaged by missile strikes in t\u2026 [+3835 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Sean Lyngaas, CNN",
    title:
      "Chinese hackers cast wide net for trade secrets in US, Europe and Asia, researchers say",
    description:
      "Chinese government-linked hackers have tried to steal sensitive data from some three dozen manufacturing and technology firms in the US, Europe and Asia, security researchers said Wednesday, in findings that shed new light on Beijing's alleged use of hacking \u2026",
    url: "https://www.cnn.com/2022/05/04/politics/china-hackers-economic-espionage-manufacturing/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210713153708-01-computer-hacking-stock-super-tease.jpg",
    publishedAt: "2022-05-04T04:14:55Z",
    content:
      "(CNN)Chinese government-linked hackers have tried to steal sensitive data from some three dozen manufacturing and technology firms in the US, Europe and Asia, security researchers said Wednesday, in \u2026 [+3797 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Eric Bradner, Dan Merica and Gregory Krieg, CNN",
    title: "6 takeaways from Ohio and Indiana primaries",
    description:
      "Ohio's Republican Senate primary was the first major midterm test of former President Donald Trump's enduring influence over the Republican Party -- and Trump's candidate won.",
    url: "https://www.cnn.com/2022/05/04/politics/ohio-indiana-primary-takeaways/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503225138-06-jd-vance-ohio-wins-050322-super-tease.jpg",
    publishedAt: "2022-05-04T04:08:55Z",
    content:
      "(CNN)Ohio's Republican Senate primary was the first major midterm test of former President Donald Trump's enduring influence over the Republican Party -- and Trump's candidate won.\r\nJ.D. Vance, the v\u2026 [+8447 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Stephen Collinson",
    title:
      "Supreme Court's draft opinion sends electric shock through midterm campaigns",
    description: "The October surprise may have arrived in early May.",
    url: "https://www.cnn.com/2022/05/04/politics/supreme-court-draft-opinion-midterm-shock/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/220503195117-outside-supreme-court-0503.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2022-05-04T04:04:19Z",
    content:
      "The October surprise may have arrived in early May.\r\nThe seismic revelation that the conservative majority on the Supreme Court appears ready to overturn nearly a half century-long constitutional rig\u2026 [+9161 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Brad Lendon and Gawon Bae, CNN",
    title: "North Korea launches suspected ballistic missile, Japan says",
    description:
      "North Korea fired a possible ballistic missile on Wednesday, the Japanese Prime Minister's office said in a tweet.",
    url: "https://www.cnn.com/2022/05/03/asia/north-korea-missile-launch-intl-hnk-ml/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/150325082132-social-gfx-breaking-news-super-tease.jpg",
    publishedAt: "2022-05-04T03:52:50Z",
    content:
      "Seoul, South Korea (CNN)North Korea fired a possible ballistic missile on Wednesday, the Japanese Prime Minister's office said in a tweet.\r\nThe South Korean Joint Chiefs of Staff said North Korea fir\u2026 [+144 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Francesca Street, CNN",
    title: "Stay in a sumptuous room inside the Moulin Rouge",
    description:
      "Sitting atop one of the world's most famous nightclubs is a scarlet red windmill. And inside the windmill lies a secret room, hitherto unseen by the public.",
    url: "https://www.cnn.com/travel/article/moulin-rouge-airbnb-windmill/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503114528-01-moulin-airbnb-extra-super-tease.jpg",
    publishedAt: "2022-05-04T02:18:58Z",
    content:
      "(CNN) Sitting atop one of the world's most famous nightclubs is a scarlet red windmill. And inside the windmill lies a secret room, hitherto unseen by the public.\r\nNext month, a select number of trav\u2026 [+2506 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Story by Nell Lewis; video by Hazel Pfeifer, CNN",
    title:
      "'Babysitting' the next generation of New Zealand's endangered sea lions",
    description:
      "Sea lions are making a comeback on New Zealand's mainland, but they need protection to safeguard their future.",
    url: "https://www.cnn.com/travel/article/new-zealand-sea-lion-babysitters-c2e-spc-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220418144849-sea-lion-sofa-card-super-tease.jpg",
    publishedAt: "2022-05-04T01:58:47Z",
    content:
      "(CNN) Like many teenagers, Hannah Yeardley, a 17-year-old living in Dunedin, New Zealand, babysits in her spare time. The only difference is that it's not children she's looking after, it's sea lion \u2026 [+5927 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Andy Rose, CNN",
    title:
      "Missouri executes man convicted of murdering and robbing an elderly couple in 1996",
    description:
      "Carman Deck, who was condemned to death following a double murder conviction and three trials, was executed Tuesday evening in Bonne Terre, Missouri, by lethal injection.",
    url: "https://www.cnn.com/2022/05/03/us/carman-deck-missouri-execution/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503202911-01-carman-deck-missouri-execution-super-tease.jpg",
    publishedAt: "2022-05-04T01:08:56Z",
    content:
      "(CNN)Carman Deck, who was condemned to death following a double murder conviction and three trials, was executed Tuesday evening in Bonne Terre, Missouri, by lethal injection.\r\nDeck was accused of fa\u2026 [+2221 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Amanda Musa, CNN",
    title:
      "The body of a missing 15-year-old boy was recovered from the Mississippi River",
    description:
      "The body of a 15-year-old boy was recovered from the Mississippi River on Monday, New Orleans Mayor LaToya Cantrell said in a statement Monday.",
    url: "https://www.cnn.com/2022/05/03/us/mississippi-river-body-teen-boy-identified/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503172720-new-orleans-body-found-super-tease.jpg",
    publishedAt: "2022-05-04T00:48:42Z",
    content:
      "(CNN)The body of a 15-year-old boy was recovered from the Mississippi River on Monday, New Orleans Mayor LaToya Cantrell said in a statement Monday.\r\nThe mayor's announcement came a week after the Co\u2026 [+1326 chars]",
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Priscilla Alvarez and Zachary Cohen, CNN",
    title:
      "DHS watchdog says Trump's agency appears to have altered report on Russian interference in 2020 election in part because of politics",
    description:
      'Former President Donald Trump\'s Department of Homeland Security delayed and altered an intelligence report related to Russian interference in the 2020 election, making changes that "appear to be based in part on political considerations," according to a newly\u2026',
    url: "https://www.cnn.com/2022/05/03/politics/donald-trump-russian-interference-election-politics/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/220503184104-01-homeland-security-super-tease.jpg",
    publishedAt: "2022-05-04T00:12:16Z",
    content:
      "Washington (CNN)Former President Donald Trump's Department of Homeland Security delayed and altered an intelligence report related to Russian interference in the 2020 election, making changes that \"a\u2026 [+4687 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Woman's body found at flats in Aberdeen",
    description:
      "Police said the discovery was made at the rear of the city's Linksfield Court early on Thursday.",
    url: "https://www.bbc.co.uk/news/uk-scotland-north-east-orkney-shetland-61333697",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/E990/production/_124429795_linksfield.jpg",
    publishedAt: "2022-05-05T10:13:16Z",
    content:
      'A woman has been found dead at flats in Aberdeen.\r\nPolice said her body was discovered at the rear of Linksfield Court on Regent Walk at about 05:10.\r\nA police spokesman said: "Inquiries are ongoing \u2026 [+160 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Wildfire smoke and dust storm seen from space",
    description:
      "Watch satellite images of 60mph gusts blowing dust across Colorado and wildfires in New Mexico.",
    url: "https://www.bbc.co.uk/news/av/world-us-canada-61333747",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/CF00/production/_124429925_p0c50lbb.jpg",
    publishedAt: "2022-05-05T09:58:23Z",
    content:
      "Massive plumes of smoke from wildfires in New Mexico has been caught on satellite images at the exact same moment a dust storm sweeped across Colorado.\r\nThe footage from the National Oceanic and Atmo\u2026 [+205 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Royal Family to stand in for Queen at garden parties",
    description:
      "Buckingham Palace says other members of the Royal Family will host as the parties return next week.",
    url: "https://www.bbc.co.uk/news/uk-61331059",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/16F28/production/_124429939_hi075775861.jpg",
    publishedAt: "2022-05-05T09:54:35Z",
    content:
      "By Joseph LeeBBC News\r\nImage caption, The Queen last hosted a Buckingham Palace garden party in 2019\r\nOther members of the Royal Family will stand in for the Queen when the traditional garden parties\u2026 [+1726 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "China building collapse: Woman rescued from rubble after six days",
    description:
      "Dozens of people are still feared missing in the debris of a fallen building in the city of Changsha.",
    url: "https://www.bbc.co.uk/news/world-asia-china-61332324",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/AD68/production/_124429344_get.jpg",
    publishedAt: "2022-05-05T09:50:27Z",
    content:
      "By Patrick JacksonBBC News\r\nImage source, Getty Images\r\nImage caption, The 10th survivor was brought to safety early on Thursday\r\nRescuers in the central Chinese city of Changsha have pulled a woman \u2026 [+2359 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Women's Super League: Manchester City 6-0 Birmingham City",
    description:
      "Watch highlights as Manchester City win 6-0 to relegate Birmingham City from the Women's Super League.",
    url: "https://www.bbc.co.uk/sport/av/football/61333231",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/6DBC/production/_124429082_p0c509tg.jpg",
    publishedAt: "2022-05-05T09:48:33Z",
    content:
      "Watch highlights as Manchester City win 6-0 to relegate Birmingham City from the Women's Super League.\r\nMATCH REPORT: Birmingham relegated from WSL after heavy defeat\r\nAvailable to UK users only.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Ruth Dodsworth not letting coercive control 'define life'",
    description:
      "Ruth Dodsworth speaks of the coercive control she endured by her husband in a new TV programme.",
    url: "https://www.bbc.co.uk/news/uk-wales-61332031",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/17B5F/production/_123291179_microsoftteams-image-15.png",
    publishedAt: "2022-05-05T09:35:32Z",
    content:
      "Image caption, Ruth Dodsworth hopes to inspire other domestic abuse victims to seek help\r\nA broadcaster who endured almost a decade of domestic and coercive abuse said she will not let it define the \u2026 [+3494 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Andy Murray withdraws from match against Novak Djokovic because of illness",
    description:
      "Andy Murray pulls out of the Madrid Open because of illness and will not now play world number one Novak Djokovic on Thursday.",
    url: "https://www.bbc.co.uk/sport/tennis/61333021",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/337E/production/_124428131_hi075742190.jpg",
    publishedAt: "2022-05-05T09:20:32Z",
    content:
      "Murray earned his first victory over a top-20 opponent in 2022 when he beat Denis Shapovalov in Madrid in the second round\r\nAndy Murray has pulled out of his match against Novak Djokovic at the Madri\u2026 [+912 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Turkey's cost of living soars nearly 70%",
    description:
      "Everyday goods including food and transport costs have seen among the biggest annual increases.",
    url: "https://www.bbc.co.uk/news/business-61332272",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/5066/production/_124428502_gettyimages-1239856334.jpg",
    publishedAt: "2022-05-05T09:18:48Z",
    content:
      "Image source, Getty Images\r\nConsumer prices in Turkey soared nearly 70% in April from a year ago, hitting a two-decade high, official figures show. \r\nTransport, food prices and household furnishings \u2026 [+1634 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "BBC Radio 4",
    title: "Polidori's The Vampyre",
    description:
      "Melvyn Bragg and guests discuss the influential novella of John Polidori (1795-1821) published in 1819 and attributed first to Lord Byron (1788-1824) who had started a version of it in 1816 at the Villa Diodati in the Year Without A Summer. There Byron, his p\u2026",
    url: "https://www.bbc.co.uk/programmes/m00162xz",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p0bwvgyg.jpg",
    publishedAt: "2022-05-05T09:15:00Z",
    content:
      "CONTRIBUTORSMartyn Rady at University College London\r\nNick Groom at the University of Macau\r\nSamantha George at the University of Hertfordshire\r\nREADING LIST\r\nPaul Barber, Vampires, Burials and Death\u2026 [+2851 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Boba Fett actor's Star Wars gear sells for \u00a3155,000",
    description:
      "Items belonging to the late Boba Fett actor, including unseen film reels, raised \u00a3155,000.",
    url: "https://www.bbc.co.uk/news/uk-england-wiltshire-61325723",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/755A/production/_124424003_bullochmuseum2.jpg",
    publishedAt: "2022-05-05T09:08:16Z",
    content:
      'Image source, East Bristol Auctions\r\nImage caption, Mrs Bulloch said her late husband "loved and appreciated" all of the Star Wars items he had collected\r\nStar Wars memorabilia which belonged to the \u2026 [+2256 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 09:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvmkcl",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T09:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Seattle Sounders beat Pumas UNAM to win Concacaf Champions League",
    description:
      "Major League Soccer side Seattle Sounders beat Mexico's Pumas UNAM 3-0 to win the Concacaf Champions League 5-2 on aggregate.",
    url: "https://www.bbc.co.uk/sport/football/61330490",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AFA2/production/_124426944_gettyimages-1240454755.jpg",
    publishedAt: "2022-05-05T08:45:09Z",
    content:
      "Seattle's victory secured a place at the Fifa Club World Cup\r\nMajor League Soccer side Seattle Sounders beat Mexico's Pumas UNAM to win the Concacaf Champions League.\r\nAfter a 2-2 draw in the first l\u2026 [+1273 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Virgin Atlantic flight returns to Heathrow after pilot roster error",
    description:
      "Virgin Atlantic said it emerged the first officer had not completed his final flying test.",
    url: "https://www.bbc.co.uk/news/uk-england-london-61332456",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/A70F/production/_119876724_gettyimages-1227917206.jpg",
    publishedAt: "2022-05-05T08:32:28Z",
    content:
      "Image source, Getty Images\r\nImage caption, The Virgin Atlantic aircraft was bound for New York JFK Airport\r\nA Virgin Atlantic aircraft turned back to Heathrow after it emerged the first officer had n\u2026 [+1346 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Man jailed for rape and sex assault on same night in Preston",
    description:
      'Amanuel Tsegay targeted his victims after "prowling for vulnerable women" in Preston, police say.',
    url: "https://www.bbc.co.uk/news/uk-england-lancashire-61326875",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/14AA2/production/_124424648_amanuel-tsegay.jpg",
    publishedAt: "2022-05-05T08:29:41Z",
    content:
      'Image source, Lancashire Police\r\nImage caption, Amanuel Tsegay admitted rape and sexual assault\r\nA "sexual predator" who raped one woman and sexually assaulted another on the same night has been jail\u2026 [+2153 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 08:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvmfmg",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T08:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Real Madrid 3-1 Manchester City: Champions League final was 'so close' - Pep Guardiola",
    description:
      'Manchester City boss Pep Guardiola says his side "were so close" to reaching the Champions League final after conceding three late goals to Real Madrid and losing 6-5 on aggregate in their semi-final.',
    url: "https://www.bbc.co.uk/sport/av/football/61318231",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/F410/production/_124408426_p0c4zyqb.jpg",
    publishedAt: "2022-05-05T07:39:19Z",
    content:
      'Manchester City boss Pep Guardiola says his side "were so close" to reaching the Champions League final after conceding three late goals to Real Madrid and losing 6-5 on aggregate in their semi-final\u2026 [+43 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Holland Park School rife with exploitation and fear, report finds",
    description:
      "Pupils and staff were traumatised by their experiences at the west London school, a report finds.",
    url: "https://www.bbc.co.uk/news/uk-england-london-61325597",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/CF1E/production/_124422035_6de43999-434d-4d84-9486-8f624fd6912f.jpg",
    publishedAt: "2022-05-05T07:28:22Z",
    content:
      "Image caption, Holland Park School has a distinctive mesh-like metal exterior\r\nAn investigation into a London academy school has found safeguarding breaches and exploitation within teacher-student re\u2026 [+3556 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Scotland's papers: Monster dad murdered son for revenge",
    description:
      "Lukasz Czapla's conviction for murdering his two-year-old son makes Scotland's front pages.",
    url: "https://www.bbc.co.uk/news/uk-scotland-61329130",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15AC4/production/_124427788_comp.jpg",
    publishedAt: "2022-05-05T07:24:31Z",
    content:
      "Disabled children 'dumped' in Ukrainian institutions. VideoDisabled children 'dumped' in Ukrainian institutions",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Scottish Gossip: Rangers, Celtic, Ramsey, Man Utd, Hearts, Hibs, Dundee Utd, Levitt, Akouokou",
    description:
      "Rangers will not look to make Aaron Ramsey's loan from Juventus permanent as Darren Ferguson is ruled out of Hibernian manager running.",
    url: "https://www.bbc.co.uk/sport/football/61330945",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/51EC/production/_124427902_ramsey.jpg",
    publishedAt: "2022-05-05T07:19:35Z",
    content:
      "Rangers will not look to make Aaron Ramsey's loan from Juventus a permanent move after his injury hit spell at Ibrox, with the Serie A club anticipating the 31-year-old's return at the end of the sea\u2026 [+3502 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Scores of safeguarding complaints at after-school clubs",
    description:
      "Claims of safeguarding failures, including physical and sexual assaults, have been uncovered by the BBC.",
    url: "https://www.bbc.co.uk/news/uk-61325477",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/8798/production/_124421743_976gettyimages-961909974.jpg",
    publishedAt: "2022-05-05T07:16:47Z",
    content:
      "By Noel TitheradgeBBC News\r\nImage source, Getty Images\r\nDozens of allegations of safeguarding failures in after-school clubs - including assaults, neglect and sexual abuse - have been uncovered by BB\u2026 [+5091 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 07:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvm9wb",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T07:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "NBA: Phoenix Suns and Miami Heat take 2-0 play-off leads",
    description:
      "The Phoenix Suns and the Miami Heat take 2-0 leads in their best-of-seven play-offs after respective wins against the Dallas Mavericks and the Philadelphia 76ers.",
    url: "https://www.bbc.co.uk/sport/basketball/61330482",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16F0A/production/_124426939_hi075771871.jpg",
    publishedAt: "2022-05-05T06:33:30Z",
    content:
      "Devin Booker scored 21 of his 30 points in the second half for the Suns\r\nThe Phoenix Suns and the Miami Heat lead their best-of-seven play-off series 2-0 after respective victories over the Dallas Ma\u2026 [+1197 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Shell's profit nearly triples as oil prices surge",
    description:
      "The war in Ukraine has lifted energy prices soar with oil majors reaping the benefits.",
    url: "https://www.bbc.co.uk/news/business-61330552",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/6DBA/production/_124409082_shell.jpg",
    publishedAt: "2022-05-05T06:11:01Z",
    content:
      "Image source, Getty Images\r\nEnergy giant Shell has reported soaring profits as oil and gas prices surge around the world.\r\nShell made $9.13bn (\u00a37.3bn) in the first three months of the year, nearly tr\u2026 [+561 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "London elections 2022: Voters go to polls across the capital",
    description:
      "Voters are electing nearly 2,000 councillors in 32 boroughs across the capital.",
    url: "https://www.bbc.co.uk/news/uk-england-london-61320646",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/6202/production/_124409052_gettyimages-1232722830.jpg",
    publishedAt: "2022-05-05T06:09:06Z",
    content:
      "Image source, Getty Images\r\nImage caption, Voting takes place between 07:00 and 22:00\r\nVoters are going to the polls to elect councillors in London's 32 boroughs. \r\nVoting takes place between 07:00 B\u2026 [+635 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 06:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvm646",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T06:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "PSNI chief Simon Byrne rules out Metropolitan Police switch",
    description:
      "The chief constable says he is committed to the Police Service of Northern Ireland.",
    url: "https://www.bbc.co.uk/news/uk-northern-ireland-61325487",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/4A80/production/_124427091_chief_constable_simon_byrne_media_facility_14.jpg",
    publishedAt: "2022-05-05T06:05:23Z",
    content:
      "By Julian O'NeillBBC News NI Home Affairs Correspondent\r\nImage caption, Simon Byrne says he will see out his contract, which runs until 2024\r\nChief Constable Simon Byrne has not applied for the job o\u2026 [+1327 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Eintracht Frankfurt: German club travel to West Ham aiming to end long wait for European glory",
    description:
      "Eintracht Frankfurt were the first German team to reach the European Cup final. They are on the rise again now but they have endured years of misery.",
    url: "https://www.bbc.co.uk/sport/football/61313658",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/6D88/production/_124404082_gettyimages-1239986644.jpg",
    publishedAt: "2022-05-05T05:37:16Z",
    content:
      'Eintracht Frankfurt are potentially two games away from ending a 62-year wait to appear in the European Cup/Champions League - their last appearance came in the 1960 final\r\n"West Ham have never exper\u2026 [+6105 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Roma v Leicester: 'Mourinho is a special man' - but is this Rodgers' moment?",
    description:
      "Brendan Rodgers and Jose Mourinho first met 18 years ago, now their Leicester and Roma teams are vying for a spot in the Europa Conference final.",
    url: "https://www.bbc.co.uk/sport/football/61319326",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/127B5/production/_124410757_-e4e06b9c-fdea-429c-8beb-928aa9c1b523.png",
    publishedAt: "2022-05-05T05:33:34Z",
    content:
      "Brendan Rodgers' Leicester and Jose Mourinho's Roma are locked at 1-1 after the Europa Conference semi-final first leg\r\nEighteen years after they first met, Leicester boss Brendan Rodgers and Roma's \u2026 [+6290 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "London medical students say they cannot live on NHS bursaries",
    description:
      'Some students are "forced to choose between eating or passing finals" and others are using food banks.',
    url: "https://www.bbc.co.uk/news/uk-england-london-61256095",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3007/production/_124359221_gettyimages-1289380133.jpg",
    publishedAt: "2022-05-05T05:23:08Z",
    content:
      "Image source, CentralITAlliance - Getty\r\nImage caption, Some medical students have been using food banks, the British Medical Association's medical students committee says\r\nSome medical students in L\u2026 [+5923 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "HRT crisis: 'Shortages left me unable to work'",
    description:
      "A village postmistress says she has been unable to work for three weeks due to the shortages.",
    url: "https://www.bbc.co.uk/news/uk-england-leicestershire-61326729",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/127DE/production/_124424757_b3f0a47a-3da8-4b68-ae15-1d47dfa55d78.jpg",
    publishedAt: "2022-05-05T05:23:05Z",
    content:
      "By Jennifer HarbyBBC News\r\nImage source, BBC/Rob Sissons\r\nImage caption, Kathleen Hewitt says she has been off work for three weeks due to the shortages\r\nAs the postmistress in a rural village with a\u2026 [+2450 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Strictly stars: Bafta nominees on huge step for sign language",
    description:
      "Strictly stars Rose Ayling-Ellis and Giovanni Pernice on their Must-See Moment Bafta nomination.",
    url: "https://www.bbc.co.uk/news/av/uk-england-london-61328002",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/23B6/production/_124424190_p0c4wcqh.jpg",
    publishedAt: "2022-05-05T05:22:45Z",
    content:
      "Strictly Come Dancing stars Rose Ayling-Ellis and Giovanni Pernice have been nominated for the Must-See Moment Bafta, a category voted for by the public.\r\nDuring their ballroom dance to Symphony, the\u2026 [+501 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Scottish elections 2022: Voters head to polls to elect new councillors",
    description:
      "Across Scotland, 1,227 new councillors will be elected to sit on 32 local authorities.",
    url: "https://www.bbc.co.uk/news/uk-scotland-scotland-politics-61307815",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1494E/production/_124420348_gettyimages-542411014.jpg",
    publishedAt: "2022-05-05T05:19:16Z",
    content:
      "Media caption, Scotland elections 2022: What you need to know before heading to the polls\r\nVoters across Scotland will head to the polls later to elect 1,227 new councillors to the country's 32 local\u2026 [+4271 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Peterborough couple donate more than 100 cuddly toys won over 40 years",
    description:
      "The cuddly toys are been donated to a hospice to help them raise money.",
    url: "https://www.bbc.co.uk/news/uk-england-cambridgeshire-61322691",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/2014/production/_124421280_royandannpettittwiththeircuddlytoywinsfromhappyholidaysandtripstotheseaside.jpg",
    publishedAt: "2022-05-05T05:13:33Z",
    content:
      "Image source, Sue Ryder Thorpe Hall Hospice\r\nImage caption, Roy and Ann Pettitt won 250 toys at arcades over 40 years\r\nA couple have donated more than 100 cuddly toys they had won at arcades to a hos\u2026 [+1998 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Women's Super League, Six Nations & Women's Cricket World Cup key to record UK television audiences",
    description:
      "More people in the UK are watching women's sport than ever and viewers are tuning into events for longer, according to new research.",
    url: "https://www.bbc.co.uk/sport/61328066",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1112C/production/_124423996_mancity.jpg",
    publishedAt: "2022-05-05T05:09:58Z",
    content:
      "Australia beat England in last month's Women's World Cup final, which was shown on Sky Sports and made free to air\r\nMore people in the UK are watching women's sport than ever before and viewers are t\u2026 [+1913 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 05:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvm2d2",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T05:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Lake District: Jet suit paramedic 'privileged' to be testing kit",
    description:
      "Trials show the time to reach casualties over difficult terrain can be slashed.",
    url: "https://www.bbc.co.uk/news/uk-england-cumbria-61324213",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/112C1/production/_114673307_mediaitem114673306.jpg",
    publishedAt: "2022-05-05T05:04:34Z",
    content:
      'Image caption, Three paramedics are currently involved in testing the kit\r\nA paramedic testing jet suits with the aim of using them in the Lake District has told of the "privilege" of being involved \u2026 [+2216 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Australia defends Solomon Islands ties as row over China escalates",
    description:
      "Solomon Islands leader Mannasseh Sogavare made a scathing attack on critics of a new China pact.",
    url: "https://www.bbc.co.uk/news/world-australia-61329518",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/164E2/production/_124426319_gettyimages-1174667345.jpg",
    publishedAt: "2022-05-05T05:00:43Z",
    content:
      "By Tiffanie TurnbullBBC News, Sydney\r\nImage source, Getty Images\r\nImage caption, Solomon Islands Prime Minister Manasseh Sogavare has criticised Australia and praised China in a speech to parliament\r\u2026 [+2567 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Donbas fighting: Risking capture to evacuate the vulnerable from the front line",
    description:
      "Civilian volunteers are bringing out the elderly, but some have been detained by Russian forces.",
    url: "https://www.bbc.co.uk/news/world-europe-61328947",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/A69C/production/_124425624_44fbee44-73a9-4598-8072-b1d9af98f3f9.jpg",
    publishedAt: "2022-05-05T04:57:33Z",
    content:
      "By Andrew HardingDonbas region\r\nImage caption, Mykhail (L) is being held by the Russians, his wife Yulia (R) says\r\nAbout 2,000 civilians are reportedly trapped by fighting in the front line town of P\u2026 [+4451 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Afghanistan: UK not delivering on Afghan pledge - ex-Army boss",
    description:
      "Gen Sir John McColl says hundreds of Afghans who worked for the UK now fear for their lives.",
    url: "https://www.bbc.co.uk/news/uk-61327882",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/E5D0/production/_124423885_john.jpg",
    publishedAt: "2022-05-05T04:53:20Z",
    content:
      "By Sima KotechaUK Editor, Newsnight\r\nImage caption, Gen Sir John McColl has criticised the government's relocation scheme for Afghans\r\nA UK general who served in Afghanistan says the government shoul\u2026 [+3606 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 04:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvlymy",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T04:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Uber loses $5.9bn as Asia investment values fall",
    description:
      "The firm said almost all of that loss was a due to falls in the value of investments in other companies.",
    url: "https://www.bbc.co.uk/news/business-61329641",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/BB50/production/_124425974_gettyimages-1237357348.jpg",
    publishedAt: "2022-05-05T03:11:54Z",
    content:
      "By Peter HoskinsBusiness reporter\r\nImage source, Getty Images\r\nRide-hailing and delivery group Uber has made a $5.9bn (\u00a34.7bn) loss, mostly due to its stakes in other companies.\r\nThe firm said almost\u2026 [+2577 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 03:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvltwt",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T03:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "British Virgin Islands: Andrew Fahie to plead not guilty in drugs case",
    description:
      "Florida judge says Andrew Fahie can be released on a $500,000 bond ahead of trial for drug smuggling.",
    url: "https://www.bbc.co.uk/news/uk-61328842",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/BC75/production/_124354284_1-honourable_andrew_a_fahie_premier_and_minister_of_finance_8x10.jpg",
    publishedAt: "2022-05-05T02:12:29Z",
    content:
      "Image source, Government of the Virgin Islands\r\nImage caption, Andrew Fahie was arrested in Miami by US authorities on drug and money laundering charges\r\nBritish Virgin Islands (BVI) Premier Andrew F\u2026 [+1665 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 02:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvlq4p",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T02:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "Bbc News",
    title: "Amber Heard testifies: Trial is 'painful and difficult'",
    description:
      "Actress Amber Heard takes the stand against ex-husband Johnny Depp and says the trial is 'the most painful and difficult thing' for her.",
    url: "https://www.bbc.co.uk/news/av/world-us-canada-61324262",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1426E/production/_124424528_p0c4x79p.jpg",
    publishedAt: "2022-05-05T02:02:52Z",
    content:
      "Amber Heard testifies: Trial is 'painful and difficult' Video, 00:00:56Amber Heard testifies: Trial is 'painful and difficult'",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "BBC World Service",
    title: "Mexico: The Yaqui fight back",
    description:
      "Resistance and division among Mexico\u2019s indigenous Yaqui people. Anabela Carlon is a legal advocate for the indigenous Yaqui of Sonora \u2013 a fierce defender of her people\u2019s land. And she is no stranger to the immense dangers that face her in northern Mexico, a r\u2026",
    url: "https://www.bbc.co.uk/programmes/p0c4y90h",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p0c3jjh5.jpg",
    publishedAt: "2022-05-05T01:40:00Z",
    content:
      "Resistance and division among Mexicos indigenous Yaqui people. Anabela Carlon is a legal advocate for the indigenous Yaqui of Sonora a fierce defender of her peoples land. And she is no stranger to t\u2026 [+908 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Russia on agenda as Johnson hosts Japanese PM",
    description:
      "Boris Johnson and Japanese PM Fumio Kishida are expected to agree a defensive partnership.",
    url: "https://www.bbc.co.uk/news/uk-61329435",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/A3D4/production/_120804914_tv070964734.jpg",
    publishedAt: "2022-05-05T01:35:21Z",
    content:
      "By Doug FaulknerBBC News\r\nImage caption, Fumio Kishida is making his first official visit to the UK as prime minister\r\nNew ways of putting pressure on Russia will be on the agenda when Boris Johnson \u2026 [+1747 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Black hair care: 'I travelled seven hours to get my hair done'",
    description:
      "Radio 1 Newsbeat explores what's being done to make hair salons more inclusive for black people.",
    url: "https://www.bbc.co.uk/news/av/newsbeat-61310533",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/185D8/production/_124400899_p0c4l584.jpg",
    publishedAt: "2022-05-05T01:16:38Z",
    content:
      "For decades black women have struggled to get their hair cut in mainstream salons but the focus on the Black Lives Matter movement in 2020 prompted pledges from the hair industry to be more inclusive\u2026 [+546 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Association of Photographers Awards 2021 winners revealed",
    description:
      "The winners of the 37th Association of Photographers (AOP) Awards are revealed.",
    url: "https://www.bbc.co.uk/news/in-pictures-61308032",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/105E0/production/_124404076_sop_index.jpg",
    publishedAt: "2022-05-05T01:15:50Z",
    content:
      "By Matthew TuckerBBC News\r\nThe winners of the 37th Association of Photographers (AOP) Awards have been revealed, with images on a range of subjects, including lockdowns during the pandemic.\r\nImage so\u2026 [+6517 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 01:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvlldk",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T01:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Bill Gates on Elon Musk feud and Jeffrey Epstein meetings",
    description:
      "The Microsoft tycoon talks to the BBC about divorce, conspiracy theories and Elon Musk.",
    url: "https://www.bbc.co.uk/news/technology-61329167",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/174DC/production/_124425459_gettyimages-1236298089.jpg",
    publishedAt: "2022-05-05T01:05:23Z",
    content:
      'By James ClaytonNorth America technology reporter\r\nImage source, Getty Images\r\nIn a wide-ranging interview with the BBC\'s Today programme, Bill Gates says conspiracy theories about him are "crazy" an\u2026 [+3438 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Climate change: Spring egg-laying shifts by three weeks",
    description:
      "The 75-year woodland study has measured a marked seasonal shift in the timing of egg-laying in spring.",
    url: "https://www.bbc.co.uk/news/science-environment-61314226",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/144DA/production/_124426138_mediaitem124412860.jpg",
    publishedAt: "2022-05-05T01:05:08Z",
    content:
      'By Victoria GillScience correspondent, BBC News\r\nImage caption, The scientists have special permission to access the nests and handle the birds\r\n"In some parts of this wood, egg-laying has shifted by\u2026 [+4105 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Otoniel: Colombia drug kingpin extradited to US",
    description:
      "Dairo Antonio \u00dasuga, better known as Otoniel, was captured in October, ending a seven-year manhunt.",
    url: "https://www.bbc.co.uk/news/world-latin-america-61329507",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/101A0/production/_124425956_otonielepa.jpg",
    publishedAt: "2022-05-05T00:38:24Z",
    content:
      "Colombia has extradited the drug baron leader of the country's biggest crime gang to the US, Colombia's president has announced.\r\nPresident Iv\u00e1n Duque said Dairo Antonio \u00dasuga, better known as Otonie\u2026 [+1661 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/05 00:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvlgnf",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-05T00:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Real Madrid stun Man City: 'Probably the best I have ever seen' - Woodgate",
    description:
      '"The history of this club helps us to keep going when it seems that we are gone." Carlo Ancelotti might well be right.',
    url: "https://www.bbc.co.uk/sport/football/61329407",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F138/production/_124425716_ancelotti_epa.jpg",
    publishedAt: "2022-05-05T00:05:28Z",
    content:
      'Real Madrid are into yet another Champions League final\r\n"The history of this club helps us to keep going when it seems that we are gone." Real Madrid manager Carlo Ancelotti might well be right.\r\nNo\u2026 [+5091 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Man City must 'process' semi-final defeat and 'come back' - Guardiola",
    description:
      'Pep Guardiola says Manchester City must "process" their remarkable Champions League semi-final loss and "come back" as they look to defend their Premier League title.',
    url: "https://www.bbc.co.uk/sport/football/61325080",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15380/production/_124421968_gettyimages-1240447417.jpg",
    publishedAt: "2022-05-04T23:43:13Z",
    content:
      'Pep Guardiola has now suffered six eliminations at the semi-final stage of the Champions League, joint most with Jose Mourinho\r\nPep Guardiola says Manchester City must "process" their remarkable Cham\u2026 [+2633 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Russia launches major assault on Mariupol steelworks",
    description:
      "Ukraine says Russian forces have entered the city's Azovstal complex. Also: French Left join forces to fight Macron, and Maradona's \"Hand of God\" shirt sells for millions of dollars.",
    url: "https://www.bbc.co.uk/programmes/p0c4z3x0",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p09kz0v5.jpg",
    publishedAt: "2022-05-04T23:39:00Z",
    content:
      "Ukraine says Russian forces have entered the city's Azovstal complex. Also: French Left join forces to fight Macron, and Maradona's \"Hand of God\" shirt sells for millions of dollars.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Newspaper headlines: Footie anthem 'faces axe' and Falkland inquiry call",
    description:
      "There is a football theme in the papers as the Sun reports Three Lions could be dropped by the FA.",
    url: "https://www.bbc.co.uk/news/blogs-the-papers-61328826",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/10A9C/production/_124425286_index0505.png",
    publishedAt: "2022-05-04T23:36:07Z",
    content:
      "Watch the latest episode\r\nThe BBC News Channels press review every evening at 22:40 weekdays, 22:30 and 23:30 weekends and via the BBC iPlayer",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Why Sigrid feels on top of the world",
    description:
      "The pop star talks lockdown blues, singing Nirvana at school, and why she moved all her gold discs.",
    url: "https://www.bbc.co.uk/news/entertainment-arts-61271404",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/151CF/production/_124397468_sigridcarindex.jpg",
    publishedAt: "2022-05-04T23:22:52Z",
    content:
      "By Mark SavageBBC Music Correspondent\r\nImage source, Island Records\r\nImage caption, Sigrid was born and raised in \u00c5lesund, Norway\r\nIs anyone enjoying being a pop star right now as much as Sigrid?\r\nHe\u2026 [+9391 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Africa's digital business: The women swapping shops for smartphones",
    description:
      "Three African women explain how they have boosted their income by going digital since the start of Covid.",
    url: "https://www.bbc.co.uk/news/world-africa-61318779",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/7211/production/_124410292_mediaitem124410291.jpg",
    publishedAt: "2022-05-04T23:20:27Z",
    content:
      "By Sam FenwickBBC Business Daily presenter\r\nImage source, Sharon Tarit\r\nThe BBC profiles three African women - a former shop owner, a teacher and a taxi driver - who have boosted their income since t\u2026 [+3691 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "How Covid-scarred Shanghai will finally exit lockdown",
    description:
      "A mass clean-up is sweeping through Shanghai, with the city's gradual reopening expected to follow.",
    url: "https://www.bbc.co.uk/news/world-asia-china-61307148",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/42F4/production/_124404171_coviddisinfectant.jpg",
    publishedAt: "2022-05-04T23:18:03Z",
    content:
      "By Robin BrantBBC Shanghai correspondent\r\nImage source, VCG via Getty Images\r\nImage caption, Shanghai is now expected to open up gradually, following a brutal lockdown. (Pictured: Customers line up o\u2026 [+6259 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Emilie Pine: The novelist putting autism centre stage",
    description:
      "Irish author Emilie Pine on baby loss and neurodiversity in her debut novel Ruth & Pen.",
    url: "https://www.bbc.co.uk/news/entertainment-arts-61227465",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/E36B/production/_124291285_emilie_pine.jpg",
    publishedAt: "2022-05-04T23:14:55Z",
    content:
      "By Emma SaundersEntertainment reporter\r\nImage source, Ruth Connolly\r\nWriter and academic Emilie Pine tells me she likes a challenge, and taking up a post as writer-in-residence at a maternity hospita\u2026 [+6628 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Michael Murray: New Sports Direct boss says High Street isn't dead",
    description:
      'Michael Murray says high streets will be "different" ahead of a new look Sports Direct store opening.',
    url: "https://www.bbc.co.uk/news/business-61319871",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/10FE2/production/_124420696_dsc00306.jpg",
    publishedAt: "2022-05-04T23:09:38Z",
    content:
      "By Emma SimpsonBusiness correspondent, BBC News\r\nImage caption, Michael Murray is one of the UK's youngest FTSE 250 chief executives\r\nThe new boss of Sports Direct has insisted the High Street isn't \u2026 [+5550 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "'There's power in names': Antigua unearths lost ancestors",
    description:
      "A landmark genealogy project is unearthing the names of enslaved people whose stories were erased.",
    url: "https://www.bbc.co.uk/news/world-latin-america-61174988",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3113/production/_124236521_nelson'sdockyard.jpg",
    publishedAt: "2022-05-04T23:08:42Z",
    content:
      "By Gemma HandyEnglish Harbour, Antigua\r\nImage source, Gemma Handy\r\nImage caption, Nelson's Dockyard is today a bustling yachting hub and tourist attraction\r\nAt precisely 47.5 years old, house carpent\u2026 [+6690 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Dubai a haven for wealthy Russians fleeing sanctions",
    description:
      "Property purchases by Russians in Dubai surged by 67% in the first quarter of 2022, a report says.",
    url: "https://www.bbc.co.uk/news/business-61257448",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/6FF0/production/_117865682_gettyimages-1288645266.jpg",
    publishedAt: "2022-05-04T23:08:22Z",
    content:
      "By Sameer HashmiMiddle East business correspondent\r\nImage source, Getty Images\r\nDubai has emerged as a haven for wealthy Russians fleeing the impact of western sanctions over the war in Ukraine.\r\nRus\u2026 [+4560 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/04 23:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvlbx9",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-04T23:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Richarlison: The work ethic and humble origins behind Everton forward's rise",
    description:
      "Without the money to make it back, Richarlison left home for one last shot. That gamble led him to the Premier League.",
    url: "https://www.bbc.co.uk/sport/football/61245518",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1F41/production/_124410080_richarlison_gett2.jpg",
    publishedAt: "2022-05-04T23:03:53Z",
    content:
      "Richarlison could face FA action after picking up a flare at Goodison Park\r\nThe battered, red-brick bus station in the small Brazilian town of Nova Venecia has a story to tell. \r\nBacking on to a murk\u2026 [+10627 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "NI election 2022: Voters set to go to polls in assembly election",
    description:
      "Polls are open between 0700 and 2200 to elect 90 members of the Stormont Assembly.",
    url: "https://www.bbc.co.uk/news/uk-northern-ireland-61323018",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/10C5E/production/_124420786_gettyimages-1232722473.jpg",
    publishedAt: "2022-05-04T23:01:35Z",
    content:
      "Image source, Getty Images\r\nVoters will go to the polls later to elect the 90 members of the Northern Ireland Assembly.\r\nPolls are open from 07:00 to 22:00 BST.\r\nA total of 239 candidates are running\u2026 [+4377 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Durban floods survivors: 'I thought the world was ending'",
    description:
      "Moeketsi Manake and his family talk about losing everything, including their house, in the Durban floods.",
    url: "https://www.bbc.co.uk/news/av/world-africa-61325457",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/10EC0/production/_124421396_p0c4rqn8.jpg",
    publishedAt: "2022-05-04T23:01:17Z",
    content:
      "Communities in KwaZulu-Natal, South Africa, have been affected by the worst floods in decades, leaving over 430 people dead and tens of thousands displaced. \r\nMoeketsi Manake and his family lost ever\u2026 [+271 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Myanmar civil war: \u2018I saw my son\u2019s body on Facebook\u2019",
    description:
      "After the Myanmar military entered his village, Joseph fled into the jungle but his 13-year-old was killed.",
    url: "https://www.bbc.co.uk/news/av/world-asia-india-61327821",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/E832/production/_124424495_mediaitem124424494.jpg",
    publishedAt: "2022-05-04T23:01:13Z",
    content:
      "Joseph is mourning the death of his son. \r\nAfter the Myanmar military entered his village, he fled into the jungle but 13-year-old Pali Nang did not make it.\r\nJoseph saw a photo of his sons dead body\u2026 [+297 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Elections 2022: Polls to open in elections across the country",
    description:
      "Local elections are taking place in Scotland, Wales, Northern Ireland and many parts of England.",
    url: "https://www.bbc.co.uk/news/uk-politics-61322919",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/11671/production/_124418217_f813d167-b37a-481f-bcd1-5bd56849bfb9.jpg",
    publishedAt: "2022-05-04T23:00:15Z",
    content:
      "Millions of people are expected to take part in elections across the UK, when polling stations open at 07:00 BST.\r\nVoters in England, Scotland and Wales will choose the local councillors they want to\u2026 [+1388 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Elections 2022: How to follow the results on the BBC",
    description:
      "Find out how to keep up to date with live election results on TV, radio, online and social media.",
    url: "https://www.bbc.co.uk/news/uk-politics-61216230",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/9399/production/_124358773_le_2022_index_promo_follow_results.png",
    publishedAt: "2022-05-04T22:48:44Z",
    content:
      "Millions of people are voting to elect councillors in England, Scotland and Wales on 5 May, while in Northern Ireland people are electing members of the next Northern Ireland Assembly. \r\nLocal counci\u2026 [+5099 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Elections 2022: What can't I do in a polling station?",
    description:
      "The rules on everything from whether you can take a selfie to voting while drunk.",
    url: "https://www.bbc.co.uk/news/uk-politics-61011897",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/11B95/production/_124079527_le_2022_index_promo_dos_and_donts-nc.png",
    publishedAt: "2022-05-04T22:47:43Z",
    content:
      "Millions of people will head to the polls on Thursday to vote in elections across the UK.\r\nLocal elections are taking place in England, Scotland and Wales, while in Northern Ireland people are voting\u2026 [+4841 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "WSL: Arsenal boss Jonas Eidevall says Chelsea have something to lose",
    description:
      "As Arsenal and Chelsea head into the final day of the WSL season separated by one point, Gunners boss Jonas Eidevall says Chelsea have something to lose.",
    url: "https://www.bbc.co.uk/sport/football/61328997",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17540/production/_124425559_gettyimages-1395406590.jpg",
    publishedAt: "2022-05-04T22:15:12Z",
    content:
      "Arsenal will have to better Chelsea's result on Sunday to win their first league title under Eidevall\r\nArsenal boss Jonas Eidevall has turned up the heat in the Women's Super League title race, insis\u2026 [+2543 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Ukraine war: Zelensky plea as Russians seek Mariupol endgame",
    description:
      "The Ukrainian president appeals for fresh UN help as Russians reportedly enter the city's last holdout.",
    url: "https://www.bbc.co.uk/news/world-europe-61327638",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/139E0/production/_124425308_hi075741324.jpg",
    publishedAt: "2022-05-04T22:12:55Z",
    content:
      "Ukrainian officials say Russian forces have launched an all-out assault on the Azovstal steelworks, the last Ukrainian holdout in the city of Mariupol. \r\nUkrainian forces inside the plant have been f\u2026 [+4151 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/04 22:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvl755",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-04T22:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Transfer rumours: Raphinha, Zaha, Martinez, Ginter, Sarr, Ramsay, Hamer",
    description:
      "Barcelona want Premier League winger, Arsenal target a striker, Zaha could leave Crystal Palace in the summer, plus more.",
    url: "https://www.bbc.co.uk/sport/61324821",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/9954/production/_124425293_raphinha.png",
    publishedAt: "2022-05-04T22:05:29Z",
    content:
      "Barcelona have stepped up their bid to land Brazil winger Raphinha, 25, and are prepared to offer separate deals depending on whether Leeds United stay in the Premier League this season. (Telegraph, \u2026 [+1270 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Amber Heard says Johnny Depp struck her when on drugs",
    description:
      "Taking the stand, Amber Heard alleged a pattern of drug-fuelled violence from Johnny Depp.",
    url: "https://www.bbc.co.uk/news/world-us-canada-61329067",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3CC0/production/_124425551_gettyimages-1240445937.jpg",
    publishedAt: "2022-05-04T22:01:17Z",
    content:
      "Media caption, Watch: Depp 'slapped me across the face' over Wino tattoo\r\nAmber Heard has told a court that Johnny Depp repeatedly struck her during drug and alcohol-fuelled rages that she said turne\u2026 [+2058 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "BA to reduce Inverness-London flights over summer",
    description:
      "Inverness Airport said the change to the popular Heathrow route appeared to be temporary.",
    url: "https://www.bbc.co.uk/news/uk-scotland-highlands-islands-61319417",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/14CDB/production/_124411258_baflight-gettyimages-1238774977.jpg",
    publishedAt: "2022-05-04T22:01:14Z",
    content:
      "Image source, Getty Images\r\nBritish Airways is to cut back on flights between Inverness and London Heathrow over the summer.\r\nThe airline said it was merging some of its low occupancy flights to help\u2026 [+1905 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Passport rule meant my family flew off without me",
    description:
      "Ellie Hair was unable to fly out on holiday from Glasgow because her passport was issued more than 10 years ago.",
    url: "https://www.bbc.co.uk/news/uk-scotland-61312855",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/16B0E/production/_124424929_passport_elliehair_husband.jpg",
    publishedAt: "2022-05-04T21:59:19Z",
    content:
      "Image caption, Ellie Hair was prevented from joining her husband Euan and two children on the flight\r\nA woman has told how she had to watch her husband and young children fly off on holiday without h\u2026 [+3270 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "HMP Barlinnie gets first prison body scanner in Scotland",
    description:
      "The instant internal images now available at HMP Barlinnie can reveal weapons, mobile phones and drugs.",
    url: "https://www.bbc.co.uk/news/uk-scotland-glasgow-west-61320881",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/2488/production/_124425390_scannerclean.jpg",
    publishedAt: "2022-05-04T21:56:08Z",
    content:
      "Image caption, The body scanner is the first to be introduced in a Scottish prison\r\nThe Scottish Prison Service has introduced its first body scanner in HMP Barlinnie as part of efforts to cut down o\u2026 [+2332 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Makaton helps autistic boy Alex, 6, to communicate",
    description:
      "Alex used to become frustrated at not being able to communicate.",
    url: "https://www.bbc.co.uk/news/uk-wales-61321731",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/2D01/production/_124412511_de53.jpg",
    publishedAt: "2022-05-04T21:54:00Z",
    content:
      "By Chris DeardenBBC Wales News\r\nImage caption, Alex used to get frustrated at not being able to communicate when he was younger\r\nA language system made famous by children's TV presenter Mr Tumble has\u2026 [+3075 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Elections 2022: Polls to open in Welsh council elections",
    description:
      "Candidates are standing for election in 1,160 seats across Wales, with results due on Friday.",
    url: "https://www.bbc.co.uk/news/uk-wales-politics-61320504",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15181/production/_124410468_gettyimages-693730326.jpg",
    publishedAt: "2022-05-04T21:53:21Z",
    content:
      "Media caption, BBC Wales reporter James Williams looks ahead to this year's council elections\r\nPolls will open on Thursday morning to elect councillors for Wales' 22 local authorities.\r\nA total of 1,\u2026 [+1859 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Birmingham's fall from Women's Super League high-flyers to relegation",
    description:
      "Birmingham City were one of the founding members of the WSL so how have they fallen to the second tier?",
    url: "https://www.bbc.co.uk/sport/football/61323182",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/43C8/production/_124425371_gettyimages-1395398959.jpg",
    publishedAt: "2022-05-04T21:51:49Z",
    content:
      "Birmingham City suffered relegation with one game remaining\r\nBirmingham City were one of the founding members of the Women's Super League and have been in the division for 11 years but they will be c\u2026 [+5223 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Ukraine: Azovstal bombardment resumes",
    description:
      "A day after over a hundred people were evacuated, Ukrainian officials say Russian forces have launched an all-out assault on the Azovstal steelworks - the last Ukrainian holdout in the occupied city of Mariupol.\n\nAlso on the programme, the European Commission\u2026",
    url: "https://www.bbc.co.uk/programmes/w172yfby1xmnjm6",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p0c4xkkt.jpg",
    publishedAt: "2022-05-04T21:28:00Z",
    content:
      "A day after over a hundred people were evacuated, Ukrainian officials say Russian forces have launched an all-out assault on the Azovstal steelworks - the last Ukrainian holdout in the occupied city \u2026 [+349 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "NI Protocol override law 'not part of Queen's Speech'",
    description:
      "A move against the Brexit deal is unlikely to feature in the speech, a government source tells the BBC.",
    url: "https://www.bbc.co.uk/news/uk-northern-ireland-61328908",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1585D/production/_115975188_gettyimages-1229980892.jpg",
    publishedAt: "2022-05-04T21:27:38Z",
    content:
      "Image source, Getty Images\r\nImage caption, The protocol creates a new trade border between Northern Ireland and the rest of the UK\r\nA specific piece of legislation relating to the Northern Ireland Pr\u2026 [+1348 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/04 21:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvl3f1",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-04T21:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Anger outside Mississippi's last abortion clinic",
    description:
      "Activists from both sides of the debate say they will fight on whatever the US Supreme Court rules.",
    url: "https://www.bbc.co.uk/news/world-us-canada-61327082",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/D446/production/_124424345_gettyimages-1234986595.jpg",
    publishedAt: "2022-05-04T21:02:45Z",
    content:
      'By Sophie Long and Sam CabralBBC News, Mississippi\r\nImage source, Getty Images\r\n"That was the murderer, that was the abortionist." That\'s how a doctor arriving at the last abortion clinic in Mississi\u2026 [+2513 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "WSL highlights - Arsenal beat Tottenham to extend title race to final day",
    description:
      "The Women's Super League title will be decided on the final day of the season after Arsenal's victory over rivals Tottenham at the Emirates Stadium.",
    url: "https://www.bbc.co.uk/sport/av/football/61328640",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/14FB6/production/_124424958_p0c4y903.jpg",
    publishedAt: "2022-05-04T20:55:45Z",
    content:
      "The Women's Super League title will be decided on the final day of the season after Arsenal's victory over rivals Tottenham at the Emirates Stadium ensured they remained in contention.\r\nBeth Mead's g\u2026 [+129 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Depp 'slapped me across the face' over Wino tattoo",
    description:
      "Amber Heard says in court the first time she was 'abused' by Depp was when she asked about his Wino tattoo.",
    url: "https://www.bbc.co.uk/news/av/world-us-canada-61324265",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/71E0/production/_124425192_p0c4xypp.jpg",
    publishedAt: "2022-05-04T20:12:25Z",
    content:
      'Amber Heard testified in court the first time she was "abused" by ex-husband Johnny Depp was when she asked about his Wino tattoo.\r\n"I knew you can\'t come back from that, I\'m not dumb," Heard said.',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Proposals put forward by report to cut one Welsh professional region",
    description:
      "A report into Welsh rugby proposes cutting one professional region from the start of the 2023-24 season.",
    url: "https://www.bbc.co.uk/sport/rugby-union/61325542",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13076/production/_124424977_urc_wales_launch_39-2.jpg",
    publishedAt: "2022-05-04T20:11:24Z",
    content:
      "Players from four Welsh regions at the launch of the United Rugby Championship at the Principality Stadium\r\nA report into Welsh rugby has proposed cutting one Welsh professional region from the start\u2026 [+3511 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/04 20:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvkznx",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-04T20:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Manchester City 6-0 Birmingham City: Birmingham relegated as City move to third",
    description:
      "Birmingham City are relegated from the Women's Super League after a crushing defeat by Manchester City, who move back up to third place.",
    url: "https://www.bbc.co.uk/sport/football/60810509",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1734C/production/_124425059_c6609f7def29774d4cd24325683efa5908bec917.jpg",
    publishedAt: "2022-05-04T20:01:34Z",
    content:
      "Only Chelsea have won more WSL points (32) than Manchester City (28) in 2022, while Birmingham have picked up the fewest points (seven)\r\nBirmingham City were relegated from the Women's Super League a\u2026 [+4951 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "TurboTax agrees to pay after 'misleading' low income US taxpayers",
    description:
      "Intuit, the owner of TurboTax, will pay $141m (\u00a3113m) over ads targeted to low-income Americans.",
    url: "https://www.bbc.co.uk/news/world-us-canada-61328118",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15E8E/production/_124424798_gettyimages-507814528.jpg",
    publishedAt: "2022-05-04T19:51:21Z",
    content:
      "Image source, Getty Images\r\nMillions of Americans receiving tax rebates from the government this tax filing season can expect a cheque this year from their tax preparer as well.\r\nIntuit, the Californ\u2026 [+2275 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "Lakeside shopping centre stabbing: Man charged with murder",
    description:
      "A man is charged with murder and a woman with assisting an offender.",
    url: "https://www.bbc.co.uk/news/uk-england-essex-61325600",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/59EE/production/_124422032_2.66702582.jpg",
    publishedAt: "2022-05-04T19:45:07Z",
    content:
      'Image source, Ugwa family\r\nImage caption, Michael Ugwa was an inspiration to his three children, his mother said\r\nA man has been charged with the murder of a "loving and supportive" father-of-three a\u2026 [+1243 chars]',
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Champions League: Real Madrid v Man City - rate the players",
    description:
      "Give your player ratings out of 10 for Manchester City against Real Madrid in the Champions League semi-final second leg at the Bernabeu.",
    url: "https://www.bbc.co.uk/sport/football/61328476",
    urlToImage:
      "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1404B/production/_100959918_playerrater_indexpromo.png",
    publishedAt: "2022-05-04T19:24:53Z",
    content:
      "How to get into football - the most popular sport in the world, with clubs and facilities throughout the UK.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title:
      "Arsenal v Tottenham: Beth Mead gives Gunners lead in crucial WSL derby",
    description:
      "Beth Mead gives Arsenal the lead in a crucial Women's Super League derby against Tottenham, with a draw or a win for the Gunners taking the title race to the final day.",
    url: "https://www.bbc.co.uk/sport/av/football/61325386",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/10196/production/_124424956_p0c4xf39.jpg",
    publishedAt: "2022-05-04T19:22:12Z",
    content:
      "Beth Mead gives Arsenal the lead in their crucial Women's Super League derby against Tottenham, with a draw or a win for the Gunners taking the title race to the final day.\r\nArsenal went into the gam\u2026 [+56 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: "https://www.facebook.com/bbcnews",
    title: "St Paul's stabbing victim named by police",
    description:
      "Emmanuel Odunlami, 32, was found fatally injured on a street near the famous cathedral on Sunday night.",
    url: "https://www.bbc.co.uk/news/uk-england-london-61325602",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1174/production/_124386440_mediaitem124350547.jpg",
    publishedAt: "2022-05-04T19:10:21Z",
    content:
      "Image caption, The man was found fatally injured on a street near the famous cathedral on Sunday night\r\nA man who died after being found stabbed near London's St Paul's Cathedral has been identified \u2026 [+523 chars]",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "2022/05/04 19:00 GMT",
    description: "The latest five minute news bulletin from BBC World Service.",
    url: "https://www.bbc.co.uk/programmes/w172ykq0yqvkvxs",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/1200x675/p060dh18.jpg",
    publishedAt: "2022-05-04T19:06:00Z",
    content: "The latest five minute news bulletin from BBC World Service.",
  },
  {
    source: { id: "bbc-news", name: "BBC News" },
    author: null,
    title: "Flooding submerges Valencia after record-breaking rainfall",
    description:
      "Over 200 litres of rain fell on the eastern Spanish city in a 24-hour period, inundating the region.",
    url: "https://www.bbc.co.uk/news/av/world-europe-61325769",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/13134/production/_124423187_p0c4x461.jpg",
    publishedAt: "2022-05-04T18:34:53Z",
    content:
      "Record-breaking rainfall has flooded parts of Spain's east coast.\r\nValencia's roads and public transport were closed, a team of ambulance workers had to be rescued from their vehicles.\r\nMore than 200\u2026 [+236 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tyler O'Neil",
    title:
      "GOP Senate candidate Kathy Barnette reveals she was product of rape in Pennsylvania debate",
    description:
      "Pennsylvania Republicans vied to demonstrate their pro-life credentials in a pivotal debate Wednesday. Kathy Barnette, an Army veteran and author, revealed that she was conceived in rape and dared Dr. Mehmet Oz \u2013 whom former President Trump endorsed and who i\u2026",
    url: "https://www.foxnews.com/politics/gop-senate-candidate-reveals-product-of-rape-debate",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/pa-debate-GOP-5.5.22.jpg",
    publishedAt: "2022-05-05T09:59:23Z",
    content:
      "Pennsylvania Republicans vied to demonstrate their pro-life credentials in a pivotal debate Wednesday, two weeks out from the state's U.S. Senate GOP primary and two days after an unprecedented Supre\u2026 [+6258 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lorraine Taylor",
    title:
      "Wisconsin man on trial for allegedly killing his own grandson with a sledgehammer",
    description:
      "A Wisconsin grandfather is on trial for allegedly beating his 12-year-old grandson to death with a sledgehammer after he claims the child stole money from him.",
    url: "https://www.foxnews.com/us/wisconsin-man-trial-killing-grandson-sledgehammer",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Andre-Smith-Go-Fund-Me.png",
    publishedAt: "2022-05-05T09:51:53Z",
    content:
      "The trial for a Wisconsin grandfather accused of beating his own grandson to death with a sledgehammer got underway in Milwaukee on Wednesday.\r\nEmotions ran high in the courtroom as several witnesses\u2026 [+1478 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Michael Ruiz",
    title:
      "Alabama corrections officer had escape 'methodically' planned: body language expert",
    description:
      "Vicky White allegedly walked out of the Lauderdale County Detention Center last week \u201cwith no care in the world\u201d as accused killer Casey Cole White followed her into her marked police vehicle.",
    url: "https://www.foxnews.com/us/alabama-corrections-vicky-white-planned-escape-body-language-expert",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/vlcsnap-2022-05-03-19h17m30s228.png",
    publishedAt: "2022-05-05T09:40:43Z",
    content:
      'Vicky White allegedly walked out of the Lauderdale County Detention Center last week "with no care in the world" as accused killer Casey Cole White followed her into her marked police vehicle.\r\nThe t\u2026 [+6552 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Rebecca Kleefisch",
    title: "If you want to stop crime, first stop liberal crime policies",
    description:
      "Last weekend, Wisconsinites watching the nightly news saw a story that\u2019s become all too common in our state\u2019s largest city: 20 were people shot in Milwaukee over the course of 18 shootings. Three were killed, including a 13-year-old girl.",
    url: "https://www.foxnews.com/opinion/crime-liberal-policies-wisconsin-rebecca-kleefisch",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/12/12.9.jpg",
    publishedAt: "2022-05-05T09:00:56Z",
    content:
      "Last weekend, Wisconsinites watching the nightly news saw a story thats become all too common in our states largest city: 20 were people shot in Milwaukee over the course of 18 shootings. Three were \u2026 [+3477 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Joseph Wulfsohn",
    title:
      "Progressive 'Young Turks' host says she's 'done' with Democrats, including the Squad: 'Disgusting, feckless'",
    description:
      "The outspoken progressive YouTube star expressed outrage over the Democrats' inaction on protecting abortion rights.",
    url: "https://www.foxnews.com/media/the-young-turks-ana-kasparian-done-with-democrats",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Screen-Shot-2022-05-04-at-8.28.11-PM.png",
    publishedAt: "2022-05-05T09:00:32Z",
    content:
      'One of the stars of the progressive digital outlet "The Young Turks" expressed outrage towards the Democrats over their inaction on protecting abortion rights as the Supreme Court has signaled it wou\u2026 [+4617 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "William Sanchez",
    title: "Could Supreme Court Leak Boost Democrats Ahead of Midterms?",
    description:
      "Protests and debates have sparked across the country after the leak of a draft opinion from the Supreme Court revealed Roe v. Wade could soon be overturned. Some Democrats have called for crafting legislation to codify abortion rights at the federal level, ye\u2026",
    url: "https://radio.foxnews.com/2022/05/05/the-fox-news-rundown-5-5-2022/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2020/05/Rundown-Featured-Image-NEW.png",
    publishedAt: "2022-05-05T09:00:29Z",
    content:
      "Protests and debates have sparked across the country after the leak of a draft opinion from the Supreme Court revealed Roe v. Wade could soon be overturned. Some Democrats have called for crafting le\u2026 [+1407 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Howard Kurtz",
    title:
      "Looking for the leaker: What was the ideological motivation for providing the Roe v. Wade reversal draft?",
    description:
      "The Supreme Court is a cathedral of secrecy, but justices have to be able to exchange views, trade notes and cobble together a consensus in an atmosphere of confidentiality. This explains why the Roe v. Wade abortion leak happened, and why it's so devastating.",
    url: "https://www.foxnews.com/media/looking-leaker-what-was-ideological-motivation-providing-roe-draft",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Supreme-Court.jpg",
    publishedAt: "2022-05-05T07:11:47Z",
    content:
      "Its the biggest media mystery since Deep Throat was meeting Bob Woodward in a dimly lit parking garage.\r\nWho is the Supreme Court leaker?\r\nEveryones got a theory, and nobody knows who handed Politico\u2026 [+5322 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Brie Stimson",
    title:
      "Murdered Chicago teen texted fears her father would 'kill' her days before death, court documents reveal",
    description:
      'New court documents reveal a murdered teenager was afraid her father was going to "beat" and "kill" her just days before her death. Her father is now charged with her murder.',
    url: "https://www.foxnews.com/us/slain-chicago-teen-texted-fears-father-beat-kill-her-death-court-documents-reveal",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/BeFunky-collage.jpg",
    publishedAt: "2022-05-05T07:09:39Z",
    content:
      'A 17-year-old Chicago-area teenager who was found dead in her home on Sunday said she was afraid her father was going to "beat" her and "kill" her in the days before her death, new court documents re\u2026 [+2913 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Laura Ingraham rips the Democratic Party for becoming 'abortion fanatics'",
    description:
      "'The Ingraham Angle' host Laura Ingraham told viewers that the Left has nothing to offer women but more pot, more porn, and more abortions.",
    url: "https://www.foxnews.com/media/laura-ingraham-rips-the-democratic-party-abortion",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9e792b9d-d25a-48c7-978e-07f282b44c88/1d16ecb1-6067-4ef0-b3d5-9a05ac68708a/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T06:19:55Z",
    content:
      "The Ingraham Angle host Laura Ingraham blasted the Democratic Party's fearmongering over the Supreme Court's leaked draft decision that would overturn Roe v. Wade.\r\nLAURA INGRAHAM:Now, back in the se\u2026 [+2433 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Julius Young",
    title:
      "Dave Chappelle\u2019s attack a catalyst of Will Smith smacking Chris Rock at 2022 Oscars, comedy club owners claim",
    description:
      'Comedians and stage performers are even more on edge after alleged suspect Isaiah Lee -- carrying a replica gun fitted with a folding knife blade -- attacked Dave Chappelle during his performance at the "Netflix Is A Joke: The Festival" comedy tour at the fam\u2026',
    url: "https://www.foxnews.com/entertainment/dave-chappelle-attack-will-smith-smacking-chris-rock-2022-oscars-comedy-club",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Dave-Chappelle-at-Dior-Homme_Getty.jpg",
    publishedAt: "2022-05-05T06:07:50Z",
    content:
      'After Dave Chappelle was attacked during his gig at the "Netflix Is A Joke" Festival Tuesday evening, local comedy club owners are telling the comic community not only do they "stand by" Chappelle, b\u2026 [+12390 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Ryan Gaydos",
    title:
      "Kevin Millar says Red Sox fans singing 'Sweet Caroline' one of best traditions in sports: 'Nothing better'",
    description:
      'Kevin Millar told Fox News Digital in a recent interview the singing of "Sweet Caroline" at Fenway Park is one of the best traditions in sports.',
    url: "https://www.foxnews.com/sports/kevin-millar-red-sox-fans-sweet-caroline-best-traditions",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Kevin-Millar2.jpg",
    publishedAt: "2022-05-05T06:02:44Z",
    content:
      'Kevin Millar played an integral part in helping the Boston Red Sox break the "Curse of the Bambino" in 2004, coming back from 3-0 to defeat the New York Yankees in the American League Championship Se\u2026 [+4299 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Greg Gutfeld",
    title: "Greg Gutfeld: 'Health' is a trick to make your rights disappear",
    description:
      'Greg Gutfeld discusses how public health is being abused to curtail people\'s rights on "Gutfeld!"',
    url: "https://www.foxnews.com/opinion/greg-gutfeld-health-is-a-trick-to-make-your-rights-disappear",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/253cbd3d-8a4a-44d6-a5a9-1cb0c564019d/eac5d7bf-3f55-4088-85f4-7d0f3c43d68e/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T06:02:09Z",
    content:
      "So here's some fun news. And by fun, I mean awful.\u00a0\r\nDid you know that the CDC bought location data taken from tens of millions of U.S. phones in order to check compliance with curfews and tracked pe\u2026 [+5741 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Stephanie Pagones",
    title:
      "NYPD overtime projected to surpass allotted budget by $142M+ in 2022 amid 'unprecedented' crime climate",
    description:
      "The New York Police Department has blown through $564.2 million in its overtime budget, and is projected to spend $750 million in overtime in all of fiscal year 2022 \u2013 far beyond the $607.3 million allocated for the year, according to the city\u2019s Independent B\u2026",
    url: "https://www.foxnews.com/us/nypd-overtime-budgeted-crime-policing-experts",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/GettyImages-1393634563.jpg",
    publishedAt: "2022-05-05T06:00:52Z",
    content:
      "The New York Police Department has blown through $564.2 million in its overtime budget, and is projected to spend $750 million in overtime in all of fiscal year 2022 far beyond the $607.3 million all\u2026 [+9391 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tony Kinnett",
    title:
      "I was a teacher and I know firsthand progressive policies in the classroom have failed",
    description:
      "After teaching in elementary, middle, and high school science classes, and directing the science teachers and curriculum for a 35,000 student district, I\u2019ve concluded that our modern methods of managing student behavior are an abysmal failure.",
    url: "https://www.foxnews.com/opinion/teacher-progressive-policies-classroom-tony-kinnett",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/12/Classroom-iStock.jpg",
    publishedAt: "2022-05-05T06:00:33Z",
    content:
      "After teaching in elementary, middle, and high school science classes, and directing the science teachers and curriculum for a 35,000 student district, Ive concluded that our modern methods of managi\u2026 [+5947 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Deirdre Reilly",
    title:
      "Online worship here to stay? Seattle-area pastor notes today's 'radical shift'",
    description:
      'Ahead of the National Day of Prayer 2022, Fox News Digital spoke to a Seattle-area pastor about the rise of online faith resources today \u2014 and how "millions" of people are now reached "through all types of online content."',
    url: "https://www.foxnews.com/lifestyle/online-worship-seattle-area-pastor-radical-shift",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/0708-prayer.jpg",
    publishedAt: "2022-05-05T06:00:05Z",
    content:
      "Thursday, May 5, 2022, is the National Day of Prayer, a day typically observed on the first Thursday in May in the U.S.\u00a0\r\nLast year, the National Day of Prayer went virtual because of the coronavirus\u2026 [+7524 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Nikolas Lanum",
    title:
      "Roe v Wade leak: Liberal media cast doubt on \u2018legitimacy\u2019 of Supreme Court, government",
    description:
      "Members of the liberal media floated the idea that the Supreme Court and U.S. government could be 'illegitimate' following the leaked opinion draft of Roe v Wade.",
    url: "https://www.foxnews.com/media/roe-v-wade-leak-liberal-media-legitimacy-supreme-court",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/colbert-scarborough-stern-scotus.png",
    publishedAt: "2022-05-05T06:00:04Z",
    content:
      "A number of liberal media members repeatedly cast doubt on the legitimacy of the Supreme Court and at-large the U.S. government after a leaked opinion draft revealed the high court may soon strike do\u2026 [+3428 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tyler O'Neil",
    title:
      "Massive fence erected around Supreme Court building in wake of leaked Alito abortion draft opinion",
    description:
      "Workers erected a large fence around the U.S. Supreme Court building late Wednesday night, two days after Politico published a leaked draft opinion striking down the abortion precedent Roe v. Wade (1973).",
    url: "https://www.foxnews.com/politics/massive-fence-supreme-court-abortion-draft",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/1scotus-fencing-stalled-5.5.22.jpg",
    publishedAt: "2022-05-05T05:56:17Z",
    content:
      "Workers erected a large fence around the U.S. Supreme Court building late Wednesday night, two days after Politico published a leaked draft opinion striking down the abortion precedent Roe v. Wade (1\u2026 [+3573 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tyler O'Neil",
    title:
      "IG mulls probe into whether FBI retaliated against agents who attended Jan. 6 rally at the Capitol",
    description:
      "Michael Horowitz, the inspector general of the Department of Justice, told Rep. Jim Jordan, R-Ohio, that he would consider launching an investigation into whether the FBI retaliated against agents who attended the Jan. 6, 2021, protest at the U.S. Capitol but\u2026",
    url: "https://www.foxnews.com/politics/ig-probe-fbi-retaliated-jan-6-capitol-protest",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/Horowitz.jpg",
    publishedAt: "2022-05-05T05:23:46Z",
    content:
      "FIRST ON FOX Michael Horowitz, the inspector general of the Department of Justice, told Rep. Jim Jordan, R-Ohio, that he would consider launching an investigation into whether the FBI retaliated agai\u2026 [+3120 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Piers Morgan: Cancel culture is a form of the fascism that woke liberals 'say they hate most in life'",
    description:
      'Fox Nation host Piers Morgan discussed cancel culture and free speech Wednesday on "Hannity."',
    url: "https://www.foxnews.com/media/piers-morgan-cancel-culture-form-fascism-woke-liberals-hate-life",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/c8046bd8-af82-4106-8129-4edf8d1ff0b8/320ed347-86f7-4178-8731-7b304b0896dd/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T04:29:57Z",
    content:
      "Fox Nation host Piers Morgan exposed the woke left's hypocritical approach to free speech Wednesday on \"Hannity.\"\r\nMORGAN: This new cancel culture is in a way, it's a form of the very fascism that th\u2026 [+1227 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Brie Stimson",
    title:
      "Former 'General Hospital' star separating from wife: 'The child is not mine'",
    description:
      'Former "General Hospital" star Steve Burton announced that he and his wife have separated. He claims Sheree Gustin, his wife of more than 20 years, is pregnant with another man\'s baby.',
    url: "https://www.foxnews.com/entertainment/general-hospital-star-separating-wife-child-not-mine",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/sheree-burton.jpg",
    publishedAt: "2022-05-05T04:12:15Z",
    content:
      'Former "General Hospital" actor Steve Burton announced Wednesday he is separated from his wife of more than 20 years because she is pregnant with another mans baby.\u00a0\r\n"I wanted to clear something up.\u2026 [+1684 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Tulsi Gabbard torches President Biden for 'essentially' calling millions of Americans 'terrorists",
    description:
      "Former Hawaii congresswoman Tulsi Gabbard weighed in on President Biden slamming the 'MAGA crowd' on 'Hannity.'",
    url: "https://www.foxnews.com/media/tulsi-gabbard-torches-president-biden-maga-crowd",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/234ff198-1756-4069-b2a3-2ea58b0ad332/029210c5-6e03-4bb5-af9a-a481b7af5503/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T04:10:48Z",
    content:
      "Former congresswoman Tulsi Gabbard slammed President Biden for saying 'MAGA crowd' is 'most extreme political organization that's existed' in recent American history on \"Hannity.\"\r\nTULSI GABBARD: Whe\u2026 [+1068 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Bret Baier presses Tim Ryan on late term abortions: 'You got to leave it up to the woman'",
    description:
      'Democratic Senate nominee Tim Ryan, D-Ohio, talks about his stance on abortion restrictions and if he wants Biden on the campaign trail on "Special Report."',
    url: "https://www.foxnews.com/media/bret-baier-presses-tim-ryan-on-late-term-abortions-you-got-to-leave-it-up-to-the-woman",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/8ee5db16-9eb3-495c-8b3d-ffef5caa2e90/2ab8c553-fcea-4d5e-93b3-8a059848a2e9/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T03:54:54Z",
    content:
      'Democratic Senate nominee Tim Ryan, D-Ohio, talks about his stance on abortion restrictions and if he wants Biden on the campaign trail on "Special Report."\r\nTIM RYAN:Look, I think what we had establ\u2026 [+975 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Gary Gastelu",
    title: "Matt Kenseth voted into 2023 NASCAR Hall of Fame",
    description:
      "Matt Kenseth, Kirk Shelmerdine and Herschel McGriff were voted into the 2023 class of the NASCAR Hall of Fame.",
    url: "https://www.foxnews.com/auto/matt-kenseth-voted-2023-nascar-hall-of-fame",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/d2ddbb8b-kenseth.jpg",
    publishedAt: "2022-05-05T03:38:13Z",
    content:
      "Matt Kenseth has been voted into the 2023 class of the NASCAR hall of fame on his first ballot. The 2003 Cup Series champion won 39 races over a career that spanned 22 seasons.\r\nMatt Kenseth won 39 w\u2026 [+1350 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lorraine Taylor",
    title:
      "Ohio man arrested after shooting Texas officer, standoff with police",
    description:
      "An Ohio man was arrested for shooting a police officer in Texas and causing a standoff with police. The Brady Police Department said officers were called to a home after reports of a disturbance. When they arrived, the suspect, Decoda Blake, 35, opened fire h\u2026",
    url: "https://www.foxnews.com/us/ohio-man-arrested-shooting-texas-officer",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/New-Cropped-Decoda-Blake-Mug.png",
    publishedAt: "2022-05-05T03:36:49Z",
    content:
      "A Defiance, Ohio, man was arrested Tuesday in Texas after shooting a police officer and causing a standoff with police.\r\nThe Brady Police Department said officers were called to a home after reports \u2026 [+741 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Hannity rips Joe Biden for calling 76 million Americans 'the most extreme political faction in history'",
    description:
      "Sean Hannity discusses how Democrats are using abortion to demonize Republicans and to further themselves politically on 'Hannity.'",
    url: "https://www.foxnews.com/media/hannity-joe-biden-calling-76-million-americans-the-most-extreme-political-faction-in-history",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/4264c071-c059-4681-8bd3-27171e8f4252/7300688d-fed7-41b0-9a43-f66269d3350b/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T03:19:32Z",
    content:
      "Sean Hannity discusses how Biden verbally attacked Trump supporters, calling them the most extreme political faction in history and how Democrats are using the issue of abortion as a political weapon\u2026 [+2630 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Hunter Biden's laptop shop former owner details 'collateral damage' of alleged smear campaign against him",
    description:
      'Hunter Biden\u2019s laptop shop former owner John Paul Mac Isaac recounted the left\'s attacks on him Wednesday on "Tucker Carlson Tonight."',
    url: "https://www.foxnews.com/media/hunter-bidens-laptop-shop-former-owner-collateral-damage-smear-campaign",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/8dcc2b4f-2d49-4b1e-874a-3144013d5471/63182704-5d92-490e-b434-f8a1a5658196/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T02:57:17Z",
    content:
      'John Paul Mac Isaac, the former owner of the shop that serviced Hunter Bidens laptop, told "Tucker Carlson Tonight" Wednesday how his life and business were upended as a result of the scandal surroun\u2026 [+893 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tucker Carlson",
    title: "Tucker: Why is everyone so mad at Justice Alito?",
    description:
      "Fox News host Tucker Carlson gives his take on the Supreme Court document leak suggesting the overturn of Roe v. Wade on 'Tucker Carlson Tonight.'",
    url: "https://www.foxnews.com/opinion/tucker-why-is-everyone-mad-justice-alito",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/22e1a899-7497-4f05-8b01-c40d42ef3826/271e1f4d-2d2b-4ddd-803c-dc0e006e2d17/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T02:42:52Z",
    content:
      "It's hard to think of a topic in American life that's more divisive than abortion. Abortion is in the news today, obviously, but most Americans, no matter where they stand on it or how passionately t\u2026 [+16368 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title:
      "Dave Chappelle seen for first time after being attacked on stage at Hollywood Bowl",
    description:
      "Comedian Dave Chappelle was seen for the first time after he was attacked while performing on stage at the Hollywood Bowl in Los Angeles on Tuesday.",
    url: "https://www.foxnews.com/entertainment/dave-chappelle-attack-hollywood-bowl-seen-first-time",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-100.png",
    publishedAt: "2022-05-05T02:19:45Z",
    content:
      "Comedian Dave Chappelle was seen for the first time after he was attacked while performing on stage at the Hollywood Bowl in Los Angeles on Tuesday night.\u00a0\r\nChappelle was attacked during a show at th\u2026 [+2364 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Kilmeade: This is the left's warning, 'Do as we say or we'll burn down your country'",
    description:
      "Fox News host Brian Kilmeade described the left's warning as protests erupted following a Supreme Court leaked opinion on 'Jesse Watters Primetime.'",
    url: "https://www.foxnews.com/media/kilmeade-lefts-warning-protests-leaked-supreme-court-opinion",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/96f736a8-cb2f-4779-99d4-18698876f36f/86f9ecd0-351f-4e60-824b-4022f6cb4826/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T02:08:27Z",
    content:
      "Fox News host Brian Kilmeade detailed the left's night of violence following a leaked Supreme Court draft opinion suggesting the court may be planning to overturn Roe v. Wade on \"Jesse Watters Primet\u2026 [+1615 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title:
      "Los Angeles DA George Gascon recall group has 400K signatures; starting to see \u2018real light\u2019 at end of tunnel",
    description:
      "Organizers with a group trying to recall Los Angeles County District Attorney George Gascon said they have collected a good chunk of the signatures required to bring the matter to voters.",
    url: "https://www.foxnews.com/us/los-angeles-george-gascon-recall",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/BeFunky-collage-21.jpg",
    publishedAt: "2022-05-05T01:59:42Z",
    content:
      "FIRST ON FOX: Organizers with a group trying to recall Los Angeles County District Attorney George Gascon said it has collected a good chunk of the signatures required to bring the matter to voters.\u00a0\u2026 [+2330 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Janelle Ash",
    title:
      "What to know about late \u2018Toddlers and Tiaras\u2019 star Kailia Posey: 'She will be remembered for her sweet spirit'",
    description:
      'Kailia Posey was most famously known for her time on the TLC favorite "Toddlers and Tiaras." The pageant star tragically died at 16-years-old.',
    url: "https://www.foxnews.com/entertainment/what-to-know-late-toddler-and-tiaras-star-kailia-posey",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Kailia_Posey_Facebook.jpg",
    publishedAt: "2022-05-05T01:57:10Z",
    content:
      "Editor's note: This story discusses suicide. If you or someone you know is having thoughts of suicide, please contact the National Suicide Prevention Lifeline at\u00a01-800-273-TALK\u00a0(8255).\r\n\"Toddlers and\u2026 [+4503 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lindsay Kornick",
    title:
      "MSNBC boosts an 'abortion underground' if Roe v. Wade is overturned",
    description:
      "Author Jessica Bruder supported an underground system of illegal abortions for a post-Roe v. Wade society.",
    url: "https://www.foxnews.com/media/msnbc-boosts-abortion-underground-roe-v-wade",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Abortion-Protests.jpg",
    publishedAt: "2022-05-05T01:55:53Z",
    content:
      'Author Jessica Bruder appeared to promote do-it-yourself abortions and smuggling abortion pills when appearing on MSNBCs "The ReidOut" on Wednesday.\r\nBruder previously published a piece for The Atlan\u2026 [+3503 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Bradford Betz",
    title:
      "Texas Rep. Shelby Slawson, author of \u2018Heartbeat Bill,\u2019 reacts to leaked SCOTUS Roe opinion",
    description:
      "A Texas lawmaker who authored the state\u2019s \u201cheartbeat bill\u201d weighed in on the leaked Supreme Court draft opinion that would overturn Roe v. Wade, saying such an impactful would rightfully return the debate to the state level.",
    url: "https://www.foxnews.com/politics/texas-rep-shelby-slawson-author-heartbeat-bill-reacts-leaked-scotus-roe-opinion",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Shelby-Slawson.jpg",
    publishedAt: "2022-05-05T01:50:35Z",
    content:
      'A Texas lawmaker who authored the states "heartbeat bill" weighed in on the leaked Supreme Court draft opinion that would overturn Roe v. Wade, saying such an impactful would, in her opinion, rightfu\u2026 [+2865 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Kristine Parks",
    title:
      "WaPo's Rubin frets if Supreme Court overturns Roe, it will be 'state-enforced theocracy\u2019",
    description:
      "Washington Post columnist Jennifer Rubin claimed on Wednesday that if Roe v. Wade was overturned by the Supreme Court, Americans would be subject to \u2018state-enforced theocracy.'",
    url: "https://www.foxnews.com/media/wapos-rubin-says-supreme-court-overturns-roe-will-be-state-enforced-theocracy",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Supreme-Court-Public-Charge.jpg",
    publishedAt: "2022-05-05T01:40:55Z",
    content:
      'Washington Post opinion columnist Jennifer Rubin raged against Republicans and the Supreme Court in her Wednesday column, calling the potential end of Roe v. Wade, the beginning of "state-enforced th\u2026 [+2705 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title: "Texas man catches 9.5-foot tiger shark with the help of a drone",
    description:
      "A San Antonio man used a drone in his battle against a 9.5-foot tiger shark over the weekend in Port Aransas, a Texas beach town about 20 miles east of Corpus Christi.",
    url: "https://www.foxnews.com/us/texas-man-catches-9-5-foot-tiger-shark-drone",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/shark-thumb16.jpg",
    publishedAt: "2022-05-05T01:38:34Z",
    content:
      "A San Antonio man used a drone in his battle against a 9.5-foot tiger shark over the weekend in Port Aransas, a Texas beach town about 20 miles east of Corpus Christi.\u00a0\r\nMichael Ploch told My San Ant\u2026 [+910 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title: "Texas man slashed with machete runs into taco shop for help",
    description:
      "A man in Texas was attacked with a machete Wednesday and walked into a taco shop for help before being taken to a hospital.",
    url: "https://www.foxnews.com/us/texas-machete-attack-taco-shop",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/San-Antonio-machete-attack.jpg",
    publishedAt: "2022-05-05T01:34:21Z",
    content:
      "A man in Texas was attacked with a machete Wednesday and walked into a taco shop for help before being taken to a hospital.\u00a0\r\nThe attack occurred just before 1 p.m. near downtown San Antonio in the 1\u2026 [+964 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Joseph Wulfsohn",
    title:
      "NBC's Lester Holt suggests 'free will' is partly to blame for the 1 million COVID deaths",
    description:
      'The "NBC Nightly News" anchor offered a somber monologue about the deadly milestone.',
    url: "https://www.foxnews.com/media/nbc-lester-holt-free-will-covid-deaths",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/Lester-Holt-Nightly-News-1.jpg",
    publishedAt: "2022-05-05T01:31:01Z",
    content:
      '"NBC Nightly News" anchor Lester Holt closed his newscast on Wednesday with a somber monologue about the 1 million COVID death milestone that was just reached in the U.S., but suggested that "free wi\u2026 [+2141 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Janelle Ash",
    title:
      "Comedians react to attack against Dave Chappelle at Hollywood Bowl: 'Joking now has no safety net'",
    description:
      "Comedians are speaking out to share their thoughts on Dave Chappelle being attacked while performing onstage at the Hollywood Bowl Tuesday night.",
    url: "https://www.foxnews.com/entertainment/comedians-react-attack-against-dave-chappelle",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/dave-chappelle.jpg",
    publishedAt: "2022-05-05T01:08:57Z",
    content:
      'Comedians are weighing in on the attack against Dave Chappelle at the Hollywood Bowl Tuesday night.\u00a0\r\nChappelle was performing as part of the "Netflix Is a Joke" festival when he was attacked on stag\u2026 [+3661 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title:
      "UK summer camp placing teenagers in dorms based on preferred gender identity: Report",
    description:
      "A summer camp funded by taxpayers in the United Kingdom us is placing teenagers into housing units based on their preferred gender identity, according to The Telegraph.",
    url: "https://www.foxnews.com/world/uk-summer-camp-teenagers-dorms-preferred-gender-identity",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-68.png",
    publishedAt: "2022-05-05T01:07:03Z",
    content:
      "A summer camp funded by taxpayers in the United Kingdom is placing teenagers into housing units based on their preferred gender identity, according to The Telegraph.\r\nThe summer camp, National Citize\u2026 [+3541 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "David Aaro",
    title:
      "Yankees fan, 9, who was gifted Aaron Judge home run ball in viral moment, gets to meet his favorite slugger",
    description:
      "The young New York Yankees fan who went viral this week for his emotional reaction to a Toronto Blue Jays fan handing him an Aaron Judge home run ball was given a special treat on Wednesday.",
    url: "https://www.foxnews.com/sports/yankees-fan-gifted-aaron-judge-home-run-ball-viral-moment-meet-favorite-slugger",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/AP22124827666278-copy.jpg",
    publishedAt: "2022-05-05T01:04:16Z",
    content:
      "The young New York Yankees fan who went viral this week for his emotional reaction to a Toronto Blue Jays fan handing him an Aaron Judge home run ball was given a special treat on Wednesday.\u00a0\r\nAfter \u2026 [+2530 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Gutfeld: This Supreme Court leak was essentially a steroid for enthusiasm for Democrats",
    description:
      "'The Five' discuss how Democrats are focusing on Trump as their voter turnout falters in Ohio primary.",
    url: "https://www.foxnews.com/media/gutfeld-this-leak-was-essentially-a-steroid-for-enthusiasm",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/df34f50a-83be-42b2-a90f-d654914b0d52/fb8ed9b8-c3e6-4754-bc48-f1a7c1b9190a/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T00:58:20Z",
    content:
      'The co-hosts of "The Five" discussed JD Vance\'s victory in the Ohio GOP Senate primary after former President Trump endorsed him and how there is an apparent enthusiasm gap among Democrats.\r\nGREG GUT\u2026 [+813 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Hannah Grossman",
    title:
      "Florida teacher says she was fired after discussing pansexual identity with middle school students",
    description:
      "A former Cape Coral, Florida, school teacher says she was fired after revealing her pansexual identity to middle school students.",
    url: "https://www.foxnews.com/media/florida-teacher-says-fired-after-discussing-pansexual-identity-with-students",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/GettyImages-1239175589.jpg",
    publishedAt: "2022-05-05T00:55:52Z",
    content:
      "A former Florida art teacher said Tuesday that she was terminated after having a discussion on sexual identity and revealing she was pansexual to middle school students. \u00a0\r\n\"I'm really ashamed becaus\u2026 [+2332 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title:
      "Chicago crime crisis: UIC student found dead with gunshot wound to head a week before graduating college",
    description:
      "Chicago police investigators are looking into two separate deaths at an apartment building that occurred a day apart, which began with the killing of a University of Illinois Chicago student who was expected to graduate next week.",
    url: "https://www.foxnews.com/us/chicago-crime-crisis-uic-student-dead-gunshot-wound-college-graduation",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Kinlow.jpg",
    publishedAt: "2022-05-05T00:53:23Z",
    content:
      "Chicago police investigators are looking into two separate deaths at an apartment building that occurred a day apart, which began with the killing of a University of Illinois Chicago student who was \u2026 [+1512 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title:
      "Louisiana State Police now investigating Lyft driver's disappearance as a homicide",
    description:
      "The search for a Louisiana Lyft driver who went missing nearly two months ago has been upgraded to a homicide investigation, the Louisiana State Police said Wednesday.",
    url: "https://www.foxnews.com/us/louisiana-state-police-now-investigating-lyft-drivers-disappearance-as-a-homicide",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/ella.jpeg",
    publishedAt: "2022-05-05T00:45:12Z",
    content:
      "The search for a Louisiana Lyft driver who went missing nearly two months ago has been upgraded to a homicide investigation, the Louisiana State Police said Wednesday.\u00a0\r\nElla Goodie, 33, was last see\u2026 [+1348 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Yael Halon",
    title:
      "Cruz unleashes on 'woke little left wing twit' who leaked Supreme Court draft opinion: '12 likely suspects'",
    description:
      "Sen. Ted Cruz, R-Texas, on Wednesday speculated that the possible suspect responsible for the Supreme Court leak may be one of twelve law clerks currently employed by Democrat-appointed justices.",
    url: "https://www.foxnews.com/media/cruz-supreme-court-abortion-leak-suspect-woke-little-left-wing-twit",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/ted-cruz.jpg",
    publishedAt: "2022-05-05T00:44:03Z",
    content:
      'Sen. Ted Cruz\r\n, R-Texas, on Wednesday blamed a "woke little left-wing twit" for leaking the Supreme Courts draft of a decision on abortion, speculating that the possible suspect may be one of 12 law\u2026 [+2858 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "David Aaro",
    title:
      "Titans looked into trading for Aaron Rodgers, Deshaun Watson before draft: report",
    description:
      "The past week has certainly been eventful for the Tennessee Titans as they hope to get back in the playoffs for a fourth straight year.",
    url: "https://www.foxnews.com/sports/titans-weighed-trading-aaron-rodgers-deshaun-watson-before-draft-report",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/GettyImages-1166924934-copy.jpg",
    publishedAt: "2022-05-05T00:39:58Z",
    content:
      "The past week has certainly been eventful for the Tennessee Titans as they hope to get back in the playoffs for a fourth straight year.\u00a0\r\nLast Thursday, the Titans traded star wide receiver A.J. Brow\u2026 [+4241 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lindsay Kornick",
    title:
      "Former Planned Parenthood president echoes Biden, lambasts GOP as 'most extreme political group' in history",
    description:
      "Former Planned Parenthood president Cecile Richards attacked Republicans as an extreme political organization for supporting the overturning of Roe v. Wade.",
    url: "https://www.foxnews.com/media/planned-parenthood-biden-republicans-extreme-political",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/AP22123106169475.jpg",
    publishedAt: "2022-05-05T00:34:27Z",
    content:
      'Former Planned Parenthood president Cecile Richards criticized Republicans in light of the possible overturning of Roe v. Wade.\u00a0\r\nOn Wednesday, Richards appeared on MSNBCs "Deadline: White House" to \u2026 [+3232 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Audrey Conklin, Rebecca Rosenberg",
    title:
      "Johnny Depp v. Amber Heard: Behavioral analyst convinced 'Amber was the aggressor' in relationship",
    description:
      'Behavioral analyst Susan Constantine, who specializes in reading body language and detecting deception, says she does "not believe" Johnny Depp "was abusive with" his ex-wife, Amber Heard, based on both of their testimonies.',
    url: "https://www.foxnews.com/entertainment/johnny-depp-amber-heard-behavioral-analyst-aggressor",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/BeFunky-collage-1.jpg",
    publishedAt: "2022-05-05T00:25:04Z",
    content:
      'Behavioral analyst Susan Constantine, who specializes in reading body language and detecting deception, says she does "not believe" Johnny Depp\r\n "was abusive with" his ex-wife, Amber Heard\r\n, based \u2026 [+5731 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Mills Hayes",
    title:
      "Texas ranchers fear Title 42 rollback, struggle to find workers due to border issues",
    description:
      "Some Texas ranchers are struggling to find workers\u00a0because of fears at the border.\u00a0Title 42, a Trump-era COVID-19 border policy, is held up in federal court but could be just two weeks away from ending.",
    url: "https://www.foxnews.com/us/texas-ranchers-title-42-rollback-border-illegal-immigrants-jobs-workers",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/tx2.jpg",
    publishedAt: "2022-05-05T00:17:49Z",
    content:
      "EAGLE PASS, Texas Many people living in border communities such as Eagle Pass, Texas, are from Mexico or have family in Mexico. They\u00a0say they\u00a0feel for migrants seeking asylum but warn the pace at whi\u2026 [+3976 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Forbes Media CEO Steve Forbes predicts SCOTUS abortion decision's impact on midterm elections",
    description:
      'Fox News senior political analyst Brit Hume and Forbes Media CEO Steve Forbes touched on fundamental political issues on Wednesday\'s "Special Report" All-Star Panel.',
    url: "https://www.foxnews.com/media/forbes-media-ceo-steve-forbes-scotus-abortion-decisions-impact-midterm-elections",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/2255a3ea-6034-4ad2-a996-5be0f9f18032/64189f2a-65ff-4ece-9663-651ee6ccf785/1280x720/match/image.jpg",
    publishedAt: "2022-05-05T00:03:57Z",
    content:
      'Fox News senior political analyst Brit Hume and Forbes Media CEO Steve Forbes sounded off on inflation and abortion Wednesday on "Special Report" All-Star Panel.\r\nFORBES: And the hope of Republicans \u2026 [+1457 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title:
      "Georgia man arrested for probation violation fails to disclose he left baby in car, now faces murder charge",
    description:
      "A Georgia man has been charged with second-degree murder after allegedly leaving his 8-month-old daughter in a car for hours.",
    url: "https://www.foxnews.com/us/georgia-man-arrested-probation-violation-baby-car-murder",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-67.png",
    publishedAt: "2022-05-04T23:39:42Z",
    content:
      "A father in Georgia has been charged with second-degree murder after allegedly leaving his 8-month-old daughter in a car for hours.\r\nDavied Japez McCorry Whatley, 20, went to the Snellville Police De\u2026 [+1612 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title:
      "Sacramento DA files murder charges against 3 alleged gang members involved in April shooting that left 6 dead",
    description:
      "Three alleged gang members are now facing three counts counts of murder each for their involvement in a gunfight last month in downtown Sacramento that left six people dead and a dozen others wounded, Sacramento County District Attorney Anne Marie Schubert an\u2026",
    url: "https://www.foxnews.com/us/sacramento-da-files-murder-charges-against-3-alleged-gang-members-april-shooting-6-dead",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/Smiley-Dandrae-Martin.jpg",
    publishedAt: "2022-05-04T23:38:03Z",
    content:
      "Three alleged gang members are now facing three counts of murder each for their involvement in a gunfight last month in downtown Sacramento that left six people dead and a dozen others wounded, Sacra\u2026 [+1874 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title:
      "Los Angeles armed suspects scramble for cover after employee whips out his own gun",
    description:
      "Two suspects are wanted in connection with an armed robbery in a Los Angeles-area smoke shop that resulted in a shootout between a security guard and four others in which one person was killed, authorities said.",
    url: "https://www.foxnews.com/us/los-angeles-armed-suspects-smoke-shop-gunfight",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Compton-shootout.jpg",
    publishedAt: "2022-05-04T23:25:57Z",
    content:
      "Two suspects are wanted in connection with an armed robbery in a Los Angeles smoke shop that resulted in a shootout between a security guard and four others in which one person was killed, authoritie\u2026 [+1532 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Yael Halon",
    title:
      "Pirro on Supreme Court leak fallout: Dems have nothing going for them, will do anything to fire up their base",
    description:
      'The outrage among Democrats over the leak of a draft Supreme Court decision appearing to overturn Roe v. Wade is just another ploy to "fire up" their base with the midterm elections fast approaching, Judge Jeanine Pirro said Wednesday.',
    url: "https://www.foxnews.com/media/jeanine-pirro-supreme-leak-democrats-midterms",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/judge.jpg",
    publishedAt: "2022-05-04T23:19:35Z",
    content:
      'The outrage among Democrats over the leak of a draft Supreme Court opinion appearing to overturn Roe v. Wade is just another ploy to "fire up" their base with the midterm elections fast approaching, \u2026 [+2062 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title:
      "Chicago police bodycam footage shows fatal shooting of gunman who fired at cops during hostage situation",
    description:
      "Police body-camera footage released Tuesday shows the moment leading up to the fatal shooting of a man by Chicago police officers during a hostage situation inside an apartment building last month.",
    url: "https://www.foxnews.com/us/chicago-police-bodycam-fatal-shooting-hostage-situation",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/CPDshooting-1.jpg",
    publishedAt: "2022-05-04T23:02:30Z",
    content:
      "Police body camera footage released Tuesday shows the moment leading up to the fatal shooting of a man by Chicago police officers during a hostage situation inside an apartment building last month.\u00a0\r\u2026 [+2226 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Chad Pergram",
    title:
      "Reporter's Notebook: Supreme Court leak rattles Washington like an 'October Surprise' \u2014 in May",
    description:
      "Democrats hope to weaponize the Supreme Court's potential decision on abortion precedent in this fall\u2019s midterms",
    url: "https://www.foxnews.com/politics/reporters-notebook-supreme-court-leak-rattles-washington",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Supreme-Court-Protesters-Roe-v-Wade.jpg",
    publishedAt: "2022-05-04T22:59:55Z",
    content:
      'October arrived early in Washington.\r\nEveryone in politics is well-versed in the art of the "October Surprise," just before a consequential election in November. An October Surprise is typically a le\u2026 [+6866 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lindsay Kornick",
    title:
      "NY Times' Bret Stephens makes the 'conservative' argument for keeping Roe v. Wade",
    description:
      "New York Times columnist Bret Stephens argued that overturning Roe v. Wade should not be a \u201cconservative\u201d position.",
    url: "https://www.foxnews.com/media/nyt-bret-stephens-conservative-argument-roe-v-wade",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/AP22123112248337.jpg",
    publishedAt: "2022-05-04T22:55:32Z",
    content:
      'New York Times "conservative" columnist Bret Stephens claimed in an opinion piece on Tuesday that overturning Roe v. Wade should not be a conservative position.\r\nAfter Politico leaked a Supreme Court\u2026 [+3711 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Wyatt DobrovichFago",
    title: "Rep. Tony Gonzales (R-TX): The Biden Administration Is Deadly",
    description:
      "Listen To The Full Interview Below: Congressman Tony Gonzales (R-TX-23) joined the Guy Benson Show to talk about the dire situation at the southern border, as illegal migrants continue to enter the U.S illegally. Congressman Gonzales blasted the Biden adminis\u2026",
    url: "https://radio.foxnews.com/2022/05/04/rep-tony-gonzales-r-tx-the-biden-administration-is-deadly/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2021/06/Tony-Gonzalez.jpg",
    publishedAt: "2022-05-04T22:43:52Z",
    content:
      "Listen To The Full Interview Below:\r\nCongressman Tony Gonzales (R-TX-23) joined the Guy Benson Show to talk about the dire situation at the southern border, as illegal migrants continue to enter the \u2026 [+829 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Joseph Wulfsohn",
    title:
      "NBC's 'Today' gushes over American-turned-Chinese Olympic athlete Eileen Gu, avoids Uyghur concentration camps",
    description:
      "The Gold medalist was not asked about the ongoing genocide in China during a fawning interview.",
    url: "https://www.foxnews.com/media/nbc-today-eileen-gu-china-uyghur-concentration-camps",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Screen-Shot-2022-05-04-at-3.47.05-PM.png",
    publishedAt: "2022-05-04T22:38:05Z",
    content:
      'NBC\'s "Today" aired a glowing segment about Olympic athlete Eileen Gu, the American-born freestyle skier who made international headlines when she joined Team China in the 2022 Winter Olympics withou\u2026 [+4447 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Wyatt DobrovichFago",
    title: "Rep. Tony Gonzalez (R-TX): The Biden Administration Is Deadly",
    description:
      "Listen To The Full Interview Below: Congressman Tony Gonzalez (R-TX-23) joined the Guy Benson Show to talk about the dire situation at the southern border, as illegal migrants continue to enter the U.S illegally. Congressman Gonzalez blasted the Biden adminis\u2026",
    url: "https://radio.foxnews.com/2022/05/04/rep-tony-gonzalez-r-tx-the-biden-administration-is-deadly/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2021/06/Tony-Gonzalez.jpg",
    publishedAt: "2022-05-04T22:29:22Z",
    content:
      "Listen To The Full Interview Below:\r\nCongressman Tony Gonzalez (R-TX-23) joined the Guy Benson Show to talk about the dire situation at the southern border, as illegal migrants continue to enter the \u2026 [+829 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Wyatt DobrovichFago",
    title:
      "Josh Kraushaar On Ohio GOP Primary Results: This Was Undeniably A Win For Former President Trump",
    description:
      "Listen To The Full Interview Below: Josh Kraushaar, Politics Editor at National Journal & Fox News Radio Political Analyst joined the Guy Benson Show to break down the results of Ohio\u2019s GOP primary, where several Trump-backed candidates scored big wins. Josh \u2026",
    url: "https://radio.foxnews.com/2022/05/04/josh-kraushaar-on-ohio-gop-primary-results-this-was-undeniably-a-win-for-former-president-trump/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2019/10/Josh-Kraushaar-.jpg",
    publishedAt: "2022-05-04T22:28:15Z",
    content:
      "Josh Kraushaar, Politics Editor at National Journal &amp; Fox News Radio Political Analyst joined the Guy Benson Show to break down the results of Ohio\u2019s GOP primary, where several Trump-backed candi\u2026 [+874 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title:
      "Pope Francis suggests the 'barking of NATO at Russia's door' may have forced Putin to invade Ukraine",
    description:
      "Pope Francis appeared to partly blame the West for Russia's invasion of Ukraine in an interview published this week, suggesting that the \u201cbarking of NATO at Russia's door\u201d may have forced Putin's hand.",
    url: "https://www.foxnews.com/world/pope-francis-suggests-the-barking-of-nato-at-russias-door-may-have-forced-putin-to-invade-ukraine",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/francispopetalking.jpg",
    publishedAt: "2022-05-04T22:15:15Z",
    content:
      "Pope Francis appeared to partly blame the West for Russia's invasion of Ukraine in an interview published this week, suggesting that the \"barking of NATO at Russia's door\" may have forced Putin's han\u2026 [+2011 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title: "Boston construction site collapse injures multiple people",
    description:
      "A building in Boston partially collapsed at a construction site on Wednesday afternoon, sending three people to the hospital.",
    url: "https://www.foxnews.com/us/boston-construction-site-collapse-multiple-injured",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-66.png",
    publishedAt: "2022-05-04T22:14:31Z",
    content:
      "A building in Boston partially collapsed at a construction site on Wednesday afternoon, sending at least three to the hospital.\r\nThe building collapse happened at a closed power plant that is being r\u2026 [+1749 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Bradford Betz",
    title: "Donald Trump Jr. met with Jan. 6 committee: report",
    description:
      "Donald Trump Jr. on Tuesday met with the congressional committee investigating the Jan. 6, 2021 attack on the U.S. Capitol, according to a report.",
    url: "https://www.foxnews.com/politics/donald-trump-jr-jan-6-committee",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Donald-Trump-Jr.jpg",
    publishedAt: "2022-05-04T22:04:30Z",
    content:
      "Donald Trump Jr. on Tuesday met with the congressional committee investigating the Jan. 6, 2021 attack on the U.S. Capitol, according to a report. \u00a0\r\nTwo people familiar with the matter who were not \u2026 [+1858 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Brooke Singman",
    title:
      "White House says Biden has been \u2018struck\u2019 by Trump\u2019s \u2018hold\u2019 on GOP",
    description:
      "President Biden has been \u201cstruck\u201d by the \u201chold\u201d former President Trump has on the Republican Party, the White House said Wednesday, after he warned earlier in the day that the \u201cMAGA crowd\u201d is the \u201cmost extreme political organization that\u2019s existed\u201d in recent \u2026",
    url: "https://www.foxnews.com/politics/white-house-says-biden-struck-trump-hold-gop",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2020/10/BT-Trump-biden-.jpg",
    publishedAt: "2022-05-04T22:03:27Z",
    content:
      'President Biden has been "struck" by the "hold" former President Trump has on the Republican Party, the White House said Wednesday, after he warned earlier in the day that the "MAGA crowd" is the "mo\u2026 [+5206 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "William Sanchez",
    title: "War On Ukraine: European Union Weighs Russian Oil Embargo",
    description:
      "On Wednesday, the European Union Commission President proposed the EU\u2019s latest and most severe sanctions against Russia, going as far as to pitch a ban on Russian oil imports. These sanctions aiming to punish Moscow\u2019s invasion of Ukraine have been met with mi\u2026",
    url: "https://radio.foxnews.com/2022/05/04/fox-news-rundown-evening-edition-05-04-2022/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2020/11/PROMO-FNR-Evening_Edition.png",
    publishedAt: "2022-05-04T22:00:29Z",
    content:
      "On Wednesday, the European Union Commission President proposed the EU\u2019s latest and most severe sanctions against Russia, going as far as to pitch a ban on Russian oil imports. These sanctions aiming \u2026 [+523 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Victoria Balara",
    title:
      "Fox News Poll: Majority favors ban on sex, gender discussions for young children in schools",
    description:
      "Over half of registered voters would support a law that bans teachers from discussing gender identity and sexual orientation with students before fourth grade",
    url: "https://www.foxnews.com/politics/fox-news-poll-majority-favors-ban-sex-gender-discussions-young-children-schools",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/12/Kids-playing-outside-a-school-2.jpg",
    publishedAt: "2022-05-04T22:00:12Z",
    content:
      "Over half of registered voters would support a law that bans teachers from discussing gender identity and sexual orientation with students before fourth grade.\r\nThats according to the latest Fox News\u2026 [+3717 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Dana Blanton",
    title:
      "Fox News Poll: Most think what happens in Ukraine matters to life in U.S.",
    description:
      "Voters remain focused on the war in Ukraine and want the United States to do more.",
    url: "https://www.foxnews.com/politics/fox-news-poll-most-think-what-happens-ukraine-matters-life-u-s",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/Ukraine-tank.png",
    publishedAt: "2022-05-04T22:00:09Z",
    content:
      "Voters remain focused on the war in Ukraine and want the United States to do more.\u00a0\r\nAn overwhelming majority, 85%, says what happens in the war matters to life in the U.S., according a new Fox News \u2026 [+2806 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Victoria Balara",
    title: "Fox News Poll: Majority says Musk buying Twitter is #notabigdeal",
    description:
      "Elon Musk\u2019s $44 billion takeover of Twitter is not a big deal to a majority of American voters",
    url: "https://www.foxnews.com/politics/fox-news-poll-majority-says-musk-buying-twitter-notabigdeal",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/ELON-MUSK-LOS-ANGELES.jpg",
    publishedAt: "2022-05-04T22:00:06Z",
    content:
      "Elon Musks $44 billion takeover of Twitter is not a big deal to a majority of American voters, according to a new Fox News national poll released Wednesday.\r\nThe survey finds that Musk buying the tec\u2026 [+1552 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Kristine Parks",
    title:
      "Ohio Democrat running for governor tells Chuck Todd government shouldn\u2019t restrict when women can get abortions",
    description:
      "Ohio\u2019s Democrat nominee for governor told MSNBC that there should be no limitations on when women can get abortions.",
    url: "https://www.foxnews.com/media/ohio-democrat-running-governor-tells-chuck-todd-government-shouldnt-put-any-limits-abortion",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/2021-01-03T111134Z_635872457_RC2B0L9T8F1B_RTRMADP_3_HEALTH-CORONAVIRUS-USA-CONGRESS.jpg",
    publishedAt: "2022-05-04T21:51:20Z",
    content:
      "Ohios Democrat nominee for governor indicated that there should no government restrictions on when a woman can get an abortion during a MSNBC interview on Wednesday.\u00a0\r\nAfter winning her primary on Tu\u2026 [+3048 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Audrey Conklin",
    title: "Chicago teen Mia Maro's father arrested in 17-year-old's killing",
    description:
      "Mohammad Almaru, father of deceased Mia Maro, has been arrested in connection to his 17-year-old daughter's homicide, according to authorities.",
    url: "https://www.foxnews.com/us/mia-maro-father-arrested-killing",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/BeFunky-collage.jpg",
    publishedAt: "2022-05-04T21:44:35Z",
    content:
      "Mohammed Almaru, father of slain Mia Maro, has been arrested and charged with first-degree murder in connection to his 17-year-old daughter's killing, according to authorities.\r\nPolice discovered the\u2026 [+2272 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Houston Keene",
    title:
      "Democrats use leaked SCOTUS opinion to push bill legalizing some abortions for all 9 months",
    description:
      "Democrats are pushing for another vote on a bill that would legalize many abortions through all nine months of a woman\u2019s pregnancy amid the unprecedented leaked Supreme Court opinion.",
    url: "https://www.foxnews.com/politics/democrats-leaked-scotus-opinion-push-bill-legalizing-abortion-9-months",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/GettyImages-1239628973-e1650812239185.jpg",
    publishedAt: "2022-05-04T21:39:14Z",
    content:
      "Democrats are pushing for another vote on a bill that would legalize some abortions through all nine months of a womans pregnancy.\u00a0\r\nDemocratic senators on Tuesday pushed for another vote on the Wome\u2026 [+4133 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Bradford Betz",
    title:
      "California Gov. Gavin Newsom on Roe v. Wade leak: 'If men could get pregnant...'",
    description:
      "California Governor Gavin Newsom on Wednesday derided abortion opponents as extremists who are more interested in control rather than family values.",
    url: "https://www.foxnews.com/politics/california-governor-gavin-newsom-supreme-court-roe-v-wade",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Gavin-Newsom.jpg",
    publishedAt: "2022-05-04T21:24:56Z",
    content:
      "California Governor Gavin Newsom on Wednesday derided abortion opponents as extremists who are more interested in control rather than family values.\u00a0\r\nThe Democratic governors comments come just days\u2026 [+2502 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lauryn Overhultz, Stephanie Pagones",
    title:
      "Dave Chappelle attacked at Hollywood Bowl: Who is the alleged suspect, Isaiah Lee?",
    description:
      'The LAPD arrested 23-year-old Isaiah Lee in connection with the attack on Dave Chappelle at the Hollywood Bowl on Tuesday night. Chappelle was attacked while performing as part of his "Netflix Is a Joke" festival.',
    url: "https://www.foxnews.com/entertainment/dave-chappelle-attacked-hollywood-bowl-los-angeles-suspect-isaiah-lee-arrested-charged",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/dave-chappelle.jpg",
    publishedAt: "2022-05-04T21:20:45Z",
    content:
      "The Los Angeles Police Department arrested a suspect and charged him with assault with a deadly weapon after Dave Chappelle was attacked onstage Tuesday night.\r\nThe alleged suspect, identified by LAP\u2026 [+4498 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paulina Dedaj",
    title:
      "LeSean McCoy calls out Titans' Ryan Tannehill for saying mentoring rookie QB Malik Willis isn't his job",
    description:
      "Veteran NFL running back LeSean McCoy called out Tennessee Titans quarterback Ryan Tannehill after Tannehill said it wasn\u2019t his \u201cjob\u201d to mentor third-round NFL Draft pick Malik Willis.",
    url: "https://www.foxnews.com/sports/lesean-mccoy-titans-ryan-tannehill-mentor-malik-willis-job",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Ryan-Tannehill.jpg",
    publishedAt: "2022-05-04T21:20:45Z",
    content:
      'Veteran NFL\r\n running back LeSean McCoy called out Tennessee Titans\r\n quarterback Ryan Tannehil\r\nl after Tannehill said it wasnt his "job" to mentor third-round NFL Draft\r\n pick Malik Willis.\u00a0\r\nMcCoy\u2026 [+1817 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Michael Ruiz",
    title: "Who is Casey White, the escaped Alabama murder suspect?",
    description:
      "The Lauderdale County Detention Center\u2019s assistant director of corrections allegedly helped a convicted felon and murder suspect walk out of the county jail Friday in broad daylight.",
    url: "https://www.foxnews.com/us/who-is-casey-white-the-escaped-alabama-murder-suspect",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Casey-White-triple.jpg",
    publishedAt: "2022-05-04T21:17:26Z",
    content:
      "Casey Cole White, facing a pending capital murder trial in Alabama and already serving a 75-year sentence on attempted murder and kidnappings charges, escaped custody on April 29, sparking a nationwi\u2026 [+5485 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "David Rutz",
    title:
      "Media pushes narrative that leaked Roe v. Wade draft could be midterm game-changer",
    description:
      "Roe v. Wade is still intact, but that hasn't stopped media speculation that its possible overturning could upend the 2022 midterms.",
    url: "https://www.foxnews.com/media/abortion-roe-wade-midterms-media",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/mid1.png",
    publishedAt: "2022-05-04T21:12:12Z",
    content:
      "The prevailing narrative for months has been that Democrats face an uphill battle to maintain control of the House and Senate in 2022, citing record inflation, President Biden's underwater approval r\u2026 [+4977 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title:
      "Virginia police seize 5,000 counterfeit fentanyl-laced pills, arrest four",
    description:
      "Police in northern Virginia seized 5,000 pills laced with fentanyl on Wednesday, just days after two teens suspected of taking counterfeit percocets died of fatal overdoses.",
    url: "https://www.foxnews.com/us/virginia-police-seize-5000-counterfeit-fentanyl-laced-pills-arrest-four",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/prince-thumb9.jpg",
    publishedAt: "2022-05-04T21:11:14Z",
    content:
      "Police in northern Virginia seized 5,000 pills laced with fentanyl on Wednesday, just days after two teens suspected of taking counterfeit percocets died of fatal overdoses.\u00a0\r\nThe Prince William Coun\u2026 [+1655 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Haley Chi-Sing",
    title: "Metropolitan Museum of Art raises $17.4 million from Met Gala",
    description:
      "Metropolitan Museum of Art officials reported raising a record $17.4 million from the 2022 Met Gala.",
    url: "https://www.foxnews.com/entertainment/metropolitan-museum-art-raises-17-4-million-met-gala",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Blake-Met-2022.jpg",
    publishedAt: "2022-05-04T21:09:20Z",
    content:
      "The 2022 Met Gala raised a record $17.4 million, museum officials said Tuesday.\u00a0\r\nThe annual fundraising gala was held on the first Monday in May in New York City this year, as is tradition. This is \u2026 [+1407 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Kate Pearce",
    title: "Kennedy Saves You From Grief",
    description:
      'Oh this episode, Kennedy is joined by Author\u00a0Marisa Renee Lee\u00a0to discuss her book\u00a0"Grief Is Love:\u00a0Living with Loss."',
    url: "https://radio.foxnews.com/2022/05/04/kennedy-saves-you-from-grief/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2020/10/FEATURED_IMAGE_Kennedy_Saves_The_World.png",
    publishedAt: "2022-05-04T21:00:19Z",
    content:
      "Oh this episode, Kennedy is joined by the CEO of Beacon Advisors, Co-Founder of Supportal, Founder of The Pink Agenda\u00a0&amp; Author\u00a0Marisa Renee Lee\u00a0to discuss her book\u00a0Grief Is Love:\u00a0Living with Loss\u2026 [+347 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Lilian Huang",
    title: "Kentucky Derby Bites and Cocktails",
    description:
      "Treat guests to traditional Kentucky Derby treats and cocktails this race day.\u00a0 Woodford Reserve Assistant Master Distiller Elizabeth McCall shares tips with Fox News\u2019s Lilian Huang Woo. \u00a0 Bourbon Chocolate Caramel Mousse Jars \u2013 the mousse can be prepared ahe\u2026",
    url: "https://radio.foxnews.com/2022/05/04/kentucky-derby-bites-and-cocktails/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2022/05/Julep.jpg",
    publishedAt: "2022-05-04T21:00:12Z",
    content:
      "Treat guests to traditional Kentucky Derby treats and cocktails this race day.\u00a0 Woodford Reserve Assistant Master Distiller Elizabeth McCall shares tips with Fox News\u2019s Lilian Huang Woo.\r\nBourbon Cho\u2026 [+1289 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Tyler Olson",
    title:
      "Democrat Tim Ryan courts Trump voters in Ohio Senate race with 'Americans first' economic message",
    description:
      "Democrat Rep. Tim Ryan is taking a page out of former President Donald Trump's playbook as he tries to get bipartisan support in Ohio's key Senate race.",
    url: "https://www.foxnews.com/politics/tim-ryan-ohio-senate-trump-voters-economic-message",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/IMG_4004.jpg",
    publishedAt: "2022-05-04T20:58:43Z",
    content:
      "Ohio Democratic Senate nominee Rep. Tim Ryan is staking out centrist ground and courting Trump voters\u00a0ahead of his matchup with GOP nominee JD Vance in the state's pivotal open-seat Senate election t\u2026 [+5462 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Brandon Gillespie",
    title:
      "Critics blast 'words are violence' approach following attack on Dave Chappelle",
    description:
      'Critics blasted the left\'s "words are violence" approach following the attack on Dave Chappelle by a member of his audience.',
    url: "https://www.foxnews.com/media/critics-words-are-violence-approach-attack-dave-chappelle",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Dave-Chappelle-DC-School.jpg",
    publishedAt: "2022-05-04T20:58:05Z",
    content:
      'Critics responded sharply Wednesday to the "words are violence" mantra by some on the left following the mid-performance attack on comedian Dave Chappelle.\r\nThe attack occurred late Tuesday at the Ho\u2026 [+3967 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Joseph Wulfsohn",
    title:
      "Dave Portnoy vows to vote Democrat if Roe v. Wade is overturned: 'This is like going back in time'",
    description:
      "The Barstool Sports founder is speaking out against the leaked majority opinion draft that signaled the end of federal protections towards abortion.",
    url: "https://www.foxnews.com/media/dave-portnoy-abortion-roe-v-wade",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/8485fa73-portnoy-1-.jpg",
    publishedAt: "2022-05-04T20:57:20Z",
    content:
      'Barstool Sports founder Dave Portnoy\r\n said he will vote for Democrats if Roe v. Wade is overturned by the Supreme Court.\u00a0\r\nOn Wednesday\'s installment of "The Dave Portnoy Show," Portnoy asserted "yo\u2026 [+3862 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Shaw, Kelly Laco",
    title:
      "CBP begins posting numbers of terror watch list individuals caught at border after pressure from GOP lawmakers",
    description:
      "Customs and Border Protection (CBP) has started posting the numbers of individuals encountered at the border whose names are on the terror watch list \u2014\u00a0after months of prodding by Republican lawmakers in Congress.",
    url: "https://www.foxnews.com/politics/cbp-posting-numbers-terror-watch-list-individuals-caught-gop-lawmakers",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/katko.png",
    publishedAt: "2022-05-04T20:53:48Z",
    content:
      "Customs and Border Protection (CBP) has started posting the numbers of individuals encountered at the border whose names are on the terror watch list for the first time since the Trump administration\u2026 [+3946 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title: "Minnesota crews rescue man from sinking pickup",
    description:
      "A man in Minnesota was rescued after being stuck on the top of his pickup truck which went into a pond.",
    url: "https://www.foxnews.com/us/minnesota-crews-rescue-man-sinking-pickup",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-63.png",
    publishedAt: "2022-05-04T20:53:38Z",
    content:
      "A man in Minnesota was rescued after being stuck on the top of his pickup truck that went into a pond in Lakeville.\r\nTraffic cameras from the Minnesota Department of Transportation show emergency cre\u2026 [+837 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Ryan Gaydos",
    title:
      "Warriors' Steve Kerr calls Dillon Brooks' foul on Gary Payton II 'dirty,' Grizzlies player 'broke the code'",
    description:
      "The play occurred in the first quarter while Gary Payton II was going up for a dunk.",
    url: "https://www.foxnews.com/sports/warriors-steve-kerr-dillon-brooks-foul-gary-payton-grizzlies",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Gary-Payton-II.jpg",
    publishedAt: "2022-05-04T20:32:13Z",
    content:
      "Multiple Golden State Warriors personnel ripped Memphis Grizzlies forward Dillon Brooks for a foul that left Gary Payton II injured during Game 2 of their playoff series Tuesday night.\r\nThe play occu\u2026 [+2753 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Best",
    title:
      "Minnesota crime surge sparks federal crackdown: 'We cannot allow this plague of violence to continue'",
    description:
      "Recently reappointed U.S. Attorney for Minnesota Andrew Luger promised a federal crackdown on violence this week, saying that every attorney in his office will now focus on prosecuting carjackings, shootings, and other violent crimes.",
    url: "https://www.foxnews.com/us/minnesota-crime-federal-crackdown-violence",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/AP21155486239765-e1622837040248.jpg",
    publishedAt: "2022-05-04T20:30:14Z",
    content:
      "Recently reappointed U.S. Attorney for Minnesota Andrew Luger promised a federal crackdown on violence this week, saying that every attorney in his office will now focus on prosecuting carjackings, s\u2026 [+2370 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Yael Halon",
    title:
      "House Democrat defends Biden economic policies, credits him for 'keeping this country afloat and alive'",
    description:
      "Rep. Sheila Jackson Lee, D-Texas, issued a staunch defense of President Biden on Wednesday after new polling shows a majority of Americans disprove of the administration's handling of the economy and the mounting inflation crisis.",
    url: "https://www.foxnews.com/media/house-democrat-jackson-lee-biden-economic-policies-inflation",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/48fc3883-bd98-480f-a7a9-0ee061d7b249/3909ddd3-14f3-42d3-a81c-67ac40f02815/1280x720/match/image.jpg",
    publishedAt: "2022-05-04T20:22:14Z",
    content:
      "Rep. Sheila Jackson Lee, D-Texas\r\n,\r\n issued a staunch defense of President Biden Wednesday after new polling emerged showing a majority of Americans disapprove of the administration's handling of th\u2026 [+2444 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Louis Casiano",
    title:
      "Michigan woman charged after child takes THC-laced LifeSavers to school, leaving 5 kids hospitalized",
    description:
      "A Michigan woman is facing a child abuse charge after several kindergartners became sick, leaving more than a dozen ill and five hospitalized, when her child took her marijuana edibles to school, authorities said.",
    url: "https://www.foxnews.com/us/michigan-woman-charged-marijuana-gummies-kindergartners-hospitalized",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2019/02/gummy-bears-Getty.jpg",
    publishedAt: "2022-05-04T20:19:21Z",
    content:
      "A Michigan woman is facing a child abuse charge after several kindergartners became sick, leaving more than a dozen sick and five hospitalized, when her child took her marijuana edibles to school, au\u2026 [+2766 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Stephanie Nolasco",
    title:
      "Guns N\u2019 Roses drummer Matt Sorum says he knocked out \u2018Full House\u2019 star Dave Coulier at John Stamos' wedding",
    description:
      "The rocker recalled what happened after he was invited to John Stamos' 1998 wedding to his first wife Rebecca Romijn.",
    url: "https://www.foxnews.com/entertainment/guns-n-roses-drummer-matt-sorum-says-knocked-out-full-house-dave-coulier-john-stamos-wedding",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Getty_DaveCoulier_MattSorum.jpg",
    publishedAt: "2022-05-04T20:18:49Z",
    content:
      'Guns N Roses drummer Matt Sorum made sure John Stamos had a wedding he would never forget.\r\nThe 61-year-old recalled what happened after he was invited to the "Full House" stars 1998 nuptials to his \u2026 [+3267 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Michael Addvensky",
    title:
      "Senator Steve Daines: The Left Is Trying To Cause A Political Wildfire Over Abortion Because They Have Nothing Else To Run On",
    description:
      "Montana Republican Senator Steve Daines joins Fox Across America With Jimmy Failla to share his thoughts on the possible intentions of whoever leaked the draft opinion from Supreme Court Justice Samuel Alito in a pivotal abortion case. \u201cThis was an outrageous\u2026",
    url: "https://radio.foxnews.com/2022/05/04/senator-steve-daines-the-left-is-trying-to-cause-a-political-wildfire-over-abortion-because-they-have-nothing-else-to-run-on/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2022/05/daines.jpg",
    publishedAt: "2022-05-04T20:14:56Z",
    content:
      "Montana Republican Senator Steve Daines joins Fox Across America With Jimmy Failla to share his thoughts on the possible intentions of whoever leaked the draft opinion from Supreme Court Justice Samu\u2026 [+1189 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Amy McGorry",
    title:
      "Kim Kardashian\u2019s crash diet could lead to further weight gain: health experts",
    description:
      "Kim Kardashian received a lot of backlash after touting her 16-pound weight loss in 3 weeks. Health experts cautioned that such rapid weight loss from her reported crash dieting could be detrimental to a person\u2019s health.",
    url: "https://www.foxnews.com/health/kim-kardashians-crash-diet-could-lead-further-weight-gain-health-experts",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Getty_KimKardashian_MarilynMonroe.jpg",
    publishedAt: "2022-05-04T20:13:51Z",
    content:
      "Kim Kardashian received a lot of backlash after touting her 16-pound weight loss in 3 weeks to fit into her Marilyn Monroe-style dress she donned for the Met Gala in New York City this week. Health e\u2026 [+4234 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Michael Addvensky",
    title:
      "Rep. Jim Jordan: It\u2019s The Democrats Who Hold The Radical Position On Abortion",
    description:
      "Ohio Republican Congressman Jim Jordan joins Fox Across America With Jimmy Failla to share his reaction to the outrage in the Democratic Party following the leak of Supreme Court Justice Samuel Alito\u2019s draft opinion in a key Mississippi case that could overtu\u2026",
    url: "https://radio.foxnews.com/2022/05/04/rep-jim-jordan-its-the-democrats-who-hold-the-radical-position-on-abortion/",
    urlToImage:
      "https://radio.foxnews.com/wp-content/uploads/2022/05/Jim-Jordan.jpg",
    publishedAt: "2022-05-04T20:12:42Z",
    content:
      "Ohio Republican Congressman Jim Jordan joins Fox Across America With Jimmy Failla to share his reaction to the outrage in the Democratic Party following the leak of Supreme Court Justice Samuel Alito\u2026 [+1129 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Adam Sabes",
    title:
      "Arizona troopers find over 37 pounds of suspected fentanyl in unicorn backpack",
    description:
      "Arizona troopers found over 37 pounds of suspected fentanyl pills in a unicorn backpack during a traffic stop/",
    url: "https://www.foxnews.com/us/arizona-troopers-fentanyl-unicorn-backpack",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Untitled-design-60.png",
    publishedAt: "2022-05-04T20:10:40Z",
    content:
      "Arizona state troopers found over 37 pounds of suspected fentanyl pills in a unicorn backpack during a traffic stop on Wednesday.\r\nTroopers with the Arizona Department of Public Safety made the disco\u2026 [+1409 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Houston Keene",
    title:
      "Blinken tests positive for COVID, latest Biden Cabinet official to contract virus",
    description:
      "Secretary of State Antony Blinken tested positive for COVID-19 on Wednesday, becoming the latest Biden administration Cabinet official to contract the virus.",
    url: "https://www.foxnews.com/politics/blinken-tests-positive-covid-biden-cabinet-official",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Secretary-of-State-Antony-Blinken.jpg",
    publishedAt: "2022-05-04T20:08:02Z",
    content:
      'Secretary of State Antony Blinken tested positive for COVID-19 on Wednesday, becoming the latest Biden administration Cabinet official to contract the virus.\r\n"Secretary of State Antony J. Blinken te\u2026 [+1443 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Michael Ruiz",
    title:
      "Missing Harmony Montgomery: Massachusetts watchdog finds \u2018miscalculations\u2019 preceded girl\u2019s disappearance",
    description:
      "Massachusetts\u2019 child welfare system failed to prioritize the \u201cneeds, wellbeing and safety\u201d of Harmony Montgomery when she was placed in the custody of her violent criminal father in 2019, according to a state watchdog report published Wednesday.",
    url: "https://www.foxnews.com/us/missing-harmony-montgomery-massachusetts-watchdog",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Image-from-iOS-201.jpg",
    publishedAt: "2022-05-04T20:05:36Z",
    content:
      'Massachusetts child welfare system failed to prioritize the "needs, wellbeing and safety" of Harmony Montgomery when she was placed in the custody of her violent criminal father in 2019, according to\u2026 [+5351 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Fox News Staff",
    title:
      "Nikki Haley: Republicans have to start paying attention to issues that matter to Americans",
    description:
      "Former U.N. Ambassador Nikki Haley says Republicans need to pay attention to issues that matter to the American family if they want to win the midterms this November.",
    url: "https://www.foxnews.com/media/nikki-haley-republicans-democrats-midterms-biden-economy-inflation",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Nikki-Haley-Democrats-have-start-paying-attention-to-issues-that-matter-to-the-American-family.jpeg",
    publishedAt: "2022-05-04T19:59:38Z",
    content:
      "Former U.N. Ambassador Nikki Haley warned on \"America Reports\" Wednesday that Republicans can't capitalize on Democrats' lagging poll numbers on key issues in November's midterm elections without off\u2026 [+1022 chars]",
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Gabriel Hays",
    title:
      "\u2018Devout Catholic\u2019 Biden torched for appealing to his rights as a \u2018child of God\u2019 to justify abortion",
    description:
      "President Biden took heat from conservatives on Wednesday for his statements defending abortion.",
    url: "https://www.foxnews.com/media/devout-catholic-biden-torched-appealing-his-rights-child-god-justify-abortion",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/4e19bdc6-6a4c-4347-8b1a-32ba8b344245/8807370a-b47b-4acf-824f-4a7f44f001cd/1280x720/match/image.jpg",
    publishedAt: "2022-05-04T19:57:16Z",
    content:
      'Conservatives on Twitter were appalled Wednesday after President Joe Biden defended abortion by appealing to his natural rights as a "child of God."\u00a0\r\nOne claimed that the president "just made the ca\u2026 [+2648 chars]',
  },
  {
    source: { id: "fox-news", name: "Fox News" },
    author: "Paul Steinhauser",
    title:
      "JD Vance and Tim Ryan wage battle of the populists in race for Ohio\u2019s open Senate seat",
    description:
      "Republican JD Vance and Democratic Rep. Tim Ryan courting blue collar voters as Ohio\u2019s consequential general election Senate campaign gets underway",
    url: "https://www.foxnews.com/politics/jd-vance-tim-ryan-ohio-open-senate-seat",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/JD-Vance-Donald-Trump-Ohio-rally.jpg",
    publishedAt: "2022-05-04T19:42:23Z",
    content:
      "In the face-off for Ohios open Senate seat, the gloves quickly came off between Republican JD Vance and Democratic Rep. Tim Ryan minutes after the two candidates who preach populist politics won thei\u2026 [+3712 chars]",
  },
];
