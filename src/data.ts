// Bump this when any image file is replaced (same filename, new content)
// This busts CDN cache without renaming files
export const IMAGE_VERSION = '20260226b'

export interface DesignObject {
  id: string
  date: string
  imageUrl: string
  fullImageUrl?: string
  thumbnailUrl?: string
  title: string
  title_en?: string
  subtitle?: string // è®¾è®¡å¸ˆ + å¹´ä»½
  subtitle_en?: string
  category: 'industrial' | 'music' | 'art' | 'architecture' | 'graphic' | 'software' | 'fashion' | 'film'
  designer: string
  year?: string
  
  // ä¸­æ–‡å†…å®¹
  dateConnection: string
  designerBio: string
  story: string
  legacy?: string
  significance?: string
  
  // è‹±æ–‡å†…å®¹
  dateConnection_en?: string
  designerBio_en?: string
  story_en?: string
  legacy_en?: string
  significance_en?: string
}

export const designs: DesignObject[] = [
  {
    id: '10',
    date: '2026-02-10',
    imageUrl: '/the-daily-object/images/up-chair.jpg',
    fullImageUrl: '/the-daily-object/images/full/up-chair.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/up-chair.jpg',
    title: 'UP5 & UP6',
    subtitle: 'Gaetano Pesce, 1969',
    category: 'industrial',
    designer: 'Gaetano Pesce',
    year: '1969',
    
    dateConnection: '1969å¹´ï¼ŒUP Series åœ¨ç±³å…°å®¶å…·å±•é¦–æ¬¡äº®ç›¸ï¼Œå½»åº•é¢ è¦†äº†äººä»¬å¯¹å®¶å…·çš„è®¤çŸ¥ã€‚Gaetano Pesce (1939-2024) æ˜¯20ä¸–çºªæœ€æ¿€è¿›çš„æ„å¤§åˆ©è®¾è®¡å¸ˆä¹‹ä¸€ï¼Œ2024å¹´4æœˆåœ¨çº½çº¦åŽ»ä¸–ï¼Œç•™ä¸‹äº†åŠä¸ªä¸–çºªçš„è®¾è®¡é©å‘½é—äº§ã€‚',
    
    designerBio: `Gaetano Pesce (1939-2024)ï¼Œæ„å¤§åˆ©å»ºç­‘å¸ˆã€è®¾è®¡å¸ˆï¼Œ20ä¸–çºªè®¾è®¡å…ˆé©±ã€‚

ä»–åœ¨å¨å°¼æ–¯å¤§å­¦è·Ÿéš Carlo Scarpa å’Œ Ernesto Rogers å­¦ä¹ å»ºç­‘ï¼Œä½†ä»–çš„é‡Žå¿ƒè¿œä¸æ­¢äºŽå»ºç­‘ã€‚ä»–è¦è®©è®¾è®¡æˆä¸º**ç¤¾ä¼šè¯„è®ºçš„å·¥å…·**â€”â€”æ¯ä¸€ä»¶ä½œå“éƒ½æœ‰è¯è¦è¯´ã€‚

**"Design should not be about beauty alone. It should provoke thought, create discourse, make people uncomfortable if necessary."**
è®¾è®¡ä¸åº”è¯¥åªå…³ä¹Žç¾Žã€‚å®ƒåº”è¯¥å¼•å‘æ€è€ƒã€åˆ›é€ å¯¹è¯ï¼Œå¿…è¦æ—¶è®©äººä¸å®‰ã€‚

ä»–çš„ä½œå“è¢« MoMAã€è“¬çš®æœä¸­å¿ƒã€V&A åšç‰©é¦†æ°¸ä¹…æ”¶è—ã€‚`,
    
    story: `1969å¹´ï¼Œç±³å…°å®¶å…·å±•ã€‚Pesce å±•ç¤ºäº†ä¸€ç³»åˆ—çœŸç©ºåŒ…è£…çš„å®¶å…·â€”â€”æ‰“å¼€åŒ…è£…ï¼Œèšæ°¨é…¯æ³¡æ²«åœ¨å‡ åˆ†é’Ÿå†…è†¨èƒ€æˆå®Œæ•´çš„æ¤…å­ã€‚

å…¶ä¸­æœ€éœ‡æ’¼çš„æ˜¯ UP5â€”â€”ä¸€ä¸ªä¸°è…´çš„å¥³æ€§èº¯å¹²å½¢æ€ï¼Œæ—è¾¹è¿žç€ä¸€ä¸ªçƒå½¢è„šå‡³ UP6ã€‚

**è¿™ä¸æ˜¯æŠ½è±¡çš„æ›²çº¿ï¼Œè¿™æ˜¯ä¸€ä¸ªè¢«å›šç¦çš„å¥³äººã€‚**

Pesce å…¬å¼€è§£é‡Šï¼šUP5 è±¡å¾å¥³æ€§ï¼ŒUP6 æ˜¯å¥¹è„šä¸Šçš„çƒå’Œé“¾â€”â€”ä»£è¡¨ç¤¾ä¼šå¯¹å¥³æ€§çš„æŸç¼šã€‚æ¤…å­çš„åå­—æ›¾è¢«ç§°ä¸º "La Mamma"ã€"Donna"ã€"Big Mama"ã€‚

è¯„è®ºå®¶éœ‡æƒŠäº†ã€‚è¿™æ˜¯å®¶å…·è¿˜æ˜¯å®£è¨€ï¼Ÿæ˜¯äº§å“è¿˜æ˜¯è‰ºæœ¯å“ï¼Ÿæ˜¯èˆ’é€‚è¿˜æ˜¯æŒ‘è¡…ï¼Ÿ

**ç­”æ¡ˆæ˜¯ï¼šå…¨éƒ½æ˜¯ã€‚**

è¿™æŠŠæ¤…å­å®šä¹‰äº†æ„å¤§åˆ©æ¿€è¿›è®¾è®¡è¿åŠ¨ï¼Œè¯æ˜Žå®¶å…·å¯ä»¥æ‰¿è½½æ”¿æ²»ä¿¡æ¯ã€‚`,
    
    legacy: `â€¢ æ¿€è¿›è®¾è®¡è¿åŠ¨ï¼šä¸Ž Superstudioã€Archizoom ä¸€èµ·å®šä¹‰äº†60å¹´ä»£æœ«æ„å¤§åˆ©è®¾è®¡çš„åå›ç²¾ç¥ž
â€¢ å¥³æ€§ä¸»ä¹‰è®¾è®¡ï¼šæœ€æ—©å°†æ€§åˆ«æ”¿æ²»æ˜Žç¡®èžå…¥å®¶å…·è®¾è®¡çš„ä½œå“ä¹‹ä¸€
â€¢ åŒ…è£…åˆ›æ–°ï¼šçœŸç©ºåŽ‹ç¼©åŒ…è£…æ˜¯å½“æ—¶çš„æŠ€æœ¯çªç ´ï¼Œå½±å“äº†åŽæ¥ IKEA çš„å¹³æ¿åŒ…è£…ç†å¿µ
â€¢ åšç‰©é¦†å…¸è—ï¼šMoMAã€V&Aã€è“¬çš®æœä¸­å¿ƒæ°¸ä¹…æ”¶è—ï¼Œæˆä¸º20ä¸–çºªè®¾è®¡å²çš„æ ‡å¿—`,
    
    significance: `Pesce è¯æ˜Žäº†è®¾è®¡å¯ä»¥æ˜¯æ¿€è¿›çš„ã€æ”¿æ²»çš„ã€ä¸èˆ’æœçš„â€”â€”åŒæ—¶ä»ç„¶æ˜¯ç¾Žçš„ã€‚

UP5 åèµ·æ¥ä»¤äººæƒŠè®¶åœ°èˆ’é€‚ã€‚å®ƒåŒ…è£¹ç€ä½ ï¼Œåƒä¸€ä¸ªæ‹¥æŠ±ã€‚ä½†æ¯æ¬¡ä½ åä¸‹ï¼Œä½ éƒ½è¢«è¿«æƒ³èµ·å®ƒçš„å«ä¹‰ã€‚è¿™å°±æ˜¯ Pesce çš„å¤©æ‰ï¼š**ä»–è®©æ‰¹åˆ¤å˜å¾—äº²å¯†ï¼Œè®©æ”¿æ²»å˜å¾—å®¶å¸¸ã€‚**

åœ¨ä»–2024å¹´åŽ»ä¸–åŽï¼Œè®¾è®¡ç•Œå¤±åŽ»äº†æœ€åŽä¸€ä½æ•¢äºŽè¯´"è®¾è®¡ä¸åªæ˜¯è§£å†³é—®é¢˜"çš„å¤§å¸ˆã€‚`,

    dateConnection_en: 'In 1969, the UP Series debuted at the Milan Furniture Fair, completely revolutionizing how people perceived furniture. Gaetano Pesce (1939-2024) was one of the most radical Italian designers of the 20th century, passing away in New York in April 2024, leaving behind half a century of design revolution.',
    
    designerBio_en: `Gaetano Pesce (1939-2024), Italian architect and designer, a 20th-century design pioneer.

He studied architecture at the University of Venice under Carlo Scarpa and Ernesto Rogers, but his ambitions went far beyond architecture. He wanted design to be **a tool for social commentary**â€”every piece had something to say.

**"Design should not be about beauty alone. It should provoke thought, create discourse, make people uncomfortable if necessary."**

His works are in the permanent collections of MoMA, Centre Pompidou, and the V&A Museum.`,
    
    story_en: `1969, Milan Furniture Fair. Pesce unveiled a series of vacuum-packed furnitureâ€”open the package, and polyurethane foam expands into a complete chair within minutes.

The most stunning was UP5â€”a voluptuous female torso shape, connected to a ball-shaped ottoman, UP6.

**This wasn't an abstract curve. This was an imprisoned woman.**

Pesce publicly explained: UP5 symbolizes woman, UP6 is the ball and chain at her feetâ€”representing society's constraints on women. The chair has been called "La Mamma," "Donna," "Big Mama."

Critics were stunned. Was this furniture or manifesto? Product or artwork? Comfort or provocation?

**The answer: all of the above.**

This chair defined the Italian Radical Design movement, proving furniture could carry political messages.`,
    
    legacy_en: `â€¢ Radical Design movement: Alongside Superstudio and Archizoom, defined the rebellious spirit of late-60s Italian design
â€¢ Feminist design: One of the first works to explicitly integrate gender politics into furniture design
â€¢ Packaging innovation: Vacuum compression packaging was a technological breakthrough, influencing IKEA's later flat-pack concept
â€¢ Museum collections: Permanently housed in MoMA, V&A, Centre Pompidouâ€”icons of 20th-century design history`,
    
    significance_en: `Pesce proved that design can be radical, political, uncomfortableâ€”while still being beautiful.

UP5 is surprisingly comfortable to sit in. It wraps around you like an embrace. But every time you sit down, you're forced to consider its meaning. This was Pesce's genius: **he made critique intimate, made politics domestic.**

After his death in 2024, the design world lost its last master who dared to say "design is not just problem-solving."`
  },
  {
    id: '9',
    date: '2026-02-11',
    imageUrl: '/the-daily-object/images/mcqueen-horn-of-plenty.jpg',
    fullImageUrl: '/the-daily-object/images/full/mcqueen-horn-of-plenty.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/mcqueen-horn-of-plenty.jpg',
    title: 'The Horn of Plenty',
    subtitle: 'Alexander McQueen, 2009',
    category: 'art',
    designer: 'Alexander McQueen',
    year: '2009',
    
    dateConnection: '2010å¹´2æœˆ11æ—¥ï¼ŒAlexander McQueen åœ¨ä¼¦æ•¦å®¶ä¸­è‡ªæ€èº«äº¡ï¼Œäº«å¹´40å²ã€‚ä»–æ˜¯21ä¸–çºªæœ€é‡è¦çš„æ—¶è£…è®¾è®¡å¸ˆä¹‹ä¸€ï¼Œå°†æ—¶è£…ç§€å˜æˆäº†å‰§åœºè‰ºæœ¯ã€‚',
    
    designerBio: `Lee Alexander McQueen (1969-2010)ï¼Œè‹±å›½æ—¶è£…è®¾è®¡å¸ˆï¼Œè¢«ç§°ä¸º"è‹±å›½æ—¶å°šç•Œçš„åå­©å­"ï¼ˆl'enfant terribleï¼‰ã€‚

ä»–16å²è¾å­¦åŽ»è¨ç»´å°”è¡—å½“è£ç¼å­¦å¾’ï¼Œ25å²å°±æˆä¸ºçºªæ¢µå¸Œçš„åˆ›æ„æ€»ç›‘ã€‚ä»–çš„ç§€åœºåƒææ€–ç‰‡ã€åƒæ¢¦é­‡ã€åƒè¯—â€”â€”æ¨¡ç‰¹ä»ŽçŽ»ç’ƒç®±é‡Œèµ°å‡ºæ¥ï¼Œè¢«æœºå™¨äººå–·æ¼†ï¼Œåœ¨æš´é£Žé›ªä¸­è¡Œèµ°ã€‚

**"I want to empower women. I want people to be afraid of the women I dress."**
æˆ‘æƒ³èµ‹äºˆå¥³æ€§åŠ›é‡ã€‚æˆ‘æƒ³è®©äººä»¬å®³æ€•æˆ‘ç©¿ç€çš„å¥³äººã€‚

ä»–çš„è‡ªæ€å‘ç”Ÿåœ¨æ¯äº²è‘¬ç¤¼å‰å‡ å¤©ã€‚æ—¶å°šç•Œè‡³ä»Šæ— äººèƒ½å¡«è¡¥ä»–ç•™ä¸‹çš„ç©ºç™½ã€‚`,
    
    story: `The Horn of Plenty æ˜¯ McQueen 2009 ç§‹å†¬ç³»åˆ—ï¼Œä¹Ÿæ˜¯ä»–ç”Ÿå‰å€’æ•°ç¬¬äºŒä¸ªç³»åˆ—ã€‚

æ•´åœºç§€æ˜¯å¯¹æ—¶å°šäº§ä¸šçš„**è‡ªæˆ‘æ‰¹åˆ¤**ã€‚å·¨å¤§çš„åžƒåœ¾å †æž„æˆ T å°èƒŒæ™¯ï¼Œæ¨¡ç‰¹æˆ´ç€å¤¸å¼ åˆ°ç•¸å½¢çš„å¤´é¥°â€”â€”è®½åˆºæ—¶å°šç•Œå¯¹"æ–°"çš„ç—…æ€è¿½æ±‚ã€‚

ä½†åœ¨åžƒåœ¾å’Œè®½åˆºä¹‹ä¸‹ï¼Œæ˜¯æ— ä¸Žä¼¦æ¯”çš„å·¥è‰ºã€‚ç¾½æ¯›è£™ä»Žè‚©è†€å»¶ä¼¸åˆ°åœ°é¢ï¼Œæ¯ä¸€ç‰‡ç¾½æ¯›éƒ½ç»è¿‡æ‰‹å·¥æŸ“è‰²å’Œå®šä½ã€‚é¢æ–™çš„å¤„ç†ã€å‰ªè£çš„ç²¾ç¡®ã€å¯¹äººä½“çš„ç†è§£â€”â€”è¿™æ˜¯é«˜çº§å®šåˆ¶çš„å·…å³°ã€‚

**McQueen ç”¨æœ€ç¾Žçš„æ–¹å¼è¯´äº†æœ€ä¸‘é™‹çš„çœŸç›¸ï¼šæ—¶å°šåœ¨æ¶ˆè´¹è‡ªå·±ã€‚**`,
    
    legacy: `â€¢ æ—¶è£…è¡¨æ¼”è‰ºæœ¯ï¼šè¯æ˜Ž runway show å¯ä»¥æ˜¯å®Œæ•´çš„è‰ºæœ¯ä½œå“ï¼Œè€Œéžå•†å“å±•ç¤º
â€¢ V&A "Savage Beauty" å±•è§ˆï¼š2015å¹´æˆä¸º V&A å²ä¸Šæœ€æˆåŠŸçš„å±•è§ˆï¼ŒæŽ’é˜Ÿé•¿è¾¾6å°æ—¶
â€¢ æƒ…æ„Ÿè®¾è®¡ï¼šMcQueen è¯æ˜Žè®¾è®¡å¯ä»¥æ˜¯åˆ›ä¼¤ã€æ„¤æ€’ã€ç¾Žä¸½çš„å¤æ‚æ··åˆ
â€¢ åŽç»§è€… Sarah Burtonï¼šç»§æ‰¿å“ç‰Œå¹¶è®¾è®¡äº†å‡¯ç‰¹çŽ‹å¦ƒçš„å©šçº±`,
    
    significance: `McQueen ä¸æ˜¯åœ¨"è®¾è®¡è¡£æœ"â€”â€”ä»–åœ¨è®²æ•…äº‹ã€åœ¨æ²»ç–—ã€åœ¨å¯¹æŠ—ã€‚

ä»–çš„æ¯ä¸ªç³»åˆ—éƒ½æœ‰ä¸€ä¸ªå®Œæ•´çš„å™äº‹ï¼šè¢«å¥³å·«çƒ§æ­»çš„ç¥–å…ˆã€è‹æ ¼å…°é«˜åœ°çš„å± æ€ã€æ·±æµ·çš„ç”Ÿç‰©ã€‚è¡£æœæ˜¯å™äº‹çš„è½½ä½“ï¼ŒTå°æ˜¯å‰§åœºï¼Œæ¨¡ç‰¹æ˜¯è§’è‰²ã€‚

è¿™ç§æ–¹æ³•è®ºâ€”â€”è®¾è®¡ä½œä¸ºè¡¨è¾¾ï¼Œè€Œéžå•†å“â€”â€”å½±å“äº†æ•´æ•´ä¸€ä»£è®¾è®¡å¸ˆã€‚`,

    dateConnection_en: 'On February 11, 2010, Alexander McQueen took his own life at his London home at age 40. He was one of the most important fashion designers of the 21st century, transforming fashion shows into theatrical art.',
    
    designerBio_en: `Lee Alexander McQueen (1969-2010), British fashion designer, known as "l'enfant terrible" of British fashion.

He dropped out of school at 16 to apprentice on Savile Row, and became creative director of Givenchy at 25. His shows were like horror films, like nightmares, like poetryâ€”models emerged from glass boxes, were spray-painted by robots, walked through blizzards.

**"I want to empower women. I want people to be afraid of the women I dress."**

His suicide occurred just days before his mother's funeral. The fashion world has yet to fill the void he left.`,
    
    story_en: `The Horn of Plenty was McQueen's Autumn/Winter 2009 collection, his second-to-last before his death.

The entire show was a **self-critique of the fashion industry**. A massive garbage heap formed the runway backdrop, models wore grotesquely exaggerated headpiecesâ€”satirizing fashion's pathological pursuit of "newness."

But beneath the trash and satire was unparalleled craftsmanship. Feather gowns extended from shoulders to floor, each feather hand-dyed and positioned. The fabric treatment, precision of cut, understanding of the bodyâ€”this was haute couture at its peak.

**McQueen told the ugliest truth in the most beautiful way: fashion is consuming itself.**`,
    
    legacy_en: `â€¢ Fashion as performance art: Proved runway shows could be complete artworks, not merchandise displays
â€¢ V&A "Savage Beauty" exhibition: Became V&A's most successful exhibition in 2015, with 6-hour queues
â€¢ Emotional design: McQueen proved design could be a complex mixture of trauma, anger, and beauty
â€¢ Successor Sarah Burton: Inherited the brand and designed Kate Middleton's wedding dress`,
    
    significance_en: `McQueen wasn't "designing clothes"â€”he was telling stories, healing, fighting back.

Each collection had a complete narrative: ancestors burned as witches, Highland massacres, deep-sea creatures. Clothes were vehicles for narrative, the runway was theater, models were characters.

This methodologyâ€”design as expression, not commodityâ€”influenced an entire generation of designers.`
  },
  {
    id: '8',
    date: '2026-02-12',
    imageUrl: '/the-daily-object/images/boullee-cenotaph-newton.jpg',
    fullImageUrl: '/the-daily-object/images/full/boullee-cenotaph-newton.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/boullee-cenotaph-newton.jpg',
    title: 'ç‰›é¡¿çºªå¿µå ‚',
    title_en: 'Cenotaph for Newton',
    subtitle: 'Ã‰tienne-Louis BoullÃ©e, 1784',
    category: 'architecture',
    designer: 'Ã‰tienne-Louis BoullÃ©e',
    year: '1784',
    
    dateConnection: '1728å¹´2æœˆ12æ—¥ï¼ŒÃ‰tienne-Louis BoullÃ©e å‡ºç”ŸäºŽå·´é»Žã€‚ä»–æ˜¯å»ºç­‘å²ä¸Šæœ€ä¼Ÿå¤§çš„ç©ºæƒ³å®¶ä¹‹ä¸€â€”â€”ä»–è®¾è®¡çš„å»ºç­‘ä»Žæœªå»ºæˆï¼Œå´å½±å“äº†æ­¤åŽä¸¤ç™¾å¹´çš„å»ºç­‘æ€æƒ³ã€‚ä»–çš„"ç‰›é¡¿çºªå¿µå ‚"æ˜¯äººç±»æƒ³è±¡åŠ›æœ€å£®ä¸½çš„å»ºç­‘å›¾çº¸ã€‚',
    
    designerBio: `Ã‰tienne-Louis BoullÃ©eï¼ˆ1728-1799ï¼‰ï¼Œæ³•å›½å»ºç­‘å¸ˆã€å»ºç­‘ç†è®ºå®¶ï¼Œ"çº¸ä¸Šå»ºç­‘"ï¼ˆPaper Architectureï¼‰çš„å…ˆé©±ã€‚

ä»–åœ¨å·´é»Žå‡ºç”Ÿé•¿å¤§ï¼Œå¹´è½»æ—¶å¸ˆä»Žå¤šä½å»ºç­‘å¸ˆï¼Œ25å²è¢«é€‰å…¥æ³•å…°è¥¿çš‡å®¶å»ºç­‘å­¦é™¢ã€‚ä»–çš„å®žé™…å»ºé€ ä½œå“ä¸å¤šâ€”â€”å‡ åº§å·´é»Žç§äººå®…é‚¸â€”â€”ä½†ä»–çœŸæ­£çš„è´¡çŒ®åœ¨äºŽé‚£äº›æ°¸è¿œä¸ä¼šï¼ˆä¹Ÿä¸å¯èƒ½ï¼‰å»ºæˆçš„è®¾è®¡ã€‚

1780å¹´ä»£ï¼Œä»–å¼€å§‹åˆ›ä½œä¸€ç³»åˆ—å®å¤§çš„"ç©ºæƒ³å»ºç­‘"å›¾çº¸ï¼šå·¨å¤§çš„çƒä½“ã€æ— é™å»¶ä¼¸çš„æŸ±å»Šã€åžå™¬å¤©é™…çº¿çš„é‡‘å­—å¡”ã€‚è¿™äº›è®¾è®¡çš„å°ºåº¦è¿œè¶…å½“æ—¶çš„å·¥ç¨‹èƒ½åŠ›ï¼Œä½†å®ƒä»¬çš„çœŸæ­£ç›®çš„ä¸æ˜¯å»ºé€ â€”â€”è€Œæ˜¯**æ€è€ƒ**ã€‚

**"æˆ‘ä»¬å¿…é¡»ç”¨å»ºç­‘æ¥è¡¨è¾¾å´‡é«˜ã€‚"**

ä»–åœ¨é—è‘—ã€Šå»ºç­‘è®ºã€‹ä¸­å†™é“ï¼šå»ºç­‘ä¸ä»…æ˜¯é®é£ŽæŒ¡é›¨çš„å®¹å™¨ï¼Œæ›´æ˜¯äººç±»æƒ…æ„Ÿå’Œæ€æƒ³çš„ç‰©è´¨åŒ–èº«ã€‚`,
    
    story: `1784å¹´ï¼ŒBoullÃ©e ç”»å‡ºäº†å»ºç­‘å²ä¸Šæœ€éœ‡æ’¼äººå¿ƒçš„å›¾çº¸ï¼šç‰›é¡¿çºªå¿µå ‚ï¼ˆCÃ©notaphe de Newtonï¼‰ã€‚

è¿™æ˜¯ä¸€ä¸ªç›´å¾„çº¦150ç±³çš„å·¨å¤§çƒä½“ï¼Œåè½åœ¨å±‚å±‚çŽ¯å½¢é˜¶æ¢¯ä¹‹ä¸Šã€‚çƒä½“å†…éƒ¨æ˜¯ä¸€ä¸ªæ¨¡æ‹Ÿæ˜Ÿç©ºçš„å·¨å¤§ç©ºé—´â€”â€”ç™½å¤©ï¼Œé˜³å…‰é€šè¿‡çƒå£³ä¸Šå¯†å¸ƒçš„å°å­”å°„å…¥ï¼Œåœ¨é»‘æš—çš„å†…å£ä¸ŠæŠ•å°„å‡ºæ»¡å¤©ç¹æ˜Ÿçš„æ•ˆæžœã€‚å¤œæ™šï¼Œä¸­å¤®æ‚¬æŒ‚ä¸€ç›å·¨å¤§çš„ç¯ï¼Œæ¨¡æ‹Ÿå¤ªé˜³ã€‚

**å»ºç­‘æœ¬èº«æˆä¸ºäº†ä¸€å°å¤©æ–‡ä»ªå™¨ã€‚**

ç‰›é¡¿çš„æ£ºæ¤æ”¾åœ¨çƒä½“åº•éƒ¨çš„æ­£ä¸­å¤®â€”â€”ä¸€ä¸ªäººï¼Œé¢å¯¹æ•´ä¸ªå®‡å®™ã€‚

è¿™ä¸ªè®¾è®¡ä»Žæœªå»ºé€ ï¼ŒæŠ€æœ¯ä¸Šä¹Ÿå‡ ä¹Žä¸å¯èƒ½å»ºé€ ï¼ˆ150ç±³è·¨åº¦çš„çƒä½“åœ¨18ä¸–çºªæ˜¯å¤©æ–¹å¤œè°­ï¼‰ã€‚ä½†è¿™æ°æ°æ˜¯å®ƒçš„åŠ›é‡æ‰€åœ¨ï¼šå®ƒä¸å—ææ–™å’Œç»“æž„çš„é™åˆ¶ï¼Œçº¯ç²¹åœ°è¡¨è¾¾äº†ä¸€ä¸ªå»ºç­‘æ€æƒ³â€”â€”**ç©ºé—´å¯ä»¥è®©äººæ„Ÿå—åˆ°å´‡é«˜ã€æ¸ºå°å’Œå®‡å®™çš„æ— é™ã€‚**

å›¾çº¸ä¸­å¾®å°çš„äººå½±ä¸Žå·¨å¤§çƒä½“çš„å¯¹æ¯”ï¼Œä¼ è¾¾å‡ºä¸€ç§ä»¤äººçª’æ¯çš„å£®ç¾Žã€‚è¿™ä¸æ˜¯å»ºç­‘æ–¹æ¡ˆï¼Œè¿™æ˜¯å“²å­¦å®£è¨€ã€‚`,

    legacy: `BoullÃ©e çš„å½±å“è¿œè¶…ä»–çš„æ—¶ä»£ï¼š

**çº¸ä¸Šå»ºç­‘çš„å…ˆé©±**ï¼šä»–è¯æ˜Žäº†å»ºç­‘å›¾çº¸æœ¬èº«å¯ä»¥æ˜¯è‰ºæœ¯ä½œå“ï¼Œå½±å“äº†ä»Ž Piranesi åˆ° Lebbeus Woods åˆ° Zaha Hadid çš„æ‰€æœ‰"çº¸ä¸Šå»ºç­‘å¸ˆ"

**å·¨æž„å»ºç­‘çš„çµæ„Ÿæºæ³‰**ï¼šä»–å¯¹å·¨å¤§å°ºåº¦çš„è¿·æ‹ç›´æŽ¥å½±å“äº†20ä¸–çºªçš„å·¨æž„ä¸»ä¹‰ï¼ˆMegastructureï¼‰å’Œç§‘å¹»å»ºç­‘æƒ³è±¡

**å…‰ä¸Žç©ºé—´**ï¼šä»–å¯¹å…‰çº¿ä½œä¸ºå»ºç­‘ææ–™çš„ç†è§£ï¼Œé¢„è¨€äº†å®‰è—¤å¿ é›„çš„å…‰ä¹‹æ•™å ‚å’Œ James Turrell çš„å¤©ç©ºç©ºé—´

**å»ºç­‘ä½œä¸ºä½“éªŒ**ï¼šä»–æŠŠå»ºç­‘ä»Ž"åŠŸèƒ½å®¹å™¨"æå‡ä¸º"æƒ…æ„Ÿä½“éªŒ"ï¼Œè¿™ä¸€æ€æƒ³åœ¨ä»Šå¤©çš„ä½“éªŒå¼å»ºç­‘ï¼ˆå¦‚ teamLab ç©ºé—´ï¼‰ä¸­å»¶ç»­

**é©å‘½å»ºç­‘ç¾Žå­¦**ï¼šä»–çš„å‡ ä½•çº¯ç²¹æ€§â€”â€”çƒä½“ã€åœ†æŸ±ã€é‡‘å­—å¡”â€”â€”ç›´æŽ¥å½±å“äº†åŽæ¥çš„æ–°å¤å…¸ä¸»ä¹‰å’ŒçŽ°ä»£ä¸»ä¹‰å»ºç­‘`,
    
    significance: `ä¸ºä»€ä¹ˆä¸€åº§ä»Žæœªå»ºæˆçš„å»ºç­‘ï¼Œæ¯”å¤§å¤šæ•°å»ºæˆçš„å»ºç­‘æ›´é‡è¦ï¼Ÿ

å› ä¸º BoullÃ©e æ­ç¤ºäº†å»ºç­‘çš„ç»ˆæžæœ¬è´¨ï¼š**å»ºç­‘ä¸æ˜¯å…³äºŽç –çŸ³ï¼Œè€Œæ˜¯å…³äºŽç©ºé—´å¦‚ä½•è®©äººæ„Ÿå—ã€‚**

ç‰›é¡¿çºªå¿µå ‚ä¸éœ€è¦å»ºæˆå°±å·²ç»å®Œæˆäº†å®ƒçš„ä½¿å‘½â€”â€”å®ƒè®©æ¯ä¸€ä¸ªçœ‹åˆ°å›¾çº¸çš„äººéƒ½æ„Ÿå—åˆ°äº†å®‡å®™çš„æµ©ç€šå’Œäººç±»çš„æ¸ºå°ã€‚è¿™ç§æ„Ÿå—æœ¬èº«å°±æ˜¯å»ºç­‘ã€‚

åœ¨ä»Šå¤©è¿™ä¸ªè™šæ‹ŸçŽ°å®žå’Œå…ƒå®‡å®™çš„æ—¶ä»£ï¼ŒBoullÃ©e çš„æ€æƒ³æ¯”ä»¥å¾€ä»»ä½•æ—¶å€™éƒ½æ›´æœ‰æ„ä¹‰ï¼š**å½“å»ºç­‘å¯ä»¥è„±ç¦»ç‰©ç†é™åˆ¶æ—¶ï¼Œä»€ä¹ˆæ‰æ˜¯çœŸæ­£é‡è¦çš„ï¼Ÿç­”æ¡ˆæ˜¯ä½“éªŒâ€”â€”æ˜¯ç©ºé—´å¸¦ç»™äººçš„æ„Ÿå—ã€‚**

240å¹´å‰ï¼ŒBoullÃ©e å·²ç»åœ¨æ€è€ƒè¿™ä¸ªé—®é¢˜äº†ã€‚`,

    dateConnection_en: 'On February 12, 1728, Ã‰tienne-Louis BoullÃ©e was born in Paris. He was one of architecture\'s greatest visionaries â€” his buildings were never built, yet they influenced architectural thought for the next two centuries. His "Cenotaph for Newton" is the most magnificent architectural drawing in human imagination.',
    
    designerBio_en: `Ã‰tienne-Louis BoullÃ©e (1728-1799), French architect and architectural theorist, pioneer of "Paper Architecture."

Born and raised in Paris, he studied under several architects and was admitted to the Royal Academy of Architecture at 25. His actual built works were few â€” several Parisian private residences â€” but his true contribution lay in designs that would never (and could never) be built.

In the 1780s, he began creating a series of grandiose "visionary architecture" drawings: enormous spheres, infinitely extending colonnades, pyramids that swallow the skyline. These designs far exceeded the engineering capabilities of the time, but their true purpose was not construction â€” it was **thinking**.

**"We must use architecture to express the sublime."**

In his posthumous treatise on architecture, he wrote: architecture is not merely a shelter from the elements, but the material embodiment of human emotion and thought.`,
    
    story_en: `In 1784, BoullÃ©e produced the most awe-inspiring drawings in architectural history: the Cenotaph for Newton (CÃ©notaphe de Newton).

It is an enormous sphere roughly 150 meters in diameter, set upon tiered circular platforms. The interior is a vast space simulating the night sky â€” during the day, sunlight enters through countless tiny perforations in the shell, projecting a field of stars onto the darkened interior walls. At night, a massive lamp hangs at the center, simulating the sun.

**The building itself becomes an astronomical instrument.**

Newton's sarcophagus sits at the very center of the sphere's base â€” one person, facing the entire universe.

This design was never built, and was technically almost impossible to build (a 150-meter span sphere was fantasy in the 18th century). But that is precisely its power: freed from the constraints of materials and structure, it purely expresses an architectural idea â€” **space can make people feel the sublime, their own smallness, and the infinity of the universe.**

The contrast between tiny human figures and the massive sphere in the drawings conveys a breathtaking grandeur. This is not a building proposal; it is a philosophical manifesto.`,

    legacy_en: `BoullÃ©e's influence extends far beyond his own era:

**Pioneer of Paper Architecture**: He proved that architectural drawings could be works of art in themselves, influencing every "paper architect" from Piranesi to Lebbeus Woods to Zaha Hadid

**Megastructure inspiration**: His fascination with enormous scale directly influenced 20th-century Megastructuralism and science-fiction architectural imagination

**Light and space**: His understanding of light as an architectural material foreshadowed Tadao Ando's Church of the Light and James Turrell's Skyspaces

**Architecture as experience**: He elevated architecture from "functional container" to "emotional experience" â€” a concept that lives on in today's experiential architecture (such as teamLab spaces)

**Revolutionary architectural aesthetics**: His geometric purity â€” spheres, cylinders, pyramids â€” directly influenced later Neoclassical and Modernist architecture`,
    
    significance_en: `Why is a building that was never built more important than most buildings that were?

Because BoullÃ©e revealed architecture's ultimate essence: **architecture is not about bricks and stone â€” it's about how space makes people feel.**

The Cenotaph for Newton accomplished its mission without ever being built â€” it made everyone who saw the drawings feel the vastness of the universe and the smallness of humanity. That feeling itself is architecture.

In today's era of virtual reality and the metaverse, BoullÃ©e's thinking is more relevant than ever: **when architecture can be freed from physical constraints, what truly matters? The answer is experience â€” the feeling that space gives to people.**

240 years ago, BoullÃ©e was already thinking about this question.`
  },
  {
    id: '7',
    date: '2026-02-13',
    imageUrl: '/the-daily-object/images/panton-chair.jpg?v=2',
    fullImageUrl: '/the-daily-object/images/full/panton-chair.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/panton-chair.jpg',
    title: 'Panton Chair',
    subtitle: 'Verner Panton, 1967',
    category: 'industrial',
    designer: 'Verner Panton',
    year: '1967',
    
    dateConnection: '2æœˆ13æ—¥æ˜¯ Verner Panton çš„ç”Ÿæ—¥ï¼ˆ1926å¹´ï¼‰ã€‚ä»–æ˜¯ä¸¹éº¦æœ€æ¿€è¿›çš„å®¶å…·è®¾è®¡å¸ˆï¼Œç”¨å¡‘æ–™é¢ è¦†äº†åŒ—æ¬§è®¾è®¡çš„ä¼ ç»Ÿç¾Žå­¦ã€‚',
    
    designerBio: `Verner Panton (1926-1998)ï¼Œä¸¹éº¦è®¾è®¡å¸ˆï¼Œ20ä¸–çºªæœ€å…·å®žéªŒæ€§çš„å®¶å…·è®¾è®¡å¸ˆä¹‹ä¸€ã€‚

ä»–æ›¾åœ¨ Arne Jacobsen å·¥ä½œå®¤å·¥ä½œï¼Œä½†å¾ˆå¿«èµ°ä¸Šäº†å®Œå…¨ä¸åŒçš„é“è·¯ã€‚åŒ—æ¬§è®¾è®¡è®²ç©¶æœ¨å¤´ã€è‡ªç„¶ã€å…‹åˆ¶ï¼›ä»–åè¦ç”¨å¡‘æ–™ã€æ›²çº¿ã€è‰²å½©çˆ†ç‚¸ã€‚

**"A less successful experiment is preferable to a beautiful platitude."**
ä¸€ä¸ªä¸å¤ªæˆåŠŸçš„å®žéªŒï¼Œä¹Ÿæ¯”ä¸€å¥æ¼‚äº®çš„é™ˆè¯æ»¥è°ƒå¥½ã€‚

ä»–è®¾è®¡çš„ç©ºé—´åƒè¿·å¹»è¯ä¸€æ ·åˆºæ¿€â€”â€”å¤©èŠ±æ¿ã€å¢™å£ã€åœ°æ¿å…¨éƒ¨æ˜¯æœ‰æœºæ›²çº¿ï¼Œè‰²å½©é¥±å’Œåˆ°è®©äººçª’æ¯ã€‚`,
    
    story: `Panton Chair æ˜¯åŽ†å²ä¸Š**ç¬¬ä¸€æŠŠç”¨å•ä¸€ææ–™ä¸€æ¬¡æˆåž‹çš„æ¤…å­**ã€‚

ä»Ž 1960 å¹´å¼€å§‹ï¼ŒPanton å°±æƒ³åšä¸€æŠŠæ²¡æœ‰è…¿çš„æ¤…å­â€”â€”ä¸€ä¸ªè¿žç»­çš„ S æ›²çº¿ï¼Œä»Žåœ°é¢æµå‘åº§é¢å†åˆ°é èƒŒã€‚æ¦‚å¿µå¾ˆç®€å•ï¼Œæ‰§è¡Œå´æžéš¾ã€‚

ä»–æ‰¾äº†åå‡ å®¶åŽ‚å•†ï¼Œéƒ½è¯´åšä¸å‡ºæ¥ã€‚ç›´åˆ° 1967 å¹´ï¼ŒVitra ç»ˆäºŽç”¨æ–°åž‹å¡‘æ–™æ³¨å¡‘å·¥è‰ºå®žçŽ°äº†è¿™ä¸ªè®¾è®¡ã€‚

**ä¸€æŠŠæ¤…å­ï¼Œæ²¡æœ‰ä¸€ä¸ªæŽ¥ç¼ã€ä¸€é¢—èžºä¸ã€‚**

å®ƒæŒ‘æˆ˜äº†"æ¤…å­åº”è¯¥é•¿ä»€ä¹ˆæ ·"çš„æ‰€æœ‰å‡è®¾ã€‚å¯ä»¥å æ”¾ã€å¯ä»¥æˆ·å¤–ä½¿ç”¨ã€å¯ä»¥æ˜¯ä»»ä½•é¢œè‰²ã€‚å¹´è½»äººæŠŠå®ƒå½“æˆåå›çš„ç¬¦å·ã€‚`,
    
    legacy: `â€¢ å¡‘æ–™å®¶å…·é©å‘½ï¼šè¯æ˜Žå¡‘æ–™å¯ä»¥æ˜¯é«˜ç«¯ææ–™ï¼Œä¸åªæ˜¯"å»‰ä»·æ›¿ä»£å“"
â€¢ ä¸€ä½“æˆåž‹è®¾è®¡ï¼šå½±å“äº†åŽæ¥æ‰€æœ‰çš„æ¨¡å—åŒ–ã€å¯å †å å®¶å…·è®¾è®¡
â€¢ MoMA æ°¸ä¹…æ”¶è—ï¼šæˆä¸º 20 ä¸–çºªè®¾è®¡å²çš„æ ‡å¿—æ€§ä½œå“
â€¢ è‰²å½©è¿ç”¨ï¼šæ‰“ç ´äº†åŒ—æ¬§è®¾è®¡"é»‘ç™½ç°åŽŸæœ¨"çš„åˆ»æ¿å°è±¡`,
    
    significance: `Panton è¯æ˜Žäº†è®¾è®¡å¯ä»¥æ˜¯çº¯ç²¹çš„ä¹è¶£ã€‚

åœ¨ä¸€ä¸ªè®²ç©¶åŠŸèƒ½ã€ç†æ€§ã€å…‹åˆ¶çš„æ—¶ä»£ï¼Œä»–è¯´ï¼šè®¾è®¡ä¹Ÿå¯ä»¥æ˜¯æƒ…ç»ªã€æ˜¯è‰²å½©ã€æ˜¯è®©äººå¾®ç¬‘çš„æ›²çº¿ã€‚è¿™æŠŠæ¤…å­ä¸ä»…åèµ·æ¥èˆ’æœï¼Œçœ‹èµ·æ¥å°±è®©äººå¼€å¿ƒã€‚`,

    dateConnection_en: 'February 13 is Verner Panton\'s birthday (1926). He was Denmark\'s most radical furniture designer, using plastic to subvert traditional Scandinavian design aesthetics.',
    
    designerBio_en: `Verner Panton (1926-1998), Danish designer, one of the most experimental furniture designers of the 20th century.

He worked at Arne Jacobsen's studio but soon took a completely different path. Nordic design emphasized wood, nature, and restraint; he insisted on plastic, curves, and color explosions.

**"A less successful experiment is preferable to a beautiful platitude."**

His designed spaces were like psychedelic tripsâ€”ceilings, walls, floors all organic curves, colors saturated to suffocation.`,
    
    story_en: `The Panton Chair is **the first chair in history molded from a single material in one piece**.

Starting in 1960, Panton wanted to make a chair without legsâ€”a continuous S-curve flowing from floor to seat to backrest. The concept was simple; execution was extremely difficult.

He approached dozens of manufacturers; all said it couldn't be done. Finally in 1967, Vitra achieved the design using new plastic injection molding technology.

**One chair, not a single seam, not a single screw.**

It challenged every assumption about "what a chair should look like." Stackable, outdoor-friendly, available in any color. Young people adopted it as a symbol of rebellion.`,
    
    legacy_en: `â€¢ Plastic furniture revolution: Proved plastic could be a premium material, not just a "cheap substitute"
â€¢ One-piece molding design: Influenced all subsequent modular, stackable furniture design
â€¢ MoMA permanent collection: Became an iconic work of 20th-century design history
â€¢ Color application: Broke the Scandinavian design stereotype of "black, white, gray, and wood"`,
    
    significance_en: `Panton proved that design can be pure joy.

In an era obsessed with function, rationality, and restraint, he said: design can also be emotion, color, curves that make people smile. This chair isn't just comfortable to sit inâ€”it's happy just to look at.`
  },
  {
    id: '6',
    date: '2026-02-14',
    imageUrl: '/the-daily-object/images/i-love-ny.jpg',
    fullImageUrl: '/the-daily-object/images/full/i-love-ny.png',
    thumbnailUrl: '/the-daily-object/thumbnails/i-love-ny.jpg',
    title: 'I â™¥ NY',
    subtitle: 'Milton Glaser, 1977',
    category: 'art',
    designer: 'Milton Glaser',
    year: '1977',
    
    dateConnection: '2æœˆ14æ—¥æ˜¯æƒ…äººèŠ‚ã€‚è€Œ I â™¥ NY æ˜¯è®¾è®¡å²ä¸Šæœ€è‘—åçš„"çˆ±"çš„è¡¨è¾¾â€”â€”ç”¨ä¸€ä¸ªç¬¦å·ä»£æ›¿äº†ä¸€ä¸ªè¯ï¼Œæ”¹å˜äº†è§†è§‰ä¼ è¾¾çš„è¯­è¨€ã€‚',
    
    designerBio: `Milton Glaser (1929-2020)ï¼Œç¾Žå›½å¹³é¢è®¾è®¡å¸ˆï¼Œè¢«ç§°ä¸º"ç¾Žå›½å¹³é¢è®¾è®¡ä¹‹çˆ¶"ã€‚

ä»–è”åˆåˆ›åŠžäº† Push Pin Studiosï¼Œé‡æ–°å®šä¹‰äº†æ’ç”»å’Œå¹³é¢è®¾è®¡çš„å…³ç³»ã€‚ä»–è®¾è®¡äº† Bob Dylan é‚£å¼ è¿·å¹»çš„å½©è™¹æµ·æŠ¥ã€DC Comics çš„ logoã€Brooklyn Brewery çš„ logoã€‚

**"There are three responses to a piece of design â€” yes, no, and WOW! Wow is the one to aim for."**
è®¾è®¡æœ‰ä¸‰ç§ååº”â€”â€”è¡Œã€ä¸è¡Œã€å“‡ï¼æˆ‘ä»¬è¿½æ±‚çš„æ˜¯"å“‡ï¼"ã€‚

ä»–ä¸€ç›´å·¥ä½œåˆ° 91 å²åŽ»ä¸–ã€‚`,
    
    story: `1977å¹´ï¼Œçº½çº¦å¸‚å¿«ç ´äº§äº†ã€‚çŠ¯ç½ªçŽ‡é£™å‡ï¼Œå¸‚æ”¿åºœæ²¡é’±ï¼Œæ²¡äººæƒ³æ¥æ—…æ¸¸ã€‚

çº½çº¦å·žå•†åŠ¡å±€æ‰¾åˆ°å¹¿å‘Šå…¬å¸åšä¸ªå®£ä¼ æ ‡è¯­ã€‚Glaser åœ¨å‡ºç§Ÿè½¦åŽåº§ï¼Œç”¨çº¢èœ¡ç¬”åœ¨ä¿¡å°èƒŒé¢ç”»äº†ä¸€ä¸ªè‰å›¾ï¼š**I â™¥ NY**ã€‚

ä»–ç”¨ä¸€ä¸ªçº¢å¿ƒç¬¦å·æ›¿ä»£äº†"love"è¿™ä¸ªè¯â€”â€”è¿™åœ¨å½“æ—¶æ˜¯é©å‘½æ€§çš„ã€‚æ²¡äººè¿™æ ·åšè¿‡ã€‚

ä»–å…è´¹æŠŠè¿™ä¸ªè®¾è®¡ç»™äº†çº½çº¦å·žï¼Œæ²¡æ”¶ä¸€åˆ†é’±ç‰ˆç¨Žã€‚è¿™ä¸ª logo çŽ°åœ¨æ¯å¹´ä¸ºçº½çº¦åˆ›é€ æ•°åäº¿ç¾Žå…ƒçš„æ—…æ¸¸æ”¶å…¥ã€‚

**å…¨ä¸–ç•Œæœ€è¢«å¤åˆ¶ã€æœ€è¢«æ¶æžçš„ logoï¼Œè¯žç”ŸäºŽä¸€ä¸ªä¿¡å°èƒŒé¢ã€‚**`,
    
    legacy: `â€¢ è§†è§‰è¯­è¨€é©å‘½ï¼šå¼€åˆ›äº†"ç”¨ç¬¦å·æ›¿ä»£è¯æ±‡"çš„è®¾è®¡æ‰‹æ³•ï¼Œå½±å“äº† emoji æ—¶ä»£
â€¢ åŸŽå¸‚å“ç‰Œå…ˆé©±ï¼šè¯æ˜Žäº†ä¸€ä¸ªåŸŽå¸‚å¯ä»¥åƒä¸€ä¸ªå“ç‰Œä¸€æ ·è¢«è®¾è®¡å’ŒæŽ¨å¹¿
â€¢ å…è´¹è®¾è®¡çš„åŠ›é‡ï¼šæ²¡æœ‰ç‰ˆæƒä¿æŠ¤åè€Œè®©å®ƒæ— å¤„ä¸åœ¨ï¼Œæˆä¸ºçœŸæ­£çš„æ–‡åŒ–ç¬¦å·
â€¢ 9/11 åŽçš„å˜ä½“ï¼š"I â™¥ NY More Than Ever"ï¼ˆå¿ƒä¸Šæœ‰ä¸ªä¼¤ç–¤ï¼‰æˆä¸ºåŸŽå¸‚éŸ§æ€§çš„è±¡å¾`,
    
    significance: `Glaser è¯æ˜Žäº†æœ€ç®€å•çš„è®¾è®¡å¯èƒ½æ˜¯æœ€å¼ºå¤§çš„ã€‚

ä¸‰ä¸ªå­—æ¯ã€ä¸€ä¸ªç¬¦å·ã€ä¸¤ç§é¢œè‰²ã€‚ä»»ä½•äººéƒ½èƒ½ç”»å‡ºæ¥ï¼Œä»»ä½•äººéƒ½èƒ½ç†è§£ã€‚è¿™å°±æ˜¯ä¼Ÿå¤§è®¾è®¡çš„å®šä¹‰â€”â€”å®ƒå±žäºŽæ‰€æœ‰äººã€‚`,

    dateConnection_en: 'February 14 is Valentine\'s Day. And I â™¥ NY is design history\'s most famous expression of "love"â€”using a symbol to replace a word, changing the language of visual communication.',
    
    designerBio_en: `Milton Glaser (1929-2020), American graphic designer, often called the "Father of American Graphic Design."

He co-founded Push Pin Studios, redefining the relationship between illustration and graphic design. He designed Bob Dylan's psychedelic rainbow poster, the DC Comics logo, and Brooklyn Brewery's logo.

**"There are three responses to a piece of design â€” yes, no, and WOW! Wow is the one to aim for."**

He worked until his death at 91.`,
    
    story_en: `In 1977, New York City was nearly bankrupt. Crime rates soared, the city had no money, no one wanted to visit.

The New York State Commerce Department asked an ad agency for a promotional slogan. Glaser, in the back of a taxi, sketched on the back of an envelope with a red crayon: **I â™¥ NY**.

He replaced the word "love" with a red heart symbolâ€”revolutionary at the time. No one had done this before.

He gave the design to New York State for free, without any royalties. This logo now generates billions in tourism revenue for New York annually.

**The world's most copied, most parodied logo, born on the back of an envelope.**`,
    
    legacy_en: `â€¢ Visual language revolution: Pioneered "replacing words with symbols" in design, influencing the emoji era
â€¢ City branding pioneer: Proved a city could be designed and promoted like a brand
â€¢ The power of free design: Lack of copyright protection made it ubiquitous, a true cultural symbol
â€¢ Post-9/11 variant: "I â™¥ NY More Than Ever" (heart with a scar) became a symbol of city resilience`,
    
    significance_en: `Glaser proved that the simplest design can be the most powerful.

Three letters, one symbol, two colors. Anyone can draw it, anyone can understand it. That's the definition of great designâ€”it belongs to everyone.`
  },
  {
    id: '5',
    date: '2026-02-15',
    imageUrl: '/the-daily-object/images/hope-poster.jpg',
    fullImageUrl: '/the-daily-object/images/full/hope-poster.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/hope-poster.jpg',
    title: 'HOPE Poster',
    subtitle: 'Shepard Fairey, 2008',
    category: 'art',
    designer: 'Shepard Fairey',
    year: '2008',
    
    dateConnection: '2æœˆ15æ—¥æ˜¯ Shepard Fairey çš„ç”Ÿæ—¥ï¼ˆ1970å¹´ï¼‰ã€‚ä»–æ˜¯å½“ä»£æœ€æœ‰å½±å“åŠ›çš„è¡—å¤´è‰ºæœ¯å®¶ï¼Œä»Žæ»‘æ¿æ–‡åŒ–èµ°å‘æ€»ç»Ÿç«žé€‰è§†è§‰è®¾è®¡ã€‚',
    
    designerBio: `Shepard Fairey (1970-)ï¼Œç¾Žå›½è¡—å¤´è‰ºæœ¯å®¶ã€å¹³é¢è®¾è®¡å¸ˆã€‚

ä»–ä»Žç½—å¾·å²›è®¾è®¡å­¦é™¢æ¯•ä¸šåŽï¼Œå¼€å§‹äº†"OBEY Giant"è¿åŠ¨â€”â€”åœ¨å…¨ä¸–ç•Œè´´æ»¡å®‰å¾·çƒˆå·¨äººçš„è„¸å’Œ"OBEY"å­—æ ·ã€‚è¿™æ˜¯å¯¹æ¶ˆè´¹ä¸»ä¹‰å’Œæœä»Žæ–‡åŒ–çš„è®½åˆºï¼Œä¹Ÿæ˜¯ä»–çš„ç­¾åç¬¦å·ã€‚

**"The medium is the message, but the message is also the medium."**
åª’ä»‹æ˜¯ä¿¡æ¯ï¼Œä½†ä¿¡æ¯ä¹Ÿæ˜¯åª’ä»‹ã€‚

ä»–çš„ä½œå“æ··åˆäº†è‹è”å®£ä¼ æµ·æŠ¥ã€æœ‹å…‹ zineã€è¡—å¤´æ¶‚é¸¦çš„ç¾Žå­¦ï¼Œåˆ›é€ å‡ºä¸€ç§ç‹¬ç‰¹çš„è§†è§‰è¯­è¨€ã€‚`,
    
    story: `2008å¹´ç¾Žå›½æ€»ç»Ÿå¤§é€‰ï¼ŒFairey è‡ªå‘ä¸ºå¥¥å·´é©¬è®¾è®¡äº†ä¸€å¼ æµ·æŠ¥ã€‚æ²¡äººå§”æ‰˜ä»–ï¼Œæ²¡äººä»˜é’±ç»™ä»–ã€‚

ä»–ç”¨äº†ä¸€å¼ ç¾Žè”ç¤¾çš„æ–°é—»ç…§ç‰‡ä½œä¸ºå‚è€ƒï¼ŒæŠŠå®ƒå¤„ç†æˆ**çº¢ç™½è“ä¸‰è‰²çš„é«˜å¯¹æ¯”å›¾åƒ**ï¼Œä¸‹é¢åªæœ‰ä¸€ä¸ªè¯ï¼šHOPEã€‚

æµ·æŠ¥åœ¨ç½‘ä¸Šç–¯ä¼ ï¼Œæˆä¸ºæ•´ä¸ªç«žé€‰çš„è§†è§‰ç¬¦å·ã€‚å¥¥å·´é©¬å›¢é˜ŸåŽæ¥æ‰å®˜æ–¹é‡‡ç”¨å®ƒã€‚

è¿™æ˜¯äº’è”ç½‘æ—¶ä»£**ç¬¬ä¸€ä¸ªçœŸæ­£"ç—…æ¯’å¼"ä¼ æ’­çš„æ”¿æ²»è®¾è®¡**ã€‚å®ƒè¯æ˜Žäº†ï¼šåœ¨ç¤¾äº¤åª’ä½“æ—¶ä»£ï¼Œä¸€ä¸ªè‰æ ¹è‰ºæœ¯å®¶å¯ä»¥å®šä¹‰ä¸€åœºè¿åŠ¨çš„è§†è§‰èº«ä»½ã€‚

åŽæ¥ä»–å› ä¸ºç…§ç‰‡ç‰ˆæƒé—®é¢˜è¢«ç¾Žè”ç¤¾èµ·è¯‰ï¼Œæœ€ç»ˆå’Œè§£ã€‚ä½†è¿™å¼ æµ·æŠ¥å·²ç»æˆä¸ºåŽ†å²ã€‚`,
    
    legacy: `â€¢ æ”¿æ²»è®¾è®¡æ°‘ä¸»åŒ–ï¼šè¯æ˜Žç«žé€‰è§†è§‰ä¸ä¸€å®šæ¥è‡ªå®˜æ–¹å›¢é˜Ÿ
â€¢ ç—…æ¯’å¼ä¼ æ’­å…ˆé©±ï¼šäº’è”ç½‘æ—¶ä»£è®¾è®¡ä¼ æ’­çš„ç»å…¸æ¡ˆä¾‹
â€¢ ç‰ˆæƒäº‰è®®ï¼šå¼•å‘äº†å…³äºŽ"transformative use"ï¼ˆè½¬åŒ–æ€§ä½¿ç”¨ï¼‰çš„æ³•å¾‹è®¨è®º
â€¢ æ¨¡å› æ¨¡æ¿ï¼šæˆä¸ºè¢«æ¨¡ä»¿æœ€å¤šçš„æ”¿æ²»æµ·æŠ¥æ ¼å¼`,
    
    significance: `HOPE æµ·æŠ¥è¯æ˜Žäº†è®¾è®¡å¯ä»¥æ”¹å˜æ”¿æ²»ã€‚

å®ƒæŠŠä¸€ä¸ªå‚è®®å‘˜å˜æˆäº†ä¸€ä¸ªå›¾æ ‡ï¼ŒæŠŠä¸€åœºç«žé€‰å˜æˆäº†ä¸€åœºè¿åŠ¨ã€‚åœ¨è¿™ä¹‹åŽï¼Œæ¯ä¸ªæ”¿æ²»ç«žé€‰éƒ½åœ¨å¯»æ‰¾è‡ªå·±çš„"HOPE æ—¶åˆ»"ã€‚`,

    dateConnection_en: 'February 15 is Shepard Fairey\'s birthday (1970). He is the most influential contemporary street artist, moving from skateboard culture to presidential campaign visual design.',
    
    designerBio_en: `Shepard Fairey (1970-), American street artist and graphic designer.

After graduating from Rhode Island School of Design, he started the "OBEY Giant" campaignâ€”plastering AndrÃ© the Giant's face and "OBEY" across the world. It was a satire of consumerism and obedience culture, and his signature symbol.

**"The medium is the message, but the message is also the medium."**

His work blends Soviet propaganda posters, punk zines, and street graffiti aesthetics, creating a unique visual language.`,
    
    story_en: `During the 2008 US presidential election, Fairey spontaneously designed a poster for Obama. No one commissioned him, no one paid him.

He used an Associated Press news photo as reference, processing it into a **high-contrast red-white-blue image**, with just one word below: HOPE.

The poster went viral online, becoming the visual symbol of the entire campaign. Obama's team only officially adopted it later.

This was **the first truly "viral" political design of the internet age**. It proved that in the social media era, a grassroots artist could define a movement's visual identity.

He was later sued by the AP over photo copyright, eventually settling. But the poster had already made history.`,
    
    legacy_en: `â€¢ Democratizing political design: Proved campaign visuals don't have to come from official teams
â€¢ Viral spread pioneer: A classic case of design dissemination in the internet age
â€¢ Copyright controversy: Sparked legal discussions about "transformative use"
â€¢ Meme template: Became the most imitated political poster format`,
    
    significance_en: `The HOPE poster proved that design can change politics.

It turned a senator into an icon, a campaign into a movement. After this, every political campaign has been searching for its own "HOPE moment."`
  },
  {
    id: '4',
    date: '2026-02-19',
    imageUrl: '/the-daily-object/images/bird-in-space.jpg',
    fullImageUrl: '/the-daily-object/images/full/bird-in-space.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/bird-in-space.jpg',
    title: 'Bird in Space',
    subtitle: 'Constantin BrÃ¢ncuÈ™i, 1923',
    category: 'art',
    designer: 'Constantin BrÃ¢ncuÈ™i',
    year: '1923',
    
    dateConnection: '2æœˆ19æ—¥æ˜¯ BrÃ¢ncuÈ™i çš„ç”Ÿæ—¥ï¼ˆ1876å¹´ï¼‰ã€‚è¿™ä¸€å¤©ä¹Ÿæ˜¯ç½—é©¬å°¼äºšçš„å®˜æ–¹çºªå¿µæ—¥ BrÃ¢ncuÈ™i Dayã€‚',
    
    designerBio: `Constantin BrÃ¢ncuÈ™i (1876-1957)ï¼Œç½—é©¬å°¼äºšäººï¼Œè¢«ç§°ä¸º"çŽ°ä»£é›•å¡‘ä¹‹çˆ¶"ã€‚

7å²æ”¾ç¾Šï¼Œ9å²ç¦»å®¶æ‰“å·¥ï¼Œ18å²ç”¨åºŸæ–™è‡ªåˆ¶äº†ä¸€æŠŠå°æç´â€”â€”è¢«å‘çŽ°åŽé€åŽ»å­¦è‰ºæœ¯ã€‚åŽæ¥åŽ»å·´é»Žï¼Œç½—ä¸¹é‚€è¯·ä»–è¿›å·¥ä½œå®¤ï¼Œä»–åªå¾…äº†ä¸¤ä¸ªæœˆå°±ç¦»å¼€ï¼Œè¯´ï¼š

**"Nothing can grow under big trees."**
å¤§æ ‘åº•ä¸‹é•¿ä¸å‡ºä¸œè¥¿ã€‚

ç„¶åŽä»–å¼€åˆ›äº†è‡ªå·±çš„é£Žæ ¼ã€‚`,
    
    story: `é¸Ÿæ²¡æœ‰ç¿…è†€ã€æ²¡æœ‰ç¾½æ¯›ã€æ²¡æœ‰çœ¼ç›ã€‚åªæœ‰ä¸€æ ¹æµçº¿åž‹çš„å½¢æ€ï¼Œåƒä¸€æ»´æ‹‰é•¿çš„æ°´æ»´ã€‚

BrÃ¢ncuÈ™i è¯´ä»–é›•åˆ»çš„ä¸æ˜¯é¸Ÿçš„å¤–å½¢ï¼Œè€Œæ˜¯**"é£žç¿”çš„æœ¬è´¨"**ã€‚

ä»–äº²è‡ªæ‰“ç£¨é’é“œè¡¨é¢ï¼ŒæŠ›å…‰åˆ°é•œé¢åå°„ã€‚å…‰çº¿åœ¨æ›²é¢ä¸ŠæµåŠ¨ï¼Œè®©é™æ­¢çš„é›•å¡‘çœ‹èµ·æ¥åƒåœ¨ç§»åŠ¨ã€‚

1926å¹´ï¼Œæ‘„å½±å¸ˆ Edward Steichen ä¹°äº†ä¸€ä»¶ Bird in Space è¿åˆ°ç¾Žå›½ã€‚æµ·å…³æ‹’ç»è®¤å®šå®ƒæ˜¯è‰ºæœ¯å“â€”â€”è¯´è¿™æ˜¯ä¸ªå·¥ä¸šé›¶ä»¶ï¼Œè¦æ”¶å…³ç¨Žã€‚å®˜å¸æ‰“åˆ°æ³•é™¢ã€‚æ³•å®˜æœ€ç»ˆåˆ¤å®šï¼šè‰ºæœ¯ä¸å¿…æ˜¯å¯¹è‡ªç„¶çš„å†™å®žæ¨¡ä»¿ï¼Œå¯ä»¥æ˜¯ä¸€ä¸ªæŠ½è±¡æ¦‚å¿µâ€”â€”æ¯”å¦‚"é£žç¿”"æœ¬èº«ã€‚

è¿™ä¸ªåˆ¤å†³ç¡®ç«‹äº†ä¸€ä¸ªé‡è¦åŽŸåˆ™ï¼š**æŠ½è±¡è‰ºæœ¯ä¹Ÿæ˜¯è‰ºæœ¯**ã€‚`,
    
    legacy: `â€¢ Apple è®¾è®¡è¯­è¨€ï¼šJony Ive å¤šæ¬¡æåˆ° BrÃ¢ncuÈ™i å¯¹ä»–çš„å½±å“â€”â€”ç®€æ´ã€ææ–™çœŸå®žã€å½¢å¼æœä»Žæœ¬è´¨
â€¢ èˆªç©ºèˆªå¤©ï¼šè¿™ä¸ªæµçº¿åž‹æ—©äºŽç©ºæ°”åŠ¨åŠ›å­¦çš„ç³»ç»Ÿç ”ç©¶ï¼ŒåŽæ¥è¢«è¯æ˜Žæ˜¯è¿‘ä¹Žå®Œç¾Žçš„ä½Žé˜»åŠ›å½¢æ€  
â€¢ çŽ°ä»£å®¶å…·ï¼šä»Ž Noguchi èŒ¶å‡ åˆ°åŒ—æ¬§è®¾è®¡ï¼Œ"less is more"çš„æºå¤´ä¹‹ä¸€`,
    
    significance: `BrÃ¢ncuÈ™i è¯æ˜Žäº†ï¼šé›•å¡‘å¯ä»¥ä¸æ¨¡ä»¿çŽ°å®žï¼›ææ–™æœ¬èº«å°±æ˜¯è¯­è¨€ï¼›åº•åº§å¯ä»¥æ˜¯ä½œå“çš„ä¸€éƒ¨åˆ†ã€‚

ä»–çš„å·¥ä½œå®¤ï¼ˆçŽ°åœ¨åœ¨è“¬çš®æœä¸­å¿ƒæ—è¾¹åŽŸæ ·é‡å»ºï¼‰æ˜¯çŽ°ä»£è‰ºæœ¯å²ä¸Šæœ€é‡è¦çš„ç©ºé—´ä¹‹ä¸€ã€‚`,
    
    // English
    dateConnection_en: 'February 19 is BrÃ¢ncuÈ™i\'s birthday (1876). This day is also officially celebrated as BrÃ¢ncuÈ™i Day in Romania.',
    
    designerBio_en: `Constantin BrÃ¢ncuÈ™i (1876-1957), Romanian sculptor, known as the "Father of Modern Sculpture."

He was a shepherd at 7, left home at 9 to work, and at 18 built a violin from scrap woodâ€”which got him discovered and sent to art school. Later in Paris, Rodin invited him to his studio, but he left after just two months, saying:

**"Nothing can grow under big trees."**

Then he forged his own path.`,
    
    story_en: `The bird has no wings, no feathers, no eyes. Just a streamlined form, like an elongated water droplet.

BrÃ¢ncuÈ™i said he wasn't sculpting the bird's shape, but **"the essence of flight."**

He polished the bronze surface himself to a mirror finish. Light flows across the curves, making the still sculpture appear to move.

In 1926, photographer Edward Steichen bought a Bird in Space and shipped it to America. Customs refused to classify it as artâ€”calling it an industrial part subject to import duty. The case went to court. The judge ultimately ruled: art doesn't have to be realistic imitation of nature; it can be an abstract conceptâ€”like "flight" itself.

This verdict established a crucial principle: **abstract art is art.**`,
    
    legacy_en: `â€¢ Apple's design language: Jony Ive has cited BrÃ¢ncuÈ™i's influence multiple timesâ€”simplicity, material honesty, form following essence
â€¢ Aerospace: This streamlined shape predated systematic aerodynamic research, later proven to be near-perfect low-drag form
â€¢ Modern furniture: From the Noguchi table to Scandinavian design, one of the origins of "less is more"`,
    
    significance_en: `BrÃ¢ncuÈ™i proved that sculpture doesn't have to imitate reality; the material itself is a language; the pedestal can be part of the work.

His studio (now reconstructed next to the Pompidou Center) is one of the most important spaces in modern art history.`
  },
  {
    id: '3',
    date: '2026-02-18',
    imageUrl: '/the-daily-object/images/tiffany-lamp.jpg',
    fullImageUrl: '/the-daily-object/images/full/tiffany-lamp.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/tiffany-lamp.jpg',
    title: 'Wisteria Lamp',
    subtitle: 'Louis Comfort Tiffany, 1901',
    category: 'art',
    designer: 'Louis Comfort Tiffany',
    year: '1901',
    
    dateConnection: '2æœˆ18æ—¥æ˜¯ Louis Comfort Tiffany çš„ç”Ÿæ—¥ï¼ˆ1848å¹´ï¼‰ã€‚ä»–åˆ›é€ äº† Art Nouveau æ—¶ä»£æœ€å…·æ ‡å¿—æ€§çš„è£…é¥°è‰ºæœ¯å“ã€‚',
    
    designerBio: `Louis Comfort Tiffany (1848-1933)ï¼Œç¾Žå›½è®¾è®¡å¸ˆã€è‰ºæœ¯å®¶ï¼ŒTiffany & Co. åˆ›å§‹äººä¹‹å­ã€‚

ä»–æ²¡æœ‰ç»§æ‰¿çˆ¶äº²çš„ç å®ç”Ÿæ„ï¼Œè€Œæ˜¯åŽ»è¿½æ±‚è‡ªå·±çš„è‰ºæœ¯æ¢¦æƒ³ã€‚å…ˆå­¦ç»˜ç”»ï¼ŒåŽè½¬å‘è£…é¥°è‰ºæœ¯ã€‚ä»–ç—´è¿·äºŽå…‰å’Œè‰²å½©çš„å…³ç³»ï¼Œå°¤å…¶æ˜¯å…‰ç©¿é€å½©è‰²çŽ»ç’ƒæ—¶çš„æ•ˆæžœã€‚

**"Color is to the eye what music is to the ear."**
è‰²å½©ä¹‹äºŽçœ¼ç›ï¼Œå¦‚åŒéŸ³ä¹ä¹‹äºŽè€³æœµã€‚

ä»–å‘æ˜Žäº†"Favrile"çŽ»ç’ƒå·¥è‰ºâ€”â€”ä¸€ç§èƒ½å‘ˆçŽ°è™¹å½©æ•ˆæžœçš„ç‰¹æ®ŠçŽ»ç’ƒï¼Œè®©æ¯ä»¶ä½œå“éƒ½ç‹¬ä¸€æ— äºŒã€‚`,
    
    story: `Wisteria Lamp æ˜¯ Tiffany Studios æœ€å¤æ‚çš„ä½œå“ä¹‹ä¸€ã€‚ç¯ç½©ç”±è¶…è¿‡ 2000 ç‰‡æ‰‹å·¥åˆ‡å‰²çš„å½©è‰²çŽ»ç’ƒç»„æˆï¼Œæ¯ä¸€ç‰‡éƒ½ç»è¿‡ç²¾å¿ƒæŒ‘é€‰å’Œæ‰“ç£¨ã€‚

ç´«è—¤èŠ±ä»Žç¯ç½©é¡¶éƒ¨å€¾æ³»è€Œä¸‹ï¼Œç»¿å¶äº¤ç»‡å…¶ä¸­ã€‚ç¯åº§æ¨¡ä»¿ç´«è—¤æ ‘å¹²çš„å½¢æ€ï¼Œé’é“œé“¸é€ ï¼Œæ ¹é¡»è”“å»¶æˆåº•åº§ã€‚

å½“ç¯ç‚¹äº®ï¼Œå…‰çº¿ç©¿é€çŽ»ç’ƒï¼Œ**æ•´ç›ç¯å˜æˆä¸€ä¸ªå‘å…‰çš„èŠ±å›­**ã€‚

è¿™ä¸æ˜¯ç®€å•çš„ç…§æ˜Žå·¥å…·â€”â€”å®ƒæ˜¯ä¸€ä»¶å¯ä»¥ä½¿ç”¨çš„è‰ºæœ¯å“ã€‚æ¯ç›ç¯éƒ½éœ€è¦æ•°å‘¨åˆ¶ä½œï¼Œæ²¡æœ‰ä¸¤ç›å®Œå…¨ç›¸åŒã€‚`,
    
    legacy: `â€¢ Art Nouveau è¿åŠ¨ï¼šTiffany ç¯æˆä¸ºæ–°è‰ºæœ¯è¿åŠ¨çš„ä»£åè¯ï¼Œå½±å“äº†æ•´ä¸ªè£…é¥°è‰ºæœ¯é¢†åŸŸ
â€¢ å·¥è‰ºç¾Žæœ¯å¤å…´ï¼šè¯æ˜Žäº†æ‰‹å·¥è‰ºå“å¯ä»¥æ˜¯è‰ºæœ¯å“ï¼Œä¸ºåŽæ¥çš„ Arts & Crafts è¿åŠ¨é“ºè·¯
â€¢ æ”¶è—å¸‚åœºï¼šåŽŸç‰ˆ Tiffany ç¯çŽ°åœ¨ä»·å€¼æ•°ç™¾ä¸‡ç¾Žå…ƒï¼Œæ˜¯è£…é¥°è‰ºæœ¯å“ä¸­æœ€å—è¿½æ§çš„å“ç±»ä¹‹ä¸€`,
    
    significance: `Tiffany æ¨¡ç³Šäº†"å·¥è‰º"å’Œ"è‰ºæœ¯"çš„ç•Œé™ã€‚ä»–çš„å·¥ä½œå®¤æ˜¯æœ€æ—©å®žçŽ°"è®¾è®¡å¸ˆ + å·¥åŒ "åä½œæ¨¡å¼çš„åœ°æ–¹ä¹‹ä¸€ã€‚

ä»–è¯æ˜Žäº†ï¼šæ—¥å¸¸ç‰©å“å¯ä»¥æ˜¯è‰ºæœ¯å“ï¼›ææ–™åˆ›æ–°å¯ä»¥å¼€åˆ›å…¨æ–°ç¾Žå­¦ï¼›å…‰æœ¬èº«å¯ä»¥æˆä¸ºè®¾è®¡çš„ä¸»è§’ã€‚`,

    // English
    dateConnection_en: 'February 18 is Louis Comfort Tiffany\'s birthday (1848). He created the most iconic decorative art of the Art Nouveau era.',
    
    designerBio_en: `Louis Comfort Tiffany (1848-1933), American designer and artist, son of the founder of Tiffany & Co.

He didn't inherit his father's jewelry businessâ€”instead, he pursued his own artistic dreams. He studied painting first, then turned to decorative arts. He was obsessed with the relationship between light and color, especially how light passes through stained glass.

**"Color is to the eye what music is to the ear."**

He invented the "Favrile" glass techniqueâ€”a special iridescent glass that made each piece unique.`,
    
    story_en: `The Wisteria Lamp is one of Tiffany Studios' most complex works. The shade consists of over 2,000 pieces of hand-cut stained glass, each carefully selected and polished.

Wisteria flowers cascade from the top of the shade, intertwined with green leaves. The base mimics the form of a wisteria tree trunk, cast in bronze, with roots spreading into the base.

When lit, light penetrates the glass, and **the entire lamp becomes a glowing garden.**

This is not a simple lighting toolâ€”it's a functional work of art. Each lamp takes weeks to make, and no two are exactly alike.`,
    
    legacy_en: `â€¢ Art Nouveau movement: Tiffany lamps became synonymous with Art Nouveau, influencing the entire decorative arts field
â€¢ Crafts revival: Proved that handicrafts can be art, paving the way for the Arts & Crafts movement
â€¢ Collector's market: Original Tiffany lamps now worth millions of dollars, among the most sought-after decorative art pieces`,
    
    significance_en: `Tiffany blurred the line between "craft" and "art." His studio was one of the first to achieve a "designer + craftsman" collaborative model.

He proved that everyday objects can be art; material innovation can create entirely new aesthetics; light itself can be the protagonist of design.`
  },
  {
    id: '2',
    date: '2026-02-17',
    imageUrl: '/the-daily-object/images/vessel.jpg',
    fullImageUrl: '/the-daily-object/images/full/vessel.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/vessel.jpg',
    title: 'Vessel',
    subtitle: 'Thomas Heatherwick, 2019',
    category: 'architecture',
    designer: 'Thomas Heatherwick',
    year: '2019',
    
    dateConnection: '2æœˆ17æ—¥æ˜¯ Thomas Heatherwick çš„ç”Ÿæ—¥ï¼ˆ1970å¹´ï¼‰ã€‚ä»–æ˜¯å½“ä»£æœ€å…·å½±å“åŠ›çš„è®¾è®¡å¸ˆä¹‹ä¸€ï¼Œè·¨è¶Šå»ºç­‘ã€äº§å“ã€å…¬å…±è‰ºæœ¯å¤šä¸ªé¢†åŸŸã€‚',
    
    designerBio: `Thomas Heatherwick (1970-)ï¼Œè‹±å›½è®¾è®¡å¸ˆï¼ŒHeatherwick Studio åˆ›å§‹äººã€‚

ä»–æ‹’ç»è¢«å®šä¹‰ã€‚ä¸æ˜¯å»ºç­‘å¸ˆï¼Œä¸æ˜¯äº§å“è®¾è®¡å¸ˆï¼Œä¸æ˜¯è‰ºæœ¯å®¶â€”â€”ä½†ä»–åšæ‰€æœ‰è¿™äº›äº‹ã€‚ä»–çš„ä½œå“ä»Žä¼¦æ•¦å¥¥è¿ä¼šä¸»ç«ç‚¬åˆ°ä¸Šæµ·ä¸–åšä¼šè‹±å›½é¦†ï¼Œä»Ž Google æ€»éƒ¨åˆ°çº½çº¦ Hudson Yardsã€‚

**"The enemy of good design is too much focus."**
å¥½è®¾è®¡çš„æ•Œäººæ˜¯è¿‡åº¦èšç„¦ã€‚

ä»–ç›¸ä¿¡è®¾è®¡åº”è¯¥å¼•å‘æƒ…æ„Ÿååº”ï¼Œè€Œä¸ä»…ä»…æ˜¯è§£å†³åŠŸèƒ½é—®é¢˜ã€‚`,
    
    story: `Vessel æ˜¯ä¸€åº§å¯ä»¥æ”€çˆ¬çš„å…¬å…±é›•å¡‘ï¼Œä½äºŽçº½çº¦ Hudson Yardsã€‚154 æ®µæ¥¼æ¢¯ï¼Œ2500 çº§å°é˜¶ï¼Œ80 ä¸ªè§‚æ™¯å¹³å°ï¼Œå…¨éƒ¨äº¤ç»‡æˆä¸€ä¸ªèœ‚å·¢çŠ¶çš„ç»“æž„ã€‚

ä»Žå¤–é¢çœ‹ï¼Œå®ƒåƒä¸€ä¸ªå·¨å¤§çš„èœ‚å·¢æˆ–æ¾æžœã€‚ä½†çœŸæ­£çš„ä½“éªŒæ˜¯**èµ°è¿›åŽ»**â€”â€”ä½ å¯ä»¥ä»Žä»»ä½•ä¸€ä¸ªå…¥å£å¼€å§‹ï¼Œæ²¿ç€æ¥¼æ¢¯ä¸Šä¸‹ç©¿æ¢­ï¼Œåœ¨ä¸åŒé«˜åº¦çœ‹åˆ°ä¸åŒçš„é£Žæ™¯å’Œå…¶ä»–æ”€çˆ¬è€…ã€‚

Heatherwick è¯´ï¼š**"å»ºç­‘å¤ªç»å¸¸æ˜¯å…³äºŽ'çœ‹'çš„ï¼Œè¿™ä¸ªæ˜¯å…³äºŽ'åš'çš„ã€‚"**

å®ƒæ²¡æœ‰å›ºå®šçš„å‚è§‚è·¯çº¿ã€‚æ¯ä¸ªäººçš„ä½“éªŒéƒ½ä¸ä¸€æ ·ã€‚`,
    
    legacy: `â€¢ å…¬å…±ç©ºé—´è®¾è®¡ï¼šé‡æ–°å®šä¹‰äº†"åœ°æ ‡å»ºç­‘"çš„æ¦‚å¿µâ€”â€”ä¸æ˜¯ç”¨æ¥ä»°æœ›çš„ï¼Œè€Œæ˜¯ç”¨æ¥å‚ä¸Žçš„
â€¢ äº¤äº’å¼å»ºç­‘ï¼šè¯æ˜Žå»ºç­‘å¯ä»¥æ˜¯ä¸€ç§ä½“éªŒè€ŒéžèƒŒæ™¯
â€¢ åŸŽå¸‚æ›´æ–°ï¼šæˆä¸º Hudson Yards å¼€å‘é¡¹ç›®çš„æ ¸å¿ƒå¸å¼•åŠ›ï¼Œå¸¦åŠ¨æ•´ä¸ªåŒºåŸŸçš„æ´»åŠ›`,
    
    significance: `Vessel æŒ‘æˆ˜äº†å»ºç­‘çš„åŸºæœ¬å‡è®¾ï¼šå»ºç­‘å¿…é¡»æœ‰æ˜Žç¡®åŠŸèƒ½å—ï¼Ÿå®ƒæ›´åƒä¸€ä¸ªå·¨å¤§çš„æ¸¸ä¹åœºæˆ–è¿·å®«â€”â€”å­˜åœ¨çš„æ„ä¹‰å°±æ˜¯è¢«æŽ¢ç´¢ã€‚

åœ¨ä¸€ä¸ªä»€ä¹ˆéƒ½è®²æ•ˆçŽ‡çš„æ—¶ä»£ï¼ŒHeatherwick æé†’æˆ‘ä»¬ï¼šæœ‰äº›ä¸œè¥¿çš„ä»·å€¼å°±æ˜¯è®©äººæ„Ÿåˆ°æƒŠå¥‡ã€‚`,

    // English
    dateConnection_en: 'February 17 is Thomas Heatherwick\'s birthday (1970). He is one of the most influential designers of our time, spanning architecture, product design, and public art.',
    
    designerBio_en: `Thomas Heatherwick (1970-), British designer, founder of Heatherwick Studio.

He refuses to be defined. Not an architect, not a product designer, not an artistâ€”but he does all of these things. His work ranges from the London Olympic Cauldron to the UK Pavilion at Shanghai Expo, from Google headquarters to New York's Hudson Yards.

**"The enemy of good design is too much focus."**

He believes design should provoke emotional responses, not just solve functional problems.`,
    
    story_en: `Vessel is a climbable public sculpture located at Hudson Yards in New York. 154 flights of stairs, 2,500 steps, 80 viewing platforms, all interwoven into a honeycomb-like structure.

From the outside, it looks like a giant honeycomb or pinecone. But the real experience is **going inside**â€”you can start from any entrance, traverse up and down the stairs, seeing different views and other climbers at different heights.

Heatherwick said: **"Architecture is too often about 'looking.' This is about 'doing.'"**

There's no fixed visiting route. Everyone's experience is different.`,
    
    legacy_en: `â€¢ Public space design: Redefined the concept of "landmark architecture"â€”not meant to be gazed upon, but to be participated in
â€¢ Interactive architecture: Proved that architecture can be an experience rather than a backdrop
â€¢ Urban renewal: Became the core attraction of the Hudson Yards development, energizing the entire district`,
    
    significance_en: `Vessel challenges architecture's basic assumptions: must buildings have clear functions? It's more like a giant playground or mazeâ€”its purpose is to be explored.

In an age obsessed with efficiency, Heatherwick reminds us: some things have value simply by making people feel wonder.`
  },
  {
    id: '1',
    date: '2026-02-16',
    imageUrl: '/the-daily-object/images/arco-lamp.jpg',
    fullImageUrl: '/the-daily-object/images/full/arco-lamp.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/arco-lamp.jpg',
    title: 'Arco Lamp',
    subtitle: 'Achille & Pier Giacomo Castiglioni, 1962',
    category: 'industrial',
    designer: 'Achille Castiglioni',
    year: '1962',
    
    dateConnection: '2æœˆ16æ—¥æ˜¯ Achille Castiglioni çš„ç”Ÿæ—¥ï¼ˆ1918å¹´ï¼‰ã€‚ä»–æ˜¯æ„å¤§åˆ©è®¾è®¡é»„é‡‘æ—¶ä»£æœ€å…·ä»£è¡¨æ€§çš„è®¾è®¡å¸ˆï¼Œä¸‰æ¬¡èŽ·å¾— Compasso d\'Oro é‡‘ç½—ç›˜å¥–ã€‚',
    
    designerBio: `Achille Castiglioni (1918-2002)ï¼Œæ„å¤§åˆ©å·¥ä¸šè®¾è®¡å¤§å¸ˆï¼Œä¸Žå“¥å“¥ Pier Giacomo åˆä½œåˆ›é€ äº†æ— æ•°ç»å…¸è®¾è®¡ã€‚

ä»–ä»Žæ—¥å¸¸ç‰©å“ä¸­å¯»æ‰¾çµæ„Ÿã€‚æ‹–æ‹‰æœºåº§æ¤…å˜æˆé…’å§å‡³ï¼ˆMezzadroï¼‰ï¼Œæ±½è½¦å¤§ç¯å˜æˆå°ç¯ï¼ˆToioï¼‰ã€‚ä»–ç›¸ä¿¡å¥½è®¾è®¡æ¥è‡ªäºŽ**é‡æ–°è§‚çœ‹ç†Ÿæ‚‰çš„äº‹ç‰©**ã€‚

**"Start from scratch. Ordinary people accept the world as it is. Designers re-imagine it."**
ä»Žé›¶å¼€å§‹ã€‚æ™®é€šäººæŽ¥å—ä¸–ç•Œçš„æ ·å­ï¼Œè®¾è®¡å¸ˆé‡æ–°æƒ³è±¡å®ƒã€‚

ä»–çš„å·¥ä½œå®¤çŽ°åœ¨æ˜¯ç±³å…°çš„ä¸€ä¸ªåšç‰©é¦†ï¼Œä¿ç•™ç€ä»–æ”¶é›†çš„å„ç§"æ™®é€šç‰©ä»¶"ã€‚`,
    
    story: `Arco çš„è®¾è®¡é—®é¢˜å¾ˆç®€å•ï¼šå¦‚ä½•æŠŠå…‰æºä»Žåœ°é¢ç§»åˆ°æ²™å‘ä¸Šæ–¹â€”â€”ä¸ç”¨æ‰“å­”ã€ä¸ç”¨åŠç¯ï¼Ÿ

ç­”æ¡ˆæ˜¯ä¸€æ ¹ä¼˜é›…çš„å¼§çº¿ã€‚å¤§ç†çŸ³åº•åº§æä¾›ç¨³å®šæ€§ï¼ˆé‡è¾¾65å…¬æ–¤ï¼‰ï¼Œä¸é”ˆé’¢å¼§å½¢è‡‚å°†ç¯ç½©é€åˆ°2ç±³å¤šé«˜çš„ç©ºä¸­ã€‚

**è¿™æ˜¯ç«™ç€çš„åŠç¯ã€‚**

åº•åº§ä¸Šæœ‰ä¸ªå­”â€”â€”ä¸æ˜¯è£…é¥°ï¼Œæ˜¯ä¸ºäº†æ–¹ä¾¿æ¬è¿ï¼šç©¿æ ¹æ£å­ï¼Œä¸¤ä¸ªäººå°±èƒ½æŠ¬èµ·æ¥ã€‚æ¯ä¸ªç»†èŠ‚éƒ½æœ‰åŽŸå› ã€‚

60å¹´è¿‡åŽ»äº†ï¼ŒArco ä»åœ¨ç”Ÿäº§ï¼Œè®¾è®¡æ²¡æ”¹è¿‡ä¸€ç¬”ã€‚`,
    
    legacy: `â€¢ è½åœ°ç¯é©å‘½ï¼šè¯æ˜Žè½åœ°ç¯å¯ä»¥æ›¿ä»£åŠç¯çš„åŠŸèƒ½ï¼Œæ”¹å˜äº†å®¤å†…ç…§æ˜Žè®¾è®¡çš„æ€è·¯
â€¢ ææ–™è¯šå®žï¼šå¤§ç†çŸ³å°±æ˜¯å¤§ç†çŸ³ï¼Œé’¢å°±æ˜¯é’¢ï¼Œæ²¡æœ‰ä¼ªè£…ï¼Œæ²¡æœ‰å¤šä½™è£…é¥°
â€¢ æ„å¤§åˆ©è®¾è®¡æ ‡å¿—ï¼šæˆä¸º 20 ä¸–çºªä¸­æœŸæ„å¤§åˆ©è®¾è®¡è¿åŠ¨çš„å›¾è…¾ä¹‹ä¸€ï¼Œä¸Ž Eamesã€Jacobsen é½å`,
    
    significance: `Castiglioni å…„å¼Ÿè¯æ˜Žäº†ï¼šæœ€å¥½çš„è®¾è®¡å¾€å¾€æ¥è‡ªæœ€ç®€å•çš„é—®é¢˜ã€‚

Arco ä¸æ˜¯åœ¨ç‚«æŠ€ï¼Œå®ƒå°±æ˜¯åœ¨è§£å†³ä¸€ä¸ªå…·ä½“é—®é¢˜â€”â€”ç”¨æœ€ä¼˜é›…çš„æ–¹å¼ã€‚è¿™ç§"é—®é¢˜å¯¼å‘"çš„è®¾è®¡æ€ç»´ï¼Œå½±å“äº†åŽæ¥å‡ ä»£å·¥ä¸šè®¾è®¡å¸ˆã€‚`,

    // English
    dateConnection_en: 'February 16 is Achille Castiglioni\'s birthday (1918). He was the most representative designer of Italy\'s golden age of design, winning the Compasso d\'Oro (Golden Compass) award three times.',
    
    designerBio_en: `Achille Castiglioni (1918-2002), Italian industrial design master who created countless classic designs with his brother Pier Giacomo.

He found inspiration in everyday objects. A tractor seat became a bar stool (Mezzadro), a car headlight became a lamp (Toio). He believed good design comes from **re-seeing familiar things.**

**"Start from scratch. Ordinary people accept the world as it is. Designers re-imagine it."**

His studio is now a museum in Milan, preserving the various "ordinary objects" he collected.`,
    
    story_en: `Arco's design problem was simple: how to move a light source from the floor to above the sofaâ€”without drilling holes or installing a chandelier?

The answer is an elegant arc. The marble base provides stability (weighing 65 kg), while the stainless steel arched arm delivers the shade to over 2 meters high.

**This is a standing chandelier.**

There's a hole in the baseâ€”not decoration, but for easy transport: insert a pole and two people can carry it. Every detail has a reason.

60 years later, Arco is still in production, the design unchanged.`,
    
    legacy_en: `â€¢ Floor lamp revolution: Proved that floor lamps can replace chandeliers, changing interior lighting design thinking
â€¢ Material honesty: Marble is marble, steel is steelâ€”no disguise, no excess decoration
â€¢ Italian design icon: Became one of the totems of mid-20th century Italian design movement, alongside Eames and Jacobsen`,
    
    significance_en: `The Castiglioni brothers proved that the best designs often come from the simplest questions.

Arco isn't showing offâ€”it's solving a specific problem in the most elegant way. This "problem-oriented" design thinking influenced generations of industrial designers.`
  },
  {
    id: '11',
    date: '2026-02-07',
    imageUrl: '/the-daily-object/images/pinocchio-1940.jpg?v=2',
    fullImageUrl: '/the-daily-object/images/full/pinocchio-1940.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/pinocchio-1940.jpg',
    title: 'Pinocchio',
    subtitle: 'Walt Disney Studios, 1940',
    category: 'art',
    designer: 'Walt Disney Studios',
    year: '1940',
    
    dateConnection: '1940å¹´2æœˆ7æ—¥ï¼Œã€ŠåŒ¹è¯ºæ›¹ã€‹åœ¨çº½çº¦ä¸­å¿ƒå‰§é™¢é¦–æ˜ ã€‚è¿™éƒ¨åŠ¨ç”»ç”µå½±è¢«è®¤ä¸ºæ˜¯åŠ¨ç”»è‰ºæœ¯çš„å·…å³°ä¹‹ä½œï¼Œé¦–æ¬¡èµ¢å¾—å¥¥æ–¯å¡ç«žèµ›ç±»å¥–é¡¹çš„åŠ¨ç”»é•¿ç‰‡ã€‚',
    
    designerBio: `Walt Disney Studios åœ¨1940å¹´ä»£åˆæœŸä»£è¡¨äº†åŠ¨ç”»è‰ºæœ¯çš„æœ€é«˜æ°´å¹³ã€‚

åˆ¶ä½œå›¢é˜ŸåŒ…æ‹¬è¶…è¿‡750åè‰ºæœ¯å®¶ï¼šåŠ¨ç”»å¸ˆã€åŠ©ç†ã€å¸ƒå±€è‰ºæœ¯å®¶ã€èƒŒæ™¯ç”»å®¶ã€ç‰¹æ•ˆåŠ¨ç”»å¸ˆå’Œä¸Šè‰²äººå‘˜ã€‚ä»–ä»¬åˆ›ä½œäº†è¶…è¿‡200ä¸‡å¹…ç”»ç¨¿ï¼Œä½¿ç”¨äº†1500å¤šç§é¢œè‰²ã€‚

Gustaf Tenggren è¢«ä»»å‘½ä¸ºè‰ºæœ¯æŒ‡å¯¼ï¼Œä¸ºå½±ç‰‡èµ‹äºˆäº†æ¬§æ´²ç«¥è¯ä¹¦çš„åŽä¸½é£Žæ ¼ã€‚Ward Kimball åˆ›é€ äº†èŸ‹èŸ€å‰æ˜Žå°¼çš„è§’è‰²è®¾è®¡ï¼Œå°†åŽŸè‘—ä¸­çš„å°è§’è‰²å˜æˆäº†å½±ç‰‡çš„çµé­‚äººç‰©ã€‚

**"Animation can explain whatever the mind of man can conceive."**
åŠ¨ç”»å¯ä»¥è§£é‡Šäººç±»å¤´è„‘æ‰€èƒ½æƒ³è±¡çš„ä¸€åˆ‡ã€‚â€”â€”Walt Disney`,
    
    story: `1940å¹´ï¼Œã€ŠåŒ¹è¯ºæ›¹ã€‹é¦–æ˜ æ—¶ï¼ŒäºŒæˆ˜å·²ç»åœ¨æ¬§æ´²çˆ†å‘ã€‚è¿™éƒ¨è€—èµ„260ä¸‡ç¾Žå…ƒçš„ç”µå½±èµ·åˆç¥¨æˆ¿æƒ¨æ·¡â€”â€”æ¬§æ´²å’Œäºšæ´²å¸‚åœºè¢«æˆ˜äº‰åˆ‡æ–­äº†ã€‚

ä½†è¿™éƒ¨ç”µå½±åœ¨æŠ€æœ¯ä¸Šæ˜¯é©å‘½æ€§çš„ã€‚å®ƒé¦–åˆ›äº†**å¤šå¹³é¢æ‘„å½±æœº**çš„æ·±åº¦ä½¿ç”¨â€”â€”è®©èƒŒæ™¯å’Œå‰æ™¯ä»¥ä¸åŒé€Ÿåº¦ç§»åŠ¨ï¼Œåˆ›é€ å‡ºå‰æ‰€æœªæœ‰çš„ä¸‰ç»´ç©ºé—´æ„Ÿã€‚

æ°´ä¸‹åœºæ™¯ã€é›¨æ°´ã€çƒŸé›¾ã€æœ¨å¶çš„å…³èŠ‚è¿åŠ¨â€”â€”æ¯ä¸€ä¸ªç‰¹æ•ˆéƒ½æ˜¯åŠ¨ç”»åŽ†å²ä¸Šçš„ç¬¬ä¸€æ¬¡ã€‚å½“è“ä»™å¥³å‡ºçŽ°æ—¶ï¼Œå¥¹çš„æ˜Ÿå°˜æ•ˆæžœéœ€è¦ç‰¹æ•ˆåŠ¨ç”»å¸ˆé€å¸§æ‰‹ç»˜æ¯ä¸€é¢—é—ªçƒçš„æ˜Ÿæ˜Ÿã€‚

**"When You Wish Upon a Star"** ä¸ä»…èµ¢å¾—äº†å¥¥æ–¯å¡æœ€ä½³åŽŸåˆ›æ­Œæ›²ï¼Œè¿˜æˆä¸ºäº†è¿ªå£«å°¼å…¬å¸çš„æ°¸ä¹…æ ‡å¿—æ›²ã€‚`,
    
    legacy: `â€¢ åŠ¨ç”»æŠ€æœ¯é©å‘½ï¼šå¤šå¹³é¢æ‘„å½±æœºã€ç‰¹æ•ˆåŠ¨ç”»ã€è§’è‰²åŠ¨ç”»çš„é‡Œç¨‹ç¢‘
â€¢ å¥¥æ–¯å¡åŒæ–™å† å†›ï¼šé¦–éƒ¨èŽ·å¾—ç«žèµ›ç±»å¥¥æ–¯å¡å¥–çš„åŠ¨ç”»é•¿ç‰‡ï¼ˆæœ€ä½³åŽŸåˆ›éŸ³ä¹ã€æœ€ä½³åŽŸåˆ›æ­Œæ›²ï¼‰
â€¢ ç¾Žå›½å›½å®¶ç”µå½±ç™»è®°å†Œï¼š1994å¹´å…¥é€‰ï¼Œè¢«è®¤å®šä¸º"å…·æœ‰æ–‡åŒ–ã€åŽ†å²æˆ–ç¾Žå­¦é‡è¦æ€§"
â€¢ å½±å“å»¶ç»­ï¼šæˆä¸ºåŽä¸–æ‰€æœ‰åŠ¨ç”»ç”µå½±çš„æŠ€æœ¯å’Œè‰ºæœ¯æ ‡æ†`,
    
    significance: `ã€ŠåŒ¹è¯ºæ›¹ã€‹è¯æ˜Žäº†åŠ¨ç”»ä¸åªæ˜¯å„¿ç«¥å¨±ä¹â€”â€”å®ƒæ˜¯ä¸€ç§å®Œæ•´çš„è‰ºæœ¯å½¢å¼ã€‚

ç”µå½±å²å­¦å®¶å¸¸å¸¸å°†å®ƒè¯„ä¸º**æœ‰å²ä»¥æ¥æŠ€æœ¯æœ€å®Œç¾Žçš„è¿ªå£«å°¼åŠ¨ç”»**ã€‚å®ƒä¸ä»…è®²è¿°äº†ä¸€ä¸ªæœ¨å¶å˜æˆçœŸæ­£ç”·å­©çš„æ•…äº‹ï¼Œå®ƒæœ¬èº«å°±æ˜¯ä¸€ä¸ªå…³äºŽ"è‰ºæœ¯å¦‚ä½•èµ‹äºˆæ— ç”Ÿå‘½çš„ä¸œè¥¿ä»¥ç”Ÿå‘½"çš„éšå–»ã€‚

æ¯ä¸€å¸§éƒ½æ˜¯æ‰‹ç»˜çš„è‰ºæœ¯å“ã€‚åœ¨æ•°å­—æ—¶ä»£å›žçœ‹ï¼Œè¿™ç§å·¥è‰ºå‡ ä¹Žæ˜¯ä¸å¯æ€è®®çš„ã€‚`,

    dateConnection_en: 'On February 7, 1940, Pinocchio premiered at the Center Theatre in New York City. This animated film is considered the pinnacle of animation art and the first animated feature to win a competitive Academy Award.',
    
    designerBio_en: `Walt Disney Studios in the early 1940s represented the highest level of animation art.

The production team included over 750 artists: animators, assistants, layout artists, background painters, special effects animators, and ink and paint artists. They created over 2 million drawings and used more than 1,500 shades of paint.

Gustaf Tenggren was assigned as art director, giving the film the lavish European storybook style that Walt Disney envisioned. Ward Kimball created the character design for Jiminy Cricket, transforming a minor character from the original story into the film's soul.

**"Animation can explain whatever the mind of man can conceive."** â€” Walt Disney`,
    
    story_en: `In 1940, when Pinocchio premiered, World War II had already begun in Europe. This $2.6 million film initially flopped at the box officeâ€”European and Asian markets were cut off by war.

But the film was technically revolutionary. It pioneered the extensive use of the **multiplane camera**â€”making backgrounds and foregrounds move at different speeds, creating an unprecedented sense of three-dimensional space.

Underwater scenes, rain, smoke, the puppet's joint movementsâ€”every special effect was a first in animation history. When the Blue Fairy appears, her stardust effect required effects animators to hand-draw every twinkling star frame by frame.

**"When You Wish Upon a Star"** not only won the Oscar for Best Original Song but became Disney's permanent signature tune.`,
    
    legacy_en: `â€¢ Animation technology revolution: Milestones in multiplane camera, effects animation, and character animation
â€¢ Double Oscar winner: First animated feature to win competitive Academy Awards (Best Original Score, Best Original Song)
â€¢ National Film Registry: Selected in 1994 as "culturally, historically, or aesthetically significant"
â€¢ Lasting influence: Became the technical and artistic benchmark for all subsequent animated films`,
    
    significance_en: `Pinocchio proved that animation is not just children's entertainmentâ€”it is a complete art form.

Film historians often rate it as **the most technically perfect Disney animation ever made**. It not only tells the story of a puppet becoming a real boy; it is itself a metaphor for "how art gives life to the inanimate."

Every frame is a hand-drawn work of art. Looking back from the digital age, this craftsmanship is almost inconceivable.`
  },
  {
    id: '12',
    date: '2026-02-08',
    imageUrl: '/the-daily-object/images/ruskin-stones-of-venice.jpg',
    fullImageUrl: '/the-daily-object/images/full/ruskin-stones-of-venice.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/ruskin-stones-of-venice.jpg',
    title: 'å¨å°¼æ–¯ä¹‹çŸ³',
    title_en: 'The Stones of Venice',
    subtitle: 'John Ruskin, 1851â€“1853',
    category: 'architecture',
    designer: 'John Ruskin',
    year: '1851',
    
    dateConnection: '1819å¹´2æœˆ8æ—¥ï¼ŒJohn Ruskin å‡ºç”ŸäºŽä¼¦æ•¦ã€‚ä»–æ˜¯ç»´å¤šåˆ©äºšæ—¶ä»£æœ€æœ‰å½±å“åŠ›çš„è‰ºæœ¯ä¸Žå»ºç­‘è¯„è®ºå®¶ï¼Œä»–å…³äºŽå“¥ç‰¹å¼å»ºç­‘çš„ç†è®ºç›´æŽ¥å‚¬ç”Ÿäº†å·¥è‰ºç¾Žæœ¯è¿åŠ¨ï¼ˆArts and Crafts Movementï¼‰ï¼Œä¸ºçŽ°ä»£è®¾è®¡çš„è¯žç”Ÿé“ºå¹³äº†é“è·¯ã€‚',
    
    designerBio: `John Ruskinï¼ˆ1819-1900ï¼‰ï¼Œè‹±å›½ä½œå®¶ã€è‰ºæœ¯è¯„è®ºå®¶ã€å»ºç­‘ç†è®ºå®¶ã€ç¤¾ä¼šæ€æƒ³å®¶ã€‚

ä»–ä¸æ˜¯è®¾è®¡å¸ˆï¼Œå´æ·±åˆ»æ”¹å˜äº†äººä»¬æ€è€ƒè®¾è®¡çš„æ–¹å¼ã€‚å‡ºèº«å¯Œè£•çš„ä¼¦æ•¦å®¶åº­ï¼Œä»Žå°è·Ÿéšçˆ¶æ¯æ¸¸åŽ†æ¬§æ´²ï¼Œå¯¹é˜¿å°”å‘æ–¯å±±å’Œå¨å°¼æ–¯äº§ç”Ÿäº†ç»ˆèº«çš„è¿·æ‹ã€‚23å²å‡ºç‰ˆç¬¬ä¸€éƒ¨å·¨è‘—ã€ŠçŽ°ä»£ç”»å®¶ã€‹ï¼Œä¸ºé€çº³çš„ç»˜ç”»è¾©æŠ¤ï¼Œä¸€ä¸¾æˆåã€‚

ä½†çœŸæ­£æ”¹å˜è®¾è®¡å²çš„æ˜¯ä»–å¯¹å»ºç­‘çš„æ€è€ƒã€‚1849å¹´çš„ã€Šå»ºç­‘ä¸ƒç¯ã€‹å’Œ1851-53å¹´çš„ã€Šå¨å°¼æ–¯ä¹‹çŸ³ã€‹æå‡ºäº†ä¸€ä¸ªé©å‘½æ€§çš„è§‚ç‚¹ï¼š**å»ºç­‘çš„å“è´¨ä¸å–å†³äºŽè®¾è®¡å›¾çº¸ï¼Œè€Œå–å†³äºŽå·¥åŒ åœ¨åˆ¶ä½œè¿‡ç¨‹ä¸­çš„è‡ªç”±å’Œå°Šä¸¥ã€‚**

**"ä¼Ÿå¤§çš„è‰ºæœ¯æ˜¯äººç±»åŒæ‰‹çš„å¿«ä¹è¡¨è¾¾ã€‚"**`,
    
    story: `1849å¹´è‡³1852å¹´ï¼ŒRuskin å¤šæ¬¡å‰å¾€å¨å°¼æ–¯ï¼Œä¸€ç –ä¸€çŸ³åœ°è®°å½•è¿™åº§æ­£åœ¨è¡°è´¥çš„åŸŽå¸‚ã€‚ä»–ç´ æã€æµ‹é‡ã€æ‹æ‘„ï¼Œç•™ä¸‹äº†æ•°åƒå¼ ç»†è‡´å…¥å¾®çš„å»ºç­‘ç»†èŠ‚ç ”ç©¶â€”â€”æŸ±å¤´ä¸Šçš„å¶å­çº¹æ ·ã€çª—æ£‚çš„æ›²çº¿ã€å¢™é¢çŸ³æçš„è‰²å½©å˜åŒ–ã€‚

ã€Šå¨å°¼æ–¯ä¹‹çŸ³ã€‹çš„æ ¸å¿ƒè®ºç‚¹éœ‡æ’¼äº†æ•´ä¸ªç»´å¤šåˆ©äºšæ—¶ä»£ï¼š

**å“¥ç‰¹å¼å»ºç­‘ä¹‹æ‰€ä»¥ä¼Ÿå¤§ï¼Œä¸æ˜¯å› ä¸ºå®ƒçš„è®¾è®¡æ–¹æ¡ˆç²¾å¦™ï¼Œè€Œæ˜¯å› ä¸ºæ¯ä¸€ä¸ªçŸ³åŒ éƒ½æœ‰è‡ªç”±å‘æŒ¥çš„ç©ºé—´ã€‚** ä»–ä»¬é›•åˆ»çš„å¶å­ã€é¢å­”ã€æ€ªå…½ï¼Œæ¯ä¸€ä¸ªéƒ½ä¸åŒâ€”â€”ç²—ç³™çš„ã€ä¸å®Œç¾Žçš„ï¼Œä½†å……æ»¡ç”Ÿå‘½åŠ›ã€‚

ç›¸æ¯”ä¹‹ä¸‹ï¼Œæ–‡è‰ºå¤å…´å»ºç­‘çš„ç²¾ç¡®å¯¹ç§°æ„å‘³ç€ä»€ä¹ˆï¼Ÿæ„å‘³ç€å·¥åŒ å˜æˆäº†æœºå™¨â€”â€”åªèƒ½æŒ‰ç…§å›¾çº¸ç²¾ç¡®æ‰§è¡Œï¼Œæ²¡æœ‰åˆ›é€ çš„è‡ªç”±ã€‚

**"ä½ ä¸èƒ½åŒæ—¶è¿½æ±‚å®Œç¾Žçš„è£…é¥°å’Œå®Œç¾Žçš„å·¥äººã€‚ä½ å¿…é¡»åœ¨ä¸¤è€…é—´é€‰æ‹©ã€‚"**

è¿™æ®µè¯ç›´æŽ¥å‘½ä¸­äº†å·¥ä¸šé©å‘½çš„è¦å®³ï¼šå·¥åŽ‚ç”Ÿäº§çš„ä¸œè¥¿è¶Šæ¥è¶Šå®Œç¾Žï¼Œä½†å·¥äººçš„çµé­‚è¶Šæ¥è¶Šæ­»ã€‚

Ruskin çš„å­¦ç”Ÿ William Morris æŠŠè¿™ä¸ªç†è®ºä»˜è¯¸å®žè·µï¼Œåˆ›ç«‹äº†å·¥è‰ºç¾Žæœ¯è¿åŠ¨â€”â€”ç”¨æ‰‹å·¥åˆ¶ä½œå¯¹æŠ—æœºå™¨ç”Ÿäº§ï¼Œå¼ºè°ƒåŠ³åŠ¨çš„å°Šä¸¥å’Œç¾Žæ„Ÿã€‚è¿™åœºè¿åŠ¨æœ€ç»ˆæ¼”å˜ä¸ºæ–°è‰ºæœ¯è¿åŠ¨ã€å¾·æ„å¿—åˆ¶é€ è”ç›Ÿã€åŒ…è±ªæ–¯ï¼Œæˆä¸ºçŽ°ä»£è®¾è®¡çš„æºå¤´ã€‚`,

    legacy: `Ruskin å¯¹è®¾è®¡çš„å½±å“æ˜¯é—´æŽ¥çš„ï¼Œä½†æ— æ¯”æ·±è¿œï¼š

**å·¥è‰ºç¾Žæœ¯è¿åŠ¨çš„æ€æƒ³ä¹‹çˆ¶**ï¼šWilliam Morris ç›´æŽ¥å— Ruskin å¯å‘ï¼Œåˆ›ç«‹äº†çŽ°ä»£è®¾è®¡å²ä¸Šç¬¬ä¸€åœºæœ‰æ„è¯†çš„è®¾è®¡è¿åŠ¨

**æ‰‹å·¥è‰ºçš„å¤å…´**ï¼šä»–å…³äºŽ"å·¥åŒ å°Šä¸¥"çš„è®ºè¿°åœ¨ä»Šå¤©çš„æ‰‹å·¥å¤å…´è¿åŠ¨ã€æ…¢è®¾è®¡ï¼ˆSlow Designï¼‰å’Œå¯æŒç»­è®¾è®¡ä¸­ä¾ç„¶å›žå“

**å»ºç­‘ä¿æŠ¤è¿åŠ¨**ï¼šä»–æ˜¯æœ€æ—©å‘¼åä¿æŠ¤åŽ†å²å»ºç­‘çš„äººä¹‹ä¸€ï¼Œå½±å“äº†çŽ°ä»£æ–‡ç‰©ä¿æŠ¤ç†è®º

**è®¾è®¡ä¼¦ç†çš„å…ˆé©±**ï¼šä»–æ˜¯ç¬¬ä¸€ä¸ªæŠŠ"è®¾è®¡"å’Œ"ç¤¾ä¼šæ­£ä¹‰"è”ç³»èµ·æ¥çš„äººâ€”â€”å¥½çš„è®¾è®¡ä¸ä»…å…³ä¹Žç¾Žï¼Œæ›´å…³ä¹Žåˆ¶ä½œè€…çš„å°Šä¸¥

**è§†è§‰ç´ å…»æ•™è‚²**ï¼šä»–åœ¨ç‰›æ´¥å¤§å­¦åˆ›åŠžäº†ç»˜ç”»å­¦æ ¡ï¼Œè®¤ä¸ºæ¯ä¸ªäººéƒ½åº”è¯¥å­¦ä¼š"çœ‹"â€”â€”è¿™æ˜¯çŽ°ä»£è®¾è®¡æ•™è‚²çš„å‰èº«`,
    
    significance: `ä¸ºä»€ä¹ˆä¸€ä¸ªä»Žä¸ç”»è®¾è®¡å›¾çš„äººï¼Œå´æ˜¯è®¾è®¡å²ä¸Šæœ€é‡è¦çš„äººç‰©ä¹‹ä¸€ï¼Ÿ

å› ä¸º Ruskin é—®äº†ä¸€ä¸ªè‡³ä»Šä»åœ¨å›°æ‰°æˆ‘ä»¬çš„é—®é¢˜ï¼š**å½“æˆ‘ä»¬è¿½æ±‚æ•ˆçŽ‡å’Œå®Œç¾Žæ—¶ï¼Œå¤±åŽ»äº†ä»€ä¹ˆï¼Ÿ**

å·¥ä¸šé©å‘½è®©äº§å“å˜å¾—ä¾¿å®œã€ç»Ÿä¸€ã€å®Œç¾Žã€‚ä½† Ruskin çœ‹åˆ°äº†ä»£ä»·ï¼šå·¥åŒ å˜æˆäº†æœºå™¨çš„é™„åº¸ï¼Œäº§å“å¤±åŽ»äº†çµé­‚ï¼ŒåŸŽå¸‚å˜å¾—ä¸‘é™‹ã€‚

170å¹´åŽï¼Œè¿™ä¸ªé—®é¢˜ä¾ç„¶å°–é”ã€‚å½“ AI å¯ä»¥åœ¨å‡ ç§’é’Ÿå†…ç”Ÿæˆ"å®Œç¾Ž"çš„è®¾è®¡æ–¹æ¡ˆæ—¶ï¼Œäººç±»è®¾è®¡å¸ˆçš„ä»·å€¼åœ¨å“ªé‡Œï¼Ÿç­”æ¡ˆå¯èƒ½å°±åœ¨ Ruskin é‚£é‡Œï¼š**ä¸å®Œç¾Žçš„äººç±»åˆ›é€ åŠ›ï¼Œæ¯”å®Œç¾Žçš„æœºå™¨è¾“å‡ºæ›´æœ‰ä»·å€¼â€”â€”å› ä¸ºå‰è€…åŒ…å«äº†è‡ªç”±ã€åˆ¤æ–­å’Œçµé­‚ã€‚**`,

    dateConnection_en: 'On February 8, 1819, John Ruskin was born in London. He was the most influential art and architecture critic of the Victorian era. His theories on Gothic architecture directly gave rise to the Arts and Crafts Movement, paving the way for the birth of modern design.',
    
    designerBio_en: `John Ruskin (1819-1900), British writer, art critic, architectural theorist, and social thinker.

He was not a designer, yet he profoundly changed how people think about design. Born to a wealthy London family, he traveled across Europe with his parents from childhood, developing a lifelong fascination with the Alps and Venice. At 23 he published his first major work, "Modern Painters," defending Turner's art, and became an instant celebrity.

But what truly changed design history was his thinking about architecture. "The Seven Lamps of Architecture" (1849) and "The Stones of Venice" (1851-53) proposed a revolutionary idea: **the quality of architecture depends not on the blueprints, but on the freedom and dignity of the craftsmen during the making process.**

**"Great art is the expression of the joy of human hands."**`,
    
    story_en: `Between 1849 and 1852, Ruskin made multiple trips to Venice, documenting the decaying city stone by stone. He sketched, measured, and photographed, leaving thousands of meticulous studies of architectural details â€” leaf patterns on capitals, curves of window tracery, color variations in wall stone.

The central argument of "The Stones of Venice" shook the entire Victorian era:

**Gothic architecture was great not because its design schemes were ingenious, but because every stonemason had freedom to create.** The leaves, faces, and grotesques they carved were each unique â€” rough, imperfect, but full of life.

By contrast, what did the precise symmetry of Renaissance architecture mean? It meant craftsmen became machines â€” executing blueprints exactly, with no creative freedom.

**"You can have either perfect finish or perfect workmen. You cannot have both. You must choose."**

This struck at the heart of the Industrial Revolution: factory products grew ever more perfect, but workers' souls grew ever more dead.

Ruskin's student William Morris put this theory into practice, founding the Arts and Crafts Movement â€” handcraft against machine production, emphasizing the dignity and beauty of labor. This movement eventually evolved into Art Nouveau, the Deutscher Werkbund, and the Bauhaus, becoming the wellspring of modern design.`,

    legacy_en: `Ruskin's influence on design was indirect but immeasurably profound:

**Intellectual father of Arts and Crafts**: William Morris, directly inspired by Ruskin, founded the first conscious design movement in modern design history

**Craft revival**: His arguments about "craftsmen's dignity" still resonate in today's handcraft revival, Slow Design, and sustainable design movements

**Architectural conservation**: He was among the first to call for preserving historic buildings, influencing modern heritage conservation theory

**Design ethics pioneer**: He was the first to connect "design" with "social justice" â€” good design is not only about beauty but about the dignity of makers

**Visual literacy education**: He founded a drawing school at Oxford, believing everyone should learn to "see" â€” a precursor to modern design education`,
    
    significance_en: `Why is someone who never drew a design blueprint one of the most important figures in design history?

Because Ruskin asked a question that still haunts us: **when we pursue efficiency and perfection, what do we lose?**

The Industrial Revolution made products cheap, uniform, and perfect. But Ruskin saw the cost: craftsmen became appendages of machines, products lost their souls, cities became ugly.

170 years later, the question remains sharp. When AI can generate "perfect" design solutions in seconds, where is the value of human designers? The answer may lie with Ruskin: **imperfect human creativity is more valuable than perfect machine output â€” because the former contains freedom, judgment, and soul.**`
  },
  {
    id: '13',
    date: '2026-02-09',
    imageUrl: '/the-daily-object/images/mercedes-35hp.jpg',
    fullImageUrl: '/the-daily-object/images/full/mercedes-35hp.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/mercedes-35hp.jpg',
    title: 'Mercedes 35 HP',
    subtitle: 'Wilhelm Maybach, 1901',
    category: 'industrial',
    designer: 'Wilhelm Maybach',
    year: '1901',
    
    dateConnection: '1846å¹´2æœˆ9æ—¥ï¼ŒWilhelm Maybach å‡ºç”ŸäºŽå¾·å›½æµ·å°”å¸ƒéš†ã€‚ä»–è¢«ç§°ä¸º"æ±½è½¦è®¾è®¡ä¹‹çŽ‹"ï¼ˆKÃ¶nig der Konstrukteureï¼‰ï¼Œè®¾è®¡äº†1901å¹´çš„ Mercedes 35 HPâ€”â€”ä¸–ç•Œä¸Šç¬¬ä¸€è¾†çœŸæ­£æ„ä¹‰ä¸Šçš„çŽ°ä»£æ±½è½¦ï¼Œç»ˆç»“äº†"æ— é©¬é©¬è½¦"æ—¶ä»£ï¼Œå¼€å¯äº†æ±½è½¦è®¾è®¡çš„æ–°çºªå…ƒã€‚',
    
    designerBio: `Wilhelm Maybach (1846-1929)ï¼Œå¾·å›½å·¥ç¨‹å¸ˆå’Œå·¥ä¸šè®¾è®¡å¸ˆï¼ŒçŽ°ä»£æ±½è½¦è®¾è®¡çš„å¥ åŸºäººã€‚

ä»–10å²æˆä¸ºå­¤å„¿ï¼Œåœ¨æ–¯å›¾åŠ ç‰¹çš„ä¸€å®¶æ…ˆå–„æœºæž„é•¿å¤§ï¼Œå±•çŽ°å‡ºæƒŠäººçš„æœºæ¢°å¤©èµ‹ã€‚1865å¹´ï¼Œä»–é‡åˆ°äº† Gottlieb Daimlerâ€”â€”ä¸¤äººæ­¤åŽåˆä½œäº†30å¤šå¹´ï¼Œå½»åº•æ”¹å˜äº†äººç±»å‡ºè¡Œçš„æ–¹å¼ã€‚

**"æˆ‘ä¸æ¨¡ä»¿ï¼Œæˆ‘åˆ›é€ ã€‚"**

Maybach ä¸åªæ˜¯å·¥ç¨‹å¸ˆï¼Œä»–æ˜¯ä¸€ä½çœŸæ­£çš„è®¾è®¡æ€æƒ³å®¶ã€‚ä»–ç†è§£ï¼šå¥½çš„æœºå™¨ä¸ä»…è¦è·‘å¾—å¿«ï¼Œè¿˜è¦ç¾Žã€è¦ä¼˜é›…ã€è¦è®©ä½¿ç”¨è€…æ„Ÿåˆ°æ„‰æ‚¦ã€‚è¿™ç§ç†å¿µåœ¨1901å¹´çš„ Mercedes 35 HP ä¸­è¾¾åˆ°äº†å·…å³°ã€‚`,
    
    story: `19ä¸–çºªæœ«çš„"æ±½è½¦"å…¶å®žå°±æ˜¯åœ¨é©¬è½¦è½¦æž¶ä¸Šè£…ä¸ªå‘åŠ¨æœºâ€”â€”ç¬¨é‡ã€å±é™©ã€ä¸‘é™‹ã€‚å®ƒä»¬è¢«å«åš"æ— é©¬é©¬è½¦"ï¼ˆHorseless Carriageï¼‰ï¼Œå› ä¸ºå®ƒä»¬çœ‹èµ·æ¥ç¡®å®žå°±æ˜¯æ²¡æœ‰é©¬çš„é©¬è½¦ã€‚

1900å¹´ï¼Œå¥¥åœ°åˆ©å•†äººå…¼èµ›è½¦çˆ±å¥½è€… Emil Jellinek æ‰¾åˆ° Maybachï¼Œæå‡ºäº†ä¸€ä¸ªå¤§èƒ†çš„è¦æ±‚ï¼šè®¾è®¡ä¸€æ¬¾å…¨æ–°çš„ã€ä¸“é—¨ä¸ºé€Ÿåº¦å’Œä¼˜é›…è€Œç”Ÿçš„æ±½è½¦ï¼Œå¹¶ä»¥ä»–å¥³å„¿çš„åå­—å‘½åâ€”â€”**Mercedes**ã€‚

Maybach æ²¡æœ‰åœ¨æ—§è®¾è®¡ä¸Šä¿®ä¿®è¡¥è¡¥ã€‚ä»–ä»Žé›¶å¼€å§‹ï¼Œé‡æ–°æ€è€ƒäº†æ±½è½¦åº”è¯¥æ˜¯ä»€ä¹ˆã€‚

**Mercedes 35 HP çš„é©å‘½æ€§è®¾è®¡ï¼š**
- **ä½Žé‡å¿ƒèœ‚çªæ•£çƒ­å™¨**ï¼šä¸å†æŠŠå‘åŠ¨æœºé«˜é«˜æž¶åœ¨è½¦èº«ä¸Šï¼Œè€Œæ˜¯åŽ‹ä½Žæ”¾åœ¨å‰éƒ¨ï¼Œç”¨å…¨æ–°çš„èœ‚çªæ•£çƒ­å™¨å†·å´â€”â€”è¿™å¥ å®šäº†çŽ°ä»£æ±½è½¦"å‰ç½®å‘åŠ¨æœº"çš„åŸºæœ¬å¸ƒå±€
- **è½»é‡åŒ–é’¢æ¡†æž¶åº•ç›˜**ï¼šæŠ›å¼ƒäº†é©¬è½¦çš„æœ¨è´¨ç»“æž„ï¼Œé‡‡ç”¨é’¢åˆ¶åº•ç›˜ï¼Œè®©è½¦èº«æ›´è½»ã€æ›´åšå›º
- **å››é€Ÿå˜é€Ÿå™¨**ï¼šè®©é©¾é©¶è€…å¯ä»¥æ ¹æ®è·¯å†µé€‰æ‹©ä¸åŒçš„é€Ÿåº¦
- **æœºæ¢°è¿›æ°”é˜€**ï¼šå¤§å¹…æå‡äº†å‘åŠ¨æœºæ•ˆçŽ‡

1901å¹´3æœˆï¼ŒMercedes 35 HP åœ¨å°¼æ–¯èµ›è½¦å‘¨ä¸Šæ¨ªæ‰«æ‰€æœ‰æ¯”èµ›é¡¹ç›®ã€‚æ•´ä¸ªæ¬§æ´²éƒ½éœ‡æƒŠäº†ã€‚æ³•å›½æ±½è½¦æ‚å¿— Paul Meyan å†™é“ï¼š"**æˆ‘ä»¬è¿›å…¥äº†æ¢…èµ›å¾·æ–¯æ—¶ä»£ã€‚**"ï¼ˆNous sommes entrÃ©s dans l'Ã¨re MercÃ©dÃ¨s.ï¼‰

è¿™ä¸æ˜¯æ¸è¿›å¼çš„æ”¹è‰¯ã€‚è¿™æ˜¯ä¸€ä¸ªç‰©ç§çš„è¯žç”Ÿã€‚`,
    
    legacy: `â€¢ çŽ°ä»£æ±½è½¦è®¾è®¡åŽŸåž‹ï¼šMercedes 35 HP ç¡®ç«‹äº†å‰ç½®å‘åŠ¨æœºã€åŽè½®é©±åŠ¨ã€ä½Žé‡å¿ƒçš„åŸºæœ¬å¸ƒå±€ï¼Œè¿™ä¸€å¸ƒå±€æ²¿ç”¨è‡³ä»Š
â€¢ å“ç‰Œçš„è¯žç”Ÿï¼šMercedes æˆä¸ºä¸–ç•Œä¸Šæœ€è‘—åçš„æ±½è½¦å“ç‰Œä¹‹ä¸€ï¼Œè‡³ä»Šä»æ˜¯è±ªåŽä¸Žå·¥ç¨‹å“è¶Šçš„ä»£åè¯
â€¢ èœ‚çªæ•£çƒ­å™¨ï¼šMaybach å‘æ˜Žçš„èœ‚çªæ•£çƒ­å™¨æˆä¸ºæ±½è½¦å†·å´ç³»ç»Ÿçš„æ ‡å‡†ï¼Œç›´åˆ°ä»Šå¤©çš„æ•£çƒ­å™¨ä»åŸºäºŽè¿™ä¸€åŽŸç†
â€¢ æ±½è½¦è¿åŠ¨çš„èµ·ç‚¹ï¼šMercedes 35 HP åœ¨èµ›è½¦åœºçš„ç»Ÿæ²»æ€§è¡¨çŽ°å¼€åˆ›äº†æ±½è½¦è¿åŠ¨ä½œä¸ºæŠ€æœ¯éªŒè¯å¹³å°çš„ä¼ ç»Ÿ
â€¢ Maybach å“ç‰Œï¼šä»–çš„åå­—åŽæ¥æˆä¸ºè¶…è±ªåŽæ±½è½¦å“ç‰Œï¼Œä»Šå¤©ä½œä¸ºæ¢…èµ›å¾·æ–¯-è¿ˆå·´èµ«å»¶ç»­`,
    
    significance: `Mercedes 35 HP çš„æ„ä¹‰è¿œè¶…ä¸€è¾†è½¦ã€‚

åœ¨å®ƒä¹‹å‰ï¼Œ"æ±½è½¦"æ˜¯ä¸€ä¸ªç¬‘è¯â€”â€”è´µæ—çš„çŽ©å…·ã€å·¥ç¨‹å¸ˆçš„å®žéªŒã€è·¯äººçš„å™©æ¢¦ã€‚åœ¨å®ƒä¹‹åŽï¼Œæ±½è½¦æˆä¸ºäº†20ä¸–çºªæœ€é‡è¦çš„è®¾è®¡å¯¹è±¡ï¼Œé‡å¡‘äº†åŸŽå¸‚ã€ç¤¾ä¼šå’Œäººç±»ç”Ÿæ´»æ–¹å¼ã€‚

Maybach è¯æ˜Žäº†ä¸€ä¸ªæ·±åˆ»çš„è®¾è®¡åŽŸåˆ™ï¼š**çœŸæ­£çš„åˆ›æ–°ä¸æ˜¯æ”¹è‰¯æ—§äº‹ç‰©ï¼Œè€Œæ˜¯é‡æ–°å®šä¹‰äº‹ç‰©æœ¬èº«ã€‚** ä»–æ²¡æœ‰è®¾è®¡ä¸€è¾†"æ›´å¥½çš„æ— é©¬é©¬è½¦"â€”â€”ä»–è®¾è®¡äº†ä¸€ä¸ªå…¨æ–°çš„ç‰©ç§ã€‚

125å¹´åŽçš„ä»Šå¤©ï¼Œå½“æˆ‘ä»¬äº‰è®ºç”µåŠ¨è½¦ã€è‡ªåŠ¨é©¾é©¶å’Œé£žè¡Œæ±½è½¦æ—¶ï¼Œæˆ‘ä»¬ä»ç„¶ç«™åœ¨ Maybach ç”»ä¸‹çš„é‚£æ¡èµ·è·‘çº¿ä¸Šã€‚`,

    dateConnection_en: 'On February 9, 1846, Wilhelm Maybach was born in Heilbronn, Germany. Known as the "King of Designers" (KÃ¶nig der Konstrukteure), he designed the 1901 Mercedes 35 HP â€” the world\'s first truly modern automobile, ending the "horseless carriage" era and ushering in a new age of automotive design.',
    
    designerBio_en: `Wilhelm Maybach (1846-1929), German engineer and industrial designer, the founding father of modern automotive design.

Orphaned at 10, he grew up in a charitable institution in Stuttgart, displaying remarkable mechanical talent. In 1865, he met Gottlieb Daimler â€” the two would collaborate for over 30 years, fundamentally changing how humans travel.

**"I don't imitate, I create."**

Maybach wasn't just an engineer; he was a true design thinker. He understood that a good machine must not only run fast but also be beautiful, elegant, and pleasing to use. This philosophy reached its zenith in the 1901 Mercedes 35 HP.`,
    
    story_en: `The "automobiles" of the late 19th century were essentially engines bolted onto horse carriage frames â€” clumsy, dangerous, and ugly. They were called "horseless carriages" because that's exactly what they looked like.

In 1900, Austrian businessman and racing enthusiast Emil Jellinek approached Maybach with a bold request: design an entirely new car built for speed and elegance, named after his daughter â€” **Mercedes**.

Maybach didn't tinker with old designs. He started from scratch, rethinking what an automobile should be.

**The Mercedes 35 HP's revolutionary design:**
- **Low-center-of-gravity honeycomb radiator**: Instead of mounting the engine high on the body, it was placed low at the front with an innovative honeycomb radiator â€” establishing the modern "front-engine" layout
- **Lightweight pressed-steel frame chassis**: Abandoning the wooden carriage structure for a steel chassis, making the car lighter and stronger
- **Four-speed transmission**: Allowing drivers to select speeds for different road conditions
- **Mechanically operated inlet valves**: Dramatically improving engine efficiency

In March 1901, the Mercedes 35 HP swept every race at Nice Speed Week. All of Europe was stunned. French automotive journalist Paul Meyan wrote: **"We have entered the Mercedes era."** (Nous sommes entrÃ©s dans l'Ã¨re MercÃ©dÃ¨s.)

This wasn't incremental improvement. It was the birth of a species.`,
    
    legacy_en: `â€¢ Modern automobile archetype: The Mercedes 35 HP established the front-engine, rear-wheel-drive, low-center-of-gravity layout still used today
â€¢ Birth of a brand: Mercedes became one of the world's most famous automotive brands, still synonymous with luxury and engineering excellence
â€¢ Honeycomb radiator: Maybach's invention became the standard for automotive cooling systems, with today's radiators still based on this principle
â€¢ Motorsport origins: The 35 HP's dominant racing performance established the tradition of motorsport as a technology proving ground
â€¢ Maybach brand: His name later became an ultra-luxury automotive brand, continuing today as Mercedes-Maybach`,
    
    significance_en: `The Mercedes 35 HP's significance goes far beyond a single car.

Before it, the "automobile" was a joke â€” an aristocrat's toy, an engineer's experiment, a pedestrian's nightmare. After it, the car became the most important design object of the 20th century, reshaping cities, societies, and human lifestyles.

Maybach demonstrated a profound design principle: **true innovation isn't improving old things â€” it's redefining the thing itself.** He didn't design a "better horseless carriage" â€” he designed an entirely new species.

125 years later, as we debate electric vehicles, autonomous driving, and flying cars, we still stand at the starting line Maybach drew.`
  },
  {
    id: '15',
    date: '2026-02-20',
    imageUrl: '/the-daily-object/images/salk-institute.jpg',
    fullImageUrl: '/the-daily-object/images/full/salk-institute.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/salk-institute.jpg',
    title: 'Salk Institute for Biological Studies',
    subtitle: 'Louis Kahn, 1965',
    category: 'architecture',
    designer: 'Louis Kahn',
    year: '1965',
    
    dateConnection: '1901å¹´2æœˆ20æ—¥ï¼ŒLouis Kahn å‡ºç”ŸäºŽçˆ±æ²™å°¼äºšï¼ˆå½“æ—¶å±žäºŽä¿„ç½—æ–¯å¸å›½ï¼‰ã€‚ä»–æ˜¯20ä¸–çºªæœ€ä¼Ÿå¤§çš„å»ºç­‘å¸ˆä¹‹ä¸€ï¼Œç”¨å…‰ä¸Žæ··å‡åœŸåˆ›é€ äº†çŽ°ä»£å»ºç­‘çš„ç²¾ç¥žæ®¿å ‚ã€‚',
    
    designerBio: `Louis Kahn (1901-1974)ï¼Œç¾Žå›½å»ºç­‘å¸ˆï¼Œ20ä¸–çºªæœ€å…·å½±å“åŠ›çš„å»ºç­‘å¤§å¸ˆä¹‹ä¸€ã€‚

ä»–å‡ºç”ŸäºŽçˆ±æ²™å°¼äºšçš„ä¸€ä¸ªè´«ç©·çŠ¹å¤ªå®¶åº­ï¼Œ4å²æ—¶ç§»æ°‘ç¾Žå›½è´¹åŸŽã€‚ç«¥å¹´æ—¶è„¸éƒ¨è¢«ç‚‰ç«ä¸¥é‡çƒ§ä¼¤ï¼Œç•™ä¸‹ç»ˆèº«ç–¤ç—•ã€‚ä»–åœ¨å®¾å¤•æ³•å°¼äºšå¤§å­¦å­¦ä¹ å»ºç­‘ï¼Œå¸ˆä»Ž Paul Cretã€‚

ä¸Žå…¶ä»–çŽ°ä»£ä¸»ä¹‰å»ºç­‘å¸ˆä¸åŒï¼ŒKahn 50å²ä¹‹åŽæ‰å¼€å§‹ä»–æœ€é‡è¦çš„ä½œå“ã€‚ä»–ç›¸ä¿¡å»ºç­‘åº”è¯¥è¿½é—®è‡ªèº«çš„æœ¬è´¨â€”â€”"ç –æƒ³æˆä¸ºä»€ä¹ˆï¼Ÿ"

**"Even a brick wants to be something."**
å³ä½¿æ˜¯ä¸€å—ç –ä¹Ÿæƒ³æˆä¸ºæŸç§ä¸œè¥¿ã€‚

ä»–ä¸‰æ¬¡èŽ·å¾— AIA é‡‘å¥–æåï¼ŒèŽ·å¾— RIBA çš‡å®¶é‡‘å¥–ã€‚1974å¹´ï¼Œä»–åœ¨çº½çº¦å®¾å¤•æ³•å°¼äºšè½¦ç«™çš„æ´—æ‰‹é—´é‡Œå¿ƒè„ç—…å‘ä½œåŽ»ä¸–ï¼Œèº«æ— åˆ†æ–‡ï¼Œè´Ÿå€ºç´¯ç´¯ã€‚`,
    
    story: `1959å¹´ï¼Œç–«è‹—å‘æ˜Žè€… Jonas Salk åšå£«æ‰¾åˆ° Louis Kahnï¼Œå§”æ‰˜ä»–è®¾è®¡ä¸€åº§ç ”ç©¶æ‰€ã€‚Salk çš„è¦æ±‚å¾ˆç®€å•ï¼š

**"åˆ›é€ ä¸€ä¸ªè¿žæ¯•åŠ ç´¢éƒ½æ„¿æ„æ¥å·¥ä½œçš„åœ°æ–¹ã€‚"**

Kahn ç»™å‡ºçš„ç­”æ¡ˆæ˜¯ä¸¤æŽ’ç›¸å¯¹çš„æ··å‡åœŸå»ºç­‘ï¼Œä¸­é—´æ˜¯ä¸€æ¡ç‹­çª„çš„æ°´æ¸ ï¼Œç›´æŒ‡å¤ªå¹³æ´‹ã€‚

å»ºç­‘ç”±æ¸…æ°´æ··å‡åœŸå’ŒæŸšæœ¨æž„æˆã€‚å®žéªŒå®¤æ˜¯æ— æŸ±çš„å¼€æ”¾ç©ºé—´ï¼Œè®¾å¤‡ç®¡é“å…¨éƒ¨è—åœ¨"æœåŠ¡å±‚"é‡Œï¼Œå¯ä»¥çµæ´»æ”¹å˜å¸ƒå±€ã€‚å»ºç­‘å¤–ç«‹é¢çš„æŸšæœ¨çª—æ¡†åœ¨é˜³å…‰ä¸‹å‘å‡ºæ¸©æš–çš„å…‰æ³½ï¼Œä¸Žå†·å³»çš„æ··å‡åœŸå½¢æˆå¯¹æ¯”ã€‚

**æ¯å¹´ä¸¤æ¬¡ï¼Œæ˜¥åˆ†å’Œç§‹åˆ†ï¼Œè½æ—¥æ­£å¥½æ²¿ç€ä¸­å¤®æ°´æ¸ çš„è½´çº¿è½å…¥å¤ªå¹³æ´‹ã€‚**

è¿™ä¸æ˜¯å¶ç„¶ã€‚è¿™æ˜¯ Kahn ä¸Ž Luis BarragÃ¡n è®¨è®ºåŽçš„è®¾è®¡å†³å®šâ€”â€”è®©å»ºç­‘ä¸Žå®‡å®™ç§©åºå¯¹é½ã€‚`,
    
    legacy: `â€¢ çŽ°ä»£å»ºç­‘åœ£åœ°ï¼šè¢«å»ºç­‘å¸ˆä»¬èª‰ä¸º"å»ºç­‘æœåœ£åœ°"ï¼Œæ¯å¹´æ•°åƒäººå‰æ¥å‚è§‚
â€¢ æœåŠ¡ç©ºé—´é©å‘½ï¼šå°†è®¾å¤‡ç®¡é“é›†ä¸­åœ¨ç‹¬ç«‹æ¥¼å±‚çš„åšæ³•ï¼Œå½±å“äº†æ­¤åŽæ‰€æœ‰çš„å®žéªŒå®¤å’ŒåŒ»é™¢è®¾è®¡
â€¢ æ··å‡åœŸç¾Žå­¦ï¼šè¯æ˜Žæ¸…æ°´æ··å‡åœŸå¯ä»¥æ˜¯æ¸©æš–çš„ã€ç²¾ç¥žæ€§çš„ã€è¯—æ„çš„
â€¢ å…‰çš„å»ºç­‘ï¼šKahn å¯¹è‡ªç„¶å…‰çš„è¿ç”¨è¾¾åˆ°äº†å‡ ä¹Žå®—æ•™æ€§çš„é«˜åº¦`,
    
    significance: `Kahn è¯æ˜Žäº†çŽ°ä»£å»ºç­‘å¯ä»¥æœ‰çµé­‚ã€‚

åœ¨ä»–ä¹‹å‰ï¼ŒçŽ°ä»£ä¸»ä¹‰å»ºç­‘å¸¸å¸¸è¢«æ‰¹è¯„ä¸ºå†·æ¼ ã€åŠŸèƒ½ä¸»ä¹‰ã€ç¼ºä¹ç²¾ç¥žæ€§ã€‚Kahn ç”¨ Salk Institute å›žç­”äº†è¿™äº›æ‰¹è¯„ï¼šç†æ€§çš„ç»“æž„å¯ä»¥åˆ›é€ ç¥žåœ£çš„ç©ºé—´ï¼›å·¥ä¸šææ–™å¯ä»¥ä¼ è¾¾æ°¸æ’çš„ç¾Žï¼›åŠŸèƒ½å»ºç­‘å¯ä»¥è®©äººè½æ³ªã€‚

ç«™åœ¨ä¸­å¤®å¹¿åœºä¸Šï¼Œé¢å¯¹æ— å°½çš„å¤ªå¹³æ´‹å’Œé‚£æ¡ç»†ç»†çš„æ°´æ¸ ï¼Œä½ ä¼šæ˜Žç™½ä¸ºä»€ä¹ˆæœ‰äººè¯´ï¼šè¿™æ˜¯20ä¸–çºªæœ€ä¼Ÿå¤§çš„å»ºç­‘ç©ºé—´ä¹‹ä¸€ã€‚`,

    dateConnection_en: 'On February 20, 1901, Louis Kahn was born in Estonia (then part of the Russian Empire). He is one of the greatest architects of the 20th century, creating spiritual temples of modern architecture with light and concrete.',
    
    designerBio_en: `Louis Kahn (1901-1974), American architect, one of the most influential architectural masters of the 20th century.

He was born into a poor Jewish family in Estonia and immigrated to Philadelphia at age 4. As a child, his face was severely burned by a stove fire, leaving permanent scars. He studied architecture at the University of Pennsylvania under Paul Cret.

Unlike other modernist architects, Kahn only began his most important works after age 50. He believed architecture should question its own essenceâ€”"What does a brick want to be?"

**"Even a brick wants to be something."**

He was nominated three times for the AIA Gold Medal and received the RIBA Royal Gold Medal. In 1974, he died of a heart attack in a restroom at New York's Penn Station, penniless and in debt.`,
    
    story_en: `In 1959, vaccine inventor Dr. Jonas Salk approached Louis Kahn to design a research institute. Salk's request was simple:

**"Create a place where even Picasso would want to work."**

Kahn's answer was two rows of facing concrete buildings with a narrow water channel between them, pointing straight at the Pacific Ocean.

The buildings are made of exposed concrete and teak. The laboratories are column-free open spaces, with all equipment and utilities hidden in "servant floors," allowing flexible layout changes. The teak window frames on the faÃ§ade glow warmly in the sunlight, contrasting with the austere concrete.

**Twice a year, on the spring and autumn equinoxes, the setting sun falls exactly along the axis of the central water channel into the Pacific.**

This was not accidental. It was a design decision made after discussions between Kahn and Luis BarragÃ¡nâ€”aligning the building with cosmic order.`,
    
    legacy_en: `â€¢ Modern architecture pilgrimage site: Architects call it a "place of pilgrimage," with thousands visiting annually
â€¢ Service space revolution: The approach of concentrating utilities on separate floors influenced all subsequent laboratory and hospital design
â€¢ Concrete aesthetics: Proved that exposed concrete can be warm, spiritual, and poetic
â€¢ Architecture of light: Kahn's use of natural light achieved an almost religious dimension`,
    
    significance_en: `Kahn proved that modern architecture can have a soul.

Before him, modernist architecture was often criticized as cold, functionalist, lacking spirituality. Kahn answered these criticisms with the Salk Institute: rational structure can create sacred space; industrial materials can convey eternal beauty; functional buildings can move people to tears.

Standing in the central plaza, facing the endless Pacific and that thin channel of water, you understand why some say: this is one of the greatest architectural spaces of the 20th century.`
  },
  {
    id: '16',
    date: '2026-02-21',
    imageUrl: '/the-daily-object/images/polaroid-land-camera.jpg',
    fullImageUrl: '/the-daily-object/images/full/polaroid-land-camera.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/polaroid-land-camera.jpg',
    title: 'Polaroid Land Camera Model 95',
    category: 'industrial',
    designer: 'Edwin Land',
    year: '1948',
    
    dateConnection: '1947å¹´2æœˆ21æ—¥ï¼ŒEdwin Land åœ¨ç¾Žå›½å…‰å­¦å­¦ä¼šçº½çº¦ä¼šè®®ä¸Šé¦–æ¬¡å…¬å¼€æ¼”ç¤ºå³æ—¶æ‘„å½±æŠ€æœ¯ï¼Œè¿™å°ç›¸æœºåœ¨ä¸€å¹´åŽæ­£å¼å‘å”®ï¼Œæ”¹å˜äº†æ‘„å½±å²ã€‚',
    
    designerBio: `Edwin Herbert Land (1909-1991)ï¼Œç¾Žå›½ç§‘å­¦å®¶ã€å‘æ˜Žå®¶ã€Polaroid å…¬å¸åˆ›å§‹äººã€‚

å“ˆä½›å¤§å­¦è¾å­¦ç”Ÿï¼Œ17å²å°±å¼€å§‹ç ”ç©¶åæŒ¯å…‰ã€‚1937å¹´åˆ›ç«‹ Polaroid å…¬å¸ï¼Œæœ€åˆç”Ÿäº§åå…‰æ»¤é•œå’Œå¤ªé˜³é•œã€‚

ä¼ è¯´1943å¹´ï¼Œä»–3å²çš„å¥³å„¿é—®ï¼š"ä¸ºä»€ä¹ˆä¸èƒ½é©¬ä¸Šçœ‹åˆ°ç…§ç‰‡ï¼Ÿ"è¿™ä¸ªé—®é¢˜æ¿€å‘äº†ä»–å‘æ˜Žå³æ—¶æ‘„å½±ã€‚ä»–åœ¨ä¸€ä¸ªå°æ—¶çš„æ•£æ­¥ä¸­å°±æž„æ€å‡ºäº†æ•´ä¸ªåŒ–å­¦å’Œå…‰å­¦ç³»ç»Ÿçš„é›å½¢ã€‚

Land ä¸€ç”ŸæŒæœ‰535é¡¹ä¸“åˆ©ï¼Œä»…æ¬¡äºŽçˆ±è¿ªç”Ÿã€‚ä»–ä¸åªæ˜¯å‘æ˜Žå®¶ï¼Œæ›´æ˜¯ä¸€ä¸ªå°†ç§‘å­¦ã€è®¾è®¡ä¸Žå•†ä¸šå®Œç¾Žèžåˆçš„äººã€‚Steve Jobs è§†ä»–ä¸ºå¶åƒï¼Œç§°ä»–ä¸º"å›½å®çº§äººç‰©"ã€‚`,
    
    story: `1947å¹´2æœˆ21æ—¥ï¼ŒEdwin Land ç«™åœ¨ç¾Žå›½å…‰å­¦å­¦ä¼šçš„è®²å°ä¸Šï¼Œæ‹äº†ä¸€å¼ ç…§ç‰‡ã€‚

60ç§’åŽï¼Œä»–ä»Žç›¸æœºé‡ŒæŠ½å‡ºäº†ä¸€å¼ å®Œå…¨æ˜¾å½±çš„ç…§ç‰‡ã€‚

å…¨åœºéœ‡æƒŠã€‚

è¿™æ˜¯äººç±»åŽ†å²ä¸Šç¬¬ä¸€æ¬¡"å³æ—¶æ‘„å½±"çš„å…¬å¼€æ¼”ç¤ºã€‚ä¸€å¹´åŽï¼ŒPolaroid Land Camera Model 95 æ­£å¼å‘å”®ï¼Œå®šä»·89.75ç¾Žå…ƒã€‚ç¬¬ä¸€å¤©å°±å–å…‰äº†å…¨éƒ¨åº“å­˜ã€‚

Model 95 çš„è®¾è®¡å……æ»¡äº†å·¥ä¸šæ—¶ä»£çš„è´¨æ„Ÿï¼šæ£•è‰²çš®é©æœºèº«ã€æŠ˜å å¼é‡‘å±žæ”¯æž¶ã€ç²¾å¯†çš„å…‰å­¦é•œå¤´ã€‚å®ƒä¸è¿½æ±‚å°å·§â€”â€”å±•å¼€åŽåƒä¸€åªå‡†å¤‡èµ·é£žçš„é¸Ÿï¼Œæ”¶èµ·æ¥åƒä¸€æœ¬åŽšé‡çš„ä¹¦ã€‚

è¿™å°ç›¸æœºçš„é©å‘½æ€§ä¸åœ¨äºŽå¤–å½¢ï¼Œè€Œåœ¨äºŽå®ƒèƒŒåŽçš„å“²å­¦ï¼š**æ‘„å½±ä¸åº”è¯¥æ˜¯ç­‰å¾…å’Œå»¶è¿Ÿçš„ä½“éªŒï¼Œå®ƒåº”è¯¥æ˜¯å³æ—¶çš„ã€äº²å¯†çš„ã€å±žäºŽå½“ä¸‹çš„ã€‚**`,
    
    legacy: `â— å³æ—¶æ‘„å½±æ–‡åŒ–ï¼šPolaroid ä¸ä»…æ˜¯ç›¸æœºï¼Œæ›´æ˜¯ä¸€ç§æ–‡åŒ–ç¬¦å·ï¼Œä»Ž Andy Warhol åˆ°æ—¥å¸¸å®¶åº­ï¼Œäººäººéƒ½ç”¨ Polaroid è®°å½•ç”Ÿæ´»
â— å½±å“ Steve Jobsï¼šJobs å¤šæ¬¡å…¬å¼€è¡¨ç¤º Edwin Land æ˜¯ä»–æœ€å´‡æ‹œçš„äººï¼ŒPolaroid çš„"ç§‘æŠ€+äººæ–‡"ç†å¿µç›´æŽ¥å½±å“äº† Apple çš„äº§å“å“²å­¦
â— è®¾è®¡èŒƒå¼ï¼šModel 95 ç¡®ç«‹äº†"æŠ˜å å¼"ç›¸æœºçš„ç»å…¸è®¾è®¡è¯­è¨€ï¼Œå½±å“äº†æ­¤åŽæ•°åå¹´çš„ç›¸æœºå·¥ä¸šè®¾è®¡
â— å¤å…´æµªæ½®ï¼š2008å¹´ Polaroid åœäº§èƒ¶ç‰‡åŽï¼Œ"The Impossible Project"ï¼ˆçŽ° Polaroid Originalsï¼‰è®©å³æ—¶æ‘„å½±é‡èŽ·æ–°ç”Ÿ`,
    
    significance: `Model 95 è¯æ˜Žäº†ä¸€ä»¶äº‹ï¼š**æœ€ä¼Ÿå¤§çš„è®¾è®¡ä¸æ˜¯è®©æŠ€æœ¯æ›´å¤æ‚ï¼Œè€Œæ˜¯è®©å¤æ‚çš„æŠ€æœ¯æ¶ˆå¤±ã€‚**

åœ¨ Land ä¹‹å‰ï¼Œæ‘„å½±æ˜¯ä¸€ä¸ªéœ€è¦æš—æˆ¿ã€åŒ–å­¦è¯å‰‚å’Œè€å¿ƒç­‰å¾…çš„ä¸“ä¸šæ´»åŠ¨ã€‚Model 95 æŠŠè¿™ä¸€åˆ‡æµ“ç¼©æˆäº†"æŒ‰ä¸‹å¿«é—¨ï¼Œç­‰60ç§’"ã€‚

è¿™å’ŒåŽæ¥ iPhone åšçš„äº‹æƒ…ä¸€æ¨¡ä¸€æ ·â€”â€”æŠŠç”µè¯ã€ç›¸æœºã€ç”µè„‘ã€éŸ³ä¹æ’­æ”¾å™¨åˆæˆä¸€ä¸ªä¸œè¥¿ï¼Œè®©æŠ€æœ¯çš„å¤æ‚æ€§åœ¨ç”¨æˆ·é¢å‰å®Œå…¨æ¶ˆå¤±ã€‚

éš¾æ€ª Steve Jobs è¯´ï¼š"Edwin Land æ˜¯ä¸€ä¸ªå›½å®ã€‚ä»–æ˜¯ç§‘å­¦å’Œäººæ–‡çš„äº¤å‰è·¯å£ä¸Šæœ€ä¼Ÿå¤§çš„åˆ›æ–°è€…ä¹‹ä¸€ã€‚"

**ä¸€ä¸ªå¥½é—®é¢˜ï¼Œå¯ä»¥æ”¹å˜ä¸–ç•Œã€‚"ä¸ºä»€ä¹ˆä¸èƒ½é©¬ä¸Šçœ‹åˆ°ç…§ç‰‡ï¼Ÿ"â€”â€”è¿™ä¸ª3å²å¥³å­©çš„é—®é¢˜ï¼Œä»·å€¼æ•°åäº¿ç¾Žå…ƒã€‚**`,

    dateConnection_en: 'On February 21, 1947, Edwin Land publicly demonstrated instant photography for the first time at the Optical Society of America meeting in New York. The camera went on sale a year later and changed the history of photography.',
    
    designerBio_en: `Edwin Herbert Land (1909-1991), American scientist, inventor, and founder of the Polaroid Corporation.

A Harvard dropout, he began researching polarized light at age 17. He founded Polaroid in 1937, initially producing polarizing filters and sunglasses.

Legend has it that in 1943, his 3-year-old daughter asked: "Why can't I see the picture right away?" This question inspired him to invent instant photography. During a single hour-long walk, he conceived the entire chemical and optical system.

Land held 535 patents in his lifetime, second only to Edison. He was not just an inventor but someone who perfectly fused science, design, and commerce. Steve Jobs idolized him, calling him "a national treasure."`,
    
    story_en: `On February 21, 1947, Edwin Land stood at the podium of the Optical Society of America, took a photograph.

60 seconds later, he pulled a fully developed print from the camera.

The audience was stunned.

This was the first public demonstration of "instant photography" in human history. A year later, the Polaroid Land Camera Model 95 went on sale for $89.75. It sold out completely on the first day.

The Model 95's design was full of industrial-era character: brown leather body, folding metal struts, precision optical lens. It didn't strive for compactnessâ€”unfolded, it looked like a bird ready to take flight; closed, like a hefty book.

The revolution of this camera wasn't in its form, but in the philosophy behind it: **Photography should not be an experience of waiting and delay. It should be instant, intimate, and belong to the present moment.**`,
    
    legacy_en: `â— Instant photography culture: Polaroid became more than a cameraâ€”a cultural icon, from Andy Warhol to everyday families, everyone used Polaroid to capture life
â— Influenced Steve Jobs: Jobs publicly stated multiple times that Edwin Land was his greatest hero; Polaroid's "technology + humanities" philosophy directly influenced Apple's product design
â— Design paradigm: Model 95 established the classic "folding" camera design language, influencing decades of camera industrial design
â— Revival: After Polaroid discontinued film in 2008, "The Impossible Project" (now Polaroid Originals) brought instant photography back to life`,
    
    significance_en: `Model 95 proved one thing: **The greatest design doesn't make technology more complexâ€”it makes complex technology disappear.**

Before Land, photography was a professional activity requiring darkrooms, chemicals, and patient waiting. Model 95 condensed all of this into "press the shutter, wait 60 seconds."

This is exactly what the iPhone did laterâ€”combining phone, camera, computer, and music player into one device, making technological complexity completely invisible to the user.

No wonder Steve Jobs said: "Edwin Land was a national treasure. He was one of the greatest innovators at the intersection of science and the humanities."

**A good question can change the world. "Why can't I see the picture right away?"â€”that 3-year-old girl's question was worth billions of dollars.**`
  },
  {
    id: '18',
    date: '2026-02-22',
    imageUrl: '/the-daily-object/images/gill-sans-typography.jpg',
    fullImageUrl: '/the-daily-object/images/full/gill-sans-typography.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/gill-sans-typography.jpg',
    title: 'Gill Sans å­—ä½“',
    title_en: 'Gill Sans Typeface',
    subtitle: 'Eric Gill, 1926â€“1928',
    category: 'graphic',
    designer: 'Eric Gill',
    year: '1928',
    
    dateConnection: '1882å¹´2æœˆ22æ—¥ï¼ŒEric Gill å‡ºç”ŸäºŽè‹±æ ¼å…°å¸ƒèŽ±é¡¿ã€‚ä»–æ˜¯20ä¸–çºªæœ€é‡è¦çš„å­—ä½“è®¾è®¡å¸ˆä¹‹ä¸€ï¼Œè®¾è®¡çš„ Gill Sans æˆä¸ºè‹±å›½çš„"å›½å®¶å­—ä½“"â€”â€”ä»Žä¼¦æ•¦åœ°é“æ ‡è¯†åˆ° BBC å“ç‰Œï¼Œä»Žä¼é¹…å›¾ä¹¦åˆ°è‹±å›½é“è·¯ï¼Œè¿™æ¬¾å­—ä½“å®šä¹‰äº†è‹±å›½çš„è§†è§‰èº«ä»½ã€‚',
    
    designerBio: `Eric Gillï¼ˆ1882-1940ï¼‰ï¼Œè‹±å›½å­—ä½“è®¾è®¡å¸ˆã€çŸ³åˆ»è‰ºæœ¯å®¶ã€é›•å¡‘å®¶ã€ç‰ˆç”»å®¶ã€‚

ä»–å‡ºèº«äºŽç‰§å¸ˆå®¶åº­ï¼Œ14å²å¼€å§‹åœ¨å»ºç­‘äº‹åŠ¡æ‰€åšå­¦å¾’ï¼ŒåŽæ¥å¸ˆä»Ž Edward Johnstonâ€”â€”ä¼¦æ•¦åœ°é“æ ‡å¿—æ€§å­—ä½“ Johnston Sans çš„è®¾è®¡è€…ã€‚è¿™æ®µå¸ˆæ‰¿å…³ç³»å†³å®šäº†è‹±å›½å­—ä½“è®¾è®¡çš„èµ°å‘ã€‚

Gill æ˜¯ä¸€ä¸ªå¤šé¢æ‰‹ï¼šä»–ä¸ºå¨æ–¯æ•æ–¯ç‰¹å¤§æ•™å ‚é›•åˆ»è¿‡æµ®é›•ï¼Œä¸ºBBCå¹¿æ’­å¤§åŽ¦åˆ›ä½œè¿‡å¤–å¢™é›•å¡‘ï¼ˆProspero and Arielï¼‰ï¼Œä¸ºGolden Cockerel Press è®¾è®¡è¿‡æ•´å¥—å­—ä½“å’Œæ’ç”»ã€‚

**"å­—æ¯æ˜¯çº¯ç²¹å½¢å¼çš„ä¸œè¥¿â€”â€”å®ƒä»¬çš„å½¢çŠ¶æœ¬èº«å°±æ˜¯ç¾Žã€‚"**

1926å¹´ï¼ŒMonotype å…¬å¸å§”æ‰˜ä»–è®¾è®¡ä¸€æ¬¾æ–°çš„æ— è¡¬çº¿å­—ä½“ã€‚ä»–ä»¥è€å¸ˆ Johnston çš„å­—ä½“ä¸ºèµ·ç‚¹ï¼Œä½†èµ‹äºˆäº†å®ƒæ›´äººæ–‡ä¸»ä¹‰çš„æ°”è´¨â€”â€”çº¿æ¡æ›´æµç•…ã€æ¯”ä¾‹æ›´å’Œè°ã€ç»†èŠ‚æ›´ç²¾è‡´ã€‚è¿™å°±æ˜¯ Gill Sansã€‚`,
    
    story: `Gill Sans çš„æ•…äº‹ï¼Œæ˜¯ä¸€æ¬¾å­—ä½“å¦‚ä½•æˆä¸ºä¸€ä¸ªå›½å®¶è§†è§‰èº«ä»½çš„æ•…äº‹ã€‚

1928å¹´ï¼ŒGill Sans ç”± Monotype å…¬å¸æ­£å¼å‘å¸ƒã€‚å®ƒçš„è®¾è®¡åŸºäºŽè€å¸ˆ Edward Johnston ä¸ºä¼¦æ•¦åœ°é“è®¾è®¡çš„ Johnston Sansï¼ˆ1916å¹´ï¼‰ï¼Œä½† Gill åšäº†å…³é”®çš„æ”¹è¿›ï¼š

**Johnston Sans æ˜¯ä¸¥æ ¼å‡ ä½•çš„**â€”â€”åƒç”¨åœ†è§„å’Œç›´å°ºç”»å‡ºæ¥çš„ã€‚Gill Sans åˆ™èžå…¥äº†æ‰‹å†™çš„æ¸©åº¦â€”â€”å­—æ¯"a"æœ‰ä¸€ä¸ªå¾®å¦™çš„æ›²çº¿å˜åŒ–ï¼Œ"g"çš„ä¸‹åŠéƒ¨åˆ†æœ‰ä¸€ç§æ‰‹å·¥çš„éŸµå¾‹æ„Ÿã€‚å®ƒåœ¨ç†æ€§å’Œæ„Ÿæ€§ä¹‹é—´æ‰¾åˆ°äº†å®Œç¾Žçš„å¹³è¡¡ã€‚

1929å¹´ï¼Œè‹±å›½é“è·¯ï¼ˆLNERï¼‰çŽ‡å…ˆé‡‡ç”¨ Gill Sans ä½œä¸ºå®˜æ–¹å­—ä½“ï¼Œç”¨äºŽæ—¶åˆ»è¡¨ã€æµ·æŠ¥å’Œæ ‡è¯†ã€‚ç„¶åŽæ˜¯ä¼é¹…å›¾ä¹¦â€”â€”Allen Lane åœ¨1935å¹´åˆ›ç«‹ä¼é¹…æ—¶ï¼Œé€‰æ‹© Gill Sans ä½œä¸ºå°é¢å­—ä½“ï¼Œè®©è¿™æ¬¾å­—ä½“å‡ºçŽ°åœ¨äº†æ¯ä¸€ä¸ªè‹±å›½ä¹¦åº—å’Œç«è½¦ç«™ã€‚

BBC åœ¨1997å¹´å°† Gill Sans å®šä¸ºå®˜æ–¹å­—ä½“ã€‚è‹±å›½æ•™å ‚ã€æˆ˜äº‰çºªå¿µç¢‘ã€æ”¿åºœå…¬å‘Šâ€”â€”åˆ°å¤„éƒ½èƒ½çœ‹åˆ° Gill Sansã€‚

**ä¸€æ¬¾å­—ä½“ï¼Œå®šä¹‰äº†ä¸€ä¸ªå›½å®¶çš„è§†è§‰æ€§æ ¼ï¼šç†æ€§ä½†ä¸å†·æ¼ ï¼Œä¼˜é›…ä½†ä¸å‚²æ…¢ï¼ŒçŽ°ä»£ä½†ä¸å¿˜ä¼ ç»Ÿã€‚** è¿™æ­£æ˜¯è‹±å›½äººç†æƒ³ä¸­çš„è‡ªå·±ã€‚`,

    legacy: `Gill Sans çš„å½±å“éåŠè®¾è®¡çš„æ¯ä¸€ä¸ªè§’è½ï¼š

**è‹±å›½è§†è§‰èº«ä»½**ï¼šå®ƒæ˜¯è‹±å›½è®¾è®¡çš„ä»£åè¯ï¼Œå°±åƒ Helvetica ä¹‹äºŽç‘žå£«ã€Futura ä¹‹äºŽå¾·å›½

**äººæ–‡ä¸»ä¹‰æ— è¡¬çº¿**ï¼šå®ƒå¼€åˆ›äº†"äººæ–‡ä¸»ä¹‰æ— è¡¬çº¿å­—ä½“"ï¼ˆHumanist Sans-serifï¼‰è¿™ä¸€åˆ†ç±»ï¼Œå½±å“äº† Frutigerã€Myriadã€Optima ç­‰åŽæ¥çš„ç»å…¸å­—ä½“

**ä¼é¹…å›¾ä¹¦é©å‘½**ï¼šGill Sans + ä¸‰æ®µå¼å°é¢è®¾è®¡ = çŽ°ä»£å¹³è£…ä¹¦çš„è¯žç”Ÿï¼Œè®©ä¼˜è´¨æ–‡å­¦ä»Žç²¾è£…ä¹¦æž¶èµ°è¿›äº†æ¯ä¸ªäººçš„å£è¢‹

**å“ç‰Œå­—ä½“çš„å…ˆé©±**ï¼šGill Sans æ˜¯æœ€æ—©è¢«æ•´ä¸ªä¼ä¸šç³»ç»Ÿæ€§é‡‡ç”¨çš„å­—ä½“ä¹‹ä¸€ï¼Œå¼€åˆ›äº†"å“ç‰Œå­—ä½“"ï¼ˆbrand typefaceï¼‰çš„æ¦‚å¿µ

**å­—ä½“è®¾è®¡æ•™è‚²**ï¼šå®ƒæ˜¯å­—ä½“è®¾è®¡è¯¾ç¨‹ä¸­çš„å¿…è®²æ¡ˆä¾‹ï¼Œå±•ç¤ºäº†å¦‚ä½•åœ¨å‡ ä½•ç²¾ç¡®æ€§å’Œäººæ–‡æ¸©åº¦ä¹‹é—´æ‰¾å¹³è¡¡`,
    
    significance: `Gill Sans å›žç­”äº†ä¸€ä¸ªæ ¹æœ¬æ€§çš„è®¾è®¡é—®é¢˜ï¼š**ç†æ€§å’Œäººæƒ…å‘³å¯ä»¥å…±å­˜å—ï¼Ÿ**

20ä¸–çºªåˆçš„æ¬§æ´²è®¾è®¡ç•Œåœ¨ä¸¤æžä¹‹é—´æ‹‰æ‰¯ï¼šä¸€è¾¹æ˜¯åŒ…è±ªæ–¯å’Œæž„æˆä¸»ä¹‰çš„å†°å†·å‡ ä½•ï¼Œä¸€è¾¹æ˜¯å·¥è‰ºç¾Žæœ¯è¿åŠ¨çš„æ¸©æš–æ‰‹å·¥ã€‚Gill Sans æ‰¾åˆ°äº†ç¬¬ä¸‰æ¡è·¯â€”â€”å®ƒæœ‰å‡ ä½•æ— è¡¬çº¿å­—ä½“çš„æ¸…æ™°å’ŒçŽ°ä»£æ„Ÿï¼Œä½†ä¿ç•™äº†æ‰‹å†™å­—ä½“çš„æ¸©åº¦å’ŒèŠ‚å¥ã€‚

è¿™ä¸ªå¹³è¡¡ç‚¹è‡³ä»Šä»æ˜¯è®¾è®¡å¸ˆè¿½æ±‚çš„åœ£æ¯ã€‚Apple çš„ San Francisco å­—ä½“ã€Google çš„ Robotoã€IBM çš„ Plexâ€”â€”æ¯ä¸€æ¬¾å½“ä»£å“ç‰Œå­—ä½“éƒ½åœ¨è¯•å›¾æ‰¾åˆ° Gill Sans 90å¤šå¹´å‰å°±æ‰¾åˆ°çš„é‚£ä¸ªå¹³è¡¡ã€‚

**å¥½çš„å­—ä½“è®¾è®¡ä¸æ˜¯è®©ä½ æ³¨æ„åˆ°å­—ä½“ï¼Œè€Œæ˜¯è®©ä½ å¿˜è®°å­—ä½“çš„å­˜åœ¨ï¼Œåªçœ‹åˆ°æ–‡å­—æœ¬èº«è¦è¡¨è¾¾çš„æ„æ€ã€‚Gill Sans åšåˆ°äº†ã€‚**`,

    dateConnection_en: 'On February 22, 1882, Eric Gill was born in Brighton, England. He was one of the 20th century\'s most important typeface designers. His Gill Sans became Britain\'s "national typeface" â€” from London Underground signage to the BBC brand, from Penguin Books to British Railways, this typeface defined Britain\'s visual identity.',
    
    designerBio_en: `Eric Gill (1882-1940), British typeface designer, stone carver, sculptor, and printmaker.

Born into a clergyman's family, he began an apprenticeship at an architectural firm at 14, later studying under Edward Johnston â€” the designer of Johnston Sans, the iconic London Underground typeface. This lineage shaped the course of British type design.

Gill was a Renaissance man: he carved reliefs for Westminster Cathedral, created exterior sculptures for BBC Broadcasting House (Prospero and Ariel), and designed complete typefaces and illustrations for the Golden Cockerel Press.

**"Letters are pure form â€” their shapes are beautiful in themselves."**

In 1926, the Monotype Corporation commissioned him to design a new sans-serif typeface. Starting from his teacher Johnston's typeface, he gave it a more humanist character â€” smoother lines, more harmonious proportions, more refined details. This became Gill Sans.`,
    
    story_en: `The story of Gill Sans is the story of how a typeface became a nation's visual identity.

In 1928, Gill Sans was officially released by the Monotype Corporation. Its design was based on Edward Johnston's Johnston Sans (1916), designed for the London Underground, but Gill made crucial refinements:

**Johnston Sans was strictly geometric** â€” as if drawn with compass and ruler. Gill Sans incorporated the warmth of handwriting â€” the letter "a" has subtle curve variations, the lower half of "g" carries a handcrafted rhythm. It found a perfect balance between rationality and sensibility.

In 1929, the London and North Eastern Railway (LNER) became the first to adopt Gill Sans as its official typeface for timetables, posters, and signage. Then came Penguin Books â€” when Allen Lane founded Penguin in 1935, he chose Gill Sans for the covers, placing the typeface in every British bookshop and railway station.

The BBC adopted Gill Sans as its official typeface in 1997. British churches, war memorials, government notices â€” Gill Sans appeared everywhere.

**One typeface defined a nation's visual character: rational but not cold, elegant but not arrogant, modern yet respectful of tradition.** This is exactly how the British idealize themselves.`,

    legacy_en: `Gill Sans's influence pervades every corner of design:

**British visual identity**: It is synonymous with British design, just as Helvetica is with Switzerland and Futura with Germany

**Humanist sans-serif**: It pioneered the "Humanist Sans-serif" category, influencing later classics like Frutiger, Myriad, and Optima

**Penguin Books revolution**: Gill Sans + the tripartite cover design = the birth of the modern paperback, bringing quality literature from hardback shelves into everyone's pocket

**Brand typeface pioneer**: Gill Sans was among the first typefaces systematically adopted across entire corporate identities, pioneering the concept of the "brand typeface"

**Type design education**: It is a mandatory case study in typography courses, demonstrating how to balance geometric precision with human warmth`,
    
    significance_en: `Gill Sans answered a fundamental design question: **can rationality and humanity coexist?**

The early 20th-century European design world was torn between extremes: on one side, the cold geometry of the Bauhaus and Constructivism; on the other, the warm handcraft of the Arts and Crafts movement. Gill Sans found a third way â€” it has the clarity and modernity of a geometric sans-serif, but retains the warmth and rhythm of handwritten letterforms.

This balance remains the holy grail designers pursue today. Apple's San Francisco, Google's Roboto, IBM's Plex â€” every contemporary brand typeface is trying to find the equilibrium that Gill Sans discovered over 90 years ago.

**Good type design doesn't make you notice the typeface â€” it makes you forget the typeface exists and see only the meaning the words express. Gill Sans achieved exactly that.**`
  },
  {
    id: '19',
    date: '2026-02-23',
    imageUrl: '/the-daily-object/images/gutenberg-bible.jpg',
    fullImageUrl: '/the-daily-object/images/full/gutenberg-bible.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/gutenberg-bible.jpg',
    title: 'Gutenberg Bible',
    subtitle: 'Johannes Gutenberg, c. 1455',
    category: 'graphic',
    designer: 'Johannes Gutenberg',
    year: 'c. 1455',
    
    dateConnection: '1455å¹´2æœˆ23æ—¥è¢«è®¤ä¸ºæ˜¯å¤è…¾å ¡åœ£ç»çš„å‡ºç‰ˆæ—¥æœŸâ€”â€”è¥¿æ–¹ä¸–ç•Œç¬¬ä¸€æœ¬ç”¨æ´»å­—å°åˆ·æœ¯å°åˆ¶çš„ä¹¦ç±ã€‚è¿™ä¸€å¤©æ ‡å¿—ç€äººç±»ä¼ æ’­å²ä¸Šæœ€æ·±åˆ»çš„é©å‘½ï¼šçŸ¥è¯†ä¸å†æ˜¯æ‰‹æŠ„çš„å¥¢ä¾ˆå“ï¼Œè€Œæˆä¸ºå¯ä»¥æ‰¹é‡ç”Ÿäº§çš„æ°‘ä¸»åŒ–è½½ä½“ã€‚',
    
    designerBio: `çº¦ç¿°å†…æ–¯Â·å¤è…¾å ¡ï¼ˆJohannes Gutenbergï¼Œçº¦1400-1468ï¼‰ï¼Œå‡ºç”ŸäºŽå¾·å›½ç¾Žå› èŒ¨ï¼Œé‡‘åŒ å‡ºèº«ã€‚ä»–èŠ±äº†è¿‘20å¹´æ—¶é—´ï¼Œå°†é‡‘å±žé“¸é€ ã€æ²¹å¢¨è°ƒé…ã€åŽ‹æ¦¨æŠ€æœ¯èžåˆæˆä¸€å¥—å®Œæ•´çš„æ´»å­—å°åˆ·ç³»ç»Ÿã€‚

ä»–çš„çªç ´ä¸æ˜¯"å‘æ˜Žæ´»å­—"â€”â€”ä¸­å›½çš„æ¯•æ˜‡åœ¨11ä¸–çºªå°±å‘æ˜Žäº†æ³¥æ´»å­—ã€‚å¤è…¾å ¡çš„å¤©æ‰åœ¨äºŽ**ç³»ç»Ÿè®¾è®¡**ï¼šä»–å‘æ˜Žäº†æ‰‹æŒé“¸å­—æ¨¡å…·ï¼ˆhand moldï¼‰ï¼Œå¯ä»¥å¿«é€Ÿã€ç²¾ç¡®åœ°æ‰¹é‡é“¸é€ é‡‘å±žæ´»å­—ï¼›ä»–è°ƒé…å‡ºæ²¹åŸºå¢¨æ°´æ›¿ä»£æ°´åŸºå¢¨æ°´ï¼Œä½¿å­—è¿¹æ›´æ¸…æ™°æŒä¹…ï¼›ä»–æ”¹é€ äº†è‘¡è„é…’åŽ‹æ¦¨æœºï¼Œå˜æˆäº†å°åˆ·æœºã€‚

æ¯ä¸€é¡¹å•ç‹¬çœ‹éƒ½ä¸ç®—æƒŠå¤©åŠ¨åœ°ï¼Œä½†ç»„åˆåœ¨ä¸€èµ·ï¼Œå°±æˆäº†æ”¹å˜ä¸–ç•Œçš„ç³»ç»Ÿã€‚è¿™æ˜¯çœŸæ­£çš„**è®¾è®¡æ€ç»´**â€”â€”ä¸æ˜¯å‘æ˜Žä¸€ä¸ªé›¶ä»¶ï¼Œè€Œæ˜¯è®¾è®¡ä¸€æ•´å¥—å·¥ä½œæµç¨‹ã€‚`,
    
    story: `å¤è…¾å ¡åœ£ç»çš„å°åˆ¶èŠ±äº†å¤§çº¦ä¸¤å¹´ï¼ˆ1453-1455ï¼‰ã€‚180ä»½ï¼Œå…¶ä¸­çº¦135ä»½å°åœ¨çº¸ä¸Šï¼Œ45ä»½å°åœ¨æ›´æ˜‚è´µçš„ç¾Šçš®çº¸ä¸Šâ€”â€”æ¯ä»½ç¾Šçš®çº¸ç‰ˆéœ€è¦170å¼ å°ç‰›çš®ã€‚

ä½†çœŸæ­£è®©è®¾è®¡å¸ˆç€è¿·çš„ä¸æ˜¯äº§é‡ï¼Œè€Œæ˜¯**æŽ’ç‰ˆè´¨é‡**ã€‚å¤è…¾å ¡è¿½æ±‚çš„ç›®æ ‡æ˜¯ï¼šå°åˆ·å“å¿…é¡»å’Œæ‰‹æŠ„æœ¬ä¸€æ ·ç¾Žã€‚

ä»–è®¾è®¡äº†290ä¸ªä¸åŒçš„å­—ç¬¦â€”â€”è¿œè¶…26ä¸ªå­—æ¯ã€‚å› ä¸ºä¸­ä¸–çºªæ‰‹æŠ„æœ¬ä¸­æœ‰å¤§é‡çš„è¿žå­—ï¼ˆligatureï¼‰ã€ç¼©å†™ç¬¦å·å’Œå˜ä½“å­—å½¢ï¼Œå¤è…¾å ¡å…¨éƒ¨å¤åˆ»äº†ã€‚ä»–ç”šè‡³åœ¨åŒä¸€è¡Œä¸­å¾®è°ƒå­—æ¯é—´è·ï¼Œä½¿å³è¾¹è·å®Œç¾Žå¯¹é½ï¼ˆjustifiedï¼‰ï¼Œè¿™ç§ç²¾ç¡®åº¦ç›´åˆ°æ•°å­—æŽ’ç‰ˆæ—¶ä»£æ‰è¢«è¶…è¶Šã€‚

æ¯é¡µ42è¡Œï¼ŒåŒæ æŽ’åˆ—ã€‚é¡µé¢æ¯”ä¾‹æŽ¥è¿‘é»„é‡‘æ¯”ä¾‹ã€‚æ–‡å­—åŒºåŸŸä¸Žé¡µè¾¹è·çš„å…³ç³»éµå¾ªä¸­ä¸–çºªæŠ„æœ¬çš„ç»å…¸æž„å›¾æ³•åˆ™â€”â€”è¿™å¥—æ³•åˆ™åŽæ¥è¢«æ‰¬Â·å¥‡è‚–å°”å¾·ï¼ˆJan Tschicholdï¼‰åœ¨20ä¸–çºªé‡æ–°å‘çŽ°å¹¶å‘½åä¸º"èŒƒå¾·æ ¼æ‹‰å¤«å‡†åˆ™"ï¼ˆVan de Graaf canonï¼‰ã€‚

**ä¸€ä¸ªè®½åˆºçš„ç»“å±€**ï¼šå¤è…¾å ¡åœ¨åœ£ç»å®Œæˆå‰å°±å› ä¸ºå€ºåŠ¡çº çº·å¤±åŽ»äº†è‡ªå·±çš„å°åˆ·ä½œåŠã€‚æŠ•èµ„äººçº¦ç¿°Â·ç¦æ–¯ç‰¹ï¼ˆJohann Fustï¼‰é€šè¿‡è¯‰è®¼å¤ºèµ°äº†è®¾å¤‡ï¼Œå¹¶ä¸Žå¤è…¾å ¡çš„å­¦å¾’å½¼å¾—Â·èˆè´¹å°”ï¼ˆPeter SchÃ¶fferï¼‰ç»§ç»­ç»è¥ã€‚æ”¹å˜ä¸–ç•Œçš„äººï¼Œæ²¡æœ‰ä»Žä¸­èŽ·åˆ©ã€‚`,

    legacy: `å¤è…¾å ¡åœ£ç»çŽ°å­˜49æœ¬ï¼ˆå…¶ä¸­21æœ¬å®Œæ•´ï¼‰ï¼Œæ˜¯ä¸–ç•Œä¸Šæœ€çè´µçš„ä¹¦ç±ä¹‹ä¸€ã€‚2009å¹´è¢«è”åˆå›½æ•™ç§‘æ–‡ç»„ç»‡åˆ—å…¥ä¸–ç•Œè®°å¿†åå½•ã€‚

**å¯¹è®¾è®¡çš„å½±å“ï¼š**

**å­—ä½“è®¾è®¡çš„èµ·ç‚¹**ï¼šå¤è…¾å ¡çš„ Textura å“¥ç‰¹ä½“ç›´æŽ¥å‚¬ç”Ÿäº†åŽæ¥çš„å­—ä½“è®¾è®¡ä¼ ç»Ÿã€‚ä»Ž Garamond åˆ° Helveticaï¼Œæ‰€æœ‰è¥¿æ–¹å­—ä½“çš„æºå¤´éƒ½å¯ä»¥è¿½æº¯åˆ°è¿™é‡Œã€‚

**ç½‘æ ¼ç³»ç»Ÿçš„å…ˆé©±**ï¼šå¤è…¾å ¡åœ£ç»çš„42è¡ŒåŒæ ç‰ˆå¼ï¼Œæ˜¯æœ‰æ®å¯æŸ¥çš„æœ€æ—©çš„ç³»ç»ŸåŒ–æŽ’ç‰ˆç½‘æ ¼ä¹‹ä¸€ã€‚çº¦ç‘Ÿå¤«Â·ç©†å‹’-å¸ƒç½—å…‹æ›¼ï¼ˆJosef MÃ¼ller-Brockmannï¼‰åœ¨ã€Šç½‘æ ¼ç³»ç»Ÿã€‹ä¸­ä¸“é—¨æåˆ°äº†ä¸­ä¸–çºªæŠ„æœ¬çš„ç‰ˆå¼ä¼ ç»Ÿã€‚

**"çœ‹ä¸è§çš„è®¾è®¡"çš„å…¸èŒƒ**ï¼šå¤è…¾å ¡çš„æœ€é«˜è¿½æ±‚æ˜¯è®©å°åˆ·å“çœ‹èµ·æ¥åƒæ‰‹æŠ„æœ¬â€”â€”å¥½çš„è®¾è®¡ä¸å½°æ˜¾è‡ªå·±ï¼Œè€Œæ˜¯æœåŠ¡äºŽå†…å®¹ã€‚è¿™ä¸ªç†å¿µè´¯ç©¿äº†æ•´éƒ¨å¹³é¢è®¾è®¡å²ã€‚

å°åˆ·æœ¯åœ¨å¤è…¾å ¡ä¹‹åŽçš„50å¹´å†…ä¼ éæ•´ä¸ªæ¬§æ´²ã€‚åˆ°1500å¹´ï¼Œå·²ç»æœ‰è¶…è¿‡2000ä¸‡å†Œä¹¦è¢«å°åˆ·ã€‚è¿™ç›´æŽ¥æŽ¨åŠ¨äº†æ–‡è‰ºå¤å…´ã€å®—æ•™æ”¹é©å’Œç§‘å­¦é©å‘½ã€‚`,
    
    significance: `ä¸€æœ¬571å¹´å‰çš„ä¹¦ï¼Œè‡³ä»Šä»ç„¶æ˜¯æŽ’ç‰ˆè®¾è®¡çš„æ•™ç§‘ä¹¦ã€‚

**å¤è…¾å ¡åœ£ç»ä¸åªæ˜¯ä¸€æœ¬ä¹¦ï¼Œå®ƒæ˜¯äººç±»ç¬¬ä¸€ä¸ª"ç”¨æˆ·ç•Œé¢"ã€‚** åœ¨æ­¤ä¹‹å‰ï¼Œä¹¦æ˜¯ç»™ç²¾è‹±çœ‹çš„å¥¢ä¾ˆå“ï¼›åœ¨æ­¤ä¹‹åŽï¼Œä¹¦æ˜¯ç»™æ‰€æœ‰äººçœ‹çš„å·¥å…·ã€‚å¤è…¾å ¡é¢ä¸´çš„è®¾è®¡æŒ‘æˆ˜å’Œä»Šå¤©çš„ UI è®¾è®¡å¸ˆä¸€æ¨¡ä¸€æ ·ï¼šå¦‚ä½•è®©ä¿¡æ¯æ¸…æ™°ã€ç¾Žè§‚ã€é«˜æ•ˆåœ°åˆ°è¾¾ç”¨æˆ·ï¼Ÿ

42è¡Œã€åŒæ ã€é»„é‡‘æ¯”ä¾‹çš„é¡µé¢â€”â€”è¿™äº›ä¸æ˜¯å¶ç„¶çš„é€‰æ‹©ï¼Œè€Œæ˜¯æ·±æ€ç†Ÿè™‘çš„ä¿¡æ¯æž¶æž„ã€‚571å¹´åŽï¼Œæˆ‘ä»¬çš„å±å¹•ä¸Šä»ç„¶åœ¨ç”¨æ ã€ç½‘æ ¼ã€å­—ä½“å±‚çº§ã€‚

**æŠ€æœ¯æ”¹å˜äº†ï¼Œè®¾è®¡é—®é¢˜æ²¡æœ‰å˜ã€‚**`,

    dateConnection_en: 'February 23, 1455 is traditionally recognized as the publication date of the Gutenberg Bible â€” the first major book printed with movable metal type in the Western world. This date marks the most profound revolution in the history of human communication: knowledge ceased to be a hand-copied luxury and became a mass-producible, democratized medium.',
    
    designerBio_en: `Johannes Gutenberg (c. 1400â€“1468), born in Mainz, Germany, was a goldsmith by trade. He spent nearly two decades combining metalcasting, ink formulation, and press engineering into a complete movable type printing system.

His breakthrough wasn't "inventing movable type" â€” Bi Sheng in China had created ceramic movable type in the 11th century. Gutenberg's genius was in systems design: he invented the hand mold for rapid, precise mass-production of metal type; he formulated oil-based ink to replace water-based ink for sharper, more durable impressions; he adapted the wine press into a printing press.

No single component was revolutionary on its own, but together they became a world-changing system. This is true design thinking â€” not inventing one part, but designing an entire workflow.`,
    
    story_en: `The Gutenberg Bible took roughly two years to print (1453â€“1455). 180 copies were produced â€” approximately 135 on paper and 45 on the more expensive vellum, each requiring 170 calfskins.

But what truly fascinates designers isn't the output â€” it's the typographic quality. Gutenberg's goal was that printed pages must be as beautiful as manuscripts.

He designed 290 different characters â€” far beyond 26 letters. Medieval manuscripts used extensive ligatures, abbreviations, and variant glyphs, and Gutenberg replicated them all. He even micro-adjusted letter spacing within lines to achieve perfect right-margin justification â€” a level of precision not surpassed until the digital typesetting era.

Each page has 42 lines in two columns. The page proportions approximate the golden ratio. The relationship between text area and margins follows the classic composition rules of medieval codices â€” rules later rediscovered and named the "Van de Graaf canon" by Jan Tschichold in the 20th century.

A cruel irony: Gutenberg lost his own printing workshop to a debt dispute before the Bible was even finished. Investor Johann Fust sued and seized the equipment, continuing the business with Gutenberg's apprentice Peter SchÃ¶ffer. The man who changed the world never profited from it.`,
    
    legacy_en: `49 copies of the Gutenberg Bible survive today (21 complete), making it one of the world's most precious books. It was inscribed in the UNESCO Memory of the World Register in 2009.

Gutenberg's Textura blackletter directly spawned the Western typeface design tradition. From Garamond to Helvetica, every Western typeface traces its lineage here.

The 42-line, two-column layout is one of the earliest documented systematic typographic grids. Josef MÃ¼ller-Brockmann specifically referenced medieval manuscript layout traditions in his seminal "Grid Systems."

It exemplifies "invisible design" â€” Gutenberg's highest aspiration was making printed pages look like manuscripts. Good design doesn't announce itself; it serves the content. This principle runs through the entire history of graphic design.

Within 50 years of Gutenberg, printing had spread across all of Europe. By 1500, over 20 million books had been printed, directly fueling the Renaissance, the Reformation, and the Scientific Revolution.`,
    
    significance_en: `A book from 571 years ago that remains a textbook in typographic design.

The Gutenberg Bible isn't just a book â€” it's humanity's first "user interface." Before it, books were luxuries for elites; after it, books were tools for everyone. Gutenberg faced the same design challenge as today's UI designers: how to deliver information to users clearly, beautifully, and efficiently.

42 lines, two columns, golden-ratio pages â€” these weren't accidental choices but deliberate information architecture. 571 years later, our screens still use columns, grids, and typographic hierarchy.

The technology changed. The design problems didn't.`
  },

  {
    id: '20',
    date: '2026-02-24',
    imageUrl: '/the-daily-object/images/nike-air-force-1.jpg',
    fullImageUrl: '/the-daily-object/images/full/nike-air-force-1.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/nike-air-force-1.jpg',
    title: 'Nike Air Force 1',
    subtitle: 'Bruce Kilgore / Nike, 1982',
    category: 'industrial',
    designer: 'Bruce Kilgore',
    year: '1982',
    
    dateConnection: '1938å¹´2æœˆ24æ—¥ï¼ŒPhil Knight å‡ºç”ŸäºŽä¿„å‹’å†ˆå·žæ³¢ç‰¹å…°ã€‚1964å¹´ï¼Œä»–ä¸Žç”°å¾„æ•™ç»ƒ Bill Bowerman å…±åŒåˆ›ç«‹äº† Blue Ribbon Sportsï¼ŒåŽæ›´åä¸º Nikeã€‚Knight ä¸æ˜¯è®¾è®¡å¸ˆï¼Œä½†ä»–å»ºç«‹äº†ä¸€å®¶ä»¥è®¾è®¡ä¸ºæ ¸å¿ƒç«žäº‰åŠ›çš„å…¬å¸â€”â€”ä»Ž Carolyn Davidson çš„ Swoosh æ ‡å¿—åˆ° Tinker Hatfield çš„ Air Jordan ç³»åˆ—ï¼ŒNike è¯æ˜Žäº†è¿åŠ¨éž‹å¯ä»¥æ˜¯å·¥ä¸šè®¾è®¡çš„æœ€é«˜è¡¨è¾¾ã€‚',
    
    designerBio: `Bruce Kilgore æ˜¯ Nike Air Force 1 çš„è®¾è®¡å¸ˆï¼Œä¹Ÿæ˜¯å°† Nike Air æ°”åž«æŠ€æœ¯é¦–æ¬¡å¼•å…¥ç¯®çƒéž‹çš„äººã€‚ä»–1982å¹´çš„è®¾è®¡å½»åº•æ”¹å†™äº†è¿åŠ¨éž‹çš„å®šä¹‰ã€‚

ä½† Nike çš„è®¾è®¡åŸºå› è¦è¿½æº¯åˆ°æ›´æ—©ã€‚è”åˆåˆ›å§‹äºº Bill Bowerman æ˜¯ä¸€ä¸ªç—´è¿·äºŽè·‘éž‹çš„ç”°å¾„æ•™ç»ƒï¼Œä»–ç”¨å¦»å­çš„åŽå¤«é¥¼æœºæµ‡é“¸æ©¡èƒ¶ï¼Œå‘æ˜Žäº†ä¼ å¥‡çš„åŽå¤«åº•ï¼ˆWaffle Soleï¼‰â€”â€”è¿™ä¸ªæ•…äº‹æˆäº†è®¾è®¡åˆ›æ–°çš„ç»å…¸æ¡ˆä¾‹ï¼šæœ€å¥½çš„è®¾è®¡çµæ„Ÿå¾€å¾€æ¥è‡ªæœ€æ„æƒ³ä¸åˆ°çš„åœ°æ–¹ã€‚

1971å¹´ï¼Œå¹³é¢è®¾è®¡ä¸“ä¸šå­¦ç”Ÿ Carolyn Davidson ä»¥35ç¾Žå…ƒçš„ä»·æ ¼è®¾è®¡äº† Swoosh æ ‡å¿—ã€‚Phil Knight å½“æ—¶è¯´"æˆ‘ä¸å–œæ¬¢å®ƒï¼Œä½†ä¹Ÿè®¸ä¼šæ…¢æ…¢ä¹ æƒ¯ã€‚"è¿™ä¸ª35ç¾Žå…ƒçš„è®¾è®¡åŽæ¥æˆä¸ºä¸–ç•Œä¸Šæœ€æœ‰è¾¨è¯†åº¦çš„å•†æ ‡ä¹‹ä¸€ã€‚`,
    
    story: `Air Force 1 è¯žç”ŸäºŽ1982å¹´ï¼Œæ˜¯ç¬¬ä¸€åŒæ­è½½ Nike Air æ°”åž«çš„ç¯®çƒéž‹ã€‚Bruce Kilgore çš„è®¾è®¡çªç ´ä¸åªæ˜¯æŠ€æœ¯å±‚é¢â€”â€”ä»–é‡æ–°å®šä¹‰äº†ä¸€åŒéž‹å¯ä»¥æ˜¯ä»€ä¹ˆã€‚

åœ†å½¢çš„å¤–åº•è®¾è®¡çµæ„Ÿæ¥è‡ªå¤ç½—é©¬å»ºç­‘çš„æ‹±é—¨ç»“æž„ï¼Œå°†åŠ›å­¦åŽŸç†åº”ç”¨åˆ°éž‹åº•ï¼Œè®©ç©¿ç€è€…å¯ä»¥æ›´çµæ´»åœ°åšå‡ºå¿«é€Ÿè½¬èº«åŠ¨ä½œã€‚éž‹é¢çš„ç®€æ´çº¿æ¡åœ¨å½“æ—¶çš„ç¯®çƒéž‹ä¸­ç‹¬æ ‘ä¸€å¸œâ€”â€”é‚£ä¸ªå¹´ä»£çš„çƒéž‹æ™®éè¿½æ±‚å¤æ‚çš„ç»“æž„å’Œå¤¸å¼ çš„æ”¯æ’‘ï¼ŒKilgore å´é€‰æ‹©äº†å…‹åˆ¶ä¸Žä¼˜é›…ã€‚

Air Force 1 æœ€åˆåªç”Ÿäº§äº†ä¸€å¹´å°±åœäº§äº†ã€‚ä½†å®ƒåœ¨è¡—å¤´æ–‡åŒ–ä¸­èŽ·å¾—äº†ç¬¬äºŒæ¬¡ç”Ÿå‘½ã€‚1986å¹´ï¼Œå·´å°”çš„æ‘©çš„ä¸‰å®¶è¿åŠ¨éž‹åº—è¯´æœ Nike é‡æ–°ç”Ÿäº§è¿™æ¬¾éž‹â€”â€”è¿™æ˜¯ Nike åŽ†å²ä¸Šç¬¬ä¸€æ¬¡"å¤åˆ»"ï¼ˆRetroï¼‰ã€‚è¿™ä¸ªå†³å®šå¼€åˆ›äº†çƒéž‹æ–‡åŒ–çš„ä¸€ä¸ªå…¨æ–°èŒƒå¼ï¼šä¸€åŒè¿åŠ¨éž‹å¯ä»¥è¶…è¶ŠåŠŸèƒ½ï¼Œæˆä¸ºæ–‡åŒ–ç¬¦å·ã€‚

çº¯ç™½è‰²çš„ Air Force 1ï¼ˆ"White-on-White"ï¼‰æˆä¸ºå˜»å“ˆæ–‡åŒ–çš„æ ‡å¿—ã€‚Nelly åœ¨2002å¹´ä¸“é—¨ä¸ºå®ƒå†™äº†ä¸€é¦–æ­Œã€ŠAir Force Onesã€‹ã€‚ä»Žçº½çº¦çš„ç¯®çƒåœºåˆ°ä¸œäº¬çš„æ½®æµåº—ï¼Œä»Žè¯´å”±æ­Œæ‰‹åˆ°æ—¶è£…è®¾è®¡å¸ˆï¼ŒAF1 æˆäº†è·¨è¶Šé˜¶å±‚ã€ç§æ—å’Œåœ°åŸŸçš„é€šç”¨è¯­è¨€ã€‚

æˆªè‡³ä»Šå¤©ï¼ŒAir Force 1 å·²ç»æŽ¨å‡ºè¶…è¿‡2000ä¸ªé…è‰²ç‰ˆæœ¬ï¼Œç´¯è®¡é”€å”®è¶…è¿‡æ•°äº¿åŒã€‚å®ƒæ˜¯åŽ†å²ä¸Šæœ€ç•…é”€çš„è¿åŠ¨éž‹ï¼Œæ²¡æœ‰ä¹‹ä¸€ã€‚`,

    legacy: `Nike Air Force 1 å¯¹è®¾è®¡ç•Œçš„å½±å“è¿œè¶…è¿åŠ¨éž‹é¢†åŸŸï¼š

**çƒéž‹æ–‡åŒ–çš„èµ·ç‚¹**ï¼šAF1 çš„å¤åˆ»å¼€åˆ›äº†"ç»å…¸é‡ç”Ÿ"çš„å•†ä¸šæ¨¡å¼ï¼Œç›´æŽ¥å‚¬ç”Ÿäº†ä»Šå¤©ä»·å€¼æ•°åäº¿ç¾Žå…ƒçš„çƒéž‹è½¬å”®å¸‚åœºå’Œæ½®æµæ–‡åŒ–ã€‚Supremeã€Off-Whiteã€Travis Scottâ€”â€”æ‰€æœ‰çƒéž‹è”åçš„æºå¤´éƒ½å¯ä»¥è¿½æº¯åˆ° AF1ã€‚

**è®¾è®¡æ°‘ä¸»åŒ–**ï¼šNike åŽæ¥æŽ¨å‡ºäº† Nike By Youï¼ˆåŽŸ NikeIDï¼‰ï¼Œè®©æ¶ˆè´¹è€…å¯ä»¥å®šåˆ¶è‡ªå·±çš„ AF1 é…è‰²ã€‚è¿™æ¯”"å¤§è§„æ¨¡å®šåˆ¶"ï¼ˆMass Customizationï¼‰è¿™ä¸ªæ¦‚å¿µæµè¡Œæ—©äº†äºŒåå¹´ã€‚

**è·¨ç•Œè®¾è®¡çš„å…ˆé©±**ï¼šVirgil Abloh çš„ Off-White Ã— Nike "The Ten" ç³»åˆ—ï¼ˆ2017ï¼‰å°† AF1 è§£æž„é‡ç»„ï¼Œæ¨¡ç³Šäº†è¿åŠ¨éž‹ã€æ—¶è£…å’Œå½“ä»£è‰ºæœ¯çš„è¾¹ç•Œã€‚è¿™ç§è·¨ç•Œåˆä½œæ¨¡å¼å½±å“äº†æ•´ä¸ªæ¶ˆè´¹å“è®¾è®¡è¡Œä¸šã€‚

**Swoosh çš„è®¾è®¡ä¼ å¥‡**ï¼šCarolyn Davidson çš„35ç¾Žå…ƒ Swoosh åŽæ¥è¢«è®¤ä¸ºæ˜¯å²ä¸Šæœ€æˆåŠŸçš„æ ‡å¿—è®¾è®¡ä¹‹ä¸€ã€‚Nike åœ¨1983å¹´é€ç»™å¥¹ä¸€æžšé’»çŸ³ Swoosh æˆ’æŒ‡å’Œå…¬å¸è‚¡ç¥¨ä½œä¸ºè¡¥å¿â€”â€”æŒ‰ä»Šå¤©çš„å¸‚å€¼è®¡ç®—ï¼Œè¿™äº›è‚¡ç¥¨ä»·å€¼æ•°ç™¾ä¸‡ç¾Žå…ƒã€‚`,
    
    significance: `ä¸€åŒ1982å¹´çš„ç¯®çƒéž‹ï¼Œå¦‚ä½•æˆä¸º21ä¸–çºªæœ€å…·å½±å“åŠ›çš„å·¥ä¸šè®¾è®¡äº§å“ï¼Ÿ

ç­”æ¡ˆè—åœ¨ Phil Knight çš„åˆ›ä¸šå“²å­¦é‡Œï¼š**ä¸è¦å–äº§å“ï¼Œè¦è®²æ•…äº‹ã€‚** Nike ä»Žæ¥ä¸åªæ˜¯ä¸€å®¶è¿åŠ¨éž‹å…¬å¸â€”â€”å®ƒæ˜¯ä¸€å®¶è®¾è®¡å…¬å¸ï¼Œä¸€å®¶è¥é”€å…¬å¸ï¼Œä¸€å®¶æ–‡åŒ–å…¬å¸ã€‚Air Force 1 çš„æˆåŠŸè¯æ˜Žäº†ä¸€ä¸ªè®¾è®¡çœŸç†ï¼š**æœ€å¥½çš„äº§å“è®¾è®¡ä¸æ˜¯åœ¨è§£å†³é—®é¢˜ï¼Œè€Œæ˜¯åœ¨åˆ›é€ æ„ä¹‰ã€‚**

å½“ Bruce Kilgore ç”»å‡º AF1 çš„ç¬¬ä¸€å¼ è‰å›¾æ—¶ï¼Œä»–è®¾è®¡çš„æ˜¯ä¸€åŒç¯®çƒéž‹ã€‚å››åå¤šå¹´åŽï¼Œå…¨ä¸–ç•Œçš„äººç©¿ç€å®ƒä¸Šç­ã€çº¦ä¼šã€å‚åŠ æ—¶è£…å‘¨ã€‚ä¸€ä¸ªäº§å“ä»Ž"å·¥å…·"å˜æˆ"å›¾è…¾"ï¼Œè¿™å°±æ˜¯è®¾è®¡çš„ç»ˆæžåŠ›é‡ã€‚`,

    dateConnection_en: 'February 24, 1938 marks the birth of Phil Knight in Portland, Oregon. In 1964, he co-founded Blue Ribbon Sports with track coach Bill Bowerman, later renamed Nike. Knight wasn\'t a designer, but he built a company where design was the core competitive advantage â€” from Carolyn Davidson\'s Swoosh to Tinker Hatfield\'s Air Jordan line, Nike proved that athletic footwear could be the highest expression of industrial design.',
    
    designerBio_en: `Bruce Kilgore designed the Nike Air Force 1, becoming the first person to integrate Nike Air cushioning into a basketball shoe. His 1982 design fundamentally redefined what a sneaker could be.

But Nike's design DNA goes back further. Co-founder Bill Bowerman was a track coach obsessed with running shoes who poured rubber into his wife's waffle iron, inventing the legendary Waffle Sole â€” a story that became a classic case study in design innovation: the best design inspiration often comes from the most unexpected places.

In 1971, graphic design student Carolyn Davidson designed the Swoosh logo for $35. Phil Knight said at the time, "I don't love it, but maybe it will grow on me." That $35 design became one of the most recognizable trademarks in the world.`,
    
    story_en: `The Air Force 1 was born in 1982 as the first basketball shoe featuring Nike Air cushioning. Bruce Kilgore's breakthrough wasn't just technical â€” he redefined what a shoe could be.

The circular outsole design was inspired by Roman architectural arches, applying structural engineering principles to a shoe sole for enhanced pivot movement. The clean upper lines were unprecedented among basketball shoes of that era â€” when most court shoes pursued complex structures and exaggerated support, Kilgore chose restraint and elegance.

The Air Force 1 was initially produced for just one year before being discontinued. But it found a second life in street culture. In 1986, three Baltimore sneaker stores convinced Nike to reproduce the shoe â€” Nike's first-ever "Retro." This decision created an entirely new paradigm in sneaker culture: an athletic shoe could transcend function and become a cultural symbol.

The all-white Air Force 1 ("White-on-White") became an icon of hip-hop culture. Nelly wrote an entire song about it in 2002 â€” "Air Force Ones." From New York basketball courts to Tokyo boutiques, from rappers to fashion designers, the AF1 became a universal language that crossed class, race, and geography.

To date, the Air Force 1 has been released in over 2,000 colorways with cumulative sales in the hundreds of millions of pairs. It is the best-selling sneaker in history, bar none.`,
    
    legacy_en: `The Nike Air Force 1's influence extends far beyond athletic footwear:

**The birth of sneaker culture**: The AF1's retro release pioneered the "classic revival" business model, directly spawning today's multi-billion-dollar sneaker resale market and streetwear culture. Supreme, Off-White, Travis Scott â€” every sneaker collaboration traces its lineage to the AF1.

**Design democratization**: Nike later launched Nike By You (formerly NikeID), letting consumers customize their own AF1 colorways. This predated the "mass customization" concept by two decades.

**Cross-disciplinary design pioneer**: Virgil Abloh's Off-White Ã— Nike "The Ten" collection (2017) deconstructed and reassembled the AF1, blurring the boundaries between sneakers, fashion, and contemporary art. This collaborative model influenced the entire consumer product design industry.

**The Swoosh legend**: Carolyn Davidson's $35 Swoosh is now considered one of the most successful logo designs in history. In 1983, Nike gave her a diamond Swoosh ring and company stock as compensation â€” at today's valuation, those shares would be worth millions of dollars.`,
    
    significance_en: `How did a 1982 basketball shoe become the most influential industrial design product of the 21st century?

The answer lies in Phil Knight's founding philosophy: don't sell products, tell stories. Nike was never just a sneaker company â€” it's a design company, a marketing company, a culture company. The Air Force 1's success proves a design truth: the best product design doesn't solve problems â€” it creates meaning.

When Bruce Kilgore sketched the first AF1 draft, he was designing a basketball shoe. Four decades later, people worldwide wear it to work, on dates, and to fashion week. When a product transforms from "tool" to "totem" â€” that is the ultimate power of design.`
  },

  {
    id: '21',
    date: '2026-02-25',
    imageUrl: '/the-daily-object/images/royal-crescent.jpg',
    fullImageUrl: '/the-daily-object/images/full/royal-crescent.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/royal-crescent.jpg',
    title: 'Royal Crescent',
    subtitle: 'John Wood the Younger, 1774',
    category: 'architecture',
    designer: 'John Wood the Younger',
    year: '1774',
    
    dateConnection: '1728å¹´2æœˆ25æ—¥ï¼Œè‹±å›½å»ºç­‘å¸ˆ John Wood the Younger å‡ºç”ŸäºŽå·´æ–¯ã€‚ä»–ç»§æ‰¿çˆ¶äº² John Wood the Elder çš„åŸŽå¸‚è§„åˆ’æ„¿æ™¯ï¼Œè®¾è®¡äº†è¢«èª‰ä¸ºè‹±å›½ä¹”æ²»äºšæ—¶ä»£å»ºç­‘æœ€é«˜æˆå°±çš„ Royal Crescentâ€”â€”ä¸€æ¡ç”±30æ ‹è”æŽ’ä½å®…ç»„æˆçš„å¼§å½¢å»ºç­‘ç¾¤ï¼Œå°†å¤ç½—é©¬çš„åœ†å½¢å‰§åœºè¯­è¨€è½¬åŒ–ä¸ºä½å®…å»ºç­‘çš„å£®ä¸½è¯—ç¯‡ã€‚',
    
    designerBio: `John Wood the Youngerï¼ˆ1728-1782ï¼‰æ˜¯è‹±å›½ä¹”æ²»äºšæ—¶ä»£æœ€é‡è¦çš„å»ºç­‘å¸ˆä¹‹ä¸€ã€‚ä»–çš„çˆ¶äº² John Wood the Elder æ˜¯å·´æ–¯åŸŽå¸‚æ”¹é€ çš„å¥ åŸºäººï¼Œè®¾è®¡äº† Queen Square å’Œ The Circusâ€”â€”ä¸€ä¸ªå‚ç…§ç½—é©¬æ–—å…½åœºå†…ç«‹é¢çš„åœ†å½¢å¹¿åœºã€‚

çˆ¶äº²åœ¨ The Circus å°šæœªå®Œå·¥æ—¶ä¾¿äºŽ1754å¹´åŽ»ä¸–ï¼Œå¹´ä»…26å²çš„å°ä¼å¾·æŽ¥æ‰‹äº†é¡¹ç›®ï¼Œå¹¶åœ¨å®Œæˆçˆ¶äº²é—ä½œåŽï¼Œåˆ›ä½œäº†è‡ªå·±çš„å·…å³°ä¹‹ä½œï¼šRoyal Crescentã€‚

å°ä¼å¾·çš„å¤©æ‰åœ¨äºŽï¼Œä»–æ²¡æœ‰ç®€å•åœ°å¤åˆ¶çˆ¶äº²çš„è¯­è¨€ã€‚The Circus æ˜¯å‘å†…çš„ã€å°é—­çš„ï¼Œåƒä¸€ä¸ªç§å¯†çš„å†…é™¢ï¼›è€Œ Royal Crescent æ˜¯å‘å¤–çš„ã€å¼€æ”¾çš„ï¼Œé¢å‘å¹¿é˜”çš„è‰åªå’Œè¿œæ–¹çš„é£Žæ™¯ã€‚çˆ¶ä¸Žå­ï¼Œåœ†ä¸Žå¼§ï¼Œå†…ä¸Žå¤–â€”â€”è¿™å¯¹å»ºç­‘çˆ¶å­å®Œæˆäº†å·´æ–¯åŸŽå¸‚ç©ºé—´æœ€å®Œç¾Žçš„å¯¹è¯ã€‚`,
    
    story: `Royal Crescent å»ºäºŽ1767å¹´è‡³1774å¹´é—´ï¼Œç”±30æ ‹è”æŽ’ä½å®…æŽ’åˆ—æˆä¸€ä¸ªå·¨å¤§çš„åŠæœˆå½¢å¼§çº¿ï¼Œå…¨é•¿150ç±³ã€‚å®ƒçš„æ­£ç«‹é¢ç”±114æ ¹çˆ±å¥¥å°¼äºšæŸ±ç»Ÿä¸€æ”¯æ’‘ï¼Œå½¢æˆä¸€é“å®ä¼Ÿçš„æŸ±å»Šâ€”â€”ä»Žè¿œå¤„çœ‹ï¼Œè¿™ä¸åƒ30æ ‹ç‹¬ç«‹çš„æˆ¿å­ï¼Œè€Œåƒä¸€åº§å®Œæ•´çš„å®«æ®¿ã€‚

è¿™å°±æ˜¯å®ƒæœ€ä¼Ÿå¤§çš„è®¾è®¡åˆ›æ–°ï¼š**ç»Ÿä¸€çš„åŸŽå¸‚ç«‹é¢**ï¼ˆUnified Urban Facadeï¼‰ã€‚åœ¨ Royal Crescent ä¹‹å‰ï¼Œä½å®…å°±æ˜¯ä½å®…ï¼Œæ¯æ ‹æˆ¿å­æœ‰è‡ªå·±çš„é—¨é¢ã€‚Wood the Younger æå‡ºäº†ä¸€ä¸ªé©å‘½æ€§çš„æƒ³æ³•â€”â€”è®©ç§äººä½å®…å…±äº«ä¸€ä¸ªå…¬å…±çš„å»ºç­‘è¡¨æƒ…ï¼Œè®©ä¸ªä½“æœä»Žæ•´ä½“ï¼Œè®©åŸŽå¸‚ç¾Žå­¦å‡Œé©¾äºŽä¸ªäººè¶£å‘³ä¹‹ä¸Šã€‚

è¿™ä¸ªç†å¿µæ·±åˆ»å½±å“äº†åŽæ¥çš„åŸŽå¸‚è§„åˆ’ã€‚ä»Žå·´é»Žçš„å¥¥æ–¯æ›¼å¤§é“åˆ°ä¼¦æ•¦çš„æ‘„æ”¿è¡—ï¼Œä»Žåœ£å½¼å¾—å ¡çš„å®«æ®¿å¹¿åœºåˆ°çº½çº¦çš„ä¸­å¤®å…¬å›­è¥¿å¤§é“ï¼Œ"ç»Ÿä¸€ç«‹é¢"æˆä¸ºäº†å¡‘é€ åŸŽå¸‚å¤©é™…çº¿å’Œè¡—é“ç¾Žå­¦çš„æ ¸å¿ƒæ‰‹æ³•ã€‚

Royal Crescent çš„é€‰å€åŒæ ·ç²¾å¦™ã€‚å®ƒåè½åœ¨ä¸€ä¸ªç¼“å¡ä¹‹ä¸Šï¼Œé¢æœå—æ–¹ï¼Œå‰æ–¹æ˜¯å¼€é˜”çš„è‰åªï¼ˆRoyal Victoria Parkï¼‰ã€‚å¼§å½¢çš„è®¾è®¡è®©æ¯ä¸€æ ‹ä½å®…éƒ½äº«æœ‰å‡ ä¹Žç›¸åŒçš„æ™¯è§‚è§†é‡Žå’Œæ—¥ç…§æ¡ä»¶â€”â€”è¿™æ˜¯18ä¸–çºªå¯¹"å…¬å¹³è®¾è®¡"çš„ä¸€æ¬¡ä¼˜é›…å®žè·µã€‚`,

    legacy: `Royal Crescent å¯¹å»ºç­‘å’ŒåŸŽå¸‚è®¾è®¡çš„å½±å“å»¶ç»­è‡³ä»Šï¼š

**åŸŽå¸‚è®¾è®¡çš„å…¸èŒƒ**ï¼šå®ƒè¯æ˜Žäº†ä½å®…å»ºç­‘å¯ä»¥æ‰¿æ‹…åŸŽå¸‚ç¾Žå­¦çš„ä½¿å‘½ã€‚ä»Šå¤©åŸŽå¸‚è§„åˆ’ä¸­çš„"è®¾è®¡å¯¼åˆ™"ï¼ˆDesign Guidelinesï¼‰â€”â€”å¯¹å»ºç­‘é«˜åº¦ã€ææ–™ã€ç«‹é¢é£Žæ ¼çš„ç»Ÿä¸€è¦æ±‚â€”â€”å…¶æ€æƒ³æºå¤´å¯ä»¥ç›´æŽ¥è¿½æº¯åˆ° Wood çš„å·´æ–¯å®žéªŒã€‚

**åœºæ‰€ç²¾ç¥žï¼ˆGenius Lociï¼‰çš„è¥é€ **ï¼šRoyal Crescent ä¸æ˜¯å­¤ç«‹çš„å»ºç­‘ï¼Œè€Œæ˜¯ä¸Ž The Circusã€Gay Streetã€Queen Square å…±åŒæž„æˆçš„ä¸€ä¸ªå®Œæ•´åŸŽå¸‚å™äº‹ã€‚ä»Žæ–¹å½¢åˆ°åœ†å½¢åˆ°å¼§å½¢ï¼Œä»Žå°é—­åˆ°å¼€æ”¾ï¼Œå»ºç­‘ç©ºé—´åƒéŸ³ä¹ä¸€æ ·å±•å¼€ã€‚è¿™ç§"å»ºç­‘åºåˆ—"ï¼ˆArchitectural Sequenceï¼‰çš„è®¾è®¡æ€ç»´å½±å“äº†ä»Ž Le Corbusier åˆ° Tadao Ando çš„æ— æ•°å»ºç­‘å¸ˆã€‚

**é—äº§ä¿æŠ¤çš„æ ‡æ†**ï¼š1987å¹´ï¼Œå·´æ–¯æ•´åº§åŸŽå¸‚è¢«åˆ—å…¥è”åˆå›½æ•™ç§‘æ–‡ç»„ç»‡ä¸–ç•Œé—äº§åå½•ï¼ŒRoyal Crescent æ˜¯å…¶ä¸­æœ€æ ¸å¿ƒçš„å»ºç­‘ã€‚å®ƒæ˜¯è‹±å›½å»ºç­‘é—äº§ä¿æŠ¤è¿åŠ¨çš„é‡è¦æŽ¨åŠ¨åŠ›ã€‚

**å·´æ–¯çŸ³çš„ç¾Žå­¦**ï¼šæ•´ä¸ª Crescent ä½¿ç”¨å½“åœ°å¼€é‡‡çš„å·´æ–¯çŸ³ï¼ˆBath Stoneï¼‰å»ºé€ ï¼Œè¿™ç§èœœè‰²çš„çŸ³ç°å²©åœ¨ä¸åŒå…‰çº¿ä¸‹å‘ˆçŽ°å‡ºæ¸©æš–çš„é‡‘é»„è‰²è°ƒâ€”â€”æ—¥å‡ºæ—¶æ©˜çº¢ï¼Œæ­£åˆæ—¶æ·¡é‡‘ï¼Œæ—¥è½æ—¶ç¥ç€ã€‚å»ºç­‘ä¸Žææ–™çš„å®Œç¾Žèžåˆï¼Œè®© Royal Crescent æˆä¸º"åœ¨å¯¹çš„åœ°æ–¹ç”¨å¯¹çš„ææ–™"è¿™ä¸€å»ºç­‘åŽŸåˆ™çš„ç»å…¸æ¡ˆä¾‹ã€‚`,
    
    significance: `ä¸ºä»€ä¹ˆä¸€åº§248å¹´å‰çš„ä½å®…å»ºç­‘ç¾¤ä»Šå¤©ä¾ç„¶é‡è¦ï¼Ÿ

å› ä¸º John Wood the Younger å›žç­”äº†ä¸€ä¸ªæ°¸æ’çš„è®¾è®¡é—®é¢˜ï¼š**ä¸ªä½“ä¸Žé›†ä½“ï¼Œå¦‚ä½•åœ¨ç©ºé—´ä¸­å…±å­˜ï¼Ÿ**

Royal Crescent çš„30æ ‹ä½å®…ï¼Œæ¯ä¸€æ ‹å†…éƒ¨éƒ½å®Œå…¨ä¸åŒâ€”â€”ä¸šä¸»å¯ä»¥è‡ªç”±è£…ä¿®è‡ªå·±çš„æˆ¿å­ã€‚ä½†ä»Žå¤–é¢çœ‹ï¼Œå®ƒä»¬æ˜¯ä¸€ä¸ªæ•´ä½“ï¼Œä¸€é“ä¼˜é›…çš„å¼§çº¿ï¼Œä¸€é¦–ç”¨çŸ³å¤´å†™æˆçš„äº¤å“ä¹ã€‚

è¿™ç§"å¤–éƒ¨ç»Ÿä¸€ã€å†…éƒ¨è‡ªç”±"çš„è®¾è®¡å“²å­¦ï¼Œä»Šå¤©è¢«ç”¨åœ¨ä»Žæ‰‹æœºç•Œé¢åˆ°åŸŽå¸‚å¤©é™…çº¿çš„ä¸€åˆ‡è®¾è®¡ä¸­ã€‚Apple çš„ iOS æœ‰ç»Ÿä¸€çš„è®¾è®¡è¯­è¨€ï¼Œä½†æ¯ä¸ª App å†…éƒ¨æœ‰è‡ªå·±çš„ä¸ªæ€§ã€‚åŸŽå¸‚æœ‰ç»Ÿä¸€çš„è¡—é“è‚Œç†ï¼Œä½†æ¯æ ‹å»ºç­‘æœ‰è‡ªå·±çš„çµé­‚ã€‚

Wood åœ¨250å¹´å‰å°±æ˜Žç™½äº†ï¼š**å¥½çš„è®¾è®¡ä¸æ˜¯æ¶ˆç­ä¸ªæ€§ï¼Œè€Œæ˜¯åˆ›é€ ä¸€ä¸ªè®©ä¸ªæ€§å¾—ä»¥ä¼˜é›…å…±å­˜çš„æ¡†æž¶ã€‚**`,

    dateConnection_en: 'February 25, 1728 marks the birth of English architect John Wood the Younger in Bath. He inherited his father John Wood the Elder\'s vision for urban planning and designed what is considered the crowning achievement of Georgian architecture â€” the Royal Crescent, a sweeping arc of 30 terraced houses that translated the language of Roman amphitheaters into a magnificent residential composition.',
    
    designerBio_en: `John Wood the Younger (1728-1782) was one of the most important architects of the Georgian era. His father, John Wood the Elder, laid the foundation for Bath's urban transformation, designing Queen Square and The Circus â€” a circular plaza modeled after the interior facade of the Roman Colosseum.

When his father died in 1754 before The Circus was completed, the 26-year-old younger Wood took over the project. After finishing his father's work, he created his own masterpiece: the Royal Crescent.

Wood the Younger's genius lay in not simply replicating his father's vocabulary. The Circus is inward-facing and enclosed, like a private courtyard; the Royal Crescent is outward-facing and open, looking onto expansive lawns and distant landscapes. Father and son, circle and arc, interior and exterior â€” this architectural father-son duo completed the most perfect spatial dialogue in Bath.`,
    
    story_en: `The Royal Crescent was built between 1767 and 1774, comprising 30 terraced houses arranged in a grand crescent spanning 150 meters. Its facade is unified by 114 Ionic columns forming a majestic colonnade â€” from a distance, it doesn't look like 30 individual houses but rather a single palace.

This was its greatest design innovation: the **Unified Urban Facade**. Before the Royal Crescent, a house was just a house, each with its own frontage. Wood the Younger proposed a revolutionary idea â€” private residences sharing a public architectural expression, individuals subordinate to the whole, urban aesthetics elevated above personal taste.

This concept profoundly influenced subsequent urban planning. From Haussmann's boulevards in Paris to Regent Street in London, from the Palace Square in St. Petersburg to Central Park West in New York, the "unified facade" became a core technique for shaping city skylines and street aesthetics.

The siting was equally masterful. The Crescent sits on a gentle slope, facing south, with open lawns (Royal Victoria Park) stretching before it. The curved design ensures nearly every house enjoys the same views and sunlight â€” an elegant 18th-century exercise in equitable design.`,
    
    legacy_en: `The Royal Crescent's influence on architecture and urban design endures:

**A paradigm for urban design**: It proved that residential architecture could serve an urban aesthetic mission. Today's urban "Design Guidelines" â€” unified requirements for building height, materials, and facade style â€” trace their intellectual origins directly to Wood's Bath experiment.

**Crafting Genius Loci**: The Royal Crescent isn't an isolated building but part of a complete urban narrative with The Circus, Gay Street, and Queen Square. From square to circle to crescent, from enclosed to open, architectural spaces unfold like music. This "Architectural Sequence" thinking influenced countless architects from Le Corbusier to Tadao Ando.

**A benchmark for heritage conservation**: In 1987, the entire city of Bath was inscribed as a UNESCO World Heritage Site, with the Royal Crescent at its core. It became a driving force behind Britain's architectural heritage conservation movement.

**The aesthetics of Bath Stone**: The entire Crescent is built from locally quarried Bath Stone, a honey-colored limestone that shifts through warm golden hues in changing light â€” orange-red at dawn, pale gold at noon, amber at sunset. This perfect fusion of building and material makes the Royal Crescent a textbook example of using the right material in the right place.`,
    
    significance_en: `Why does a 248-year-old residential complex still matter today?

Because John Wood the Younger answered an eternal design question: how can the individual and the collective coexist in space?

Each of the Royal Crescent's 30 houses is completely different inside â€” owners were free to decorate as they wished. But from the outside, they form a unified whole, an elegant arc, a symphony written in stone.

This philosophy of "external unity, internal freedom" is applied today in everything from phone interfaces to city skylines. Apple's iOS has a unified design language, yet each app has its own personality. Cities have consistent street textures, yet each building has its own soul.

Wood understood 250 years ago what remains true today: good design doesn't eliminate individuality â€” it creates a framework where individuality can coexist with grace.`
  },

  {
    id: '22',
    date: '2026-02-04',
    imageUrl: '/the-daily-object/images/leger-mechanical-elements.jpg',
    fullImageUrl: '/the-daily-object/images/full/leger-mechanical-elements.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/leger-mechanical-elements.jpg',
    title: 'æœºæ¢°å…ƒç´ ',
    title_en: 'Mechanical Elements',
    subtitle: 'Fernand LÃ©ger, 1918',
    category: 'art',
    designer: 'Fernand LÃ©ger',
    year: '1918',
    
    dateConnection: '1881å¹´2æœˆ4æ—¥ï¼ŒFernand LÃ©ger å‡ºç”ŸäºŽæ³•å›½è¯ºæ›¼åº•é˜¿è®©å”ã€‚ä»–æ˜¯ç«‹ä½“ä¸»ä¹‰è¿åŠ¨çš„æ ¸å¿ƒäººç‰©ï¼Œä¹Ÿæ˜¯ç¬¬ä¸€ä½çœŸæ­£æ‹¥æŠ±æœºå™¨ç¾Žå­¦çš„çŽ°ä»£ç”»å®¶â€”â€”ä»–æŠŠé½¿è½®ã€ç®¡é“å’Œé‡‘å±žè´¨æ„Ÿå˜æˆäº†ç»˜ç”»è¯­è¨€ï¼Œæ¨¡ç³Šäº†çº¯è‰ºæœ¯ä¸Žå·¥ä¸šè®¾è®¡ä¹‹é—´çš„è¾¹ç•Œã€‚',
    
    designerBio: `Fernand LÃ©gerï¼ˆ1881-1955ï¼‰ï¼Œæ³•å›½ç”»å®¶ã€é›•å¡‘å®¶ã€ç”µå½±åˆ¶ä½œäººï¼Œç«‹ä½“ä¸»ä¹‰è¿åŠ¨çš„å…³é”®äººç‰©ã€‚

å‡ºèº«è¯ºæ›¼åº•å†œå®¶ï¼Œæœ€åˆåœ¨å»ºç­‘äº‹åŠ¡æ‰€åšåˆ¶å›¾å‘˜â€”â€”è¿™æ®µç»åŽ†æ·±åˆ»å½±å“äº†ä»–å¯¹ç»“æž„å’Œå½¢å¼çš„ç†è§£ã€‚1903å¹´æ¥åˆ°å·´é»Žï¼Œåœ¨å­¦é™¢æœ±åˆ©å®‰å’Œç¾Žæœ¯å­¦é™¢å­¦ä¹ ï¼Œç»“è¯†äº†æ¯•åŠ ç´¢å’Œå¸ƒæ‹‰å…‹ã€‚

ä½† LÃ©ger èµ°äº†ä¸€æ¡å®Œå…¨ä¸åŒçš„è·¯ã€‚æ¯•åŠ ç´¢å’Œå¸ƒæ‹‰å…‹æŠŠå‰ä»–å’ŒæŠ¥çº¸åˆ‡ç¢Žé‡ç»„ï¼ŒLÃ©ger åˆ™æŠŠç›®å…‰æŠ•å‘äº†å·¥åŽ‚ã€åŸŽå¸‚å’Œæœºå™¨ã€‚ä»–è¢«ä¸€æˆ˜ä¸­çš„å£«å…µã€å¤§ç‚®å’Œé’¢é“æ·±æ·±éœ‡æ’¼â€”â€”"æˆ‘åœ¨å‰çº¿è¢«å¤§ç‚®åŽè†›çš„å…‰æ³½è¿·ä½äº†ã€‚"

**"çŽ°ä»£ç¾Žå­¦çš„æ ¹åŸºåœ¨äºŽæœºå™¨ã€‚"**

ä»–ä¸æ˜¯å†·å†°å†°åœ°æç»˜æœºå™¨ï¼Œè€Œæ˜¯èµ‹äºˆæœºå™¨ä»¥äººçš„æ¸©åº¦ã€‚ä»–ç¬”ä¸‹çš„ç®¡é“åƒæ‰‹è‡‚ï¼Œé½¿è½®åƒçœ¼ç›ï¼Œæ•´ä¸ªç”»é¢åƒä¸€åº§æœ‰å‘¼å¸çš„å·¥åŽ‚ã€‚`,
    
    story: `1918å¹´çš„ã€Šæœºæ¢°å…ƒç´ ã€‹ï¼ˆÃ‰lÃ©ments mÃ©caniquesï¼‰æ˜¯ LÃ©ger æœ€é‡è¦çš„ä½œå“ä¹‹ä¸€ã€‚

ä¸€æˆ˜åˆšåˆšç»“æŸã€‚LÃ©ger ä»Žæˆ˜åœºå½’æ¥ï¼Œæ•´ä¸ªäººè¢«çŽ°ä»£å·¥ä¸šçš„åŠ›é‡å½»åº•æ”¹å˜ã€‚ä»–åœ¨å‡¡å°”ç™»å‰çº¿äº²çœ¼è§è¯äº†æœºå™¨å¦‚ä½•ä¸»å®°æˆ˜äº‰â€”â€”å¦å…‹ã€é£žæœºã€é‡ç‚®â€”â€”è¿™äº›é’¢é“å·¨å…½è®©ä¸ªäººè‹±é›„ä¸»ä¹‰å˜å¾—æ¯«æ— æ„ä¹‰ã€‚

ä½†ä»–æ²¡æœ‰åƒå…¶ä»–è‰ºæœ¯å®¶é‚£æ ·ææƒ§æœºå™¨ã€‚ä»–é€‰æ‹©äº†**æ‹¥æŠ±**ã€‚

ã€Šæœºæ¢°å…ƒç´ ã€‹ç”¨åœ†æŸ±ä½“ã€é”¥ä½“å’Œç®¡çŠ¶å½¢æ€æž„å»ºäº†ä¸€ä¸ªçº¯ç²¹çš„æœºæ¢°ä¸–ç•Œã€‚é‡‘å±žè´¨æ„Ÿçš„ç°è‰²å’Œé“¶è‰²å æ®ç”»é¢ï¼Œå¶å°”é—ªè¿‡çº¢è‰²å’Œè“è‰²çš„ç‚¹ç¼€ã€‚æ²¡æœ‰äººç‰©ï¼Œæ²¡æœ‰é£Žæ™¯ï¼Œåªæœ‰å½¢å¼â€”â€”ä½†è¿™äº›å½¢å¼æœ‰ä¸€ç§å¥‡ç‰¹çš„ç”Ÿå‘½åŠ›ï¼Œä»¿ä½›è¿™äº›æœºæ¢°é›¶ä»¶æ­£åœ¨ç»„è£…æˆæŸç§æœ‰æœºç”Ÿå‘½ä½“ã€‚

**è¿™å¹…ç”»æå‡ºäº†ä¸€ä¸ªåœ¨ä»Šå¤©ä»ç„¶è¿«åˆ‡çš„é—®é¢˜ï¼šæœºå™¨æ˜¯å†·æ¼ çš„å¯¹ç«‹é¢ï¼Œè¿˜æ˜¯äººç±»åˆ›é€ åŠ›çš„å»¶ä¼¸ï¼Ÿ**

LÃ©ger çš„ç­”æ¡ˆå¾ˆæ˜Žç¡®ï¼šæœºå™¨æ˜¯ç¾Žçš„ã€‚ä¸æ˜¯å› ä¸ºå®ƒæ¨¡ä»¿äº†è‡ªç„¶ï¼Œè€Œæ˜¯å› ä¸ºå®ƒè¯šå®žâ€”â€”æ¯ä¸€ä¸ªå½¢çŠ¶éƒ½æœ‰åŠŸèƒ½ï¼Œæ¯ä¸€ä¸ªæ›²çº¿éƒ½æœ‰ç†ç”±ã€‚è¿™æ­£æ˜¯åŽæ¥åŒ…è±ªæ–¯å’ŒçŽ°ä»£å·¥ä¸šè®¾è®¡çš„æ ¸å¿ƒä¿¡æ¡ã€‚`,

    legacy: `LÃ©ger å¯¹è®¾è®¡çš„å½±å“è¿œè¶…ç»˜ç”»ï¼š

**åŒ…è±ªæ–¯çš„ç²¾ç¥žç›Ÿå‹**ï¼šè™½ç„¶ LÃ©ger ä¸æ˜¯åŒ…è±ªæ–¯æˆå‘˜ï¼Œä½†ä»–çš„"æœºå™¨ç¾Žå­¦"ä¸Žæ ¼ç½—çš®ä¹Œæ–¯çš„ç†å¿µé«˜åº¦ä¸€è‡´â€”â€”è‰ºæœ¯ä¸åº”è¯¥å®³æ€•å·¥ä¸šï¼Œè€Œåº”è¯¥ä¸Žå·¥ä¸šèžåˆ

**å¹³é¢è®¾è®¡å…ˆé©±**ï¼šä»–çš„å¤§è‰²å—ã€ç²—è½®å»“ã€å‡ ä½•æž„å›¾ç›´æŽ¥å½±å“äº†20ä¸–çºªä¸­å¶çš„æµ·æŠ¥è®¾è®¡å’Œè§†è§‰ä¼ è¾¾

**å»ºç­‘åˆä½œ**ï¼šä»–ä¸Žå‹’Â·æŸ¯å¸ƒè¥¿è€¶åˆä½œï¼Œä¸ºé©¬èµ›å…¬å¯“ç­‰å»ºç­‘åˆ›ä½œå£ç”»ï¼Œå®žè·µäº†"ç»¼åˆè‰ºæœ¯"ï¼ˆGesamtkunstwerkï¼‰çš„ç†å¿µ

**ç”µå½±å®žéªŒ**ï¼š1924å¹´çš„å®žéªŒç”µå½±ã€Šæœºæ¢°èŠ­è•¾ã€‹ï¼ˆBallet MÃ©caniqueï¼‰æ˜¯å½±å²ä¸Šæœ€æ—©çš„æŠ½è±¡ç”µå½±ä¹‹ä¸€ï¼Œå½±å“äº†åŽæ¥æ‰€æœ‰çš„è¿åŠ¨å›¾å½¢è®¾è®¡

**æ³¢æ™®è‰ºæœ¯å‰é©±**ï¼šä»–å¯¹æ—¥å¸¸ç‰©å“çš„å…³æ³¨ã€é²œæ˜Žçš„è‰²å½©å’Œå¤§èƒ†çš„å½¢å¼ï¼Œç›´æŽ¥å¯å‘äº†æ²ƒéœå°”å’Œåˆ©å¸Œæ»•æ–¯å¦`,
    
    significance: `LÃ©ger è§£å†³äº†ä¸€ä¸ªå›°æ‰°çŽ°ä»£è®¾è®¡å¸ˆä¸€ç™¾å¤šå¹´çš„å¿ƒç†éšœç¢ï¼š**æœºå™¨å¯ä»¥æ˜¯ç¾Žçš„å—ï¼Ÿ**

åœ¨ä»–ä¹‹å‰ï¼Œè‰ºæœ¯ç•Œå¯¹å·¥ä¸šé©å‘½çš„æ€åº¦è¦ä¹ˆæ˜¯æµªæ¼«ä¸»ä¹‰çš„é€ƒé¿ï¼ˆå›žå½’è‡ªç„¶ï¼ï¼‰ï¼Œè¦ä¹ˆæ˜¯ææƒ§ï¼ˆæœºå™¨ä¼šæ¯ç­äººç±»ï¼ï¼‰ã€‚LÃ©ger è¯´ï¼šåœã€‚çœ‹çœ‹å¤§ç‚®åŽè†›çš„å…‰æ³½ï¼Œçœ‹çœ‹é½¿è½®å’¬åˆçš„ç²¾ç¡®ï¼Œçœ‹çœ‹ç®¡é“å¼¯æ›²çš„ä¼˜é›…â€”â€”è¿™äº›éƒ½æ˜¯ç¾Žã€‚

è¿™ç§"æœºå™¨ç¾Žå­¦"çš„æ€åº¦ç›´æŽ¥å‚¬ç”Ÿäº†çŽ°ä»£å·¥ä¸šè®¾è®¡çš„åˆæ³•æ€§ã€‚æ²¡æœ‰ LÃ©ger ä»¬çš„é“ºè·¯ï¼ŒDieter Rams çš„åšæœ—æ”¶éŸ³æœºã€ä¹”çº³æ£®Â·è‰¾ç»´çš„ iMacï¼Œéƒ½ä¸å¯èƒ½è¢«è®¤ä¸ºæ˜¯"ç¾Žçš„"ã€‚

**ä»–è®©æˆ‘ä»¬ä¸å†å®³æ€•æ‰¿è®¤ï¼šäººé€ ç‰©å¯ä»¥å’Œè‡ªç„¶ç‰©ä¸€æ ·ç¾Žä¸½ã€‚è¿™æ˜¯æ‰€æœ‰å·¥ä¸šè®¾è®¡çš„èµ·ç‚¹ã€‚**`,

    dateConnection_en: 'On February 4, 1881, Fernand LÃ©ger was born in Argentan, Normandy, France. A central figure of Cubism, he was the first modern painter to truly embrace machine aesthetics â€” transforming gears, pipes, and metallic textures into a pictorial language that blurred the boundary between fine art and industrial design.',
    
    designerBio_en: `Fernand LÃ©ger (1881-1955), French painter, sculptor, and filmmaker, a key figure in the Cubist movement.

Born to a farming family in Normandy, he initially worked as an architectural draftsman â€” an experience that deeply shaped his understanding of structure and form. He arrived in Paris in 1903, studying at the AcadÃ©mie Julian and the Ã‰cole des Beaux-Arts, where he met Picasso and Braque.

But LÃ©ger took an entirely different path. While Picasso and Braque deconstructed guitars and newspapers, LÃ©ger turned his gaze toward factories, cities, and machines. He was profoundly struck by the soldiers, cannons, and steel of World War I â€” "At the front, I was dazzled by the gleam of a cannon breech."

**"The basis of modern aesthetics is the machine."**

He didn't depict machines coldly â€” he gave them human warmth. In his paintings, pipes resemble arms, gears look like eyes, and entire compositions breathe like living factories.`,
    
    story_en: `The 1918 painting "Ã‰lÃ©ments mÃ©caniques" (Mechanical Elements) is one of LÃ©ger's most important works.

World War I had just ended. LÃ©ger returned from the battlefield, fundamentally transformed by the power of modern industry. At the Verdun front, he witnessed firsthand how machines dominated warfare â€” tanks, aircraft, heavy artillery â€” steel behemoths that rendered individual heroism meaningless.

But unlike other artists, he didn't fear the machine. He chose to **embrace** it.

"Mechanical Elements" builds a purely mechanical world from cylinders, cones, and tubular forms. Metallic grays and silvers dominate the canvas, punctuated by flashes of red and blue. No figures, no landscapes â€” just forms. Yet these forms possess a strange vitality, as if the mechanical parts are assembling themselves into some organic life form.

**The painting poses a question that remains urgent today: is the machine a cold antithesis to humanity, or an extension of human creativity?**

LÃ©ger's answer was clear: machines are beautiful. Not because they imitate nature, but because they are honest â€” every shape has a function, every curve has a reason. This became the core creed of the Bauhaus and modern industrial design.`,
    
    legacy_en: `LÃ©ger's influence extends far beyond painting:

**Spiritual ally of the Bauhaus**: Though not a Bauhaus member, LÃ©ger's "machine aesthetic" aligned closely with Gropius's vision â€” art shouldn't fear industry but merge with it

**Graphic design pioneer**: His bold color blocks, thick outlines, and geometric compositions directly influenced mid-20th century poster design and visual communication

**Architectural collaboration**: He worked with Le Corbusier, creating murals for buildings like the UnitÃ© d'Habitation in Marseille, practicing the ideal of Gesamtkunstwerk (total work of art)

**Film experimentation**: His 1924 experimental film "Ballet MÃ©canique" was one of cinema's earliest abstract films, influencing all subsequent motion graphics design

**Pop Art precursor**: His attention to everyday objects, vivid colors, and bold forms directly inspired Warhol and Lichtenstein`,
    
    significance_en: `LÃ©ger resolved a psychological barrier that had troubled modern designers for over a century: **can machines be beautiful?**

Before him, the art world's attitude toward the Industrial Revolution was either Romantic escapism (return to nature!) or fear (machines will destroy humanity!). LÃ©ger said: stop. Look at the gleam of a cannon breech, the precision of meshing gears, the elegance of a curving pipe â€” these are beautiful.

This "machine aesthetic" attitude directly legitimized modern industrial design. Without the groundwork laid by LÃ©ger and his contemporaries, Dieter Rams' Braun radios and Jony Ive's iMac could never have been considered "beautiful."

**He made us unafraid to admit: human-made objects can be as beautiful as natural ones. This is the starting point of all industrial design.**`
  },

  {
    id: '23',
    date: '2026-02-05',
    imageUrl: '/the-daily-object/images/bakelite-radio-collection.jpg',
    fullImageUrl: '/the-daily-object/images/full/bakelite-radio-collection.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/bakelite-radio-collection.jpg',
    title: 'Bakelite',
    subtitle: 'Leo Baekeland, 1907',
    category: 'industrial',
    designer: 'Leo Baekeland',
    year: '1907',
    
    dateConnection: '1907å¹´2æœˆ5æ—¥ï¼Œæ¯”åˆ©æ—¶è£”ç¾Žå›½åŒ–å­¦å®¶ Leo Baekeland æ­£å¼å®£å¸ƒå‘æ˜Žäº†é…šé†›æ ‘è„‚â€”â€”ä¸–ç•Œä¸Šç¬¬ä¸€ç§å®Œå…¨åˆæˆçš„å¡‘æ–™ï¼Œä»–å°†å…¶å‘½åä¸º"Bakelite"ï¼ˆç”µæœ¨ï¼‰ã€‚è¿™ä¸€å¤©æ ‡å¿—ç€ææ–™è®¾è®¡å²ä¸Šæœ€é‡è¦çš„è½¬æŠ˜ç‚¹ï¼šäººç±»ç¬¬ä¸€æ¬¡åˆ›é€ äº†ä¸€ç§è‡ªç„¶ç•Œä¸­ä¸å­˜åœ¨çš„ææ–™ï¼Œä»Žæ­¤å½»åº•æ”¹å˜äº†å·¥ä¸šè®¾è®¡çš„å¯èƒ½æ€§è¾¹ç•Œã€‚',
    
    designerBio: `Leo Hendrik Baekelandï¼ˆ1863-1944ï¼‰ï¼Œç”ŸäºŽæ¯”åˆ©æ—¶æ ¹ç‰¹ï¼Œ20å²èŽ·å¾—åŒ–å­¦åšå£«å­¦ä½ï¼ˆå½“æ—¶æ ¹ç‰¹å¤§å­¦æœ€å¹´è½»çš„åšå£«ï¼‰ï¼ŒéšåŽç§»å±…ç¾Žå›½ã€‚

åœ¨å‘æ˜Ž Bakelite ä¹‹å‰ï¼Œä»–å·²ç»é å‘æ˜Ž Velox ç›¸çº¸èµšåˆ°äº†äººç”Ÿç¬¬ä¸€æ¡¶é‡‘â€”â€”ä»–å°†è¿™é¡¹ä¸“åˆ©ä»¥100ä¸‡ç¾Žå…ƒï¼ˆç›¸å½“äºŽä»Šå¤©çº¦3000ä¸‡ç¾Žå…ƒï¼‰å–ç»™äº†æŸ¯è¾¾å…¬å¸çš„ George Eastmanã€‚

ä½†çœŸæ­£è®©ä»–ååž‚é’å²çš„æ˜¯ä»–åœ¨çº½çº¦æ‰¬å…‹æ–¯å®¶ä¸­å®žéªŒå®¤é‡Œçš„æ‰§å¿µï¼šæ‰¾åˆ°ä¸€ç§èƒ½æ›¿ä»£å¤©ç„¶è™«èƒ¶ï¼ˆshellacï¼‰çš„åˆæˆææ–™ã€‚è™«èƒ¶æ¥è‡ªç´«èƒ¶è™«çš„åˆ†æ³Œç‰©ï¼Œä¾›åº”ä¸ç¨³å®šä¸”æ˜‚è´µã€‚Baekeland èŠ±äº†ä¸‰å¹´æ—¶é—´ç ”ç©¶è‹¯é…šå’Œç”²é†›çš„ååº”ï¼Œæœ€ç»ˆåœ¨é«˜æ¸©é«˜åŽ‹æ¡ä»¶ä¸‹å¾—åˆ°äº†ä¸€ç§å…¨æ–°çš„ç‰©è´¨â€”â€”åšç¡¬ã€è€çƒ­ã€ç»ç¼˜ã€ä¸æº¶äºŽä»»ä½•æº¶å‰‚ï¼Œå¯ä»¥è¢«æ¨¡å…·å¡‘é€ æˆä»»ä½•å½¢çŠ¶ã€‚

**"The material of a thousand uses"**â€”â€”ä»–è¿™æ ·ç§°å‘¼è‡ªå·±çš„å‘æ˜Žã€‚äº‹å®žè¯æ˜Žï¼Œè¿™ä¸ªè¯´æ³•è¿˜å¤ªä¿å®ˆäº†ã€‚`,
    
    story: `Bakelite ä¹‹æ‰€ä»¥æ˜¯è®¾è®¡å²çš„åˆ†æ°´å²­ï¼Œä¸ä»…å› ä¸ºå®ƒæ˜¯ç¬¬ä¸€ç§åˆæˆå¡‘æ–™ï¼Œæ›´å› ä¸ºå®ƒå½»åº•æ”¹å˜äº†"ä»€ä¹ˆä¸œè¥¿å¯ä»¥è¢«è®¾è®¡"ã€‚

åœ¨ Bakelite ä¹‹å‰ï¼Œå·¥ä¸šè®¾è®¡å¸ˆå—é™äºŽè‡ªç„¶ææ–™â€”â€”æœ¨å¤´ã€é‡‘å±žã€çŽ»ç’ƒã€é™¶ç“·ã€‚æ¯ç§ææ–™éƒ½æœ‰è‡ªå·±çš„è„¾æ°”ï¼šæœ¨å¤´ä¼šè…çƒ‚ï¼Œé‡‘å±žä¼šç”Ÿé”ˆï¼ŒçŽ»ç’ƒä¼šç¢Žã€‚è®¾è®¡å¸ˆå¿…é¡»é¡ºä»Žææ–™çš„é™åˆ¶ã€‚

Bakelite æ‰“ç ´äº†è¿™ä¸ªè§„åˆ™ã€‚å®ƒå¯ä»¥è¢«æ³¨å¡‘æˆä»»ä½•å½¢çŠ¶ï¼Œå¯ä»¥æŸ“æˆä»»ä½•é¢œè‰²ï¼Œä¸å¯¼ç”µã€ä¸æ€•çƒ­ã€ä¸æ€•æ°´ã€‚çªç„¶ä¹‹é—´ï¼Œè®¾è®¡å¸ˆæ‹¥æœ‰äº†ä¸€ç§"å¬è¯çš„ææ–™"â€”â€”**å½¢å¼ä¸å†è¢«ææ–™å†³å®šï¼Œè€Œæ˜¯è¢«æƒ³è±¡åŠ›å†³å®šã€‚**

1930å¹´ä»£æ˜¯ Bakelite çš„é»„é‡‘æ—¶ä»£ã€‚Art Deco é£Žæ ¼çš„æ”¶éŸ³æœºã€æµçº¿åž‹çš„ç”µè¯ã€è‰²å½©é²œè‰³çš„ç å®ã€æ£‹å­ã€çƒŸæ–—ã€ç›¸æœºæœºèº«â€”â€”Bakelite å‡ ä¹Žå®šä¹‰äº†é‚£ä¸ªæ—¶ä»£çš„ç‰©è´¨æ–‡åŒ–è§†è§‰è¯­è¨€ã€‚

æœ€ç»å…¸çš„ Bakelite è®¾è®¡åŒ…æ‹¬ï¼š
- **Ericsson DBH 1001 ç”µè¯**ï¼ˆ1931ï¼‰ï¼šé»‘è‰² Bakelite æœºèº«ï¼Œä¼˜é›…çš„æ›²çº¿ï¼Œæˆä¸º"ç”µè¯"è¿™ä¸ªæ¦‚å¿µçš„è§†è§‰åŽŸåž‹
- **Emerson AU-190 æ”¶éŸ³æœº**ï¼ˆ1938ï¼‰ï¼šå‚¬åŒ–å‰‚ç»¿è‰²ï¼ŒArt Deco é€ åž‹ï¼ŒçŽ°åœ¨æ˜¯æ”¶è—å®¶çš„åœ£ç‰©
- **Kodak Baby Brownie ç›¸æœº**ï¼ˆ1934ï¼‰ï¼šWalter Dorwin Teague è®¾è®¡ï¼Œè®©æ‘„å½±æ°‘ä¸»åŒ–çš„é‡Œç¨‹ç¢‘`,

    legacy: `Bakelite çš„å½±å“è¿œè¿œè¶…å‡ºäº†ææ–™æœ¬èº«ï¼š

**è®¾è®¡æ°‘ä¸»åŒ–**ï¼šåœ¨ Bakelite ä¹‹å‰ï¼Œç²¾ç¾Žçš„äº§å“åªå±žäºŽå¯Œäººâ€”â€”é“¶é¤å…·ã€æ°´æ™¶çŽ»ç’ƒã€å®žæœ¨å®¶å…·ã€‚Bakelite è®©ç¾Žä¸½çš„æ—¥ç”¨å“å˜å¾—äººäººä¹°å¾—èµ·ã€‚è¿™ç§"è®¾è®¡æ°‘ä¸»åŒ–"çš„ç†å¿µï¼ŒåŽæ¥è¢«å®œå®¶å’Œæ— å°è‰¯å“ç»§æ‰¿å‘æ‰¬ã€‚

**å¡‘æ–™æ—¶ä»£çš„å¼€ç«¯**ï¼šBakelite æ˜¯ç¬¬ä¸€å—å¤šç±³è¯ºéª¨ç‰Œã€‚æ²¡æœ‰å®ƒï¼Œå°±æ²¡æœ‰åŽæ¥çš„å°¼é¾™ï¼ˆ1935ï¼‰ã€èšä¹™çƒ¯ï¼ˆ1933ï¼‰ã€èšä¸™çƒ¯ï¼ˆ1954ï¼‰ã€‚æ•´ä¸ª20ä¸–çºªçš„ææ–™é©å‘½ï¼Œå§‹äºŽ Baekeland åœ¨æ‰¬å…‹æ–¯çš„é‚£é—´å®žéªŒå®¤ã€‚

**Art Deco çš„ç‰©è´¨åŸºç¡€**ï¼šæ²¡æœ‰ Bakeliteï¼ŒArt Deco è¿åŠ¨å°†ç¼ºå°‘æœ€é‡è¦çš„è¡¨çŽ°åª’ä»‹ã€‚é‚£äº›æµçº¿åž‹ã€å‡ ä½•åŒ–ã€è‰²å½©å¤§èƒ†çš„è®¾è®¡ï¼Œæ­£æ˜¯å› ä¸º Bakelite æ‰å¾—ä»¥ä»Žå›¾çº¸å˜ä¸ºçŽ°å®žã€‚

**å¯æŒç»­æ€§çš„åæ€**ï¼šè®½åˆºçš„æ˜¯ï¼ŒBakelite çš„"ä¸å¯é™è§£"â€”â€”å½“å¹´è¢«è§†ä¸ºä¼˜ç‚¹â€”â€”å¦‚ä»Šæˆäº†å¡‘æ–™æ±¡æŸ“é—®é¢˜çš„æºå¤´ã€‚å®ƒæé†’æˆ‘ä»¬ï¼šæ¯ä¸€æ¬¡ææ–™é©å‘½éƒ½æœ‰åŒé¢æ€§ã€‚`,
    
    significance: `ä¸ºä»€ä¹ˆä¸€ç§119å¹´å‰å‘æ˜Žçš„å¡‘æ–™ä»Šå¤©ä»ç„¶é‡è¦ï¼Ÿ

å› ä¸º Bakelite å›žç­”äº†ä¸€ä¸ªè®¾è®¡çš„å…ƒé—®é¢˜ï¼š**å½“ææ–™ä¸å†æ˜¯é™åˆ¶ï¼Œè®¾è®¡çš„é™åˆ¶æ˜¯ä»€ä¹ˆï¼Ÿ**

ç­”æ¡ˆæ˜¯ï¼šæƒ³è±¡åŠ›ã€‚

Baekeland ç»™äº†è®¾è®¡å¸ˆä¸€ç§å¯ä»¥è¢«å¡‘é€ æˆä»»ä½•å½¢çŠ¶çš„ææ–™ï¼Œä»Žæ­¤è®¾è®¡çš„è¾¹ç•Œä¸å†æ˜¯"èƒ½åšä»€ä¹ˆ"ï¼Œè€Œæ˜¯"æƒ³åšä»€ä¹ˆ"ã€‚è¿™ä¸ªæ€ç»´æ–¹å¼çš„è½¬å˜ï¼Œæ¯”ææ–™æœ¬èº«æ›´å…·é©å‘½æ€§ã€‚

ä»Šå¤©ï¼Œå½“æˆ‘ä»¬ç”¨3Dæ‰“å°åˆ›é€ å‰æ‰€æœªæœ‰çš„å½¢æ€ï¼Œå½“æˆ‘ä»¬ç”¨ç¢³çº¤ç»´å¤åˆææ–™è®¾è®¡è¶…çº§è·‘è½¦ï¼Œå½“æˆ‘ä»¬ç”¨ç”Ÿç‰©é™è§£å¡‘æ–™è¿½æ±‚å¯æŒç»­è®¾è®¡â€”â€”æˆ‘ä»¬ä»ç„¶ç«™åœ¨ Baekeland å¼€åˆ›çš„é‚£æ¡è·¯ä¸Šï¼š**è®©ææ–™æœåŠ¡äºŽè®¾è®¡ï¼Œè€Œä¸æ˜¯è®©è®¾è®¡å±ˆæœäºŽææ–™ã€‚**`,

    dateConnection_en: 'On February 5, 1907, Belgian-American chemist Leo Baekeland formally announced his invention of phenol formaldehyde resin â€” the world\'s first fully synthetic plastic, which he named "Bakelite." This day marks the most important turning point in material design history: for the first time, humans created a material that didn\'t exist in nature, permanently expanding the boundaries of what industrial design could achieve.',
    
    designerBio_en: `Leo Hendrik Baekeland (1863-1944) was born in Ghent, Belgium, earning his doctorate in chemistry at age 20 (the youngest PhD at the University of Ghent at the time) before emigrating to the United States.

Before inventing Bakelite, he had already made his fortune by inventing Velox photographic paper, selling the patent to George Eastman of Kodak for $1 million (equivalent to roughly $30 million today).

But what truly secured his place in history was his obsessive work in his home laboratory in Yonkers, New York: finding a synthetic replacement for shellac, a natural resin secreted by lac insects that was expensive and unreliable in supply. Baekeland spent three years studying the reaction between phenol and formaldehyde, ultimately producing under high temperature and pressure an entirely new substance â€” hard, heat-resistant, electrically insulating, insoluble in any solvent, and moldable into any shape.

**"The material of a thousand uses"** â€” that's what he called his invention. As it turned out, even that was an understatement.`,
    
    story_en: `Bakelite is a watershed in design history not just because it was the first synthetic plastic, but because it fundamentally changed what could be designed.

Before Bakelite, industrial designers were constrained by natural materials â€” wood, metal, glass, ceramics. Each had its own temperament: wood rots, metal rusts, glass shatters. Designers had to submit to material limitations.

Bakelite broke that rule. It could be injection-molded into any shape, dyed any color; it didn't conduct electricity, resisted heat and water. Suddenly, designers had an "obedient material" â€” **form was no longer dictated by material but by imagination.**

The 1930s were Bakelite's golden age. Art Deco radios, streamlined telephones, colorful jewelry, chess pieces, pipes, camera bodies â€” Bakelite virtually defined the visual language of that era's material culture.

The most iconic Bakelite designs include:
- **Ericsson DBH 1001 telephone** (1931): Black Bakelite body with elegant curves, becoming the visual prototype of "telephone" as a concept
- **Emerson AU-190 radio** (1938): Catalin green, Art Deco styling, now a collector's holy grail
- **Kodak Baby Brownie camera** (1934): Designed by Walter Dorwin Teague, a milestone in democratizing photography`,
    
    legacy_en: `Bakelite's influence far exceeded the material itself:

**Democratization of design**: Before Bakelite, beautiful products belonged only to the wealthy â€” silver cutlery, crystal glass, solid wood furniture. Bakelite made beautiful everyday objects affordable for everyone. This concept of "design democratization" was later carried forward by IKEA and MUJI.

**Dawn of the plastic age**: Bakelite was the first domino. Without it, there would be no nylon (1935), polyethylene (1933), or polypropylene (1954). The entire 20th-century materials revolution began in Baekeland's Yonkers laboratory.

**Material foundation of Art Deco**: Without Bakelite, the Art Deco movement would have lacked its most important expressive medium. Those streamlined, geometric, boldly colored designs became reality precisely because of Bakelite.

**Sustainability reflection**: Ironically, Bakelite's "indestructibility" â€” once considered a virtue â€” became the origin of the plastic pollution problem. It reminds us that every material revolution has two sides.`,
    
    significance_en: `Why does a plastic invented 119 years ago still matter?

Because Bakelite answered a meta-question of design: **when material is no longer a constraint, what constrains design?**

The answer: imagination.

Baekeland gave designers a material that could be shaped into anything, shifting design's boundary from "what can be done" to "what do we want to do." This shift in thinking was more revolutionary than the material itself.

Today, when we use 3D printing to create unprecedented forms, carbon fiber composites to design supercars, and biodegradable plastics to pursue sustainable design â€” we're still walking the path Baekeland pioneered: **making material serve design, not design submit to material.**`
  },

  {
    id: '24',
    date: '2026-02-06',
    imageUrl: '/the-daily-object/images/marina-bay-sands.jpg',
    fullImageUrl: '/the-daily-object/images/full/marina-bay-sands.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/marina-bay-sands.jpg',
    title: 'Marina Bay Sands',
    subtitle: 'Moshe Safdie, 2010',
    category: 'architecture',
    designer: 'Moshe Safdie',
    year: '2010',
    
    dateConnection: '1819å¹´2æœˆ6æ—¥ï¼Œè‹±å›½ä¸œå°åº¦å…¬å¸çš„ Stamford Raffles ä¸ŽæŸ”ä½›è‹ä¸¹ç­¾ç½²ã€Šæ–°åŠ å¡æ¡çº¦ã€‹ï¼Œæ ‡å¿—ç€çŽ°ä»£æ–°åŠ å¡çš„å»ºç«‹ã€‚191å¹´åŽçš„2010å¹´ï¼ŒMarina Bay Sands åœ¨åŒä¸€ç‰‡åœŸåœ°ä¸Šæ‹”åœ°è€Œèµ·â€”â€”è¿™åº§ç”± Moshe Safdie è®¾è®¡çš„å»ºç­‘ï¼Œæˆä¸ºæ–°åŠ å¡ä»Žæ®–æ°‘åœ°è´¸æ˜“æ¸¯å£èœ•å˜ä¸ºå…¨çƒè®¾è®¡ä¹‹éƒ½çš„ç»ˆæžè±¡å¾ã€‚',
    
    designerBio: `Moshe Safdieï¼ˆ1938-ï¼‰ï¼Œä»¥è‰²åˆ—è£”åŠ æ‹¿å¤§å»ºç­‘å¸ˆï¼Œå½“ä»£æœ€å…·å®žéªŒç²¾ç¥žçš„å»ºç­‘å¸ˆä¹‹ä¸€ã€‚

ä»–åœ¨éº¦å‰å°”å¤§å­¦å¸ˆä»Ž Louis Kahnï¼ˆä¹Ÿå‡ºçŽ°åœ¨æœ¬æ—¥åŽ† 2æœˆ20æ—¥ï¼‰ï¼Œæ¯•ä¸šè®ºæ–‡å°±æ˜¯åŽæ¥éœ‡æƒŠä¸–ç•Œçš„ Habitat 67â€”â€”1967å¹´è’™ç‰¹åˆ©å°”ä¸–åšä¼šä¸Šé‚£ä¸ªç”±354ä¸ªé¢„åˆ¶æ··å‡åœŸç›’å­å †å è€Œæˆçš„ä½å®…ç»¼åˆä½“ã€‚è¿™ä¸ªé¡¹ç›®è®©28å²çš„ Safdie ä¸€å¤œæˆåï¼Œä¹Ÿå®šä¹‰äº†ä»–ä¸€ç”Ÿçš„è®¾è®¡è¿½æ±‚ï¼š**å¦‚ä½•åœ¨é«˜å¯†åº¦åŸŽå¸‚ä¸­åˆ›é€ æœ‰å°Šä¸¥çš„å±…ä½ç©ºé—´ï¼Ÿ**

ä»Ž Habitat 67 åˆ°è€¶è·¯æ’’å†·çš„ Yad Vashem å¤§å± æ€çºªå¿µé¦†ï¼Œä»Žæ–°åŠ å¡çš„ Jewel Changi Airport åˆ°é‡åº†çš„æ¥ç¦å£«å¹¿åœºï¼ŒSafdie çš„ä½œå“éå¸ƒå…¨çƒï¼Œä½†å§‹ç»ˆå›´ç»•åŒä¸€ä¸ªæ ¸å¿ƒé—®é¢˜ï¼š**å»ºç­‘å¦‚ä½•ä¸ºå…¬å…±ç”Ÿæ´»åˆ›é€ æ„ä¹‰ï¼Ÿ**`,
    
    story: `Marina Bay Sands çš„è®¾è®¡å§‹äºŽä¸€ä¸ªçœ‹ä¼¼ä¸å¯èƒ½çš„æƒ³æ³•ï¼šåœ¨ä¸‰æ ‹55å±‚é«˜æ¥¼çš„é¡¶ç«¯ï¼Œæ”¾ä¸€è‰˜"èˆ¹"ã€‚

è¿™è‰˜340ç±³é•¿çš„ç©ºä¸­èŠ±å›­ï¼ˆSkyParkï¼‰æ¨ªè·¨ä¸‰æ ‹å¡”æ¥¼ï¼Œæ‚¬æŒ‘67ç±³â€”â€”ç›¸å½“äºŽæŠŠä¸€åº§è¶³çƒåœºæ‚¬æŒ‚åœ¨200ç±³é«˜ç©ºã€‚ä»Žå·¥ç¨‹è§’åº¦çœ‹ï¼Œè¿™è¿‘ä¹Žç–¯ç‹‚ã€‚Safdie çš„å›¢é˜Ÿä¸Ž Arup å·¥ç¨‹å¸ˆåˆä½œï¼Œä½¿ç”¨äº†åˆ›æ–°çš„é’¢æ¡æž¶ç»“æž„ç³»ç»Ÿï¼Œè®©è¿™ä¸ªé‡è¾¾7700å¨çš„ç©ºä¸­å¹³å°ç¨³ç¨³åœ°"æ¼‚æµ®"åœ¨åŸŽå¸‚ä¸Šç©ºã€‚

**ä½†ç»“æž„åªæ˜¯æ‰‹æ®µï¼Œè®¾è®¡æ„å›¾æ‰æ˜¯çµé­‚ã€‚**

Safdie è§£é‡Šè¯´ï¼ŒSkyPark çš„çµæ„Ÿæ¥è‡ª"å…¬å…±ç©ºé—´"çš„ç†å¿µã€‚æ–°åŠ å¡æ˜¯å…¨çƒäººå£å¯†åº¦æœ€é«˜çš„å›½å®¶ä¹‹ä¸€ï¼Œåœ°é¢ç©ºé—´å¯¸åœŸå¯¸é‡‘ã€‚SkyPark å°†èŠ±å›­ã€æ³³æ± ã€è§‚æ™¯å°"ä¸¾"åˆ°200ç±³é«˜ç©ºï¼Œåˆ›é€ äº†ä¸€ä¸ªå±žäºŽæ‰€æœ‰äººçš„ç©ºä¸­å…¬å…±èŠ±å›­â€”â€”è¿™ä¸ä»…ä»…æ˜¯ä¸€ä¸ªé…’åº—çš„è±ªåŽè®¾æ–½ï¼Œæ›´æ˜¯å¯¹"åŸŽå¸‚å…¬å…±ç©ºé—´å¯ä»¥åœ¨å“ªé‡Œ"è¿™ä¸ªé—®é¢˜çš„æ¿€è¿›å›žç­”ã€‚

ä¸‰æ ‹å¡”æ¥¼çš„å½¢æ€åŒæ ·å……æ»¡æ·±æ„ã€‚å®ƒä»¬ä¸æ˜¯å¹³è¡ŒæŽ’åˆ—ï¼Œè€Œæ˜¯åƒä¸‰å¼ æ‰‘å…‹ç‰Œä»¥ä¸åŒè§’åº¦å€¾æ–œã€åœ¨é¡¶éƒ¨æ±‡èšã€‚è¿™ç§è®¾è®¡è®©æ¯æ ‹å¡”æ¥¼éƒ½æœ‰ç‹¬ç‰¹çš„æ™¯è§‚æœå‘ï¼ŒåŒæ—¶åœ¨åœ°é¢å±‚åˆ›é€ å‡ºå®½é˜”çš„å…¬å…±å…¥å£ç©ºé—´â€”â€”åƒä¸‰åªæ‰‹æŽŒå¼ å¼€ï¼Œæ¬¢è¿Žäººä»¬è¿›å…¥ã€‚

Marina Bay Sands çš„è£™æ¥¼æ˜¯ä¸€ä¸ªèŽ²èŠ±å½¢æ€çš„ ArtScience Museumâ€”â€”Safdie å°†æ–°åŠ å¡çš„çƒ­å¸¦è‡ªç„¶æ„è±¡èžå…¥äº†å»ºç­‘è¯­è¨€ï¼Œè®©è¿™åº§å»ºç­‘ä¸ä»…ä»…æ˜¯å›½é™…åŒ–çš„ï¼Œæ›´æ˜¯å±žäºŽè¿™ç‰‡åœŸåœ°çš„ã€‚`,

    legacy: `Marina Bay Sands å¯¹å»ºç­‘å’ŒåŸŽå¸‚è®¾è®¡çš„å½±å“ï¼š

**ç©ºä¸­åŸŽå¸‚çš„å…ˆé©±**ï¼šSkyPark è¯æ˜Žäº†åŸŽå¸‚å…¬å…±ç©ºé—´ä¸å¿…å±€é™äºŽåœ°é¢ã€‚è¿™ä¸ªç†å¿µå½±å“äº†åŽæ¥çš„ä¼—å¤šé¡¹ç›®ï¼ŒåŒ…æ‹¬çº½çº¦çš„ The Vesselã€é¦–å°”çš„ Seoullo 7017 ç©ºä¸­èŠ±å›­ã€ä»¥åŠ Safdie è‡ªå·±åŽæ¥çš„é‡åº†æ¥ç¦å£«"æ°´æ™¶è¿žå»Š"ã€‚

**ç»¼åˆä½“å»ºç­‘çš„æ–°èŒƒå¼**ï¼šMarina Bay Sands å°†é…’åº—ã€èµŒåœºã€ä¼šå±•ä¸­å¿ƒã€å‰§é™¢ã€åšç‰©é¦†ã€å•†åœºã€é¤é¥®èžä¸ºä¸€ä½“ï¼Œä½†ä¸æ˜¯ç®€å•çš„å †ç Œï¼Œè€Œæ˜¯é€šè¿‡å»ºç­‘å½¢æ€åˆ›é€ äº†ç©ºé—´çš„å™äº‹å’Œå±‚æ¬¡ã€‚å®ƒé‡æ–°å®šä¹‰äº†"ç»¼åˆä½“"ï¼ˆIntegrated Resortï¼‰çš„æ¦‚å¿µã€‚

**åŸŽå¸‚å¤©é™…çº¿çš„æ ‡å¿—**ï¼šå®ƒæˆä¸ºæ–°åŠ å¡çš„è§†è§‰åç‰‡ï¼Œè¯æ˜Žäº†ä¸€æ ‹å»ºç­‘å¯ä»¥å®šä¹‰ä¸€åº§åŸŽå¸‚çš„å½¢è±¡â€”â€”å°±åƒæ‚‰å°¼æ­Œå‰§é™¢ä¹‹äºŽæ‚‰å°¼ï¼Œè¿ªæ‹œå¸†èˆ¹é…’åº—ä¹‹äºŽè¿ªæ‹œã€‚

**ä¸œè¥¿æ–¹å»ºç­‘è¯­è¨€çš„èžåˆ**ï¼šSafdie å°†è¥¿æ–¹çš„å·¥ç¨‹ç†æ€§ä¸Žä¸œæ–¹çš„è‡ªç„¶æ„è±¡ç›¸ç»“åˆâ€”â€”èŽ²èŠ±ã€èŠ±å›­ã€æ°´â€”â€”åˆ›é€ äº†ä¸€ç§æ—¢çŽ°ä»£åˆæœ‰åœ°åŸŸæ–‡åŒ–æ ¹åŸºçš„å»ºç­‘è¯­è¨€ã€‚`,
    
    significance: `ä¸ºä»€ä¹ˆ Marina Bay Sands ä¸ä»…ä»…æ˜¯ä¸€åº§è±ªåŽé…’åº—ï¼Ÿ

å› ä¸º Moshe Safdie é€šè¿‡è¿™åº§å»ºç­‘å›žç­”äº†21ä¸–çºªåŸŽå¸‚è®¾è®¡æœ€ç´§è¿«çš„é—®é¢˜ï¼š**åœ¨å¯¸åœŸå¯¸é‡‘çš„åŸŽå¸‚é‡Œï¼Œå…¬å…±ç©ºé—´åŽ»å“ªäº†ï¼Ÿ**

ä¼ ç»Ÿç­”æ¡ˆæ˜¯å…¬å›­ã€å¹¿åœºã€æ»¨æ°´æ­¥é“â€”â€”è¿™äº›éƒ½éœ€è¦å®è´µçš„åœ°é¢ç©ºé—´ã€‚Safdie çš„ç­”æ¡ˆæ˜¯ï¼š**å‘ä¸Šã€‚**

SkyPark ä¸æ˜¯å±‹é¡¶èŠ±å›­çš„æ”¾å¤§ç‰ˆï¼Œå®ƒæ˜¯ä¸€ä¸ªå®£è¨€ï¼šåŸŽå¸‚çš„ç¬¬äº”ç«‹é¢ï¼ˆå±‹é¡¶ï¼‰å¯ä»¥åƒåœ°é¢ä¸€æ ·ä¸°å¯Œã€ä¸€æ ·å¼€æ”¾ã€ä¸€æ ·å±žäºŽå…¬ä¼—ã€‚

å½“ä½ ç«™åœ¨ SkyPark çš„æ— è¾¹é™…æ³³æ± è¾¹ç¼˜ï¼Œ200ç±³é«˜ç©ºï¼Œè„šä¸‹æ˜¯æ•´ä¸ªæ–°åŠ å¡çš„åŸŽå¸‚å¤©é™…çº¿â€”â€”ä½ ä¼šæ˜Žç™½ä¸ºä»€ä¹ˆå»ºç­‘ä¸åªæ˜¯å»ºé€ æˆ¿å­ï¼Œè€Œæ˜¯åˆ›é€ ä½“éªŒã€‚

**Safdie æŠŠä¸€è‰˜èˆ¹æ”¾åœ¨äº†å¤©ä¸Šã€‚è¿™æœ¬èº«å°±æ˜¯è®¾è®¡æœ€å¥½çš„éšå–»ï¼šæ‹’ç»åœ°å¿ƒå¼•åŠ›ï¼Œæ‹’ç»å¸¸è§„ï¼Œæ‹’ç»"ä¸å¯èƒ½"ã€‚**`,

    dateConnection_en: 'On February 6, 1819, Stamford Raffles of the British East India Company signed the Treaty of Singapore with the Sultan of Johor, marking the founding of modern Singapore. 191 years later in 2010, Marina Bay Sands rose from the same land â€” this building designed by Moshe Safdie became the ultimate symbol of Singapore\'s transformation from a colonial trading port to a global design capital.',
    
    designerBio_en: `Moshe Safdie (1938-) is an Israeli-Canadian architect and one of the most experimental architects of our time.

He studied under Louis Kahn (also featured in this calendar on February 20) at McGill University. His thesis project became the world-famous Habitat 67 â€” a housing complex of 354 prefabricated concrete boxes stacked at the 1967 Montreal World Expo. The project made the 28-year-old Safdie an overnight sensation and defined his lifelong design pursuit: **how to create dignified living spaces in high-density cities.**

From Habitat 67 to Jerusalem's Yad Vashem Holocaust Memorial, from Singapore's Jewel Changi Airport to Chongqing's Raffles City, Safdie's work spans the globe but always revolves around one core question: **how can architecture create meaning for public life?**`,
    
    story_en: `Marina Bay Sands' design began with a seemingly impossible idea: place a "ship" atop three 55-story towers.

This 340-meter-long SkyPark spans all three towers with a 67-meter cantilever â€” equivalent to suspending a football field 200 meters in the air. From an engineering standpoint, it borders on madness. Safdie's team collaborated with Arup engineers, using an innovative steel truss structural system to keep this 7,700-ton aerial platform stably "floating" above the city.

**But structure is merely means; design intent is the soul.**

Safdie explained that the SkyPark was inspired by the concept of "public space." Singapore is one of the world's most densely populated countries, where ground-level space is precious. The SkyPark lifts gardens, pools, and observation decks to 200 meters, creating an aerial public garden for everyone â€” not merely a luxury hotel amenity, but a radical answer to "where can urban public space exist?"

The three towers' forms are equally intentional. Rather than parallel alignment, they lean at different angles like three playing cards converging at the top. This design gives each tower unique views while creating expansive public entry spaces at ground level â€” like three open palms welcoming visitors.

The podium features a lotus-shaped ArtScience Museum â€” Safdie wove Singapore's tropical natural imagery into the architectural language, making this building not just international but belonging to this land.`,
    
    legacy_en: `Marina Bay Sands' influence on architecture and urban design:

**Pioneer of cities in the sky**: The SkyPark proved that urban public space needn't be confined to ground level. This concept influenced numerous subsequent projects including New York's The Vessel, Seoul's Seoullo 7017 Sky Garden, and Safdie's own Chongqing Raffles City "Crystal Skybridge."

**New paradigm for mixed-use complexes**: Marina Bay Sands integrates hotel, casino, convention center, theaters, museum, mall, and dining â€” not as simple aggregation but through architectural form that creates spatial narrative and hierarchy. It redefined the concept of "Integrated Resort."

**Defining a city's skyline**: It became Singapore's visual identity, proving one building can define a city's image â€” like the Sydney Opera House for Sydney, or the Burj Al Arab for Dubai.

**Fusion of Eastern and Western architectural language**: Safdie combined Western engineering rationality with Eastern natural imagery â€” lotus, gardens, water â€” creating an architectural language that is both modern and culturally rooted.`,
    
    significance_en: `Why is Marina Bay Sands more than just a luxury hotel?

Because Moshe Safdie used this building to answer the most urgent question in 21st-century urban design: **in cities where every square meter is precious, where does public space go?**

The traditional answer is parks, plazas, waterfront promenades â€” all requiring valuable ground-level real estate. Safdie's answer: **go up.**

The SkyPark isn't an oversized rooftop garden; it's a declaration that a city's fifth facade (the roof) can be as rich, as open, and as public as the ground.

When you stand at the edge of the SkyPark's infinity pool, 200 meters up, the entire Singapore skyline at your feet â€” you understand why architecture isn't just about constructing buildings, but creating experiences.

**Safdie put a ship in the sky. That itself is design's best metaphor: defying gravity, defying convention, defying "impossible."**`
  },

  {
    id: '28',
    date: '2026-01-31',
    imageUrl: '/the-daily-object/images/muji-cd-player.jpg',
    fullImageUrl: '/the-daily-object/images/full/muji-cd-player.jpg',
    title: 'MUJI å£æŒ‚å¼ CD æ’­æ”¾å™¨',
    title_en: 'MUJI Wall-Mounted CD Player',
    subtitle: 'æ·±æ¾¤ç›´äºº, 1999',
    subtitle_en: 'Naoto Fukasawa, 1999',
    category: 'industrial',
    designer: 'Naoto Fukasawa',
    year: '1999',

    dateConnection: '1æœˆ31æ—¥æ˜¯ä¸€å¹´ä¸­ç¬¬ä¸€ä¸ªæœˆçš„æœ€åŽä¸€å¤©â€”â€”ä¸€ä¸ª"ç»“æŸ"ä¸Ž"å¼€å§‹"äº¤æ±‡çš„æ—¶åˆ»ã€‚æ·±æ¾¤ç›´äººçš„ MUJI å£æŒ‚å¼ CD æ’­æ”¾å™¨æ°å¥½ä½“çŽ°äº†è¿™ç§è¾¹ç•Œæ¶ˆèžçš„å“²å­¦ï¼šå®ƒè®©"æ’­æ”¾éŸ³ä¹"è¿™ä¸ªåŠ¨ä½œçš„èµ·ç‚¹ä¸Žç»ˆç‚¹èžä¸ºä¸€ä½“â€”â€”ä½ æ‹‰ä¸‹ç”µæºçº¿ï¼ŒéŸ³ä¹å¼€å§‹ï¼›æ¾æ‰‹ï¼ŒéŸ³ä¹åœæ­¢ã€‚æ²¡æœ‰å¤æ‚çš„ç•Œé¢ï¼Œæ²¡æœ‰å¤šä½™çš„æ­¥éª¤ã€‚è®¾è®¡æ¶ˆèžåœ¨è¡Œä¸ºä¹‹ä¸­ã€‚',

    designerBio: `æ·±æ¾¤ç›´äººï¼ˆNaoto Fukasawaï¼Œ1956å¹´ç”Ÿï¼‰ï¼Œæ—¥æœ¬å·¥ä¸šè®¾è®¡å¸ˆï¼Œè¢« Bloomberg è¯„ä¸º"å…¨çƒæœ€å…·å½±å“åŠ›çš„è®¾è®¡å¸ˆä¹‹ä¸€"ã€‚

1980å¹´æ¯•ä¸šäºŽå¤šæ‘©ç¾Žæœ¯å¤§å­¦äº§å“è®¾è®¡ä¸“ä¸šï¼Œå…ˆåŽåœ¨ç²¾å·¥çˆ±æ™®ç”Ÿå’Œ IDEO å·¥ä½œã€‚2003å¹´åˆ›ç«‹ä¸ªäººäº‹åŠ¡æ‰€ï¼ŒåŒå¹´åˆ›åŠžå®¶ç”µå“ç‰Œ Â±0ã€‚è‡ª2002å¹´èµ·æ‹…ä»» MUJI è®¾è®¡é¡¾é—®å§”å‘˜ä¼šæˆå‘˜ï¼Œä¸»å¯¼äº†ä¼—å¤šç»å…¸äº§å“çš„è®¾è®¡ã€‚

ä»–æå‡ºäº†"æ— æ„è­˜ã®ãƒ‡ã‚¶ã‚¤ãƒ³"ï¼ˆWithout Thoughtï¼‰è®¾è®¡ç†è®ºâ€”â€”å¥½çš„è®¾è®¡ä¸éœ€è¦ç”¨æˆ·æ€è€ƒï¼Œå®ƒåº”è¯¥åƒå‘¼å¸ä¸€æ ·è‡ªç„¶ã€‚ä»–æ˜¯ 21_21 DESIGN SIGHTï¼ˆæ—¥æœ¬é¦–ä¸ªè®¾è®¡åšç‰©é¦†ï¼‰çš„è”åˆé¦†é•¿ï¼Œå¤šä»¶ä½œå“è¢« MoMA æ°¸ä¹…æ”¶è—ã€‚`,

    story: `1999å¹´ï¼Œæ·±æ¾¤ç›´äººä¸º MUJI è®¾è®¡äº†ä¸€æ¬¾å£æŒ‚å¼ CD æ’­æ”¾å™¨ã€‚å®ƒçœ‹èµ·æ¥å‡ ä¹Žä¸åƒä¸€å°ç”µå™¨â€”â€”ä¸€ä¸ªç™½è‰²æ–¹å½¢ç›’å­ï¼ŒæŒ‚åœ¨å¢™ä¸Šï¼ŒCD è£¸éœ²åœ¨å¤–é¢ï¼Œä¸‹æ–¹åž‚ç€ä¸€æ ¹æ‹‰ç»³ã€‚

**æ‹‰ä¸€ä¸‹ç»³å­ï¼ŒCD å¼€å§‹è½¬åŠ¨ï¼ŒéŸ³ä¹æµæ·Œè€Œå‡ºã€‚**

è¿™ä¸ªè®¾è®¡çš„å¤©æ‰ä¹‹å¤„åœ¨äºŽå®ƒçš„æ“ä½œæš—ç¤ºï¼šæ‹‰ç»³å¯åŠ¨çš„åŠ¨ä½œè®©äººè”æƒ³åˆ°è€å¼æŽ’é£Žæ‰‡æˆ–ç¯çš„æ‹‰çº¿å¼€å…³ã€‚æ·±æ¾¤ç›´äººæ²¡æœ‰å‘æ˜Žæ–°çš„äº¤äº’æ–¹å¼â€”â€”ä»–ä»Žäººä»¬å·²æœ‰çš„ç”Ÿæ´»è®°å¿†ä¸­æå–äº†ä¸€ä¸ªåŠ¨ä½œï¼Œå°†å®ƒå«æŽ¥åˆ°äº†å®Œå…¨ä¸åŒçš„äº§å“ä¸Šã€‚

**è¿™å°±æ˜¯"æ— æ„è¯†è®¾è®¡"çš„ç²¾é«“ã€‚**

è¿™å° CD æ’­æ”¾å™¨æ²¡æœ‰æ˜¾ç¤ºå±ï¼Œæ²¡æœ‰å¤æ‚çš„æŒ‰é’®é¢æ¿ï¼Œç”šè‡³æ²¡æœ‰ä¼ ç»ŸéŸ³å“è®¾å¤‡çš„"å­˜åœ¨æ„Ÿ"ã€‚å®ƒæŒ‚åœ¨å¢™ä¸Šï¼Œåƒä¸€ä»¶è£…ç½®è‰ºæœ¯ã€‚CD æ—‹è½¬æ—¶ï¼Œä½ èƒ½çœ‹åˆ°å®ƒåœ¨è½¬åŠ¨â€”â€”è®¾è®¡æŠŠ"æ’­æ”¾"è¿™ä¸ªæŠ½è±¡åŠ¨ä½œå˜æˆäº†ä¸€ä¸ªå¯è§çš„ã€è¯—æ„çš„è¿‡ç¨‹ã€‚

è¿™ä¸ä»…ä»…æ˜¯ç®€çº¦ã€‚ç®€çº¦æ˜¯åšå‡æ³•ï¼Œä½†æ·±æ¾¤ç›´äººåšçš„æ˜¯**ç¿»è¯‘**â€”â€”æŠŠå¤æ‚çš„æŠ€æœ¯ç¿»è¯‘æˆäººäººéƒ½æ‡‚çš„æ—¥å¸¸è¯­è¨€ã€‚ä¸€æ ¹ç»³å­ï¼Œå°±æ˜¯å…¨éƒ¨çš„ç”¨æˆ·ç•Œé¢ã€‚

1999å¹´é—®ä¸–ä»¥æ¥ï¼Œè¿™å° CD æ’­æ”¾å™¨ä»Žæœªåœäº§ï¼Œæˆä¸º MUJI æœ€å…·æ ‡å¿—æ€§çš„äº§å“ä¹‹ä¸€ã€‚å®ƒè¢« MoMA æ°¸ä¹…æ”¶è—ï¼Œè¢«æ— æ•°è®¾è®¡æ•™ç§‘ä¹¦å¼•ç”¨ï¼Œè¢«å…¨ä¸–ç•Œçš„è®¾è®¡å¸ˆè§†ä¸º"å°‘å³æ˜¯å¤š"ç†å¿µçš„ç»ˆæžèŒƒä¾‹ã€‚

**æ·±æ¾¤ç›´äººè¯æ˜Žäº†ï¼šæœ€å¥½çš„è®¾è®¡ä¸æ˜¯è®©äººæƒŠå¹"è¿™è®¾è®¡çœŸæ£’"ï¼Œè€Œæ˜¯è®©äººè§‰å¾—"æœ¬æ¥å°±åº”è¯¥æ˜¯è¿™æ ·"ã€‚**`,

    legacy: `â€¢ MoMA æ°¸ä¹…æ”¶è—å“ï¼šä¸Ž iPodã€æ¤…å­ç­‰å¹¶åˆ—ä¸º20ä¸–çºªæœ«æœ€é‡è¦çš„å·¥ä¸šè®¾è®¡ä½œå“
â€¢ MUJI è®¾è®¡å“²å­¦çš„è±¡å¾ï¼šè¿™å° CD æ’­æ”¾å™¨å®šä¹‰äº† MUJI"å¤Ÿç”¨å°±å¥½"çš„æžç®€ç¾Žå­¦
â€¢ "æ— æ„è¯†è®¾è®¡"ç†è®ºçš„ç»å…¸æ¡ˆä¾‹ï¼šæ·±æ¾¤ç›´äººçš„è®¾è®¡å“²å­¦å½±å“äº†æ•´æ•´ä¸€ä»£äº§å“è®¾è®¡å¸ˆ
â€¢ é•¿é’äº§å“ï¼š1999å¹´è‡³ä»Šä»Žæœªåœäº§ï¼Œè¯æ˜Žäº†å¥½è®¾è®¡è¶…è¶Šæ½®æµ`,

    significance: `åœ¨ä¸€ä¸ªè¿½æ±‚æ›´å¤šåŠŸèƒ½ã€æ›´å¤§å±å¹•ã€æ›´å¤æ‚äº¤äº’çš„æ—¶ä»£ï¼Œæ·±æ¾¤ç›´äººç”¨ä¸€å° CD æ’­æ”¾å™¨è¯æ˜Žäº†ç›¸åçš„é“ç†ï¼š**æœ€æ·±åˆ»çš„åˆ›æ–°æ˜¯è®©äº‹ç‰©å›žå½’æœ¬è´¨ã€‚**

ä¸€æ ¹ç»³å­ï¼Œä¸€å¼  CDï¼Œä¸€é¢ç™½å¢™ã€‚æ²¡æœ‰è¯´æ˜Žä¹¦ï¼Œä¸éœ€è¦å­¦ä¹ ï¼Œä¸‰å²å°å­©éƒ½çŸ¥é“è¯¥æ€Žä¹ˆåšâ€”â€”æ‹‰ä¸€ä¸‹ã€‚

è¿™æ˜¯å·¥ä¸šè®¾è®¡çš„è‡³é«˜å¢ƒç•Œï¼šå½“æŠ€æœ¯å˜å¾—è¶³å¤Ÿæˆç†Ÿæ—¶ï¼Œè®¾è®¡çš„ä»»åŠ¡ä¸æ˜¯å±•ç¤ºæŠ€æœ¯ï¼Œè€Œæ˜¯è®©æŠ€æœ¯æ¶ˆå¤±ã€‚æ·±æ¾¤ç›´äººç§°ä¹‹ä¸º"è®¾è®¡æº¶è§£åœ¨è¡Œä¸ºä¸­"ã€‚

è¿™ä¹Ÿè®¸æ˜¯20ä¸–çºªæœ«æœ€å®‰é™çš„è®¾è®¡é©å‘½â€”â€”ä¸æ˜¯iPhoneå¼çš„é¢ è¦†ï¼Œè€Œæ˜¯ä¸€ç§æ¸©æŸ”çš„æé†’ï¼š**å¥½è®¾è®¡ä¸å«åš£ï¼Œå®ƒåªæ˜¯åœ¨é‚£é‡Œï¼Œç­‰ä½ ä¼¸æ‰‹ã€‚**`,

    dateConnection_en: 'January 31 marks the last day of the year\'s first month â€” a moment where "ending" meets "beginning." Naoto Fukasawa\'s MUJI Wall-Mounted CD Player embodies this philosophy of dissolving boundaries: it merges the start and end of "playing music" into a single gesture â€” pull the cord, music begins; let go, music stops. No complex interface, no extra steps. Design dissolves into behavior.',

    designerBio_en: `Naoto Fukasawa (born 1956) is a Japanese industrial designer described by Bloomberg as "one of the world's most influential designers."

He graduated from Tama Art University in 1980, then worked at Seiko Epson and IDEO before founding his own studio in 2003. That same year he launched Â±0, a household electronics brand. Since 2002, he has served on MUJI's advisory board, leading the design of numerous iconic products.

He coined the concept of "Without Thought" design â€” good design shouldn't require the user to think; it should be as natural as breathing. He co-directs 21_21 DESIGN SIGHT, Japan's first design museum, and multiple works are in MoMA's permanent collection.`,

    story_en: `In 1999, Naoto Fukasawa designed a wall-mounted CD player for MUJI. It barely looks like an electronic device â€” a white square box mounted on the wall, with the CD exposed and a pull cord hanging below.

**Pull the cord. The CD starts spinning. Music flows.**

The genius of this design lies in its operational suggestion: the pull-cord activation evokes old-fashioned ventilation fan or lamp pull switches. Fukasawa didn't invent a new interaction â€” he extracted a gesture from people's existing life memories and grafted it onto an entirely different product.

**This is the essence of "Without Thought" design.**

The CD player has no display, no complex button panel, not even the typical "presence" of audio equipment. Hung on a wall, it resembles an art installation. When the CD spins, you can see it rotating â€” the design transforms the abstract act of "playing" into a visible, poetic process.

This isn't mere minimalism. Minimalism is subtraction, but Fukasawa's work is **translation** â€” converting complex technology into everyday language everyone understands. One cord: that's the entire user interface.

Since its 1999 debut, this CD player has never gone out of production, becoming one of MUJI's most iconic products. It's in MoMA's permanent collection, cited in countless design textbooks, and regarded by designers worldwide as the ultimate example of "less is more."

**Fukasawa proved that the best design doesn't make people exclaim "what great design!" â€” it makes them feel "of course, it should be this way."**`,

    legacy_en: `â€¢ MoMA permanent collection: Listed alongside the iPod and iconic chairs as one of the most important industrial designs of the late 20th century
â€¢ Symbol of MUJI's design philosophy: This CD player defined MUJI's "just enough" minimalist aesthetic
â€¢ Classic case of "Without Thought" design theory: Fukasawa's philosophy influenced an entire generation of product designers
â€¢ Evergreen product: In continuous production since 1999, proving good design transcends trends`,

    significance_en: `In an era chasing more features, bigger screens, and more complex interactions, Fukasawa used a CD player to prove the opposite: **the most profound innovation is returning things to their essence.**

One cord, one CD, one white wall. No manual, no learning curve â€” a three-year-old knows what to do: pull.

This is industrial design's highest aspiration: when technology matures enough, design's task isn't to showcase technology, but to make it disappear. Fukasawa calls this "design dissolving into behavior."

Perhaps the quietest design revolution of the late 20th century â€” not an iPhone-style disruption, but a gentle reminder: **good design doesn't shout. It's simply there, waiting for your hand.**`
  },

  {
    id: '25',
    date: '2026-02-01',
    imageUrl: '/the-daily-object/images/rolleiflex-camera.jpg',
    fullImageUrl: '/the-daily-object/images/full/rolleiflex-camera.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/rolleiflex-camera.jpg',
    title: 'Rolleiflex åŒåç›¸æœº',
    title_en: 'Rolleiflex TLR Camera',
    subtitle: 'Franke & Heidecke, 1929',
    category: 'art',
    designer: 'Vivian Maier',
    year: '1929',

    dateConnection: '1926å¹´2æœˆ1æ—¥ï¼ŒVivian Maier å‡ºç”ŸäºŽçº½çº¦ã€‚å¥¹ä¸€ç”Ÿä»¥ä¿å§†ä¸ºä¸šï¼Œå´ç”¨ä¸€å° Rolleiflex åŒåç›¸æœºç§˜å¯†æ‹æ‘„äº†è¶…è¿‡15ä¸‡å¼ è¡—å¤´ç…§ç‰‡ï¼Œæ­»åŽæ‰è¢«ä¸–äººå‘çŽ°ï¼Œæˆä¸º20ä¸–çºªæœ€ä¼Ÿå¤§çš„è¡—å¤´æ‘„å½±å¸ˆä¹‹ä¸€ã€‚Rolleiflexâ€”â€”è¿™å°å¾·å›½å·¥ä¸šè®¾è®¡çš„æ°ä½œâ€”â€”æ˜¯å¥¹è§‚å¯Ÿä¸–ç•Œçš„çœ¼ç›ã€‚',

    designerBio: `Vivian Maierï¼ˆ1926-2009ï¼‰ï¼Œå‡ºç”ŸäºŽçº½çº¦ï¼Œåœ¨æ³•å›½ä¹¡ä¸‹åº¦è¿‡éƒ¨åˆ†ç«¥å¹´ï¼Œ1951å¹´å›žåˆ°ç¾Žå›½åŽä¸€ç›´åšä¿å§†ï¼Œå…ˆåŽåœ¨çº½çº¦å’ŒèŠåŠ å“¥çš„å®¶åº­é‡Œç…§é¡¾å­©å­ã€‚

æ²¡äººçŸ¥é“å¥¹æ˜¯æ‘„å½±å¸ˆã€‚å¥¹ä»Žä¸å±•ç¤ºè‡ªå·±çš„ç…§ç‰‡ï¼Œç”šè‡³å¤§é‡åº•ç‰‡ä»Žæœªå†²æ´—ã€‚å¥¹ç”¨ä¸€å° Rolleiflex 2.8Câ€”â€”ä¸€å°1950å¹´ä»£çš„å¾·å›½åŒé•œå¤´åå…‰ç›¸æœºâ€”â€”åœ¨è¡—å¤´æ‚„æ‚„æ•æ‰äººé—´ç™¾æ€ã€‚

Rolleiflex çš„è®¾è®¡å¯¹å¥¹è‡³å…³é‡è¦ï¼šåŒåç›¸æœºçš„å–æ™¯æ–¹å¼æ˜¯**è…°å¹³å–æ™¯**â€”â€”æ‘„å½±å¸ˆä½Žå¤´çœ‹å–æ™¯å™¨ï¼Œè€Œä¸æ˜¯æŠŠç›¸æœºä¸¾åˆ°çœ¼å‰ã€‚è¿™æ„å‘³ç€ Maier å¯ä»¥åœ¨ä¸å¼•äººæ³¨æ„çš„æƒ…å†µä¸‹æ‹æ‘„ï¼Œè¢«æ‘„è€…ç”šè‡³ä¸çŸ¥é“è‡ªå·±è¢«æ‹äº†ã€‚è¿™å°ç›¸æœºçš„è®¾è®¡ï¼Œæˆå°±äº†å¥¹ç‹¬ç‰¹çš„è§†è§’ã€‚`,

    story: `2007å¹´ï¼ŒèŠåŠ å“¥ä¸€ä¸ªå« John Maloof çš„æˆ¿äº§ç»çºªäººåœ¨ä¸€åœºå‚¨ç‰©æŸœæ‹å–ä¼šä¸ŠèŠ±äº†380ç¾Žå…ƒï¼Œä¹°ä¸‹äº†ä¸€å †æ—§ç®±å­ã€‚ç®±å­é‡Œè£…ç€è¶…è¿‡10ä¸‡å¼ åº•ç‰‡ã€æ•°åƒå¼ ç…§ç‰‡å’Œæœªå†²æ´—çš„èƒ¶å·ã€‚

ä»–ä¸çŸ¥é“è¿™äº›ä¸œè¥¿å±žäºŽè°ã€‚

èŠ±äº†å‡ å¹´æ—¶é—´è¿½æº¯ï¼Œä»–æ‰¾åˆ°äº†ä¸€ä¸ªåå­—ï¼šVivian Maierï¼Œä¸€ä¸ªåˆšåˆšåœ¨å…»è€é™¢åŽ»ä¸–çš„è€å¤ªå¤ªã€‚å¥¹ä¸€è¾ˆå­åšä¿å§†ï¼Œç‹¬å±…ï¼Œæ²¡æœ‰äº²å¯†çš„æœ‹å‹ï¼Œå‡ ä¹Žæ²¡äººäº†è§£å¥¹çš„å†…å¿ƒä¸–ç•Œã€‚

ä½†é‚£äº›ç…§ç‰‡éœ‡æƒŠäº†æ‘„å½±ç•Œã€‚

Maier çš„è¡—å¤´æ‘„å½±æœ‰ä¸€ç§ç½•è§çš„å“è´¨ï¼š**å¥¹åŒæ—¶æ˜¯å±€å¤–äººå’Œå‚ä¸Žè€…ã€‚** ä½œä¸ºä¸€ä¸ªæ³•è£”ç¾Žå›½äººã€ä¸€ä¸ªç»ˆèº«æœªå©šçš„ä¿å§†ã€ä¸€ä¸ªåˆ»æ„ä¿æŒè·ç¦»çš„è§‚å¯Ÿè€…ï¼Œå¥¹ç”¨ Rolleiflex æ•æ‰åˆ°äº†1950-80å¹´ä»£èŠåŠ å“¥å’Œçº½çº¦è¡—å¤´æœ€çœŸå®žçš„çž¬é—´â€”â€”é‚£äº›å¯Œäººä¸ä¼šæ³¨æ„ã€ç©·äººæ— æš‡é¡¾åŠçš„æ—¥å¸¸è¯—æ„ã€‚

**ä¸ºä»€ä¹ˆæ˜¯ Rolleiflexï¼Ÿ** è¿™å°ç”±å¾·å›½ Franke & Heidecke å…¬å¸äºŽ1929å¹´è®¾è®¡çš„ç›¸æœºï¼Œæ˜¯å·¥ä¸šè®¾è®¡å²ä¸Šçš„ç»å…¸ã€‚å®ƒçš„åŒé•œå¤´ç³»ç»Ÿâ€”â€”ä¸Šæ–¹å–æ™¯é•œå¤´ã€ä¸‹æ–¹æ‹æ‘„é•œå¤´â€”â€”åˆ›é€ äº†ä¸€ç§å…¨æ–°çš„æ‘„å½±ä½“éªŒã€‚6x6åŽ˜ç±³çš„æ–¹ç”»å¹…åº•ç‰‡ï¼Œäº§å‡ºçš„å½±åƒæœ‰ä¸€ç§ç‹¬ç‰¹çš„æ²‰é™æ„Ÿã€‚è€Œå®ƒå‡ ä¹Žæ— å£°çš„å¿«é—¨ï¼Œè®©è¡—å¤´æ‘„å½±å˜å¾—åƒå‘¼å¸ä¸€æ ·è‡ªç„¶ã€‚

Maier é€‰æ‹© Rolleiflex ä¸æ˜¯å¶ç„¶ã€‚è¿™å°ç›¸æœºçš„è®¾è®¡å“²å­¦â€”â€”**è®©å·¥å…·æ¶ˆå¤±ï¼Œè®©çœ¼ç›æŽ¥ç®¡**â€”â€”å®Œç¾Žå¥‘åˆäº†å¥¹ä½œä¸ºéšå½¢è§‚å¯Ÿè€…çš„èº«ä»½ã€‚`,

    legacy: `â€¢ æ‘„å½±æ°‘ä¸»åŒ–çš„éšå–»ï¼šMaier è¯æ˜Žäº†ä¼Ÿå¤§çš„è‰ºæœ¯ä¸éœ€è¦ç”»å»Šã€ä¸éœ€è¦MFAå­¦ä½ã€ä¸éœ€è¦ç¤¾äº¤ç½‘ç»œâ€”â€”åªéœ€è¦ä¸€åŒçœ¼ç›å’Œä¸€å°å¥½ç›¸æœº
â€¢ Rolleiflex è®¾è®¡é—äº§ï¼šè…°å¹³å–æ™¯çš„è®¾è®¡å½±å“äº†åŽæ¥æ‰€æœ‰çš„ä¸­ç”»å¹…ç›¸æœºï¼Œè‡³ä»Šä»æ˜¯è¡—å¤´æ‘„å½±å¸ˆçš„é€‰æ‹©
â€¢ "è¢«å‘çŽ°çš„å¤©æ‰"çŽ°è±¡ï¼šMaier çš„æ•…äº‹å¼•å‘äº†å…³äºŽè‰ºæœ¯ã€åˆ›ä½œåŠ¨æœºå’Œé—äº§çš„æ·±å±‚è®¨è®ºâ€”â€”å¦‚æžœå¥¹ä¸æƒ³è®©äººçœ‹åˆ°è¿™äº›ç…§ç‰‡ï¼Œæˆ‘ä»¬çœ‹åˆ°å®ƒä»¬æ˜¯å¦é“å¾·ï¼Ÿ
â€¢ å·¥å…·ä¸Žåˆ›ä½œè€…çš„å…³ç³»ï¼šRolleiflex çš„è®¾è®¡ä¸ä»…æ˜¯å·¥ç¨‹æˆå°±ï¼Œå®ƒå¡‘é€ äº†ä¸€ç§è§‚çœ‹æ–¹å¼ï¼Œè¿›è€Œå¡‘é€ äº†ä¸€ç§è‰ºæœ¯é£Žæ ¼`,

    significance: `Vivian Maier å’Œå¥¹çš„ Rolleiflex æ˜¯è®¾è®¡å²ä¸Šæœ€åŠ¨äººçš„æ•…äº‹ä¹‹ä¸€ï¼š**ä¸€ä»¶è®¾è®¡ç²¾è‰¯çš„å·¥å…·ï¼Œå¦‚ä½•æˆä¸ºä¸€ä¸ªäººè§‚çœ‹ä¸–ç•Œçš„æ–¹å¼ã€‚**

Rolleiflex çš„è…°å¹³å–æ™¯è®¾è®¡ä¸æ˜¯å™±å¤´â€”â€”å®ƒä»Žæ ¹æœ¬ä¸Šæ”¹å˜äº†æ‘„å½±å¸ˆä¸Žä¸–ç•Œçš„å…³ç³»ã€‚å½“ä½ ä½Žå¤´çœ‹å–æ™¯å™¨æ—¶ï¼Œä½ çš„å§¿æ€æ˜¯è°¦é€Šçš„ã€å†…çœçš„ï¼Œä½ åœ¨è§‚å¯Ÿè€Œä¸æ˜¯ä¾µå…¥ã€‚è¿™æ­£æ˜¯ Maier çš„æ‘„å½±å“²å­¦ã€‚

15ä¸‡å¼ ç…§ç‰‡ï¼Œä¸€ä¸ªäººçœ‹ã€‚æ²¡æœ‰Instagramï¼Œæ²¡æœ‰ç‚¹èµžï¼Œæ²¡æœ‰å±•è§ˆã€‚çº¯ç²¹çš„åˆ›ä½œï¼Œçº¯ç²¹çš„è§‚çœ‹ã€‚

è¿™ä¹Ÿè®¸æ˜¯å¯¹"ä¸ºä»€ä¹ˆè®¾è®¡é‡è¦"æœ€å¥½çš„å›žç­”ï¼šå› ä¸ºä¸€å°è®¾è®¡ç²¾è‰¯çš„ç›¸æœºï¼Œè®©ä¸€ä¸ªæ™®é€šä¿å§†å˜æˆäº†å¤§å¸ˆã€‚`,

    dateConnection_en: 'On February 1, 1926, Vivian Maier was born in New York City. She spent her life working as a nanny, yet secretly captured over 150,000 street photographs with a Rolleiflex twin-lens reflex camera, only discovered after her death, making her one of the greatest street photographers of the 20th century. The Rolleiflex â€” a masterpiece of German industrial design â€” was her eye on the world.',

    designerBio_en: `Vivian Maier (1926-2009) was born in New York, spent part of her childhood in rural France, and after returning to America in 1951, worked as a nanny for the rest of her life, caring for children in families across New York and Chicago.

Nobody knew she was a photographer. She never showed her pictures; vast numbers of negatives were never even developed. With a Rolleiflex 2.8C â€” a 1950s German twin-lens reflex camera â€” she quietly captured the human condition on the streets.

The Rolleiflex's design was crucial to her practice: the twin-lens reflex uses **waist-level viewing** â€” the photographer looks down into the viewfinder rather than raising the camera to eye level. This meant Maier could shoot without drawing attention; her subjects often didn't know they were being photographed. The camera's design enabled her unique perspective.`,

    story_en: `In 2007, a Chicago real estate agent named John Maloof paid $380 at a storage locker auction for a pile of old boxes. Inside were over 100,000 negatives, thousands of prints, and undeveloped rolls of film.

He had no idea who they belonged to.

After years of tracing, he found a name: Vivian Maier, an elderly woman who had just died in a nursing home. She had been a nanny her entire life, lived alone, had no close friends, and almost no one understood her inner world.

But those photographs stunned the photography world.

Maier's street photography possessed a rare quality: **she was simultaneously an outsider and a participant.** As a French-American, a lifelong unmarried nanny, a deliberate observer who kept her distance, she used her Rolleiflex to capture the most authentic moments on the streets of 1950s-80s Chicago and New York â€” the everyday poetry that the rich wouldn't notice and the poor couldn't afford to contemplate.

**Why the Rolleiflex?** This camera, designed by Germany's Franke & Heidecke company in 1929, is a classic of industrial design history. Its twin-lens system â€” viewing lens on top, taking lens below â€” created an entirely new photographic experience. The 6x6cm square format negatives produced images with a unique sense of stillness. And its nearly silent shutter made street photography as natural as breathing.

Maier's choice of the Rolleiflex was no accident. The camera's design philosophy â€” **let the tool disappear, let the eye take over** â€” perfectly matched her identity as an invisible observer.`,

    legacy_en: `â€¢ Metaphor for democratized photography: Maier proved that great art doesn't need galleries, MFA degrees, or social networks â€” just a pair of eyes and a good camera
â€¢ Rolleiflex design legacy: The waist-level viewing design influenced all subsequent medium-format cameras and remains a choice for street photographers today
â€¢ The "discovered genius" phenomenon: Maier's story sparked deep discussions about art, creative motivation, and legacy â€” if she didn't want these photos seen, is it ethical that we see them?
â€¢ The relationship between tool and creator: The Rolleiflex's design wasn't just an engineering achievement; it shaped a way of seeing, which in turn shaped an artistic style`,

    significance_en: `Vivian Maier and her Rolleiflex represent one of the most moving stories in design history: **how a beautifully designed tool became one person's way of seeing the world.**

The Rolleiflex's waist-level viewfinder wasn't a gimmick â€” it fundamentally changed the photographer's relationship with the world. When you look down into the viewfinder, your posture is humble, introspective; you're observing, not intruding. This was exactly Maier's photographic philosophy.

150,000 photographs, seen by one person. No Instagram, no likes, no exhibitions. Pure creation, pure seeing.

This may be the best answer to "why design matters": because a beautifully designed camera turned an ordinary nanny into a master.`
  },

  {
    id: '26',
    date: '2026-02-02',
    imageUrl: '/the-daily-object/images/grand-central-terminal.jpg',
    fullImageUrl: '/the-daily-object/images/full/grand-central-terminal.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/grand-central-terminal.jpg',
    title: 'Grand Central Terminal',
    subtitle: 'Reed & Stem / Warren & Wetmore, 1913',
    category: 'architecture',
    designer: 'Reed & Stem, Warren & Wetmore',
    year: '1913',

    dateConnection: '1913å¹´2æœˆ2æ—¥ï¼Œçº½çº¦ä¸­å¤®è½¦ç«™ï¼ˆGrand Central Terminalï¼‰æ­£å¼å¯ç”¨ã€‚è¿™åº§å¸ƒæ‰Žï¼ˆBeaux-Artsï¼‰é£Žæ ¼çš„å»ºç­‘æ°ä½œä¸ä»…é‡æ–°å®šä¹‰äº†äº¤é€šæž¢çº½çš„è®¾è®¡ï¼Œæ›´åˆ›é€ äº†"åŸŽå¸‚å®¢åŽ…"çš„å…¨æ–°æ¦‚å¿µã€‚',

    designerBio: `Reed & Stem å’Œ Warren & Wetmoreï¼Œä¸¤å®¶å»ºç­‘äº‹åŠ¡æ‰€çš„åˆä½œç»“æ™¶ã€‚

Charles Reed å’Œ Allen Stem è´Ÿè´£åŠŸèƒ½å¸ƒå±€â€”â€”ä»–ä»¬çš„å¤©æ‰åœ¨äºŽå‘æ˜Žäº†çŽ¯å½¢é«˜æž¶é“è·¯ç³»ç»Ÿå’Œå¤šå±‚äº¤é€šåˆ†æµæ–¹æ¡ˆã€‚Whitney Warren å’Œ Charles Wetmore åˆ™è´Ÿè´£å»ºç­‘å¤–è§‚å’Œå®¤å†…è®¾è®¡ï¼Œå°†å¸ƒè‰ºè‰ºæœ¯é£Žæ ¼çš„å®ä¼Ÿæ³¨å…¥æ¯ä¸€ä¸ªç»†èŠ‚ã€‚

è¿™ç§"åŠŸèƒ½å»ºç­‘å¸ˆ+ç¾Žå­¦å»ºç­‘å¸ˆ"çš„æ­é…åœ¨å½“æ—¶å¹¶ä¸å¸¸è§ï¼Œä½†æ­£æ˜¯è¿™ç§å¼ åŠ›é€ å°±äº† Grand Central çš„ä¼Ÿå¤§ï¼š**å®ƒæ—¢æ˜¯ä¸€å°å®Œç¾Žçš„äº¤é€šæœºå™¨ï¼Œåˆæ˜¯ä¸€åº§è®©äººé©»è¶³ä»°æœ›çš„æ®¿å ‚ã€‚**`,

    story: `1902å¹´ï¼Œä¸€åœºç«è½¦ç›¸æ’žäº‹æ•…è®©çº½çº¦å¸‚ç¦æ­¢è’¸æ±½æœºè½¦è¿›å…¥æ›¼å“ˆé¡¿ã€‚è€è½¦ç«™å¿…é¡»é‡å»ºï¼Œè€Œä¸”åªèƒ½ä½¿ç”¨ç”µåŠ›æœºè½¦ã€‚

é“è·¯å¤§äº¨ Cornelius Vanderbilt çš„ç»§æ‰¿äººä»¬å†³å®šï¼šæ—¢ç„¶è¦é‡å»ºï¼Œå°±å»ºä¸€åº§å‰æ‰€æœªæœ‰çš„è½¦ç«™ã€‚

Reed & Stem èµ¢å¾—äº†è®¾è®¡ç«žèµ›ã€‚ä»–ä»¬çš„æ–¹æ¡ˆé©å‘½æ€§åœ°å°†é“è½¨æ²‰å…¥åœ°ä¸‹ï¼Œåœ°é¢é‡Šæ”¾å‡ºæ¥çš„ç©ºé—´å˜æˆäº† Park Avenue ä¸Šæ–¹ä»·å€¼è¿žåŸŽçš„åœ°äº§ã€‚**è¿™ä¸åªæ˜¯å»ºä¸€åº§è½¦ç«™â€”â€”è¿™æ˜¯é‡æ–°è®¾è®¡ä¸€æ•´ç‰‡åŸŽå¸‚ã€‚**

Warren & Wetmore éšåŽåŠ å…¥ï¼Œè´Ÿè´£å»ºç­‘çš„"é¢å­å·¥ç¨‹"ã€‚ä»–ä»¬è®¾è®¡äº†é‚£ä¸ªä»¤äººçª’æ¯çš„ä¸»å¤§åŽ…ï¼šé«˜è¾¾38ç±³çš„æ‹±å½¢å¤©èŠ±æ¿ä¸Šï¼Œç”»ç€2,500é¢—æ˜Ÿæ˜Ÿç»„æˆçš„æ˜Ÿåº§å›¾ï¼ˆè™½ç„¶ç”»åäº†ï¼‰ã€‚

1913å¹´2æœˆ2æ—¥å¼€å¹•å½“å¤©ï¼Œ15ä¸‡äººæ¶Œå…¥å‚è§‚ã€‚ä»–ä»¬ä»°æœ›æ˜Ÿç©ºèˆ¬çš„å¤©èŠ±æ¿ï¼Œç©¿è¡Œåœ¨å…‰çº¿ä»Žå·¨å¤§çš„æ‹±çª—å€¾æ³»è€Œä¸‹çš„å¤§åŽ…ä¸­ï¼Œæ„Ÿå—åˆ°äº†ä¸€ç§æ­¤å‰åªå±žäºŽæ•™å ‚çš„åº„ä¸¥ã€‚

**ä½†è¿™ä¸æ˜¯æ•™å ‚ï¼Œè¿™æ˜¯ç«è½¦ç«™ã€‚** Grand Central è¯æ˜Žäº†å…¬å…±äº¤é€šç©ºé—´å¯ä»¥æ‹¥æœ‰å¤§æ•™å ‚çº§åˆ«çš„å°Šä¸¥ã€‚`,

    legacy: `â€¢ åŸŽå¸‚è®¾è®¡å…¸èŒƒï¼šå°†é“è½¨æ²‰å…¥åœ°ä¸‹ã€é‡Šæ”¾åœ°é¢ç©ºé—´çš„åšæ³•ç›´æŽ¥å‚¬ç”Ÿäº† Park Avenue çš„ç¹è£ï¼Œå½±å“äº†å…¨çƒåŸŽå¸‚çš„TODï¼ˆäº¤é€šå¯¼å‘å¼€å‘ï¼‰ç†å¿µ
â€¢ äº¤é€šå»ºç­‘æ ‡æ†ï¼šå¤šå±‚äº¤é€šåˆ†æµã€çŽ¯å½¢è½¦é“ç³»ç»Ÿè¢«å…¨çƒäº¤é€šæž¢çº½å€Ÿé‰´
â€¢ åŽ†å²ä¿æŠ¤è¿åŠ¨ï¼š1960å¹´ä»£é¢ä¸´æ‹†é™¤å¨èƒï¼ŒJackie Kennedy é¢†å¯¼çš„ä¿æŠ¤è¿åŠ¨æ‹¯æ•‘äº†å®ƒï¼Œå‚¬ç”Ÿäº†çº½çº¦åœ°æ ‡ä¿æŠ¤æ³•
â€¢ æ–‡åŒ–åœ°æ ‡ï¼šæ¯å¹´2100ä¸‡æ¸¸å®¢ï¼Œæ˜¯çº½çº¦ç¬¬å…­å¤§æ—…æ¸¸æ™¯ç‚¹ï¼ŒApple Store å…¥é©»æ›´èµ‹äºˆå®ƒæ–°çš„å½“ä»£æ„ä¹‰`,

    significance: `Grand Central Terminal å›žç­”äº†ä¸€ä¸ªæ ¹æœ¬é—®é¢˜ï¼š**å…¬å…±ç©ºé—´åº”è¯¥ç»™äººä»€ä¹ˆæ„Ÿå—ï¼Ÿ**

åœ¨ä¸€ä¸ªäººäººåŒ†å¿™èµ¶è·¯çš„ç«è½¦ç«™é‡Œï¼Œå»ºç­‘å¸ˆä»¬é€‰æ‹©è®©ä½ åœä¸‹æ¥â€”â€”æŠ¬å¤´çœ‹é‚£ç‰‡äººé€ æ˜Ÿç©ºï¼Œæ„Ÿå—å…‰çº¿åœ¨å¤§ç†çŸ³åœ°é¢ä¸Šçš„æµåŠ¨ï¼Œå¬å›žå£°åœ¨ç©¹é¡¶ä¸‹å›žè¡ã€‚

è¿™ç§"åœ¨åŠŸèƒ½ç©ºé—´ä¸­åˆ›é€ ä»ªå¼æ„Ÿ"çš„è®¾è®¡å“²å­¦ï¼Œä»Ž Grand Central ä¸€ç›´å»¶ç»­åˆ°ä»Šå¤©çš„æœºåœºèˆªç«™æ¥¼ã€åœ°é“ç«™ã€é«˜é“ç«™ã€‚

**ä¼Ÿå¤§çš„äº¤é€šå»ºç­‘ä¸åªæ˜¯è®©ä½ é€šè¿‡ï¼Œå®ƒè®©ä½ åˆ°è¾¾ã€‚**`,

    dateConnection_en: 'On February 2, 1913, Grand Central Terminal officially opened in New York City. This Beaux-Arts masterpiece didn\'t just redefine transportation hub design â€” it created an entirely new concept: the "urban living room."',

    designerBio_en: `Reed & Stem and Warren & Wetmore â€” a collaboration between two architectural firms.

Charles Reed and Allen Stem handled the functional layout â€” their genius lay in inventing the elevated circumferential roadway system and multi-level traffic separation. Whitney Warren and Charles Wetmore were responsible for the exterior and interior design, infusing every detail with Beaux-Arts grandeur.

This pairing of "functional architect + aesthetic architect" was unusual at the time, but it was precisely this tension that made Grand Central great: **it is both a perfect transportation machine and a cathedral that makes you stop and look up.**`,

    story_en: `In 1902, a train collision prompted New York City to ban steam locomotives from Manhattan. The old station had to be rebuilt using only electric trains.

The heirs of railroad magnate Cornelius Vanderbilt decided: if they had to rebuild, they'd build a station unlike any before.

Reed & Stem won the design competition. Their revolutionary plan sank the tracks underground, freeing the surface land into enormously valuable real estate above Park Avenue. **This wasn't just building a station â€” it was redesigning an entire section of the city.**

Warren & Wetmore joined later, handling the building's grand face. They designed that breathtaking main concourse: a 125-foot vaulted ceiling painted with 2,500 stars forming constellations (albeit in reverse).

On opening day, February 2, 1913, 150,000 people flooded in. They gazed up at a sky-like ceiling, walked through a hall where light cascaded through massive arched windows, and felt a solemnity previously reserved for cathedrals.

**But this wasn't a cathedral. It was a train station.** Grand Central proved that public transit spaces could possess cathedral-level dignity.`,

    legacy_en: `â€¢ Urban design paradigm: Sinking tracks underground and freeing surface space directly catalyzed Park Avenue's prosperity and influenced Transit-Oriented Development (TOD) worldwide
â€¢ Transportation architecture benchmark: Multi-level traffic separation and circumferential roadway systems have been adopted by transit hubs globally
â€¢ Historic preservation movement: Facing demolition in the 1960s, Jackie Kennedy's preservation campaign saved it and inspired New York's Landmarks Preservation Law
â€¢ Cultural landmark: 21 million annual visitors make it NYC's sixth-largest tourist attraction; the Apple Store inside gives it new contemporary relevance`,

    significance_en: `Grand Central Terminal answered a fundamental question: **How should public space make people feel?**

In a train station where everyone rushes to catch their train, the architects chose to make you pause â€” look up at the artificial sky, feel the light flowing across marble floors, hear echoes reverberating beneath the vault.

This design philosophy of "creating ceremony within functional space" extends from Grand Central all the way to today's airport terminals, metro stations, and high-speed rail hubs.

**Great transit architecture doesn't just let you pass through. It lets you arrive.**`
  },

  {
    id: '27',
    date: '2026-02-03',
    imageUrl: '/the-daily-object/images/aalto-stool-60.jpg',
    fullImageUrl: '/the-daily-object/images/full/aalto-stool-60.jpg',
    thumbnailUrl: '/the-daily-object/thumbnails/aalto-stool-60.jpg',
    title: 'Stool 60',
    subtitle: 'Alvar Aalto, 1933',
    category: 'industrial',
    designer: 'Alvar Aalto',
    year: '1933',

    dateConnection: '1898å¹´2æœˆ3æ—¥ï¼ŒèŠ¬å…°å»ºç­‘å¸ˆã€è®¾è®¡å¸ˆ Alvar Aalto å‡ºç”ŸäºŽ Kuortaneã€‚ä»–è®¾è®¡çš„ Stool 60 æ˜¯å·¥ä¸šè®¾è®¡å²ä¸Šæœ€æˆåŠŸçš„å®¶å…·ä¹‹ä¸€â€”â€”è‡³ä»Šå·²å”®å‡ºè¶…è¿‡800ä¸‡ä»¶ï¼Œå‡ ä¹Žæ¯ä¸ªèŠ¬å…°å®¶åº­éƒ½æœ‰ä¸€æŠŠã€‚',

    designerBio: `Alvar Aalto (1898-1976)ï¼ŒèŠ¬å…°å»ºç­‘å¸ˆä¸Žè®¾è®¡å¸ˆï¼ŒçŽ°ä»£ä¸»ä¹‰è¿åŠ¨ä¸­æœ€å…·äººæ–‡å…³æ€€çš„å¤§å¸ˆã€‚

å½“åŒ…è±ªæ–¯åœ¨ç”¨é’¢ç®¡å’ŒçŽ»ç’ƒè¿½æ±‚å†°å†·çš„ç†æ€§æ—¶ï¼ŒAalto é€‰æ‹©äº†æœ¨å¤´ã€‚ä»–è¯´ï¼š**"ä¸Šå¸åˆ›é€ äº†çº¸ï¼Œç›®çš„æ˜¯ç”¨æ¥ç”»å»ºç­‘å›¾çº¸ã€‚å…¶ä»–ä¸€åˆ‡éƒ½åªæ˜¯æœ¨å¤´çš„æ»¥ç”¨ã€‚"**

ä»–åœ¨èµ«å°”è¾›åŸºç†å·¥å¤§å­¦å­¦ä¹ å»ºç­‘ï¼Œæ—©å¹´å—åŒ—æ¬§å¤å…¸ä¸»ä¹‰å½±å“ï¼ŒåŽè½¬å‘åŠŸèƒ½ä¸»ä¹‰ã€‚ä½†ä»–ä»Žæœªå®Œå…¨æ‹¥æŠ±åŒ…è±ªæ–¯çš„æœºæ¢°ç¾Žå­¦â€”â€”ä»–è¦çš„æ˜¯**æ¸©æš–çš„çŽ°ä»£ä¸»ä¹‰**ã€‚

Aalto ä¸åªè®¾è®¡å»ºç­‘å’Œå®¶å…·ã€‚ä»–è¿˜åˆ›ç«‹äº† Artekï¼ˆ1935å¹´ï¼‰ï¼Œè¿™å®¶å…¬å¸è‡³ä»Šä»åœ¨ç”Ÿäº§ä»–çš„è®¾è®¡ã€‚ä»–æ˜¯å°‘æ•°çœŸæ­£å®žçŽ°"ä»Žå»ºç­‘åˆ°å‹ºå­"å…¨é¢†åŸŸè®¾è®¡çš„å¤§å¸ˆã€‚`,

    story: `1929å¹´ï¼ŒAalto æ­£åœ¨è®¾è®¡ Paimio ç–—å…»é™¢â€”â€”ä¸€åº§ä¸ºè‚ºç»“æ ¸ç—…äººå»ºé€ çš„çŽ°ä»£ä¸»ä¹‰å»ºç­‘ã€‚ä»–å¯¹æ¯ä¸ªç»†èŠ‚éƒ½ä¸æ»¡æ„ï¼Œå°¤å…¶æ˜¯å®¶å…·ã€‚

é’¢ç®¡æ¤…ï¼Ÿå¤ªå†·äº†ã€‚ç—…äººéœ€è¦æ¸©æš–ã€‚æœ¨å¤´æ¤…ï¼Ÿå¤ªç¬¨é‡äº†ã€‚ç—…äººéœ€è¦è½»ä¾¿ã€‚

**äºŽæ˜¯ä»–å¼€å§‹äº†ä¸€é¡¹ä¼šæ”¹å˜å®¶å…·è®¾è®¡å²çš„å®žéªŒï¼šå¼¯æ›²æœ¨æã€‚**

Aalto å’Œå®¶å…·æœ¨å·¥ Otto Korhonen ä¸€èµ·ç ”å‘äº†"Låž‹è…¿"æŠ€æœ¯ï¼šå°†å®žå¿ƒæ¡¦æœ¨çš„ä¸€ç«¯åˆ‡å‡ºè–„ç‰‡çŠ¶çš„æ‰‡å½¢é”¯ç¼ï¼Œåœ¨é”¯ç¼ä¸­æ¶‚èƒ¶å¹¶åµŒå…¥è–„æœ¨ç‰‡ï¼Œç„¶åŽå¼¯æ›²æˆ90åº¦ã€‚è¿™æ ·ï¼Œä¸€æ¡ç›´çš„æœ¨è…¿å¯ä»¥ç›´æŽ¥å¼¯æ›²è¿žæŽ¥åˆ°åº§é¢ï¼Œ**ä¸éœ€è¦ä»»ä½•è¿žæŽ¥ä»¶**ã€‚

1933å¹´ï¼ŒStool 60 è¯žç”Ÿäº†ï¼šä¸‰æ¡ L åž‹å¼¯æ›²æ¡¦æœ¨è…¿ï¼Œä¸€ä¸ªåœ†å½¢åº§é¢ã€‚å°±è¿™ä¹ˆç®€å•ã€‚

**ç®€å•åˆ°äº†æžè‡´å°±æ˜¯é©å‘½ã€‚**

å®ƒå¯ä»¥å æ‘žå­˜æ”¾â€”â€”è¿™åœ¨å½“æ—¶æ˜¯ä¸ªæ–°æ¦‚å¿µã€‚å®ƒè½»ä¾¿åˆ°ä¸€åªæ‰‹å°±èƒ½æ‹Žèµ·ã€‚å®ƒçš„ç»“æž„å¦‚æ­¤ç®€æ´ï¼Œä»¥è‡³äºŽå‡ ä¹Žä¸å¯èƒ½åæŽ‰ã€‚å®ƒçš„ä»·æ ¼è¶³å¤Ÿä½Žå»‰ï¼Œæ¯ä¸ªäººéƒ½ä¹°å¾—èµ·ã€‚

ä»Ž1933å¹´è‡³ä»Šï¼ŒStool 60 å·²ç»å”®å‡ºè¶…è¿‡800ä¸‡ä»¶ã€‚å®ƒå‡ºçŽ°åœ¨å›¾ä¹¦é¦†ã€å’–å•¡é¦†ã€å­¦æ ¡ã€åŒ»é™¢ã€åšç‰©é¦†â€”â€”ä»¥åŠå‡ ä¹Žæ¯ä¸ªèŠ¬å…°äººçš„å®¶ä¸­ã€‚`,

    legacy: `â€¢ Låž‹è…¿æŠ€æœ¯ï¼šè¿™é¡¹å¼¯æ›²å®žæœ¨çš„ä¸“åˆ©æŠ€æœ¯è‡³ä»Šä»åœ¨ä½¿ç”¨ï¼Œæˆä¸ºåŒ—æ¬§å®¶å…·åˆ¶é€ çš„åŸºç¡€
â€¢ å¯å æ‘žè®¾è®¡ï¼šStool 60 æ˜¯æœ€æ—©çš„å¯å æ‘žå‡³å­ä¹‹ä¸€ï¼Œå½±å“äº†åŽæ¥æ‰€æœ‰å…¬å…±ç©ºé—´å®¶å…·è®¾è®¡
â€¢ Artek å…¬å¸ï¼šAalto äºŽ1935å¹´åˆ›ç«‹çš„å®¶å…·å“ç‰Œè‡³ä»Šä»åœ¨ç”Ÿäº§ Stool 60ï¼Œè®¾è®¡93å¹´æ¥ä»Žæœªæ”¹å˜
â€¢ äººæ–‡çŽ°ä»£ä¸»ä¹‰ï¼šAalto è¯æ˜Žäº†çŽ°ä»£è®¾è®¡å¯ä»¥æ¸©æš–ã€è‡ªç„¶ã€äº²åˆ‡â€”â€”ä¸å¿…éžå¾—æ˜¯å†°å†·çš„é’¢ç®¡å’ŒçŽ»ç’ƒ
â€¢ èŠ¬å…°è®¾è®¡åŸºå› ï¼šStool 60 æˆä¸ºèŠ¬å…°è®¾è®¡çš„è±¡å¾ï¼Œå½±å“äº† Marimekkoã€Iittala ç­‰å“ç‰Œçš„è®¾è®¡å“²å­¦`,

    significance: `Stool 60 çš„ä¼Ÿå¤§åœ¨äºŽå®ƒçš„**è°¦é€Š**ã€‚

å®ƒä¸åƒ Eames Lounge Chair é‚£æ ·å®£å‘Šå“å‘³ï¼Œä¸åƒ Barcelona Chair é‚£æ ·å½°æ˜¾åœ°ä½ã€‚å®ƒåªæ˜¯å®‰é™åœ°å­˜åœ¨â€”â€”åœ¨å›¾ä¹¦é¦†è§’è½ã€åœ¨åŽ¨æˆ¿é¤æ¡Œæ—ã€åœ¨æ•™å®¤é‡Œã€‚

**æœ€å¥½çš„è®¾è®¡ä¸æ˜¯è®©ä½ æ³¨æ„åˆ°å®ƒï¼Œè€Œæ˜¯è®©ä½ å¿˜è®°å®ƒã€‚** Stool 60 å¦‚æ­¤è‡ªç„¶åœ°èžå…¥ç”Ÿæ´»ï¼Œä»¥è‡³äºŽä½ å¯èƒ½åäº†ä¸€è¾ˆå­ï¼Œå´ä»Žæœªæƒ³è¿‡"è°è®¾è®¡äº†è¿™æŠŠå‡³å­"ã€‚

Aalto ç”¨ä¸€æŠŠå‡³å­è¯æ˜Žäº†ï¼šä¼Ÿå¤§çš„è®¾è®¡ä¸éœ€è¦æƒŠå¹å·ï¼Œåªéœ€è¦ä¸€ä¸ªå¥å·ã€‚å®‰å®‰é™é™ï¼Œæ°åˆ°å¥½å¤„ã€‚

**93å¹´äº†ï¼Œè¿™æŠŠå‡³å­è¿˜åœ¨ç”Ÿäº§ã€‚è¿™æœ¬èº«å°±æ˜¯æœ€å¥½çš„è®¾è®¡è¯„è¯­ã€‚**`,

    dateConnection_en: 'On February 3, 1898, Finnish architect and designer Alvar Aalto was born in Kuortane. His Stool 60 is one of the most successful pieces of furniture in industrial design history â€” over 8 million have been sold, and virtually every Finnish household owns one.',

    designerBio_en: `Alvar Aalto (1898-1976), Finnish architect and designer, the most humanistic master of the modernist movement.

While the Bauhaus pursued cold rationality with steel tubes and glass, Aalto chose wood. He said: **"God created paper to draw architecture on. Everything else is just an abuse of wood."**

He studied architecture at Helsinki University of Technology, initially influenced by Nordic Classicism before turning to Functionalism. But he never fully embraced Bauhaus machine aesthetics â€” what he wanted was **warm modernism**.

Aalto didn't just design buildings and furniture. He also founded Artek (1935), a company that still produces his designs today. He was one of the rare masters who truly achieved design "from architecture to the spoon."`,

    story_en: `In 1929, Aalto was designing the Paimio Sanatorium â€” a modernist building for tuberculosis patients. He was dissatisfied with every detail, especially the furniture.

Steel tube chairs? Too cold. Patients needed warmth. Wooden chairs? Too heavy. Patients needed lightness.

**So he began an experiment that would change furniture design history: bending wood.**

Working with furniture carpenter Otto Korhonen, Aalto developed the "L-leg" technique: cutting fan-shaped saw kerfs into one end of solid birch, applying glue and inserting thin wood veneers into the kerfs, then bending it to 90 degrees. This way, a straight wooden leg could bend directly into the seat surface â€” **requiring no connectors whatsoever**.

In 1933, Stool 60 was born: three L-shaped bent birch legs, one circular seat. That simple.

**Simplicity taken to its extreme is revolution.**

It could be stacked for storage â€” a novel concept at the time. It was light enough to carry with one hand. Its structure was so minimal it was virtually indestructible. Its price was low enough for everyone.

From 1933 to today, over 8 million Stool 60s have been sold. They appear in libraries, cafes, schools, hospitals, museums â€” and in virtually every Finnish home.`,

    legacy_en: `â€¢ L-leg technology: This patented solid wood bending technique is still used today and forms the foundation of Nordic furniture manufacturing
â€¢ Stackable design: Stool 60 was one of the earliest stackable stools, influencing all subsequent public space furniture design
â€¢ Artek company: Founded by Aalto in 1935, it still produces Stool 60 today â€” the design unchanged in 93 years
â€¢ Humanistic modernism: Aalto proved modern design could be warm, natural, and approachable â€” not necessarily cold steel tubes and glass
â€¢ Finnish design DNA: Stool 60 became a symbol of Finnish design, influencing the design philosophy of brands like Marimekko and Iittala`,

    significance_en: `The greatness of Stool 60 lies in its **humility**.

It doesn't announce taste like the Eames Lounge Chair. It doesn't signal status like the Barcelona Chair. It simply exists quietly â€” in library corners, beside kitchen tables, in classrooms.

**The best design isn't something you notice; it's something you forget.** Stool 60 blends so naturally into life that you might sit on one your entire life without ever wondering "who designed this stool?"

With one stool, Aalto proved that great design doesn't need exclamation marks â€” just a period. Quiet, just right.

**93 years later, this stool is still in production. That itself is the finest design review.**`
  },

  {
    id: '26',
    date: '2026-02-26',
    imageUrl: '/the-daily-object/images/levis-501.jpg',
    fullImageUrl: '/the-daily-object/images/full/levis-501.jpg',
    title: 'Levi\'s 501 ç‰›ä»”è£¤',
    title_en: 'Levi\'s 501 Jeans',
    subtitle: 'Levi Strauss & Jacob Davis, 1873',
    subtitle_en: 'Levi Strauss & Jacob Davis, 1873',
    category: 'fashion',
    designer: 'Levi Strauss',
    year: '1873',

    dateConnection: `1829å¹´2æœˆ26æ—¥ï¼ŒLevi Strauss å‡ºç”ŸäºŽå¾·å›½å·´ä¼åˆ©äºšçš„å¸ƒæ»•æµ·å§†ã€‚è¿™ä½æ—¥åŽå°†å½»åº•æ”¹å˜äººç±»ç©¿ç€æ–¹å¼çš„ç§»æ°‘ï¼Œåœ¨18å²æ—¶è·Ÿéšå®¶äººè¿œæ¸¡é‡æ´‹æ¥åˆ°ç¾Žå›½ï¼Œæœ€ç»ˆåœ¨æ—§é‡‘å±±æ·˜é‡‘çƒ­ä¸­æ‰¾åˆ°äº†å±žäºŽè‡ªå·±çš„"é‡‘çŸ¿"â€”â€”ä¸æ˜¯åœ¨æ²³åºŠé‡Œï¼Œè€Œæ˜¯åœ¨å·¥äººä»¬ç£¨ç ´çš„è£¤å­ä¸Šã€‚`,

    designerBio: `Levi Straussï¼ˆ1829â€“1902ï¼‰æ˜¯ä¸€ä¸ªå…¸åž‹çš„ç¾Žå›½æ¢¦æ•…äº‹ï¼Œä½†ä»–çš„ä¼Ÿå¤§ä¸åœ¨äºŽå‘è´¢è‡´å¯Œï¼Œè€Œåœ¨äºŽ**ç”¨è®¾è®¡æ€ç»´è§£å†³äº†ä¸€ä¸ªçœŸå®žçš„é—®é¢˜**ã€‚

1853å¹´ï¼Œ24å²çš„ Strauss æ¥åˆ°æ—§é‡‘å±±ï¼Œæœ€åˆç»è¥å¹²è´§æ‰¹å‘ç”Ÿæ„ã€‚ä»–è§‚å¯Ÿåˆ°çŸ¿å·¥ä»¬çš„è£¤å­æ€»æ˜¯åœ¨å£è¢‹å’ŒæŽ¥ç¼å¤„æ’•è£‚â€”â€”è¿™ä¸æ˜¯é¢æ–™çš„é—®é¢˜ï¼Œè€Œæ˜¯**ç»“æž„è®¾è®¡çš„é—®é¢˜**ã€‚

1872å¹´ï¼Œè£ç¼ Jacob Davis å†™ä¿¡ç»™ Straussï¼Œæå‡ºäº†ä¸€ä¸ªå¤©æ‰çš„è§£å†³æ–¹æ¡ˆï¼šåœ¨è£¤å­çš„å—åŠ›ç‚¹ä½¿ç”¨é“œé“†é’‰åŠ å›ºã€‚ä¸¤äººåˆä½œç”³è¯·ä¸“åˆ©ï¼Œ1873å¹´5æœˆ20æ—¥èŽ·æ‰¹â€”â€”è¿™ä¸€å¤©ï¼Œç‰›ä»”è£¤æ­£å¼è¯žç”Ÿã€‚

Strauss ä»Žæœªç»“å©šï¼Œå°†æ¯•ç”Ÿç²¾åŠ›æŠ•å…¥äº‹ä¸šå’Œæ…ˆå–„ã€‚ä»–èµ„åŠ©äº†åŠ å·žå¤§å­¦ä¼¯å…‹åˆ©åˆ†æ ¡çš„å¥–å­¦é‡‘é¡¹ç›®ï¼Œè‡³ä»Šä»åœ¨è¿è¡Œã€‚1902å¹´åŽ»ä¸–æ—¶ï¼Œæ—§é‡‘å±±çš„å•†åº—å…¨éƒ¨å…³é—¨ä¸€å¤©ä»¥ç¤ºæ‚¼å¿µã€‚`,

    designerBio_en: `Levi Strauss (1829â€“1902) embodies the American Dream, but his greatness lies not in wealth â€” it's in **solving a real problem through design thinking**.

In 1853, the 24-year-old Strauss arrived in San Francisco, initially running a dry goods wholesale business. He noticed that miners' pants kept tearing at the pockets and seams â€” this wasn't a fabric problem, it was a **structural design problem**.

In 1872, tailor Jacob Davis wrote to Strauss proposing a genius solution: reinforcing stress points with copper rivets. Together they filed a patent, granted on May 20, 1873 â€” the official birthday of blue jeans.

Strauss never married, devoting his life to business and philanthropy. He funded a scholarship program at UC Berkeley that still runs today. When he died in 1902, every store in San Francisco closed for a day in tribute.`,

    story: `Levi's 501 ä¸åªæ˜¯ä¸€æ¡è£¤å­ï¼Œå®ƒæ˜¯**äººç±»æœè£…å²ä¸Šè¢«ç©¿ç€æœ€ä¹…ã€å½±å“æœ€å¹¿çš„å•ä¸€è®¾è®¡**ã€‚

æœ€åˆçš„è®¾è®¡çº¯ç²¹æ˜¯åŠŸèƒ½æ€§çš„ï¼š10ç›Žå¸æ£‰è´¨å¸†å¸ƒï¼ˆåŽæ”¹ä¸ºé›è“æŸ“è‰²çš„æ–œçº¹ç²—æ£‰å¸ƒï¼‰ï¼Œäº”ä¸ªå£è¢‹ï¼Œé“œé“†é’‰åŠ å›ºï¼Œçº½æ‰£é—¨è¥Ÿã€‚æ¯ä¸€ä¸ªç»†èŠ‚éƒ½æ˜¯ä¸ºäº†è§£å†³æ·˜é‡‘çŸ¿å·¥çš„å®žé™…éœ€æ±‚â€”â€”è€ç£¨ã€è€æ’•ã€èƒ½è£…å·¥å…·ã€‚

ä½†501çš„è®¾è®¡å¤©æ‰åœ¨äºŽå®ƒçš„**ä¸å®Œç¾Ž**ã€‚é›è“æŸ“æ–™ä¼šéšæ—¶é—´å’Œç©¿ç€è¤ªè‰²ï¼Œæ¯æ¡è£¤å­éƒ½ä¼šå½¢æˆç‹¬ä¸€æ— äºŒçš„è¤ªè‰²çº¹è·¯â€”â€”ä½ çš„è†ç›–å¼¯æ›²å¤„ã€ä½ çš„æ‰‹æœºè½®å»“ã€ä½ åä¸‹æ—¶çš„æŠ˜ç—•ã€‚**è¿™æ¡è£¤å­ä¼šè®°å½•ä½ çš„ç”Ÿæ´»ã€‚**

ä»ŽçŸ¿å·¥å·¥è£…åˆ°äºŒæˆ˜ç¾Žå†›åˆ¶æœï¼Œä»ŽJames Deançš„å›é€†ç¬¦å·åˆ°Andy Warholçš„è‰ºæœ¯ç”»å¸ƒï¼Œä»Žæœ‹å…‹æ‘‡æ»šåˆ°ç¡…è°·ç¨‹åºå‘˜ï¼Œ501å®Œæˆäº†äººç±»æ—¶å°šå²ä¸Šæœ€ä¸å¯æ€è®®çš„èº«ä»½è½¬å˜ï¼š**ä»Žæœ€åº•å±‚çš„åŠ³åŠ¨æœè£…ï¼Œå˜æˆäº†å…¨ä¸–ç•Œæœ€æ°‘ä¸»çš„æ—¶å°šå•å“ã€‚**

æ²¡æœ‰å“ªä¸ªè®¾è®¡å¸ˆå“ç‰Œèƒ½åšåˆ°è¿™ä¸€ç‚¹â€”â€”è®©æ€»ç»Ÿå’Œç‰›ä»”ã€æ•™æŽˆå’Œå·¥äººç©¿åŒä¸€æ¡è£¤å­ï¼Œå¹¶ä¸”éƒ½è§‰å¾—è¿™æ¡è£¤å­å°±æ˜¯ä¸ºè‡ªå·±è®¾è®¡çš„ã€‚`,

    story_en: `The Levi's 501 isn't just a pair of pants â€” it's **the single most worn, most influential garment design in human history**.

The original design was purely functional: 10-oz cotton canvas (later switched to indigo-dyed twill denim), five pockets, copper rivet reinforcement, button fly. Every detail addressed the practical needs of gold miners â€” durability, tear resistance, tool storage.

But the design genius of the 501 lies in its **imperfection**. Indigo dye fades with time and wear, and each pair develops unique fade patterns â€” where your knees bend, the outline of your phone, the creases when you sit. **This garment records your life.**

From mining workwear to WWII military uniforms, from James Dean's rebel symbol to Andy Warhol's art canvas, from punk rock to Silicon Valley programmers, the 501 completed the most incredible identity transformation in fashion history: **from the lowest-class work clothing to the world's most democratic fashion item.**

No designer brand has ever achieved this â€” making presidents and cowboys, professors and workers wear the same pants, each believing they were designed just for them.`,

    legacy: `501çš„è®¾è®¡é—äº§è¿œè¶…æ—¶å°šé¢†åŸŸã€‚é“œé“†é’‰åŠ å›ºæŠ€æœ¯å¼€åˆ›äº†åŠŸèƒ½æ€§äº”é‡‘ä»¶åœ¨æœè£…ä¸­çš„åº”ç”¨ï¼Œç›´æŽ¥å½±å“äº†åŽæ¥æ‰€æœ‰å·¥è£…å’Œæˆ·å¤–æœé¥°çš„è®¾è®¡ã€‚äº”å£è¢‹å¸ƒå±€æˆä¸ºå…¨çƒç‰›ä»”è£¤çš„æ ‡å‡†æ¨¡æ¿ï¼Œè‡³ä»Šæœªå˜ã€‚

æ›´æ·±è¿œçš„å½±å“åœ¨äºŽ**è®¾è®¡æ°‘ä¸»åŒ–**ï¼š501è¯æ˜Žäº†ä¼Ÿå¤§çš„è®¾è®¡ä¸éœ€è¦æ˜‚è´µã€ä¸éœ€è¦é™é‡ã€ä¸éœ€è¦è®¾è®¡å¸ˆç­¾åã€‚å®ƒæ˜¯ç¬¬ä¸€ä¸ªçœŸæ­£æ„ä¹‰ä¸Šçš„"å…¨çƒè®¾è®¡"â€”â€”åœ¨æ¯ä¸€ä¸ªå›½å®¶ã€æ¯ä¸€ä¸ªé˜¶å±‚ã€æ¯ä¸€ä¸ªäºšæ–‡åŒ–ä¸­éƒ½æœ‰è‡ªå·±çš„ä½ç½®ã€‚MoMA å’Œ Smithsonian éƒ½å°†501çº³å…¥æ°¸ä¹…æ”¶è—ã€‚`,

    legacy_en: `The 501's design legacy extends far beyond fashion. Copper rivet reinforcement pioneered the use of functional hardware in clothing, directly influencing all subsequent workwear and outdoor apparel design. The five-pocket layout became the global standard template for jeans and remains unchanged today.

The deeper impact is **design democratization**: the 501 proved that great design doesn't need to be expensive, limited-edition, or designer-signed. It was the first truly "global design" â€” finding its place in every country, every social class, every subculture. Both MoMA and the Smithsonian include the 501 in their permanent collections.`,

    significance: `åœ¨è®¾è®¡å²ä¸Šï¼Œ501ä»£è¡¨äº†ä¸€ä¸ªç‹¬ç‰¹çš„å‘½é¢˜ï¼š**æœ€ä¼Ÿå¤§çš„è®¾è®¡æ˜¯å¦å¯ä»¥æ¥è‡ªæœ€æœ´ç´ çš„å‡ºå‘ç‚¹ï¼Ÿ** ç­”æ¡ˆæ˜¯è‚¯å®šçš„ã€‚Strauss å’Œ Davis æ²¡æœ‰æƒ³è¿‡ç¾Žå­¦ã€æ²¡æœ‰æƒ³è¿‡å“ç‰Œã€æ²¡æœ‰æƒ³è¿‡æ–‡åŒ–ç¬¦å·â€”â€”ä»–ä»¬åªæƒ³åšä¸€æ¡ä¸ä¼šæ’•ç ´çš„è£¤å­ã€‚è€Œæ­£æ˜¯è¿™ç§çº¯ç²¹çš„åŠŸèƒ½ä¸»ä¹‰ï¼Œé€ å°±äº†æœ€æŒä¹…çš„è®¾è®¡ã€‚

153å¹´åŽï¼Œ501ä»åœ¨ç”Ÿäº§ï¼Œä»åœ¨è¢«ç©¿ç€ï¼Œä»åœ¨è¢«æ¨¡ä»¿ã€‚å®ƒæé†’æ¯ä¸€ä¸ªè®¾è®¡å¸ˆï¼š**è§£å†³çœŸå®žé—®é¢˜çš„è®¾è®¡ï¼Œè‡ªç„¶ä¼šæˆä¸ºç»å…¸ã€‚**`,

    significance_en: `In design history, the 501 represents a unique proposition: **Can the greatest design come from the humblest starting point?** The answer is yes. Strauss and Davis never thought about aesthetics, branding, or cultural symbolism â€” they just wanted to make pants that wouldn't rip. And it was precisely this pure functionalism that created the most enduring design.

153 years later, the 501 is still in production, still being worn, still being imitated. It reminds every designer: **Design that solves real problems naturally becomes timeless.**`
  },

  {
    id: '128',
    date: '2026-01-28',
    imageUrl: '/the-daily-object/images/baskerville-typeface.jpg',
    fullImageUrl: '/the-daily-object/images/full/baskerville-typeface.jpg',
    title: 'Baskerville å­—ä½“',
    title_en: 'Baskerville Typeface',
    subtitle: 'John Baskerville, 1757',
    subtitle_en: 'John Baskerville, 1757',
    category: 'graphic',
    designer: 'John Baskerville',
    year: '1757',

    dateConnection: '1707å¹´1æœˆ28æ—¥ï¼ŒJohn Baskerville åœ¨è‹±æ ¼å…°ä¼æ–¯ç‰¹éƒ¡å—æ´—ã€‚è¿™ä½ä»Žå¢“ç¢‘é›•åˆ»å¸ˆåˆ°æ¼†å™¨å•†äººã€å†åˆ°å°åˆ·é©å‘½è€…çš„ä¼ å¥‡äººç‰©ï¼Œç”¨ä¸€æ¬¾å­—ä½“æ”¹å˜äº†æ•´ä¸ªè¥¿æ–¹æŽ’ç‰ˆç¾Žå­¦çš„èµ°å‘ã€‚',
    dateConnection_en: 'John Baskerville was baptised on January 28, 1707 in Worcestershire, England. This remarkable figure â€” who went from gravestone carver to japanning manufacturer to printing revolutionary â€” changed the course of Western typographic aesthetics with a single typeface.',

    designerBio: `John Baskerville (1707â€“1775) æ˜¯è‹±å›½å°åˆ·å²ä¸Šæœ€é‡è¦çš„äººç‰©ä¹‹ä¸€ã€‚ä»–æ—©å¹´ä»¥æ•™ä¹¦æ³•ä¸ºç”Ÿï¼ŒåŽæ¥é æ¼†å™¨ï¼ˆjapanningï¼‰ç”Ÿæ„å‘äº†è´¢ï¼Œ44å²æ—¶æ‰å¼€å§‹æŠ•èº«å°åˆ·äº‹ä¸šâ€”â€”è¿™åœ¨18ä¸–çºªæ˜¯ä¸€ä¸ªæžå…¶å¤§èƒ†çš„è½¬è¡Œã€‚

ä»–ä¸åªæ˜¯è®¾è®¡äº†ä¸€æ¬¾å­—ä½“ï¼Œè€Œæ˜¯**é‡æ–°å‘æ˜Žäº†æ•´ä¸ªå°åˆ·æµç¨‹**ï¼šè‡ªåˆ¶æ›´é»‘æ›´äº®çš„æ²¹å¢¨ã€å‘æ˜Ž"ç»‡çº¹çº¸"(wove paper) å–ä»£ä¼ ç»Ÿçš„"æ¡çº¹çº¸"(laid paper)ï¼Œè®©çº¸é¢æ›´åŠ å…‰æ»‘å‡åŒ€ï¼Œå°åˆ·æ•ˆæžœå‰æ‰€æœªæœ‰åœ°æ¸…æ™°é”åˆ©ã€‚`,

    designerBio_en: `John Baskerville (1707â€“1775) was one of the most important figures in British printing history. He spent his early career teaching handwriting, then made a fortune in japanning (lacquerwork), before diving into printing at age 44 â€” an extraordinarily bold career change in the 18th century.

He didn't just design a typeface â€” he **reinvented the entire printing process**: creating blacker, glossier ink, inventing "wove paper" to replace traditional "laid paper," achieving an unprecedented level of printing clarity and sharpness.`,

    story: `Baskerville å­—ä½“è¯žç”ŸäºŽ1757å¹´ï¼Œé¦–æ¬¡å‡ºçŽ°åœ¨ä»–å°åˆ·çš„ç»´å‰å°”ã€Šç”°å›­è¯—ã€‹ä¸­ã€‚è¿™æ¬¾å­—ä½“ä»‹äºŽå¤å…¸çš„ Old Styleï¼ˆå¦‚ Caslonï¼‰å’ŒåŽæ¥çš„ Modernï¼ˆå¦‚ Bodoniï¼‰ä¹‹é—´ï¼Œè¢«å½’ç±»ä¸º"è¿‡æ¸¡ä½“"ï¼ˆTransitionalï¼‰â€”â€”ç¬”ç”»ç²—ç»†å¯¹æ¯”æ›´å¼ºï¼Œè¡¬çº¿æ›´é”åˆ©ï¼Œå­—å½¢æ›´åŠ æŒºæ‹”ä¼˜é›…ã€‚

**ç„¶è€Œ Baskerville åœ¨ç”Ÿå‰å¹¶ä¸è¢«è‹±å›½åŒè¡Œè®¤å¯ã€‚** å°åˆ·å•†ä»¬å˜²ç¬‘ä»–çš„å­—ä½“"å¤ªåˆºçœ¼"ï¼Œä¼ é—»è¯´é˜…è¯» Baskerville å°åˆ·å“ä¼šæŸå®³è§†åŠ›ã€‚è®½åˆºçš„æ˜¯ï¼ŒBenjamin Franklin åœ¨ä¸€æ¬¡è‘—åçš„æ¶ä½œå‰§ä¸­ï¼Œç»™ä¸€ä½æ‰¹è¯„ Baskerville å­—ä½“çš„äººçœ‹äº†ä¸€æ®µç”¨ Caslonï¼ˆå½“æ—¶å…¬è®¤çš„"å¥½"å­—ä½“ï¼‰å°åˆ·çš„æ–‡å­—ï¼Œå¯¹æ–¹å´æŒ‡ç€å®ƒè¯´"è¿™å°±æ˜¯ Baskervilleï¼Œçœ‹äº†çœ¼ç›ç–¼"â€”â€”è¯æ˜Žæ‰¹è¯„è€…æ ¹æœ¬åˆ†è¾¨ä¸å‡ºä¸¤è€…çš„åŒºåˆ«ã€‚

Baskerville åŽ»ä¸–åŽï¼Œä»–çš„å­—æ¨¡è¢«å–åˆ°æ³•å›½ï¼Œæ·±åˆ»å½±å“äº† Didot å’Œ Bodoni ç­‰åŽæ¥çš„å¤§å¸ˆã€‚**ä»–åœ¨æ³•å›½çš„å½±å“åŠ›è¿œè¶…è‹±å›½æœ¬åœŸã€‚**`,

    story_en: `The Baskerville typeface was born in 1757, first appearing in his printing of Virgil's *Bucolica, Georgica, et Aeneis*. The typeface sits between the classical Old Style (like Caslon) and the later Modern style (like Bodoni), classified as "Transitional" â€” with stronger stroke contrast, sharper serifs, and more upright, elegant letterforms.

**Yet Baskerville was not appreciated by his English contemporaries.** Fellow printers mocked his typeface as "too dazzling," with rumors that reading Baskerville's prints would damage one's eyesight. Ironically, Benjamin Franklin played a famous prank: he showed a critic of Baskerville a passage printed in Caslon (the accepted "good" typeface), and the critic pointed at it saying "that's Baskerville, it hurts my eyes" â€” proving critics couldn't even tell the difference.

After Baskerville's death, his type punches were sold to France, profoundly influencing later masters like Didot and Bodoni. **His influence in France far exceeded his reputation in England.**`,

    legacy: `Baskerville å­—ä½“ç»åŽ†äº†ä»Žè¢«å˜²ç¬‘åˆ°è¢«å°ç¥žçš„å®Œæ•´é€†è½¬ã€‚ä»Šå¤©å®ƒæ˜¯å…¨çƒæœ€å¹¿æ³›ä½¿ç”¨çš„ç»å…¸è¡¬çº¿å­—ä½“ä¹‹ä¸€ï¼Œè¢«æ— æ•°ä¹¦ç±ã€å“ç‰Œå’Œæœºæž„é‡‡ç”¨ã€‚2012å¹´ä¸€é¡¹è‘—åçš„å¿ƒç†å­¦å®žéªŒï¼ˆçº½çº¦æ—¶æŠ¥å‘èµ·ï¼‰è¯æ˜Žï¼šç”¨ Baskerville æŽ’ç‰ˆçš„æ–‡å­—æ¯”å…¶ä»–å­—ä½“æ›´å®¹æ˜“è®©è¯»è€…äº§ç”Ÿ"ä¿¡ä»»æ„Ÿ"â€”â€”å®ƒè¢«ç§°ä¸º"æœ€å€¼å¾—ä¿¡èµ–çš„å­—ä½“"ã€‚

ä»–å‘æ˜Žçš„ç»‡çº¹çº¸æŠ€æœ¯æ›´æ˜¯å½»åº•æ”¹å˜äº†é€ çº¸ä¸šï¼Œè‡³ä»Šä»æ˜¯çŽ°ä»£çº¸å¼ åˆ¶é€ çš„åŸºç¡€ã€‚ä¸€ä¸ªäººåŒæ—¶é©æ–°äº†å­—ä½“è®¾è®¡ã€æ²¹å¢¨é…æ–¹å’Œé€ çº¸æŠ€æœ¯â€”â€”è¿™ç§è·¨é¢†åŸŸçš„åˆ›æ–°ç²¾ç¥žåœ¨è®¾è®¡å²ä¸Šæžä¸ºç½•è§ã€‚`,

    legacy_en: `The Baskerville typeface underwent a complete reversal from mockery to canonization. Today it's one of the most widely used classic serif typefaces globally, adopted by countless books, brands, and institutions. A famous 2012 psychology experiment (initiated by the New York Times) proved that text set in Baskerville was more likely to inspire trust in readers than other typefaces â€” earning it the title of "the most trustworthy font."

His invention of wove paper fundamentally transformed the paper industry and remains the foundation of modern papermaking. One person simultaneously revolutionized typeface design, ink formulation, and papermaking technology â€” this kind of cross-disciplinary innovation is extraordinarily rare in design history.`,

    significance: `Baskerville ä»£è¡¨äº†è®¾è®¡å²ä¸Šä¸€ä¸ªæ°¸æ’çš„å‘½é¢˜ï¼š**è¶…å‰äºŽæ—¶ä»£çš„è®¾è®¡å¾€å¾€ä¸è¢«å½“ä»£ç†è§£ã€‚** ä»–çš„å­—ä½“åœ¨18ä¸–çºªè¢«è§†ä¸ºå¼‚ç«¯ï¼Œåœ¨21ä¸–çºªè¢«å¥‰ä¸ºç»å…¸ã€‚è¿™æé†’æ¯ä¸€ä¸ªè®¾è®¡å¸ˆï¼šå¤§ä¼—çš„å³æ—¶åé¦ˆä¸æ˜¯è¡¡é‡è®¾è®¡ä»·å€¼çš„å”¯ä¸€æ ‡å‡†ã€‚`,

    significance_en: `Baskerville represents an eternal proposition in design history: **design that is ahead of its time is often misunderstood by its contemporaries.** His typeface was considered heretical in the 18th century and canonical in the 21st. This reminds every designer: immediate public feedback is not the only measure of design value.`,
  },

  {
    id: '129',
    date: '2026-01-29',
    imageUrl: '/the-daily-object/images/benz-patent-motorwagen.jpg',
    fullImageUrl: '/the-daily-object/images/full/benz-patent-motorwagen.jpg',
    title: 'Benz Patent-Motorwagen',
    title_en: 'Benz Patent-Motorwagen',
    subtitle: 'Karl Benz, 1886',
    subtitle_en: 'Karl Benz, 1886',
    category: 'industrial',
    designer: 'Karl Benz',
    year: '1886',

    dateConnection: '1886å¹´1æœˆ29æ—¥ï¼ŒKarl Benz ä¸ºä»–çš„"æ°”ä½“é©±åŠ¨è½¦è¾†"ï¼ˆBenz Patent-Motorwagenï¼‰ç”³è¯·äº†ä¸“åˆ©ï¼ˆDRP 37435ï¼‰ã€‚è¿™æ˜¯äººç±»åŽ†å²ä¸Šç¬¬ä¸€è¾†è¢«æŽˆäºˆä¸“åˆ©çš„æ±½è½¦ï¼Œæ ‡å¿—ç€æ±½è½¦å·¥ä¸šçš„è¯žç”Ÿã€‚',
    dateConnection_en: 'On January 29, 1886, Karl Benz filed the patent for his "vehicle powered by a gas engine" (Benz Patent-Motorwagen, DRP 37435). It was the first automobile ever to be granted a patent, marking the birth of the automotive industry.',

    designerBio: `Karl Benz (1844â€“1929) æ˜¯å¾·å›½å·¥ç¨‹å¸ˆå’Œå‘æ˜Žå®¶ï¼Œè¢«å…¬è®¤ä¸º"æ±½è½¦ä¹‹çˆ¶"ã€‚ä»–åœ¨æ›¼æµ·å§†çš„å°ä½œåŠé‡Œå®Œæˆäº†è¿™é¡¹æ”¹å˜ä¸–ç•Œçš„å‘æ˜Žã€‚

ä¸Žè®¸å¤šå‘æ˜Žå®¶ä¸åŒï¼ŒBenz ä¸ä»…è®¾è®¡äº†å‘åŠ¨æœºï¼Œè¿˜ä»Žé›¶å¼€å§‹è®¾è®¡äº†æ•´è¾†è½¦â€”â€”åº•ç›˜ã€ä¼ åŠ¨ç³»ç»Ÿã€ç‚¹ç«è£…ç½®ã€å†·å´ç³»ç»Ÿã€è½¬å‘æœºæž„ï¼Œå…¨éƒ¨æ˜¯åŽŸåˆ›è®¾è®¡ã€‚ä»–æŠŠæ±½è½¦è§†ä¸ºä¸€ä¸ª**å®Œæ•´çš„è®¾è®¡ç³»ç»Ÿ**ï¼Œè€Œéžç®€å•åœ°æŠŠå‘åŠ¨æœºè£…åœ¨é©¬è½¦ä¸Šã€‚`,

    designerBio_en: `Karl Benz (1844â€“1929) was a German engineer and inventor, widely recognized as the "father of the automobile." He completed this world-changing invention in his small workshop in Mannheim.

Unlike many inventors, Benz didn't just design an engine â€” he designed the entire vehicle from scratch: chassis, drivetrain, ignition, cooling system, steering mechanism â€” all original designs. He saw the automobile as a **complete design system**, not simply an engine bolted onto a horse carriage.`,

    story: `Patent-Motorwagen çš„è®¾è®¡æžå…¶ä¼˜é›…åœ°è§£å†³äº†ä¸€ä¸ªæ ¹æœ¬é—®é¢˜ï¼šå¦‚ä½•è®©å†…ç‡ƒæœºé©±åŠ¨ä¸€è¾†å¯æ“æŽ§çš„è½¦è¾†ï¼Ÿ

ä¸‰è½®è®¾è®¡ä¸æ˜¯å¦¥åï¼Œè€Œæ˜¯ç²¾å¦™çš„å·¥ç¨‹é€‰æ‹©â€”â€”å½“æ—¶æ²¡æœ‰å¯é çš„å·®é€Ÿå™¨æŠ€æœ¯ï¼Œä¸‰è½®ç»“æž„é¿å…äº†å‰è½®è½¬å‘çš„å¤æ‚æœºæ¢°é—®é¢˜ã€‚å•ç¼¸å››å†²ç¨‹å‘åŠ¨æœºæŽ’é‡954ccï¼Œè¾“å‡ºçº¦0.75é©¬åŠ›ï¼Œæœ€é«˜æ—¶é€Ÿ16å…¬é‡Œã€‚è¿™äº›æ•°å­—åœ¨ä»Šå¤©çœ‹æ¥å¾®ä¸è¶³é“ï¼Œä½†åœ¨1886å¹´ï¼Œè¿™æ˜¯**äººç±»ç¬¬ä¸€æ¬¡ä¸ä¾èµ–åŠ¨ç‰©æˆ–è‡ªç„¶åŠ›å°±èƒ½è‡ªç”±ç§»åŠ¨**ã€‚

çœŸæ­£è®© Motorwagen ä»Žå®žéªŒå®¤èµ°å‘å…¬ä¼—è§†é‡Žçš„ï¼Œæ˜¯ Benz çš„å¦»å­ Berthaã€‚1888å¹´8æœˆï¼Œå¥¹å¸¦ç€ä¸¤ä¸ªå„¿å­é©¾é©¶ Motorwagen å®Œæˆäº†ä»Žæ›¼æµ·å§†åˆ°æ™®ç¦å°”èŒ¨æµ·å§†çš„106å…¬é‡Œé•¿é€”æ—…è¡Œâ€”â€”è¿™æ˜¯**ä¸–ç•Œä¸Šç¬¬ä¸€æ¬¡æ±½è½¦é•¿é€”æ—…è¡Œ**ã€‚è¿™æ¬¡æ—…è¡Œä¸ä»…è¯æ˜Žäº†æ±½è½¦çš„å®žç”¨æ€§ï¼ŒBertha è¿˜åœ¨é€”ä¸­å‘æ˜Žäº†åˆ¹è½¦ç‰‡è¡¬åž«ï¼ˆç”¨çš®åŒ çš„çš®é©ï¼‰ï¼Œå¹¶å»ºè®®ä¸ˆå¤«å¢žåŠ ä¸€ä¸ªä½Žé€ŸæŒ¡ç”¨äºŽçˆ¬å¡ã€‚`,

    story_en: `The Patent-Motorwagen's design elegantly solved a fundamental problem: how to make an internal combustion engine drive a controllable vehicle.

The three-wheel design wasn't a compromise â€” it was an ingenious engineering choice. Without reliable differential technology, the three-wheel structure avoided the complex mechanical issues of front-wheel steering. The single-cylinder four-stroke engine displaced 954cc, produced about 0.75 horsepower, and reached a top speed of 16 km/h. These numbers seem trivial today, but in 1886, this was **humanity's first time moving freely without relying on animals or natural forces**.

What truly brought the Motorwagen from laboratory to public eye was Benz's wife, Bertha. In August 1888, she took their two sons on a 106-kilometer journey from Mannheim to Pforzheim â€” **the world's first long-distance automobile trip**. This journey not only proved the car's practicality; along the way, Bertha invented brake pad lining (using a cobbler's leather) and suggested her husband add a lower gear for hill climbing.`,

    legacy: `Patent-Motorwagen çš„ä¸“åˆ©å· DRP 37435 è¢«è§†ä¸ºæ±½è½¦å·¥ä¸šçš„"å‡ºç”Ÿè¯"ã€‚Benz éšåŽåˆ›ç«‹çš„å…¬å¸æœ€ç»ˆä¸Ž Daimler åˆå¹¶ï¼Œæˆä¸ºä»Šå¤©çš„ Mercedes-Benzã€‚

ä½† Motorwagen çš„è®¾è®¡é—äº§è¿œä¸æ­¢å“ç‰Œä¼ æ‰¿ã€‚å®ƒç¡®ç«‹äº†æ±½è½¦ä½œä¸º**æ•´ä½“è®¾è®¡å¯¹è±¡**çš„æ¦‚å¿µâ€”â€”ä¸æ˜¯æ‹¼å‡‘ï¼Œè€Œæ˜¯ä»ŽåŠŸèƒ½åˆ°å½¢å¼çš„å®Œæ•´æ€è€ƒã€‚è¿™ç§ç³»ç»Ÿæ€§è®¾è®¡æ€ç»´å½±å“äº†æ­¤åŽä¸€ä¸ªå¤šä¸–çºªçš„å·¥ä¸šè®¾è®¡æ–¹æ³•è®ºã€‚`,

    legacy_en: `Patent number DRP 37435 is regarded as the "birth certificate" of the automotive industry. The company Benz subsequently founded eventually merged with Daimler to become today's Mercedes-Benz.

But the Motorwagen's design legacy extends far beyond brand heritage. It established the automobile as a **holistic design object** â€” not assembled from parts, but a complete integration of function and form. This systems-thinking approach to design influenced over a century of industrial design methodology.`,

    significance: `Motorwagen è¯æ˜Žäº†ä¸€ä¸ªè®¾è®¡çœŸç†ï¼š**æœ€ä¼Ÿå¤§çš„è®¾è®¡ä¸æ˜¯æ”¹è‰¯çŽ°æœ‰äº‹ç‰©ï¼Œè€Œæ˜¯åˆ›é€ ä¸€ä¸ªå…¨æ–°çš„å“ç±»ã€‚** Benz æ²¡æœ‰åšä¸€è¾†"æ›´å¥½çš„é©¬è½¦"ï¼Œä»–å‘æ˜Žäº†ä¸€ç§å…¨æ–°çš„ç§»åŠ¨æ–¹å¼ã€‚è€Œ Bertha çš„é•¿é€”æ—…è¡Œåˆ™è¯æ˜Žäº†å¦ä¸€ä¸ªçœŸç†ï¼š**è®¾è®¡çš„ä»·å€¼è¦åœ¨çœŸå®žä½¿ç”¨ä¸­æ‰èƒ½è¢«éªŒè¯ã€‚**`,

    significance_en: `The Motorwagen proved a design truth: **the greatest designs don't improve existing things â€” they create entirely new categories.** Benz didn't make a "better carriage"; he invented a fundamentally new way of moving. And Bertha's long-distance journey proved another truth: **the value of design can only be validated through real-world use.**`,
  },

  {
    id: '130',
    date: '2026-01-30',
    imageUrl: '/the-daily-object/images/wuerzburg-residence.jpg',
    fullImageUrl: '/the-daily-object/images/full/wuerzburg-residence.jpg',
    title: 'ç»´å°”èŒ¨å ¡å®«',
    title_en: 'WÃ¼rzburg Residence',
    subtitle: 'Balthasar Neumann, 1744',
    subtitle_en: 'Balthasar Neumann, 1744',
    category: 'architecture',
    designer: 'Balthasar Neumann',
    year: '1744',

    dateConnection: '1687å¹´1æœˆ30æ—¥ï¼Œå·´æ´›å…‹å»ºç­‘å¤§å¸ˆ Balthasar Neumann åœ¨æ³¢å¸Œç±³äºšçš„åŸƒæ ¼å°”ï¼ˆä»Šæ·å…‹èµ«å¸ƒï¼‰å—æ´—ã€‚ä»–è®¾è®¡çš„ç»´å°”èŒ¨å ¡å®«è¢« UNESCO ç§°ä¸º"æ¬§æ´²æœ€æ°å‡ºçš„å·´æ´›å…‹å®«æ®¿ä¹‹ä¸€"ï¼Œå…¶å¤§æ¥¼æ¢¯é—´æ‹¥æœ‰ä¸–ç•Œä¸Šæœ€å¤§çš„å¤©èŠ±æ¿å£ç”»ã€‚',
    dateConnection_en: 'Balthasar Neumann, the Baroque architectural master, was baptised on January 30, 1687 in Eger, Bohemia (now Cheb, Czech Republic). His WÃ¼rzburg Residence is described by UNESCO as "one of the most outstanding Baroque palaces in Europe," with the grand staircase hall featuring the world\'s largest ceiling fresco.',

    designerBio: `Balthasar Neumann (1687â€“1753) æ˜¯å¾·å›½å·´æ´›å…‹å’Œæ´›å¯å¯æ—¶æœŸæœ€ä¼Ÿå¤§çš„å»ºç­‘å¸ˆä¹‹ä¸€ã€‚å‡ºç”ŸäºŽæ³¢å¸Œç±³äºšï¼ŒåŽç§»å±…ç»´å°”èŒ¨å ¡ï¼Œä»Žé“¸ç‚®å·¥åŒ èµ·æ­¥ï¼Œè‡ªå­¦å»ºç­‘ã€‚

ä»–çš„å¤©èµ‹åœ¨äºŽ**ç»“æž„ä¸Žç©ºé—´çš„æžé™æŽ¢ç´¢**â€”â€”ä»–è®¾è®¡çš„æ¥¼æ¢¯ã€ç©¹é¡¶å’Œæ•™å ‚ä¸­æ®¿æŒ‘æˆ˜äº†å½“æ—¶å·¥ç¨‹å­¦çš„è¾¹ç•Œã€‚ä»–ä¸åªæ˜¯è£…é¥°å¤§å¸ˆï¼Œæ›´æ˜¯ç»“æž„å·¥ç¨‹çš„å…ˆé©±ï¼Œç”¨æ•°å­¦å’ŒåŠ›å­¦çŸ¥è¯†å®žçŽ°äº†å‰æ‰€æœªæœ‰çš„ç©ºé—´æ•ˆæžœã€‚`,

    designerBio_en: `Balthasar Neumann (1687â€“1753) was one of the greatest architects of the German Baroque and Rococo periods. Born in Bohemia, he later settled in WÃ¼rzburg, starting as a cannon founder before teaching himself architecture.

His genius lay in **pushing the limits of structure and space** â€” the staircases, domes, and church naves he designed challenged the boundaries of contemporary engineering. He wasn't merely a master of decoration but a pioneer of structural engineering, using mathematics and mechanics to achieve unprecedented spatial effects.`,

    story: `ç»´å°”èŒ¨å ¡å®« (WÃ¼rzburger Residenz) å§‹å»ºäºŽ1720å¹´ï¼ŒåŽ†æ—¶çº¦24å¹´å®Œæˆä¸»ä½“ç»“æž„ã€‚è¿™åº§å®«æ®¿æ˜¯ç»´å°”èŒ¨å ¡äº²çŽ‹ä¸»æ•™çš„åºœé‚¸ï¼ŒNeumann ä»Žæœ€åˆçš„è®¾è®¡ç«žèµ›ä¸­è„±é¢–è€Œå‡ºï¼Œæ­¤åŽå°†æ¯•ç”Ÿç²¾åŠ›å€¾æ³¨äºŽè¿™åº§å»ºç­‘ã€‚

**å¤§æ¥¼æ¢¯é—´ (Treppenhaus) æ˜¯æ•´åº§å®«æ®¿çš„çµé­‚ï¼Œä¹Ÿæ˜¯å»ºç­‘å²ä¸Šçš„å¥‡è¿¹ã€‚** ä¸€ä¸ª18Ã—32ç±³ã€æ²¡æœ‰ä»»ä½•æŸ±å­æ”¯æ’‘çš„å·¨å¤§ç©ºé—´ä¸Šæ–¹ï¼Œæ‚¬æµ®ç€ä¸€ä¸ªè‡ªæ‰¿é‡ç©¹é¡¶ã€‚å½“æ—¶å‡ ä¹Žæ‰€æœ‰å»ºç­‘å¸ˆéƒ½è®¤ä¸ºè¿™ä¸ªè·¨åº¦ä¸å¯èƒ½å®žçŽ°â€”â€”æ®è¯´æœ‰äººæ‰“èµŒç©¹é¡¶ä¼šå¡Œã€‚Neumann ç”¨ç²¾å¦™çš„åŠ›å­¦è®¡ç®—è¯æ˜Žäº†ä»–ä»¬çš„é”™è¯¯ã€‚

ç©¹é¡¶ä¹‹ä¸Šæ˜¯å¨å°¼æ–¯ç”»å®¶ Giovanni Battista Tiepolo åˆ›ä½œçš„å¤©èŠ±æ¿å£ç”»â€”â€”**ä¸–ç•Œä¸Šæœ€å¤§çš„å•å¹…å¤©èŠ±æ¿å£ç”»**ï¼Œé¢ç§¯çº¦677å¹³æ–¹ç±³ï¼Œæç»˜äº†å››å¤§æ´²çš„å¯“è¨€åœºæ™¯ã€‚å»ºç­‘ä¸Žç»˜ç”»åœ¨è¿™é‡Œè¾¾æˆäº†å®Œç¾Žçš„å…±ç”Ÿï¼šNeumann çš„ç»“æž„ä¸º Tiepolo çš„ç”»ç¬”æä¾›äº†æœ€å®å¤§çš„ç”»å¸ƒï¼Œè€Œ Tiepolo çš„å£ç”»åˆè®© Neumann çš„ç©ºé—´èŽ·å¾—äº†æ— é™çš„è§†è§‰å»¶ä¼¸ã€‚

äºŒæˆ˜ä¸­ç»´å°”èŒ¨å ¡è¢«ç‚¸æˆåºŸå¢Ÿï¼Œä½†å¤§æ¥¼æ¢¯é—´å¥‡è¿¹èˆ¬åœ°å¹¸å­˜ï¼Œç©¹é¡¶å’Œå£ç”»å®Œå¥½æ— æŸã€‚`,

    story_en: `The WÃ¼rzburg Residence (WÃ¼rzburger Residenz) was begun in 1720, with the main structure completed over approximately 24 years. The palace served as the residence of the Prince-Bishops of WÃ¼rzburg, and Neumann emerged from the initial design competition, pouring his life's work into this building.

**The grand staircase hall (Treppenhaus) is the soul of the palace and a miracle of architectural history.** Above an enormous 18Ã—32 meter space with no column support, a self-supporting vault appears to float. Nearly every architect of the time believed this span was impossible â€” reportedly, some bet the vault would collapse. Neumann proved them wrong with brilliant structural calculations.

Above the vault is a ceiling fresco by Venetian painter Giovanni Battista Tiepolo â€” **the world's largest single ceiling fresco**, covering approximately 677 square meters, depicting allegorical scenes of the four continents. Architecture and painting achieved perfect symbiosis here: Neumann's structure provided the grandest canvas for Tiepolo's brush, while Tiepolo's fresco gave Neumann's space infinite visual extension.

During WWII, WÃ¼rzburg was bombed to rubble, yet the grand staircase miraculously survived â€” vault and fresco intact.`,

    legacy: `ç»´å°”èŒ¨å ¡å®«1981å¹´è¢«åˆ—å…¥ UNESCO ä¸–ç•Œæ–‡åŒ–é—äº§ï¼Œè¢«èª‰ä¸ºä¸Žå‡¡å°”èµ›å®«å’Œç¾Žæ³‰å®«å¹¶åˆ—çš„æ¬§æ´²ä¸‰å¤§å·´æ´›å…‹å®«æ®¿ä¹‹ä¸€ã€‚Neumann å¯¹ç»“æž„åŠ›å­¦çš„åˆ›æ–°â€”â€”ç‰¹åˆ«æ˜¯å¤§è·¨åº¦æ— æŸ±ç©ºé—´çš„å®žçŽ°â€”â€”å½±å“äº†åŽä¸–æ•°ç™¾å¹´çš„å»ºç­‘å·¥ç¨‹å­¦ã€‚

ä»–è®¾è®¡çš„åå››åœ£äººæ•™å ‚ (Vierzehnheiligen) åŒæ ·æ˜¯å·´æ´›å…‹å»ºç­‘çš„å·…å³°ä¹‹ä½œï¼Œå±•ç¤ºäº†ä»–å°†æ¤­åœ†ä¸Žåœ†ç›¸äº’ç©¿æ’ã€åˆ›é€ æµåŠ¨ç©ºé—´çš„ç‹¬ç‰¹èƒ½åŠ›ã€‚`,

    legacy_en: `The WÃ¼rzburg Residence was inscribed as a UNESCO World Heritage Site in 1981, celebrated as one of Europe's three greatest Baroque palaces alongside Versailles and SchÃ¶nbrunn. Neumann's structural innovations â€” particularly achieving large column-free spans â€” influenced centuries of subsequent architectural engineering.

His Basilica of the Fourteen Holy Helpers (Vierzehnheiligen) is equally a pinnacle of Baroque architecture, showcasing his unique ability to interweave ellipses and circles to create flowing spatial experiences.`,

    significance: `Neumann è¯æ˜Žäº†**ä¼Ÿå¤§çš„å»ºç­‘ä¸æ˜¯é€‰æ‹©ç»“æž„æˆ–ç¾Žå­¦ï¼Œè€Œæ˜¯è®©ä¸¤è€…åˆä¸€ã€‚** å¤§æ¥¼æ¢¯é—´çš„ç©¹é¡¶æ—¢æ˜¯å·¥ç¨‹å£®ä¸¾ï¼Œä¹Ÿæ˜¯è‰ºæœ¯ç”»å¸ƒã€‚åœ¨ä»Šå¤©"ç½‘çº¢å»ºç­‘"æ³›æ»¥çš„æ—¶ä»£ï¼Œç»´å°”èŒ¨å ¡å®«æé†’æˆ‘ä»¬ï¼šçœŸæ­£çš„å»ºç­‘æ°ä½œæ˜¯**ç»“æž„è¯šå®žä¸Žç©ºé—´è¯—æ„çš„ç»Ÿä¸€**ã€‚`,

    significance_en: `Neumann proved that **great architecture doesn't choose between structure and aesthetics â€” it unifies them.** The grand staircase vault is both an engineering feat and an artistic canvas. In today's era of "Instagram architecture," the WÃ¼rzburg Residence reminds us that true architectural masterpieces are **the unity of structural honesty and spatial poetry.**`,
  },

  {
    id: '123',
    date: '2026-01-23',
    imageUrl: '/the-daily-object/images/manet-olympia.jpg',
    fullImageUrl: '/the-daily-object/images/full/manet-olympia.jpg',
    title: 'å¥¥æž—åŒ¹äºš',
    title_en: 'Olympia',
    subtitle: 'Ã‰douard Manet, 1863',
    subtitle_en: 'Ã‰douard Manet, 1863',
    category: 'art',
    designer: 'Ã‰douard Manet',
    year: '1863',

    dateConnection: '1832å¹´1æœˆ23æ—¥ï¼ŒÃ‰douard Manet å‡ºç”ŸäºŽå·´é»Žã€‚ä»–è¢«å…¬è®¤ä¸ºçŽ°ä»£ä¸»ä¹‰ç»˜ç”»çš„å¥ åŸºäººï¼Œã€Šå¥¥æž—åŒ¹äºšã€‹æ˜¯ä»–æœ€å…·é¢ è¦†æ€§çš„ä½œå“â€”â€”ä¸€å¹…è®©æ•´ä¸ªå·´é»Žè‰ºæœ¯ç•Œç‚¸é”…çš„ç”»ã€‚',
    dateConnection_en: 'Ã‰douard Manet was born on January 23, 1832 in Paris. Widely regarded as the founding figure of modernist painting, his Olympia remains one of the most subversive works in art history â€” a painting that scandalized the entire Parisian art world.',

    designerBio: `Ã‰douard Manet (1832â€“1883)ï¼Œæ³•å›½ç”»å®¶ï¼ŒçŽ°ä»£è‰ºæœ¯çš„å…³é”®å¼€åˆ›è€…ã€‚

å‡ºç”ŸäºŽå·´é»Žä¸Šæµç¤¾ä¼šå®¶åº­ï¼Œçˆ¶äº²å¸Œæœ›ä»–ä»Žäº‹æ³•å¾‹ï¼Œæ¯äº²é¼“åŠ±ä»–çš„è‰ºæœ¯å¤©èµ‹ã€‚ä»–æ›¾åœ¨æµ·å†›æœå½¹ï¼Œæœ€ç»ˆé€‰æ‹©äº†ç»˜ç”»ã€‚å¸ˆä»Žå­¦é™¢æ´¾ç”»å®¶ Thomas Coutureï¼Œä½†å¾ˆå¿«å°±å¯¹å­¦é™¢æ´¾çš„é™ˆè§„æ„Ÿåˆ°åŽŒå€¦ã€‚

**"æˆ‘ç”»æˆ‘æ‰€è§ï¼Œè€Œéžäººä»¬å¸Œæœ›æˆ‘è§åˆ°çš„ã€‚"**

Manet ä¸å±žäºŽä»»ä½•æµæ´¾ã€‚ä»–ä¸æ˜¯å°è±¡æ´¾â€”â€”è™½ç„¶å°è±¡æ´¾ç”»å®¶è§†ä»–ä¸ºç²¾ç¥žé¢†è¢–ã€‚ä»–æ˜¯ä¸€ä¸ªå­¤ç‹¬çš„é©å‘½è€…ï¼Œç«™åœ¨ä¼ ç»Ÿä¸ŽçŽ°ä»£çš„è£‚ç¼ä¹‹é—´ï¼Œå‘ä¸¤è¾¹åŒæ—¶å¼€ç«ã€‚`,

    designerBio_en: `Ã‰douard Manet (1832â€“1883), French painter and a pivotal figure in the birth of modern art.

Born into an affluent Parisian family, his father wanted him in law while his mother encouraged his artistic talents. After a stint in the navy, he chose painting. He studied under academic painter Thomas Couture but quickly grew restless with academic conventions.

**"I paint what I see, not what others wish me to see."**

Manet belonged to no movement. He wasn't an Impressionist â€” though the Impressionists regarded him as their spiritual leader. He was a solitary revolutionary, standing in the fault line between tradition and modernity, firing in both directions.`,

    story: `1865å¹´å·´é»Žæ²™é¾™ã€‚Manet å±•å‡ºäº†ä¸€å¹…è£¸ä½“å¥³æ€§çš„ç”»ä½œã€‚è£¸ä½“åœ¨å­¦é™¢æ´¾ç»˜ç”»ä¸­å¸ç©ºè§æƒ¯â€”â€”ç»´çº³æ–¯ã€ä»™å¥³ã€å¥³ç¥žï¼Œéƒ½æ˜¯å¯ä»¥æŽ¥å—çš„ã€‚

ä½†ã€Šå¥¥æž—åŒ¹äºšã€‹ä¸æ˜¯ç»´çº³æ–¯ã€‚

**å¥¹æ˜¯ä¸€ä¸ªå¦“å¥³ã€‚** å¥¹çš„åå­—"Olympia"åœ¨å½“æ—¶çš„å·´é»Žæ˜¯å¦“å¥³çš„é€šç”¨åã€‚å¥¹æˆ´ç€é¢ˆå¸¦å’Œæ‰‹é•¯ï¼Œè„šç©¿æ‹–éž‹ï¼Œèº«æ—æ˜¯ä¸€ä½é»‘äººå¥³ä»†é€’ä¸Šå®¢äººé€çš„èŠ±æŸã€‚ä¸€åªé»‘çŒ«å¼“ç€èƒŒç«™åœ¨åºŠå°¾â€”â€”åœ¨å½“æ—¶çš„è±¡å¾è¯­è¨€ä¸­ï¼Œè¿™ä»£è¡¨æ€§ã€‚

æœ€ä»¤äººä¸å®‰çš„æ˜¯å¥¹çš„ç›®å…‰ã€‚å¥¹ç›´è§†è§‚ä¼—ï¼Œæ¯«ä¸ç¾žæ„§ï¼Œç”šè‡³å¸¦ç€ä¸€ä¸æŒ‘è¡…ã€‚ä¼ ç»Ÿè£¸ä½“ç”»ä¸­çš„å¥³æ€§æ€»æ˜¯å›žé¿ç›®å…‰ï¼Œå‡è£…ä¸çŸ¥é“æœ‰äººåœ¨çœ‹ã€‚**Olympia çŸ¥é“ä½ åœ¨çœ‹å¥¹ï¼Œè€Œä¸”å¥¹ä¸åœ¨ä¹Žã€‚**

æ²™é¾™é‡Œä¸€ç‰‡å“—ç„¶ã€‚è¯„è®ºå®¶ç§°ä¹‹ä¸º"é“å¾·è´¥å"ï¼Œè§‚ä¼—è¯•å›¾ç”¨é›¨ä¼žæˆ³ç”»å¸ƒã€‚å±•è§ˆæ–¹ä¸å¾—ä¸æ´¾å®ˆå«ä¿æŠ¤è¿™å¹…ç”»ï¼Œå¹¶å°†å®ƒç§»åˆ°æœ€é«˜å¤„ï¼Œè¿œç¦»æ„¤æ€’çš„äººç¾¤ã€‚

ä½† Manet åšçš„äº‹æƒ…è¿œæ¯”ç”»ä¸€ä¸ªå¦“å¥³æ›´æ·±åˆ»ï¼šä»–æ‘§æ¯äº†ç»˜ç”»çš„å¹»è§‰ã€‚å¹³å¦çš„è‰²å—å–ä»£äº†ä¼ ç»Ÿçš„æ˜Žæš—æ¸å˜ï¼Œç”»é¢ä¸­å‡ ä¹Žæ²¡æœ‰æ™¯æ·±ã€‚è¿™ä¸æ˜¯"åƒç…§ç‰‡ä¸€æ ·"çš„å†™å®žâ€”â€”è¿™æ˜¯**æ‰¿è®¤è‡ªå·±æ˜¯ä¸€å¹…ç”»**çš„ç»˜ç”»ã€‚`,

    story_en: `The Paris Salon of 1865. Manet exhibited a painting of a nude woman. Nudes were commonplace in academic painting â€” Venus, nymphs, goddesses were all acceptable subjects.

But Olympia was not Venus.

**She was a courtesan.** Her name "Olympia" was a common pseudonym for Parisian prostitutes. She wore a choker and bracelet, slippers on her feet, while a Black maid presented a bouquet from a client. A black cat arched its back at the foot of the bed â€” in the symbolic language of the time, it represented sexuality.

Most disturbing was her gaze. She stared directly at the viewer, unashamed, even defiant. Women in traditional nudes always averted their eyes, pretending not to know they were being observed. **Olympia knew you were looking at her, and she didn't care.**

The Salon erupted. Critics called it "morally corrupt," visitors tried to stab the canvas with their umbrellas. Exhibition staff had to post guards and eventually moved it to the highest position on the wall, away from the angry crowds.

But what Manet did went far deeper than painting a courtesan: he shattered the illusion of painting itself. Flat blocks of color replaced traditional chiaroscuro, with almost no depth of field. This wasn't photographic realism â€” this was **painting that acknowledged itself as painting.**`,

    legacy: `ã€Šå¥¥æž—åŒ¹äºšã€‹ç›´æŽ¥å¯å‘äº†æ•´ä¸ªçŽ°ä»£è‰ºæœ¯è¿åŠ¨ã€‚å°è±¡æ´¾ã€åŽå°è±¡æ´¾ã€ç”šè‡³æ¯•åŠ ç´¢éƒ½ä»Ž Manet çš„å¹³é¢åŒ–å¤„ç†ä¸­æ±²å–çµæ„Ÿã€‚è¿™å¹…ç”»çŽ°è—äºŽå·´é»Žå¥¥èµ›åšç‰©é¦†ï¼Œè¢«è§†ä¸ºä»Žå¤å…¸ç»˜ç”»åˆ°çŽ°ä»£è‰ºæœ¯çš„è½¬æŠ˜ç‚¹ã€‚

Manet è¯æ˜Žäº†è‰ºæœ¯å¯ä»¥ç›´é¢çŽ°å®žã€æ‹’ç»ç¾ŽåŒ–ã€æŒ‘æˆ˜è§‚ä¼—çš„èˆ’é€‚åŒºâ€”â€”åŒæ—¶ä»ç„¶æ˜¯ä¼Ÿå¤§çš„ç»˜ç”»ã€‚`,

    legacy_en: `Olympia directly inspired the entire modern art movement. Impressionism, Post-Impressionism, even Picasso drew from Manet's flattening of pictorial space. The painting now hangs in the MusÃ©e d'Orsay in Paris, recognized as the turning point from classical painting to modern art.

Manet proved that art could confront reality, refuse to beautify, and challenge the viewer's comfort zone â€” while still being great painting.`,

    significance: `Manet æ•™ä¼šäº†åŽæ¥æ‰€æœ‰çš„è‰ºæœ¯å®¶ä¸€ä»¶äº‹ï¼š**æœ€å±é™©çš„åˆ›æ–°ä¸æ˜¯æŠ€æ³•ä¸Šçš„çªç ´ï¼Œè€Œæ˜¯è§‚çœ‹æ–¹å¼çš„æ”¹å˜ã€‚** Olympia çš„æŠ€æ³•å¹¶ä¸å¤æ‚ï¼Œç”šè‡³è¢«å½“æ—¶çš„äººæ‰¹è¯„ä¸º"ç²—ç³™"ã€‚ä½†å¥¹æ”¹å˜äº†äººä»¬çœ‹ç”»çš„æ–¹å¼â€”â€”ä»Žè¢«åŠ¨çš„å®¡ç¾Žæ¬£èµï¼Œå˜æˆäº†ä¸»åŠ¨çš„ã€ä¸èˆ’æœçš„å¯¹è§†ã€‚`,

    significance_en: `Manet taught every artist who followed one thing: **the most dangerous innovation isn't a technical breakthrough, but a change in the way of seeing.** Olympia's technique wasn't complex â€” critics of the time even called it "crude." But she changed how people looked at paintings â€” from passive aesthetic appreciation to an active, uncomfortable confrontation.`,
  },

  {
    id: '124',
    date: '2026-01-24',
    imageUrl: '/the-daily-object/images/macintosh-128k.jpg',
    fullImageUrl: '/the-daily-object/images/full/macintosh-128k.jpg',
    title: 'Macintosh 128K',
    title_en: 'Macintosh 128K',
    subtitle: 'Apple / Hartmut Esslinger, 1984',
    subtitle_en: 'Apple / Hartmut Esslinger, 1984',
    category: 'software',
    designer: 'Apple / Hartmut Esslinger',
    year: '1984',

    dateConnection: '1984å¹´1æœˆ24æ—¥ï¼ŒSteve Jobs åœ¨ Apple è‚¡ä¸œå¤§ä¼šä¸Šå‘å¸ƒäº†åˆä»£ Macintoshã€‚è¿™ä¸ä»…æ˜¯ä¸€å°ç”µè„‘â€”â€”å®ƒæ˜¯å›¾å½¢ç”¨æˆ·ç•Œé¢èµ°å‘å¤§ä¼—çš„åŽ†å²æ€§æ—¶åˆ»ï¼Œæ˜¯"ä¸ªäººç”µè„‘åº”è¯¥æ˜¯ä»€ä¹ˆæ ·"è¿™ä¸ªé—®é¢˜çš„ç¬¬ä¸€ä¸ªçœŸæ­£ç­”æ¡ˆã€‚',
    dateConnection_en: 'On January 24, 1984, Steve Jobs unveiled the original Macintosh at an Apple shareholders meeting. This wasn\'t just a computer â€” it was the historic moment when the graphical user interface reached the masses, the first real answer to the question "what should a personal computer look like."',

    designerBio: `åˆä»£ Macintosh çš„è®¾è®¡æ˜¯ä¸€æ¬¡é›†ä½“åˆ›ä½œã€‚å·¥ä¸šè®¾è®¡ç”± Hartmut Esslinger çš„ frog design å›¢é˜Ÿä¸»å¯¼ï¼ˆSnow White è®¾è®¡è¯­è¨€ï¼‰ï¼Œè½¯ä»¶ç•Œé¢ç”± Bill Atkinsonã€Andy Hertzfeld ç­‰å¤©æ‰å·¥ç¨‹å¸ˆæ‰“é€ ï¼Œè€Œ Steve Jobs æ˜¯é‚£ä¸ªå°†ä¸€åˆ‡æŽ¨å‘æžè‡´çš„äººã€‚

Susan Kare è®¾è®¡äº† Mac ä¸Šå‡ ä¹Žæ‰€æœ‰çš„å›¾æ ‡å’Œå­—ä½“â€”â€”åŒ…æ‹¬é‚£ä¸ªç»å…¸çš„ç¬‘è„¸å¯åŠ¨å›¾æ ‡ã€Chicago å­—ä½“ã€ä»¥åŠåžƒåœ¾æ¡¶å›¾æ ‡ã€‚å¥¹è¢«ç§°ä¸º"Mac çš„æ¯•åŠ ç´¢"ã€‚

**"æˆ‘ä»¬è¦åšçš„ä¸æ˜¯ä¸€å°æ›´å¥½çš„ç”µè„‘ï¼Œè€Œæ˜¯ä¸€å°è®©æ‰€æœ‰äººéƒ½èƒ½ç”¨çš„ç”µè„‘ã€‚"** â€” Steve Jobs`,

    designerBio_en: `The original Macintosh was a collective creation. Industrial design was led by Hartmut Esslinger's frog design team (the Snow White design language), the software interface was built by brilliant engineers like Bill Atkinson and Andy Hertzfeld, and Steve Jobs was the one who pushed everything to the extreme.

Susan Kare designed nearly all of the Mac's icons and fonts â€” including the iconic smiling face startup icon, the Chicago typeface, and the trash can icon. She's been called "the Picasso of the Mac."

**"We're not making a better computer. We're making a computer for everyone."** â€” Steve Jobs`,

    story: `1984å¹´1æœˆ22æ—¥ï¼ŒApple åœ¨è¶…çº§ç¢—ä¸Šæ’­å‡ºäº†ç”± Ridley Scott æ‰§å¯¼çš„"1984"å¹¿å‘Šâ€”â€”ä¸€ä¸ªå¥³è¿åŠ¨å‘˜å†²å…¥ç°æš—çš„å¤§åŽ…ï¼Œç”¨é“é”¤ç ¸ç¢Žäº†å·¨å¹•ä¸Š"è€å¤§å“¥"çš„è„¸ã€‚ä¸¤å¤©åŽï¼ŒJobs æ‹‰å¼€äº† Macintosh çš„å¹•å¸ƒã€‚

å½“ Mac çš„å±å¹•äº®èµ·ï¼Œå®ƒç”¨åˆæˆè¯­éŸ³è¯´å‡ºäº†ç¬¬ä¸€å¥è¯ï¼š**"Hello. I am Macintosh. It sure is great to get out of that bag."** å…¨åœºèµ·ç«‹é¼“æŽŒã€‚

è¿™å°ç”µè„‘é‡ 7.5 å…¬æ–¤ï¼Œåªæœ‰ 128KB å†…å­˜ï¼Œ9è‹±å¯¸é»‘ç™½å±å¹•ã€‚ä½†å®ƒæœ‰é¼ æ ‡ã€æœ‰å›¾å½¢ç•Œé¢ã€æœ‰æ¡Œé¢éšå–»â€”â€”æ–‡ä»¶å¤¹ã€åžƒåœ¾æ¡¶ã€çª—å£ã€‚ä½ ä¸éœ€è¦è®°ä½å‘½ä»¤è¡Œï¼Œä½ åªéœ€è¦**æŒ‡å’Œç‚¹**ã€‚

Macintosh æœ€é©å‘½æ€§çš„ä¸æ˜¯ç¡¬ä»¶è§„æ ¼ï¼Œè€Œæ˜¯**æ€åº¦**ã€‚å®ƒå‡è®¾ç”¨æˆ·æ˜¯èªæ˜Žçš„æ™®é€šäººï¼Œè€ŒéžæŠ€æœ¯æžå®¢ã€‚å®ƒç”¨è§†è§‰éšå–»æ›¿ä»£äº†ä»£ç å‘½ä»¤ï¼Œç”¨äººç±»ç›´è§‰æ›¿ä»£äº†æœºå™¨é€»è¾‘ã€‚

å•†ä¸šä¸Šï¼Œåˆä»£ Mac å¹¶ä¸ç®—æˆåŠŸâ€”â€”ä»·æ ¼å¤ªé«˜ï¼ˆ$2,495ï¼‰ã€å†…å­˜å¤ªå°ã€è½¯ä»¶å¤ªå°‘ã€‚ä½†å®ƒç§ä¸‹çš„ç§å­æœ€ç»ˆæ”¹å˜äº†æ•´ä¸ªè®¡ç®—æœºè¡Œä¸šã€‚`,

    story_en: `On January 22, 1984, Apple aired its Ridley Scott-directed "1984" commercial during the Super Bowl â€” a female athlete charging into a gray hall, smashing the face of "Big Brother" on a giant screen with a sledgehammer. Two days later, Jobs unveiled the Macintosh.

When the Mac's screen lit up, it spoke its first words in synthesized voice: **"Hello. I am Macintosh. It sure is great to get out of that bag."** The audience gave a standing ovation.

The computer weighed 7.5 kg, had only 128KB of RAM, and a 9-inch black-and-white screen. But it had a mouse, a graphical interface, and the desktop metaphor â€” folders, a trash can, windows. You didn't need to memorize command lines; you just needed to **point and click.**

The Macintosh's most revolutionary aspect wasn't its hardware specs, but its **attitude.** It assumed users were smart ordinary people, not tech geeks. It replaced code commands with visual metaphors, machine logic with human intuition.

Commercially, the original Mac wasn't exactly a hit â€” too expensive ($2,495), too little RAM, too few software titles. But the seeds it planted ultimately transformed the entire computer industry.`,

    legacy: `åˆä»£ Macintosh ç¡®ç«‹äº†å›¾å½¢ç”¨æˆ·ç•Œé¢çš„è®¾è®¡èŒƒå¼â€”â€”æ¡Œé¢éšå–»ã€çª—å£ç³»ç»Ÿã€é¼ æ ‡äº¤äº’â€”â€”è¿™å¥—èŒƒå¼è‡³ä»Šä»æ˜¯æ‰€æœ‰ä¸ªäººç”µè„‘çš„åŸºç¡€ã€‚Susan Kare çš„å›¾æ ‡è®¾è®¡å¼€åˆ›äº†åƒç´ è‰ºæœ¯ç¾Žå­¦ï¼Œå½±å“äº†æ­¤åŽå››åå¹´çš„ UI è®¾è®¡ã€‚

ä»Ž iPod åˆ° iPhoneï¼ŒApple åŽæ¥æ‰€æœ‰äº§å“çš„è®¾è®¡å“²å­¦â€”â€”"æŠ€æœ¯åº”è¯¥ä¸ºäººæœåŠ¡ï¼Œè€Œä¸æ˜¯ç›¸å"â€”â€”éƒ½æºè‡ª1984å¹´1æœˆ24æ—¥é‚£å° 128K Macintoshã€‚`,

    legacy_en: `The original Macintosh established the GUI design paradigm â€” the desktop metaphor, window systems, mouse interaction â€” a paradigm that remains the foundation of all personal computers today. Susan Kare's icon designs pioneered pixel art aesthetics, influencing four decades of UI design.

From iPod to iPhone, the design philosophy behind every Apple product â€” "technology should serve people, not the other way around" â€” traces back to that 128K Macintosh on January 24, 1984.`,

    significance: `Macintosh 128K è¯æ˜Žäº†ä¸€ä»¶è‡³ä»Šä»ç„¶é‡è¦çš„äº‹ï¼š**è®¾è®¡ä¸æ˜¯åœ¨å·¥ç¨‹å®ŒæˆåŽçš„è£…é¥°ï¼Œè€Œæ˜¯å·¥ç¨‹çš„èµ·ç‚¹ã€‚** Jobs ä¸æ˜¯è®©å·¥ç¨‹å¸ˆåšå®Œç”µè„‘ç„¶åŽ"è®¾è®¡ä¸€ä¸‹å¤–å£³"ï¼Œä»–ä»Žäººçš„ä½“éªŒå‡ºå‘ï¼Œå€’æŽ¨å‡ºæŠ€æœ¯éœ€è¦åšä»€ä¹ˆã€‚è¿™ç§"è®¾è®¡é©±åŠ¨å·¥ç¨‹"çš„æ€ç»´æ–¹å¼ï¼Œè‡³ä»Šæ˜¯ç¡…è°·æœ€ç¨€ç¼ºçš„èƒ½åŠ›ã€‚`,

    significance_en: `The Macintosh 128K proved something still vital today: **design isn't decoration applied after engineering is done â€” it's where engineering begins.** Jobs didn't ask engineers to build a computer and then "design a case for it." He started from the human experience and worked backward to determine what the technology needed to do. This "design-driven engineering" mindset remains Silicon Valley's scarcest capability.`,
  },

  {
    id: '125',
    date: '2026-01-25',
    imageUrl: '/the-daily-object/images/nike-air-jordan-1.jpg',
    fullImageUrl: '/the-daily-object/images/full/nike-air-jordan-1.jpg',
    title: 'Nike Air Jordan I',
    title_en: 'Nike Air Jordan I',
    subtitle: 'Peter Moore / Nike, 1985',
    subtitle_en: 'Peter Moore / Nike, 1985',
    category: 'fashion',
    designer: 'Peter Moore',
    year: '1985',

    dateConnection: '1964å¹´1æœˆ25æ—¥ï¼Œä¿„å‹’å†ˆå¤§å­¦ç”°å¾„è¿åŠ¨å‘˜ Phil Knight å’Œæ•™ç»ƒ Bill Bowerman ä»¥ $500 å„å‡ºä¸€åŠåˆ›ç«‹äº† Blue Ribbon Sportsâ€”â€”è¿™å®¶å…¬å¸åŽæ¥æ”¹åä¸º Nikeã€‚ä»Ž $1,000 èµ·æ­¥çš„è¿åŠ¨éž‹å°ä½œåŠï¼Œæˆé•¿ä¸ºå®šä¹‰å…¨çƒè¿åŠ¨æ—¶å°šçš„å¸å›½ã€‚',
    dateConnection_en: 'On January 25, 1964, University of Oregon track athlete Phil Knight and coach Bill Bowerman each put in $500 to found Blue Ribbon Sports â€” the company that would later become Nike. From a $1,000 sneaker startup to the empire that defined global athletic fashion.',

    designerBio: `Peter Moore æ˜¯ Nike çš„ç¬¬ä¸€ä»»åˆ›æ„æ€»ç›‘ï¼ŒAir Jordan I çš„è®¾è®¡è€…ã€‚

åœ¨åŠ å…¥ Nike ä¹‹å‰ï¼ŒMoore æ˜¯ä¸€ä½å¹¿å‘Šäººã€‚ä»–ä¸º Nike å¸¦æ¥äº†ä¸€ç§å…¨æ–°çš„æ€ç»´ï¼šè¿åŠ¨éž‹ä¸åªæ˜¯è¿åŠ¨è£…å¤‡ï¼Œ**å®ƒæ˜¯æ–‡åŒ–ç¬¦å·**ã€‚ä»–è®¾è®¡äº† Air Jordan I çš„çº¢é»‘é…è‰²â€”â€”æ•…æ„è¿å NBA å½“æ—¶"çƒéž‹å¿…é¡»ä»¥ç™½è‰²ä¸ºä¸»"çš„è§„å®šã€‚NBA æ¯åœºç½šæ¬¾ $5,000ï¼ŒNike æ›¿ Jordan äº¤äº†ç½šæ¬¾ï¼Œç„¶åŽæŠŠè¿™å˜æˆäº†è¥é”€â€”â€”**"è¢«ç¦æ­¢çš„çƒéž‹"**ã€‚

Moore è¿˜è®¾è®¡äº†ç»å…¸çš„ Jumpman æ ‡å¿—å’Œ Nike "Wings" logoã€‚`,

    designerBio_en: `Peter Moore was Nike's first creative director and the designer of the Air Jordan I.

Before joining Nike, Moore was an adman. He brought Nike a radical new perspective: sneakers weren't just athletic equipment â€” **they were cultural symbols.** He designed the Air Jordan I in red and black â€” deliberately violating the NBA's rule that shoes must be predominantly white. The NBA fined Jordan $5,000 per game; Nike paid the fines and turned it into marketing â€” **"the banned sneaker."**

Moore also designed the iconic Jumpman logo and the Nike "Wings" logo.`,

    story: `1984å¹´ï¼ŒMichael Jordan è¿˜æ˜¯ä¸ª NBA æ–°ç§€ã€‚Nike å½“æ—¶æ˜¯è·‘éž‹å“ç‰Œï¼Œåœ¨ç¯®çƒå¸‚åœºè¿œè½åŽäºŽ Converse å’Œ adidasã€‚ç­¾ä¸‹ Jordan æ˜¯ä¸€åœºè±ªèµŒâ€”â€”ç»™ä¸€ä¸ªæ²¡æ‰“è¿‡ä¸€åœº NBA æ¯”èµ›çš„æ–°äººä¸€ä»½ $2.5M çš„åˆåŒã€‚

Peter Moore è®¾è®¡çš„ Air Jordan I æ‰“ç ´äº†æ‰€æœ‰è§„åˆ™ã€‚çº¢é»‘é…è‰²åœ¨å½“æ—¶çš„çƒéž‹ç•Œé—»æ‰€æœªé—»â€”â€”NBA è§„å®šçƒéž‹å¿…é¡»ä»¥ç™½è‰²ä¸ºä¸»å¹¶ä¸”å…¨é˜Ÿç»Ÿä¸€ã€‚Jordan ç©¿ç€è¿™åŒéž‹ä¸Šåœºï¼Œè”ç›Ÿç«‹å³å‘å‡ºç¦ä»¤ã€‚

**Nike çš„å¤©æ‰å›žåº”ï¼šæŠŠç¦ä»¤å˜æˆå¹¿å‘Šã€‚**

"On October 15, Nike created a revolutionary new basketball shoe. On October 18, the NBA threw them out of the game. Fortunately, the NBA can't keep you from wearing them."

Air Jordan I ä¸ä»…ä»…æ˜¯ä¸€åŒéž‹ã€‚å®ƒå‘æ˜Žäº†"ç­¾åçƒéž‹"è¿™ä¸ªæ¦‚å¿µâ€”â€”ä¸€åŒéž‹å¯ä»¥æ‰¿è½½ä¸€ä¸ªè¿åŠ¨å‘˜çš„ä¸ªæ€§ã€é£Žæ ¼å’Œæ•…äº‹ã€‚å®ƒå¼€åˆ›äº†çƒéž‹æ–‡åŒ–ï¼ˆsneaker cultureï¼‰â€”â€”å¹´è½»äººæŽ’é˜Ÿå‡ å¤©åªä¸ºä¹°ä¸€åŒé™é‡ç‰ˆçƒéž‹ã€‚

ç¬¬ä¸€å¹´ï¼ŒAir Jordan ç³»åˆ—å–å‡ºäº† $126Mâ€”â€”æ˜¯ Nike é¢„æœŸçš„ä¸‰å€ã€‚`,

    story_en: `In 1984, Michael Jordan was an NBA rookie. Nike was a running shoe brand, far behind Converse and adidas in basketball. Signing Jordan was a gamble â€” a $2.5M contract for a player who hadn't played a single NBA game.

Peter Moore's Air Jordan I broke every rule. The red-and-black colorway was unheard of in basketball footwear â€” the NBA mandated shoes be predominantly white and uniform across the team. Jordan wore them on court; the league immediately issued a ban.

**Nike's genius response: turn the ban into an ad.**

"On October 15, Nike created a revolutionary new basketball shoe. On October 18, the NBA threw them out of the game. Fortunately, the NBA can't keep you from wearing them."

The Air Jordan I wasn't just a shoe. It invented the concept of the "signature sneaker" â€” a shoe that could carry an athlete's personality, style, and story. It birthed sneaker culture â€” young people camping out for days to buy limited-edition releases.

In its first year, the Air Jordan line sold $126M â€” three times Nike's projection.`,

    legacy: `Air Jordan I å¼€åˆ›äº†ä»·å€¼æ•°åäº¿ç¾Žå…ƒçš„çƒéž‹æ–‡åŒ–äº§ä¸šã€‚ä»Šå¤©ï¼Œé™é‡çƒéž‹çš„è½¬å”®å¸‚åœºä¼°å€¼è¶…è¿‡ $60Bã€‚ä»Ž Virgil Abloh åˆ° Travis Scottï¼Œçƒéž‹æˆä¸ºäº†æ—¶å°šã€è¡—å¤´æ–‡åŒ–å’Œèº«ä»½è®¤åŒçš„æ ¸å¿ƒè½½ä½“ã€‚

è€Œ Nike ä»Žä¸€å®¶ $1,000 èµ·æ­¥çš„å°å…¬å¸ï¼Œæˆé•¿ä¸ºå¸‚å€¼è¶…è¿‡ $1,500 äº¿çš„å…¨çƒå“ç‰Œâ€”â€”è¿™ä¸€åˆ‡å§‹äºŽ1964å¹´1æœˆ25æ—¥çš„é‚£ $1,000ã€‚`,

    legacy_en: `The Air Jordan I spawned a multi-billion-dollar sneaker culture industry. Today, the sneaker resale market is valued at over $60B. From Virgil Abloh to Travis Scott, sneakers have become a core vehicle for fashion, street culture, and identity.

Nike grew from a $1,000 startup into a global brand worth over $150B â€” all of it beginning with that $1,000 on January 25, 1964.`,

    significance: `Air Jordan I è¯æ˜Žäº†**è®¾è®¡å¯ä»¥åˆ›é€ æ–‡åŒ–**ã€‚Peter Moore ä¸åªæ˜¯è®¾è®¡äº†ä¸€åŒå¥½çœ‹çš„éž‹â€”â€”ä»–è®¾è®¡äº†ä¸€ç§å™äº‹æ–¹å¼ï¼šé€šè¿‡äº§å“è®²è¿°ä¸€ä¸ªäººçš„æ•…äº‹ã€‚è¿™ç§"äº§å“å³å™äº‹"çš„è®¾è®¡æ€ç»´ï¼ŒåŽæ¥æˆä¸ºäº†ä»Ž Apple åˆ° Supreme çš„æ ¸å¿ƒæ–¹æ³•è®ºã€‚`,

    significance_en: `The Air Jordan I proved that **design can create culture.** Peter Moore didn't just design a good-looking shoe â€” he designed a narrative framework: telling a person's story through a product. This "product as narrative" design thinking later became the core methodology from Apple to Supreme.`,
  },

  {
    id: '126',
    date: '2026-01-26',
    imageUrl: '/the-daily-object/images/phantom-of-the-opera.jpg',
    fullImageUrl: '/the-daily-object/images/full/phantom-of-the-opera.jpg',
    title: 'æ­Œå‰§é­…å½±',
    title_en: 'The Phantom of the Opera',
    subtitle: 'Maria BjÃ¶rnson, 1986',
    subtitle_en: 'Maria BjÃ¶rnson, 1986',
    category: 'film',
    designer: 'Maria BjÃ¶rnson',
    year: '1986',

    dateConnection: '1988å¹´1æœˆ26æ—¥ï¼ŒAndrew Lloyd Webber çš„ã€Šæ­Œå‰§é­…å½±ã€‹åœ¨çº½çº¦ç™¾è€æ±‡ Majestic Theatre é¦–æ¼”ã€‚æ­¤åŽå®ƒè¿žç»­æ¼”å‡º 35 å¹´ï¼Œæˆä¸ºç™¾è€æ±‡åŽ†å²ä¸Šæœ€é•¿å¯¿çš„å‰§ç›®ï¼Œä¹Ÿæ˜¯å…¨çƒç¥¨æˆ¿æœ€é«˜çš„å¨±ä¹ä½œå“ä¹‹ä¸€ã€‚è€Œè¿™ä¸€åˆ‡çš„è§†è§‰é­”æ³•ï¼Œæ¥è‡ªä¸€ä½ä¸ä¸ºå¤§ä¼—æ‰€çŸ¥çš„è®¾è®¡å¤©æ‰ï¼šMaria BjÃ¶rnsonã€‚',
    dateConnection_en: 'On January 26, 1988, Andrew Lloyd Webber\'s The Phantom of the Opera opened on Broadway at the Majestic Theatre. It would run continuously for 35 years, becoming the longest-running show in Broadway history and one of the highest-grossing entertainment properties ever. All of its visual magic came from a design genius largely unknown to the public: Maria BjÃ¶rnson.',

    designerBio: `Maria BjÃ¶rnson (1949â€“2002)ï¼Œè‹±å›½èˆžå°è®¾è®¡å¸ˆï¼Œå‡ºç”ŸäºŽå·´é»Žï¼Œçˆ¶äº²æ˜¯ç½—é©¬å°¼äºšäººï¼Œæ¯äº²æ˜¯æŒªå¨äººã€‚

å¥¹åœ¨ä¼¦æ•¦ä¸­å¤®åœ£é©¬ä¸è‰ºæœ¯å­¦é™¢å­¦ä¹ ï¼Œå¾ˆæ—©å°±å±•çŽ°å‡ºå°†ç»˜ç”»ã€é›•å¡‘å’Œæˆå‰§èžä¸ºä¸€ä½“çš„èƒ½åŠ›ã€‚åœ¨ä¸ºçš‡å®¶èŽŽå£«æ¯”äºšå‰§å›¢å’Œè‹±å›½å›½å®¶æ­Œå‰§é™¢å·¥ä½œå¤šå¹´åŽï¼Œå¥¹é‡åˆ°äº† Andrew Lloyd Webberã€‚

**BjÃ¶rnson ä¸ºã€Šæ­Œå‰§é­…å½±ã€‹è®¾è®¡äº†ä¸€åˆ‡**â€”â€”å¸ƒæ™¯ã€æœè£…ã€é“å…·ã€ç”šè‡³é‚£ä¸ªæ ‡å¿—æ€§çš„åŠè„¸é¢å…·ã€‚å¥¹åšæŒé¢å…·åªé®åŠå¼ è„¸ï¼Œè€Œéž Lloyd Webber æœ€åˆè®¾æƒ³çš„å…¨è„¸é¢å…·â€”â€”å› ä¸ºåŠå¼ äººè„¸æ¯”å…¨é®æ›´ææ€–ï¼Œ**ä½ çœ‹åˆ°çš„é‚£ä¸€åŠè®©ä½ æƒ³è±¡è¢«é®ä½çš„é‚£ä¸€åŠ**ã€‚`,

    designerBio_en: `Maria BjÃ¶rnson (1949â€“2002), British stage designer, born in Paris to a Romanian father and Norwegian mother.

She studied at London's Central Saint Martins and early showed an ability to fuse painting, sculpture, and theater. After years working with the Royal Shakespeare Company and English National Opera, she met Andrew Lloyd Webber.

**BjÃ¶rnson designed everything for The Phantom of the Opera** â€” sets, costumes, props, even that iconic half-face mask. She insisted the mask cover only half the face rather than the full face as Lloyd Webber initially envisioned â€” because half a human face is more terrifying than a fully covered one. **What you see makes you imagine what's hidden.**`,

    story: `ã€Šæ­Œå‰§é­…å½±ã€‹çš„èˆžå°è®¾è®¡å²ä¸Šæœ€å¥¢åŽã€æœ€ç²¾å¯†ï¼Œä¹Ÿæœ€å…·æˆå‰§æ€§çš„ä¹‹ä¸€ã€‚

**åŠç¯ã€‚** é‚£ç›é‡è¾¾ä¸€å¨çš„æ°´æ™¶åŠç¯ï¼Œåœ¨æ¯åœºæ¼”å‡ºä¸­ä»Žå¤©èŠ±æ¿å è½åˆ°èˆžå°â€”â€”åœ¨è§‚ä¼—å¤´é¡¶ä¸Šæ–¹ä»…ä¸€ç±³å¤„æ€¥åœã€‚è¿™ä¸æ˜¯ç‰¹æ•ˆï¼Œæ˜¯çœŸå®žçš„ç‰©ç†è¿åŠ¨ã€‚BjÃ¶rnson å’ŒæŠ€æœ¯å›¢é˜ŸèŠ±äº†æ•°æœˆè®¡ç®—é…é‡å’Œåˆ¶åŠ¨ç³»ç»Ÿï¼Œç¡®ä¿æ¯æ¬¡å è½éƒ½ç²¾ç¡®åˆ°æ¯«ç§’ã€‚

**åœ°ä¸‹æ¹–ã€‚** èˆžå°ä¸‹æ–¹çœŸçš„å»ºäº†ä¸€ä¸ªæ°´æ± ï¼Œèœ¡çƒ›ä»Žæ°´é¢å‡èµ·ï¼ˆå®žé™…æ˜¯ç”µåŠ¨èœ¡çƒ›åœ¨æ°´ä¸‹çš„å‡é™å°ä¸Šï¼‰ï¼Œè¥é€ å‡ºå·´é»Žæ­Œå‰§é™¢åœ°ä¸‹è¿·å®«çš„å¹»è§‰ã€‚BjÃ¶rnson ç”¨é›¾æœºå’Œç¯å…‰è®©æ°´é¢è‹¥éšè‹¥çŽ°ã€‚

**230 å¥—æœè£…ã€‚** BjÃ¶rnson ä¸ºæ•´éƒ¨å‰§è®¾è®¡äº†è¶…è¿‡ 230 å¥—æœè£…ï¼Œä»Ž19ä¸–çºªå·´é»Žæ­Œå‰§é™¢çš„åŽä¸½ç¤¼æœåˆ°åœ°ä¸‹è¿·å®«çš„æš—é»‘æ–—ç¯·ã€‚æ¯ä¸€å¥—éƒ½ç»è¿‡å¥¹äº²æ‰‹ç»˜åˆ¶çš„è¯¦ç»†æ°´å½©æ•ˆæžœå›¾ã€‚

**åŠè„¸é¢å…·ã€‚** è¿™ä¸ªè®¾è®¡å†³å®šæˆä¸ºäº†ç™¾è€æ±‡æœ€å…·è¾¨è¯†åº¦çš„è§†è§‰ç¬¦å·â€”â€”åŽæ¥æˆä¸ºäº†æ•´éƒ¨éŸ³ä¹å‰§çš„ logoã€‚ä¸€ä¸ªåŠé®åŠéœ²çš„ç™½è‰²é¢å…·ï¼Œç®€æ´åˆ°æžè‡´ï¼Œå´æ‰¿è½½äº†æ•´éƒ¨å‰§å…³äºŽç¾Žä¸Žä¸‘ã€è¡¨é¢ä¸Žå†…å¿ƒçš„æ‰€æœ‰ä¸»é¢˜ã€‚`,

    story_en: `The stage design of The Phantom of the Opera is among the most lavish, precise, and dramatic in theater history.

**The chandelier.** That one-ton crystal chandelier crashes from the ceiling to the stage in every performance â€” stopping just one meter above the audience. This isn't a special effect; it's real physical movement. BjÃ¶rnson and the technical team spent months calculating counterweights and braking systems, ensuring each fall was precise to the millisecond.

**The underground lake.** A real water pool was built beneath the stage, with candles rising from the water surface (actually electric candles on underwater lifts), creating the illusion of the Paris Opera House's underground labyrinth. BjÃ¶rnson used fog machines and lighting to make the water shimmer in and out of view.

**230 costumes.** BjÃ¶rnson designed over 230 costumes for the production, from the opulent gowns of 19th-century Paris Opera to the dark cloaks of the underground labyrinth. Each was rendered in her detailed hand-painted watercolor sketches.

**The half-mask.** This design decision became Broadway's most recognizable visual symbol â€” later becoming the logo for the entire musical. A half-covered white mask, minimalist to the extreme, yet carrying all of the show's themes about beauty and ugliness, surface and soul.`,

    legacy: `ã€Šæ­Œå‰§é­…å½±ã€‹å…¨çƒç´¯è®¡ç¥¨æˆ¿è¶…è¿‡ $60 äº¿ï¼Œåœ¨è¶…è¿‡ 35 ä¸ªå›½å®¶æ¼”å‡ºï¼Œè§‚ä¼—è¶…è¿‡ 1.45 äº¿äººæ¬¡ã€‚BjÃ¶rnson çš„åŠè„¸é¢å…·æˆä¸ºäº†å…¨çƒæœ€çŸ¥åçš„èˆžå°è®¾è®¡æ ‡å¿—â€”â€”ä½ ä¸éœ€è¦çœ‹è¿‡è¿™éƒ¨å‰§ï¼Œä¹Ÿè®¤è¯†è¿™ä¸ªé¢å…·ã€‚

å¥¹åœ¨2002å¹´åŽ»ä¸–ï¼Œå¹´ä»…53å²ã€‚Andrew Lloyd Webber ç§°å¥¹ä¸º"æˆ‘åˆä½œè¿‡çš„æœ€ä¼Ÿå¤§çš„è®¾è®¡å¸ˆ"ã€‚`,

    legacy_en: `The Phantom of the Opera has grossed over $6 billion worldwide, performed in over 35 countries to more than 145 million people. BjÃ¶rnson's half-mask became the world's most recognized stage design icon â€” you don't need to have seen the show to recognize the mask.

She passed away in 2002 at just 53. Andrew Lloyd Webber called her "the greatest designer I have ever worked with."`,

    significance: `Maria BjÃ¶rnson è¯æ˜Žäº†**èˆžå°è®¾è®¡å¯ä»¥æˆä¸ºå™äº‹çš„ä¸»è§’**ã€‚åœ¨ã€Šæ­Œå‰§é­…å½±ã€‹ä¸­ï¼Œå¸ƒæ™¯å’Œæœè£…ä¸æ˜¯èƒŒæ™¯â€”â€”å®ƒä»¬æ˜¯æ•…äº‹æœ¬èº«ã€‚åŠç¯çš„å è½æ˜¯é«˜æ½®ï¼Œåœ°ä¸‹æ¹–æ˜¯æƒ…æ„Ÿçš„éšå–»ï¼ŒåŠè„¸é¢å…·æ˜¯æ•´éƒ¨å‰§çš„çµé­‚ã€‚å¥¹è®©è®¾è®¡ä»Ž"æœåŠ¡äºŽè¡¨æ¼”"å‡çº§ä¸º"ä¸Žè¡¨æ¼”å¹³ç­‰å¯¹è¯"ã€‚`,

    significance_en: `Maria BjÃ¶rnson proved that **stage design can be the protagonist of the narrative.** In The Phantom of the Opera, sets and costumes aren't background â€” they are the story itself. The chandelier crash is the climax, the underground lake a metaphor for emotion, the half-mask the soul of the entire production. She elevated design from "serving the performance" to "dialoguing with the performance as an equal."`,
  },

  {
    id: '127',
    date: '2026-01-27',
    imageUrl: '/the-daily-object/images/mozart-salzburg.jpg',
    fullImageUrl: '/the-daily-object/images/full/mozart-salzburg.jpg',
    title: 'èŽ«æ‰Žç‰¹ä¸ŽéŸ³ä¹è®¾è®¡',
    title_en: 'Mozart & The Design of Sound',
    subtitle: 'Wolfgang Amadeus Mozart, 1756',
    subtitle_en: 'Wolfgang Amadeus Mozart, 1756',
    category: 'music',
    designer: 'Wolfgang Amadeus Mozart',
    year: '1756',

    dateConnection: '1756å¹´1æœˆ27æ—¥ï¼ŒWolfgang Amadeus Mozart å‡ºç”ŸäºŽå¥¥åœ°åˆ©è¨å°”èŒ¨å ¡ã€‚ä»–åœ¨çŸ­çŸ­35å¹´çš„ç”Ÿå‘½ä¸­åˆ›ä½œäº†è¶…è¿‡600éƒ¨ä½œå“ï¼Œé‡æ–°å®šä¹‰äº†éŸ³ä¹çš„å½¢å¼ä¸Žå¯èƒ½æ€§ã€‚å¦‚æžœ"è®¾è®¡"æ˜¯"æœ‰æ„è¯†åœ°ç»„ç»‡å…ƒç´ ä»¥è¾¾æˆç›®çš„"ï¼Œé‚£ä¹ˆ Mozart æ˜¯äººç±»åŽ†å²ä¸Šæœ€ä¼Ÿå¤§çš„è®¾è®¡å¸ˆä¹‹ä¸€ã€‚',
    dateConnection_en: 'Wolfgang Amadeus Mozart was born on January 27, 1756 in Salzburg, Austria. In just 35 years of life, he composed over 600 works, redefining the form and possibilities of music. If "design" is "the conscious organization of elements toward a purpose," then Mozart was one of the greatest designers in human history.',

    designerBio: `Wolfgang Amadeus Mozart (1756â€“1791)ï¼Œå¥¥åœ°åˆ©ä½œæ›²å®¶ï¼Œå¤å…¸ä¸»ä¹‰éŸ³ä¹çš„å·…å³°äººç‰©ã€‚

3å²å¼€å§‹å¼¹ç´ï¼Œ5å²ä½œæ›²ï¼Œ6å²åœ¨æ¬§æ´²å®«å»·å·¡æ¼”ã€‚ä»–çš„çˆ¶äº² Leopold Mozart æ—¢æ˜¯ä»–çš„è€å¸ˆï¼Œä¹Ÿæ˜¯ä»–çš„ç»çºªäººâ€”â€”å¸¦ç€ä»–ç©¿æ¢­äºŽç»´ä¹Ÿçº³ã€å·´é»Žã€ä¼¦æ•¦çš„çš‡å®¤ä¹‹é—´ã€‚

ä½† Mozart ä¸åªæ˜¯ç¥žç«¥ã€‚ä»–æˆå¹´åŽçš„ä½œå“å±•çŽ°äº†å¯¹äººæ€§çš„æ·±åˆ»ç†è§£â€”â€”ä»Žã€Šè´¹åŠ ç½—çš„å©šç¤¼ã€‹ä¸­å¯¹é˜¶çº§çš„è®½åˆºï¼Œåˆ°ã€Šå”Â·ä¹”ç“¦å°¼ã€‹ä¸­å¯¹æ¬²æœ›ä¸Žæƒ©ç½šçš„æŽ¢ç´¢ï¼Œå†åˆ°ã€Šå®‰é­‚æ›²ã€‹ä¸­å¯¹æ­»äº¡çš„ç›´è§†ã€‚

**ä»–æ˜¯ä¸€ä¸ªç”¨éŸ³ç¬¦æ€è€ƒçš„å»ºç­‘å¸ˆã€‚**`,

    designerBio_en: `Wolfgang Amadeus Mozart (1756â€“1791), Austrian composer and the pinnacle of Classical music.

He began playing at 3, composing at 5, and touring European courts at 6. His father Leopold Mozart was both his teacher and manager, parading him through the courts of Vienna, Paris, and London.

But Mozart was more than a prodigy. His adult works revealed a profound understanding of human nature â€” from the class satire of The Marriage of Figaro to the exploration of desire and punishment in Don Giovanni, to the unflinching gaze at death in the Requiem.

**He was an architect who thought in notes.**`,

    story: `ä¸ºä»€ä¹ˆä¸€ä¸ª18ä¸–çºªçš„ä½œæ›²å®¶å‡ºçŽ°åœ¨è®¾è®¡æ—¥åŽ†ä¸Šï¼Ÿ

å› ä¸º Mozart åšçš„äº‹æƒ…ï¼Œå’Œæœ€å¥½çš„è®¾è®¡å¸ˆåšçš„äº‹æƒ…å®Œå…¨ä¸€æ ·ï¼š**åœ¨é™åˆ¶ä¸­åˆ›é€ è‡ªç”±**ã€‚

å¤å…¸å¥é¸£æ›²å¼æœ‰ä¸¥æ ¼çš„ç»“æž„â€”â€”å‘ˆç¤ºéƒ¨ã€å±•å¼€éƒ¨ã€å†çŽ°éƒ¨ã€‚å°±åƒç½‘æ ¼ç³»ç»Ÿä¹‹äºŽå¹³é¢è®¾è®¡ï¼Œè¿™äº›æ˜¯"è§„åˆ™"ã€‚ä½† Mozart åœ¨è¿™äº›è§„åˆ™å†…åšåˆ°äº†ä»¤äººéš¾ä»¥ç½®ä¿¡çš„äº‹æƒ…ï¼šä»–è®©æ¯ä¸ªéŸ³ç¬¦éƒ½"ä¸å¯æ›¿ä»£"ã€‚

å¬ä»–çš„Gå°è°ƒç¬¬40äº¤å“æ›²çš„å¼€å¤´â€”â€”é‚£ä¸ªç„¦è™‘çš„ã€ä¸å®‰çš„ä¸»é¢˜ï¼Œæ¯ä¸ªéŸ³éƒ½æ°å¥½åœ¨é‚£ä¸ªä½ç½®ã€‚æ¢æŽ‰ä»»ä½•ä¸€ä¸ªéŸ³ï¼Œæ•´ä¸ªç»“æž„å°±ä¼šåå¡Œã€‚è¿™å°±æ˜¯"è®¾è®¡"çš„å®šä¹‰ï¼š**æ¯ä¸ªå…ƒç´ éƒ½åœ¨å®ƒè¯¥åœ¨çš„åœ°æ–¹ï¼Œç§»é™¤ä»»ä½•ä¸€ä¸ªï¼Œæ•´ä½“å°±ä¸å®Œæ•´ã€‚**

Mozart è¿˜æ˜¯"ç”¨æˆ·ä½“éªŒ"çš„å…ˆé©±ã€‚ä»–å†™ä¿¡ç»™çˆ¶äº²è¯´ï¼š"æˆ‘çš„éŸ³ä¹ä¸ä¼šè®©è¡Œå®¶ä¸æ»¡ï¼Œä½†å¤–è¡Œä¹Ÿèƒ½äº«å—â€”â€”è™½ç„¶ä»–ä»¬ä¸çŸ¥é“ä¸ºä»€ä¹ˆã€‚"è¿™å’Œ Steve Jobs è¯´çš„"it just works"æ˜¯åŒä¸€ç§è®¾è®¡å“²å­¦ï¼š**å¤æ‚çš„ç»“æž„ï¼Œç®€å•çš„ä½“éªŒã€‚**

ä»–çš„æ­Œå‰§æ›´æ˜¯å¤šç»´åº¦çš„è®¾è®¡æ°ä½œã€‚ã€Šè´¹åŠ ç½—çš„å©šç¤¼ã€‹ç¬¬äºŒå¹•ç»ˆåœºï¼Œå…­ä¸ªè§’è‰²åŒæ—¶åœ¨å°ä¸Šå”±ä¸åŒçš„æ—‹å¾‹ï¼Œæ¯ä¸ªäººéƒ½æœ‰è‡ªå·±çš„æƒ…æ„Ÿçº¿â€”â€”æ„¤æ€’ã€å›°æƒ‘ã€ææƒ§ã€ç®—è®¡â€”â€”ä½†åˆåœ¨ä¸€èµ·å´æ˜¯å®Œç¾Žçš„å’Œå£°ã€‚è¿™ä¸æ˜¯éŸ³ä¹ï¼Œè¿™æ˜¯**ä¿¡æ¯æž¶æž„**ã€‚`,

    story_en: `Why does an 18th-century composer appear in a design calendar?

Because what Mozart did is exactly what the best designers do: **create freedom within constraints.**

Classical sonata form has a rigid structure â€” exposition, development, recapitulation. Like the grid system in graphic design, these are the "rules." But within these rules, Mozart achieved something incredible: he made every note irreplaceable.

Listen to the opening of his Symphony No. 40 in G minor â€” that anxious, restless theme where every note sits in exactly the right place. Change any single note, and the entire structure collapses. This is the definition of "design": **every element is where it should be; remove any one, and the whole is incomplete.**

Mozart was also a pioneer of "user experience." He wrote to his father: "My music won't dissatisfy connoisseurs, but amateurs will enjoy it too â€” without knowing why." This is the same design philosophy as Steve Jobs' "it just works": **complex structure, simple experience.**

His operas were multidimensional design masterpieces. In the Act II finale of The Marriage of Figaro, six characters sing different melodies simultaneously on stage, each with their own emotional arc â€” anger, confusion, fear, scheming â€” yet together they form perfect harmony. This isn't music; it's **information architecture.**`,

    legacy: `Mozart å¯¹åŽä¸–çš„å½±å“æ— æ³•ä¼°é‡ã€‚è´å¤šèŠ¬ã€æŸ´å¯å¤«æ–¯åŸºã€é©¬å‹’éƒ½è§†ä»–ä¸ºæœ€é«˜æ ‡å‡†ã€‚ä»–çš„éŸ³ä¹è‡³ä»Šæ˜¯å…¨çƒæ¼”å‡ºæœ€å¤šçš„å¤å…¸æ›²ç›®ã€‚

è¨å°”èŒ¨å ¡å› ä»–æˆä¸ºå…¨çƒéŸ³ä¹æœåœ£åœ°ï¼Œæ¯å¹´çš„è¨å°”èŒ¨å ¡éŸ³ä¹èŠ‚å¸å¼•25ä¸‡è§‚ä¼—ã€‚ä»–çš„å½¢è±¡å‡ºçŽ°åœ¨ä»Žå·§å…‹åŠ›åŒ…è£…åˆ°åŸŽå¸‚å“ç‰Œçš„ä¸€åˆ‡è®¾è®¡ä¸­â€”â€”Mozart æœ¬èº«æˆä¸ºäº†ä¸€ä¸ªè®¾è®¡ç¬¦å·ã€‚`,

    legacy_en: `Mozart's influence on posterity is immeasurable. Beethoven, Tchaikovsky, and Mahler all regarded him as the highest standard. His music remains the most performed classical repertoire worldwide.

Salzburg became a global music pilgrimage site because of him, with the annual Salzburg Festival attracting 250,000 visitors. His image appears on everything from chocolate packaging to city branding â€” Mozart himself became a design symbol.`,

    significance: `Mozart ç»™æ‰€æœ‰è®¾è®¡å¸ˆä¸Šäº†ä¸€è¯¾ï¼š**çœŸæ­£çš„ç²¾æ¹›ä¸æ˜¯ç‚«æŠ€ï¼Œè€Œæ˜¯è®©å¤æ‚çœ‹èµ·æ¥ç®€å•ã€‚** ä»–æœ€å¥½çš„ä½œå“å¬èµ·æ¥æ¯«ä¸è´¹åŠ›â€”â€”ä½†è¿™ç§"æ¯«ä¸è´¹åŠ›"èƒŒåŽæ˜¯æƒŠäººçš„ç»“æž„ç²¾å¯†åº¦ã€‚è¿™å’Œ Dieter Rams çš„"å¥½è®¾è®¡æ˜¯å°½å¯èƒ½å°‘çš„è®¾è®¡"ã€Mies van der Rohe çš„"å°‘å³æ˜¯å¤š"ï¼Œè¯´çš„æ˜¯åŒä¸€ä»¶äº‹ã€‚`,

    significance_en: `Mozart taught every designer a lesson: **true mastery isn't showing off technique â€” it's making complexity look simple.** His best works sound effortless â€” but behind that effortlessness lies astonishing structural precision. This is the same thing as Dieter Rams' "good design is as little design as possible" and Mies van der Rohe's "less is more."`,
  },

  // === 01-01 to 01-04 ===

  {
    id: '128',
    date: '2026-01-01',
    imageUrl: '/the-daily-object/images/euro-currency.jpg',
    fullImageUrl: '/the-daily-object/images/full/euro-currency.jpg',
    title: 'æ¬§å…ƒçº¸å¸è®¾è®¡',
    title_en: 'Euro Banknote Design',
    subtitle: 'Robert Kalina, 2002',
    subtitle_en: 'Robert Kalina, 2002',
    category: 'graphic',
    designer: 'Robert Kalina',
    year: '2002',

    dateConnection: '2002å¹´1æœˆ1æ—¥ï¼Œæ¬§å…ƒçº¸å¸å’Œç¡¬å¸åœ¨12ä¸ªæ¬§ç›Ÿæˆå‘˜å›½æ­£å¼æµé€šï¼Œè¿™æ˜¯äººç±»è´§å¸å²ä¸Šè§„æ¨¡æœ€å¤§çš„ä¸€æ¬¡è´§å¸æ›¿æ¢è¡ŒåŠ¨â€”â€”3äº¿äººåœ¨ä¸€å¤œä¹‹é—´å¼€å§‹ä½¿ç”¨å…¨æ–°çš„çº¸å¸ã€‚',
    designerBio: `Robert Kalinaï¼Œå¥¥åœ°åˆ©ä¸­å¤®é“¶è¡Œçš„å¹³é¢è®¾è®¡å¸ˆï¼Œ1996å¹´åœ¨æ¬§æ´²è´§å¸ç ”ç©¶æ‰€ä¸¾åŠžçš„è®¾è®¡ç«žèµ›ä¸­èƒœå‡ºã€‚ä»–é¢å¯¹çš„æŒ‘æˆ˜å‰æ‰€æœªæœ‰ï¼šè®¾è®¡ä¸€å¥—ä¸ä»£è¡¨ä»»ä½•å•ä¸€å›½å®¶çš„è´§å¸ï¼ŒåŒæ—¶è¦è®©åå‡ ä¸ªæ–‡åŒ–èƒŒæ™¯å„å¼‚çš„å›½å®¶éƒ½èƒ½æŽ¥å—ã€‚

Kalina çš„æ–¹æ¡ˆä»¥"æ¬§æ´²å»ºç­‘é£Žæ ¼çš„æ¼”å˜"ä¸ºä¸»é¢˜ï¼Œæ¯å¼ é¢é¢å±•çŽ°ä¸€ä¸ªå»ºç­‘æ—¶æœŸâ€”â€”ä»Žå¤å…¸åˆ°çŽ°ä»£ã€‚ä½†è¿™äº›å»ºç­‘ä¸æ˜¯çœŸå®žå­˜åœ¨çš„ï¼Œè€Œæ˜¯å„é£Žæ ¼çš„ç†æƒ³åŒ–ç»¼åˆä½“ï¼Œé¿å…ä»»ä½•å›½å®¶å£°ç§°"è¿™æ˜¯æˆ‘ä»¬çš„å»ºç­‘"ã€‚`,
    story: `æ¬§å…ƒçº¸å¸çš„è®¾è®¡å ªç§°20ä¸–çºªæœ«æœ€å¤æ‚çš„å¹³é¢è®¾è®¡é¡¹ç›®ä¹‹ä¸€ã€‚

**æ ¸å¿ƒæŒ‘æˆ˜ï¼šå¦‚ä½•è®¾è®¡ä¸€ä¸ª"æ— å›½ç±"çš„è´§å¸ï¼Ÿ** æ¯å¼ çº¸å¸éƒ½å¿…é¡»åœ¨æ–‡åŒ–ä¸Šä¸­ç«‹ï¼Œå´åˆå¿…é¡»è®©æ•°äº¿æ¬§æ´²äººæ„Ÿåˆ°äº²åˆ‡ã€‚Kalina çš„å¤©æ‰ä¹‹å¤„åœ¨äºŽé€‰æ‹©äº†"çª—æˆ·ä¸Žé—¨"ï¼ˆæ­£é¢ï¼‰å’Œ"æ¡¥æ¢"ï¼ˆèƒŒé¢ï¼‰ä½œä¸ºæ ¸å¿ƒè§†è§‰æ„è±¡â€”â€”çª—æˆ·è±¡å¾å¼€æ”¾ä¸Žé€æ˜Žï¼Œæ¡¥æ¢è±¡å¾è¿žæŽ¥ä¸Žæ²Ÿé€šã€‚

ä¸ƒç§é¢é¢ï¼ˆâ‚¬5è‡³â‚¬500ï¼‰æ¨ªè·¨ä¸ƒä¸ªå»ºç­‘æ—¶æœŸï¼šå¤å…¸ã€ç½—é©¬å¼ã€å“¥ç‰¹å¼ã€æ–‡è‰ºå¤å…´ã€å·´æ´›å…‹ä¸Žæ´›å¯å¯ã€é“ä¸ŽçŽ»ç’ƒå»ºç­‘ã€çŽ°ä»£å»ºç­‘ã€‚è‰²å½©ç³»ç»ŸåŒæ ·ç²¾å¿ƒè®¾è®¡â€”â€”ç°è‰²ã€çº¢è‰²ã€è“è‰²ã€æ©™è‰²ã€ç»¿è‰²ã€é»„æ£•è‰²ã€ç´«è‰²â€”â€”ç¡®ä¿è§†éšœäººå£«ä¹Ÿèƒ½é€šè¿‡é¢œè‰²åŒºåˆ†é¢é¢ã€‚

**é˜²ä¼ªè®¾è®¡åŒæ ·æ˜¯ä¸€åœºè®¾è®¡é©å‘½ã€‚** å…¨æ¯å›¾ã€æ°´å°ã€å®‰å…¨çº¿ã€å˜è‰²æ²¹å¢¨â€”â€”è¿™äº›æŠ€æœ¯å…ƒç´ è¢«å®Œç¾Žèžå…¥æ•´ä½“è®¾è®¡ï¼Œä¸æ˜¾çªå…€ï¼Œå´æžéš¾ä¼ªé€ ã€‚`,
    legacy: 'æ¬§å…ƒçº¸å¸æˆä¸ºä¸–ç•Œä¸Šä½¿ç”¨äººæ•°ç¬¬äºŒå¤šçš„è´§å¸ï¼Œæµé€šäºŽ20ä¸ªå›½å®¶çš„3.4äº¿äººæ‰‹ä¸­ã€‚2019å¹´æŽ¨å‡ºçš„"æ¬§ç½—å·´ç³»åˆ—"æ–°ç‰ˆçº¸å¸åœ¨ä¿æŒ Kalina åŽŸå§‹è®¾è®¡è¯­è¨€çš„åŸºç¡€ä¸Šï¼Œè¿›ä¸€æ­¥æå‡äº†é˜²ä¼ªæŠ€æœ¯å’Œè§¦è§‰è¾¨è¯†åº¦ã€‚',
    significance: 'æ¬§å…ƒçº¸å¸è¯æ˜Žäº†å¹³é¢è®¾è®¡å¯ä»¥æ‰¿è½½å·¨å¤§çš„æ”¿æ²»ä¸Žæ–‡åŒ–ä½¿å‘½ã€‚å®ƒæ˜¯å²ä¸Šæœ€å¤§è§„æ¨¡çš„"å“ç‰Œç»Ÿä¸€"é¡¹ç›®â€”â€”ä¸æ˜¯ä¸€å®¶å…¬å¸ï¼Œè€Œæ˜¯ä¸€ä¸ªå¤§é™†ã€‚Kalina ç”¨å»ºç­‘é£Žæ ¼çš„æ¼”å˜è®²è¿°äº†ä¸€ä¸ªè¶…è¶Šå›½ç•Œçš„æ¬§æ´²æ•…äº‹ï¼Œè®©è®¾è®¡æˆä¸ºæ”¿æ²»æ„¿æ™¯çš„è§†è§‰åŒ–è¡¨è¾¾ã€‚',

    dateConnection_en: 'On January 1, 2002, euro banknotes and coins entered circulation across 12 EU member states â€” the largest currency changeover in history, with 300 million people adopting entirely new banknotes overnight.',
    designerBio_en: `Robert Kalina, a graphic designer at the Austrian National Bank, won the 1996 design competition held by the European Monetary Institute. His challenge was unprecedented: design a currency that represents no single nation while being accepted by over a dozen countries with vastly different cultural identities.

Kalina's solution used "the evolution of European architectural styles" as its theme, with each denomination showcasing a different period â€” from Classical to Modern. Crucially, none of the buildings depicted actually exist; they are idealized composites of each style, preventing any nation from claiming ownership.`,
    story_en: `The euro banknote design was one of the most complex graphic design projects of the late 20th century.

**The core challenge: how do you design a "stateless" currency?** Each note had to be culturally neutral yet feel familiar to hundreds of millions of Europeans. Kalina's genius was choosing "windows and doorways" (front) and "bridges" (back) as the central visual metaphors â€” windows symbolizing openness and transparency, bridges representing connection and communication.

Seven denominations (â‚¬5 to â‚¬500) span seven architectural periods: Classical, Romanesque, Gothic, Renaissance, Baroque and Rococo, Iron and Glass, and Modern. The color system was equally deliberate â€” grey, red, blue, orange, green, yellow-brown, and purple â€” ensuring even visually impaired users can distinguish denominations by color.

**The anti-counterfeiting design was itself a revolution.** Holograms, watermarks, security threads, and color-shifting inks â€” these technical elements were seamlessly integrated into the overall design, never feeling intrusive yet proving extremely difficult to forge.`,
    legacy_en: 'The euro became the world\'s second most-used currency, circulating among 340 million people across 20 countries. The 2019 "Europa series" redesign maintained Kalina\'s original design language while advancing anti-counterfeiting technology and tactile accessibility.',
    significance_en: 'The euro banknote proved that graphic design can carry immense political and cultural missions. It remains the largest-ever "brand unification" project â€” not for a company, but for a continent. Kalina used the evolution of architectural styles to tell a pan-European story that transcends borders, turning design into the visual expression of a political vision.',
  },

  {
    id: '129',
    date: '2026-01-02',
    imageUrl: '/the-daily-object/images/three-laws-of-robotics.jpg',
    fullImageUrl: '/the-daily-object/images/full/three-laws-of-robotics.jpg',
    title: 'æœºå™¨äººä¸‰å®šå¾‹',
    title_en: 'Three Laws of Robotics',
    subtitle: 'Isaac Asimov, 1942',
    subtitle_en: 'Isaac Asimov, 1942',
    category: 'software',
    designer: 'Isaac Asimov',
    year: '1942',

    dateConnection: '1920å¹´1æœˆ2æ—¥ï¼ŒIsaac Asimov å‡ºç”ŸäºŽä¿„ç½—æ–¯æ–¯æ‘©æ£±æ–¯å…‹çœå½¼å¾—ç½—ç»´å¥‡ã€‚è¿™ä½ç§‘å¹»å·¨åŒ åŽæ¥æå‡ºçš„"æœºå™¨äººä¸‰å®šå¾‹"ï¼Œæˆä¸ºäººæœºäº¤äº’è®¾è®¡é¢†åŸŸæœ€å…·å½±å“åŠ›çš„æ€æƒ³æ¡†æž¶ä¹‹ä¸€ã€‚',
    designerBio: `Isaac Asimovï¼ˆ1920â€“1992ï¼‰ï¼Œç”Ÿç‰©åŒ–å­¦æ•™æŽˆã€ç§‘å¹»ä½œå®¶ã€ç§‘æ™®ä½œå®¶ï¼Œä¸€ç”Ÿè‘—è¿°è¶…è¿‡500éƒ¨ä½œå“ã€‚ä»–ä¸æ˜¯ä¼ ç»Ÿæ„ä¹‰ä¸Šçš„"è®¾è®¡å¸ˆ"ï¼Œä½†ä»–åœ¨1942å¹´çŸ­ç¯‡å°è¯´ã€Šè½¬åœˆåœˆã€‹ï¼ˆRunaroundï¼‰ä¸­é¦–æ¬¡æ˜Žç¡®æå‡ºçš„"æœºå™¨äººä¸‰å®šå¾‹"ï¼Œæœ¬è´¨ä¸Šæ˜¯ä¸€å¥—**äººæœºäº¤äº’çš„è®¾è®¡è§„èŒƒ**ã€‚

Asimov åŽŒæ¶å½“æ—¶ç§‘å¹»å°è¯´ä¸­"æœºå™¨äººå¿…ç„¶åå›äººç±»"çš„é™ˆè¯æ»¥è°ƒã€‚ä»–è®¤ä¸ºï¼Œæœºå™¨äººä¸è¿‡æ˜¯å·¥å…·â€”â€”çƒ¤é¢åŒ…æœºä¸ä¼šåå›äººç±»ï¼Œæ±½è½¦ä¹Ÿä¸ä¼šï¼Œé‚£ä¸ºä»€ä¹ˆæœºå™¨äººå°±ä¸€å®šè¦ï¼Ÿä»Žè¿™ä¸ªæœ´ç´ çš„æ´žå¯Ÿå‡ºå‘ï¼Œä»–è®¾è®¡äº†ä¸‰æ¡ä¼˜å…ˆçº§é€’å‡çš„è¡Œä¸ºå‡†åˆ™ã€‚`,
    story: `**ç¬¬ä¸€å®šå¾‹**ï¼šæœºå™¨äººä¸å¾—ä¼¤å®³äººç±»ï¼Œæˆ–å› ä¸ä½œä¸ºè€Œä½¿äººç±»å—åˆ°ä¼¤å®³ã€‚
**ç¬¬äºŒå®šå¾‹**ï¼šæœºå™¨äººå¿…é¡»æœä»Žäººç±»å‘½ä»¤ï¼Œé™¤éžè¯¥å‘½ä»¤ä¸Žç¬¬ä¸€å®šå¾‹å†²çªã€‚
**ç¬¬ä¸‰å®šå¾‹**ï¼šåœ¨ä¸è¿åç¬¬ä¸€ã€ç¬¬äºŒå®šå¾‹çš„å‰æä¸‹ï¼Œæœºå™¨äººå¿…é¡»ä¿æŠ¤è‡ªèº«ã€‚

è¿™ä¸‰æ¡çœ‹ä¼¼ç®€å•çš„è§„åˆ™ï¼Œæž„æˆäº†ä¸€ä¸ª**ä¼˜é›…çš„ä¼˜å…ˆçº§ç³»ç»Ÿ**â€”â€”å®‰å…¨ > æœä»Ž > è‡ªä¿ã€‚Asimov èŠ±äº†æ•°åå¹´ã€æ•°åç¯‡å°è¯´æ¥æŽ¢ç´¢è¿™å¥—ç³»ç»Ÿçš„è¾¹ç•Œæƒ…å†µï¼šå½“ä¸¤æ¡å®šå¾‹äº’ç›¸å†²çªæ—¶ä¼šå‘ç”Ÿä»€ä¹ˆï¼Ÿå½“"ä¼¤å®³"çš„å®šä¹‰æ¨¡ç³Šæ—¶æ€Žä¹ˆåŠžï¼Ÿå½“æœºå™¨äººçš„è®¤çŸ¥èƒ½åŠ›è¶…è¿‡äººç±»æ—¶ï¼Œ"æœä»Ž"åˆæ„å‘³ç€ä»€ä¹ˆï¼Ÿ

**è¿™ä¸æ˜¯ç§‘å¹»è®¾å®šï¼Œè¿™æ˜¯è®¾è®¡æ–¹æ³•è®ºã€‚** çŽ°ä»£ UX è®¾è®¡ä¸­çš„"ç”¨æˆ·å®‰å…¨ä¼˜å…ˆäºŽç”¨æˆ·è‡ªç”±"åŽŸåˆ™ï¼ŒAI ä¼¦ç†ä¸­çš„"å¯¹é½é—®é¢˜"ï¼ˆalignment problemï¼‰ï¼Œè‡ªåŠ¨é©¾é©¶çš„å†³ç­–ä¼˜å…ˆçº§â€”â€”éƒ½èƒ½è¿½æº¯åˆ° Asimov 80å¤šå¹´å‰çš„è¿™å¥—æ¡†æž¶ã€‚

æœ€æ·±åˆ»çš„è®¾è®¡æ´žå¯Ÿåœ¨äºŽç¬¬ä¸€å®šå¾‹çš„"ä¸ä½œä¸º"æ¡æ¬¾ï¼šæœºå™¨äººä¸ä»…ä¸èƒ½ä¸»åŠ¨ä¼¤å®³äººç±»ï¼Œè¿˜ä¸èƒ½åœ¨æœ‰èƒ½åŠ›é˜»æ­¢ä¼¤å®³æ—¶è¢–æ‰‹æ—è§‚ã€‚è¿™é¢„è§äº†ä»Šå¤©å…³äºŽAIè´£ä»»è¾¹ç•Œçš„æ ¸å¿ƒäº‰è®ºã€‚`,
    legacy: 'æœºå™¨äººä¸‰å®šå¾‹å·²è¶…è¶Šç§‘å¹»ï¼Œæˆä¸ºAIä¼¦ç†ã€äººæœºäº¤äº’è®¾è®¡ã€è‡ªåŠ¨åŒ–ç³»ç»Ÿå®‰å…¨çš„åŸºç¡€å‚è€ƒæ¡†æž¶ã€‚ä»Ž Google çš„ AI ä¼¦ç†åŽŸåˆ™åˆ° OpenAI çš„å®‰å…¨å¯¹é½ç ”ç©¶ï¼Œä»Žè‡ªåŠ¨é©¾é©¶çš„ä¼¦ç†å†³ç­–åˆ°åŒ»ç–—AIçš„è®¾è®¡å‡†åˆ™ï¼ŒAsimov çš„å½±å“æ— å¤„ä¸åœ¨ã€‚',
    significance: 'Asimov è¯æ˜Žäº†ä¸€ä»¶äº‹ï¼š**æœ€å¥½çš„è®¾è®¡æ¡†æž¶ä¸æ¥è‡ªæŠ€æœ¯ç»†èŠ‚ï¼Œè€Œæ¥è‡ªå¯¹äººç±»éœ€æ±‚çš„æ·±åˆ»ç†è§£ã€‚** ä¸‰å®šå¾‹çš„åŠ›é‡ä¸åœ¨äºŽå®ƒå‘Šè¯‰æœºå™¨äºº"æ€Žä¹ˆåš"ï¼Œè€Œåœ¨äºŽå®ƒå®šä¹‰äº†"ä»€ä¹ˆæ˜¯æœ€é‡è¦çš„"â€”â€”äººçš„å®‰å…¨ã€‚è¿™ä¸Ž Don Norman çš„"ä»¥äººä¸ºä¸­å¿ƒçš„è®¾è®¡"ä¸€è„‰ç›¸æ‰¿ï¼šå…ˆç†è§£äººï¼Œå†è®¾è®¡ç³»ç»Ÿã€‚',

    dateConnection_en: 'On January 2, 1920, Isaac Asimov was born in Petrovichi, Smolensk, Russia. The science fiction master would go on to formulate the "Three Laws of Robotics" â€” one of the most influential conceptual frameworks in human-machine interaction design.',
    designerBio_en: `Isaac Asimov (1920â€“1992), biochemistry professor, science fiction author, and prolific science writer with over 500 published works. While not a "designer" in the traditional sense, his Three Laws of Robotics â€” first explicitly stated in the 1942 short story "Runaround" â€” are essentially **a design specification for human-machine interaction.**

Asimov despised the tired sci-fi trope of "robots inevitably rebelling against humans." He argued that robots are simply tools â€” toasters don't rebel, cars don't rebel, so why should robots? From this simple insight, he designed three behavioral rules with descending priority.`,
    story_en: `**First Law:** A robot may not injure a human being or, through inaction, allow a human being to come to harm.
**Second Law:** A robot must obey orders given by human beings, except where such orders would conflict with the First Law.
**Third Law:** A robot must protect its own existence, as long as such protection does not conflict with the First or Second Law.

These three seemingly simple rules form an **elegant priority system** â€” safety > obedience > self-preservation. Asimov spent decades and dozens of stories exploring the edge cases: What happens when two laws conflict? What when "harm" is ambiguously defined? What does "obedience" mean when a robot's cognitive capacity exceeds a human's?

**This isn't science fiction worldbuilding â€” it's design methodology.** The modern UX principle of "user safety over user freedom," AI ethics' "alignment problem," autonomous driving's decision hierarchies â€” all trace back to Asimov's framework from over 80 years ago.

The most profound design insight lies in the First Law's "inaction" clause: a robot must not only refrain from actively harming humans but cannot stand by when it has the ability to prevent harm. This anticipated today's core debates about AI responsibility boundaries.`,
    legacy_en: 'The Three Laws have transcended science fiction to become a foundational reference framework for AI ethics, human-machine interaction design, and automated system safety. From Google\'s AI principles to OpenAI\'s alignment research, from autonomous vehicle ethics to medical AI guidelines, Asimov\'s influence is everywhere.',
    significance_en: 'Asimov proved something essential: **the best design frameworks don\'t come from technical specifications but from a deep understanding of human needs.** The Three Laws\' power lies not in telling robots "how to act" but in defining "what matters most" â€” human safety. This aligns directly with Don Norman\'s "human-centered design": understand people first, then design the system.',
  },

  {
    id: '130',
    date: '2026-01-03',
    imageUrl: '/the-daily-object/images/middle-earth-maps.jpg',
    fullImageUrl: '/the-daily-object/images/full/middle-earth-maps.jpg',
    title: 'ä¸­æ´²åœ°å›¾',
    title_en: 'Middle-earth Maps',
    subtitle: 'J.R.R. Tolkien, 1954',
    subtitle_en: 'J.R.R. Tolkien, 1954',
    category: 'graphic',
    designer: 'J.R.R. Tolkien',
    year: '1954',

    dateConnection: '1892å¹´1æœˆ3æ—¥ï¼ŒJ.R.R. Tolkien å‡ºç”ŸäºŽå—éžå¸ƒéš†æ–¹ä¸¹ã€‚è¿™ä½è¯­è¨€å­¦æ•™æŽˆä¸ä»…åˆ›é€ äº†ä¸€ä¸ªå®Œæ•´çš„è™šæž„ä¸–ç•Œï¼Œè¿˜äº²æ‰‹ä¸ºå®ƒç»˜åˆ¶äº†åœ°å›¾â€”â€”å¼€åˆ›äº†"è™šæž„ä¸–ç•Œåˆ¶å›¾å­¦"çš„å…ˆæ²³ã€‚',
    designerBio: `J.R.R. Tolkienï¼ˆ1892â€“1973ï¼‰ï¼Œç‰›æ´¥å¤§å­¦è‹±è¯­è¯­è¨€ä¸Žæ–‡å­¦æ•™æŽˆï¼Œã€Šéœæ¯”ç‰¹äººã€‹å’Œã€Šé­”æˆ’ã€‹çš„ä½œè€…ã€‚ä½†é²œä¸ºäººçŸ¥çš„æ˜¯ï¼ŒTolkien åŒæ—¶æ˜¯ä¸€ä½ä¸¥è‚ƒçš„è§†è§‰è®¾è®¡å¸ˆâ€”â€”ä»–äº²æ‰‹ç»˜åˆ¶äº†ä¸­æ´²ä¸–ç•Œçš„åœ°å›¾ã€ä¹¦æ³•ã€çº¹ç« å’Œè£…é¥°å›¾æ¡ˆã€‚

Tolkien çš„åˆ¶å›¾æ–¹æ³•è®ºæžå…¶ä¸¥è°¨ã€‚ä»–å…ˆç¡®å®šåœ°ç†é€»è¾‘ï¼ˆæ²³æµå¿…é¡»æµå‘æµ·æ´‹ã€å±±è„‰å¿…é¡»ç¬¦åˆåœ°è´¨è§„å¾‹ï¼‰ï¼Œå†ç”¨åœ°å›¾æ¥æ£€éªŒæ•…äº‹ä¸­çš„æ—…ç¨‹æ˜¯å¦åœ¨æ—¶é—´å’Œè·ç¦»ä¸Šåˆç†ã€‚**åœ°å›¾ä¸æ˜¯æ•…äº‹çš„é™„å±žå“ï¼Œè€Œæ˜¯æ•…äº‹çš„éª¨æž¶ã€‚**`,
    story: `ä¸­æ´²åœ°å›¾çš„è®¾è®¡å½±å“è¿œè¶…æ–‡å­¦é¢†åŸŸã€‚

Tolkien ä¸ºã€Šé­”æˆ’ã€‹ç»˜åˆ¶çš„åœ°å›¾æ˜¯**ä¿¡æ¯è®¾è®¡çš„æ°ä½œ**ã€‚æ¯ä¸€åº§å±±è„‰ã€æ¯ä¸€æ¡æ²³æµéƒ½æœ‰åå­—ï¼Œç”¨ç²¾å¿ƒè®¾è®¡çš„ä¹¦æ³•ä½“ï¼ˆåŸºäºŽä»–è‡ªåˆ›çš„ç²¾çµæ–‡å­—ç³»ç»Ÿï¼‰æ ‡æ³¨ã€‚åœ°å›¾ä¸ä»…å±•ç¤ºç©ºé—´å…³ç³»ï¼Œè¿˜æš—ç¤ºäº†æ–‡åŒ–è¾¹ç•Œâ€”â€”çŸ®äººçš„é¢†åœ°å¤šåœ¨å±±ä¸­ï¼Œç²¾çµé è¿‘æ£®æž—ï¼Œäººç±»å æ®å¹³åŽŸå’Œæµ·å²¸ã€‚

**åˆ¶å›¾ä½œä¸ºå™äº‹å·¥å…·ã€‚** Tolkien çš„åœ°å›¾è®©è¯»è€…å¯ä»¥è¿½è¸ªå¼—ç½—å¤šçš„æ—…ç¨‹ï¼Œè®¡ç®—è·ç¦»ï¼Œæ„Ÿå—ä»Žå¤å°”åˆ°é­”å¤šçš„åœ°ç†é€’è¿›â€”â€”ä»Žç”°å›­ç‰§æ­Œåˆ°è’èŠœç»æœ›ã€‚è¿™ç§"ç©ºé—´å™äº‹"æŠ€å·§åŽæ¥è¢«æ‰€æœ‰å¥‡å¹»æ–‡å­¦å’Œæ¸¸æˆè®¾è®¡æ‰€ç»§æ‰¿ã€‚

Tolkien çš„åœ°å›¾è®¾è®¡è¿˜æœ‰ä¸€ä¸ªè¢«å¿½è§†çš„ç»´åº¦ï¼š**å®ƒä»¬æ˜¯æ‰‹ç»˜çš„ã€‚** åœ¨ä¸€ä¸ªé€æ¸è¢«æœºæ¢°åˆ¶å›¾ä¸»å¯¼çš„æ—¶ä»£ï¼ŒTolkien åšæŒç”¨é’¢ç¬”å’Œå¢¨æ°´ç»˜åˆ¶ã€‚é‚£äº›å¾®å¾®é¢¤æŠ–çš„å±±è„‰è½®å»“ã€å‚å·®ä¸é½çš„æµ·å²¸çº¿ï¼Œä¼ é€’å‡ºä¸€ç§æ‰‹å·¥çš„æ¸©åº¦â€”â€”è¿™ä¸æ˜¯ä¸€å¼ "ç²¾ç¡®"çš„åœ°å›¾ï¼Œè€Œæ˜¯ä¸€å¼ "æœ‰äººç”»è¿‡"çš„åœ°å›¾ï¼Œå¸¦ç€åˆ¶å›¾è€…çš„å‘¼å¸ã€‚`,
    legacy: 'ä¸­æ´²åœ°å›¾ç›´æŽ¥å‚¬ç”Ÿäº†æ•´ä¸ª"å¥‡å¹»åˆ¶å›¾å­¦"ä¼ ç»Ÿã€‚ä»Žã€Šé¾™ä¸Žåœ°ä¸‹åŸŽã€‹çš„å¤§é™†åœ°å›¾åˆ°ã€Šå¡žå°”è¾¾ä¼ è¯´ã€‹çš„æµ·æ‹‰é²åœ°å›¾ï¼Œä»Žã€ŠæƒåŠ›çš„æ¸¸æˆã€‹çš„ç»´æ–¯ç‰¹æ´›åœ°å›¾åˆ°æ— æ•°ç‹¬ç«‹æ¸¸æˆçš„ä¸–ç•Œè®¾å®šï¼ŒTolkien ç¡®ç«‹äº†"å¥½çš„è™šæž„ä¸–ç•Œå¿…é¡»æœ‰ä¸€å¼ å¥½åœ°å›¾"çš„è®¾è®¡å‡†åˆ™ã€‚',
    significance: 'Tolkien è¯æ˜Žäº†**åœ°å›¾ä¸ä»…æ˜¯å¯¼èˆªå·¥å…·ï¼Œæ›´æ˜¯å™äº‹åª’ä»‹**ã€‚ä¸€å¼ ç²¾å¿ƒè®¾è®¡çš„åœ°å›¾å¯ä»¥è®²è¿°æ–‡åŒ–ã€åŽ†å²ã€å†²çªå’Œæ—…ç¨‹ã€‚è¿™ä¸ªæ´žå¯Ÿå¯¹ä»Šå¤©çš„ä¿¡æ¯è®¾è®¡ã€æ•°æ®å¯è§†åŒ–ã€æ¸¸æˆä¸–ç•Œæž„å»ºä¾ç„¶é€‚ç”¨â€”â€”æœ€å¥½çš„ä¿¡æ¯è®¾è®¡ä¸åªæ˜¯å‘ˆçŽ°æ•°æ®ï¼Œè€Œæ˜¯è®²è¿°æ•…äº‹ã€‚',

    dateConnection_en: 'On January 3, 1892, J.R.R. Tolkien was born in Bloemfontein, South Africa. The linguistics professor would not only create a complete fictional world but hand-draw its maps â€” pioneering the field of fictional cartography.',
    designerBio_en: `J.R.R. Tolkien (1892â€“1973), Professor of English Language and Literature at Oxford University, author of The Hobbit and The Lord of the Rings. Less well known is that Tolkien was also a serious visual designer â€” he personally created maps, calligraphy, heraldry, and decorative patterns for Middle-earth.

Tolkien's cartographic methodology was extraordinarily rigorous. He first established geographic logic (rivers must flow to the sea, mountain ranges must follow geological principles), then used maps to verify whether the journeys in his stories were plausible in terms of time and distance. **Maps weren't accessories to the story â€” they were its skeleton.**`,
    story_en: `The design influence of Middle-earth maps extends far beyond literature.

The maps Tolkien drew for The Lord of the Rings are **masterpieces of information design.** Every mountain range and river is named, labeled in carefully designed calligraphy (based on his invented Elvish writing systems). The maps don't just show spatial relationships â€” they imply cultural boundaries: Dwarven realms cluster in mountains, Elves near forests, Men across plains and coasts.

**Cartography as narrative tool.** Tolkien's maps allow readers to trace Frodo's journey, calculate distances, and feel the geographic progression from the Shire to Mordor â€” from pastoral idyll to barren despair. This "spatial narrative" technique was inherited by all subsequent fantasy literature and game design.

There's an overlooked dimension to Tolkien's map design: **they are hand-drawn.** In an era increasingly dominated by mechanical cartography, Tolkien insisted on pen and ink. Those slightly trembling mountain outlines and irregular coastlines convey a handmade warmth â€” this isn't a "precise" map but one that has been *drawn by someone*, carrying the cartographer's breath.`,
    legacy_en: 'Middle-earth maps directly spawned the entire tradition of "fantasy cartography." From Dungeons & Dragons continent maps to Zelda\'s Hyrule, from Game of Thrones\' Westeros to countless indie game worlds, Tolkien established the design principle that "a good fictional world needs a good map."',
    significance_en: 'Tolkien proved that **maps are not just navigation tools but narrative media.** A carefully designed map can tell stories of culture, history, conflict, and journey. This insight remains relevant for today\'s information design, data visualization, and game world-building â€” the best information design doesn\'t just present data, it tells a story.',
  },

  {
    id: '131',
    date: '2026-01-04',
    imageUrl: '/the-daily-object/images/burj-khalifa.jpg',
    fullImageUrl: '/the-daily-object/images/full/burj-khalifa.jpg',
    title: 'å“ˆåˆ©æ³•å¡”',
    title_en: 'Burj Khalifa',
    subtitle: 'Adrian Smith (SOM), 2010',
    subtitle_en: 'Adrian Smith (SOM), 2010',
    category: 'architecture',
    designer: 'Adrian Smith',
    year: '2010',

    dateConnection: '2010å¹´1æœˆ4æ—¥ï¼Œå“ˆåˆ©æ³•å¡”åœ¨è¿ªæ‹œæ­£å¼å¼€å¹•ï¼Œä»¥828ç±³çš„é«˜åº¦æˆä¸ºä¸–ç•Œæœ€é«˜å»ºç­‘ã€‚è¿™åº§è¶…é«˜å±‚å»ºç­‘ä¸ä»…æ‰“ç ´äº†å·¥ç¨‹è®°å½•ï¼Œæ›´é‡æ–°å®šä¹‰äº†æ‘©å¤©å¤§æ¥¼çš„è®¾è®¡è¯­è¨€ã€‚',
    designerBio: `Adrian Smithï¼Œç¾Žå›½å»ºç­‘å¸ˆï¼Œè®¾è®¡å“ˆåˆ©æ³•å¡”æ—¶ä»» SOMï¼ˆSkidmore, Owings & Merrillï¼‰åˆä¼™äººã€‚ä»–é¢å¯¹çš„è®¾è®¡æŒ‘æˆ˜ä¸ä»…æ˜¯"ç›–ä¸–ç•Œæœ€é«˜çš„æ¥¼"ï¼Œæ›´æ˜¯å¦‚ä½•è®©ä¸€åº§è¶…è¿‡800ç±³çš„å»ºç­‘åœ¨ç¾Žå­¦ä¸Šæˆç«‹â€”â€”ä¸æ²¦ä¸ºä¸€æ ¹æ— èŠçš„å·¨æŸ±ã€‚

Smith ä»Žæ²™æ¼ ä¹‹èŠ± Hymenocallisï¼ˆèœ˜è››å…°ï¼‰ä¸­èŽ·å¾—çµæ„Ÿã€‚è¿™ç§èŠ±çš„å…­ç“£ç»“æž„åœ¨ç”Ÿç‰©åŠ›å­¦ä¸Šæžå…¶é«˜æ•ˆï¼ŒSmith å°†å…¶ç®€åŒ–ä¸ºä¸‰ç“£ Y å½¢å¹³é¢â€”â€”è¿™ä¸ªå½¢çŠ¶ä¸ä»…ç¾Žè§‚ï¼Œè€Œä¸”èƒ½æœ‰æ•ˆæŠµæŠ—è¿ªæ‹œçš„æ²™æ¼ å¼ºé£Žã€‚`,
    story: `å“ˆåˆ©æ³•å¡”çš„è®¾è®¡æ˜¯ä¸€å ‚å…³äºŽ"å½¢å¼è¿½éšåŠ›å­¦"çš„å¤§å¸ˆè¯¾ã€‚

**Yå½¢å¹³é¢æ˜¯è®¾è®¡çš„æ ¸å¿ƒã€‚** ä¸‰ä¸ªç¿¼ä»Žä¸­å¿ƒæ ¸ç­’å‘å¤–å»¶ä¼¸ï¼Œå»ºç­‘åœ¨ä¸Šå‡è¿‡ç¨‹ä¸­é€çº§é€€ç¼©â€”â€”å…±è¿›è¡Œäº†26æ¬¡é€€ç¼©ï¼Œä½¿æ¯ä¸ªé«˜åº¦å±‚é¢ä¸Šé£ŽåŠ›å¯¹ç»“æž„çš„å½±å“å„ä¸ç›¸åŒï¼Œé¿å…äº†å…±æŒ¯æ•ˆåº”ã€‚è¿™ä¸ä»…æ˜¯å·¥ç¨‹è§£å†³æ–¹æ¡ˆï¼Œæ›´åˆ›é€ äº†ä¸€ç§ä¼˜é›…çš„èžºæ—‹å‘ä¸Šçš„è§†è§‰æ•ˆæžœï¼Œè®©828ç±³çš„é«˜åº¦æ˜¾å¾—è½»ç›ˆè€Œéžæ²‰é‡ã€‚

**ææ–™è®¾è®¡åŒæ ·ç²¾å¿ƒã€‚** å¤–ç«‹é¢ä½¿ç”¨è¶…è¿‡26,000å—åå°„çŽ»ç’ƒé¢æ¿ï¼Œæ¯å—éƒ½ç»è¿‡ç²¾ç¡®è®¡ç®—ä»¥åº”å¯¹ä¸åŒé«˜åº¦çš„é£Žè·è½½å’Œæ¸©å·®ã€‚åº•éƒ¨çš„çŽ»ç’ƒæ›´åŽšã€æ›´è€å†²å‡»ï¼›é¡¶éƒ¨çš„æ›´è½»ã€åå°„çŽ‡æ›´é«˜ã€‚å»ºç­‘çš„é¢œè‰²ä¹Ÿå› æ­¤ä»Žåº•éƒ¨çš„æ¸©æš–é‡‘è‰²æ¸å˜ä¸ºé¡¶éƒ¨çš„æ¸…å†·é“¶ç™½â€”â€”åƒæ²™æ¼ ä¸­å‡èµ·çš„ä¸€é“å…‰æŸ±ã€‚

**ç¯å…‰è®¾è®¡æ˜¯å¦ä¸€ä¸ªæ°ä½œã€‚** è¶…è¿‡100ä¸‡é¢—LEDç¯ç è¦†ç›–äº†å»ºç­‘å¤–è¡¨é¢ï¼Œä½¿å®ƒåœ¨å¤œé—´æˆä¸ºä¸€å—å·¨å¤§çš„æ•°å­—ç”»å¸ƒâ€”â€”ä»Žæ–°å¹´çƒŸç«åˆ°å›½åº†æ—¥å›¾æ¡ˆï¼Œå“ˆåˆ©æ³•å¡”èƒ½ä»¥æ•´åº§å»ºç­‘ä¸ºå±å¹•è¿›è¡Œç¯å…‰ç§€ã€‚`,
    legacy: 'å“ˆåˆ©æ³•å¡”é‡æ–°å®šä¹‰äº†"è¶…é«˜å±‚"çš„è®¾è®¡æ ‡å‡†ã€‚å®ƒè¯æ˜Žè¶…è¿‡500ç±³çš„å»ºç­‘å¯ä»¥æ˜¯ä¼˜é›…çš„â€”â€”ä¸éœ€è¦ç‰ºç‰²ç¾Žå­¦æ¥æ¢å–å·¥ç¨‹å¯è¡Œæ€§ã€‚æ­¤åŽçš„æ²™ç‰¹çŽ‹å›½å¡”ï¼ˆæ­£åœ¨å»ºè®¾ï¼Œç›®æ ‡1000ç±³ï¼‰å’Œå…¨çƒå„åœ°çš„è¶…é«˜å±‚é¡¹ç›®ï¼Œéƒ½åœ¨ä¸åŒç¨‹åº¦ä¸Šå€Ÿé‰´äº†å®ƒçš„è®¾è®¡ç­–ç•¥ã€‚',
    significance: 'å“ˆåˆ©æ³•å¡”è¯æ˜Žäº†å»ºç­‘è®¾è®¡ä¸­**å½¢å¼ä¸Žç»“æž„å¯ä»¥å®Œç¾Žåˆä¸€**ã€‚Yå½¢å¹³é¢æ—¢æ˜¯ç¾Žå­¦é€‰æ‹©ï¼Œä¹Ÿæ˜¯å·¥ç¨‹å¿…éœ€ï¼›26æ¬¡é€€ç¼©æ—¢å¡‘é€ äº†ä¼˜ç¾Žçš„è½®å»“çº¿ï¼Œä¹Ÿè§£å†³äº†é£Žè·è½½é—®é¢˜ã€‚æœ€å¥½çš„å»ºç­‘è®¾è®¡ä»Žä¸éœ€è¦åœ¨ç¾Žå’ŒåŠŸèƒ½ä¹‹é—´å¦¥åâ€”â€”å®ƒä»¬æœ¬èº«å°±æ˜¯åŒä¸€ä»¶äº‹ã€‚',

    dateConnection_en: 'On January 4, 2010, the Burj Khalifa officially opened in Dubai, becoming the world\'s tallest building at 828 meters. This supertall skyscraper didn\'t just break engineering records â€” it redefined the design language of skyscrapers.',
    designerBio_en: `Adrian Smith, American architect and partner at SOM (Skidmore, Owings & Merrill) when he designed the Burj Khalifa. His design challenge wasn't merely "build the world's tallest building" but how to make a structure over 800 meters aesthetically compelling â€” not just a boring giant column.

Smith drew inspiration from the desert flower Hymenocallis (spider lily). Its six-petal structure is biomechanically efficient; Smith simplified it into a three-petal Y-shaped floor plan â€” a form that is not only beautiful but effectively resists Dubai's desert winds.`,
    story_en: `The Burj Khalifa's design is a masterclass in "form follows mechanics."

**The Y-shaped plan is the design's core.** Three wings extend from a central core, and the building steps back progressively as it rises â€” 26 setbacks in total, ensuring that wind loads affect the structure differently at each height, preventing resonance. This isn't just an engineering solution; it creates an elegant spiraling visual effect that makes 828 meters look light rather than heavy.

**The material design is equally meticulous.** The facade uses over 26,000 reflective glass panels, each precisely calculated for the wind loads and temperature differentials at its specific height. Lower panels are thicker and more impact-resistant; upper panels are lighter with higher reflectivity. The building's color thus gradates from warm gold at the base to cool silver-white at the top â€” like a column of light rising from the desert.

**The lighting design is another masterpiece.** Over one million LED nodes cover the building's exterior, turning it into a massive digital canvas at night â€” from New Year's fireworks to national day patterns, the Burj Khalifa uses the entire building as a screen for light shows.`,
    legacy_en: 'The Burj Khalifa redefined design standards for supertall buildings. It proved that structures over 500 meters can be elegant â€” that engineering feasibility need not come at the cost of aesthetics. The subsequent Jeddah Tower (under construction, targeting 1,000 meters) and supertall projects worldwide have borrowed from its design strategies.',
    significance_en: 'The Burj Khalifa proved that in architecture, **form and structure can be perfectly unified.** The Y-shaped plan is both an aesthetic choice and an engineering necessity; the 26 setbacks both sculpt an elegant silhouette and solve wind load problems. The best architectural design never compromises between beauty and function â€” they are the same thing.',
  },

  // 01-05: Spirited Away
  {
    id: '36',
    date: '2026-01-05',
    imageUrl: '/the-daily-object/images/spirited-away.jpg',
    fullImageUrl: '/the-daily-object/images/full/spirited-away.jpg',
    title: 'åƒä¸Žåƒå¯»',
    title_en: 'Spirited Away',
    subtitle: 'å®«å´Žéª, 2001',
    subtitle_en: 'Hayao Miyazaki, 2001',
    category: 'film',
    designer: 'å®«å´Žéª',
    year: '2001',

    dateConnection: 'å®«å´Žéªï¼ˆHayao Miyazakiï¼‰1941å¹´1æœˆ5æ—¥å‡ºç”ŸäºŽä¸œäº¬ã€‚ä»–æ˜¯å‰åœåŠ›å·¥ä½œå®¤çš„çµé­‚äººç‰©ï¼Œç”¨æ‰‹ç»˜åŠ¨ç”»åˆ›é€ äº†ä¸€ä¸ªåˆä¸€ä¸ªä»¤å…¨ä¸–ç•Œç€è¿·çš„å¹»æƒ³ä¸–ç•Œã€‚ã€Šåƒä¸Žåƒå¯»ã€‹æ˜¯ä»–æœ€å…·ä»£è¡¨æ€§çš„ä½œå“ï¼Œ2003å¹´èŽ·å¥¥æ–¯å¡æœ€ä½³åŠ¨ç”»é•¿ç‰‡å¥–ã€‚',
    designerBio: `å®«å´Žéªï¼Œæ—¥æœ¬åŠ¨ç”»ç•Œçš„æ´»ç¥žè¯ï¼Œ1941å¹´1æœˆ5æ—¥ç”ŸäºŽä¸œäº¬ã€‚

1985å¹´ä»–ä¸Žé«˜ç•‘å‹‹å…±åŒåˆ›ç«‹å‰åœåŠ›å·¥ä½œå®¤ï¼Œæ­¤åŽ30ä½™å¹´é—´åˆ›ä½œäº†ã€Šé¾™çŒ«ã€‹ã€Šå¹½çµå…¬ä¸»ã€‹ã€Šåƒä¸Žåƒå¯»ã€‹ã€Šå“ˆå°”çš„ç§»åŠ¨åŸŽå ¡ã€‹ç­‰ä¸€ç³»åˆ—æ”¹å˜åŠ¨ç”»ç”µå½±å®šä¹‰çš„ä½œå“ã€‚ä»–åšæŒæ‰‹ç»˜åŠ¨ç”»ï¼Œåœ¨CGæ¨ªæ‰«ä¸€åˆ‡çš„æ—¶ä»£æ˜¾å¾—æ ¼å¤–çè´µã€‚

**"æˆ‘åˆ›ä½œç”µå½±ä¸æ˜¯ä¸ºäº†ä¼ é€’ä¿¡æ¯ï¼Œè€Œæ˜¯ä¸ºäº†å±•ç¤ºä¸€ä¸ªä¸–ç•Œã€‚"**

ä»–çš„è®¾è®¡å“²å­¦æ˜¯ï¼šæ¯ä¸€å¸§ç”»é¢éƒ½å€¼å¾—è¢«å½“ä½œç‹¬ç«‹çš„è‰ºæœ¯å“æ¥å¯¹å¾…ã€‚`,
    story: `2001å¹´ï¼Œã€Šåƒä¸Žåƒå¯»ã€‹ä¸Šæ˜ ï¼Œè®²è¿°äº†10å²å°‘å¥³åƒå¯»è¯¯å…¥ç¥žçµä¸–ç•Œçš„å¥‡å¹»å†’é™©ã€‚

è¿™éƒ¨ç”µå½±çš„ç¾Žæœ¯è®¾è®¡å ªç§°åŠ¨ç”»å²ä¸Šçš„å·…å³°ã€‚æ²¹å±‹ï¼ˆæ±¤å±‹ï¼‰çš„å»ºç­‘è®¾è®¡èžåˆäº†æ—¥æœ¬æ˜Žæ²»æ—¶ä»£çš„æ¸©æ³‰æ—…é¦†ã€å°æ¹¾ä¹ä»½è€è¡—å’Œæ¬§æ´²å»ºç­‘å…ƒç´ ï¼Œåˆ›é€ å‡ºä¸€ä¸ªæ—¢ç†Ÿæ‚‰åˆé™Œç”Ÿçš„å¼‚ä¸–ç•Œç©ºé—´ã€‚

**æ— è„¸ç”·ï¼ˆã‚«ã‚ªãƒŠã‚·ï¼‰æ˜¯è®¾è®¡å²ä¸Šæœ€å¤©æ‰çš„è§’è‰²é€ åž‹ä¹‹ä¸€ã€‚** ä¸€å¼ ç™½è‰²é¢å…·ã€ä¸€ä¸ªé»‘è‰²èº«å½±â€”â€”æžç®€åˆ°ä¸èƒ½å†ç®€ï¼Œå´æ‰¿è½½äº†å­¤ç‹¬ã€æ¬²æœ›ã€ä»Žä¼—ç­‰å¤æ‚çš„äººæ€§ä¸»é¢˜ã€‚ä»–æ²¡æœ‰è‡ªå·±çš„å£°éŸ³ï¼Œåªèƒ½æ¨¡ä»¿åˆ«äººï¼›æ²¡æœ‰è‡ªå·±çš„é¢å­”ï¼Œåªæœ‰ä¸€å¼ é¢å…·ã€‚è¿™ç§"å‡æ³•è®¾è®¡"è®©è§’è‰²æ‹¥æœ‰äº†æ— é™çš„è§£è¯»ç©ºé—´ã€‚

è‰²å½©è®¾è®¡åŒæ ·ç²¾å¦™ï¼šçŽ°å®žä¸–ç•Œåå†·ç°ï¼Œç¥žçµä¸–ç•Œåˆ™é¥±å’Œè€Œæ¸©æš–ã€‚åƒå¯»åœ¨ä¸¤ä¸ªä¸–ç•Œé—´çš„è½¬å˜ï¼Œé€šè¿‡è‰²è°ƒçš„å¾®å¦™å˜åŒ–å¾—ä»¥è§†è§‰åŒ–ã€‚

å½±ç‰‡æ—¥æœ¬ç¥¨æˆ¿316äº¿æ—¥å…ƒï¼ˆè‡³ä»Šæœªè¢«è¶…è¶Šï¼‰ï¼ŒæŸæž—ç”µå½±èŠ‚é‡‘ç†Šå¥–ï¼Œå¥¥æ–¯å¡æœ€ä½³åŠ¨ç”»é•¿ç‰‡â€”â€”å®ƒè®©å…¨ä¸–ç•Œé‡æ–°è®¤è¯†äº†æ‰‹ç»˜åŠ¨ç”»çš„åŠ›é‡ã€‚`,
    legacy: 'ã€Šåƒä¸Žåƒå¯»ã€‹è¯æ˜Žäº†æ‰‹ç»˜åŠ¨ç”»åœ¨æ•°å­—æ—¶ä»£ä¾ç„¶å…·æœ‰ä¸å¯æ›¿ä»£çš„è‰ºæœ¯ä»·å€¼ã€‚å®ƒçš„ç¾Žæœ¯è®¾è®¡å½±å“äº†æ— æ•°åŽæ¥çš„åŠ¨ç”»ã€æ¸¸æˆå’Œå»ºç­‘è®¾è®¡ã€‚æ— è„¸ç”·æˆä¸ºå…¨çƒæµè¡Œæ–‡åŒ–ç¬¦å·ï¼Œå‰åœåŠ›ç¾Žæœ¯é¦†æˆä¸ºè®¾è®¡æœåœ£åœ°ã€‚',
    significance: 'å®«å´Žéªç”¨ã€Šåƒä¸Žåƒå¯»ã€‹å±•ç¤ºäº†ä¸€ç§è®¾è®¡å“²å­¦ï¼š**æœ€å¥½çš„è®¾è®¡æ˜¯åˆ›é€ ä¸€ä¸ªå®Œæ•´çš„ä¸–ç•Œè§‚ã€‚** ä»Žå»ºç­‘åˆ°è§’è‰²åˆ°è‰²å½©ï¼Œæ¯ä¸ªå…ƒç´ éƒ½æœåŠ¡äºŽåŒä¸€ä¸ªå™äº‹ã€‚è¿™ä¸ä»…æ˜¯ç”µå½±è®¾è®¡çš„å…¸èŒƒï¼Œæ›´æ˜¯æ‰€æœ‰è®¾è®¡é¢†åŸŸçš„ç»ˆæžè¿½æ±‚ã€‚',

    dateConnection_en: 'Hayao Miyazaki was born on January 5, 1941 in Tokyo. As the creative soul of Studio Ghibli, he crafted hand-drawn animated worlds that captivated audiences worldwide. Spirited Away, his masterpiece, won the Academy Award for Best Animated Feature in 2003.',
    designerBio_en: `Hayao Miyazaki, the living legend of Japanese animation, born January 5, 1941 in Tokyo.

In 1985, he co-founded Studio Ghibli with Isao Takahata, and over the following three decades created My Neighbor Totoro, Princess Mononoke, Spirited Away, and Howl's Moving Castle â€” films that redefined what animation could be. His insistence on hand-drawn animation in the age of CGI makes his work all the more precious.

**"I don't make films to deliver messages. I make them to show a world."**

His design philosophy: every single frame deserves to be treated as an independent work of art.`,
    story_en: `In 2001, Spirited Away premiered â€” the story of 10-year-old Chihiro who stumbles into the spirit world.

The film's art direction stands as a pinnacle in animation history. The Bathhouse design fuses Japanese Meiji-era hot spring inns, the old streets of Jiufen in Taiwan, and European architectural elements â€” creating a space that feels simultaneously familiar and otherworldly.

**No-Face (Kaonashi) is one of the most brilliant character designs ever conceived.** A white mask, a black silhouette â€” minimalism pushed to its absolute limit, yet carrying complex themes of loneliness, desire, and conformity. He has no voice of his own, only mimicry; no face of his own, only a mask. This "subtractive design" gives the character infinite interpretive space.

The color design is equally masterful: the real world skews cool and grey, while the spirit world is saturated and warm. Chihiro's transformation between worlds is visualized through subtle shifts in palette.

The film earned Â¥31.6 billion at the Japanese box office (still unbroken), the Golden Bear at Berlin, and the Academy Award for Best Animated Feature â€” it made the world rediscover the power of hand-drawn animation.`,
    legacy_en: 'Spirited Away proved that hand-drawn animation retains irreplaceable artistic value in the digital age. Its art direction influenced countless subsequent animations, games, and architectural designs. No-Face became a global pop culture icon, and the Ghibli Museum became a design pilgrimage site.',
    significance_en: 'With Spirited Away, Miyazaki demonstrated a design philosophy: **the best design creates a complete worldview.** From architecture to characters to color, every element serves the same narrative. This is not just a benchmark for film design â€” it is the ultimate aspiration of all design disciplines.',
  },

  // 01-06: Prometheus of Fire (Scriabin)
  {
    id: '37',
    date: '2026-01-06',
    imageUrl: '/the-daily-object/images/prometheus-poem-of-fire.jpg',
    fullImageUrl: '/the-daily-object/images/full/prometheus-poem-of-fire.jpg',
    title: 'æ™®ç½—ç±³ä¿®æ–¯ï¼šç«ä¹‹è¯—',
    title_en: 'Prometheus: The Poem of Fire',
    subtitle: 'Alexander Scriabin, 1910',
    subtitle_en: 'Alexander Scriabin, 1910',
    category: 'music',
    designer: 'Alexander Scriabin',
    year: '1910',

    dateConnection: 'Alexander Scriabin 1872å¹´1æœˆ6æ—¥å‡ºç”ŸäºŽèŽ«æ–¯ç§‘ã€‚è¿™ä½ä¿„ç½—æ–¯ä½œæ›²å®¶æ˜¯éŸ³ä¹ä¸Žè§†è§‰è‰ºæœ¯èžåˆçš„å…ˆé©±ï¼Œä»–çš„ã€Šæ™®ç½—ç±³ä¿®æ–¯ï¼šç«ä¹‹è¯—ã€‹æ˜¯äººç±»åŽ†å²ä¸Šç¬¬ä¸€éƒ¨è¦æ±‚"è‰²å½©é”®ç›˜"ï¼ˆClavier Ã  lumiÃ¨resï¼‰å‚ä¸Žæ¼”å¥çš„äº¤å“ä½œå“ã€‚',
    designerBio: `Alexander Scriabin (1872-1915)ï¼Œä¿„ç½—æ–¯ä½œæ›²å®¶ã€é’¢ç´å®¶ï¼ŒéŸ³ä¹-è§†è§‰è”è§‰è®¾è®¡çš„å…ˆé©±ã€‚

ä»–æ‹¥æœ‰ä¸€ç§ç½•è§çš„å¤©èµ‹â€”â€”è”è§‰ï¼ˆsynesthesiaï¼‰ï¼šå¬åˆ°éŸ³ç¬¦å°±èƒ½çœ‹åˆ°é¢œè‰²ã€‚Cå¤§è°ƒæ˜¯çº¢è‰²ï¼ŒDå¤§è°ƒæ˜¯é»„è‰²ï¼Œå‡Få¤§è°ƒæ˜¯è“ç´«è‰²ã€‚è¿™ä¸æ˜¯æ¯”å–»ï¼Œæ˜¯ä»–çœŸå®žçš„æ„ŸçŸ¥ä½“éªŒã€‚

ä»–å°†è¿™ç§æ„ŸçŸ¥è½¬åŒ–ä¸ºä¸€å¥—å®Œæ•´çš„"éŸ³è‰²-è‰²å½©å¯¹åº”ç³»ç»Ÿ"ï¼Œå¹¶è¯•å›¾å°†å…¶èžå…¥éŸ³ä¹æ¼”å‡ºä¸­ã€‚ä»–æ˜¯ç¬¬ä¸€ä¸ªè®¤çœŸæ€è€ƒ"å¦‚ä½•è®©éŸ³ä¹å¯è§"çš„ä½œæ›²å®¶ã€‚`,
    story: `1910å¹´ï¼ŒScriabin å®Œæˆäº†ä»–æœ€å¤§èƒ†çš„ä½œå“â€”â€”ã€Šæ™®ç½—ç±³ä¿®æ–¯ï¼šç«ä¹‹è¯—ã€‹ï¼ŒOp. 60ã€‚

è¿™éƒ¨äº¤å“è¯—çš„ç¼–åˆ¶å‰æ‰€æœªæœ‰ï¼šç®¡å¼¦ä¹é˜Ÿã€é’¢ç´ç‹¬å¥ã€åˆå”±å›¢ï¼Œä»¥åŠä¸€ä¸ªä»Žæœªæœ‰è¿‡çš„ä¹å™¨â€”â€”**è‰²å…‰é’¢ç´ï¼ˆClavier Ã  lumiÃ¨resï¼‰**ã€‚è¿™æ˜¯ä¸€æž¶ç‰¹æ®Šçš„é”®ç›˜ï¼Œä¸å‘å‡ºå£°éŸ³ï¼Œè€Œæ˜¯å‘éŸ³ä¹åŽ…æŠ•å°„å½©è‰²å…‰çº¿ã€‚

Scriabin ä¸ºæ¯ä¸ªéŸ³é«˜æŒ‡å®šäº†é¢œè‰²ï¼šC æ˜¯çº¢è‰²ï¼ŒG æ˜¯æ©™è‰²ï¼ŒD æ˜¯é»„è‰²ï¼ŒA æ˜¯ç»¿è‰²ï¼ŒE æ˜¯æµ…è“â€¦â€¦ä»–è®¾è®¡äº†ä¸€å¥—å®Œæ•´çš„å¯¹åº”ç³»ç»Ÿï¼Œè®©æ•´ä¸ªéŸ³ä¹åŽ…éšç€å’Œå£°å˜åŒ–è€Œå˜æ¢è‰²å½©ã€‚

**è¿™æ˜¯å¤šåª’ä½“è‰ºæœ¯çš„èµ·ç‚¹ã€‚** 1915å¹´çº½çº¦å¡å†…åŸºéŸ³ä¹åŽ…çš„æ¼”å‡ºé¦–æ¬¡ä½¿ç”¨äº†è‰²å…‰æŠ•å°„è£…ç½®â€”â€”æ¯” VJï¼ˆè§†è§‰éª‘å¸ˆï¼‰æ–‡åŒ–æ—©äº†æ•´æ•´80å¹´ï¼Œæ¯”æ²‰æµ¸å¼ç¯å…‰ç§€æ—©äº†ä¸€ä¸ªä¸–çºªã€‚

ä½† Scriabin çš„é‡Žå¿ƒè¿œä¸æ­¢äºŽæ­¤ã€‚ä»–æ¢¦æƒ³åˆ›ä½œä¸€éƒ¨"Mysterium"â€”â€”ä¸€éƒ¨åœ¨å–œé©¬æ‹‰é›…å±±æ¼”å‡ºçš„è·¨æ„Ÿå®˜æ€»ä½“è‰ºæœ¯ä½œå“ï¼ŒèžåˆéŸ³ä¹ã€èˆžè¹ˆã€å…‰å½±ã€é¦™æ°”ï¼ŒæŒç»­ä¸ƒå¤©ä¸ƒå¤œï¼Œå°†å…¨äººç±»å¸¦å…¥ä¸€ç§è¶…è¶Šæ€§çš„ä½“éªŒã€‚ä»–åœ¨43å²æ—¶è‹±å¹´æ—©é€ï¼ŒMysterium æœªèƒ½å®Œæˆã€‚`,
    legacy: 'â€¢ å¤šåª’ä½“è‰ºæœ¯å…ˆé©±ï¼šè‰²å…‰é’¢ç´æ˜¯äººç±»åŽ†å²ä¸Šç¬¬ä¸€ä¸ªå°†è§†è§‰ä¸ŽéŸ³ä¹å®žæ—¶åŒæ­¥çš„è®¾è®¡\nâ€¢ å½±å“é“¾æ¡ï¼šScriabin â†’ 1960s è¿·å¹»ç¯å…‰ç§€ â†’ Pink Floyd èˆžå°è®¾è®¡ â†’ å½“ä»£æ²‰æµ¸å¼ä½“éªŒ\nâ€¢ "ç¥žç§˜å’Œå¼¦"ï¼ˆMystic Chordï¼‰å½±å“äº†20ä¸–çºªå’Œå£°è¯­è¨€çš„å‘å±•\nâ€¢ ä»–çš„éŸ³è‰²-è‰²å½©ç³»ç»Ÿå¯å‘äº†åŽæ¥çš„ Kandinsky çš„æŠ½è±¡ç»˜ç”»ç†è®º',
    significance: 'Scriabin è¯æ˜Žäº†**è®¾è®¡å¯ä»¥è·¨è¶Šæ„Ÿå®˜è¾¹ç•Œ**ã€‚ä»–ä¸æ˜¯åœ¨"è£…é¥°"éŸ³ä¹ï¼Œè€Œæ˜¯åœ¨åˆ›é€ ä¸€ç§å…¨æ–°çš„æ„ŸçŸ¥ç»´åº¦ã€‚ä»Šå¤©æˆ‘ä»¬ä¹ ä»¥ä¸ºå¸¸çš„æ¼”å”±ä¼šç¯å…‰ã€VJ æ–‡åŒ–ã€æ²‰æµ¸å¼å±•è§ˆï¼Œéƒ½å¯ä»¥è¿½æº¯åˆ°è¿™ä½ä¿„ç½—æ–¯ä½œæ›²å®¶åœ¨1910å¹´çš„ç–¯ç‹‚æž„æƒ³ã€‚',

    dateConnection_en: 'Alexander Scriabin was born on January 6, 1872 in Moscow. This Russian composer was a pioneer in fusing music and visual art â€” his Prometheus: The Poem of Fire was the first symphonic work in history to require a "color keyboard" (Clavier Ã  lumiÃ¨res) as part of the performance.',
    designerBio_en: `Alexander Scriabin (1872â€“1915), Russian composer, pianist, and pioneer of music-visual synesthetic design.

He possessed a rare gift â€” synesthesia: hearing notes triggered color perception. C major was red, D major yellow, F-sharp major blue-violet. This was not metaphor but his actual sensory experience.

He translated this perception into a complete "timbre-color correspondence system" and sought to integrate it into musical performance. He was the first composer to seriously explore "how to make music visible."`,
    story_en: `In 1910, Scriabin completed his most audacious work â€” Prometheus: The Poem of Fire, Op. 60.

The scoring was unprecedented: orchestra, piano soloist, choir, and an instrument that had never existed â€” the **Clavier Ã  lumiÃ¨res (color-light keyboard)**. This special keyboard produced no sound; instead, it projected colored light throughout the concert hall.

Scriabin assigned a color to each pitch: C was red, G was orange, D was yellow, A was green, E was pale blueâ€¦ He designed a complete correspondence system so the entire hall would shift colors with the changing harmonies.

**This was the birth of multimedia art.** The 1915 performance at Carnegie Hall in New York was the first to use a color projection device â€” predating VJ culture by 80 years and immersive light shows by a full century.

But Scriabin's ambition went far beyond this. He dreamed of creating a "Mysterium" â€” a cross-sensory Gesamtkunstwerk to be performed in the Himalayas, fusing music, dance, light, fragrance, lasting seven days and seven nights, elevating all humanity into a transcendent experience. He died at 43, and the Mysterium was never completed.`,
    legacy_en: 'â€¢ Multimedia art pioneer: the Clavier Ã  lumiÃ¨res was the first device in history to synchronize visuals with music in real time\nâ€¢ Influence chain: Scriabin â†’ 1960s psychedelic light shows â†’ Pink Floyd stage design â†’ contemporary immersive experiences\nâ€¢ The "Mystic Chord" influenced the development of 20th-century harmonic language\nâ€¢ His timbre-color system inspired Kandinsky\'s abstract painting theories',
    significance_en: 'Scriabin proved that **design can transcend sensory boundaries.** He was not "decorating" music â€” he was creating an entirely new perceptual dimension. The concert lighting, VJ culture, and immersive exhibitions we take for granted today can all be traced back to this Russian composer\'s wild vision in 1910.',
  },

  // 01-07: Tesla Coil
  {
    id: '38',
    date: '2026-01-07',
    imageUrl: '/the-daily-object/images/tesla-coil.jpg',
    fullImageUrl: '/the-daily-object/images/full/tesla-coil.jpg',
    title: 'ç‰¹æ–¯æ‹‰çº¿åœˆ',
    title_en: 'Tesla Coil',
    subtitle: 'Nikola Tesla, 1891',
    subtitle_en: 'Nikola Tesla, 1891',
    category: 'industrial',
    designer: 'Nikola Tesla',
    year: '1891',

    dateConnection: 'Nikola Tesla äºŽ1943å¹´1æœˆ7æ—¥åœ¨çº½çº¦å®¢é…’åº—å­¤ç‹¬ç¦»ä¸–ï¼Œäº«å¹´86å²ã€‚è¿™ä½å¡žå°”ç»´äºšè£”ç¾Žå›½å‘æ˜Žå®¶ä¸€ç”ŸæŒæœ‰300å¤šé¡¹ä¸“åˆ©ï¼Œè€Œç‰¹æ–¯æ‹‰çº¿åœˆæ˜¯ä»–æœ€å…·è§†è§‰å†²å‡»åŠ›çš„å‘æ˜Žâ€”â€”å°†ä¸å¯è§çš„ç”µåŠ›å˜æˆäº†å¯è§çš„ã€ä»¤äººæ•¬ç•çš„å…‰ä¹‹é›•å¡‘ã€‚',
    designerBio: `Nikola Tesla (1856-1943)ï¼Œå¡žå°”ç»´äºšè£”ç¾Žå›½å‘æ˜Žå®¶ã€ç”µæ°”å·¥ç¨‹å¸ˆï¼Œäº¤æµç”µç³»ç»Ÿçš„å¥ åŸºäººã€‚

ä»–ä¸Ž Edison çš„"ç”µæµä¹‹æˆ˜"æ˜¯å·¥ä¸šè®¾è®¡å²ä¸Šæœ€è‘—åçš„å¯¹å†³ä¹‹ä¸€ã€‚Edison åšæŒç›´æµç”µï¼ŒTesla åˆ™è¯æ˜Žäº†äº¤æµç”µåœ¨è¿œè·ç¦»è¾“ç”µä¸Šçš„ç»å¯¹ä¼˜åŠ¿ã€‚æœ€ç»ˆï¼ŒTesla çš„äº¤æµç”µç³»ç»Ÿæˆä¸ºå…¨ä¸–ç•Œç”µåŠ›åŸºç¡€è®¾æ–½çš„æ ‡å‡†â€”â€”ä½ æ­¤åˆ»ä½¿ç”¨çš„æ¯ä¸€åº¦ç”µï¼Œéƒ½æºè‡ªä»–çš„è®¾è®¡ã€‚

**"å¦‚æžœä½ æƒ³å‘çŽ°å®‡å®™çš„ç§˜å¯†ï¼Œå°±ä»Žèƒ½é‡ã€é¢‘çŽ‡å’ŒæŒ¯åŠ¨çš„è§’åº¦æ€è€ƒã€‚"**

ä»–æ˜¯å°‘æœ‰çš„åŒæ—¶å…·å¤‡å·¥ç¨‹å¤©æ‰å’Œå®¡ç¾Žç›´è§‰çš„å‘æ˜Žå®¶ã€‚ç‰¹æ–¯æ‹‰çº¿åœˆä¸ä»…æ˜¯ä¸€ä¸ªæŠ€æœ¯è£…ç½®ï¼Œæ›´æ˜¯ä»–å¯¹ç”µåŠ›ä¹‹ç¾Žçš„è§†è§‰å®£è¨€ã€‚`,
    story: `1891å¹´ï¼ŒTesla å‘æ˜Žäº†ä»¥ä»–åå­—å‘½åçš„è°æŒ¯å˜åŽ‹å™¨â€”â€”ç‰¹æ–¯æ‹‰çº¿åœˆã€‚

å®ƒçš„å·¥ä½œåŽŸç†çœ‹ä¼¼ç®€å•ï¼šä¸¤ç»„çº¿åœˆé€šè¿‡è°æŒ¯è€¦åˆï¼Œå°†æ™®é€šç”µåŽ‹å‡é«˜åˆ°æ•°ç™¾ä¸‡ä¼ç‰¹ï¼Œåœ¨å°–ç«¯äº§ç”Ÿå£®è§‚çš„ç”µå¼§æ”¾ç”µã€‚ä½†è¿™ä¸ª"ç®€å•"çš„åŽŸç†èƒŒåŽï¼Œæ˜¯ Tesla å¯¹ç”µç£å…±æŒ¯çš„æ·±åˆ»ç†è§£ã€‚

**ç‰¹æ–¯æ‹‰çº¿åœˆçš„è®¾è®¡ä¹‹ç¾Žåœ¨äºŽï¼šå®ƒè®©ä¸å¯è§çš„åŠ›å˜å¾—å¯è§ã€‚** ç”µâ€”â€”è¿™ä¸ªé©±åŠ¨çŽ°ä»£æ–‡æ˜Žçš„åŸºæœ¬åŠ›é‡â€”â€”åœ¨çº¿åœˆé¡¶ç«¯åŒ–ä¸ºç´«è“è‰²çš„é—ªç”µï¼Œåœ¨ç©ºæ°”ä¸­è·³èˆžã€åˆ†å‰ã€æ¶ˆæ•£ã€‚å®ƒæ—¢æ˜¯ç§‘å­¦ä»ªå™¨ï¼Œä¹Ÿæ˜¯å…‰ä¹‹é›•å¡‘ã€‚

Tesla æ›¾åœ¨ä»–çš„çº½çº¦å®žéªŒå®¤é‡Œï¼Œç«™åœ¨ç‰¹æ–¯æ‹‰çº¿åœˆæ—ï¼Œè®©äººé€ é—ªç”µçŽ¯ç»•å…¨èº«â€”â€”è¿™äº›ç…§ç‰‡æˆä¸ºç§‘å­¦å²ä¸Šæœ€å…·æ ‡å¿—æ€§çš„å½±åƒã€‚ä»–ç”¨è¿™äº›å£®è§‚çš„æ¼”ç¤ºæ¥å®£ä¼ æ— çº¿è¾“ç”µçš„å¯èƒ½æ€§ã€‚

åœ¨ç§‘ç½—æ‹‰å¤šæ³‰å®žéªŒå®¤ï¼ˆ1899å¹´ï¼‰ï¼Œä»–å»ºé€ äº†ç›´å¾„è¾¾16ç±³çš„å·¨åž‹çº¿åœˆï¼Œäº§ç”Ÿäº†é•¿è¾¾40ç±³çš„äººé€ é—ªç”µâ€”â€”é™„è¿‘çš„è´è¶ç¿…è†€ä¸Šäº§ç”Ÿäº†åœ£åŸƒå°”æ‘©ä¹‹ç«ï¼Œå‘¨å›´6è‹±é‡Œå†…çš„ç¯æ³¡è‡ªåŠ¨äº®èµ·ã€‚

è™½ç„¶ä»–çš„æ— çº¿è¾“ç”µæ¢¦æƒ³æœªèƒ½å®žçŽ°ï¼Œä½†ç‰¹æ–¯æ‹‰çº¿åœˆåŽæ¥åœ¨æ— çº¿ç”µé€šä¿¡ã€åŒ»ç–—è®¾å¤‡ã€ç²’å­åŠ é€Ÿå™¨ç­‰é¢†åŸŸæ‰¾åˆ°äº†å¹¿æ³›åº”ç”¨ã€‚è€Œå®ƒæœ€æŒä¹…çš„é—äº§ï¼Œæˆ–è®¸æ˜¯ä½œä¸ºä¸€ä»¶"åŠŸèƒ½æ€§é›•å¡‘"â€”â€”åœ¨ç§‘å­¦åšç‰©é¦†ã€éŸ³ä¹èŠ‚å’Œè‰ºæœ¯è£…ç½®ä¸­ï¼ŒæŒç»­æ¿€å‘ç€äººä»¬å¯¹ç”µåŠ›ä¹‹ç¾Žçš„æ•¬ç•ã€‚`,
    legacy: 'â€¢ æ— çº¿é€šä¿¡åŸºç¡€ï¼šç‰¹æ–¯æ‹‰çº¿åœˆçš„è°æŒ¯åŽŸç†æ˜¯æ— çº¿ç”µæŠ€æœ¯çš„å…³é”®åŸºç¡€\nâ€¢ ç§‘å­¦å¯è§†åŒ–å…ˆé©±ï¼šç¬¬ä¸€æ¬¡è®©ç”µåŠ›æˆä¸ºå¯ä»¥"è§‚çœ‹"çš„çŽ°è±¡ï¼Œå¼€åˆ›äº†ç§‘å­¦å±•ç¤ºçš„æ–°èŒƒå¼\nâ€¢ æ–‡åŒ–ç¬¦å·ï¼šæˆä¸º"ç–¯ç‹‚ç§‘å­¦å®¶"å’Œ"å¤©æ‰å‘æ˜Žå®¶"çš„è§†è§‰ä»£åè¯\nâ€¢ å½“ä»£åº”ç”¨ï¼šä»Žç²’å­åŠ é€Ÿå™¨åˆ°éŸ³ä¹ç‰¹æ–¯æ‹‰çº¿åœˆï¼ˆèƒ½"æ¼”å¥"éŸ³ä¹çš„æ”¾ç”µè£…ç½®ï¼‰ï¼ŒæŒç»­å¯å‘æ–°çš„åˆ›é€ ',
    significance: 'Tesla Coil æ˜¯å·¥ä¸šè®¾è®¡ä¸­ç½•è§çš„æ¡ˆä¾‹ï¼šä¸€ä¸ªçº¯æŠ€æœ¯è£…ç½®ï¼Œä»…å‡­å…¶å·¥ä½œæ—¶çš„è§†è§‰æ•ˆæžœï¼Œå°±æˆä¸ºäº†ä¸€ä»¶æ°¸æ’çš„è®¾è®¡ç»å…¸ã€‚å®ƒè¯æ˜Žäº†**æŠ€æœ¯æœ¬èº«å¯ä»¥æ˜¯ç¾Žçš„**â€”â€”ä¸éœ€è¦å¤–å£³ã€ä¸éœ€è¦è£…é¥°ï¼Œç”µåŠ›åœ¨ç©ºæ°”ä¸­è·³è·ƒçš„çž¬é—´å°±æ˜¯æœ€çº¯ç²¹çš„å½¢å¼ç¾Žã€‚',

    dateConnection_en: 'Nikola Tesla passed away alone at the New Yorker Hotel on January 7, 1943, at the age of 86. This Serbian-American inventor held over 300 patents, and the Tesla Coil remains his most visually spectacular invention â€” transforming invisible electricity into awe-inspiring sculptures of light.',
    designerBio_en: `Nikola Tesla (1856â€“1943), Serbian-American inventor and electrical engineer, the architect of the alternating current power system.

His "War of Currents" with Edison is one of the most famous rivalries in industrial design history. Edison championed direct current; Tesla proved alternating current's absolute superiority for long-distance transmission. Tesla's AC system became the global standard for electrical infrastructure â€” every watt you use right now traces back to his design.

**"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."**

He was a rare inventor who possessed both engineering genius and aesthetic intuition. The Tesla Coil is not merely a technical apparatus â€” it is his visual manifesto on the beauty of electricity.`,
    story_en: `In 1891, Tesla invented the resonant transformer that bears his name â€” the Tesla Coil.

Its principle seems straightforward: two coil sets coupled through resonance step up ordinary voltage to millions of volts, producing spectacular arc discharges at the terminal. But behind this "simple" principle lies Tesla's profound understanding of electromagnetic resonance.

**The design beauty of the Tesla Coil is this: it makes the invisible visible.** Electricity â€” the fundamental force driving modern civilization â€” transforms into violet-blue lightning at the coil's terminal, dancing, branching, and dissipating through the air. It is both scientific instrument and light sculpture.

Tesla once stood beside his coil in his New York laboratory, letting artificial lightning cascade around his body â€” those photographs became some of the most iconic images in the history of science. He used these spectacular demonstrations to promote the possibility of wireless power transmission.

At his Colorado Springs laboratory (1899), he built a colossal coil 16 meters in diameter, generating artificial lightning bolts up to 40 meters long â€” St. Elmo's fire appeared on butterfly wings nearby, and light bulbs within 6 miles lit up spontaneously.

Though his wireless power dream was never fully realized, the Tesla Coil found broad applications in radio communication, medical devices, and particle accelerators. And its most enduring legacy may be as a "functional sculpture" â€” continuing to inspire awe at the beauty of electricity in science museums, music festivals, and art installations around the world.`,
    legacy_en: 'â€¢ Wireless communication foundation: the Tesla Coil\'s resonance principle is fundamental to radio technology\nâ€¢ Science visualization pioneer: the first device to make electricity something you could "watch," creating a new paradigm for science demonstration\nâ€¢ Cultural icon: became the visual synonym for "mad scientist" and "genius inventor"\nâ€¢ Contemporary applications: from particle accelerators to musical Tesla Coils (discharge devices that can "play" music), it continues to inspire new creations',
    significance_en: 'The Tesla Coil is a rare case in industrial design: a purely technical device that became an enduring design classic solely through its visual spectacle during operation. It proves that **technology itself can be beautiful** â€” no housing needed, no decoration required. The moment electricity leaps through air is the purest form of aesthetic beauty.',
  },

  // 01-08: Ziggy Stardust
  {
    id: '39',
    date: '2026-01-08',
    imageUrl: '/the-daily-object/images/ziggy-stardust.jpg',
    fullImageUrl: '/the-daily-object/images/full/ziggy-stardust.jpg',
    title: 'Ziggy Stardust',
    title_en: 'Ziggy Stardust',
    subtitle: 'David Bowie, 1972',
    subtitle_en: 'David Bowie, 1972',
    category: 'music',
    designer: 'David Bowie',
    year: '1972',

    dateConnection: 'David Bowie 1947å¹´1æœˆ8æ—¥å‡ºç”ŸäºŽä¼¦æ•¦å¸ƒé‡Œå…‹æ–¯é¡¿ã€‚ä»–ä¸ä»…æ˜¯éŸ³ä¹å®¶ï¼Œæ›´æ˜¯ä¸€ä½è§†è§‰è®¾è®¡å¤§å¸ˆâ€”â€”Ziggy Stardust æ˜¯æµè¡Œæ–‡åŒ–å²ä¸Šæœ€å…·å½±å“åŠ›çš„è§’è‰²è®¾è®¡ï¼Œå®šä¹‰äº†"éŸ³ä¹äººå³è§†è§‰å“ç‰Œ"çš„èŒƒå¼ã€‚',
    designerBio: `David Bowie (1947-2016)ï¼Œè‹±å›½éŸ³ä¹å®¶ã€æ¼”å‘˜ã€è§†è§‰è‰ºæœ¯å®¶ï¼Œæµè¡Œæ–‡åŒ–çš„å˜å½¢è€…ã€‚

ä»–çš„å¤©æ‰ä¸ä»…åœ¨äºŽéŸ³ä¹ï¼Œæ›´åœ¨äºŽ**å°†è‡ªæˆ‘ä½œä¸ºè®¾è®¡åª’ä»‹**ã€‚åœ¨ä»–50å¹´çš„èŒä¸šç”Ÿæ¶¯ä¸­ï¼Œä»–ä¸æ–­é‡å¡‘è‡ªå·±çš„è§†è§‰å½¢è±¡â€”â€”ä»Ž Ziggy Stardust åˆ° Aladdin Saneï¼Œä»Ž Thin White Duke åˆ° Blackstarâ€”â€”æ¯ä¸€æ¬¡è½¬å˜éƒ½æ˜¯ä¸€æ¬¡å®Œæ•´çš„è®¾è®¡é¡¹ç›®ï¼šé€ åž‹ã€æœè£…ã€èˆžå°ã€ä¸“è¾‘å°é¢ã€MVï¼Œå…¨éƒ¨ç»Ÿä¸€åœ¨ä¸€ä¸ªè§†è§‰æ¦‚å¿µä¹‹ä¸‹ã€‚

**"æˆ‘æ€»æ˜¯è§‰å¾—è‡ªå·±æ›´åƒä¸€ä¸ªç”¨éŸ³ä¹å·¥ä½œçš„è®¾è®¡å¸ˆï¼Œè€Œä¸æ˜¯ä¸€ä¸ªç¢°å·§æœ‰è§†è§‰å“å‘³çš„éŸ³ä¹äººã€‚"**`,
    story: `1972å¹´6æœˆï¼Œä¸“è¾‘ã€ŠThe Rise and Fall of Ziggy Stardust and the Spiders from Marsã€‹å‘è¡Œã€‚

Ziggy Stardust ä¸æ˜¯ä¸€ä¸ªè§’è‰²ï¼Œè€Œæ˜¯ä¸€ä¸ª**å®Œæ•´çš„è®¾è®¡ç³»ç»Ÿ**ã€‚

**é€ åž‹è®¾è®¡**ï¼šç«çº¢è‰²çš„åˆºçŒ¬å¤´ï¼ˆç”±å‘åž‹å¸ˆ Suzi Fussey æ‰“é€ ï¼‰ã€é—ªç”µå¦†å®¹ã€æžåº¦æ¶ˆç˜¦çš„èº«æâ€”â€”æ¯ä¸€ä¸ªå…ƒç´ éƒ½ç»è¿‡ç²¾å¿ƒè®¡ç®—ï¼Œæ—¢åƒå¤–æ˜Ÿæ¥å®¢åˆåƒæœ«æ—¥æ‘‡æ»šæ˜Žæ˜Ÿã€‚

**æœè£…è®¾è®¡**ï¼šæ—¥æœ¬è®¾è®¡å¸ˆå±±æœ¬å®½æ–‹ï¼ˆKansai Yamamotoï¼‰ä¸º Bowie è®¾è®¡çš„èˆžå°æœè£…æˆä¸ºæ—¶å°šå²ç»å…¸â€”â€”ä¸å¯¹ç§°è¿žä½“è¡£ã€é‡‘å±žæ„Ÿé¢æ–™ã€å¤¸å¼ çš„è‚©éƒ¨è½®å»“ã€‚è¿™äº›è®¾è®¡èžåˆäº†æ—¥æœ¬æ­Œèˆžä¼Žç¾Žå­¦ä¸Žè‹±å›½åŽä¸½æ‘‡æ»šï¼Œåˆ›é€ äº†ä¸€ç§å…¨æ–°çš„èˆžå°æœè£…è¯­è¨€ã€‚

**ä¸“è¾‘å°é¢**ï¼šæ‘„å½±å¸ˆ Brian Ward åœ¨ä¼¦æ•¦ Heddon Street æ‹æ‘„çš„å°é¢ç…§â€”â€”Bowie ç«™åœ¨é›¨åŽçš„è¡—å¤´ï¼Œå‰ä»–æŒ‚åœ¨èº«ä¸Šï¼Œå¤´é¡¶æ˜¯"K.WEST"çš„æ‹›ç‰Œâ€”â€”æˆä¸ºæ‘‡æ»šä¹å²ä¸Šæœ€å…·æ ‡å¿—æ€§çš„å°é¢ä¹‹ä¸€ã€‚ç…§ç‰‡åˆ»æ„é€‰æ‹©äº†æœ€å¹³å‡¡çš„ä¼¦æ•¦è¡—æ™¯ï¼Œä¸Ž Ziggy çš„å¤–æ˜Ÿèº«ä»½å½¢æˆå¼ åŠ›ã€‚

**æ¦‚å¿µçš„å®Œæ•´æ€§**æ˜¯ Ziggy æœ€ä¼Ÿå¤§çš„è®¾è®¡é—äº§ã€‚Bowie ä¸æ˜¯åœ¨"æ‰“æ‰®æˆ"Ziggyâ€”â€”ä»–æˆä¸ºäº† Ziggyã€‚æ¼”å”±ä¼šã€é‡‡è®¿ã€ç§ç”Ÿæ´»ï¼Œä»–å®Œå…¨ä»¥ Ziggy çš„èº«ä»½å­˜åœ¨äº†ä¸€å¹´åŠã€‚ç„¶åŽåœ¨1973å¹´7æœˆ3æ—¥çš„ Hammersmith Odeon æ¼”å”±ä¼šä¸Šï¼Œä»–å®£å¸ƒ"è¿™æ˜¯ Ziggy çš„æœ€åŽä¸€åœºæ¼”å‡º"â€”â€”æ€æ­»äº†è‡ªå·±åˆ›é€ çš„è§’è‰²ã€‚

è¿™æ˜¯è®¾è®¡å²ä¸Šæœ€å¤§èƒ†çš„ä¸€æ¬¡"å“ç‰Œç»ˆç»“"â€”â€”è‡ªæ€å¼åœ°ç»“æŸä¸€ä¸ªæ­£åœ¨å·…å³°çš„ IPã€‚`,
    legacy: 'â€¢ è§†è§‰å“ç‰Œå…ˆé©±ï¼šZiggy è¯æ˜ŽéŸ³ä¹äººå¯ä»¥æ˜¯ä¸€ä¸ªå®Œæ•´çš„è§†è§‰è®¾è®¡é¡¹ç›®ï¼Œç›´æŽ¥å½±å“äº† Madonnaã€Lady Gagaã€Kanye West ç­‰åŽæ¥è€…\nâ€¢ æ€§åˆ«æµåŠ¨ç¾Žå­¦ï¼šZiggy çš„é›Œé›„åŒä½“é€ åž‹æŒ‘æˆ˜äº†æ€§åˆ«äºŒå…ƒçš„è§†è§‰è§„èŒƒï¼Œå¼€åˆ›äº†æµè¡Œæ–‡åŒ–ä¸­çš„æ€§åˆ«æµåŠ¨ç¾Žå­¦\nâ€¢ èˆžå°è®¾è®¡é©å‘½ï¼šå°†æ—¥æœ¬æ­Œèˆžä¼Žã€å¾·å›½è¡¨çŽ°ä¸»ä¹‰å’Œè‹±å›½åŽä¸½æ‘‡æ»šèžåˆï¼Œé‡æ–°å®šä¹‰äº†æ¼”å”±ä¼šçš„è§†è§‰æ ‡å‡†\nâ€¢ ä¸“è¾‘æ¦‚å¿µåŒ–ï¼šè¯æ˜Žä¸“è¾‘å¯ä»¥æ˜¯ä¸€ä¸ªè·¨åª’ä»‹çš„å™äº‹è®¾è®¡é¡¹ç›®ï¼Œè€Œä¸åªæ˜¯æ­Œæ›²çš„é›†åˆ',
    significance: 'Ziggy Stardust æ˜¯æµè¡Œæ–‡åŒ–è®¾è®¡çš„åˆ†æ°´å²­ã€‚åœ¨ Bowie ä¹‹å‰ï¼ŒéŸ³ä¹äººçš„å½¢è±¡æ˜¯"çœŸå®žè‡ªæˆ‘çš„å»¶ä¼¸"ã€‚åœ¨ Bowie ä¹‹åŽï¼ŒéŸ³ä¹äººçš„å½¢è±¡æˆä¸ºäº†**å¯ä»¥è¢«è®¾è®¡ã€è¢«æž„å»ºã€è¢«è§£æž„çš„åˆ›æ„äº§å“**ã€‚ä»Šå¤©æ¯ä¸€ä¸ªæœ‰è§†è§‰ç­–ç•¥çš„è‰ºäººâ€”â€”ä»Ž BeyoncÃ© åˆ° BTSâ€”â€”éƒ½åœ¨èµ° Bowie 1972å¹´å¼€è¾Ÿçš„è·¯ã€‚',

    dateConnection_en: 'David Bowie was born on January 8, 1947 in Brixton, London. He was not merely a musician but a visual design master â€” Ziggy Stardust is the most influential character design in pop culture history, defining the paradigm of "musician as visual brand."',
    designerBio_en: `David Bowie (1947â€“2016), British musician, actor, and visual artist â€” pop culture's ultimate shapeshifter.

His genius lay not only in music but in **using the self as a design medium.** Across a 50-year career, he continually reinvented his visual identity â€” from Ziggy Stardust to Aladdin Sane, Thin White Duke to Blackstar â€” each transformation a complete design project: styling, costume, stage, album art, and music video, all unified under a single visual concept.

**"I always felt I was more of a designer who worked with music than a musician who happened to have visual taste."**`,
    story_en: `In June 1972, the album The Rise and Fall of Ziggy Stardust and the Spiders from Mars was released.

Ziggy Stardust was not a character â€” it was a **complete design system.**

**Styling:** The fire-red mullet (created by hairstylist Suzi Fussey), the lightning bolt makeup, the emaciated frame â€” every element was precisely calibrated to read as both alien visitor and apocalyptic rock star.

**Costume design:** Japanese designer Kansai Yamamoto's stage costumes for Bowie became fashion history â€” asymmetric bodysuits, metallic fabrics, exaggerated shoulder silhouettes. These designs fused Japanese Kabuki aesthetics with British glam rock, creating an entirely new language for stage costume.

**Album cover:** Photographer Brian Ward's cover shot on London's Heddon Street â€” Bowie standing on a rain-slicked street, guitar slung over his shoulder, the "K.WEST" sign overhead â€” became one of the most iconic covers in rock history. The deliberately mundane London street scene creates tension with Ziggy's alien identity.

**Conceptual completeness** is Ziggy's greatest design legacy. Bowie didn't "dress up as" Ziggy â€” he became Ziggy. Concerts, interviews, private life â€” he existed entirely as Ziggy for eighteen months. Then on July 3, 1973 at the Hammersmith Odeon, he announced "this is the last show we'll ever do" â€” killing the character he had created.

This was the boldest "brand termination" in design history â€” suicidally ending an IP at its absolute peak.`,
    legacy_en: 'â€¢ Visual branding pioneer: Ziggy proved that a musician could be a complete visual design project, directly influencing Madonna, Lady Gaga, Kanye West and more\nâ€¢ Gender-fluid aesthetics: Ziggy\'s androgynous styling challenged binary gender norms in visual culture, pioneering gender fluidity in pop culture\nâ€¢ Stage design revolution: fusing Japanese Kabuki, German Expressionism, and British glam rock, it redefined the visual standards of live performance\nâ€¢ Album as concept: proved that an album could be a cross-media narrative design project, not just a collection of songs',
    significance_en: 'Ziggy Stardust was pop culture design\'s watershed moment. Before Bowie, a musician\'s image was "an extension of their true self." After Bowie, a musician\'s image became **a creative product that could be designed, constructed, and deconstructed.** Every artist with a visual strategy today â€” from BeyoncÃ© to BTS â€” walks the path Bowie carved in 1972.',
  },

  // 01-09: iPhone
  {
    id: '40',
    date: '2026-01-09',
    imageUrl: '/the-daily-object/images/iphone-2007.jpg',
    fullImageUrl: '/the-daily-object/images/full/iphone-2007.jpg',
    title: 'iPhone',
    title_en: 'iPhone',
    subtitle: 'Apple, 2007',
    subtitle_en: 'Apple, 2007',
    category: 'software',
    designer: 'Apple',
    year: '2007',

    dateConnection: '2007å¹´1æœˆ9æ—¥ï¼ŒSteve Jobs åœ¨ Macworld å¤§ä¼šä¸Šå‘å¸ƒäº†åˆä»£ iPhoneâ€”â€”"ä¸€ä¸ª iPodï¼Œä¸€ä¸ªæ‰‹æœºï¼Œä¸€ä¸ªçªç ´æ€§çš„äº’è”ç½‘é€šä¿¡è®¾å¤‡"ã€‚è¿™ä¸‰å¥è¯æ”¹å˜äº†æ•´ä¸ªæ¶ˆè´¹ç”µå­è¡Œä¸šã€‚',
    designerBio: `Apple å·¥ä¸šè®¾è®¡å›¢é˜Ÿåœ¨ Jony Ive çš„å¸¦é¢†ä¸‹ï¼Œå°†ç¡¬ä»¶ã€è½¯ä»¶ã€äº¤äº’ä¸‰è€…èžä¸ºä¸€ä½“ã€‚

iPhone çš„è®¾è®¡å“²å­¦ä¸æ˜¯"åšä¸€ä¸ªæ›´å¥½çš„æ‰‹æœº"ï¼Œè€Œæ˜¯**é‡æ–°å®šä¹‰æ‰‹æœºåº”è¯¥æ˜¯ä»€ä¹ˆ**ã€‚åœ¨ä¸€ä¸ªæ»¡æ˜¯ç‰©ç†é”®ç›˜å’Œè§¦æŽ§ç¬”çš„æ—¶ä»£ï¼ŒiPhone ç”¨ä¸€å— 3.5 è‹±å¯¸å¤šç‚¹è§¦æŽ§å±å¹•å–ä»£äº†ä¸€åˆ‡ã€‚Steve Jobs åœ¨å°ä¸Šæ»‘åŠ¨è§£é”çš„é‚£ä¸€åˆ»ï¼Œæ•´ä¸ªè¡Œä¸šçš„èŒƒå¼è¢«æ”¹å†™äº†ã€‚`,
    story: `iPhone çš„è¯žç”ŸæºäºŽä¸€ä¸ªå†…éƒ¨é¡¹ç›®â€”â€”"Project Purple"ã€‚å›¢é˜Ÿåœ¨è‹¹æžœæ€»éƒ¨çš„ä¸€é—´ä¸Šé”çš„æˆ¿é—´é‡Œå·¥ä½œäº†ä¸¤å¹´å¤šï¼Œé—¨ä¸Šçš„æ ‡ç‰Œå†™ç€"Fight Club"ã€‚

**"æˆ‘ä»¬æƒ³è¦ä¸€ä¸ªä¸éœ€è¦è¯´æ˜Žä¹¦çš„äº§å“ã€‚"** è¿™æ˜¯ Jobs ç»™å›¢é˜Ÿå®šä¸‹çš„æ ¸å¿ƒè®¾è®¡åŽŸåˆ™ã€‚ä¸ºæ­¤ï¼ŒiPhone åšäº†å¤§é‡"å‡æ³•"â€”â€”æ²¡æœ‰ç‰©ç†é”®ç›˜ã€æ²¡æœ‰è§¦æŽ§ç¬”ã€æ²¡æœ‰å¯æ‹†å¸ç”µæ± ã€‚æ¯ä¸€ä¸ªåˆ å‡éƒ½åœ¨å½“æ—¶è¢«è§†ä¸ºç–¯ç‹‚ã€‚

æœ€é©å‘½æ€§çš„è®¾è®¡å†³ç­–æ˜¯**å¤šç‚¹è§¦æŽ§**ã€‚ä¹‹å‰çš„è§¦æŽ§å±éƒ½æ˜¯ç”µé˜»å¼çš„ï¼Œéœ€è¦ç”¨åŠ›æŒ‰åŽ‹ï¼Œåªèƒ½è¯†åˆ«å•ç‚¹ã€‚iPhone çš„ç”µå®¹å¼å¤šç‚¹è§¦æŽ§è®©"æåˆç¼©æ”¾"æˆä¸ºå¯èƒ½â€”â€”è¿™ä¸ªæ‰‹åŠ¿å¦‚ä»Šå·²èžå…¥äººç±»çš„è‚Œè‚‰è®°å¿†ã€‚

å‘å¸ƒä¼šä¸Šæœ€ç»å…¸çš„ä¸€å¹•ï¼šJobs å±•ç¤ºäº†ä¸€å¼ ç…§ç‰‡ï¼Œç„¶åŽç”¨ä¸¤æ ¹æ‰‹æŒ‡è½»è½»ä¸€æï¼Œç…§ç‰‡ç¼©å°äº†ã€‚å°ä¸‹å®‰é™äº†ä¸€ç§’ï¼Œç„¶åŽçˆ†å‘å‡ºæ¬¢å‘¼ã€‚é‚£ä¸€ç§’çš„å®‰é™ï¼Œæ˜¯äººä»¬çš„å¤§è„‘åœ¨é‡æ–°ç†è§£"äººæœºäº¤äº’"çš„å«ä¹‰ã€‚

åˆä»£ iPhone æ²¡æœ‰ App Storeï¼ˆé‚£æ˜¯ä¸€å¹´åŽçš„äº‹ï¼‰ï¼Œæ²¡æœ‰ 3Gï¼Œæ²¡æœ‰å¤åˆ¶ç²˜è´´ã€‚ä½†å®ƒç”¨**æžè‡´çš„äº¤äº’è®¾è®¡**å’Œ**å‰æ‰€æœªæœ‰çš„ç•Œé¢ç¾Žå­¦**è¯æ˜Žäº†ä¸€ä»¶äº‹ï¼šå¥½çš„è®¾è®¡ä¸æ˜¯åŠŸèƒ½çš„å †å ï¼Œè€Œæ˜¯ä½“éªŒçš„é‡å¡‘ã€‚`,
    legacy: 'â€¢ æ¶ˆç­äº†ç‰©ç†é”®ç›˜æ‰‹æœºï¼Œå¼€åˆ›äº†å…¨è§¦æŽ§æ™ºèƒ½æ‰‹æœºæ—¶ä»£\nâ€¢ "æ»‘åŠ¨è§£é”"æˆä¸ºå²ä¸Šæœ€å…·è¾¨è¯†åº¦çš„äº¤äº’æ‰‹åŠ¿ä¹‹ä¸€\nâ€¢ å‚¬ç”Ÿäº†æ•´ä¸ªç§»åŠ¨åº”ç”¨ç”Ÿæ€ç³»ç»Ÿï¼ˆApp Storeï¼Œ2008ï¼‰\nâ€¢ è®©"ç”¨æˆ·ä½“éªŒè®¾è®¡"ä»Žè¾¹ç¼˜å­¦ç§‘å˜æˆæ ¸å¿ƒç«žäº‰åŠ›\nâ€¢ é‡æ–°å®šä¹‰äº†äº§å“å‘å¸ƒä¼šçš„å½¢å¼â€”â€”ç§‘æŠ€ç•Œçš„"One more thing"',
    significance: 'iPhone æ˜¯21ä¸–çºªæœ€å…·å½±å“åŠ›çš„è®¾è®¡ä½œå“ï¼Œæ²¡æœ‰ä¹‹ä¸€ã€‚å®ƒä¸åªæ˜¯ä¸€ä¸ªäº§å“ï¼Œè€Œæ˜¯ä¸€ä¸ª**è®¾è®¡èŒƒå¼çš„è½¬æŠ˜ç‚¹**â€”â€”è¯æ˜Žäº†å¥½çš„è®¾è®¡å¯ä»¥é‡æ–°å®šä¹‰ä¸€ä¸ªå“ç±»ï¼Œç”šè‡³æ”¹å˜äººç±»çš„æ—¥å¸¸è¡Œä¸ºæ–¹å¼ã€‚ä»Žæ­¤ä»¥åŽï¼Œæ¯ä¸€ä¸ªæ¶ˆè´¹ç”µå­äº§å“éƒ½åœ¨è¿½é—®åŒä¸€ä¸ªé—®é¢˜ï¼š"ç”¨æˆ·ä½“éªŒå¤Ÿå¥½å—ï¼Ÿ"',

    dateConnection_en: 'On January 9, 2007, Steve Jobs unveiled the original iPhone at Macworld â€” "an iPod, a phone, and a breakthrough internet communications device." Those three phrases changed the entire consumer electronics industry.',
    designerBio_en: `Apple's industrial design team, led by Jony Ive, fused hardware, software, and interaction into a single unified experience.

The iPhone's design philosophy wasn't "make a better phone" â€” it was **redefine what a phone should be.** In an era of physical keyboards and styluses, iPhone replaced everything with a 3.5-inch multi-touch display. The moment Steve Jobs performed "slide to unlock" on stage, the industry's paradigm was rewritten.`,
    story_en: `The iPhone was born from an internal initiative called "Project Purple." The team worked for over two years in a locked room at Apple headquarters, with a sign on the door reading "Fight Club."

**"We want a product that doesn't need a manual."** That was Jobs' core design principle. To achieve it, iPhone practiced radical subtraction â€” no physical keyboard, no stylus, no removable battery. Every elimination was considered insane at the time.

The most revolutionary design decision was **multi-touch.** Previous touchscreens were resistive, requiring firm pressure and recognizing only single points. iPhone's capacitive multi-touch made "pinch to zoom" possible â€” a gesture now embedded in humanity's muscle memory.

The keynote's most iconic moment: Jobs displayed a photo, then gently pinched with two fingers. The photo shrank. The audience went silent for one second, then erupted in cheers. That one second of silence was people's brains recalibrating their understanding of human-computer interaction.

The original iPhone had no App Store (that came a year later), no 3G, no copy-paste. But through **impeccable interaction design** and **unprecedented interface aesthetics**, it proved one thing: great design isn't about stacking features â€” it's about reimagining the experience.`,
    legacy_en: 'â€¢ Killed the physical keyboard phone, inaugurating the all-touch smartphone era\nâ€¢ "Slide to unlock" became one of the most recognizable interaction gestures in history\nâ€¢ Spawned the entire mobile app ecosystem (App Store, 2008)\nâ€¢ Elevated "user experience design" from a niche discipline to a core competitive advantage\nâ€¢ Redefined the product launch format â€” tech\'s "One more thing"',
    significance_en: 'The iPhone is the most influential design artifact of the 21st century, bar none. It wasn\'t just a product but a **paradigm shift in design** â€” proving that great design can redefine an entire category and even change how humans behave daily. Ever since, every consumer electronics product asks the same question: "Is the user experience good enough?"',
  },

  // 01-10: Single Form
  {
    id: '41',
    date: '2026-01-10',
    imageUrl: '/the-daily-object/images/single-form-hepworth.jpg',
    fullImageUrl: '/the-daily-object/images/full/single-form-hepworth.jpg',
    title: 'Single Form',
    title_en: 'Single Form',
    subtitle: 'Barbara Hepworth, 1961â€“64',
    subtitle_en: 'Barbara Hepworth, 1961â€“64',
    category: 'art',
    designer: 'Barbara Hepworth',
    year: '1964',

    dateConnection: 'Barbara Hepworth äºŽ1903å¹´1æœˆ10æ—¥å‡ºç”Ÿåœ¨è‹±å›½çº¦å…‹éƒ¡éŸ¦å…‹è²å°”å¾·ã€‚å¥¹æ˜¯20ä¸–çºªæœ€é‡è¦çš„é›•å¡‘å®¶ä¹‹ä¸€ï¼Œä¸Ž Henry Moore å¹¶åˆ—ä¸ºè‹±å›½çŽ°ä»£é›•å¡‘çš„å¥ åŸºäººã€‚',
    designerBio: `Barbara Hepworthï¼ˆ1903â€“1975ï¼‰ï¼Œè‹±å›½é›•å¡‘å®¶ï¼ŒæŠ½è±¡é›•å¡‘è¿åŠ¨çš„æ ¸å¿ƒäººç‰©ã€‚

å¥¹çš„ä½œå“ä»¥**æœ‰æœºå½¢æ€ä¸Žè´Ÿç©ºé—´**çš„å¯¹è¯è‘—ç§°â€”â€”åœ¨åšå®žçš„ææ–™ä¸­å¼€å‡¿å‡ºç©ºæ´žï¼Œè®©å…‰çº¿å’Œç©ºæ°”ç©¿é€é›•å¡‘ã€‚è¿™ä¸æ˜¯ç®€å•çš„"æŒ–æ´ž"ï¼Œè€Œæ˜¯ä¸€ç§å…³äºŽ**å†…ä¸Žå¤–ã€å®žä¸Žè™šã€å­˜åœ¨ä¸Žç¼ºå¸­**çš„å“²å­¦æŽ¢ç´¢ã€‚

Hepworth åœ¨ç”·æ€§ä¸»å¯¼çš„é›•å¡‘ç•Œå¼€è¾Ÿäº†ç‹¬ç‰¹çš„é“è·¯ã€‚å¥¹ä¸è¿½éšå½“æ—¶æµè¡Œçš„å‡ ä½•æŠ½è±¡ï¼Œè€Œæ˜¯ä»Žçº¦å…‹éƒ¡çš„å±±ä¸˜å’Œåº·æ²ƒå°”çš„æµ·å²¸çº¿ä¸­æ±²å–çµæ„Ÿï¼Œåˆ›é€ å‡ºæ—¢çŽ°ä»£åˆæ°¸æ’çš„å½¢å¼è¯­è¨€ã€‚`,
    story: `1961å¹´ï¼Œè”åˆå›½ç§˜ä¹¦é•¿ Dag HammarskjÃ¶ld åœ¨éžæ´²å› ç©ºéš¾åŽ»ä¸–ã€‚ä»–ç”Ÿå‰ä¸€ç›´æ¢¦æƒ³åœ¨è”åˆå›½æ€»éƒ¨æ”¾ç½®ä¸€ä»¶ Hepworth çš„ä½œå“ã€‚ä¸ºçºªå¿µè¿™ä½å’Œå¹³ä½¿è€…ï¼Œè”åˆå›½å§”æ‰˜ Hepworth åˆ›ä½œä¸€ä»¶çºªå¿µé›•å¡‘ã€‚

**Single Form** å°±æ­¤è¯žç”Ÿâ€”â€”ä¸€å—é«˜è¾¾ 6.4 ç±³çš„é’é“œå·¨ä½œï¼ŒçŸ—ç«‹åœ¨è”åˆå›½æ€»éƒ¨å¹¿åœºçš„æ°´æ± ä¸­ã€‚

è¿™ä»¶ä½œå“çš„åŠ›é‡åœ¨äºŽå®ƒçš„**æžè‡´ç®€æ´**ã€‚ä¸€ä¸ªåž‚ç›´çš„æ¤­åœ†å½¢ä½“ï¼Œè¡¨é¢æœ‰ä¸€ä¸ªåœ†å½¢çš„å‡¹é™·ï¼Œä»¿ä½›ä¸€åªå‡è§†ä¸–ç•Œçš„çœ¼ç›ã€‚æ²¡æœ‰ä»»ä½•å…·è±¡å…ƒç´ ï¼Œæ²¡æœ‰äººç‰©ï¼Œæ²¡æœ‰ç¬¦å·â€”â€”åªæœ‰çº¯ç²¹çš„å½¢å¼åœ¨ä¼ é€’ä¸€ç§åº„ä¸¥çš„å¹³é™ã€‚

Hepworth è¯´ï¼š"æˆ‘å¸Œæœ›è¿™ä»¶ä½œå“èƒ½ä¼ è¾¾ä¸€ç§**äººç±»ç²¾ç¥žçš„åšå®šä¸Žå®é™**ã€‚" å¥¹èŠ±äº†ä¸‰å¹´æ—¶é—´å®Œå–„è¿™ä¸ªå½¢å¼â€”â€”è°ƒæ•´æ›²çº¿çš„å¼§åº¦ã€å‡¹é™·çš„æ·±åº¦ã€è¡¨é¢çš„çº¹ç†ã€‚æ¯ä¸€ä¸ªå†³å®šéƒ½æ˜¯ä¸ºäº†è®©è¿™ä»¶å·¨å¤§çš„é›•å¡‘æ—¢æœ‰çºªå¿µç¢‘çš„åº„ä¸¥ï¼Œåˆæœ‰äººæ€§çš„æ¸©åº¦ã€‚

1964å¹´6æœˆ11æ—¥ï¼ŒSingle Form åœ¨è”åˆå›½æ€»éƒ¨æ­å¹•ã€‚é˜³å…‰ç©¿è¿‡é’é“œè¡¨é¢çš„åœ†å­”ï¼Œåœ¨æ°´é¢æŠ•ä¸‹å˜å¹»çš„å…‰å½±â€”â€”è¿™æ­£æ˜¯ Hepworth è®¾è®¡çš„ä¸€éƒ¨åˆ†ï¼š**è®©è‡ªç„¶å…‰æˆä¸ºé›•å¡‘çš„å…±åŒåˆ›ä½œè€…**ã€‚`,
    legacy: 'â€¢ æˆä¸ºè”åˆå›½æ€»éƒ¨æœ€æ ‡å¿—æ€§çš„è‰ºæœ¯å“ï¼Œè±¡å¾ç€å›½é™…å’Œå¹³ä¸Žäººç±»å°Šä¸¥\nâ€¢ è¯æ˜Žäº†æŠ½è±¡é›•å¡‘å¯ä»¥æ‰¿è½½æ·±åŽšçš„æƒ…æ„Ÿå’Œå…¬å…±æ„ä¹‰\nâ€¢ å¼€åˆ›äº†"è´Ÿç©ºé—´"ä½œä¸ºé›•å¡‘æ ¸å¿ƒè¯­è¨€çš„ä¼ ç»Ÿï¼Œå½±å“äº† Anish Kapoor ç­‰åŽæ¥è€…\nâ€¢ åœ¨å…¬å…±è‰ºæœ¯é¢†åŸŸæ ‘ç«‹äº†æ ‡æ†â€”â€”é›•å¡‘ä¸æ˜¯å»ºç­‘çš„é™„å±žå“ï¼Œè€Œæ˜¯ç©ºé—´çš„å®šä¹‰è€…',
    significance: 'Single Form ä»£è¡¨äº†é›•å¡‘ä¸Žå»ºç­‘ã€å…¬å…±ç©ºé—´çš„ç†æƒ³èžåˆã€‚å®ƒè¯æ˜Žäº†**çº¯ç²¹çš„æŠ½è±¡å½¢å¼å¯ä»¥ä¸Žæ¯ä¸€ä¸ªäººå¯¹è¯**â€”â€”ä¸éœ€è¦æ–‡å­—ï¼Œä¸éœ€è¦å™äº‹ï¼Œä¸€ä¸ªå½¢çŠ¶å°±è¶³ä»¥ä¼ é€’å’Œå¹³ã€å°Šä¸¥å’Œäººç±»ç²¾ç¥žçš„åŠ›é‡ã€‚è¿™ç§"å°‘å³æ˜¯å¤š"çš„è®¾è®¡å“²å­¦ï¼Œè‡³ä»Šå½±å“ç€å…¬å…±è‰ºæœ¯å’Œç©ºé—´è®¾è®¡ã€‚',

    dateConnection_en: 'Barbara Hepworth was born on January 10, 1903 in Wakefield, Yorkshire. She was one of the most important sculptors of the 20th century, standing alongside Henry Moore as a founder of British modern sculpture.',
    designerBio_en: `Barbara Hepworth (1903â€“1975), British sculptor and a central figure in the abstract sculpture movement.

Her work is celebrated for the dialogue between **organic form and negative space** â€” carving voids into solid materials, allowing light and air to penetrate the sculpture. This wasn't simply "making holes" but a philosophical exploration of **interior and exterior, solid and void, presence and absence.**

Hepworth forged a distinctive path in the male-dominated sculpture world. Rather than following the prevailing geometric abstraction, she drew inspiration from the hills of Yorkshire and the coastline of Cornwall, creating a formal language that was both modern and timeless.`,
    story_en: `In 1961, UN Secretary-General Dag HammarskjÃ¶ld died in a plane crash in Africa. He had long dreamed of placing a Hepworth work at UN headquarters. To honor this peace advocate, the United Nations commissioned Hepworth to create a memorial sculpture.

**Single Form** was born â€” a towering 6.4-meter bronze monolith standing in the reflecting pool at UN Plaza.

The work's power lies in its **radical simplicity.** A vertical oval form with a circular concavity on its surface, like an eye gazing upon the world. No figurative elements, no characters, no symbols â€” only pure form conveying a solemn tranquility.

Hepworth said: "I wanted the work to convey a sense of **steadfastness and serenity of the human spirit.**" She spent three years perfecting the form â€” adjusting the curvature, the depth of the concavity, the surface texture. Every decision aimed to give this monumental sculpture both the gravity of a memorial and the warmth of humanity.

On June 11, 1964, Single Form was unveiled at UN headquarters. Sunlight passed through the circular aperture in the bronze surface, casting shifting patterns on the water below â€” exactly as Hepworth had designed: **making natural light a co-creator of the sculpture.**`,
    legacy_en: 'â€¢ Became the most iconic artwork at UN headquarters, symbolizing international peace and human dignity\nâ€¢ Proved that abstract sculpture can carry profound emotion and public meaning\nâ€¢ Pioneered "negative space" as a core sculptural language, influencing later artists like Anish Kapoor\nâ€¢ Set a benchmark in public art â€” sculpture as a definer of space, not an accessory to architecture',
    significance_en: 'Single Form represents the ideal fusion of sculpture, architecture, and public space. It proved that **pure abstract form can speak to everyone** â€” no words needed, no narrative required, a single shape sufficient to convey peace, dignity, and the power of the human spirit. This "less is more" design philosophy continues to influence public art and spatial design today.',
  },

  // 01-11: Oscar Statuette
  {
    id: '42',
    date: '2026-01-11',
    imageUrl: '/the-daily-object/images/oscar-statuette.jpg',
    fullImageUrl: '/the-daily-object/images/full/oscar-statuette.jpg',
    title: 'Oscar Statuette',
    title_en: 'Oscar Statuette',
    subtitle: 'George Stanley, 1929',
    subtitle_en: 'George Stanley, 1929',
    category: 'film',
    designer: 'George Stanley',
    year: '1929',

    dateConnection: '1927å¹´1æœˆ11æ—¥ï¼Œç¾Žå›½ç”µå½±è‰ºæœ¯ä¸Žç§‘å­¦å­¦é™¢ï¼ˆAMPASï¼‰æ­£å¼æˆç«‹ã€‚ä¸¤å¹´åŽï¼Œå­¦é™¢åˆ›é€ äº†å¥¥æ–¯å¡é‡‘åƒå¥–â€”â€”å½±å²ä¸Šæœ€è‘—åçš„è®¾è®¡ç‰©ä»¶ä¹‹ä¸€ã€‚',
    designerBio: `å¥¥æ–¯å¡å°é‡‘äººçš„è®¾è®¡å‡ºè‡ª Cedric Gibbons ä¹‹æ‰‹â€”â€”ä»–æ˜¯ç±³é«˜æ¢…çš„é¦–å¸­è‰ºæœ¯æ€»ç›‘ï¼Œä¹Ÿæ˜¯å¥½èŽ±åžå¸ƒæ™¯è®¾è®¡çš„æ•™çˆ¶çº§äººç‰©ã€‚

Gibbons åœ¨ä¸€æ¬¡å­¦é™¢æ™šå®´çš„é¤å·¾çº¸ä¸Šç”»ä¸‹äº†æœ€åˆçš„è‰å›¾ï¼šä¸€ä¸ªéª‘å£«ç«™åœ¨ä¸€å·èƒ¶ç‰‡ä¸Šï¼Œæ‰‹æŒä¸€æŠŠåå­—å†›å®å‰‘ã€‚è¿™ä¸ªè‰å›¾åŽæ¥ç”±é›•å¡‘å®¶ George Stanley å¡‘é€ æˆä¸‰ç»´å½¢æ€ã€‚

**Gibbons æœ¬äººåŽæ¥èµ¢äº†11åº§å¥¥æ–¯å¡**â€”â€”æ¯”ä»»ä½•äººéƒ½äº†è§£è¿™ä¸ªå°é‡‘äººçš„åˆ†é‡ã€‚`,
    story: `Oscar å°é‡‘äººçš„è®¾è®¡å ªç§°**å·¥ä¸šè®¾è®¡å²ä¸Šæœ€æŒä¹…çš„å“ç‰Œå½¢è±¡ä¹‹ä¸€**ã€‚

1929å¹´çš„åˆç‰ˆè®¾è®¡è‡³ä»Šå‡ ä¹Žæ²¡æœ‰æ”¹å˜â€”â€”34åŽ˜ç±³é«˜ï¼Œ3.9å…¬æ–¤é‡ï¼Œä¸€ä¸ª Art Deco é£Žæ ¼çš„éª‘å£«å½¢è±¡ã€‚è¿™ç§è®¾è®¡çš„æŒä¹…æ€§æœ¬èº«å°±æ˜¯ä¸€ç§æˆå°±ï¼šåœ¨ä¸€ä¸ªæ¯å¹´éƒ½åœ¨è¿½æ±‚æ–°é²œæ„Ÿçš„è¡Œä¸šé‡Œï¼ŒOscar ç”¨**ä¸å˜**èµ¢å¾—äº†æ°¸æ’ã€‚

å°é‡‘äººçš„ Art Deco ç¾Žå­¦ç»éžå¶ç„¶ã€‚1920å¹´ä»£æœ«æ­£æ˜¯ Art Deco è¿åŠ¨çš„å·…å³°â€”â€”å‡ ä½•åŒ–çš„äººä½“ã€æµçº¿åž‹çš„è½®å»“ã€ç®€æ´æœ‰åŠ›çš„å½¢å¼ã€‚Oscar å®Œç¾Žæ•æ‰äº†é‚£ä¸ªæ—¶ä»£çš„è®¾è®¡ç²¾ç¥žï¼Œåˆå› ä¸ºè¶³å¤ŸæŠ½è±¡è€Œè¶…è¶Šäº†æ—¶ä»£ã€‚

**åˆ¶é€ å·¥è‰ºçš„æ¼”å˜**ä¹Ÿæ˜¯ä¸€éƒ¨ææ–™è®¾è®¡å²ï¼šæœ€åˆæ˜¯é’é“œé•€é‡‘ï¼ŒäºŒæˆ˜æœŸé—´å› é‡‘å±žçŸ­ç¼ºæ”¹ç”¨çŸ³è†ï¼ˆæˆ˜åŽå¯ä»¥æ¢å›žé‡‘å±žç‰ˆï¼‰ï¼Œå¦‚ä»Šæ˜¯é”¡é”‘é“œåˆé‡‘ç”µé•€24Ké‡‘ã€‚æ¯ä¸€åº§ Oscar éƒ½è¦ç»è¿‡æ•°åé“å·¥åºçš„æ‰‹å·¥æ‰“ç£¨ã€‚

ä¸€ä¸ªæœ‰è¶£çš„ç»†èŠ‚ï¼šOscar è„šä¸‹çš„èƒ¶ç‰‡å·è½´æœ‰äº”ä¸ªé½¿æ§½ï¼Œåˆ†åˆ«ä»£è¡¨å­¦é™¢çš„äº”ä¸ªåŽŸå§‹åˆ†æ”¯â€”â€”æ¼”å‘˜ã€å¯¼æ¼”ã€åˆ¶ç‰‡äººã€æŠ€æœ¯äººå‘˜å’Œç¼–å‰§ã€‚è¿™ç§**å°†è±¡å¾æ„ä¹‰ç¼–ç»‡è¿›å½¢å¼ç»†èŠ‚**çš„åšæ³•ï¼Œæ­£æ˜¯ä¼˜ç§€è®¾è®¡çš„æ ‡å¿—ã€‚

ä¸ºä»€ä¹ˆå«"Oscar"è‡³ä»Šä¼—è¯´çº·çº­ã€‚æœ€æµè¡Œçš„è¯´æ³•æ˜¯å­¦é™¢å›¾ä¹¦é¦†å‘˜ Margaret Herrick çœ‹åˆ°å°é‡‘äººåŽè¯´"ä»–çœ‹èµ·æ¥åƒæˆ‘çš„å”å” Oscar"ã€‚æ— è®ºçœŸå‡ï¼Œè¿™ä¸ªæ˜µç§°æ¯”å®˜æ–¹åç§°"Academy Award of Merit"äº²åˆ‡ä¸€ä¸‡å€â€”â€”**å¥½çš„è®¾è®¡æ€»ä¼šèŽ·å¾—ä¸€ä¸ªå¥½çš„åå­—**ã€‚`,
    legacy: 'â€¢ å…¨çƒè¾¨è¯†åº¦æœ€é«˜çš„å¥–æ¯è®¾è®¡ï¼Œè¶…è¶Šäº†ç”µå½±è¡Œä¸šæœ¬èº«\nâ€¢ Art Deco è®¾è®¡åœ¨å½“ä»£æ–‡åŒ–ä¸­æœ€æŒä¹…çš„æ´»åŒ–çŸ³\nâ€¢ å®šä¹‰äº†"é¢å¥–å…¸ç¤¼"çš„è§†è§‰è¯­è¨€â€”â€”æ­¤åŽæ‰€æœ‰å¥–é¡¹éƒ½åœ¨æŸç§ç¨‹åº¦ä¸Šæ¨¡ä»¿å®ƒ\nâ€¢ è¯æ˜Žäº†æžç®€å½¢å¼çš„åŠ›é‡ï¼šè¿‘ç™¾å¹´ä¸å˜çš„è®¾è®¡ï¼Œä¾ç„¶çŽ°ä»£',
    significance: 'Oscar å°é‡‘äººæ˜¯**è®¾è®¡æŒä¹…åŠ›çš„ç»ˆæžè¯æ˜Ž**ã€‚åœ¨ä¸€ä¸ªä¸æ–­è¿½æ–°çš„ä¸–ç•Œé‡Œï¼Œå®ƒç”¨è¿‘ç™¾å¹´çš„ä¸å˜è¯æ˜Žäº†ä¸€ä¸ªé“ç†ï¼šçœŸæ­£ä¼Ÿå¤§çš„è®¾è®¡ä¸éœ€è¦è·Ÿéšæ½®æµï¼Œå› ä¸ºå®ƒæœ¬èº«å°±æ˜¯æ½®æµæ— æ³•è¶…è¶Šçš„æ ‡å‡†ã€‚æ¯ä¸€ä¸ªæ‹¿èµ·å°é‡‘äººçš„äººâ€”â€”ä»Žç¬¬ä¸€å±Šçš„ Emil Jannings åˆ°æœ€æ–°ä¸€å±Šçš„èŽ·å¥–è€…â€”â€”æ‰‹ä¸­æ¡ç€çš„æ˜¯åŒä¸€ä¸ªè®¾è®¡ã€‚è¿™ç§ç©¿è¶Šæ—¶é—´çš„ä¸€è‡´æ€§ï¼Œæœ¬èº«å°±æ˜¯æœ€ä¼˜é›…çš„è®¾è®¡å®£è¨€ã€‚',

    dateConnection_en: 'On January 11, 1927, the Academy of Motion Picture Arts and Sciences (AMPAS) was officially founded. Two years later, the Academy created the Oscar statuette â€” one of the most recognizable design objects in cinema history.',
    designerBio_en: `The Oscar statuette was designed by Cedric Gibbons â€” MGM's chief art director and the godfather of Hollywood production design.

Gibbons sketched the original concept on a napkin during an Academy dinner: a knight standing on a reel of film, holding a crusader's sword. Sculptor George Stanley then translated this sketch into three-dimensional form.

**Gibbons himself went on to win 11 Oscars** â€” no one understood the weight of that statuette better.`,
    story_en: `The Oscar statuette is **one of the most enduring brand identities in design history.**

The 1929 original design has remained virtually unchanged â€” 34 centimeters tall, 3.9 kilograms, an Art Deco knight figure. This design longevity is itself an achievement: in an industry that craves novelty every year, Oscar won eternity through **staying the same.**

The Art Deco aesthetic was no accident. The late 1920s were the peak of the Art Deco movement â€” geometrized human forms, streamlined silhouettes, clean and powerful shapes. Oscar perfectly captured that era's design spirit, yet was abstract enough to transcend its time.

**The evolution of its manufacture** reads like a material design history: originally bronze with gold plating, switched to plaster during WWII due to metal shortages (recipients could exchange them for metal versions after the war), and today cast in a tin-antimony-copper alloy electroplated with 24-karat gold. Each Oscar undergoes dozens of hand-polishing steps.

A fascinating detail: the film reel beneath Oscar's feet has five spokes, representing the Academy's five original branches â€” actors, directors, producers, technicians, and writers. This practice of **weaving symbolism into formal details** is the hallmark of excellent design.

Why "Oscar"? The origin remains debated. The most popular story is that Academy librarian Margaret Herrick saw the statuette and remarked, "He reminds me of my Uncle Oscar." True or not, the nickname is infinitely warmer than the official "Academy Award of Merit" â€” **great design always earns a great name.**`,
    legacy_en: 'â€¢ The most globally recognized trophy design, transcending the film industry itself\nâ€¢ The most enduring living fossil of Art Deco design in contemporary culture\nâ€¢ Defined the visual language of "awards ceremonies" â€” every award since has imitated it to some degree\nâ€¢ Proved the power of minimal form: a nearly century-old design that still feels modern',
    significance_en: 'The Oscar statuette is **the ultimate proof of design longevity.** In a world obsessed with the new, it has spent nearly a century proving that truly great design doesn\'t need to follow trends â€” because it is the standard that trends cannot surpass. Every person who lifts an Oscar â€” from the first recipient Emil Jannings to the latest winner â€” holds the same design in their hands. That consistency across time is itself the most elegant design statement.',
  },

  // 01-12: Red House
  {
    id: '43',
    date: '2026-01-12',
    imageUrl: '/the-daily-object/images/red-house-webb.jpg',
    fullImageUrl: '/the-daily-object/images/full/red-house-webb.jpg',
    title: 'Red House',
    title_en: 'Red House',
    subtitle: 'Philip Webb, 1860',
    subtitle_en: 'Philip Webb, 1860',
    category: 'architecture',
    designer: 'Philip Webb',
    year: '1860',

    dateConnection: 'Philip Webb äºŽ1831å¹´1æœˆ12æ—¥å‡ºç”Ÿåœ¨è‹±å›½ç‰›æ´¥ã€‚ä»–æ˜¯è‹±å›½å·¥è‰ºç¾Žæœ¯è¿åŠ¨æœ€é‡è¦çš„å»ºç­‘å¸ˆï¼Œè€Œ Red House æ˜¯ä»–æœ€è‘—åçš„ä½œå“â€”â€”ä¹Ÿæ˜¯æ•´ä¸ªè¿åŠ¨çš„å®£è¨€å»ºç­‘ã€‚',
    designerBio: `Philip Webbï¼ˆ1831â€“1915ï¼‰ï¼Œè‹±å›½å»ºç­‘å¸ˆï¼Œå·¥è‰ºç¾Žæœ¯è¿åŠ¨ï¼ˆArts and Crafts Movementï¼‰çš„å»ºç­‘æ ¸å¿ƒäººç‰©ã€‚

Webb åœ¨å»ºç­‘å¸ˆ G.E. Street çš„äº‹åŠ¡æ‰€é‡Œé‡åˆ°äº† William Morrisâ€”â€”è¿™æ®µå‹è°Šæ”¹å˜äº†è®¾è®¡å²ã€‚ä¸¤äººå…±åŒåå¯¹ç»´å¤šåˆ©äºšæ—¶ä»£å·¥ä¸šåŒ–å¤§ç”Ÿäº§å¯¹ç¾Žå­¦çš„æ‘§æ®‹ï¼Œä¸»å¼ **å›žå½’æ‰‹å·¥è‰ºã€è¯šå®žç”¨æã€å½¢å¼è¿½éšåŠŸèƒ½**ã€‚

Webb çš„å»ºç­‘å“²å­¦æžå…¶è¶…å‰ï¼šä»–æ‹’ç»å½“æ—¶æµè¡Œçš„åŽ†å²ä¸»ä¹‰é£Žæ ¼çš„çŸ«é¥°ï¼ŒåšæŒ**è®©å»ºç­‘è¯šå®žåœ°è¡¨è¾¾å®ƒçš„ç»“æž„å’Œææ–™**ã€‚è¿™ç§ç†å¿µæ¯”çŽ°ä»£ä¸»ä¹‰æ—©äº†åŠä¸ªå¤šä¸–çºªã€‚`,
    story: `1859å¹´ï¼ŒWilliam Morris ç»“å©šï¼Œä»–éœ€è¦ä¸€æ ‹æˆ¿å­ã€‚ä»–æ‰¾åˆ°äº†å¥½å‹ Philip Webbï¼Œä¸¤äººä¸€èµ·è®¾è®¡äº† Red Houseâ€”â€”ä¸€æ ‹çº¢ç –ç Œç­‘çš„ä¹¡é—´ä½å®…ï¼Œä½äºŽä¼¦æ•¦ä¸œå—çš„ Bexleyheathã€‚

**Red House æ˜¯å»ºç­‘å²ä¸Šçš„ä¸€æ¬¡å®£è¨€ã€‚**

åœ¨ç»´å¤šåˆ©äºšæ—¶ä»£ï¼Œä½“é¢çš„æˆ¿å­åº”è¯¥æ˜¯ä»€ä¹ˆæ ·ï¼Ÿå¤å…¸æŸ±å»Šã€å¯¹ç§°ç«‹é¢ã€ç²‰åˆ·æˆç™½è‰²æˆ–ç°è‰²çš„ç°æ³¥å¤–å¢™ã€‚Red House æ‹’ç»äº†è¿™ä¸€åˆ‡ã€‚

Webb ç”¨**è£¸éœ²çš„çº¢ç –**ä»£æ›¿ç°æ³¥â€”â€”ä¸åŠ ä¿®é¥°ï¼Œè®©ææ–™ä»¥æœ¬æ¥é¢ç›®ç¤ºäººã€‚è¿™åœ¨å½“æ—¶æ˜¯æƒŠä¸–éª‡ä¿—çš„ï¼šçº¢ç –è¢«è§†ä¸º"ç©·äººçš„ææ–™"ï¼Œä¸é…å‡ºçŽ°åœ¨ç»…å£«çš„å®…é‚¸ä¸Šã€‚

å»ºç­‘çš„å¹³é¢å¸ƒå±€ä¸æ˜¯å¯¹ç§°çš„â€”â€”å®ƒ**è¿½éšåŠŸèƒ½**ã€‚æˆ¿é—´æ ¹æ®å®žé™…éœ€è¦æ¥å®‰æŽ’ï¼Œèµ°å»Šæ ¹æ®åŠ¨çº¿æ¥å¼¯æ›²ï¼Œçª—æˆ·æ ¹æ®é‡‡å…‰éœ€æ±‚æ¥å¼€è®¾ã€‚è¿™ç§"å½¢å¼è¿½éšåŠŸèƒ½"çš„ç†å¿µï¼Œæ¯” Louis Sullivan çš„åè¨€æ—©äº†è¿‘40å¹´ã€‚

å®¤å†…è®¾è®¡åŒæ ·é©å‘½æ€§ã€‚Morris å’Œä»–çš„æœ‹å‹ä»¬ï¼ˆåŒ…æ‹¬ Edward Burne-Jones å’Œ Dante Gabriel Rossettiï¼‰äº²æ‰‹ç»˜åˆ¶å£ç”»ã€è®¾è®¡å®¶å…·ã€ç¼–ç»‡æŒ‚æ¯¯ã€‚**æ¯ä¸€ä»¶ç‰©å“éƒ½æ˜¯æ‰‹å·¥åˆ¶ä½œçš„**ï¼Œæ¯ä¸€é¢å¢™éƒ½è®²è¿°ä¸€ä¸ªæ•…äº‹ã€‚

æ­£æ˜¯åœ¨ Red House çš„å»ºé€ è¿‡ç¨‹ä¸­ï¼ŒMorris å‘çŽ°å¸‚é¢ä¸Šä¹°ä¸åˆ°ä»–æ»¡æ„çš„å®¶å…·å’Œè£…é¥°å“â€”â€”è¿™ç›´æŽ¥ä¿ƒä½¿ä»–åˆ›åŠžäº† Morris, Marshall, Faulkner & Co.ï¼ˆåŽæ¥çš„ Morris & Co.ï¼‰ï¼Œå¼€å¯äº†å·¥è‰ºç¾Žæœ¯è¿åŠ¨çš„å•†ä¸šå®žè·µã€‚

**ä¸€æ ‹æˆ¿å­å‚¬ç”Ÿäº†ä¸€åœºè¿åŠ¨ã€‚** ä»Ž Red House åˆ° Morris & Co.ï¼Œä»Žå·¥è‰ºç¾Žæœ¯è¿åŠ¨åˆ°åŒ…è±ªæ–¯ï¼Œä¸€æ¡æ¸…æ™°çš„è®¾è®¡æ€æƒ³è°±ç³»å»¶ä¼¸è‡³ä»Šã€‚`,
    legacy: 'â€¢ å·¥è‰ºç¾Žæœ¯è¿åŠ¨çš„èµ·æºå»ºç­‘ï¼Œç›´æŽ¥å‚¬ç”Ÿäº† Morris & Co. çš„æˆç«‹\nâ€¢ "å½¢å¼è¿½éšåŠŸèƒ½"çš„æ—©æœŸå®žè·µè€…â€”â€”æ¯” Sullivan å’ŒçŽ°ä»£ä¸»ä¹‰æ—©äº†å‡ åå¹´\nâ€¢ è¯šå®žç”¨æçš„å…ˆé©±ï¼šè£¸éœ²çº¢ç –ã€ä¸åŠ ä¿®é¥°ï¼Œå½±å“äº†åŽæ¥çš„ Brutalism å’Œå½“ä»£å»ºç­‘\nâ€¢ æ€»ä½“è‰ºæœ¯å“ï¼ˆGesamtkunstwerkï¼‰ç†å¿µçš„å»ºç­‘å®žè·µâ€”â€”å»ºç­‘ã€å®¶å…·ã€è£…é¥°ã€æ™¯è§‚æµ‘ç„¶ä¸€ä½“\nâ€¢ ä»Ž Red House åˆ° Bauhaus çš„æ€æƒ³è°±ç³»ï¼šæ‰‹å·¥è‰ºç²¾ç¥žã€æ•´åˆè®¾è®¡ã€åå·¥ä¸šåŒ–ç²—åˆ¶æ»¥é€ ',
    significance: 'Red House æ˜¯**çŽ°ä»£è®¾è®¡æ€æƒ³çš„æºå¤´ä¹‹ä¸€**ã€‚å®ƒè¯æ˜Žäº†å»ºç­‘å¯ä»¥è¯šå®žã€å¯ä»¥ä¸çŸ«é¥°ã€å¯ä»¥è®©åŠŸèƒ½è€Œéžé£Žæ ¼æ¥å†³å®šå½¢å¼ã€‚ä»Ž Red House å‡ºå‘ï¼Œç»ç”±å·¥è‰ºç¾Žæœ¯è¿åŠ¨ã€æ–°è‰ºæœ¯è¿åŠ¨ï¼Œåˆ°åŒ…è±ªæ–¯å’ŒçŽ°ä»£ä¸»ä¹‰â€”â€”è¿™æ¡çº¿ç´¢æ¸…æ™°å¯å¾ªã€‚æ¯ä¸€ä¸ªä¸»å¼ "å¥½è®¾è®¡åº”è¯¥è¯šå®ž"çš„è®¾è®¡å¸ˆï¼Œéƒ½åœ¨å‘¼åº”160å¤šå¹´å‰ Webb å’Œ Morris åœ¨è¿™æ ‹çº¢ç –æˆ¿å­é‡Œåšå‡ºçš„é€‰æ‹©ã€‚',

    dateConnection_en: 'Philip Webb was born on January 12, 1831 in Oxford, England. He was the most important architect of the British Arts and Crafts Movement, and Red House is his most celebrated work â€” the manifesto building of the entire movement.',
    designerBio_en: `Philip Webb (1831â€“1915), British architect and the architectural cornerstone of the Arts and Crafts Movement.

Webb met William Morris at the office of architect G.E. Street â€” a friendship that changed design history. Together they opposed the Victorian industrial mass-production's destruction of aesthetics, advocating for a **return to craftsmanship, honest materials, and form following function.**

Webb's architectural philosophy was remarkably ahead of its time: he rejected the popular historicist style's affectations, insisting that **a building should honestly express its structure and materials.** This conviction preceded Modernism by more than half a century.`,
    story_en: `In 1859, William Morris married and needed a house. He turned to his friend Philip Webb, and together they designed Red House â€” a red-brick country home in Bexleyheath, southeast London.

**Red House was an architectural manifesto.**

In Victorian England, what should a respectable house look like? Classical porticos, symmetrical facades, walls rendered in white or grey stucco. Red House rejected all of it.

Webb used **exposed red brick** instead of stucco â€” unadorned, letting the material show its true face. This was shocking: red brick was considered a "poor man's material," unfit for a gentleman's residence.

The floor plan was asymmetrical â€” it **followed function.** Rooms were arranged according to actual needs, corridors curved to follow circulation patterns, windows were placed for optimal lighting. This "form follows function" approach predated Louis Sullivan's famous dictum by nearly 40 years.

The interior was equally revolutionary. Morris and his friends â€” including Edward Burne-Jones and Dante Gabriel Rossetti â€” hand-painted murals, designed furniture, and wove tapestries. **Every object was handmade,** every wall told a story.

It was during Red House's construction that Morris discovered he couldn't buy furniture and decorations that met his standards â€” directly prompting him to found Morris, Marshall, Faulkner & Co. (later Morris & Co.), launching the commercial practice of the Arts and Crafts Movement.

**One house gave birth to a movement.** From Red House to Morris & Co., from the Arts and Crafts Movement to the Bauhaus, a clear genealogy of design thought extends to the present day.`,
    legacy_en: 'â€¢ The origin building of the Arts and Crafts Movement, directly catalyzing the founding of Morris & Co.\nâ€¢ An early practitioner of "form follows function" â€” decades before Sullivan and Modernism\nâ€¢ Pioneer of material honesty: exposed red brick, no ornamentation, influencing later Brutalism and contemporary architecture\nâ€¢ Architectural practice of the Gesamtkunstwerk concept â€” architecture, furniture, decoration, and landscape as a unified whole\nâ€¢ The intellectual lineage from Red House to the Bauhaus: craft spirit, integrated design, resistance to industrial mediocrity',
    significance_en: 'Red House is **one of the wellsprings of modern design thinking.** It proved that architecture could be honest, unaffected, and let function rather than style dictate form. From Red House through the Arts and Crafts Movement, Art Nouveau, to the Bauhaus and Modernism â€” the thread is clear. Every designer who argues that "good design should be honest" echoes the choice Webb and Morris made in this red-brick house over 160 years ago.',
  },

  // 01-13: National Geographic Magazine
  {
    id: '13',
    date: '2026-01-13',
    imageUrl: '/the-daily-object/images/national-geographic-magazine.jpg',
    fullImageUrl: '/the-daily-object/images/full/national-geographic-magazine.jpg',
    title: 'ã€Šå›½å®¶åœ°ç†ã€‹æ‚å¿—',
    title_en: 'National Geographic Magazine',
    subtitle: 'National Geographic Society, 1888',
    subtitle_en: 'National Geographic Society, 1888',
    category: 'graphic',
    designer: 'National Geographic Society',
    year: '1888',

    dateConnection: '1888å¹´1æœˆ13æ—¥ï¼Œå›½å®¶åœ°ç†å­¦ä¼šåœ¨åŽç››é¡¿ç‰¹åŒºæˆç«‹ï¼Œ33ä½åˆ›å§‹äººé½èšå®‡å®™ä¿±ä¹éƒ¨ï¼Œç«‹ä¸‹"å¢žè¿›å’Œä¼ æ’­åœ°ç†çŸ¥è¯†"çš„ä½¿å‘½ã€‚ä¹ä¸ªæœˆåŽï¼Œç¬¬ä¸€æœŸã€Šå›½å®¶åœ°ç†ã€‹æ‚å¿—é¢ä¸–ã€‚',
    designerBio: `å›½å®¶åœ°ç†å­¦ä¼šç”±æŽ¢é™©å®¶ã€åœ°ç†å­¦å®¶ã€å†›äº‹æˆ˜ç•¥å®¶ç­‰33äººè”åˆåˆ›ç«‹ï¼Œé¦–ä»»ä¼šé•¿æ˜¯ç”µè¯å‘æ˜Žè€…äºšåŽ†å±±å¤§Â·æ ¼é›·åŽ„å§†Â·è´å°”çš„å²³çˆ¶åŠ è¿ªçº³Â·æ ¼æž—Â·å“ˆä¼¯å¾·ã€‚è´å°”æœ¬äººåŽæ¥æŽ¥ä»»ä¼šé•¿ï¼Œå°†æ‚å¿—ä»Žå¹²æ¶©çš„å­¦æœ¯åˆŠç‰©è½¬åž‹ä¸ºé¢å‘å¤§ä¼—çš„è§†è§‰è¯»ç‰©â€”â€”è¿™ä¸€å†³å®šå½»åº•æ”¹å˜äº†æ‚å¿—çš„å‘½è¿ã€‚

1905å¹´ï¼Œç¼–è¾‘å‰å°”ä¼¯ç‰¹Â·HÂ·æ ¼ç½—å¤«çº³å¤§èƒ†åˆŠç™»äº†ä¸€ç»„è¥¿è—æ‹‰è¨çš„å…¨é¡µç…§ç‰‡ï¼Œè‘£äº‹ä¼šè®¤ä¸ºè¿™æ˜¯"ä¸æˆä½“ç»Ÿ"çš„åšæ³•ã€‚ä½†è¯»è€…çš„çƒ­çƒˆåå“è¯æ˜Žï¼Œ**ç…§ç‰‡æ¯”æ–‡å­—æ›´èƒ½æ¿€å‘äººä»¬å¯¹ä¸–ç•Œçš„å¥½å¥‡å¿ƒ**ã€‚è¿™ä¸€ç†å¿µæˆä¸ºå›½å®¶åœ°ç†çš„æ ¸å¿ƒè®¾è®¡å“²å­¦ã€‚`,
    story: `ã€Šå›½å®¶åœ°ç†ã€‹æœ€æ ‡å¿—æ€§çš„è®¾è®¡å…ƒç´ æ˜¯é‚£é“**é»„è‰²è¾¹æ¡†**â€”â€”1910å¹´é¦–æ¬¡å‡ºçŽ°åœ¨å°é¢ä¸Šï¼Œä»Žæ­¤æˆä¸ºå…¨çƒæœ€å…·è¾¨è¯†åº¦çš„æ‚å¿—è§†è§‰ç¬¦å·ä¹‹ä¸€ã€‚è¿™æŠ¹é²œæ˜Žçš„é»„è‰²ç®€æ´æœ‰åŠ›ï¼Œåœ¨æŠ¥æ‘Šä¸Šä¸€çœ¼ä¾¿èƒ½è®¤å‡ºï¼Œè¢«è¯»è€…äº²åˆ‡åœ°ç§°ä¸º"é‚£æœ¬é»„æ¡†æ‚å¿—"ã€‚

æ‚å¿—çš„è®¾è®¡é©å‘½ä¸ä»…åœ¨äºŽå°é¢ã€‚å›½å®¶åœ°ç†çŽ‡å…ˆåœ¨å°åˆ·åª’ä½“ä¸­å¤§è§„æ¨¡ä½¿ç”¨**å½©è‰²æ‘„å½±**ï¼š1914å¹´åˆŠç™»äº†é¦–æ‰¹å¤©ç„¶å½©è‰²ç…§ç‰‡ï¼Œ1930å¹´ä»£å¼€å§‹ç³»ç»Ÿä½¿ç”¨æŸ¯è¾¾å½©è‰²èƒ¶ç‰‡ã€‚æ¯ä¸€å¼ ç…§ç‰‡éƒ½ç»è¿‡ä¸¥è‹›çš„ç­›é€‰å’Œç¼–æŽ’â€”â€”ç¼–è¾‘éƒ¨å¸¸å¸¸ä»Žæ•°ä¸‡å¼ åº•ç‰‡ä¸­åªæŒ‘é€‰å‡ åå¼ åˆŠç”¨ã€‚

**åœ°å›¾è®¾è®¡**æ˜¯å¦ä¸€ä¸ªè¢«ä½Žä¼°çš„è´¡çŒ®ã€‚å›½å®¶åœ°ç†åˆ¶å›¾éƒ¨é—¨åˆ›é€ äº†å¤§é‡ç²¾ç¾Žçš„åœ°å›¾å¢žåˆŠï¼Œå…¶åˆ¶å›¾é£Žæ ¼â€”â€”æ¸…æ™°çš„å±‚æ¬¡ã€ä¼˜é›…çš„é…è‰²ã€ç²¾ç¡®çš„æ ‡æ³¨â€”â€”å½±å“äº†æ•´ä¸ªçŽ°ä»£åˆ¶å›¾å­¦çš„å®¡ç¾Žæ ‡å‡†ã€‚1922å¹´å‘å¸ƒçš„äºšæ´²åœ°å›¾ç”šè‡³è¢«ç™½å®«ç”¨ä½œå‚è€ƒèµ„æ–™ã€‚

ä»Žç‰ˆå¼è®¾è®¡è§’åº¦çœ‹ï¼Œå›½å®¶åœ°ç†ç¡®ç«‹äº†"æ²‰æµ¸å¼å›¾æ–‡å™äº‹"çš„èŒƒå¼ï¼šå…¨é¡µè·¨ç‰ˆç…§ç‰‡ã€ç²¾å¿ƒæŽ’å¸ƒçš„å›¾ç‰‡åºåˆ—ã€ç…§ç‰‡ä¸Žæ–‡å­—çš„èŠ‚å¥æ„Ÿâ€”â€”è¿™å¥—è§†è§‰è¯­è¨€åŽæ¥è¢«æ— æ•°æ‚å¿—æ•ˆä»¿ï¼Œæˆä¸ºçŽ°ä»£æ‚å¿—ç¼–è¾‘è®¾è®¡çš„åŸºçŸ³ã€‚`,
    legacy: 'â€¢ é»„è‰²è¾¹æ¡†ï¼šå…¨çƒæœ€å…·è¾¨è¯†åº¦çš„æ‚å¿—å“ç‰Œæ ‡è¯†ä¹‹ä¸€ï¼Œ100å¤šå¹´æœªæ›¾æ”¹å˜\nâ€¢ å¼€åˆ›äº†"å½±åƒé©±åŠ¨å™äº‹"çš„æ‚å¿—è®¾è®¡èŒƒå¼ï¼Œå½±å“äº† LIFEã€Timeã€Monocle ç­‰åŽæ¥è€…\nâ€¢ æŽ¨åŠ¨äº†å½©è‰²æ‘„å½±å’Œæ‘„å½±æŠ¥é“åœ¨ä¸»æµåª’ä½“ä¸­çš„æ™®åŠ\nâ€¢ åˆ¶å›¾è®¾è®¡æ ‡å‡†è‡³ä»Šå½±å“ç€ Google Maps ç­‰æ•°å­—åœ°å›¾çš„è§†è§‰è¯­è¨€\nâ€¢ ç´¯è®¡å‘è¡Œè¶…è¿‡140ä¸ªå›½å®¶ï¼Œ40ç§è¯­è¨€ï¼Œå°é¢ç…§ç‰‡æˆä¸ºæ‘„å½±å²çš„é‡è¦æ¡£æ¡ˆ',
    significance: 'ã€Šå›½å®¶åœ°ç†ã€‹ä¸ä»…æ˜¯ä¸€æœ¬æ‚å¿—ï¼Œæ›´æ˜¯**è§†è§‰ä¼ æ’­è®¾è®¡çš„é‡Œç¨‹ç¢‘**ã€‚å®ƒè¯æ˜Žäº†ä¸€ä¸ªæ·±åˆ»çš„è®¾è®¡çœŸç†ï¼šå½“ä¿¡æ¯è®¾è®¡ï¼ˆæŽ’ç‰ˆã€æ‘„å½±ã€åœ°å›¾ï¼‰ä¸Žäººç±»å¤©ç”Ÿçš„å¥½å¥‡å¿ƒç»“åˆæ—¶ï¼ŒçŸ¥è¯†å¯ä»¥åƒæ•…äº‹ä¸€æ ·ä¼ æ’­ã€‚é‚£é“é»„è‰²è¾¹æ¡†æ˜¯æžç®€å“ç‰Œè®¾è®¡çš„å…¸èŒƒâ€”â€”ä¸€ä¸ªè‰²å—ï¼Œä¸€ç™¾å¹´ä¸å˜ï¼Œå…¨ä¸–ç•Œéƒ½è®¤è¯†ã€‚',

    dateConnection_en: 'On January 13, 1888, the National Geographic Society was founded in Washington, D.C. Thirty-three explorers, geographers, and scholars gathered at the Cosmos Club with a mission to "increase and diffuse geographic knowledge." Nine months later, the first issue of National Geographic Magazine was published.',
    designerBio_en: `The National Geographic Society was co-founded by 33 individuals including explorers, geographers, and military strategists. Its first president was Gardiner Greene Hubbard, father-in-law of telephone inventor Alexander Graham Bell. Bell himself later became president and transformed the magazine from a dry academic journal into a visually driven publication for the general public â€” a decision that forever changed its destiny.

In 1905, editor Gilbert H. Grosvenor boldly published a series of full-page photographs of Lhasa, Tibet. The board considered this "undignified," but the overwhelming reader response proved that **photographs could inspire curiosity about the world far more powerfully than words alone.** This insight became National Geographic's core design philosophy.`,
    story_en: `National Geographic's most iconic design element is its **yellow border** â€” first appearing on the cover in 1910, it became one of the most recognizable visual identities in magazine history. Bold and minimal, it made the magazine instantly identifiable on any newsstand, earning it the affectionate nickname "that yellow-bordered magazine."

The design revolution went beyond the cover. National Geographic pioneered large-scale use of **color photography** in print media: it published its first natural-color photographs in 1914 and began systematic use of Kodak color film in the 1930s. Every image underwent rigorous selection â€” editors routinely chose just dozens of frames from tens of thousands of negatives.

**Cartographic design** is another underappreciated contribution. National Geographic's cartography department produced exquisite map supplements whose style â€” clear hierarchy, elegant color palettes, precise labeling â€” influenced the aesthetic standards of modern cartography. Their 1922 map of Asia was even used as a reference by the White House.

From a layout perspective, National Geographic established the paradigm of "immersive visual storytelling": full-bleed photographs, carefully sequenced image narratives, rhythmic interplay between image and text â€” a visual language later emulated by countless magazines and now foundational to modern editorial design.`,
    legacy_en: 'â€¢ The yellow border: one of the world\'s most recognizable magazine brand identities, unchanged for over a century\nâ€¢ Pioneered "image-driven storytelling" in magazine design, influencing LIFE, Time, Monocle, and many others\nâ€¢ Accelerated the adoption of color photography and photojournalism in mainstream media\nâ€¢ Cartographic design standards that continue to influence digital maps like Google Maps\nâ€¢ Published in over 140 countries and 40 languages; its cover photographs form an important archive in the history of photography',
    significance_en: 'National Geographic is not just a magazine â€” it is **a milestone in visual communication design.** It proved a profound design truth: when information design (typography, photography, cartography) meets innate human curiosity, knowledge can spread like a story. That yellow border is a masterclass in minimal brand design â€” one color, one century, universally recognized.',
  },

  // 01-14: The Cradle by Berthe Morisot
  {
    id: '14',
    date: '2026-01-14',
    imageUrl: '/the-daily-object/images/the-cradle-morisot.jpg',
    fullImageUrl: '/the-daily-object/images/full/the-cradle-morisot.jpg',
    title: 'æ‘‡ç¯®',
    title_en: 'The Cradle',
    subtitle: 'Berthe Morisot, 1872',
    subtitle_en: 'Berthe Morisot, 1872',
    category: 'art',
    designer: 'Berthe Morisot',
    year: '1872',

    dateConnection: '1841å¹´1æœˆ14æ—¥ï¼Œè´å°”ç‰¹Â·èŽ«é‡Œç´¢å‡ºç”ŸäºŽæ³•å›½å¸ƒå°”æ—¥ã€‚å¥¹æ˜¯å°è±¡æ´¾è¿åŠ¨çš„æ ¸å¿ƒæˆå‘˜ä¹‹ä¸€ï¼Œä¹Ÿæ˜¯19ä¸–çºªæœ€é‡è¦çš„å¥³æ€§ç”»å®¶â€”â€”åœ¨ä¸€ä¸ªå¥³æ€§ç”šè‡³ä¸è¢«å…è®¸è¿›å…¥ç¾Žæœ¯å­¦é™¢çš„æ—¶ä»£ã€‚',
    designerBio: `è´å°”ç‰¹Â·èŽ«é‡Œç´¢å‡ºèº«äºŽä¸€ä¸ªå¼€æ˜Žçš„æ³•å›½ä¸­äº§å®¶åº­ã€‚å¥¹çš„çˆ¶äº²æ˜¯çœé•¿ï¼Œæ¯äº²æ˜¯å¼—æ‹‰æˆˆçº³å°”çš„åŽè£”ã€‚èŽ«é‡Œç´¢å’Œå§å§ä»Žå°æŽ¥å—ç»˜ç”»æ•™è‚²ï¼Œä½†å¥¹å¾ˆå¿«è¶…è¶Šäº†"é—ºç§€æ¶ˆé£"çš„èŒƒç•´ï¼Œæˆä¸ºä¸€ä½çœŸæ­£çš„èŒä¸šè‰ºæœ¯å®¶ã€‚

èŽ«é‡Œç´¢å¸ˆä»ŽæŸ¯ç½—ï¼ŒåŽä¸Žé©¬å¥ˆå®¶æ—ç»“ç¼˜â€”â€”å¥¹æ—¢æ˜¯é©¬å¥ˆæœ€é’Ÿçˆ±çš„æ¨¡ç‰¹ï¼Œä¹Ÿå«ç»™äº†é©¬å¥ˆçš„å¼Ÿå¼Ÿæ¬§ä»ã€‚ä½†å¥¹ä»Žä¸æ˜¯ä»»ä½•äººçš„é™„å±žã€‚åœ¨1874å¹´ç¬¬ä¸€å±Šå°è±¡æ´¾ç”»å±•ä¸Šï¼ŒèŽ«é‡Œç´¢æ˜¯å”¯ä¸€å—é‚€å‚å±•çš„å¥³æ€§ç”»å®¶ï¼Œæ­¤åŽå¥¹å‚åŠ äº†é™¤ä¸€å±Šä»¥å¤–çš„æ‰€æœ‰å°è±¡æ´¾å±•è§ˆã€‚

å¥¹çš„ç»˜ç”»é£Žæ ¼ä»¥**æµåŠ¨çš„ç¬”è§¦å’Œé€æ˜Žçš„å…‰æ„Ÿ**è‘—ç§°ã€‚è¯„è®ºå®¶å¸¸å¸¸æƒŠè®¶äºŽå¥¹ä½œå“ä¸­"æœªå®Œæˆ"çš„è‡ªç”±æ„Ÿâ€”â€”é‚£äº›çœ‹ä¼¼éšæ„çš„ç¬”è§¦å®žé™…ä¸Šç»è¿‡æ·±æ€ç†Ÿè™‘ï¼Œåˆ›é€ å‡ºä¸€ç§ä»‹äºŽå†™å®žä¸ŽæŠ½è±¡ä¹‹é—´çš„è¯—æ„ç©ºé—´ã€‚`,
    story: `ã€Šæ‘‡ç¯®ã€‹åˆ›ä½œäºŽ1872å¹´ï¼Œç”»ä¸­äººç‰©æ˜¯èŽ«é‡Œç´¢çš„å§å§è‰¾å¾·çŽ›ï¼Œå¥¹æ­£é€è¿‡è–„çº±å¸·å¹”æ³¨è§†ç€æ‘‡ç¯®ä¸­æ²‰ç¡çš„å©´å„¿ã€‚è¿™å¹…ç”»æ˜¯**è¥¿æ–¹ç¾Žæœ¯å²ä¸Šç¬¬ä¸€å¹…ä»¥æ¯æ€§ä¸ºä¸»é¢˜çš„å°è±¡æ´¾ä½œå“**ï¼Œä¹Ÿæ˜¯èŽ«é‡Œç´¢æœ€å¹¿ä¸ºäººçŸ¥çš„ä»£è¡¨ä½œã€‚

ç”»é¢çš„æž„å›¾ç²¾å¦™è€Œäº²å¯†ï¼šæ¯äº²çš„èº«ä½“å½¢æˆä¸€ä¸ªä¿æŠ¤æ€§çš„å¼§çº¿ï¼Œå³æ‰‹è½»æ‹‰å¸·å¹”ï¼Œå·¦æ‰‹æ”¯æ’‘ç€è„¸é¢Šã€‚é‚£å±‚åŠé€æ˜Žçš„ç™½è‰²è–„çº±â€”â€”ç”¨æžå…¶è½»ç›ˆçš„ç¬”è§¦ç”»æˆâ€”â€”åŒæ—¶æ˜¯ç‰©ç†å±éšœå’Œæƒ…æ„Ÿçº½å¸¦ï¼Œå°†æ¯äº²ä¸Žå©´å„¿æ—¢åˆ†éš”åˆè¿žæŽ¥ã€‚

èŽ«é‡Œç´¢åœ¨è‰²å½©ä¸Šå±•çŽ°äº†æƒŠäººçš„å…‹åˆ¶åŠ›ã€‚æ•´å¹…ç”»ä»¥**é»‘ã€ç™½ã€ç°è“**ä¸ºä¸»è°ƒï¼Œæ¯äº²æ·±è‰²çš„è¡£è£™ä¸Žå©´å„¿çš„ç™½è‰²è¥è¤“å½¢æˆå¯¹æ¯”ï¼Œå¸·å¹”åˆ™ç”¨è¿‘ä¹Žæ°´å½©èˆ¬çš„é€æ˜Žç¬”è§¦å¤„ç†ï¼Œè®©å…‰çº¿ç©¿é€ç»‡ç‰©ã€‚è¿™ç§"å°‘å³æ˜¯å¤š"çš„è‰²å½©ç­–ç•¥ï¼Œè®©ç”»é¢æ•£å‘å‡ºä¸€ç§å®‰é™çš„åŠ›é‡ã€‚

ã€Šæ‘‡ç¯®ã€‹åœ¨1874å¹´é¦–å±Šå°è±¡æ´¾å±•è§ˆä¸Šå±•å‡ºæ—¶ï¼Œå‡ ä¹Žæ— äººé—®æ´¥ã€‚å½“æ—¶çš„è¯„è®ºç•Œå¯¹æ•´ä¸ªå°è±¡æ´¾è¿åŠ¨å……æ»¡æ•Œæ„ï¼Œè€Œä¸€å¹…æç»˜"æ—¥å¸¸å®¶åº­åœºæ™¯"çš„ç”»ä½œæ›´è¢«è§†ä¸ºä¸ç™»å¤§é›…ä¹‹å ‚ã€‚ä½†æ­£æ˜¯è¿™ç§å¯¹ç§å¯†æ—¥å¸¸çš„å…³æ³¨ï¼Œè®©èŽ«é‡Œç´¢çš„ä½œå“åœ¨ä¸€ä¸ªå¤šä¸–çºªåŽèŽ·å¾—äº†é‡æ–°è¯„ä»·ã€‚`,
    legacy: 'â€¢ è¥¿æ–¹ç¾Žæœ¯å²ä¸Šé¦–å¹…ä»¥æ¯æ€§ä¸ºä¸»é¢˜çš„å°è±¡æ´¾ä½œå“\nâ€¢ å°†"ç§å¯†ç©ºé—´"å’Œ"æ—¥å¸¸ç”Ÿæ´»"ç¡®ç«‹ä¸ºä¸¥è‚ƒçš„è‰ºæœ¯ä¸»é¢˜\nâ€¢ èŽ«é‡Œç´¢çš„ç¬”è§¦æŠ€æ³•å½±å“äº†åŽæ¥çš„çº³æ¯”æ´¾å’Œé‡Žå…½æ´¾ç”»å®¶\nâ€¢ çŽ°è—äºŽå·´é»Žå¥¥èµ›åšç‰©é¦†ï¼Œæ˜¯è¯¥é¦†æœ€å—æ¬¢è¿Žçš„è—å“ä¹‹ä¸€\nâ€¢ ä¸ºå¥³æ€§è‰ºæœ¯å®¶åœ¨ä¸“ä¸šè‰ºæœ¯åœˆçš„åœ°ä½å¼€è¾Ÿäº†é“è·¯',
    significance: 'ã€Šæ‘‡ç¯®ã€‹çš„ä¼Ÿå¤§ä¹‹å¤„åœ¨äºŽå®ƒ**å°†äº²å¯†æ„Ÿè½¬åŒ–ä¸ºè‰ºæœ¯åŠ›é‡**ã€‚åœ¨ä¸€ä¸ªå´‡å°šå®å¤§åŽ†å²å™äº‹çš„æ—¶ä»£ï¼ŒèŽ«é‡Œç´¢é€‰æ‹©ç”»ä¸€ä½æ¯äº²çœ‹ç€å­©å­å…¥ç¡â€”â€”è¿™ä¸ªæœ€å¹³å‡¡çš„çž¬é—´ã€‚å¥¹ç”¨å°è±¡æ´¾çš„å…‰å½±è¯­è¨€èµ‹äºˆäº†è¿™ä¸ªæ—¥å¸¸åœºæ™¯ä»¥æ°¸æ’çš„è¯—æ„ï¼Œè¯æ˜Žäº†**äº²å¯†ä¸Žå®å¤§ã€ç§å¯†ä¸Žå…¬å…±ä¹‹é—´ä¸å­˜åœ¨é«˜ä½Žä¹‹åˆ†**ã€‚',

    dateConnection_en: 'On January 14, 1841, Berthe Morisot was born in Bourges, France. She became one of the core members of the Impressionist movement and the most important female painter of the 19th century â€” in an era when women were not even permitted to enroll in fine art academies.',
    designerBio_en: `Berthe Morisot was born into an enlightened French bourgeois family. Her father was a prefect, and her mother was a descendant of Fragonard. Morisot and her sister received painting lessons from childhood, but she quickly transcended the realm of "genteel pastime" to become a truly professional artist.

Morisot studied under Corot and later became connected to the Manet family â€” she was Ã‰douard Manet's favorite model and married his brother EugÃ¨ne. Yet she was never anyone's appendage. At the first Impressionist exhibition in 1874, Morisot was the only female painter invited, and she participated in all but one subsequent Impressionist show.

Her painting style is renowned for its **fluid brushwork and luminous transparency.** Critics were often astonished by the "unfinished" freedom in her work â€” those seemingly spontaneous strokes were in fact deeply considered, creating a poetic space between realism and abstraction.`,
    story_en: `*The Cradle* was painted in 1872. It depicts Morisot's sister Edma gazing through a sheer curtain at her sleeping infant in a cradle. This painting is **the first Impressionist work to take motherhood as its subject** in Western art history, and remains Morisot's best-known masterpiece.

The composition is exquisitely intimate: the mother's body forms a protective arc, her right hand gently drawing back the veil, her left hand cradling her cheek. The translucent white curtain â€” rendered in feather-light brushstrokes â€” serves simultaneously as physical barrier and emotional bond, both separating and connecting mother and child.

Morisot demonstrated remarkable restraint in her palette. The entire painting is built on **blacks, whites, and blue-grays**. The mother's dark dress contrasts with the baby's white swaddling, while the curtain is handled with near-watercolor transparency, allowing light to penetrate the fabric. This "less is more" color strategy gives the painting a quiet, profound power.

When *The Cradle* was exhibited at the first Impressionist exhibition in 1874, it was largely ignored. Critics were hostile to the entire Impressionist movement, and a painting depicting a "mundane domestic scene" was considered beneath serious art. Yet it was precisely this attention to intimate everyday life that led to Morisot's radical reappraisal more than a century later.`,
    legacy_en: 'â€¢ The first Impressionist painting to take motherhood as its subject in Western art\nâ€¢ Established "intimate space" and "everyday life" as legitimate subjects for serious art\nâ€¢ Morisot\'s brushwork technique influenced the Nabis and Fauvist painters\nâ€¢ Now in the MusÃ©e d\'Orsay, Paris â€” one of the museum\'s most beloved works\nâ€¢ Paved the way for women artists in professional art circles',
    significance_en: 'The greatness of *The Cradle* lies in its **transformation of intimacy into artistic power.** In an era that worshipped grand historical narratives, Morisot chose to paint a mother watching her child fall asleep â€” the most ordinary of moments. With the Impressionist language of light and shadow, she gave this everyday scene an eternal poetry, proving that **there is no hierarchy between the intimate and the monumental, the private and the public.**',
  },

  // 01-15: Wikipedia
  {
    id: '15',
    date: '2026-01-15',
    imageUrl: '/the-daily-object/images/wikipedia-logo.png',
    fullImageUrl: '/the-daily-object/images/full/wikipedia-logo.png',
    title: 'ç»´åŸºç™¾ç§‘',
    title_en: 'Wikipedia',
    subtitle: 'Jimmy Wales & Larry Sanger, 2001',
    subtitle_en: 'Jimmy Wales & Larry Sanger, 2001',
    category: 'software',
    designer: 'Jimmy Wales & Larry Sanger',
    year: '2001',

    dateConnection: '2001å¹´1æœˆ15æ—¥ï¼Œç»´åŸºç™¾ç§‘æ­£å¼ä¸Šçº¿ã€‚è¿™ä¸ªç”±ç”¨æˆ·åä½œç¼–è¾‘çš„å…è´¹ç™¾ç§‘å…¨ä¹¦ï¼Œå¦‚ä»Šæ‹¥æœ‰è¶…è¿‡6000ä¸‡ç¯‡æ–‡ç« ï¼Œè¦†ç›–300å¤šç§è¯­è¨€ï¼Œæ˜¯äººç±»åŽ†å²ä¸Šæœ€å¤§çš„çŸ¥è¯†æ±‡ç¼–å·¥ç¨‹ã€‚',
    designerBio: `ç»´åŸºç™¾ç§‘çš„è¯žç”ŸæºäºŽä¸€ä¸ªå¤±è´¥çš„å®žéªŒã€‚å‰ç±³Â·å¨å°”å£«æœ€åˆåˆ›å»ºçš„æ˜¯ Nupediaâ€”â€”ä¸€ä¸ªç”±ä¸“å®¶æ’°å†™ã€ç»è¿‡ä¸¥æ ¼åŒè¡Œè¯„å®¡çš„åœ¨çº¿ç™¾ç§‘å…¨ä¹¦ã€‚ä½† Nupedia è¿›å±•æžå…¶ç¼“æ…¢ï¼Œä¸‰å¹´åªäº§å‡ºäº†24ç¯‡å®Œæˆçš„æ–‡ç« ã€‚

æ‹‰é‡ŒÂ·æ¡‘æ ¼æè®®ä½¿ç”¨"wiki"æŠ€æœ¯ï¼ˆä¸€ç§ä»»ä½•äººéƒ½å¯ä»¥ç¼–è¾‘çš„ç½‘é¡µç³»ç»Ÿï¼‰æ¥åŠ é€Ÿå†…å®¹ç”Ÿäº§ã€‚å¨å°”å£«åŒæ„å°†å…¶ä½œä¸º Nupedia çš„"å–‚æ–™é¡¹ç›®"ã€‚ä½†è¿™ä¸ªå‰¯äº§å“å¾ˆå¿«è¶…è¶Šäº†æœ¬ä½“ï¼šç»´åŸºç™¾ç§‘ä¸Šçº¿ä»…ä¸€ä¸ªæœˆå°±æœ‰äº†600ç¯‡æ–‡ç« ï¼Œä¸€å¹´å†…è¶…è¿‡20,000ç¯‡ã€‚

ç»´åŸºç™¾ç§‘çš„æˆåŠŸæœ¬è´¨ä¸Šæ˜¯ä¸€æ¬¡**ä¿¡æ¯æž¶æž„è®¾è®¡çš„èƒœåˆ©**ã€‚å®ƒè¯æ˜Žäº†ï¼šå½“ä½ è®¾è®¡å‡ºæ­£ç¡®çš„è§„åˆ™ç³»ç»Ÿï¼ˆå¼€æ”¾ç¼–è¾‘ + ç‰ˆæœ¬åŽ†å² + ç¤¾åŒºæ²»ç†ï¼‰ï¼Œæ™®é€šäººçš„é›†ä½“æ™ºæ…§å¯ä»¥äº§å‡ºå ªæ¯”ä¸“å®¶çš„çŸ¥è¯†ä½“ç³»ã€‚`,
    story: `ä»Žè®¾è®¡è§’åº¦çœ‹ï¼Œç»´åŸºç™¾ç§‘æœ€å¼•äººæ³¨ç›®çš„ä¸æ˜¯å®ƒçš„å†…å®¹ï¼Œè€Œæ˜¯å®ƒçš„**ä¿¡æ¯æž¶æž„å’Œäº¤äº’è®¾è®¡å“²å­¦**ã€‚

ç»´åŸºç™¾ç§‘çš„é¡µé¢è®¾è®¡éµå¾ªæžç«¯çš„**å†…å®¹ä¼˜å…ˆåŽŸåˆ™**ï¼šæ²¡æœ‰å¹¿å‘Šã€æ²¡æœ‰æŽ¨èç®—æ³•ã€æ²¡æœ‰ä¸ªæ€§åŒ–æŽ¨é€ã€‚çº¯ç²¹çš„æ–‡å­—ã€é“¾æŽ¥å’Œå¶å°”çš„å›¾ç‰‡â€”â€”è¿™åœ¨æ³¨æ„åŠ›ç»æµŽæ—¶ä»£å‡ ä¹Žæ˜¯ä¸€ç§æ¿€è¿›çš„è®¾è®¡å®£è¨€ã€‚å®ƒçš„ç•Œé¢20å¤šå¹´æ¥å‡ ä¹Žæ²¡æœ‰æœ¬è´¨å˜åŒ–ï¼Œä¸æ˜¯å› ä¸ºè½åŽï¼Œè€Œæ˜¯å› ä¸º**åŠŸèƒ½å·²ç»è¶³å¤Ÿå®Œå–„**ã€‚

**ç»´åŸºçƒæ ‡å¿—ï¼ˆWikipedia Globeï¼‰** æ˜¯å¦ä¸€ä¸ªè®¾è®¡æ°ä½œã€‚2003å¹´å®šç¨¿çš„æ‹¼å›¾åœ°çƒä»ªç”±ä¸åŒæ–‡å­—ç³»ç»Ÿçš„å­—ç¬¦æ‹¼æˆâ€”â€”æ¯å—æ‹¼å›¾ä»£è¡¨ä¸€ç§è¯­è¨€å’Œæ–‡åŒ–ã€‚çƒä½“é¡¶éƒ¨æ•…æ„ç•™æœ‰ç¼ºå£ï¼Œè±¡å¾ç€çŸ¥è¯†æ°¸è¿œæ˜¯æœªå®Œæˆçš„ã€ç­‰å¾…è¡¥å……çš„ã€‚è¿™ä¸ªæ ‡å¿—å®Œç¾Žä¼ è¾¾äº†ç»´åŸºç™¾ç§‘çš„æ ¸å¿ƒç†å¿µï¼š**çŸ¥è¯†æ˜¯å…¨äººç±»åä½œçš„ã€æ°¸è¿œè¿›è¡Œä¸­çš„å·¥ç¨‹**ã€‚

ç»´åŸºç™¾ç§‘çš„**è¶…é“¾æŽ¥ç³»ç»Ÿ**é‡æ–°å®šä¹‰äº†çŸ¥è¯†çš„ç»„ç»‡æ–¹å¼ã€‚æ¯ç¯‡æ–‡ç« ä¸­å¯†é›†çš„è“è‰²é“¾æŽ¥æž„æˆäº†ä¸€å¼ å·¨å¤§çš„çŸ¥è¯†å›¾è°±ï¼Œè¯»è€…å¯ä»¥æ²¿ç€è‡ªå·±çš„å¥½å¥‡å¿ƒè‡ªç”±æŽ¢ç´¢â€”â€”è¿™ç§"å…”å­æ´ž"å¼çš„å­¦ä¹ ä½“éªŒï¼Œæ˜¯ä¼ ç»Ÿç™¾ç§‘å…¨ä¹¦æ— æ³•æä¾›çš„ã€‚ç»´åŸºç™¾ç§‘æœ¬è´¨ä¸Šè®¾è®¡äº†ä¸€ç§**éžçº¿æ€§çš„çŸ¥è¯†å¯¼èˆªç³»ç»Ÿ**ã€‚

ä»Žç”¨æˆ·ä½“éªŒçš„è§’åº¦çœ‹ï¼Œç»´åŸºç™¾ç§‘çš„ç¼–è¾‘ç³»ç»Ÿæ˜¯**æœ€æ—©çš„å¤§è§„æ¨¡åä½œå¹³å°ä¹‹ä¸€**ï¼Œæ¯” Google Docs æ—©äº†æ•´æ•´å…­å¹´ã€‚å®ƒçš„ç‰ˆæœ¬æŽ§åˆ¶ã€è®¨è®ºé¡µã€ç¼–è¾‘åŽ†å²ç­‰åŠŸèƒ½ï¼Œä¸ºåŽæ¥æ‰€æœ‰åœ¨çº¿åä½œå·¥å…·å¥ å®šäº†èŒƒå¼ã€‚`,
    legacy: 'â€¢ ä¿¡æ¯æž¶æž„è®¾è®¡çš„é‡Œç¨‹ç¢‘ï¼šè¯æ˜Žäº†å¼€æ”¾åä½œå¯ä»¥äº§å‡ºå¯é çš„çŸ¥è¯†ä½“ç³»\nâ€¢ ç»´åŸºçƒæ ‡å¿—æˆä¸º"å¼€æ”¾çŸ¥è¯†"çš„å…¨çƒç¬¦å·\nâ€¢ å†…å®¹ä¼˜å…ˆçš„æžç®€ç•Œé¢å½±å“äº†åŽæ¥çš„é˜…è¯»ç±»äº§å“ï¼ˆMediumã€Notion ç­‰ï¼‰\nâ€¢ è¶…é“¾æŽ¥çŸ¥è¯†å›¾è°±é‡æ–°å®šä¹‰äº†äººä»¬èŽ·å–çŸ¥è¯†çš„æ–¹å¼\nâ€¢ ç¼–è¾‘åä½œç³»ç»Ÿæ˜¯çŽ°ä»£åœ¨çº¿åä½œå·¥å…·ï¼ˆGoogle Docsã€Notionï¼‰çš„æ€æƒ³å…ˆé©±\nâ€¢ è¦†ç›–300+è¯­è¨€ã€6000ä¸‡+æ–‡ç« ï¼Œæ˜¯äººç±»æœ€å¤§çš„é›†ä½“æ™ºæ…§å·¥ç¨‹',
    significance: 'ç»´åŸºç™¾ç§‘çš„è®¾è®¡æ„ä¹‰è¿œè¶…ä¸€ä¸ªç½‘ç«™ã€‚å®ƒæ˜¯**ä¿¡æ¯æ°‘ä¸»åŒ–è®¾è®¡çš„æœ€ä¼Ÿå¤§å®žéªŒ**â€”â€”è¯æ˜Žäº†å½“ä½ æŠŠæ­£ç¡®çš„å·¥å…·äº¤ç»™æ‰€æœ‰äººæ—¶ï¼Œé›†ä½“æ™ºæ…§å¯ä»¥åˆ›é€ å‡ºè¶…è¶Šä»»ä½•ä¸ªä½“æˆ–æœºæž„çš„çŸ¥è¯†ä½“ç³»ã€‚é‚£ä¸ªæœªå®Œæˆçš„æ‹¼å›¾åœ°çƒä»ªï¼Œä¸ä»…æ˜¯ä¸€ä¸ªæ ‡å¿—ï¼Œæ›´æ˜¯ä¸€ç§è®¾è®¡å“²å­¦ï¼š**æœ€å¥½çš„è®¾è®¡æ˜¯é‚€è¯·æ¯ä¸ªäººå‚ä¸Žçš„è®¾è®¡ã€‚**',

    dateConnection_en: 'On January 15, 2001, Wikipedia went live. This collaboratively edited free encyclopedia now contains over 60 million articles across 300+ languages â€” the largest knowledge compilation project in human history.',
    designerBio_en: `Wikipedia was born from a failed experiment. Jimmy Wales originally created Nupedia â€” an expert-written, peer-reviewed online encyclopedia. But Nupedia was painfully slow, producing only 24 completed articles in three years.

Larry Sanger proposed using "wiki" technology â€” a web system anyone could edit â€” to accelerate content creation. Wales agreed to try it as a "feeder project" for Nupedia. But the side project quickly surpassed the original: Wikipedia had 600 articles within its first month and over 20,000 within a year.

Wikipedia's success was fundamentally **a triumph of information architecture design.** It proved that when you design the right system of rules (open editing + version history + community governance), the collective intelligence of ordinary people can produce a knowledge system rivaling that of experts.`,
    story_en: `From a design perspective, the most remarkable thing about Wikipedia is not its content but its **information architecture and interaction design philosophy.**

Wikipedia's page design follows an extreme **content-first principle**: no ads, no recommendation algorithms, no personalized feeds. Pure text, links, and occasional images â€” in the attention economy era, this is almost a radical design manifesto. Its interface has barely changed in over 20 years, not because it's outdated, but because **the functionality is already sufficient.**

**The Wikipedia Globe** is another design masterpiece. Finalized in 2003, the puzzle globe is composed of characters from different writing systems â€” each puzzle piece representing a language and culture. The top of the globe is deliberately incomplete, symbolizing that knowledge is forever unfinished, always awaiting contribution. This logo perfectly conveys Wikipedia's core idea: **knowledge is a collaborative, perpetually ongoing project of all humanity.**

Wikipedia's **hyperlink system** redefined how knowledge is organized. The dense blue links in every article form a vast knowledge graph, allowing readers to follow their curiosity freely â€” this "rabbit hole" learning experience is something traditional encyclopedias could never provide. Wikipedia essentially designed a **non-linear knowledge navigation system.**

From a UX perspective, Wikipedia's editing system was **one of the earliest large-scale collaboration platforms**, predating Google Docs by a full six years. Its version control, discussion pages, and edit history features established the paradigm for all subsequent online collaboration tools.`,
    legacy_en: 'â€¢ A milestone in information architecture design: proved open collaboration can produce reliable knowledge systems\nâ€¢ The Wikipedia Globe became a global symbol of "open knowledge"\nâ€¢ Its content-first minimalist interface influenced later reading products (Medium, Notion, etc.)\nâ€¢ Hyperlinked knowledge graphs redefined how people access knowledge\nâ€¢ Its editing collaboration system was an intellectual precursor to modern tools (Google Docs, Notion)\nâ€¢ Spanning 300+ languages with 60M+ articles, it is humanity\'s largest collective intelligence project',
    significance_en: 'Wikipedia\'s design significance extends far beyond a website. It is **the greatest experiment in democratizing information design** â€” proving that when you put the right tools in everyone\'s hands, collective intelligence can create a knowledge system surpassing any individual or institution. That unfinished puzzle globe is not just a logo but a design philosophy: **the best design is design that invites everyone to participate.**',
  },

  // 01-16: Michelin Guide
  {
    id: '16',
    date: '2026-01-16',
    imageUrl: '/the-daily-object/images/michelin-guide.jpg',
    fullImageUrl: '/the-daily-object/images/full/michelin-guide.jpg',
    title: 'ç±³å…¶æž—æŒ‡å—',
    title_en: 'Michelin Guide',
    subtitle: 'AndrÃ© Michelin, 1900',
    subtitle_en: 'AndrÃ© Michelin, 1900',
    category: 'industrial',
    designer: 'AndrÃ© Michelin',
    year: '1900',

    dateConnection: '1853å¹´1æœˆ16æ—¥ï¼Œå®‰å¾·çƒˆÂ·ç±³å…¶æž—å‡ºç”ŸäºŽå·´é»Žã€‚ä»–ä¸Žå¼Ÿå¼Ÿçˆ±å¾·åŽå…±åŒåˆ›å»ºäº†ç±³å…¶æž—è½®èƒŽå…¬å¸ï¼Œå¹¶åœ¨1900å¹´å‘æ˜Žäº†ä¸€æœ¬å°çº¢ä¹¦â€”â€”ã€Šç±³å…¶æž—æŒ‡å—ã€‹ï¼Œè¿™æœ¬å…è´¹èµ é€ç»™é©¾è½¦è€…çš„æ‰‹å†Œï¼Œæ„å¤–åœ°æˆä¸ºäº†å…¨çƒæœ€æƒå¨çš„é¤åŽ…è¯„çº§ä½“ç³»ã€‚',
    designerBio: `å®‰å¾·çƒˆÂ·ç±³å…¶æž—æ˜¯ä¸€ä¸ª**è·¨ç•Œæ€ç»´**çš„å…ˆé©±ã€‚ä»–æ¯•ä¸šäºŽå·´é»Žä¸­å¤®ç†å·¥å­¦é™¢ï¼Œæœ€åˆä»Žäº‹åœ°å›¾åˆ¶ä½œå·¥ä½œã€‚1889å¹´ï¼Œä»–ä¸Žå¼Ÿå¼Ÿçˆ±å¾·åŽæŽ¥ç®¡äº†å®¶æ—çš„æ©¡èƒ¶å·¥åŽ‚ï¼Œå°†å…¶è½¬åž‹ä¸ºè½®èƒŽå…¬å¸ã€‚

ç±³å…¶æž—å…„å¼Ÿçš„å•†ä¸šå¤©æ‰åœ¨äºŽï¼šä»–ä»¬æ„è¯†åˆ°**è½®èƒŽé”€é‡å–å†³äºŽäººä»¬å¼€è½¦çš„é‡Œç¨‹æ•°**ã€‚è¦å–æ›´å¤šè½®èƒŽï¼Œå°±è¦è®©äººä»¬å¤šå¼€è½¦ã€‚è¦è®©äººä»¬å¤šå¼€è½¦ï¼Œå°±è¦ç»™ä»–ä»¬ç†ç”±â€”â€”äºŽæ˜¯ä»–ä»¬å¼€å§‹åˆ¶ä½œé©¾è½¦å‡ºè¡ŒæŒ‡å—ã€‚

å®‰å¾·çƒˆè´Ÿè´£ã€Šç±³å…¶æž—æŒ‡å—ã€‹çš„å†…å®¹ç­–åˆ’å’Œè®¾è®¡æ–¹å‘ã€‚ä»–åšæŒæŒ‡å—å¿…é¡»**å®žç”¨ã€ç²¾ç¡®ã€ç‹¬ç«‹**â€”â€”ä¸æŽ¥å—é¤åŽ…ä»˜è´¹ä¸Šæ¦œï¼Œè¯„å®¡å‘˜åŒ¿åå°±é¤ï¼Œæ‰€æœ‰è¯„ä»·åŸºäºŽç»Ÿä¸€æ ‡å‡†ã€‚è¿™äº›åŽŸåˆ™åœ¨100å¤šå¹´åŽä¾ç„¶æ˜¯ç±³å…¶æž—æŒ‡å—çš„æ ¸å¿ƒã€‚`,
    story: `1900å¹´å·´é»Žä¸–åšä¼šæœŸé—´ï¼Œç±³å…¶æž—å…„å¼Ÿå…è´¹å‘æ”¾äº†35,000æœ¬çº¢è‰²å°å†Œå­ã€‚æœ€åˆçš„ã€Šç±³å…¶æž—æŒ‡å—ã€‹æ˜¯ä¸€æœ¬çº¯ç²¹çš„**é©¾è½¦å®žç”¨æ‰‹å†Œ**ï¼šåŠ æ²¹ç«™ä½ç½®ã€æ¢è½®èƒŽçš„æ–¹æ³•ã€æ²¿é€”æ—…é¦†æŽ¨èã€‚å°é¢é‡‡ç”¨é²œæ˜Žçš„çº¢è‰²â€”â€”è¿™ä¸ªé¢œè‰²é€‰æ‹©å‡ ä¹Žæ˜¯éšæ„çš„ï¼Œä½†åŽæ¥æˆä¸ºäº†å…¨çƒé¤é¥®ç•Œæœ€ä»¤äººæ•¬ç•çš„è‰²å½©ã€‚

1920å¹´ä»£çš„è½¬æŠ˜ç‚¹è‡³å…³é‡è¦ã€‚å®‰å¾·çƒˆÂ·ç±³å…¶æž—æ³¨æ„åˆ°æœ‰äº›ä¿®è½¦åŽ‚æŠŠå…è´¹æŒ‡å—åž«åœ¨å·¥ä½œå°ä¸‹é¢ï¼Œä»–è¯´äº†ä¸€å¥è‘—åçš„è¯ï¼š"**äººä»¬åªä¼šå°Šé‡è‡ªå·±ä»˜é’±ä¹°çš„ä¸œè¥¿ã€‚**"ä»Ž1920å¹´èµ·ï¼ŒæŒ‡å—å¼€å§‹æ”¶è´¹ï¼ŒåŒæ—¶åˆ é™¤äº†æ‰€æœ‰å¹¿å‘Šâ€”â€”è¿™ä¸ªå†³å®šèµ‹äºˆäº†å®ƒç‹¬ç«‹è¯„ä»·çš„å…¬ä¿¡åŠ›ã€‚

1926å¹´ï¼Œç±³å…¶æž—å¼€å§‹ä¸ºä¼˜è´¨é¤åŽ…é¢å‘æ˜Ÿçº§ã€‚**ä¸€æ˜Ÿ**è¡¨ç¤º"å€¼å¾—åœä¸‹æ¥"ï¼Œ**äºŒæ˜Ÿ**è¡¨ç¤º"å€¼å¾—ç»•è·¯å‰å¾€"ï¼Œ**ä¸‰æ˜Ÿ**è¡¨ç¤º"å€¼å¾—ä¸“ç¨‹æ—…è¡Œ"ã€‚è¿™å¥—æžç®€çš„è¯„çº§ç³»ç»Ÿâ€”â€”ä»…ç”¨ä¸‰ä¸ªå±‚çº§â€”â€”æˆä¸ºäº†äººç±»åŽ†å²ä¸Šæœ€æœ‰å½±å“åŠ›çš„å“è´¨è¯„ä»·ä½“ç³»ä¹‹ä¸€ã€‚

ä»Žè®¾è®¡è§’åº¦çœ‹ï¼Œã€Šç±³å…¶æž—æŒ‡å—ã€‹æ˜¯**ä¿¡æ¯è®¾è®¡çš„å…¸èŒƒ**ã€‚å®ƒçš„æŽ’ç‰ˆç´§å‡‘è€Œæ¸…æ™°ï¼Œç”¨æœ€å°‘çš„ç¬¦å·ç³»ç»Ÿï¼ˆæ˜Ÿæ˜Ÿã€å‰å‹ºã€äººå¤´æ ‡å¿—ï¼‰ä¼ é€’æœ€ä¸°å¯Œçš„ä¿¡æ¯ã€‚æ¯ä¸€ä¸ªå›¾æ ‡éƒ½ç»è¿‡æ·±æ€ç†Ÿè™‘ï¼šå‰å‹ºä»£è¡¨é¤å…·èˆ’é€‚åº¦ï¼Œé»‘è‰²å¿…æ¯”ç™»ä»£è¡¨ç‰©ç¾Žä»·å»‰ã€‚è¿™å¥—è§†è§‰è¯­è¨€ç³»ç»Ÿ100å¤šå¹´æ¥åŸºæœ¬æœªå˜ï¼Œå´ä¾ç„¶é«˜æ•ˆè¿ä½œâ€”â€”è¿™æ˜¯ä¿¡æ¯è®¾è®¡æœ€é«˜å¢ƒç•Œçš„è¯æ˜Žã€‚`,
    legacy: 'â€¢ å¼€åˆ›äº†ç‹¬ç«‹ã€åŒ¿åçš„é¤åŽ…è¯„ä»·ä½“ç³»ï¼Œæˆä¸ºå…¨çƒé¤é¥®ä¸šçš„æœ€é«˜æ ‡å‡†\nâ€¢ ä¸‰æ˜Ÿè¯„çº§ç³»ç»Ÿæ˜¯æžç®€ä¿¡æ¯è®¾è®¡çš„æ•™ç§‘ä¹¦æ¡ˆä¾‹\nâ€¢ çº¢è‰²å°é¢æˆä¸ºå“è´¨ä¸Žæƒå¨çš„å…¨çƒç¬¦å·\nâ€¢ ä»Žè½®èƒŽè¥é”€æ‰‹å†Œåˆ°æ–‡åŒ–æƒå¨çš„è½¬å˜ï¼Œæ˜¯å“ç‰Œè·¨ç•Œè®¾è®¡çš„ç»å…¸æ¡ˆä¾‹\nâ€¢ ç±³å…¶æž—æŒ‡å—çš„ä¿¡æ¯è®¾è®¡ä½“ç³»ï¼ˆå›¾æ ‡ã€ç¬¦å·ã€æŽ’ç‰ˆï¼‰å½±å“äº†çŽ°ä»£è¯„çº§ç³»ç»Ÿï¼ˆYelpã€TripAdvisor ç­‰ï¼‰\nâ€¢ "å€¼å¾—ä¸“ç¨‹æ—…è¡Œ"çš„ç†å¿µæ”¹å˜äº†äººä»¬å¯¹ç¾Žé£Ÿå’Œæ—…è¡Œå…³ç³»çš„ç†è§£',
    significance: 'ã€Šç±³å…¶æž—æŒ‡å—ã€‹æ˜¯**å†…å®¹è®¾è®¡æ”¹å˜ä¸–ç•Œçš„ç»ˆæžæ¡ˆä¾‹**ã€‚ä¸€å®¶è½®èƒŽå…¬å¸çš„è¥é”€å°å†Œå­ï¼Œé€šè¿‡ä¸¥è°¨çš„ä¿¡æ¯æž¶æž„å’Œåšå®šçš„è®¾è®¡åŽŸåˆ™ï¼ˆç‹¬ç«‹ã€åŒ¿åã€ç»Ÿä¸€æ ‡å‡†ï¼‰ï¼Œæ¼”å˜æˆäº†å…¨çƒé¤é¥®æ–‡åŒ–çš„æœ€é«˜æƒå¨ã€‚å®ƒè¯æ˜Žäº†ä¸€ä¸ªè®¾è®¡çœŸç†ï¼š**æœ€å¼ºå¤§çš„è®¾è®¡ç³»ç»Ÿæ˜¯é‚£äº›è§„åˆ™ç®€å•ã€æ‰§è¡Œä¸¥æ ¼ã€æ—¶é—´è¶Šé•¿è¶Šæœ‰ä»·å€¼çš„ç³»ç»Ÿã€‚** ä¸‰é¢—æ˜Ÿâ€”â€”ä»…ä»…ä¸‰é¢—â€”â€”å°±è¶³ä»¥æ”¹å˜ä¸€ä½åŽ¨å¸ˆçš„å‘½è¿ã€ä¸€åº§åŸŽå¸‚çš„ç¾Žé£Ÿç‰ˆå›¾ã€‚',

    dateConnection_en: 'On January 16, 1853, AndrÃ© Michelin was born in Paris. Together with his brother Ã‰douard, he founded the Michelin tire company and in 1900 created a small red book â€” the *Michelin Guide*. Originally a free handbook for motorists, it unexpectedly became the world\'s most authoritative restaurant rating system.',
    designerBio_en: `AndrÃ© Michelin was a pioneer of **cross-disciplinary thinking.** He graduated from the Ã‰cole Centrale Paris and initially worked in cartography. In 1889, he and his brother Ã‰douard took over the family rubber factory and transformed it into a tire company.

The Michelin brothers' commercial genius lay in a key insight: **tire sales depended on how many miles people drove.** To sell more tires, you had to get people driving more. To get people driving more, you had to give them reasons â€” so they began producing travel guides.

AndrÃ© oversaw the content strategy and design direction of the Michelin Guide. He insisted that the guide must be **practical, precise, and independent** â€” restaurants could not pay for inclusion, inspectors dined anonymously, and all evaluations followed unified standards. These principles remain the guide's core over a century later.`,
    story_en: `During the 1900 Paris World's Fair, the Michelin brothers distributed 35,000 free red booklets. The original *Michelin Guide* was a purely **practical motoring handbook**: gas station locations, tire-changing instructions, roadside hotel recommendations. The cover was a vivid red â€” a color choice that was almost arbitrary, but would become the most revered hue in the global dining world.

The turning point came in the 1920s. AndrÃ© Michelin noticed that some garages were using the free guides to prop up workbenches. He famously declared: **"People only respect what they pay for."** Starting in 1920, the guide began charging a cover price and simultaneously removed all advertising â€” a decision that gave it the credibility of independent evaluation.

In 1926, Michelin began awarding stars to outstanding restaurants. **One star** meant "worth a stop," **two stars** meant "worth a detour," and **three stars** meant "worth a special journey." This minimalist rating system â€” using only three tiers â€” became one of the most influential quality assessment systems in human history.

From a design perspective, the *Michelin Guide* is **a masterclass in information design.** Its typography is compact yet clear, conveying maximum information through a minimal symbol system (stars, crossed cutlery, Bib Gourmand icons). Every icon was carefully considered: crossed utensils indicate dining comfort levels; the black Bibendum marks outstanding value. This visual language system has remained essentially unchanged for over a century while still functioning perfectly â€” proof of information design at its highest level.`,
    legacy_en: 'â€¢ Created the independent, anonymous restaurant evaluation system that became the global standard for fine dining\nâ€¢ The three-star rating system is a textbook case of minimalist information design\nâ€¢ The red cover became a global symbol of quality and authority\nâ€¢ The transformation from tire marketing booklet to cultural authority is a classic case of brand cross-domain design\nâ€¢ The guide\'s information design system (icons, symbols, typography) influenced modern rating platforms (Yelp, TripAdvisor, etc.)\nâ€¢ The concept of "worth a special journey" changed how people understand the relationship between food and travel',
    significance_en: 'The *Michelin Guide* is **the ultimate case of content design changing the world.** A tire company\'s marketing booklet, through rigorous information architecture and unwavering design principles (independence, anonymity, unified standards), evolved into the supreme authority of global dining culture. It proves a design truth: **the most powerful design systems are those with simple rules, strict execution, and value that compounds over time.** Three stars â€” just three â€” are enough to change a chef\'s destiny and reshape a city\'s culinary landscape.',
  },

  // 01-17: Five-Point Cut
  {
    id: '44',
    date: '2026-01-17',
    imageUrl: '/the-daily-object/images/five-point-cut.jpg',
    fullImageUrl: '/the-daily-object/images/full/five-point-cut.jpg',
    title: 'Five-Point Cut',
    title_en: 'Five-Point Cut',
    subtitle: 'Vidal Sassoon, 1963',
    subtitle_en: 'Vidal Sassoon, 1963',
    category: 'fashion',
    designer: 'Vidal Sassoon',
    year: '1963',
    dateConnection: 'Vidal Sassoon 于 1928 年 1 月 17 日出生于伦敦。这位彻底改变了发型设计的传奇人物，将建筑学的几何思维引入了美发领域。',
    designerBio: `Vidal Sassoon（1928–2012）出生于伦敦东区一个贫困的犹太家庭，14 岁便成为美发学徒。二战后他在以色列参加了独立战争，回到伦敦后在邦德街开设了自己的第一家沙龙。\n\nSassoon 对当时流行的僵硬、依赖发胶和卷发器的发型深感不满。他相信头发应该像建筑一样——拥有内在结构，而不是依赖外部支撑。他研究包豪斯建筑和几何学，将这些原则融入了发型设计。`,
    story: `1963 年，Sassoon 推出了革命性的 **Five-Point Cut**——一种不需要任何发胶或卷发器就能保持形状的几何短发。五个精确的切割点创造出一个完美的几何轮廓，头发会自然落回原位，如同建筑结构般稳固。\n\n这个发型的灵感来自包豪斯建筑的几何线条。Sassoon 后来回忆说："我想创造一种像建筑一样有结构的发型，洗完头甩一甩就能恢复原状。"\n\n1964 年，时尚设计师 Mary Quant 请 Sassoon 为她的模特设计发型。Sassoon 的几何短发与 Quant 的迷你裙完美搭配，共同定义了"摇摆伦敦"（Swinging London）的视觉语言。\n\n1968 年，导演 Roman Polanski 邀请 Sassoon 在电影《Rosemary's Baby》中为 Mia Farrow 剪掉长发——这个镜头成为了电影史上最令人难忘的场景之一。`,
    legacy: '• 彻底解放了女性——不再需要每周去美发店做头发、睡觉时缠卷发器\n• 将美发从"手艺"提升为"设计"，开创了发型作为建筑/雕塑的理念\n• 创建了全球美发教育体系，Sassoon Academy 至今仍是行业标杆\n• 证明了设计思维可以应用于任何领域——包括人的身体',
    significance: 'Five-Point Cut 不仅是一个发型，更是一场**设计革命**。Sassoon 证明了设计的本质——用结构取代装饰，用内在逻辑取代外在支撑——可以应用于最意想不到的领域。',
    dateConnection_en: 'Vidal Sassoon was born on January 17, 1928, in London. This legendary figure who revolutionized hairstyling brought architectural geometric thinking into hair design.',
    designerBio_en: `Vidal Sassoon (1928–2012) was born into a poor Jewish family in London's East End and became a hairdressing apprentice at 14. After WWII, he fought in Israel's War of Independence, then returned to London to open his first salon on Bond Street.\n\nSassoon was deeply dissatisfied with the stiff, hairspray-and-roller-dependent styles of the era. He believed hair should be like architecture — possessing internal structure rather than relying on external support.`,
    story_en: `In 1963, Sassoon introduced the revolutionary **Five-Point Cut** — a geometric bob that held its shape without any hairspray or rollers. Five precise cutting points created a perfect geometric silhouette.\n\nThe hairstyle was inspired by Bauhaus architecture. Sassoon recalled: "I wanted to create a hairstyle with structure like a building — wash it, shake it, and it falls right back."\n\n In 1964, Mary Quant asked Sassoon to style her models' hair. His geometric cuts paired perfectly with Quant's miniskirts, defining Swinging London's visual language.\n\nIn 1968, Roman Polanski invited Sassoon to cut Mia Farrow's hair on camera for Rosemary's Baby — one of cinema's most unforgettable scenes.`,
    legacy_en: '• Liberated women — no more weekly salon visits or sleeping in rollers\n• Elevated hairdressing from craft to design, pioneering hairstyling as architecture\n• Built a global hair education system; Sassoon Academy remains the industry benchmark\n• Proved design thinking applies to any domain — including the human body',
    significance_en: 'The Five-Point Cut was not just a hairstyle but a **design revolution.** Sassoon proved that design\'s essence — replacing decoration with structure — can be applied to the most unexpected domains.',
  },

  // 01-18: Juicy Salif
  {
    id: '45',
    date: '2026-01-18',
    imageUrl: '/the-daily-object/images/juicy-salif.jpg',
    fullImageUrl: '/the-daily-object/images/full/juicy-salif.jpg',
    title: 'Juicy Salif',
    title_en: 'Juicy Salif',
    subtitle: 'Philippe Starck, 1990',
    subtitle_en: 'Philippe Starck, 1990',
    category: 'industrial',
    designer: 'Philippe Starck',
    year: '1990',
    dateConnection: 'Philippe Starck 于 1949 年 1 月 18 日出生于巴黎。这位当代最具争议也最具影响力的设计师，用一个榨汁器改变了人们对日用品的认知。',
    designerBio: `Philippe Starck（1949—）出生于巴黎，父亲是航空工程师。他从小在父亲的绘图桌下长大，吸收了工程与设计的双重基因。\n\nStarck 是少数能让设计"出圈"的设计师。从 1983 年为法国总统密特朗设计爱丽舍宫私人公寓开始，他的作品横跨家具、酒店、餐具、牙刷甚至太空旅馆。他信奉"民主设计"——好设计不应该是少数人的特权。`,
    story: `1988 年，Starck 在意大利 Capraia 岛的海鲜餐厅吃饭时，一边挤柠檬汁一边在餐巾纸上涂鸦。他画了无数个鱿鱼——柠檬汁和鱿鱼的形象在他脑中奇妙地融合了。\n\n1990 年，**Juicy Salif** 由 Alessi 公司上市。这个外星生物般的铝制柠檬榨汁器立刻引发轩然大波——三条蜘蛛般的长腿，顶部是带纹路的锥形头。造型戏剧化，但作为榨汁器饱受争议。\n\n甚至 Starck 本人都承认："我的榨汁器不是用来榨柠檬的，而是用来开启对话的。"这恰恰揭示了它的真正价值：工业设计史上第一件公然挑战"功能至上"教条的日用品。\n\nAlessi 还推出过 24K 镀金限量版，说明书写着："请勿使用，金色涂层会被柠檬酸腐蚀。"完美诠释了 Starck 的设计哲学。`,
    legacy: '• 全球累计销售超过 300 万件，最畅销的设计师日用品之一\n• 被 MoMA、蓬皮杜中心等多家博物馆永久收藏\n• 开启了"设计作为文化符号"的时代\n• 深刻影响了 Alessi 的品牌策略，从厨具品牌转型为设计文化品牌',
    significance: 'Juicy Salif 是设计史上最重要的"无用之物"。它证明了**设计的价值不止于解决问题，也在于提出问题。**',
    dateConnection_en: 'Philippe Starck was born on January 18, 1949, in Paris. This most controversial and influential contemporary designer changed how people perceive everyday objects with a single lemon squeezer.',
    designerBio_en: `Philippe Starck (1949–) was born in Paris to an aeronautical engineer father. Growing up under his father's drafting table, he absorbed the dual DNA of engineering and design.\n\nStarck is one of the rare designers who transcend the design world. From redesigning President Mitterrand's private apartments at the Élysée Palace in 1983, his work spans furniture, hotels, tableware, toothbrushes, and even space hotels. He champions "democratic design."`,
    story_en: `In 1988, Starck was dining at a seafood restaurant on Italy's Capraia island, squeezing lemon juice while doodling on a napkin. The images of lemon juice and squid merged bizarrely in his mind.\n\nIn 1990, **Juicy Salif** was launched by Alessi. This alien-looking aluminum lemon squeezer — standing on three spider-like legs with a ridged conical head — immediately sparked a firestorm.\n\nEven Starck himself admitted: "My juicer is not meant to squeeze lemons. It is meant to start conversations." It was the first everyday object to openly challenge the dogma of "function first."\n\nAlessi released a 24K gold-plated limited edition with instructions: "Do not use — the gold coating will be corroded by citric acid." A perfect encapsulation of Starck's philosophy.`,
    legacy_en: '• Over 3 million units sold worldwide\n• Collected by MoMA, Centre Pompidou, and other major museums\n• Ushered in the era of "design as cultural symbol"\n• Transformed Alessi from kitchenware company to design culture brand',
    significance_en: 'Juicy Salif is the most important "useless object" in design history. It proved that **design\'s value lies not only in solving problems but in posing them.**',
  },

  // 01-19: Mont Sainte-Victoire
  {
    id: '46',
    date: '2026-01-19',
    imageUrl: '/the-daily-object/images/mont-sainte-victoire.jpg',
    fullImageUrl: '/the-daily-object/images/full/mont-sainte-victoire.jpg',
    title: 'Mont Sainte-Victoire',
    title_en: 'Mont Sainte-Victoire',
    subtitle: 'Paul Cézanne, c. 1885–1906',
    subtitle_en: 'Paul Cézanne, c. 1885–1906',
    category: 'art',
    designer: 'Paul Cézanne',
    year: '1885',
    dateConnection: 'Paul Cézanne 于 1839 年 1 月 19 日出生于法国普罗旺斯地区艾克斯。被毕加索称为"我们所有人的父亲"的画家，用一座山改变了人类观看世界的方式。',
    designerBio: `Paul Cézanne（1839–1906）出生于普罗旺斯艾克斯一个富裕的银行家家庭。他与 Émile Zola 是儿时好友，早年在巴黎与印象派画家交往密切，但始终游离于主流之外。\n\nCézanne 生前几乎得不到认可，被沙龙反复拒绝。他性格孤僻，晚年回到普罗旺斯几乎与世隔绝。但他从未停止思考——他的目标不是画出"看到的"自然，而是画出自然的**结构**。`,
    story: `从 1880 年代到 1906 年去世，Cézanne 反复描绘了家乡的**圣维克多山**——油画、水彩加起来超过 80 幅。这不是简单的重复，而是持续 20 多年的视觉实验。\n\nCézanne 的革命在于：他不再把绘画当作模仿自然的窗口，而是用色彩和几何**重建**现实。他用短小的笔触将山体分解为色块和平面，让观者同时看到多个角度——比立体主义早了整整 20 年。\n\n他的名言："用圆柱体、球体和锥体来处理自然。"成为了现代艺术的基石宣言。\n\n1906 年 10 月，67 岁的 Cézanne 在户外写生时遭遇暴风雨，倒在路边。一周后去世——画架上还留着未完成的圣维克多山。`,
    legacy: '• 直接催生了立体主义\n• "用几何结构重建自然"的方法论影响了整个 20 世纪的艺术和设计\n• 圣维克多山系列被认为是西方艺术从具象到抽象的关键过渡\n• "多视角同时呈现"的理念深刻影响了建筑设计和平面设计',
    significance: 'Cézanne 的圣维克多山是**设计思维的源头之一**。他教会后来的设计师：不是复制现实，而是用结构重建现实。从包豪斯到当代极简设计，"用圆柱体、球体和锥体来处理自然"的回声从未消失。',
    dateConnection_en: 'Paul Cézanne was born on January 19, 1839, in Aix-en-Provence. Called "the father of us all" by Picasso, this painter changed how humanity sees the world — through one mountain.',
    designerBio_en: `Paul Cézanne (1839–1906) was born into a wealthy banking family in Aix-en-Provence. A childhood friend of Émile Zola, he associated with the Impressionists in Paris but remained an outsider.\n\nCézanne received almost no recognition in his lifetime. Reclusive by nature, he retreated to Provence, nearly isolating himself. Yet he never stopped — his goal was not to paint nature as "seen," but to paint its **structure**.`,
    story_en: `From the 1880s until his death in 1906, Cézanne repeatedly painted **Mont Sainte-Victoire** — over 80 works in oil and watercolor. This was not repetition but a 20-year visual experiment.\n\nHis revolution: he stopped treating painting as a window imitating nature and instead **reconstructed** reality through color and geometry. Short brushstrokes decomposed the mountain into color planes, showing multiple angles simultaneously — two decades before Cubism.\n\nHis famous dictum: "Treat nature by the cylinder, the sphere, the cone" — became modern art's foundational manifesto.\n\nIn October 1906, the 67-year-old Cézanne collapsed in a storm while painting outdoors. He died a week later — an unfinished Mont Sainte-Victoire still on his easel.`,
    legacy_en: '• Directly gave birth to Cubism\n• His methodology influenced all of 20th-century art and design\n• The series marks the critical transition from figurative to abstract in Western art\n• His "simultaneous multiple perspectives" profoundly influenced architectural and graphic design',
    significance_en: 'Cézanne\'s Mont Sainte-Victoire is **one of the wellsprings of design thinking.** He taught designers a fundamental truth: don\'t copy reality — reconstruct it through structure.',
  },

  // 01-20: 8½ (Otto e Mezzo)
  {
    id: '47',
    date: '2026-01-20',
    imageUrl: '/the-daily-object/images/fellini-8-half.jpg',
    fullImageUrl: '/the-daily-object/images/full/fellini-8-half.jpg',
    title: '8½',
    title_en: '8½ (Otto e Mezzo)',
    subtitle: 'Federico Fellini, 1963',
    subtitle_en: 'Federico Fellini, 1963',
    category: 'film',
    designer: 'Federico Fellini',
    year: '1963',
    dateConnection: 'Federico Fellini 于 1920 年 1 月 20 日出生于意大利里米尼。这位电影大师的第八部半作品，至今仍是电影视觉设计的最高峰之一。',
    designerBio: `Federico Fellini（1920–1993）出生于意大利里米尼。年少时逃离小镇前往罗马，从漫画家和记者起步，逐渐进入电影界。\n\nFellini 是电影史上最具视觉想象力的导演之一。他的电影不追求线性叙事，而是创造完整的**视觉宇宙**——梦境、记忆、幻想与现实交织成视觉交响诗。他与美术指导 Piero Gherardi 的合作，使每一帧都如同精心设计的舞台。`,
    story: `1962 年，Fellini 在筹备新片时陷入严重的创作危机。于是他做了一个天才的决定：**把拍不出电影这件事本身拍成一部电影。**\n\n**8½**（1963）的片名来自 Fellini 的作品数量：六部长片、两部短片各算半部，加上这一部 = 八又二分之一。\n\n美术指导 Piero Gherardi 创造了亦真亦幻的世界：巨大的火箭发射台布景象征膨胀的野心，温泉浴场的超现实空间暗示记忆与欲望的交融。开场梦境——Guido 在交通堵塞中飘浮升空——至今仍是电影史上最具标志性的视觉段落。\n\nGherardi 的服装设计同样惊艳：Guido 标志性的黑色礼帽是"导演面具"的具象化，Claudia Cardinale 全白的形象象征不可及的理想。\n\n8½ 赢得了 1963 年奥斯卡最佳外语片和最佳服装设计两项大奖。`,
    legacy: '• 开创了"元电影"类型，影响了伍迪·艾伦、查理·考夫曼等后来者\n• 视觉设计方法论——用布景、服装和空间叙事——成为电影美术设计教科书\n• Piero Gherardi 的服装设计至今仍是时尚界灵感源泉\n• 开场梦境序列被无数导演致敬',
    significance: '8½ 是**电影作为设计媒介的巅峰证明。** Fellini 和 Gherardi 展示了视觉设计不仅是"好看的背景"，而是叙事本身——布景就是心理空间，服装就是人物性格，光影就是情绪节奏。',
    dateConnection_en: 'Federico Fellini was born on January 20, 1920, in Rimini, Italy. This master filmmaker\'s eighth-and-a-half work remains one of the supreme achievements in cinematic visual design.',
    designerBio_en: `Federico Fellini (1920–1993) was born in Rimini, Italy. He escaped to Rome as a young man, starting as a cartoonist and journalist before entering film.\n\nFellini is one of cinema's most visually imaginative directors. His films create complete **visual universes** — dreams, memories, fantasies, and reality woven into symphonic poems. His collaboration with production designer Piero Gherardi ensured every frame was a meticulously designed stage.`,
    story_en: `In 1962, Fellini fell into a severe creative crisis. So he made a genius decision: **turn the inability to make a film into a film itself.**\n\n**8½** (1963) takes its title from Fellini's filmography: six features plus two shorts (each counting as half) plus this one = eight and a half.\n\nProduction designer Piero Gherardi created a world between real and surreal: a massive rocket launchpad symbolizing inflated ambitions, surreal thermal baths suggesting the fusion of memory and desire. The opening dream — Guido floating from a traffic jam — remains one of cinema's most iconic visual sequences.\n\nGherardi's costumes were equally stunning: Guido's signature black hat materializes his "director's mask"; Claudia Cardinale's all-white look symbolizes the unattainable ideal.\n\n8½ won two Academy Awards — Best Foreign Language Film and Best Costume Design.`,
    legacy_en: '• Pioneered the "meta-film" genre, influencing Woody Allen, Charlie Kaufman, and countless others\n• Its visual design methodology became a textbook for film production design\n• Piero Gherardi\'s costumes remain a fashion inspiration\n• The opening dream sequence is a milestone in cinematic visual language',
    significance_en: '8½ is the **supreme proof of cinema as a design medium.** Fellini and Gherardi demonstrated that visual design is narrative itself — sets are psychological spaces, costumes are character, light and shadow are emotional rhythm.',
  },

  // 01-21: New Look (Christian Dior)
  {
    id: '48',
    date: '2026-01-21',
    imageUrl: '/the-daily-object/images/dior-new-look.jpg',
    fullImageUrl: '/the-daily-object/images/full/dior-new-look.jpg',
    title: 'New Look',
    title_en: 'New Look',
    subtitle: 'Christian Dior, 1947',
    subtitle_en: 'Christian Dior, 1947',
    category: 'fashion',
    designer: 'Christian Dior',
    year: '1947',

    dateConnection: '1905年1月21日，Christian Dior 出生于法国诺曼底格兰维尔。1947年，他推出了震惊世界的"New Look"系列，彻底改变了战后时尚的面貌，重新定义了女性优雅的标准。',
    designerBio: `Christian Dior（1905-1957）是20世纪最具影响力的时装设计师之一。他出身于富裕家庭，年轻时热爱艺术，曾经营画廊。大萧条摧毁了家族财富后，他转向时装设计，在 Robert Piguet 和 Lucien Lelong 麾下学习技艺。

1946年，在纺织业巨头 Marcel Boussac 的资助下，Dior 在巴黎蒙田大道30号创立了自己的时装屋。仅仅一年后，他的首个系列就让整个时尚界为之倾倒。

Dior 对设计有着近乎偏执的完美主义。他相信时装不仅是衣服，更是**建筑**——每一件作品都需要精确的结构、完美的比例和戏剧性的轮廓。他曾说："我以花瓣的形态设计衣服。"`,
    story: `1947年2月12日，Christian Dior 在巴黎蒙田大道30号发布了他的首个高级定制系列"Corolle"（花冠）。当模特走出来的那一刻，在场的记者和买手们集体倒吸一口气——这与战时简朴、节省布料的时装完全是两个世界。

**圆润的肩线、紧束的腰身、及小腿的丰盈长裙**——一件"Bar"套装就需要用掉近15米布料，而战时一件裙子可能只用3米。《Harper's Bazaar》主编 Carmel Snow 当场脱口而出："It's quite a revolution, dear Christian. Your dresses have such a new look!" ——"New Look"之名由此诞生。

这个系列引发了巨大争议。布料配给制还未完全取消，如此奢侈的用料被视为"道德上的冒犯"。巴黎街头甚至出现了愤怒的抗议者试图撕扯穿着 New Look 的女性的衣服。

但 Dior 的设计天才在于：**New Look 不只是一种风格，它是一种情感的释放。** 经历了六年战争的压抑后，人们需要美、需要奢侈、需要被重新赋予对未来的想象。那条丰盈的裙摆承载的是整个时代对自由与美好生活的渴望。

从设计角度看，New Look 的核心创新在于**结构**。Dior 在衣服内部使用了精密的衬垫、鲸骨和衬里，创造出理想化的女性身体轮廓。他不是在为身体做衣服，而是**用衣服重新雕塑身体**。这种"时装即建筑"的理念至今仍是高级定制的核心哲学。`,
    legacy: '• 彻底终结了战时实用主义时装美学，重新确立巴黎作为全球时尚之都的地位\n• "New Look"成为时装史上最著名的革命性时刻\n• 创立的 Dior 品牌至今仍是全球最具价值的奢侈品牌之一\n• 开创了时装设计师作为"品牌帝国"的商业模式\n• "时装即建筑"的设计哲学影响了 Balenciaga、Givenchy 等后来的大师',
    significance: 'New Look 是**时装设计史上最重要的单一时刻**。它证明了设计不仅能改变穿着方式，更能改变一个时代的精神面貌。在物质匮乏的年代，Dior 用15米布料的奢侈告诉世界：**美不是多余的，美是必需品。**',

    dateConnection_en: 'On January 21, 1905, Christian Dior was born in Granville, Normandy, France. In 1947, he unveiled his revolutionary "New Look" collection that transformed postwar fashion and redefined the standards of feminine elegance.',
    designerBio_en: `Christian Dior (1905-1957) was one of the most influential fashion designers of the 20th century. Born into a wealthy family, he loved art in his youth and once ran a gallery. After the Great Depression destroyed the family fortune, he turned to fashion design under Robert Piguet and Lucien Lelong.

In 1946, backed by textile magnate Marcel Boussac, Dior founded his fashion house at 30 Avenue Montaigne in Paris. Just one year later, his debut collection captivated the entire fashion world.

Dior brought an almost obsessive perfectionism to design. He believed fashion was not just clothing but **architecture** — every piece required precise structure, perfect proportions, and dramatic silhouette. He once said: "I design clothes in the shape of flower petals."`,
    story_en: `On February 12, 1947, Christian Dior presented his debut haute couture collection "Corolle" at 30 Avenue Montaigne in Paris. The moment the models appeared, the assembled journalists and buyers collectively gasped — this was a world apart from wartime's austere, fabric-rationed fashions.

**Rounded shoulders, cinched waists, and full calf-length skirts** — a single "Bar" suit required nearly 15 meters of fabric, while a wartime dress might use only 3. *Harper's Bazaar* editor Carmel Snow exclaimed: "It's quite a revolution, dear Christian. Your dresses have such a new look!" — and the name was born.

The collection sparked enormous controversy. Fabric rationing hadn't fully ended, and such extravagance was seen as "a moral affront." Angry protesters even tried to tear clothes off women wearing the New Look in the streets of Paris.

But Dior's genius lay in this: **the New Look was not just a style — it was an emotional release.** After six years of wartime suppression, people needed beauty, needed luxury, needed to reimagine the future. Those voluminous skirts carried an entire era's longing for freedom and the good life.

From a design perspective, the core innovation was **structural.** Dior used elaborate internal padding, boning, and linings to create an idealized feminine silhouette. He wasn't making clothes for the body — he was **using clothes to resculpt the body.** This "fashion as architecture" philosophy remains the core ethos of haute couture today.`,
    legacy_en: '• Decisively ended wartime utilitarian fashion aesthetics and re-established Paris as the global fashion capital\n• "New Look" became the most famous revolutionary moment in fashion history\n• The Dior brand remains one of the world\'s most valuable luxury brands\n• Pioneered the business model of fashion designers as "brand empires"\n• His "fashion as architecture" philosophy influenced Balenciaga, Givenchy, and other masters',
    significance_en: 'The New Look is **the single most important moment in fashion design history.** It proved that design can change not just how people dress, but the spiritual character of an era. In a time of scarcity, Dior used 15 meters of extravagant fabric to tell the world: **beauty is not a luxury — beauty is a necessity.**',
  },

  // 01-22: A Change Is Gonna Come (Sam Cooke)
  {
    id: '49',
    date: '2026-01-22',
    imageUrl: '/the-daily-object/images/a-change-is-gonna-come.jpg',
    fullImageUrl: '/the-daily-object/images/full/a-change-is-gonna-come.jpg',
    title: 'A Change Is Gonna Come',
    title_en: 'A Change Is Gonna Come',
    subtitle: 'Sam Cooke, 1964',
    subtitle_en: 'Sam Cooke, 1964',
    category: 'music',
    designer: 'Sam Cooke',
    year: '1964',

    dateConnection: '1931年1月22日，Sam Cooke 出生于密西西比州克拉克斯代尔。他不仅是灵魂乐的先驱，更是第一位将音乐视为"设计产品"的非裔美国艺术家——从词曲创作、录音制作到唱片公司运营，他重新设计了流行音乐的整个产业链。',
    designerBio: `Sam Cooke（1931-1964）被誉为"灵魂乐之王"，是流行音乐史上最重要的创新者之一。他生于密西西比，成长于芝加哥，从小在教堂唱诗班展露天赋，19岁便成为传奇福音组合 Soul Stirrers 的主唱。

Cooke 的革命性不仅在于他的声音——那种丝绒般柔滑、充满磁性的嗓音——更在于他的**商业设计思维**。1959年，他创立了自己的唱片公司 SAR Records 和音乐出版公司 Kags Music，成为当时极少数拥有自己音乐版权和厂牌的非裔艺术家。

他深刻理解：**音乐不只是艺术，音乐是一个需要被设计的系统。**`,
    story: `1963年10月，Sam Cooke 在路易斯安那州什里夫波特巡演。尽管他已经是全美最红的歌手之一，当他试图入住一家白人旅馆时，仍然被拒之门外。这次屈辱经历成为了一首伟大歌曲的催化剂。

同年，Bob Dylan 的《Blowin' in the Wind》引发了巨大反响。Cooke 听到后深受触动，但也感到一种刺痛——**为什么关于黑人民权的最有力歌曲，是一个白人写的？** 他决定用自己的方式回应。

《A Change Is Gonna Come》的创作过程异常艰难。最终的编曲是一个**音乐设计的杰作**：弦乐的宏大叙事从低沉的独白逐渐升腾为壮阔的交响；法国号赋予了歌曲一种庄严的仪式感；而 Cooke 的声音在控制与释放之间的精确游走，创造了流行音乐史上最动人的声乐表演之一。

歌曲于1964年12月作为单曲发行——悲剧性的是，Cooke 在发行前三周遭枪击身亡，年仅33岁。这首歌因此获得了超越音乐本身的象征意义：它成为了整个民权运动的圣歌。

从**音乐设计**的角度看，这首歌的编曲结构堪称教科书：三段式叙事（过去的痛苦→现在的挣扎→未来的希望），每一段都通过配器的递进来强化情感。结尾处弦乐突然转为不安的小调——暗示变革之路并非坦途——这种反转设计让整首歌的情感层次远超一般的抗议歌曲。`,
    legacy: '• 被《滚石》杂志评为"史上最伟大的500首歌曲"第12名\n• 成为美国民权运动的标志性音乐作品\n• 开创了灵魂乐的编曲范式：管弦乐 + 福音元素 + 流行结构的完美融合\n• Sam Cooke 创立自有厂牌的商业模式，影响了整个黑人音乐产业\n• 歌曲的叙事结构成为后世抗议音乐的模板\n• 影响了 Otis Redding、Aretha Franklin、Marvin Gaye 等灵魂乐大师',
    significance: '《A Change Is Gonna Come》是**音乐作为社会设计工具的极致案例。** Sam Cooke 用精密的编曲结构、克制而深情的演唱，将个人的屈辱经历升华为整个时代的心声。这首歌证明了设计的最高境界：**不是改变物质世界的形态，而是改变人们内心的风景。**',

    dateConnection_en: 'On January 22, 1931, Sam Cooke was born in Clarksdale, Mississippi. He was not only a pioneer of soul music but also the first African American artist to treat music as a "designed product" — from songwriting and production to running his own record label, he redesigned the entire popular music industry chain.',
    designerBio_en: `Sam Cooke (1931-1964), known as the "King of Soul," was one of the most important innovators in popular music history. Born in Mississippi and raised in Chicago, he showed his talent early in church choirs and became the lead singer of the legendary gospel group the Soul Stirrers at just 19.

Cooke's revolutionary impact went beyond his voice — that velvety smooth, magnetically warm tone — to his **business design thinking.** In 1959, he founded his own record label SAR Records and publishing company Kags Music, becoming one of the very few African American artists of his era to own his music rights and label.

He understood profoundly: **music is not just art — music is a system that needs to be designed.**`,
    story_en: `In October 1963, Sam Cooke was touring in Shreveport, Louisiana. Despite being one of the biggest stars in America, when he tried to check into a whites-only motel, he was turned away. This humiliating experience became the catalyst for one of the greatest songs ever written.

That same year, Bob Dylan's "Blowin' in the Wind" had generated enormous impact. Cooke was deeply moved but also felt a sting — **why was the most powerful song about Black civil rights written by a white man?** He decided to respond in his own way.

The creation of "A Change Is Gonna Come" was agonizing. The final arrangement is a **masterpiece of musical design**: the orchestral narrative rises from hushed monologue to sweeping symphony; French horns give the song ceremonial gravitas; and Cooke's voice, navigating precisely between restraint and release, creates one of the most moving vocal performances in pop music history.

The song was released as a single in December 1964 — tragically, Cooke had been shot and killed three weeks before its release, at just 33. The song thus became an anthem for the entire civil rights movement.

From a **musical design** perspective, the arrangement structure is textbook: a three-act narrative (past pain → present struggle → future hope), each section intensified through instrumental progression. At the ending, the strings suddenly shift to an uneasy minor key — suggesting the road to change is far from smooth — a reversal that gives the song emotional depth far beyond typical protest songs.`,
    legacy_en: '• Ranked #12 on Rolling Stone\'s "500 Greatest Songs of All Time"\n• Became the iconic musical work of the American civil rights movement\n• Pioneered the soul music arrangement paradigm: orchestral + gospel + pop structure\n• Cooke\'s business model of owning his label influenced the entire Black music industry\n• The song\'s narrative structure became a template for protest music\n• Influenced Otis Redding, Aretha Franklin, Marvin Gaye, and other soul masters',
    significance_en: '"A Change Is Gonna Come" is **the ultimate case of music as a tool of social design.** Sam Cooke used precise arrangement and restrained yet deeply emotional vocals to elevate personal humiliation into the voice of an entire era. This song proves design\'s highest calling: **not to change the shape of the material world, but to change the landscape within people\'s hearts.**',
  },

  // 01-21: New Look (Dior)
  {
    id: '48',
    date: '2026-01-21',
    imageUrl: '/the-daily-object/images/dior-new-look.jpg',
    fullImageUrl: '/the-daily-object/images/full/dior-new-look.jpg',
    title: 'New Look',
    title_en: 'The New Look',
    subtitle: 'Christian Dior, 1947',
    subtitle_en: 'Christian Dior, 1947',
    category: 'fashion',
    designer: 'Christian Dior',
    year: '1947',
    dateConnection: 'Christian Dior 于 1905 年 1 月 21 日出生于法国诺曼底格朗维尔。他在 1947 年推出的首个系列彻底改变了战后时尚的面貌。',
    designerBio: `Christian Dior（1905–1957）出生于法国诺曼底一个富裕家庭。年轻时经营过画廊，经历过家庭破产和战争的洗礼，直到 42 岁才创立自己的时装屋。\n\n这位大器晚成的设计师，在短短十年间重塑了整个时尚产业。他将高级定制从战时的简朴中解放出来，重新定义了女性优雅的标准。`,
    story: `1947 年 2 月 12 日，Dior 在巴黎蒙田大道 30 号发布了他的首个系列。**Harper's Bazaar** 主编 Carmel Snow 看完秀后脱口而出："It's quite a revolution, dear Christian! Your dresses have such a new look!"\n\n这个"New Look"由此得名。核心是 **Bar Suit**——柔软的圆肩、收紧的蜂腰、使用多达 25 码布料的宽大裙摆。在战时布料配给刚刚结束的年代，这种奢侈的用料本身就是一种宣言。\n\n**New Look 不只是一件衣服，而是一种完整的女性轮廓设计**：从肩线到裙摆，每一个比例都经过精密计算。Dior 像建筑师一样构建服装——他称之为"花冠线条"（Corolle line），将女性身体重新雕塑成花朵绽放的形态。\n\nNew Look 引发了巨大争议。女权主义者抗议它"倒退"，面料制造商却欢呼雀跃。但无论褒贬，它标志着战后时尚新纪元的开始。`,
    legacy: 'New Look 确立了 Dior 品牌的基因——建筑感的结构、戏剧性的轮廓、对女性曲线的崇拜。这种设计哲学影响了此后七十年的高级定制时装。',
    significance: 'New Look 证明了时装设计可以像建筑一样具有结构性思维。Dior 用一个系列重新定义了"优雅"的视觉语言，使时装设计真正成为一门与建筑、工业设计并列的设计学科。',

    dateConnection_en: 'Christian Dior was born on January 21, 1905, in Granville, Normandy, France. His debut collection in 1947 would completely transform the landscape of post-war fashion.',
    designerBio_en: `Christian Dior (1905–1957) was born into a wealthy family in Normandy, France. He ran an art gallery in his youth, endured family bankruptcy and war, and didn't establish his own fashion house until the age of 42.\n\nThis late bloomer reshaped the entire fashion industry in just a decade, liberating haute couture from wartime austerity and redefining the standards of feminine elegance.`,
    story_en: `On February 12, 1947, Dior presented his debut collection at 30 Avenue Montaigne in Paris. **Harper's Bazaar** editor Carmel Snow exclaimed after the show: "It's quite a revolution, dear Christian! Your dresses have such a new look!"\n\nThe "New Look" was thus named. At its heart was the **Bar Suit** — soft rounded shoulders, a cinched waist, and sweeping skirts using up to 25 yards of fabric. In an era when fabric rationing had barely ended, such lavish use of material was itself a manifesto.\n\n**The New Look was not just a garment but a complete feminine silhouette system**: from shoulder line to hemline, every proportion was precisely calculated. Dior constructed clothing like an architect — he called it the "Corolle line" (corolla line), resculpting the female body into the form of a blooming flower.\n\nThe New Look sparked enormous controversy. Feminists protested it as "regressive," while fabric manufacturers cheered. But regardless of opinion, it marked the beginning of a new era in post-war fashion.`,
    legacy_en: 'The New Look established the DNA of the Dior brand — architectural structure, dramatic silhouettes, and the celebration of feminine curves. This design philosophy has influenced haute couture for over seventy years.',
    significance_en: 'The New Look proved that fashion design could possess the same structural thinking as architecture. With a single collection, Dior redefined the visual language of "elegance," elevating fashion design to a discipline on par with architecture and industrial design.',
  },

  // 01-22: A Change Is Gonna Come (Sam Cooke)
  {
    id: '49',
    date: '2026-01-22',
    imageUrl: '/the-daily-object/images/a-change-is-gonna-come.jpg',
    fullImageUrl: '/the-daily-object/images/full/a-change-is-gonna-come.jpg',
    title: 'A Change Is Gonna Come',
    title_en: 'A Change Is Gonna Come',
    subtitle: 'Sam Cooke, 1964',
    subtitle_en: 'Sam Cooke, 1964',
    category: 'music',
    designer: 'Sam Cooke',
    year: '1964',
    dateConnection: 'Sam Cooke 于 1931 年 1 月 22 日出生于密西西比州克拉克斯代尔。这位"灵魂乐之王"创作了美国民权运动最伟大的音乐作品之一。',
    designerBio: `Sam Cooke（1931–1964）出生于密西西比州一个牧师家庭，在芝加哥长大。从福音音乐起步，他是第一批成功跨越福音与世俗音乐界限的非裔美国歌手。\n\n他不仅是歌手，更是音乐产业的革新者——他创立了自己的唱片公司 SAR Records 和出版公司，成为最早掌控自己音乐版权的非裔美国艺人之一。他对音乐产业的商业模式设计，与他的音乐本身同样具有开创性。`,
    story: `1963 年 10 月，Sam Cooke 在听了 Bob Dylan 的 "Blowin' in the Wind" 后深受触动——一个白人民谣歌手写出了黑人民权运动的心声，这让他感到一种创作的紧迫感。\n\n他随即创作了 **"A Change Is Gonna Come"**。这首歌的编曲设计是音乐制作的里程碑：René Hall 的弦乐编排如同交响诗，法国号开场营造出史诗般的庄严感，Cooke 的声音在层层管弦乐中如同一束光穿透黑暗。\n\n**从声音设计的角度看**，这首歌打破了当时流行音乐的制作范式。它不是简单的"歌手+伴奏"模式，而是将古典管弦乐编曲与灵魂乐人声融为一体，创造了一种全新的音乐"建筑"——声音的空间感和层次感达到了前所未有的高度。\n\n1964 年 12 月 11 日，Sam Cooke 在洛杉矶一家汽车旅馆被枪杀，年仅 33 岁。三周后，"A Change Is Gonna Come" 作为单曲发行，成为民权运动的精神圣歌。`,
    legacy: '这首歌的声音设计影响了此后六十年的音乐制作。从 Marvin Gaye 到 Beyoncé，无数音乐人在这首歌中找到了"用声音讲述社会故事"的范本。它证明了流行音乐可以同时是艺术品和社会宣言。',
    significance: '"A Change Is Gonna Come" 是声音设计与社会设计的完美交汇。Sam Cooke 用音乐的结构——编曲的层次、和声的张力、人声的情感弧线——设计了一种能够打动所有人的"情感体验"，这与最好的产品设计异曲同工。',

    dateConnection_en: 'Sam Cooke was born on January 22, 1931, in Clarksdale, Mississippi. The "King of Soul" created one of the greatest musical works of the American civil rights movement.',
    designerBio_en: `Sam Cooke (1931–1964) was born into a minister's family in Mississippi and grew up in Chicago. Starting in gospel music, he was one of the first African American singers to successfully cross the boundary between gospel and secular music.\n\nHe was not merely a singer but an innovator of the music industry — he founded his own record label SAR Records and publishing company, becoming one of the earliest African American artists to control his own music rights. His design of the music business model was as groundbreaking as his music itself.`,
    story_en: `In October 1963, Sam Cooke was deeply moved after hearing Bob Dylan's "Blowin' in the Wind" — a white folk singer had captured the voice of the Black civil rights movement, filling him with an urgent need to create.\n\nHe immediately composed **"A Change Is Gonna Come."** The song's arrangement design is a milestone in music production: René Hall's string orchestration unfolds like a symphonic poem, French horns open with epic solemnity, and Cooke's voice pierces through layers of orchestration like a beam of light through darkness.\n\n**From a sound design perspective**, the song shattered the production paradigm of popular music at the time. It was not a simple "singer plus accompaniment" model but fused classical orchestral arrangement with soul vocals, creating an entirely new musical "architecture" — achieving an unprecedented sense of spatial depth and layering in sound.\n\nOn December 11, 1964, Sam Cooke was shot and killed at a motel in Los Angeles at just 33 years old. Three weeks later, "A Change Is Gonna Come" was released as a single and became the spiritual anthem of the civil rights movement.`,
    legacy_en: 'The sound design of this song influenced six decades of music production that followed. From Marvin Gaye to Beyoncé, countless musicians found in this song a template for "telling social stories through sound." It proved that popular music could be both art and social manifesto.',
    significance_en: '"A Change Is Gonna Come" is the perfect intersection of sound design and social design. Sam Cooke used musical structure — the layering of arrangement, the tension of harmony, the emotional arc of vocals — to design an "emotional experience" that moves everyone, echoing the principles of the finest product design.',
  },
]



