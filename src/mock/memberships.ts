import type { Membership } from "../types";

export const memberships: Membership[] = [
  {
    id: "m1000001-0000-4000-8000-000000000001",
    slug: "k-pop-universe-army-tier",
    name: "ARMY Tier",
    description:
      "The ultimate membership for BTS fans. Stream every comeback in HD, join exclusive fan projects, and get first dibs on concert presales. Powered by K-Pop Universe.",
    tier: "gold",
    price: 499,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000001-0000-4000-8000-000000000001",
        title: "Early concert ticket presale access",
        description:
          "Unlock a 24-hour head start on ticket bookings before the general public for every BTS and K-Pop Universe affiliated tour date.",
      },
      {
        id: "mb1000001-0000-4000-8000-000000000002",
        title: "Exclusive behind-the-scenes content",
        description:
          "Watch unreleased rehearsal footage, fan meeting highlights, and studio diaries shared only with ARMY Tier members.",
      },
      {
        id: "mb1000001-0000-4000-8000-000000000003",
        title: "Members-only livestream Q&A",
        description:
          "Monthly live sessions with community hosts, guest dancers, and choreographers breaking down the latest music videos.",
      },
      {
        id: "mb1000001-0000-4000-8000-000000000004",
        title: "Digital fan kit & photocard drop",
        description:
          "Receive a seasonal digital fan kit with wallpapers, ringtones, and a randomised digital photocard for your collection.",
      },
    ],
    communityId: "c1000001-0000-4000-8000-000000000001",
    subscriberCount: 8400,
    isActive: true,
    createdAt: "2024-02-04T10:15:00.000Z",
    updatedAt: "2025-05-21T16:40:00.000Z",
  },
  {
    id: "m1000002-0000-4000-8000-000000000002",
    slug: "k-drama-central-vip-pass",
    name: "VIP Drama Pass",
    description:
      "Binge smarter with K-Drama Central. Get ad-free episode previews, cast interviews, and access to a private watch-along lounge for every new series.",
    tier: "platinum",
    price: 799,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000002-0000-4000-8000-000000000001",
        title: "Ad-free early episode access",
        description:
          "Watch the next episode up to 48 hours before the free tier, with zero interruptions from sponsors or promos.",
      },
      {
        id: "mb1000002-0000-4000-8000-000000000002",
        title: "Cast & director interview vault",
        description:
          "Unlimited access to long-form interviews, script reading clips, and director commentary curated by the K-Drama Central editorial team.",
      },
      {
        id: "mb1000002-0000-4000-8000-000000000003",
        title: "Private watch-along lounge",
        description:
          "Join a hosted live room for every premiere, complete with live reactions, polls, and emoji reactions from fellow VIPs.",
      },
      {
        id: "mb1000002-0000-4000-8000-000000000004",
        title: "Quarterly merch box",
        description:
          "A curated box of K-Drama themed merchandise delivered every quarter, featuring posters, stickers, and collectible still cards.",
      },
    ],
    communityId: "c1000002-0000-4000-8000-000000000002",
    subscriberCount: 3200,
    isActive: true,
    createdAt: "2024-03-11T09:00:00.000Z",
    updatedAt: "2025-06-02T11:25:00.000Z",
  },
  {
    id: "m1000003-0000-4000-8000-000000000003",
    slug: "tollywood-titans-fan-club",
    name: "Titans Fan Club",
    description:
      "Celebrate Telugu cinema's biggest stars with Tollywood Titans. From teaser drops to fan premiers, this membership keeps you at the heart of the action.",
    tier: "silver",
    price: 299,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000003-0000-4000-8000-000000000001",
        title: "Teaser & trailer first-look access",
        description:
          "Be among the first to watch new teasers and trailers, dropped exclusively for Titans Fan Club members hours before public release.",
      },
      {
        id: "mb1000003-0000-4000-8000-000000000002",
        title: "Fan premier ticket lottery",
        description:
          "Automatic entry into a monthly lottery for complimentary tickets to fan premier screenings across Andhra Pradesh and Telangana.",
      },
      {
        id: "mb1000003-0000-4000-8000-000000000003",
        title: "Members-only poster drops",
        description:
          "Collect limited edition digital and printable posters released with every major Tollywood release and anniversary.",
      },
    ],
    communityId: "c1000003-0000-4000-8000-000000000003",
    subscriberCount: 5100,
    isActive: true,
    createdAt: "2024-01-22T13:45:00.000Z",
    updatedAt: "2025-04-30T08:10:00.000Z",
  },
  {
    id: "m1000004-0000-4000-8000-000000000004",
    slug: "bollywood-buzz-insider",
    name: "Bollywood Insider",
    description:
      "Go beyond the gossip. Bollywood Insider delivers verified scoops, set reports, and intimate interviews with the stars shaping Hindi cinema today.",
    tier: "diamond",
    price: 1499,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000004-0000-4000-8000-000000000001",
        title: "Verified scoops before they break",
        description:
          "Get breaking casting news, release date shifts, and box office projections from our insider network before they hit the headlines.",
      },
      {
        id: "mb1000004-0000-4000-8000-000000000002",
        title: "Set reports & location diaries",
        description:
          "Read on-location dispatches from ongoing shoots, complete with behind-the-scenes photos and crew interviews.",
      },
      {
        id: "mb1000004-0000-4000-8000-000000000003",
        title: "Invitations to private screenings",
        description:
          "Receive priority invitations to private screenings and press previews held in Mumbai, Delhi, and Bengaluru.",
      },
      {
        id: "mb1000004-0000-4000-8000-000000000004",
        title: "Monthly celebrity AMA",
        description:
          "Ask questions directly to a featured actor, director, or music composer in a moderated monthly Ask Me Anything session.",
      },
      {
        id: "mb1000004-0000-4000-8000-000000000005",
        title: "Premium ad-free experience",
        description:
          "Enjoy an entirely ad-free reading and viewing experience across Bollywood Buzz, including the podcast feed.",
      },
    ],
    communityId: "c1000004-0000-4000-8000-000000000004",
    subscriberCount: 2800,
    isActive: true,
    createdAt: "2024-04-05T12:20:00.000Z",
    updatedAt: "2025-06-12T17:05:00.000Z",
  },
  {
    id: "m1000005-0000-4000-8000-000000000005",
    slug: "kollywood-kings-legacy",
    name: "Kollywood Legacy",
    description:
      "A yearly membership for Tamil cinema loyalists. Relive the classics, celebrate new releases, and connect with the legends of Kollywood.",
    tier: "gold",
    price: 499,
    currency: "INR",
    billingInterval: "annually",
    benefits: [
      {
        id: "mb1000005-0000-4000-8000-000000000001",
        title: "Classic film restoration library",
        description:
          "Stream a growing library of digitally restored Tamil classics, from black-and-white gems to early 2000s blockbusters.",
      },
      {
        id: "mb1000005-0000-4000-8000-000000000002",
        title: "Legend tribute events",
        description:
          "Attend virtual and in-person tribute events honouring Kollywood icons, with recorded archives available on demand.",
      },
      {
        id: "mb1000005-0000-4000-8000-000000000003",
        title: "Annual legacy yearbook",
        description:
          "Receive a digital yearbook at the end of each membership year, recapping the most memorable moments in Tamil cinema.",
      },
    ],
    communityId: "c1000005-0000-4000-8000-000000000005",
    subscriberCount: 1900,
    isActive: true,
    createdAt: "2024-02-19T11:10:00.000Z",
    updatedAt: "2025-05-08T09:35:00.000Z",
  },
  {
    id: "m1000006-0000-4000-8000-000000000006",
    slug: "mollywood-magic-cinephile",
    name: "Cinephile Membership",
    description:
      "For the true lovers of Malayalam cinema. Mollywood Magic brings you closer to the new wave of storytellers redefining the industry.",
    tier: "bronze",
    price: 199,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000006-0000-4000-8000-000000000001",
        title: "Indie short film showcase",
        description:
          "Watch a rotating selection of award-winning Malayalam short films, curated monthly by the Mollywood Magic editorial desk.",
      },
      {
        id: "mb1000006-0000-4000-8000-000000000002",
        title: "Director's cut commentary",
        description:
          "Access optional director's cut commentary tracks for select films, offering scene-by-scene insights into the craft.",
      },
      {
        id: "mb1000006-0000-4000-8000-000000000003",
        title: "Community film club discussions",
        description:
          "Join weekly hosted discussions breaking down themes, performances, and cinematography in recent Mollywood releases.",
      },
    ],
    communityId: "c1000006-0000-4000-8000-000000000006",
    subscriberCount: 1200,
    isActive: true,
    createdAt: "2024-05-14T10:05:00.000Z",
    updatedAt: "2025-06-20T15:50:00.000Z",
  },
  {
    id: "m1000007-0000-4000-8000-000000000007",
    slug: "indian-sports-arena-pro",
    name: "Sports Arena Pro",
    description:
      "The all-access pass for Indian sports fans. From cricket to kabaddi, get expert analysis, live stats, and premium fantasy league tools.",
    tier: "platinum",
    price: 799,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000007-0000-4000-8000-000000000001",
        title: "Expert pre & post-match analysis",
        description:
          "Read data-driven previews and reviews from former players and analysts for every major Indian fixture across cricket, football, and kabaddi.",
      },
      {
        id: "mb1000007-0000-4000-8000-000000000002",
        title: "Live match stats dashboard",
        description:
          "Track real-time player heatmaps, possession trends, and win probability charts during live matches.",
      },
      {
        id: "mb1000007-0000-4000-8000-000000000003",
        title: "Premium fantasy league toolkit",
        description:
          "Unlock advanced fantasy league research tools, including projected XIs, form guides, and captain picks.",
      },
      {
        id: "mb1000007-0000-4000-8000-000000000004",
        title: "Athlete meet-and-greet draws",
        description:
          "Automatic entry into quarterly draws for virtual and in-person meet-and-greets with featured Indian athletes.",
      },
    ],
    communityId: "c1000009-0000-4000-8000-000000000009",
    subscriberCount: 6700,
    isActive: true,
    createdAt: "2024-03-28T14:00:00.000Z",
    updatedAt: "2025-06-25T18:15:00.000Z",
  },
  {
    id: "m1000008-0000-4000-8000-000000000008",
    slug: "creators-collective-pro",
    name: "Creators Pro",
    description:
      "Built for the next generation of Indian creators. Creators Pro offers the tools, templates, and feedback loops you need to grow your audience.",
    tier: "gold",
    price: 499,
    currency: "INR",
    billingInterval: "monthly",
    benefits: [
      {
        id: "mb1000008-0000-4000-8000-000000000001",
        title: "Editable content templates",
        description:
          "Download a growing library of caption hooks, thumbnail templates, and short-form script frameworks ready to customise.",
      },
      {
        id: "mb1000008-0000-4000-8000-000000000002",
        title: "Brand collaboration board",
        description:
          "Browse a curated board of paid collaboration opportunities from brands actively seeking Indian creators.",
      },
      {
        id: "mb1000008-0000-4000-8000-000000000003",
        title: "Weekly portfolio feedback",
        description:
          "Submit your channel or profile for a weekly feedback thread reviewed by experienced creators and strategists.",
      },
      {
        id: "mb1000008-0000-4000-8000-000000000004",
        title: "Growth analytics masterclass",
        description:
          "Access a monthly masterclass on reading retention graphs, audience demographics, and algorithm signals to plan content.",
      },
      {
        id: "mb1000008-0000-4000-8000-000000000005",
        title: "Members-only creator directory",
        description:
          "Get listed in a private directory used by brands and agencies to discover and contact Creators Pro members for campaigns.",
      },
    ],
    communityId: "c1000010-0000-4000-8000-000000000010",
    subscriberCount: 3400,
    isActive: true,
    createdAt: "2024-06-07T15:30:00.000Z",
    updatedAt: "2025-06-28T10:45:00.000Z",
  },
];
