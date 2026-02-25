export interface DesignObject {
  id: string
  date: string
  imageUrl: string
  thumbnailUrl?: string
  title: string
  subtitle?: string // 设计师 + 年份
  category: 'industrial' | 'music' | 'art' | 'architecture' | 'graphic' | 'software'
  designer: string
  year?: string
  
  // 中文内容
  dateConnection: string
  designerBio: string
  story: string
  legacy?: string
  significance?: string
  
  // 英文内容
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
    thumbnailUrl: '/the-daily-object/images/up-chair.jpg',
    title: 'UP5 & UP6',
    subtitle: 'Gaetano Pesce, 1969',
    category: 'industrial',
    designer: 'Gaetano Pesce',
    year: '1969',
    
    dateConnection: '1969年，UP Series 在米兰家具展首次亮相，彻底颠覆了人们对家具的认知。Gaetano Pesce (1939-2024) 是20世纪最激进的意大利设计师之一，2024年4月在纽约去世，留下了半个世纪的设计革命遗产。',
    
    designerBio: `Gaetano Pesce (1939-2024)，意大利建筑师、设计师，20世纪设计先驱。

他在威尼斯大学跟随 Carlo Scarpa 和 Ernesto Rogers 学习建筑，但他的野心远不止于建筑。他要让设计成为**社会评论的工具**——每一件作品都有话要说。

**"Design should not be about beauty alone. It should provoke thought, create discourse, make people uncomfortable if necessary."**
设计不应该只关乎美。它应该引发思考、创造对话，必要时让人不安。

他的作品被 MoMA、蓬皮杜中心、V&A 博物馆永久收藏。`,
    
    story: `1969年，米兰家具展。Pesce 展示了一系列真空包装的家具——打开包装，聚氨酯泡沫在几分钟内膨胀成完整的椅子。

其中最震撼的是 UP5——一个丰腴的女性躯干形态，旁边连着一个球形脚凳 UP6。

**这不是抽象的曲线，这是一个被囚禁的女人。**

Pesce 公开解释：UP5 象征女性，UP6 是她脚上的球和链——代表社会对女性的束缚。椅子的名字曾被称为 "La Mamma"、"Donna"、"Big Mama"。

评论家震惊了。这是家具还是宣言？是产品还是艺术品？是舒适还是挑衅？

**答案是：全都是。**

这把椅子定义了意大利激进设计运动，证明家具可以承载政治信息。`,
    
    legacy: `• 激进设计运动：与 Superstudio、Archizoom 一起定义了60年代末意大利设计的反叛精神
• 女性主义设计：最早将性别政治明确融入家具设计的作品之一
• 包装创新：真空压缩包装是当时的技术突破，影响了后来 IKEA 的平板包装理念
• 博物馆典藏：MoMA、V&A、蓬皮杜中心永久收藏，成为20世纪设计史的标志`,
    
    significance: `Pesce 证明了设计可以是激进的、政治的、不舒服的——同时仍然是美的。

UP5 坐起来令人惊讶地舒适。它包裹着你，像一个拥抱。但每次你坐下，你都被迫想起它的含义。这就是 Pesce 的天才：**他让批判变得亲密，让政治变得家常。**

在他2024年去世后，设计界失去了最后一位敢于说"设计不只是解决问题"的大师。`,

    dateConnection_en: 'In 1969, the UP Series debuted at the Milan Furniture Fair, completely revolutionizing how people perceived furniture. Gaetano Pesce (1939-2024) was one of the most radical Italian designers of the 20th century, passing away in New York in April 2024, leaving behind half a century of design revolution.',
    
    designerBio_en: `Gaetano Pesce (1939-2024), Italian architect and designer, a 20th-century design pioneer.

He studied architecture at the University of Venice under Carlo Scarpa and Ernesto Rogers, but his ambitions went far beyond architecture. He wanted design to be **a tool for social commentary**—every piece had something to say.

**"Design should not be about beauty alone. It should provoke thought, create discourse, make people uncomfortable if necessary."**

His works are in the permanent collections of MoMA, Centre Pompidou, and the V&A Museum.`,
    
    story_en: `1969, Milan Furniture Fair. Pesce unveiled a series of vacuum-packed furniture—open the package, and polyurethane foam expands into a complete chair within minutes.

The most stunning was UP5—a voluptuous female torso shape, connected to a ball-shaped ottoman, UP6.

**This wasn't an abstract curve. This was an imprisoned woman.**

Pesce publicly explained: UP5 symbolizes woman, UP6 is the ball and chain at her feet—representing society's constraints on women. The chair has been called "La Mamma," "Donna," "Big Mama."

Critics were stunned. Was this furniture or manifesto? Product or artwork? Comfort or provocation?

**The answer: all of the above.**

This chair defined the Italian Radical Design movement, proving furniture could carry political messages.`,
    
    legacy_en: `• Radical Design movement: Alongside Superstudio and Archizoom, defined the rebellious spirit of late-60s Italian design
• Feminist design: One of the first works to explicitly integrate gender politics into furniture design
• Packaging innovation: Vacuum compression packaging was a technological breakthrough, influencing IKEA's later flat-pack concept
• Museum collections: Permanently housed in MoMA, V&A, Centre Pompidou—icons of 20th-century design history`,
    
    significance_en: `Pesce proved that design can be radical, political, uncomfortable—while still being beautiful.

UP5 is surprisingly comfortable to sit in. It wraps around you like an embrace. But every time you sit down, you're forced to consider its meaning. This was Pesce's genius: **he made critique intimate, made politics domestic.**

After his death in 2024, the design world lost its last master who dared to say "design is not just problem-solving."`
  },
  {
    id: '9',
    date: '2026-02-11',
    imageUrl: '/the-daily-object/images/mcqueen-horn-of-plenty.jpg',
    thumbnailUrl: '/the-daily-object/images/mcqueen-horn-of-plenty.jpg',
    title: 'The Horn of Plenty',
    subtitle: 'Alexander McQueen, 2009',
    category: 'art',
    designer: 'Alexander McQueen',
    year: '2009',
    
    dateConnection: '2010年2月11日，Alexander McQueen 在伦敦家中自杀身亡，享年40岁。他是21世纪最重要的时装设计师之一，将时装秀变成了剧场艺术。',
    
    designerBio: `Lee Alexander McQueen (1969-2010)，英国时装设计师，被称为"英国时尚界的坏孩子"（l'enfant terrible）。

他16岁辍学去萨维尔街当裁缝学徒，25岁就成为纪梵希的创意总监。他的秀场像恐怖片、像梦魇、像诗——模特从玻璃箱里走出来，被机器人喷漆，在暴风雪中行走。

**"I want to empower women. I want people to be afraid of the women I dress."**
我想赋予女性力量。我想让人们害怕我穿着的女人。

他的自杀发生在母亲葬礼前几天。时尚界至今无人能填补他留下的空白。`,
    
    story: `The Horn of Plenty 是 McQueen 2009 秋冬系列，也是他生前倒数第二个系列。

整场秀是对时尚产业的**自我批判**。巨大的垃圾堆构成 T 台背景，模特戴着夸张到畸形的头饰——讽刺时尚界对"新"的病态追求。

但在垃圾和讽刺之下，是无与伦比的工艺。羽毛裙从肩膀延伸到地面，每一片羽毛都经过手工染色和定位。面料的处理、剪裁的精确、对人体的理解——这是高级定制的巅峰。

**McQueen 用最美的方式说了最丑陋的真相：时尚在消费自己。**`,
    
    legacy: `• 时装表演艺术：证明 runway show 可以是完整的艺术作品，而非商品展示
• V&A "Savage Beauty" 展览：2015年成为 V&A 史上最成功的展览，排队长达6小时
• 情感设计：McQueen 证明设计可以是创伤、愤怒、美丽的复杂混合
• 后继者 Sarah Burton：继承品牌并设计了凯特王妃的婚纱`,
    
    significance: `McQueen 不是在"设计衣服"——他在讲故事、在治疗、在对抗。

他的每个系列都有一个完整的叙事：被女巫烧死的祖先、苏格兰高地的屠杀、深海的生物。衣服是叙事的载体，T台是剧场，模特是角色。

这种方法论——设计作为表达，而非商品——影响了整整一代设计师。`,

    dateConnection_en: 'On February 11, 2010, Alexander McQueen took his own life at his London home at age 40. He was one of the most important fashion designers of the 21st century, transforming fashion shows into theatrical art.',
    
    designerBio_en: `Lee Alexander McQueen (1969-2010), British fashion designer, known as "l'enfant terrible" of British fashion.

He dropped out of school at 16 to apprentice on Savile Row, and became creative director of Givenchy at 25. His shows were like horror films, like nightmares, like poetry—models emerged from glass boxes, were spray-painted by robots, walked through blizzards.

**"I want to empower women. I want people to be afraid of the women I dress."**

His suicide occurred just days before his mother's funeral. The fashion world has yet to fill the void he left.`,
    
    story_en: `The Horn of Plenty was McQueen's Autumn/Winter 2009 collection, his second-to-last before his death.

The entire show was a **self-critique of the fashion industry**. A massive garbage heap formed the runway backdrop, models wore grotesquely exaggerated headpieces—satirizing fashion's pathological pursuit of "newness."

But beneath the trash and satire was unparalleled craftsmanship. Feather gowns extended from shoulders to floor, each feather hand-dyed and positioned. The fabric treatment, precision of cut, understanding of the body—this was haute couture at its peak.

**McQueen told the ugliest truth in the most beautiful way: fashion is consuming itself.**`,
    
    legacy_en: `• Fashion as performance art: Proved runway shows could be complete artworks, not merchandise displays
• V&A "Savage Beauty" exhibition: Became V&A's most successful exhibition in 2015, with 6-hour queues
• Emotional design: McQueen proved design could be a complex mixture of trauma, anger, and beauty
• Successor Sarah Burton: Inherited the brand and designed Kate Middleton's wedding dress`,
    
    significance_en: `McQueen wasn't "designing clothes"—he was telling stories, healing, fighting back.

Each collection had a complete narrative: ancestors burned as witches, Highland massacres, deep-sea creatures. Clothes were vehicles for narrative, the runway was theater, models were characters.

This methodology—design as expression, not commodity—influenced an entire generation of designers.`
  },
  {
    id: '8',
    date: '2026-02-12',
    imageUrl: '/the-daily-object/images/beckmann-self-portrait.png',
    thumbnailUrl: '/the-daily-object/images/beckmann-self-portrait.png',
    title: 'Self-Portrait with Champagne Glass',
    subtitle: 'Max Beckmann, 1919',
    category: 'art',
    designer: 'Max Beckmann',
    year: '1919',
    
    dateConnection: '1884年2月12日，Max Beckmann 出生于德国莱比锡。他是20世纪最重要的表现主义画家之一，用扭曲的形象记录了两次世界大战之间的人类处境。',
    
    designerBio: `Max Beckmann (1884-1950)，德国画家，表现主义和新客观主义的代表人物。

他在一战中当过医疗兵，战争的恐怖彻底改变了他的艺术风格——从学院派转向扭曲、紧张、充满象征的表现主义。纳粹上台后，他的作品被列为"堕落艺术"，超过500件被从德国博物馆没收。

**"What I want to show in my work is the idea that hides itself behind so-called reality."**
我想在作品中展示的是隐藏在所谓现实背后的理念。

1937年他离开德国，辗转荷兰、美国，再也没有回去。`,
    
    story: `1919年的自画像画于一战结束后第一年。Beckmann 刚从战场的精神崩溃中恢复。

画中的他西装革履，手持香槟杯——像是在庆祝。但看他的眼睛：空洞、疲惫、带着某种警惕。背景是深色的、压迫性的。空间被刻意压缩，人物几乎要被挤出画框。

**这不是庆祝，是幸存者的假面。**

香槟杯是讽刺：魏玛共和国的纵情狂欢、战后德国的虚假繁荣、即将到来的灾难的前夜。Beckmann 看到了没人愿意看的东西。

这幅画现藏于法兰克福施泰德博物馆。`,
    
    legacy: `• 战后艺术：定义了两次世界大战之间欧洲艺术的心理状态
• 自画像传统：与伦勃朗、梵高并列，成为最重要的自画像画家之一
• 流亡艺术家：代表了被纳粹驱逐的整整一代德国知识分子和艺术家
• 新客观主义：影响了 George Grosz、Otto Dix 等同代画家`,
    
    significance: `Beckmann 证明了艺术可以是见证——不是美化现实，而是撕开它的伪装。

他画的不是"美"，是真相。他的人物总是被挤压在狭小的空间里，就像现代人被挤压在历史的车轮下。这种紧张感、这种窒息感，至今仍然resonant。`,

    dateConnection_en: 'On February 12, 1884, Max Beckmann was born in Leipzig, Germany. He was one of the most important Expressionist painters of the 20th century, documenting the human condition between two World Wars through distorted imagery.',
    
    designerBio_en: `Max Beckmann (1884-1950), German painter, a leading figure of Expressionism and New Objectivity.

He served as a medical orderly in WWI, and the horrors of war completely transformed his artistic style—from academic to distorted, tense, symbol-laden Expressionism. After the Nazis came to power, his works were labeled "degenerate art," with over 500 pieces confiscated from German museums.

**"What I want to show in my work is the idea that hides itself behind so-called reality."**

In 1937 he left Germany, moving through the Netherlands and America, never returning.`,
    
    story_en: `The 1919 self-portrait was painted in the first year after WWI ended. Beckmann had just recovered from a mental breakdown on the battlefield.

In the painting he wears a suit, holding a champagne glass—as if celebrating. But look at his eyes: hollow, exhausted, with a certain wariness. The background is dark, oppressive. Space is deliberately compressed; the figure nearly pressed out of the frame.

**This isn't celebration—it's a survivor's mask.**

The champagne glass is ironic: the wild revelry of the Weimar Republic, post-war Germany's false prosperity, the eve of coming disaster. Beckmann saw what no one wanted to see.

This painting is now in the Städel Museum, Frankfurt.`,
    
    legacy_en: `• Post-war art: Defined the psychological state of European art between the World Wars
• Self-portrait tradition: Ranked alongside Rembrandt and Van Gogh as one of the most important self-portrait painters
• Exiled artists: Represented an entire generation of German intellectuals and artists expelled by the Nazis
• New Objectivity: Influenced contemporaries like George Grosz and Otto Dix`,
    
    significance_en: `Beckmann proved that art can be witness—not beautifying reality, but tearing off its disguise.

He didn't paint "beauty," he painted truth. His figures are always squeezed into cramped spaces, like modern humans crushed under history's wheels. That tension, that suffocation, still resonates today.`
  },
  {
    id: '7',
    date: '2026-02-13',
    imageUrl: '/the-daily-object/images/panton-chair.jpg?v=2',
    thumbnailUrl: '/the-daily-object/images/panton-chair.jpg?v=2',
    title: 'Panton Chair',
    subtitle: 'Verner Panton, 1967',
    category: 'industrial',
    designer: 'Verner Panton',
    year: '1967',
    
    dateConnection: '2月13日是 Verner Panton 的生日（1926年）。他是丹麦最激进的家具设计师，用塑料颠覆了北欧设计的传统美学。',
    
    designerBio: `Verner Panton (1926-1998)，丹麦设计师，20世纪最具实验性的家具设计师之一。

他曾在 Arne Jacobsen 工作室工作，但很快走上了完全不同的道路。北欧设计讲究木头、自然、克制；他偏要用塑料、曲线、色彩爆炸。

**"A less successful experiment is preferable to a beautiful platitude."**
一个不太成功的实验，也比一句漂亮的陈词滥调好。

他设计的空间像迷幻药一样刺激——天花板、墙壁、地板全部是有机曲线，色彩饱和到让人窒息。`,
    
    story: `Panton Chair 是历史上**第一把用单一材料一次成型的椅子**。

从 1960 年开始，Panton 就想做一把没有腿的椅子——一个连续的 S 曲线，从地面流向座面再到靠背。概念很简单，执行却极难。

他找了十几家厂商，都说做不出来。直到 1967 年，Vitra 终于用新型塑料注塑工艺实现了这个设计。

**一把椅子，没有一个接缝、一颗螺丝。**

它挑战了"椅子应该长什么样"的所有假设。可以叠放、可以户外使用、可以是任何颜色。年轻人把它当成反叛的符号。`,
    
    legacy: `• 塑料家具革命：证明塑料可以是高端材料，不只是"廉价替代品"
• 一体成型设计：影响了后来所有的模块化、可堆叠家具设计
• MoMA 永久收藏：成为 20 世纪设计史的标志性作品
• 色彩运用：打破了北欧设计"黑白灰原木"的刻板印象`,
    
    significance: `Panton 证明了设计可以是纯粹的乐趣。

在一个讲究功能、理性、克制的时代，他说：设计也可以是情绪、是色彩、是让人微笑的曲线。这把椅子不仅坐起来舒服，看起来就让人开心。`,

    dateConnection_en: 'February 13 is Verner Panton\'s birthday (1926). He was Denmark\'s most radical furniture designer, using plastic to subvert traditional Scandinavian design aesthetics.',
    
    designerBio_en: `Verner Panton (1926-1998), Danish designer, one of the most experimental furniture designers of the 20th century.

He worked at Arne Jacobsen's studio but soon took a completely different path. Nordic design emphasized wood, nature, and restraint; he insisted on plastic, curves, and color explosions.

**"A less successful experiment is preferable to a beautiful platitude."**

His designed spaces were like psychedelic trips—ceilings, walls, floors all organic curves, colors saturated to suffocation.`,
    
    story_en: `The Panton Chair is **the first chair in history molded from a single material in one piece**.

Starting in 1960, Panton wanted to make a chair without legs—a continuous S-curve flowing from floor to seat to backrest. The concept was simple; execution was extremely difficult.

He approached dozens of manufacturers; all said it couldn't be done. Finally in 1967, Vitra achieved the design using new plastic injection molding technology.

**One chair, not a single seam, not a single screw.**

It challenged every assumption about "what a chair should look like." Stackable, outdoor-friendly, available in any color. Young people adopted it as a symbol of rebellion.`,
    
    legacy_en: `• Plastic furniture revolution: Proved plastic could be a premium material, not just a "cheap substitute"
• One-piece molding design: Influenced all subsequent modular, stackable furniture design
• MoMA permanent collection: Became an iconic work of 20th-century design history
• Color application: Broke the Scandinavian design stereotype of "black, white, gray, and wood"`,
    
    significance_en: `Panton proved that design can be pure joy.

In an era obsessed with function, rationality, and restraint, he said: design can also be emotion, color, curves that make people smile. This chair isn't just comfortable to sit in—it's happy just to look at.`
  },
  {
    id: '6',
    date: '2026-02-14',
    imageUrl: '/the-daily-object/images/i-love-ny.png',
    thumbnailUrl: '/the-daily-object/images/i-love-ny.png',
    title: 'I ♥ NY',
    subtitle: 'Milton Glaser, 1977',
    category: 'art',
    designer: 'Milton Glaser',
    year: '1977',
    
    dateConnection: '2月14日是情人节。而 I ♥ NY 是设计史上最著名的"爱"的表达——用一个符号代替了一个词，改变了视觉传达的语言。',
    
    designerBio: `Milton Glaser (1929-2020)，美国平面设计师，被称为"美国平面设计之父"。

他联合创办了 Push Pin Studios，重新定义了插画和平面设计的关系。他设计了 Bob Dylan 那张迷幻的彩虹海报、DC Comics 的 logo、Brooklyn Brewery 的 logo。

**"There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for."**
设计有三种反应——行、不行、哇！我们追求的是"哇！"。

他一直工作到 91 岁去世。`,
    
    story: `1977年，纽约市快破产了。犯罪率飙升，市政府没钱，没人想来旅游。

纽约州商务局找到广告公司做个宣传标语。Glaser 在出租车后座，用红蜡笔在信封背面画了一个草图：**I ♥ NY**。

他用一个红心符号替代了"love"这个词——这在当时是革命性的。没人这样做过。

他免费把这个设计给了纽约州，没收一分钱版税。这个 logo 现在每年为纽约创造数十亿美元的旅游收入。

**全世界最被复制、最被恶搞的 logo，诞生于一个信封背面。**`,
    
    legacy: `• 视觉语言革命：开创了"用符号替代词汇"的设计手法，影响了 emoji 时代
• 城市品牌先驱：证明了一个城市可以像一个品牌一样被设计和推广
• 免费设计的力量：没有版权保护反而让它无处不在，成为真正的文化符号
• 9/11 后的变体："I ♥ NY More Than Ever"（心上有个伤疤）成为城市韧性的象征`,
    
    significance: `Glaser 证明了最简单的设计可能是最强大的。

三个字母、一个符号、两种颜色。任何人都能画出来，任何人都能理解。这就是伟大设计的定义——它属于所有人。`,

    dateConnection_en: 'February 14 is Valentine\'s Day. And I ♥ NY is design history\'s most famous expression of "love"—using a symbol to replace a word, changing the language of visual communication.',
    
    designerBio_en: `Milton Glaser (1929-2020), American graphic designer, often called the "Father of American Graphic Design."

He co-founded Push Pin Studios, redefining the relationship between illustration and graphic design. He designed Bob Dylan's psychedelic rainbow poster, the DC Comics logo, and Brooklyn Brewery's logo.

**"There are three responses to a piece of design — yes, no, and WOW! Wow is the one to aim for."**

He worked until his death at 91.`,
    
    story_en: `In 1977, New York City was nearly bankrupt. Crime rates soared, the city had no money, no one wanted to visit.

The New York State Commerce Department asked an ad agency for a promotional slogan. Glaser, in the back of a taxi, sketched on the back of an envelope with a red crayon: **I ♥ NY**.

He replaced the word "love" with a red heart symbol—revolutionary at the time. No one had done this before.

He gave the design to New York State for free, without any royalties. This logo now generates billions in tourism revenue for New York annually.

**The world's most copied, most parodied logo, born on the back of an envelope.**`,
    
    legacy_en: `• Visual language revolution: Pioneered "replacing words with symbols" in design, influencing the emoji era
• City branding pioneer: Proved a city could be designed and promoted like a brand
• The power of free design: Lack of copyright protection made it ubiquitous, a true cultural symbol
• Post-9/11 variant: "I ♥ NY More Than Ever" (heart with a scar) became a symbol of city resilience`,
    
    significance_en: `Glaser proved that the simplest design can be the most powerful.

Three letters, one symbol, two colors. Anyone can draw it, anyone can understand it. That's the definition of great design—it belongs to everyone.`
  },
  {
    id: '5',
    date: '2026-02-15',
    imageUrl: '/the-daily-object/images/hope-poster.jpg',
    thumbnailUrl: '/the-daily-object/images/hope-poster.jpg',
    title: 'HOPE Poster',
    subtitle: 'Shepard Fairey, 2008',
    category: 'art',
    designer: 'Shepard Fairey',
    year: '2008',
    
    dateConnection: '2月15日是 Shepard Fairey 的生日（1970年）。他是当代最有影响力的街头艺术家，从滑板文化走向总统竞选视觉设计。',
    
    designerBio: `Shepard Fairey (1970-)，美国街头艺术家、平面设计师。

他从罗德岛设计学院毕业后，开始了"OBEY Giant"运动——在全世界贴满安德烈巨人的脸和"OBEY"字样。这是对消费主义和服从文化的讽刺，也是他的签名符号。

**"The medium is the message, but the message is also the medium."**
媒介是信息，但信息也是媒介。

他的作品混合了苏联宣传海报、朋克 zine、街头涂鸦的美学，创造出一种独特的视觉语言。`,
    
    story: `2008年美国总统大选，Fairey 自发为奥巴马设计了一张海报。没人委托他，没人付钱给他。

他用了一张美联社的新闻照片作为参考，把它处理成**红白蓝三色的高对比图像**，下面只有一个词：HOPE。

海报在网上疯传，成为整个竞选的视觉符号。奥巴马团队后来才官方采用它。

这是互联网时代**第一个真正"病毒式"传播的政治设计**。它证明了：在社交媒体时代，一个草根艺术家可以定义一场运动的视觉身份。

后来他因为照片版权问题被美联社起诉，最终和解。但这张海报已经成为历史。`,
    
    legacy: `• 政治设计民主化：证明竞选视觉不一定来自官方团队
• 病毒式传播先驱：互联网时代设计传播的经典案例
• 版权争议：引发了关于"transformative use"（转化性使用）的法律讨论
• 模因模板：成为被模仿最多的政治海报格式`,
    
    significance: `HOPE 海报证明了设计可以改变政治。

它把一个参议员变成了一个图标，把一场竞选变成了一场运动。在这之后，每个政治竞选都在寻找自己的"HOPE 时刻"。`,

    dateConnection_en: 'February 15 is Shepard Fairey\'s birthday (1970). He is the most influential contemporary street artist, moving from skateboard culture to presidential campaign visual design.',
    
    designerBio_en: `Shepard Fairey (1970-), American street artist and graphic designer.

After graduating from Rhode Island School of Design, he started the "OBEY Giant" campaign—plastering André the Giant's face and "OBEY" across the world. It was a satire of consumerism and obedience culture, and his signature symbol.

**"The medium is the message, but the message is also the medium."**

His work blends Soviet propaganda posters, punk zines, and street graffiti aesthetics, creating a unique visual language.`,
    
    story_en: `During the 2008 US presidential election, Fairey spontaneously designed a poster for Obama. No one commissioned him, no one paid him.

He used an Associated Press news photo as reference, processing it into a **high-contrast red-white-blue image**, with just one word below: HOPE.

The poster went viral online, becoming the visual symbol of the entire campaign. Obama's team only officially adopted it later.

This was **the first truly "viral" political design of the internet age**. It proved that in the social media era, a grassroots artist could define a movement's visual identity.

He was later sued by the AP over photo copyright, eventually settling. But the poster had already made history.`,
    
    legacy_en: `• Democratizing political design: Proved campaign visuals don't have to come from official teams
• Viral spread pioneer: A classic case of design dissemination in the internet age
• Copyright controversy: Sparked legal discussions about "transformative use"
• Meme template: Became the most imitated political poster format`,
    
    significance_en: `The HOPE poster proved that design can change politics.

It turned a senator into an icon, a campaign into a movement. After this, every political campaign has been searching for its own "HOPE moment."`
  },
  {
    id: '4',
    date: '2026-02-19',
    imageUrl: '/the-daily-object/images/bird-in-space.jpg',
    thumbnailUrl: '/the-daily-object/images/bird-in-space.jpg',
    title: 'Bird in Space',
    subtitle: 'Constantin Brâncuși, 1923',
    category: 'art',
    designer: 'Constantin Brâncuși',
    year: '1923',
    
    dateConnection: '2月19日是 Brâncuși 的生日（1876年）。这一天也是罗马尼亚的官方纪念日 Brâncuși Day。',
    
    designerBio: `Constantin Brâncuși (1876-1957)，罗马尼亚人，被称为"现代雕塑之父"。

7岁放羊，9岁离家打工，18岁用废料自制了一把小提琴——被发现后送去学艺术。后来去巴黎，罗丹邀请他进工作室，他只待了两个月就离开，说：

**"Nothing can grow under big trees."**
大树底下长不出东西。

然后他开创了自己的风格。`,
    
    story: `鸟没有翅膀、没有羽毛、没有眼睛。只有一根流线型的形态，像一滴拉长的水滴。

Brâncuși 说他雕刻的不是鸟的外形，而是**"飞翔的本质"**。

他亲自打磨青铜表面，抛光到镜面反射。光线在曲面上流动，让静止的雕塑看起来像在移动。

1926年，摄影师 Edward Steichen 买了一件 Bird in Space 运到美国。海关拒绝认定它是艺术品——说这是个工业零件，要收关税。官司打到法院。法官最终判定：艺术不必是对自然的写实模仿，可以是一个抽象概念——比如"飞翔"本身。

这个判决确立了一个重要原则：**抽象艺术也是艺术**。`,
    
    legacy: `• Apple 设计语言：Jony Ive 多次提到 Brâncuși 对他的影响——简洁、材料真实、形式服从本质
• 航空航天：这个流线型早于空气动力学的系统研究，后来被证明是近乎完美的低阻力形态  
• 现代家具：从 Noguchi 茶几到北欧设计，"less is more"的源头之一`,
    
    significance: `Brâncuși 证明了：雕塑可以不模仿现实；材料本身就是语言；底座可以是作品的一部分。

他的工作室（现在在蓬皮杜中心旁边原样重建）是现代艺术史上最重要的空间之一。`,
    
    // English
    dateConnection_en: 'February 19 is Brâncuși\'s birthday (1876). This day is also officially celebrated as Brâncuși Day in Romania.',
    
    designerBio_en: `Constantin Brâncuși (1876-1957), Romanian sculptor, known as the "Father of Modern Sculpture."

He was a shepherd at 7, left home at 9 to work, and at 18 built a violin from scrap wood—which got him discovered and sent to art school. Later in Paris, Rodin invited him to his studio, but he left after just two months, saying:

**"Nothing can grow under big trees."**

Then he forged his own path.`,
    
    story_en: `The bird has no wings, no feathers, no eyes. Just a streamlined form, like an elongated water droplet.

Brâncuși said he wasn't sculpting the bird's shape, but **"the essence of flight."**

He polished the bronze surface himself to a mirror finish. Light flows across the curves, making the still sculpture appear to move.

In 1926, photographer Edward Steichen bought a Bird in Space and shipped it to America. Customs refused to classify it as art—calling it an industrial part subject to import duty. The case went to court. The judge ultimately ruled: art doesn't have to be realistic imitation of nature; it can be an abstract concept—like "flight" itself.

This verdict established a crucial principle: **abstract art is art.**`,
    
    legacy_en: `• Apple's design language: Jony Ive has cited Brâncuși's influence multiple times—simplicity, material honesty, form following essence
• Aerospace: This streamlined shape predated systematic aerodynamic research, later proven to be near-perfect low-drag form
• Modern furniture: From the Noguchi table to Scandinavian design, one of the origins of "less is more"`,
    
    significance_en: `Brâncuși proved that sculpture doesn't have to imitate reality; the material itself is a language; the pedestal can be part of the work.

His studio (now reconstructed next to the Pompidou Center) is one of the most important spaces in modern art history.`
  },
  {
    id: '3',
    date: '2026-02-18',
    imageUrl: '/the-daily-object/images/tiffany-lamp.jpg',
    thumbnailUrl: '/the-daily-object/images/tiffany-lamp.jpg',
    title: 'Wisteria Lamp',
    subtitle: 'Louis Comfort Tiffany, 1901',
    category: 'art',
    designer: 'Louis Comfort Tiffany',
    year: '1901',
    
    dateConnection: '2月18日是 Louis Comfort Tiffany 的生日（1848年）。他创造了 Art Nouveau 时代最具标志性的装饰艺术品。',
    
    designerBio: `Louis Comfort Tiffany (1848-1933)，美国设计师、艺术家，Tiffany & Co. 创始人之子。

他没有继承父亲的珠宝生意，而是去追求自己的艺术梦想。先学绘画，后转向装饰艺术。他痴迷于光和色彩的关系，尤其是光穿透彩色玻璃时的效果。

**"Color is to the eye what music is to the ear."**
色彩之于眼睛，如同音乐之于耳朵。

他发明了"Favrile"玻璃工艺——一种能呈现虹彩效果的特殊玻璃，让每件作品都独一无二。`,
    
    story: `Wisteria Lamp 是 Tiffany Studios 最复杂的作品之一。灯罩由超过 2000 片手工切割的彩色玻璃组成，每一片都经过精心挑选和打磨。

紫藤花从灯罩顶部倾泻而下，绿叶交织其中。灯座模仿紫藤树干的形态，青铜铸造，根须蔓延成底座。

当灯点亮，光线穿透玻璃，**整盏灯变成一个发光的花园**。

这不是简单的照明工具——它是一件可以使用的艺术品。每盏灯都需要数周制作，没有两盏完全相同。`,
    
    legacy: `• Art Nouveau 运动：Tiffany 灯成为新艺术运动的代名词，影响了整个装饰艺术领域
• 工艺美术复兴：证明了手工艺品可以是艺术品，为后来的 Arts & Crafts 运动铺路
• 收藏市场：原版 Tiffany 灯现在价值数百万美元，是装饰艺术品中最受追捧的品类之一`,
    
    significance: `Tiffany 模糊了"工艺"和"艺术"的界限。他的工作室是最早实现"设计师 + 工匠"协作模式的地方之一。

他证明了：日常物品可以是艺术品；材料创新可以开创全新美学；光本身可以成为设计的主角。`,

    // English
    dateConnection_en: 'February 18 is Louis Comfort Tiffany\'s birthday (1848). He created the most iconic decorative art of the Art Nouveau era.',
    
    designerBio_en: `Louis Comfort Tiffany (1848-1933), American designer and artist, son of the founder of Tiffany & Co.

He didn't inherit his father's jewelry business—instead, he pursued his own artistic dreams. He studied painting first, then turned to decorative arts. He was obsessed with the relationship between light and color, especially how light passes through stained glass.

**"Color is to the eye what music is to the ear."**

He invented the "Favrile" glass technique—a special iridescent glass that made each piece unique.`,
    
    story_en: `The Wisteria Lamp is one of Tiffany Studios' most complex works. The shade consists of over 2,000 pieces of hand-cut stained glass, each carefully selected and polished.

Wisteria flowers cascade from the top of the shade, intertwined with green leaves. The base mimics the form of a wisteria tree trunk, cast in bronze, with roots spreading into the base.

When lit, light penetrates the glass, and **the entire lamp becomes a glowing garden.**

This is not a simple lighting tool—it's a functional work of art. Each lamp takes weeks to make, and no two are exactly alike.`,
    
    legacy_en: `• Art Nouveau movement: Tiffany lamps became synonymous with Art Nouveau, influencing the entire decorative arts field
• Crafts revival: Proved that handicrafts can be art, paving the way for the Arts & Crafts movement
• Collector's market: Original Tiffany lamps now worth millions of dollars, among the most sought-after decorative art pieces`,
    
    significance_en: `Tiffany blurred the line between "craft" and "art." His studio was one of the first to achieve a "designer + craftsman" collaborative model.

He proved that everyday objects can be art; material innovation can create entirely new aesthetics; light itself can be the protagonist of design.`
  },
  {
    id: '2',
    date: '2026-02-17',
    imageUrl: '/the-daily-object/images/vessel.jpg',
    thumbnailUrl: '/the-daily-object/images/vessel.jpg',
    title: 'Vessel',
    subtitle: 'Thomas Heatherwick, 2019',
    category: 'architecture',
    designer: 'Thomas Heatherwick',
    year: '2019',
    
    dateConnection: '2月17日是 Thomas Heatherwick 的生日（1970年）。他是当代最具影响力的设计师之一，跨越建筑、产品、公共艺术多个领域。',
    
    designerBio: `Thomas Heatherwick (1970-)，英国设计师，Heatherwick Studio 创始人。

他拒绝被定义。不是建筑师，不是产品设计师，不是艺术家——但他做所有这些事。他的作品从伦敦奥运会主火炬到上海世博会英国馆，从 Google 总部到纽约 Hudson Yards。

**"The enemy of good design is too much focus."**
好设计的敌人是过度聚焦。

他相信设计应该引发情感反应，而不仅仅是解决功能问题。`,
    
    story: `Vessel 是一座可以攀爬的公共雕塑，位于纽约 Hudson Yards。154 段楼梯，2500 级台阶，80 个观景平台，全部交织成一个蜂巢状的结构。

从外面看，它像一个巨大的蜂巢或松果。但真正的体验是**走进去**——你可以从任何一个入口开始，沿着楼梯上下穿梭，在不同高度看到不同的风景和其他攀爬者。

Heatherwick 说：**"建筑太经常是关于'看'的，这个是关于'做'的。"**

它没有固定的参观路线。每个人的体验都不一样。`,
    
    legacy: `• 公共空间设计：重新定义了"地标建筑"的概念——不是用来仰望的，而是用来参与的
• 交互式建筑：证明建筑可以是一种体验而非背景
• 城市更新：成为 Hudson Yards 开发项目的核心吸引力，带动整个区域的活力`,
    
    significance: `Vessel 挑战了建筑的基本假设：建筑必须有明确功能吗？它更像一个巨大的游乐场或迷宫——存在的意义就是被探索。

在一个什么都讲效率的时代，Heatherwick 提醒我们：有些东西的价值就是让人感到惊奇。`,

    // English
    dateConnection_en: 'February 17 is Thomas Heatherwick\'s birthday (1970). He is one of the most influential designers of our time, spanning architecture, product design, and public art.',
    
    designerBio_en: `Thomas Heatherwick (1970-), British designer, founder of Heatherwick Studio.

He refuses to be defined. Not an architect, not a product designer, not an artist—but he does all of these things. His work ranges from the London Olympic Cauldron to the UK Pavilion at Shanghai Expo, from Google headquarters to New York's Hudson Yards.

**"The enemy of good design is too much focus."**

He believes design should provoke emotional responses, not just solve functional problems.`,
    
    story_en: `Vessel is a climbable public sculpture located at Hudson Yards in New York. 154 flights of stairs, 2,500 steps, 80 viewing platforms, all interwoven into a honeycomb-like structure.

From the outside, it looks like a giant honeycomb or pinecone. But the real experience is **going inside**—you can start from any entrance, traverse up and down the stairs, seeing different views and other climbers at different heights.

Heatherwick said: **"Architecture is too often about 'looking.' This is about 'doing.'"**

There's no fixed visiting route. Everyone's experience is different.`,
    
    legacy_en: `• Public space design: Redefined the concept of "landmark architecture"—not meant to be gazed upon, but to be participated in
• Interactive architecture: Proved that architecture can be an experience rather than a backdrop
• Urban renewal: Became the core attraction of the Hudson Yards development, energizing the entire district`,
    
    significance_en: `Vessel challenges architecture's basic assumptions: must buildings have clear functions? It's more like a giant playground or maze—its purpose is to be explored.

In an age obsessed with efficiency, Heatherwick reminds us: some things have value simply by making people feel wonder.`
  },
  {
    id: '1',
    date: '2026-02-16',
    imageUrl: '/the-daily-object/images/arco-lamp.jpg',
    thumbnailUrl: '/the-daily-object/images/arco-lamp.jpg',
    title: 'Arco Lamp',
    subtitle: 'Achille & Pier Giacomo Castiglioni, 1962',
    category: 'industrial',
    designer: 'Achille Castiglioni',
    year: '1962',
    
    dateConnection: '2月16日是 Achille Castiglioni 的生日（1918年）。他是意大利设计黄金时代最具代表性的设计师，三次获得 Compasso d\'Oro 金罗盘奖。',
    
    designerBio: `Achille Castiglioni (1918-2002)，意大利工业设计大师，与哥哥 Pier Giacomo 合作创造了无数经典设计。

他从日常物品中寻找灵感。拖拉机座椅变成酒吧凳（Mezzadro），汽车大灯变成台灯（Toio）。他相信好设计来自于**重新观看熟悉的事物**。

**"Start from scratch. Ordinary people accept the world as it is. Designers re-imagine it."**
从零开始。普通人接受世界的样子，设计师重新想象它。

他的工作室现在是米兰的一个博物馆，保留着他收集的各种"普通物件"。`,
    
    story: `Arco 的设计问题很简单：如何把光源从地面移到沙发上方——不用打孔、不用吊灯？

答案是一根优雅的弧线。大理石底座提供稳定性（重达65公斤），不锈钢弧形臂将灯罩送到2米多高的空中。

**这是站着的吊灯。**

底座上有个孔——不是装饰，是为了方便搬运：穿根棍子，两个人就能抬起来。每个细节都有原因。

60年过去了，Arco 仍在生产，设计没改过一笔。`,
    
    legacy: `• 落地灯革命：证明落地灯可以替代吊灯的功能，改变了室内照明设计的思路
• 材料诚实：大理石就是大理石，钢就是钢，没有伪装，没有多余装饰
• 意大利设计标志：成为 20 世纪中期意大利设计运动的图腾之一，与 Eames、Jacobsen 齐名`,
    
    significance: `Castiglioni 兄弟证明了：最好的设计往往来自最简单的问题。

Arco 不是在炫技，它就是在解决一个具体问题——用最优雅的方式。这种"问题导向"的设计思维，影响了后来几代工业设计师。`,

    // English
    dateConnection_en: 'February 16 is Achille Castiglioni\'s birthday (1918). He was the most representative designer of Italy\'s golden age of design, winning the Compasso d\'Oro (Golden Compass) award three times.',
    
    designerBio_en: `Achille Castiglioni (1918-2002), Italian industrial design master who created countless classic designs with his brother Pier Giacomo.

He found inspiration in everyday objects. A tractor seat became a bar stool (Mezzadro), a car headlight became a lamp (Toio). He believed good design comes from **re-seeing familiar things.**

**"Start from scratch. Ordinary people accept the world as it is. Designers re-imagine it."**

His studio is now a museum in Milan, preserving the various "ordinary objects" he collected.`,
    
    story_en: `Arco's design problem was simple: how to move a light source from the floor to above the sofa—without drilling holes or installing a chandelier?

The answer is an elegant arc. The marble base provides stability (weighing 65 kg), while the stainless steel arched arm delivers the shade to over 2 meters high.

**This is a standing chandelier.**

There's a hole in the base—not decoration, but for easy transport: insert a pole and two people can carry it. Every detail has a reason.

60 years later, Arco is still in production, the design unchanged.`,
    
    legacy_en: `• Floor lamp revolution: Proved that floor lamps can replace chandeliers, changing interior lighting design thinking
• Material honesty: Marble is marble, steel is steel—no disguise, no excess decoration
• Italian design icon: Became one of the totems of mid-20th century Italian design movement, alongside Eames and Jacobsen`,
    
    significance_en: `The Castiglioni brothers proved that the best designs often come from the simplest questions.

Arco isn't showing off—it's solving a specific problem in the most elegant way. This "problem-oriented" design thinking influenced generations of industrial designers.`
  },
  {
    id: '11',
    date: '2026-02-07',
    imageUrl: '/the-daily-object/images/pinocchio-1940.jpg?v=2',
    thumbnailUrl: '/the-daily-object/images/pinocchio-1940.jpg?v=2',
    title: 'Pinocchio',
    subtitle: 'Walt Disney Studios, 1940',
    category: 'art',
    designer: 'Walt Disney Studios',
    year: '1940',
    
    dateConnection: '1940年2月7日，《匹诺曹》在纽约中心剧院首映。这部动画电影被认为是动画艺术的巅峰之作，首次赢得奥斯卡竞赛类奖项的动画长片。',
    
    designerBio: `Walt Disney Studios 在1940年代初期代表了动画艺术的最高水平。

制作团队包括超过750名艺术家：动画师、助理、布局艺术家、背景画家、特效动画师和上色人员。他们创作了超过200万幅画稿，使用了1500多种颜色。

Gustaf Tenggren 被任命为艺术指导，为影片赋予了欧洲童话书的华丽风格。Ward Kimball 创造了蟋蟀吉明尼的角色设计，将原著中的小角色变成了影片的灵魂人物。

**"Animation can explain whatever the mind of man can conceive."**
动画可以解释人类头脑所能想象的一切。——Walt Disney`,
    
    story: `1940年，《匹诺曹》首映时，二战已经在欧洲爆发。这部耗资260万美元的电影起初票房惨淡——欧洲和亚洲市场被战争切断了。

但这部电影在技术上是革命性的。它首创了**多平面摄影机**的深度使用——让背景和前景以不同速度移动，创造出前所未有的三维空间感。

水下场景、雨水、烟雾、木偶的关节运动——每一个特效都是动画历史上的第一次。当蓝仙女出现时，她的星尘效果需要特效动画师逐帧手绘每一颗闪烁的星星。

**"When You Wish Upon a Star"** 不仅赢得了奥斯卡最佳原创歌曲，还成为了迪士尼公司的永久标志曲。`,
    
    legacy: `• 动画技术革命：多平面摄影机、特效动画、角色动画的里程碑
• 奥斯卡双料冠军：首部获得竞赛类奥斯卡奖的动画长片（最佳原创音乐、最佳原创歌曲）
• 美国国家电影登记册：1994年入选，被认定为"具有文化、历史或美学重要性"
• 影响延续：成为后世所有动画电影的技术和艺术标杆`,
    
    significance: `《匹诺曹》证明了动画不只是儿童娱乐——它是一种完整的艺术形式。

电影史学家常常将它评为**有史以来技术最完美的迪士尼动画**。它不仅讲述了一个木偶变成真正男孩的故事，它本身就是一个关于"艺术如何赋予无生命的东西以生命"的隐喻。

每一帧都是手绘的艺术品。在数字时代回看，这种工艺几乎是不可思议的。`,

    dateConnection_en: 'On February 7, 1940, Pinocchio premiered at the Center Theatre in New York City. This animated film is considered the pinnacle of animation art and the first animated feature to win a competitive Academy Award.',
    
    designerBio_en: `Walt Disney Studios in the early 1940s represented the highest level of animation art.

The production team included over 750 artists: animators, assistants, layout artists, background painters, special effects animators, and ink and paint artists. They created over 2 million drawings and used more than 1,500 shades of paint.

Gustaf Tenggren was assigned as art director, giving the film the lavish European storybook style that Walt Disney envisioned. Ward Kimball created the character design for Jiminy Cricket, transforming a minor character from the original story into the film's soul.

**"Animation can explain whatever the mind of man can conceive."** — Walt Disney`,
    
    story_en: `In 1940, when Pinocchio premiered, World War II had already begun in Europe. This $2.6 million film initially flopped at the box office—European and Asian markets were cut off by war.

But the film was technically revolutionary. It pioneered the extensive use of the **multiplane camera**—making backgrounds and foregrounds move at different speeds, creating an unprecedented sense of three-dimensional space.

Underwater scenes, rain, smoke, the puppet's joint movements—every special effect was a first in animation history. When the Blue Fairy appears, her stardust effect required effects animators to hand-draw every twinkling star frame by frame.

**"When You Wish Upon a Star"** not only won the Oscar for Best Original Song but became Disney's permanent signature tune.`,
    
    legacy_en: `• Animation technology revolution: Milestones in multiplane camera, effects animation, and character animation
• Double Oscar winner: First animated feature to win competitive Academy Awards (Best Original Score, Best Original Song)
• National Film Registry: Selected in 1994 as "culturally, historically, or aesthetically significant"
• Lasting influence: Became the technical and artistic benchmark for all subsequent animated films`,
    
    significance_en: `Pinocchio proved that animation is not just children's entertainment—it is a complete art form.

Film historians often rate it as **the most technically perfect Disney animation ever made**. It not only tells the story of a puppet becoming a real boy; it is itself a metaphor for "how art gives life to the inanimate."

Every frame is a hand-drawn work of art. Looking back from the digital age, this craftsmanship is almost inconceivable.`
  },
  {
    id: '12',
    date: '2026-02-08',
    imageUrl: '/the-daily-object/images/modersohn-becker-self-portrait.jpg?v=2',
    thumbnailUrl: '/the-daily-object/images/modersohn-becker-self-portrait.jpg?v=2',
    title: 'Self-Portrait on the 6th Wedding Anniversary',
    subtitle: 'Paula Modersohn-Becker, 1906',
    category: 'art',
    designer: 'Paula Modersohn-Becker',
    year: '1906',
    
    dateConnection: '1876年2月8日，Paula Modersohn-Becker 出生于德国德累斯顿。她是表现主义先驱，也是艺术史上第一位创作裸体自画像的女性画家。',
    
    designerBio: `Paula Modersohn-Becker (1876-1907)，德国表现主义画家，创作了超过700幅油画和1000多幅素描。

她在Worpswede艺术家聚落中开始艺术生涯，但很快发现那里的传统风景画无法满足她的艺术野心。她四次前往巴黎，研习塞尚、高更和纳比派的作品，发展出简化形式和象征色彩的独特风格。

**"I am becoming somebody—I'm living the most intensively happy period of my life."**
我正在成为某个人——我正在经历生命中最强烈幸福的时期。

1906年，她离开丈夫独自前往巴黎，创作了她最重要的作品。1907年，她在产后18天因肺栓塞去世，年仅31岁。`,
    
    story: `1906年的这幅自画像是艺术史上的里程碑。

画中的Modersohn-Becker裸露上身，双手环抱腹部——暗示怀孕（尽管当时她并未怀孕）。她直视观者，没有羞怯，没有掩饰，没有任何女性裸体画传统中的"被观看"姿态。

**这是第一幅由女性画家创作的裸体自画像。**

这个事实令人震惊：在1906年，一位女性画家竟敢如此直接地呈现自己的身体，而且是以母性——而非性感——的方式。

她在巴黎的工作室里完成这幅画时，正处于人生的转折点：离开丈夫、独自生活、专注创作。画面传达出一种静谧的力量和自我认知。`,
    
    legacy: `• 女性主义艺术先驱：打破了"女性作为被描绘对象"的传统，女性成为自己身体的叙述者
• 表现主义先驱：比德国表现主义运动早了数年，影响了后来的Die Brücke和Der Blaue Reiter
• 第一座女性艺术家专属博物馆：1927年Paula Modersohn-Becker Museum在不来梅成立
• 现代母性图像：重新定义了艺术中的母性表现，影响至今`,
    
    significance: `Modersohn-Becker只活了31年，但她的作品改变了女性在艺术史中的位置。

她证明了女性可以是创作者而非仅仅是被创作的对象；身体可以是力量的源泉而非羞耻的来源；自画像可以是自我宣言而非自恋的展示。

诗人Rainer Maria Rilke——她的朋友——在她去世后写道："没有人比她更接近成为我们这个时代的伟大艺术家。"`,

    dateConnection_en: 'On February 8, 1876, Paula Modersohn-Becker was born in Dresden, Germany. She was a pioneer of Expressionism and the first known female painter in art history to create nude self-portraits.',
    
    designerBio_en: `Paula Modersohn-Becker (1876-1907), German Expressionist painter who created over 700 paintings and more than 1,000 drawings.

She began her artistic career in the Worpswede artists' colony but soon found its traditional landscape painting could not satisfy her artistic ambitions. She traveled to Paris four times, studying the works of Cézanne, Gauguin, and Les Nabis, developing a unique style of simplified forms and symbolic color.

**"I am becoming somebody—I'm living the most intensively happy period of my life."**

In 1906, she left her husband to go to Paris alone, where she created her most important works. In 1907, she died of a pulmonary embolism 18 days after giving birth, at just 31 years old.`,
    
    story_en: `This 1906 self-portrait is a milestone in art history.

In the painting, Modersohn-Becker is bare-chested, her hands encircling her belly—suggesting pregnancy (though she was not pregnant at the time). She gazes directly at the viewer, without shyness, without concealment, without any of the "being-looked-at" poses traditional in female nude painting.

**This is the first nude self-portrait created by a female painter.**

This fact is stunning: in 1906, a female painter dared to present her own body so directly, and in a maternal—not sexual—way.

She completed this painting in her Paris studio at a turning point in her life: having left her husband, living alone, focused on her work. The image conveys a quiet power and self-awareness.`,
    
    legacy_en: `• Feminist art pioneer: Broke the tradition of "woman as depicted object," women became narrators of their own bodies
• Expressionism pioneer: Preceded the German Expressionist movement by several years, influencing later Die Brücke and Der Blaue Reiter
• First museum dedicated to a female artist: Paula Modersohn-Becker Museum founded in Bremen in 1927
• Modern maternal imagery: Redefined the representation of motherhood in art, influential to this day`,
    
    significance_en: `Modersohn-Becker lived only 31 years, but her work changed women's place in art history.

She proved that women could be creators, not merely the created; that the body could be a source of power, not shame; that self-portraiture could be self-declaration, not narcissistic display.

Poet Rainer Maria Rilke—her friend—wrote after her death: "No one came closer to becoming the great artist of our time than she did."`
  },
  {
    id: '13',
    date: '2026-02-09',
    imageUrl: '/the-daily-object/images/frazetta-death-dealer.jpg?v=2',
    thumbnailUrl: '/the-daily-object/images/frazetta-death-dealer.jpg?v=2',
    title: 'Death Dealer',
    subtitle: 'Frank Frazetta, 1973',
    category: 'art',
    designer: 'Frank Frazetta',
    year: '1973',
    
    dateConnection: '1928年2月9日，Frank Frazetta 出生于纽约布鲁克林。他被称为"幻想艺术教父"，视觉定义了整个奇幻和科幻类型的美学。',
    
    designerBio: `Frank Frazetta (1928-2010)，美国艺术家，20世纪最具影响力的幻想艺术插画家。

他8岁就进入布鲁克林美术学院学习，16岁开始画漫画。1960年代，他开始为平装书创作封面画，尤其是Robert E. Howard的"野蛮人柯南"系列。他的诠释彻底重新定义了剑与魔法类型的视觉语言。

**"I didn't read any of it... I drew him my way. It was really rugged. And it caught on."**
我没读那些书……我用我的方式画他。画得很粗犷。然后它就火了。

他入选了威尔·艾斯纳漫画名人堂、杰克·科比名人堂、插画家协会名人堂和科幻名人堂。`,
    
    story: `1973年，Frazetta创作了《Death Dealer》——一个戴着角盔、骑在战马上的神秘战士，举着血淋淋的斧头。

这幅画最初没有任何故事背景。它只是Frazetta脑海中的一个形象。

**然后它引发了一个文化现象。**

美国陆军第三军采用Death Dealer作为官方吉祥物。小说家创作了系列小说。电子游戏、重金属乐队、漫画书——无数创作者从这个形象中汲取灵感。

Kirk Hammett（Metallica的吉他手）在2009年以100万美元买下了Frazetta的另一幅柯南画作。这证明了：在幻想艺术市场，Frazetta的原作是无价之宝。`,
    
    legacy: `• 幻想艺术定义者：他的风格定义了整个奇幻和科幻类型的视觉美学
• 电影影响：《野蛮人柯南》《指环王》《权力的游戏》的视觉设计都受到他的深远影响
• 原作市场：单幅原作售价可达数百万美元，是插画艺术市场的顶级藏品
• 美学遗产：每一个画角斗士、野蛮人、女战士的艺术家都在他的影子下工作`,
    
    significance: `Frazetta证明了"通俗艺术"也可以是伟大艺术。

他没有画博物馆里的静物或肖像。他画的是平装书封面、海报、唱片封套。但他的技艺——对人体解剖的理解、对光影的掌控、对动态构图的本能——不亚于任何古典大师。

在他的笔下，肌肉是活的，阴影是危险的，每一个姿态都充满能量。他让"低俗"变得崇高。`,

    dateConnection_en: 'On February 9, 1928, Frank Frazetta was born in Brooklyn, New York. He is called the "Godfather of Fantasy Art," having visually defined the aesthetic of the entire fantasy and science fiction genre.',
    
    designerBio_en: `Frank Frazetta (1928-2010), American artist and the most influential fantasy art illustrator of the 20th century.

He entered the Brooklyn Academy of Fine Arts at age 8 and began drawing comics at 16. In the 1960s, he started creating paperback book covers, especially for Robert E. Howard's Conan the Barbarian series. His interpretation completely redefined the visual language of sword and sorcery.

**"I didn't read any of it... I drew him my way. It was really rugged. And it caught on."**

He was inducted into the Will Eisner Comic Book Hall of Fame, Jack Kirby Hall of Fame, Society of Illustrators Hall of Fame, and Science Fiction Hall of Fame.`,
    
    story_en: `In 1973, Frazetta created Death Dealer—a mysterious warrior in a horned helmet riding a war horse, wielding a bloody axe.

This painting originally had no story behind it. It was just an image in Frazetta's mind.

**Then it sparked a cultural phenomenon.**

The U.S. Army III Corps adopted Death Dealer as its official mascot. Novelists created a book series. Video games, heavy metal bands, comic books—countless creators drew inspiration from this image.

Kirk Hammett (Metallica's guitarist) bought another Frazetta Conan painting for $1 million in 2009. This proves: in the fantasy art market, Frazetta originals are priceless treasures.`,
    
    legacy_en: `• Fantasy art definer: His style defined the visual aesthetic of the entire fantasy and science fiction genre
• Film influence: The visual design of Conan the Barbarian, Lord of the Rings, and Game of Thrones all bear his profound influence
• Original art market: Single original paintings can sell for millions of dollars, top collectibles in the illustration art market
• Aesthetic legacy: Every artist drawing gladiators, barbarians, and warrior women works in his shadow`,
    
    significance_en: `Frazetta proved that "popular art" can also be great art.

He didn't paint still lifes or portraits for museums. He painted paperback covers, posters, album art. But his craftsmanship—his understanding of human anatomy, mastery of light and shadow, instinct for dynamic composition—rivaled any classical master.

Under his brush, muscles are alive, shadows are dangerous, every pose bursting with energy. He made the "lowbrow" sublime.`
  },
  {
    id: '15',
    date: '2026-02-20',
    imageUrl: '/the-daily-object/images/salk-institute.jpg',
    thumbnailUrl: '/the-daily-object/images/salk-institute.jpg',
    title: 'Salk Institute for Biological Studies',
    subtitle: 'Louis Kahn, 1965',
    category: 'architecture',
    designer: 'Louis Kahn',
    year: '1965',
    
    dateConnection: '1901年2月20日，Louis Kahn 出生于爱沙尼亚（当时属于俄罗斯帝国）。他是20世纪最伟大的建筑师之一，用光与混凝土创造了现代建筑的精神殿堂。',
    
    designerBio: `Louis Kahn (1901-1974)，美国建筑师，20世纪最具影响力的建筑大师之一。

他出生于爱沙尼亚的一个贫穷犹太家庭，4岁时移民美国费城。童年时脸部被炉火严重烧伤，留下终身疤痕。他在宾夕法尼亚大学学习建筑，师从 Paul Cret。

与其他现代主义建筑师不同，Kahn 50岁之后才开始他最重要的作品。他相信建筑应该追问自身的本质——"砖想成为什么？"

**"Even a brick wants to be something."**
即使是一块砖也想成为某种东西。

他三次获得 AIA 金奖提名，获得 RIBA 皇家金奖。1974年，他在纽约宾夕法尼亚车站的洗手间里心脏病发作去世，身无分文，负债累累。`,
    
    story: `1959年，疫苗发明者 Jonas Salk 博士找到 Louis Kahn，委托他设计一座研究所。Salk 的要求很简单：

**"创造一个连毕加索都愿意来工作的地方。"**

Kahn 给出的答案是两排相对的混凝土建筑，中间是一条狭窄的水渠，直指太平洋。

建筑由清水混凝土和柚木构成。实验室是无柱的开放空间，设备管道全部藏在"服务层"里，可以灵活改变布局。建筑外立面的柚木窗框在阳光下发出温暖的光泽，与冷峻的混凝土形成对比。

**每年两次，春分和秋分，落日正好沿着中央水渠的轴线落入太平洋。**

这不是偶然。这是 Kahn 与 Luis Barragán 讨论后的设计决定——让建筑与宇宙秩序对齐。`,
    
    legacy: `• 现代建筑圣地：被建筑师们誉为"建筑朝圣地"，每年数千人前来参观
• 服务空间革命：将设备管道集中在独立楼层的做法，影响了此后所有的实验室和医院设计
• 混凝土美学：证明清水混凝土可以是温暖的、精神性的、诗意的
• 光的建筑：Kahn 对自然光的运用达到了几乎宗教性的高度`,
    
    significance: `Kahn 证明了现代建筑可以有灵魂。

在他之前，现代主义建筑常常被批评为冷漠、功能主义、缺乏精神性。Kahn 用 Salk Institute 回答了这些批评：理性的结构可以创造神圣的空间；工业材料可以传达永恒的美；功能建筑可以让人落泪。

站在中央广场上，面对无尽的太平洋和那条细细的水渠，你会明白为什么有人说：这是20世纪最伟大的建筑空间之一。`,

    dateConnection_en: 'On February 20, 1901, Louis Kahn was born in Estonia (then part of the Russian Empire). He is one of the greatest architects of the 20th century, creating spiritual temples of modern architecture with light and concrete.',
    
    designerBio_en: `Louis Kahn (1901-1974), American architect, one of the most influential architectural masters of the 20th century.

He was born into a poor Jewish family in Estonia and immigrated to Philadelphia at age 4. As a child, his face was severely burned by a stove fire, leaving permanent scars. He studied architecture at the University of Pennsylvania under Paul Cret.

Unlike other modernist architects, Kahn only began his most important works after age 50. He believed architecture should question its own essence—"What does a brick want to be?"

**"Even a brick wants to be something."**

He was nominated three times for the AIA Gold Medal and received the RIBA Royal Gold Medal. In 1974, he died of a heart attack in a restroom at New York's Penn Station, penniless and in debt.`,
    
    story_en: `In 1959, vaccine inventor Dr. Jonas Salk approached Louis Kahn to design a research institute. Salk's request was simple:

**"Create a place where even Picasso would want to work."**

Kahn's answer was two rows of facing concrete buildings with a narrow water channel between them, pointing straight at the Pacific Ocean.

The buildings are made of exposed concrete and teak. The laboratories are column-free open spaces, with all equipment and utilities hidden in "servant floors," allowing flexible layout changes. The teak window frames on the façade glow warmly in the sunlight, contrasting with the austere concrete.

**Twice a year, on the spring and autumn equinoxes, the setting sun falls exactly along the axis of the central water channel into the Pacific.**

This was not accidental. It was a design decision made after discussions between Kahn and Luis Barragán—aligning the building with cosmic order.`,
    
    legacy_en: `• Modern architecture pilgrimage site: Architects call it a "place of pilgrimage," with thousands visiting annually
• Service space revolution: The approach of concentrating utilities on separate floors influenced all subsequent laboratory and hospital design
• Concrete aesthetics: Proved that exposed concrete can be warm, spiritual, and poetic
• Architecture of light: Kahn's use of natural light achieved an almost religious dimension`,
    
    significance_en: `Kahn proved that modern architecture can have a soul.

Before him, modernist architecture was often criticized as cold, functionalist, lacking spirituality. Kahn answered these criticisms with the Salk Institute: rational structure can create sacred space; industrial materials can convey eternal beauty; functional buildings can move people to tears.

Standing in the central plaza, facing the endless Pacific and that thin channel of water, you understand why some say: this is one of the greatest architectural spaces of the 20th century.`
  },
  {
    id: '16',
    date: '2026-02-21',
    imageUrl: '/the-daily-object/images/polaroid-land-camera.jpg',
    thumbnailUrl: '/the-daily-object/images/polaroid-land-camera.jpg',
    title: 'Polaroid Land Camera Model 95',
    category: 'industrial',
    designer: 'Edwin Land',
    year: '1948',
    
    dateConnection: '1947年2月21日，Edwin Land 在美国光学学会纽约会议上首次公开演示即时摄影技术，这台相机在一年后正式发售，改变了摄影史。',
    
    designerBio: `Edwin Herbert Land (1909-1991)，美国科学家、发明家、Polaroid 公司创始人。

哈佛大学辍学生，17岁就开始研究偏振光。1937年创立 Polaroid 公司，最初生产偏光滤镜和太阳镜。

传说1943年，他3岁的女儿问："为什么不能马上看到照片？"这个问题激发了他发明即时摄影。他在一个小时的散步中就构思出了整个化学和光学系统的雏形。

Land 一生持有535项专利，仅次于爱迪生。他不只是发明家，更是一个将科学、设计与商业完美融合的人。Steve Jobs 视他为偶像，称他为"国宝级人物"。`,
    
    story: `1947年2月21日，Edwin Land 站在美国光学学会的讲台上，拍了一张照片。

60秒后，他从相机里抽出了一张完全显影的照片。

全场震惊。

这是人类历史上第一次"即时摄影"的公开演示。一年后，Polaroid Land Camera Model 95 正式发售，定价89.75美元。第一天就卖光了全部库存。

Model 95 的设计充满了工业时代的质感：棕色皮革机身、折叠式金属支架、精密的光学镜头。它不追求小巧——展开后像一只准备起飞的鸟，收起来像一本厚重的书。

这台相机的革命性不在于外形，而在于它背后的哲学：**摄影不应该是等待和延迟的体验，它应该是即时的、亲密的、属于当下的。**`,
    
    legacy: `● 即时摄影文化：Polaroid 不仅是相机，更是一种文化符号，从 Andy Warhol 到日常家庭，人人都用 Polaroid 记录生活
● 影响 Steve Jobs：Jobs 多次公开表示 Edwin Land 是他最崇拜的人，Polaroid 的"科技+人文"理念直接影响了 Apple 的产品哲学
● 设计范式：Model 95 确立了"折叠式"相机的经典设计语言，影响了此后数十年的相机工业设计
● 复兴浪潮：2008年 Polaroid 停产胶片后，"The Impossible Project"（现 Polaroid Originals）让即时摄影重获新生`,
    
    significance: `Model 95 证明了一件事：**最伟大的设计不是让技术更复杂，而是让复杂的技术消失。**

在 Land 之前，摄影是一个需要暗房、化学药剂和耐心等待的专业活动。Model 95 把这一切浓缩成了"按下快门，等60秒"。

这和后来 iPhone 做的事情一模一样——把电话、相机、电脑、音乐播放器合成一个东西，让技术的复杂性在用户面前完全消失。

难怪 Steve Jobs 说："Edwin Land 是一个国宝。他是科学和人文的交叉路口上最伟大的创新者之一。"

**一个好问题，可以改变世界。"为什么不能马上看到照片？"——这个3岁女孩的问题，价值数十亿美元。**`,

    dateConnection_en: 'On February 21, 1947, Edwin Land publicly demonstrated instant photography for the first time at the Optical Society of America meeting in New York. The camera went on sale a year later and changed the history of photography.',
    
    designerBio_en: `Edwin Herbert Land (1909-1991), American scientist, inventor, and founder of the Polaroid Corporation.

A Harvard dropout, he began researching polarized light at age 17. He founded Polaroid in 1937, initially producing polarizing filters and sunglasses.

Legend has it that in 1943, his 3-year-old daughter asked: "Why can't I see the picture right away?" This question inspired him to invent instant photography. During a single hour-long walk, he conceived the entire chemical and optical system.

Land held 535 patents in his lifetime, second only to Edison. He was not just an inventor but someone who perfectly fused science, design, and commerce. Steve Jobs idolized him, calling him "a national treasure."`,
    
    story_en: `On February 21, 1947, Edwin Land stood at the podium of the Optical Society of America, took a photograph.

60 seconds later, he pulled a fully developed print from the camera.

The audience was stunned.

This was the first public demonstration of "instant photography" in human history. A year later, the Polaroid Land Camera Model 95 went on sale for $89.75. It sold out completely on the first day.

The Model 95's design was full of industrial-era character: brown leather body, folding metal struts, precision optical lens. It didn't strive for compactness—unfolded, it looked like a bird ready to take flight; closed, like a hefty book.

The revolution of this camera wasn't in its form, but in the philosophy behind it: **Photography should not be an experience of waiting and delay. It should be instant, intimate, and belong to the present moment.**`,
    
    legacy_en: `● Instant photography culture: Polaroid became more than a camera—a cultural icon, from Andy Warhol to everyday families, everyone used Polaroid to capture life
● Influenced Steve Jobs: Jobs publicly stated multiple times that Edwin Land was his greatest hero; Polaroid's "technology + humanities" philosophy directly influenced Apple's product design
● Design paradigm: Model 95 established the classic "folding" camera design language, influencing decades of camera industrial design
● Revival: After Polaroid discontinued film in 2008, "The Impossible Project" (now Polaroid Originals) brought instant photography back to life`,
    
    significance_en: `Model 95 proved one thing: **The greatest design doesn't make technology more complex—it makes complex technology disappear.**

Before Land, photography was a professional activity requiring darkrooms, chemicals, and patient waiting. Model 95 condensed all of this into "press the shutter, wait 60 seconds."

This is exactly what the iPhone did later—combining phone, camera, computer, and music player into one device, making technological complexity completely invisible to the user.

No wonder Steve Jobs said: "Edwin Land was a national treasure. He was one of the greatest innovators at the intersection of science and the humanities."

**A good question can change the world. "Why can't I see the picture right away?"—that 3-year-old girl's question was worth billions of dollars.**`
  },
  {
    id: '18',
    date: '2026-02-22',
    imageUrl: '/the-daily-object/images/cleopatras-needle.jpg',
    thumbnailUrl: '/the-daily-object/images/cleopatras-needle.jpg',
    title: 'Cleopatra\'s Needle',
    subtitle: 'Ancient Egypt → New York, 1461 BC / 1881',
    category: 'architecture',
    designer: 'Thutmose III',
    year: '1461 BC',
    
    dateConnection: '1881年2月22日，这座3500年历史的埃及方尖碑在纽约中央公园正式竖立。它是人类历史上最大规模的古物迁移工程之一——从亚历山大港跨越大西洋来到曼哈顿。',
    
    designerBio: `这座方尖碑由法老图特摩斯三世（Thutmose III）下令建造于公元前1461年，最初矗立在古埃及赫利奥波利斯（太阳城）的神庙前。

它高21米，重224吨，整块红色花岗岩雕刻而成。四面刻满象形文字，记录着法老的功绩。后来拉美西斯二世在上面又加刻了自己的铭文——这在古埃及是常见操作，相当于在别人的作品上署自己的名。

公元前12年，罗马人将它从赫利奥波利斯搬到亚历山大港，矗立在凯撒神庙前。在那里，它又站了近两千年。`,
    
    story: `1869年，埃及赫迪夫伊斯梅尔·帕夏为了拉拢美国的政治支持，将这座方尖碑作为礼物赠送给美国。但没人知道怎么把一块224吨的石头从非洲运到纽约。

1879年，美国海军中尉亨利·戈林奇（Henry Gorringe）接下了这个不可能的任务。他先在亚历山大港把方尖碑从底座上放倒——光这一步就花了数月。然后他特制了一艘蒸汽船，在船体上开了一个洞，把方尖碑塞进船舱。

112天的海上航行后，方尖碑抵达纽约。接下来是更疯狂的部分：从哈德逊河码头到中央公园，全程靠蒸汽机和铁轨，以每天30米的速度推进。整个搬运过程耗时近四个月。

**1881年2月22日**——华盛顿诞辰日——方尖碑在中央公园正式竖立。近万人到场见证。一座在尼罗河畔站了3000多年的石碑，现在站在了曼哈顿的树丛之间。`,

    legacy: `Cleopatra's Needle 是19世纪"方尖碑热"的巅峰。伦敦（1878年）和巴黎（卢克索方尖碑，1833年）都得到了自己的埃及方尖碑，但纽约的运输工程最为壮观。

**对设计的影响：**

**纪念碑美学**：华盛顿纪念碑（1884年完工）的方尖碑造型直接受到了埃及方尖碑热的影响
**Art Deco 运动**：1920年代图坦卡蒙墓的发现引发"埃及复兴"风格，克莱斯勒大厦等建筑大量使用埃及元素
**公共艺术**：它证明了古代艺术品可以在全新的城市语境中获得新生命

但纽约的气候正在摧毁它。3500年来在干燥的沙漠中保存完好的象形文字，在纽约的酸雨和冻融循环下严重风化。这座方尖碑在纽约的140年里受到的损害，超过了它在埃及的3000年。`,
    
    significance: `一座3500年前的设计作品，至今仍然是中央公园最引人注目的地标之一。

**方尖碑是人类最古老的"极简设计"。** 一整块石头，一个简单的几何形——底宽顶尖的四棱锥体。没有多余的装饰结构，形式就是内容。它的力量来自纯粹的比例和材料的诚实。

3500年过去了，我们仍然在用同样的设计原则：**一个强有力的形式，一种诚实的材料，足矣。**

它也提出了一个永恒的设计问题：当你把一件作品从它原本的语境中抽离，放到一个完全不同的环境里——它还是同一件作品吗？`,

    dateConnection_en: 'February 22, 1881 — This 3,500-year-old Egyptian obelisk was officially erected in New York\'s Central Park. It was one of the largest ancient artifact relocations in history — crossing the Atlantic from Alexandria to Manhattan.',
    
    designerBio_en: `Commissioned by Pharaoh Thutmose III around 1461 BC, this obelisk originally stood before the Temple of the Sun in ancient Heliopolis, Egypt.

Standing 21 meters tall and weighing 224 tons, it was carved from a single block of red granite. All four faces are covered in hieroglyphs recording the pharaoh's achievements. Ramesses II later added his own inscriptions — a common practice in ancient Egypt, essentially signing someone else's work.

In 12 BC, the Romans moved it from Heliopolis to Alexandria, where it stood before the Temple of Caesar for nearly two thousand more years.`,
    
    story_en: `In 1869, Egyptian Khedive Ismail Pasha gifted the obelisk to the United States to curry political favor. But nobody knew how to transport a 224-ton stone from Africa to New York.

In 1879, US Navy Lieutenant Henry Gorringe took on the impossible task. First, he spent months lowering the obelisk from its pedestal in Alexandria. Then he had a custom steamship built with a hole cut in its hull to fit the obelisk inside.

After 112 days at sea, it arrived in New York. The next phase was even more audacious: from the Hudson River pier to Central Park, the obelisk traveled on steam engines and rails at roughly 30 meters per day. The entire ground transport took nearly four months.

On February 22, 1881 — George Washington's birthday — the obelisk was officially erected in Central Park before a crowd of nearly ten thousand. A stone that had stood by the Nile for over 3,000 years now stood among Manhattan's trees.`,
    
    legacy_en: `Cleopatra's Needle was the pinnacle of the 19th-century "obelisk craze." London (1878) and Paris (the Luxor Obelisk, 1833) both received their own Egyptian obelisks, but New York's transport engineering was the most spectacular.

The Washington Monument (completed 1884) drew directly from obelisk fever. The 1920s "Egyptian Revival" style, triggered by the discovery of Tutankhamun's tomb, influenced Art Deco landmarks like the Chrysler Building.

But New York's climate is destroying it. Hieroglyphs preserved perfectly for 3,500 years in the dry desert have been severely weathered by acid rain and freeze-thaw cycles. The obelisk has suffered more damage in 140 years in New York than in 3,000 years in Egypt.`,
    
    significance_en: `A 3,500-year-old design that remains one of Central Park's most striking landmarks.

The obelisk is humanity's oldest "minimalist design." A single block of stone, one simple geometric form — a quadrilateral pyramid tapering from base to tip. No superfluous structural decoration; form is content. Its power comes from pure proportion and material honesty.

3,500 years later, we still use the same design principles: one powerful form, one honest material, enough.

It also poses an eternal design question: when you remove a work from its original context and place it in an entirely different environment — is it still the same work?`
  },
  {
    id: '19',
    date: '2026-02-23',
    imageUrl: '/the-daily-object/images/gutenberg-bible.jpg',
    thumbnailUrl: '/the-daily-object/images/gutenberg-bible.jpg',
    title: 'Gutenberg Bible',
    subtitle: 'Johannes Gutenberg, c. 1455',
    category: 'graphic',
    designer: 'Johannes Gutenberg',
    year: 'c. 1455',
    
    dateConnection: '1455年2月23日被认为是古腾堡圣经的出版日期——西方世界第一本用活字印刷术印制的书籍。这一天标志着人类传播史上最深刻的革命：知识不再是手抄的奢侈品，而成为可以批量生产的民主化载体。',
    
    designerBio: `约翰内斯·古腾堡（Johannes Gutenberg，约1400-1468），出生于德国美因茨，金匠出身。他花了近20年时间，将金属铸造、油墨调配、压榨技术融合成一套完整的活字印刷系统。

他的突破不是"发明活字"——中国的毕昇在11世纪就发明了泥活字。古腾堡的天才在于**系统设计**：他发明了手持铸字模具（hand mold），可以快速、精确地批量铸造金属活字；他调配出油基墨水替代水基墨水，使字迹更清晰持久；他改造了葡萄酒压榨机，变成了印刷机。

每一项单独看都不算惊天动地，但组合在一起，就成了改变世界的系统。这是真正的**设计思维**——不是发明一个零件，而是设计一整套工作流程。`,
    
    story: `古腾堡圣经的印制花了大约两年（1453-1455）。180份，其中约135份印在纸上，45份印在更昂贵的羊皮纸上——每份羊皮纸版需要170张小牛皮。

但真正让设计师着迷的不是产量，而是**排版质量**。古腾堡追求的目标是：印刷品必须和手抄本一样美。

他设计了290个不同的字符——远超26个字母。因为中世纪手抄本中有大量的连字（ligature）、缩写符号和变体字形，古腾堡全部复刻了。他甚至在同一行中微调字母间距，使右边距完美对齐（justified），这种精确度直到数字排版时代才被超越。

每页42行，双栏排列。页面比例接近黄金比例。文字区域与页边距的关系遵循中世纪抄本的经典构图法则——这套法则后来被扬·奇肖尔德（Jan Tschichold）在20世纪重新发现并命名为"范德格拉夫准则"（Van de Graaf canon）。

**一个讽刺的结局**：古腾堡在圣经完成前就因为债务纠纷失去了自己的印刷作坊。投资人约翰·福斯特（Johann Fust）通过诉讼夺走了设备，并与古腾堡的学徒彼得·舍费尔（Peter Schöffer）继续经营。改变世界的人，没有从中获利。`,

    legacy: `古腾堡圣经现存49本（其中21本完整），是世界上最珍贵的书籍之一。2009年被联合国教科文组织列入世界记忆名录。

**对设计的影响：**

**字体设计的起点**：古腾堡的 Textura 哥特体直接催生了后来的字体设计传统。从 Garamond 到 Helvetica，所有西方字体的源头都可以追溯到这里。

**网格系统的先驱**：古腾堡圣经的42行双栏版式，是有据可查的最早的系统化排版网格之一。约瑟夫·穆勒-布罗克曼（Josef Müller-Brockmann）在《网格系统》中专门提到了中世纪抄本的版式传统。

**"看不见的设计"的典范**：古腾堡的最高追求是让印刷品看起来像手抄本——好的设计不彰显自己，而是服务于内容。这个理念贯穿了整部平面设计史。

印刷术在古腾堡之后的50年内传遍整个欧洲。到1500年，已经有超过2000万册书被印刷。这直接推动了文艺复兴、宗教改革和科学革命。`,
    
    significance: `一本571年前的书，至今仍然是排版设计的教科书。

**古腾堡圣经不只是一本书，它是人类第一个"用户界面"。** 在此之前，书是给精英看的奢侈品；在此之后，书是给所有人看的工具。古腾堡面临的设计挑战和今天的 UI 设计师一模一样：如何让信息清晰、美观、高效地到达用户？

42行、双栏、黄金比例的页面——这些不是偶然的选择，而是深思熟虑的信息架构。571年后，我们的屏幕上仍然在用栏、网格、字体层级。

**技术改变了，设计问题没有变。**`,

    dateConnection_en: 'February 23, 1455 is traditionally recognized as the publication date of the Gutenberg Bible — the first major book printed with movable metal type in the Western world. This date marks the most profound revolution in the history of human communication: knowledge ceased to be a hand-copied luxury and became a mass-producible, democratized medium.',
    
    designerBio_en: `Johannes Gutenberg (c. 1400–1468), born in Mainz, Germany, was a goldsmith by trade. He spent nearly two decades combining metalcasting, ink formulation, and press engineering into a complete movable type printing system.

His breakthrough wasn't "inventing movable type" — Bi Sheng in China had created ceramic movable type in the 11th century. Gutenberg's genius was in systems design: he invented the hand mold for rapid, precise mass-production of metal type; he formulated oil-based ink to replace water-based ink for sharper, more durable impressions; he adapted the wine press into a printing press.

No single component was revolutionary on its own, but together they became a world-changing system. This is true design thinking — not inventing one part, but designing an entire workflow.`,
    
    story_en: `The Gutenberg Bible took roughly two years to print (1453–1455). 180 copies were produced — approximately 135 on paper and 45 on the more expensive vellum, each requiring 170 calfskins.

But what truly fascinates designers isn't the output — it's the typographic quality. Gutenberg's goal was that printed pages must be as beautiful as manuscripts.

He designed 290 different characters — far beyond 26 letters. Medieval manuscripts used extensive ligatures, abbreviations, and variant glyphs, and Gutenberg replicated them all. He even micro-adjusted letter spacing within lines to achieve perfect right-margin justification — a level of precision not surpassed until the digital typesetting era.

Each page has 42 lines in two columns. The page proportions approximate the golden ratio. The relationship between text area and margins follows the classic composition rules of medieval codices — rules later rediscovered and named the "Van de Graaf canon" by Jan Tschichold in the 20th century.

A cruel irony: Gutenberg lost his own printing workshop to a debt dispute before the Bible was even finished. Investor Johann Fust sued and seized the equipment, continuing the business with Gutenberg's apprentice Peter Schöffer. The man who changed the world never profited from it.`,
    
    legacy_en: `49 copies of the Gutenberg Bible survive today (21 complete), making it one of the world's most precious books. It was inscribed in the UNESCO Memory of the World Register in 2009.

Gutenberg's Textura blackletter directly spawned the Western typeface design tradition. From Garamond to Helvetica, every Western typeface traces its lineage here.

The 42-line, two-column layout is one of the earliest documented systematic typographic grids. Josef Müller-Brockmann specifically referenced medieval manuscript layout traditions in his seminal "Grid Systems."

It exemplifies "invisible design" — Gutenberg's highest aspiration was making printed pages look like manuscripts. Good design doesn't announce itself; it serves the content. This principle runs through the entire history of graphic design.

Within 50 years of Gutenberg, printing had spread across all of Europe. By 1500, over 20 million books had been printed, directly fueling the Renaissance, the Reformation, and the Scientific Revolution.`,
    
    significance_en: `A book from 571 years ago that remains a textbook in typographic design.

The Gutenberg Bible isn't just a book — it's humanity's first "user interface." Before it, books were luxuries for elites; after it, books were tools for everyone. Gutenberg faced the same design challenge as today's UI designers: how to deliver information to users clearly, beautifully, and efficiently.

42 lines, two columns, golden-ratio pages — these weren't accidental choices but deliberate information architecture. 571 years later, our screens still use columns, grids, and typographic hierarchy.

The technology changed. The design problems didn't.`
  },

  {
    id: '20',
    date: '2026-02-24',
    imageUrl: '/the-daily-object/images/nike-air-force-1.jpg',
    thumbnailUrl: '/the-daily-object/images/nike-air-force-1.jpg',
    title: 'Nike Air Force 1',
    subtitle: 'Bruce Kilgore / Nike, 1982',
    category: 'industrial',
    designer: 'Bruce Kilgore',
    year: '1982',
    
    dateConnection: '1938年2月24日，Phil Knight 出生于俄勒冈州波特兰。1964年，他与田径教练 Bill Bowerman 共同创立了 Blue Ribbon Sports，后更名为 Nike。Knight 不是设计师，但他建立了一家以设计为核心竞争力的公司——从 Carolyn Davidson 的 Swoosh 标志到 Tinker Hatfield 的 Air Jordan 系列，Nike 证明了运动鞋可以是工业设计的最高表达。',
    
    designerBio: `Bruce Kilgore 是 Nike Air Force 1 的设计师，也是将 Nike Air 气垫技术首次引入篮球鞋的人。他1982年的设计彻底改写了运动鞋的定义。

但 Nike 的设计基因要追溯到更早。联合创始人 Bill Bowerman 是一个痴迷于跑鞋的田径教练，他用妻子的华夫饼机浇铸橡胶，发明了传奇的华夫底（Waffle Sole）——这个故事成了设计创新的经典案例：最好的设计灵感往往来自最意想不到的地方。

1971年，平面设计专业学生 Carolyn Davidson 以35美元的价格设计了 Swoosh 标志。Phil Knight 当时说"我不喜欢它，但也许会慢慢习惯。"这个35美元的设计后来成为世界上最有辨识度的商标之一。`,
    
    story: `Air Force 1 诞生于1982年，是第一双搭载 Nike Air 气垫的篮球鞋。Bruce Kilgore 的设计突破不只是技术层面——他重新定义了一双鞋可以是什么。

圆形的外底设计灵感来自古罗马建筑的拱门结构，将力学原理应用到鞋底，让穿着者可以更灵活地做出快速转身动作。鞋面的简洁线条在当时的篮球鞋中独树一帜——那个年代的球鞋普遍追求复杂的结构和夸张的支撑，Kilgore 却选择了克制与优雅。

Air Force 1 最初只生产了一年就停产了。但它在街头文化中获得了第二次生命。1986年，巴尔的摩的三家运动鞋店说服 Nike 重新生产这款鞋——这是 Nike 历史上第一次"复刻"（Retro）。这个决定开创了球鞋文化的一个全新范式：一双运动鞋可以超越功能，成为文化符号。

纯白色的 Air Force 1（"White-on-White"）成为嘻哈文化的标志。Nelly 在2002年专门为它写了一首歌《Air Force Ones》。从纽约的篮球场到东京的潮流店，从说唱歌手到时装设计师，AF1 成了跨越阶层、种族和地域的通用语言。

截至今天，Air Force 1 已经推出超过2000个配色版本，累计销售超过数亿双。它是历史上最畅销的运动鞋，没有之一。`,

    legacy: `Nike Air Force 1 对设计界的影响远超运动鞋领域：

**球鞋文化的起点**：AF1 的复刻开创了"经典重生"的商业模式，直接催生了今天价值数十亿美元的球鞋转售市场和潮流文化。Supreme、Off-White、Travis Scott——所有球鞋联名的源头都可以追溯到 AF1。

**设计民主化**：Nike 后来推出了 Nike By You（原 NikeID），让消费者可以定制自己的 AF1 配色。这比"大规模定制"（Mass Customization）这个概念流行早了二十年。

**跨界设计的先驱**：Virgil Abloh 的 Off-White × Nike "The Ten" 系列（2017）将 AF1 解构重组，模糊了运动鞋、时装和当代艺术的边界。这种跨界合作模式影响了整个消费品设计行业。

**Swoosh 的设计传奇**：Carolyn Davidson 的35美元 Swoosh 后来被认为是史上最成功的标志设计之一。Nike 在1983年送给她一枚钻石 Swoosh 戒指和公司股票作为补偿——按今天的市值计算，这些股票价值数百万美元。`,
    
    significance: `一双1982年的篮球鞋，如何成为21世纪最具影响力的工业设计产品？

答案藏在 Phil Knight 的创业哲学里：**不要卖产品，要讲故事。** Nike 从来不只是一家运动鞋公司——它是一家设计公司，一家营销公司，一家文化公司。Air Force 1 的成功证明了一个设计真理：**最好的产品设计不是在解决问题，而是在创造意义。**

当 Bruce Kilgore 画出 AF1 的第一张草图时，他设计的是一双篮球鞋。四十多年后，全世界的人穿着它上班、约会、参加时装周。一个产品从"工具"变成"图腾"，这就是设计的终极力量。`,

    dateConnection_en: 'February 24, 1938 marks the birth of Phil Knight in Portland, Oregon. In 1964, he co-founded Blue Ribbon Sports with track coach Bill Bowerman, later renamed Nike. Knight wasn\'t a designer, but he built a company where design was the core competitive advantage — from Carolyn Davidson\'s Swoosh to Tinker Hatfield\'s Air Jordan line, Nike proved that athletic footwear could be the highest expression of industrial design.',
    
    designerBio_en: `Bruce Kilgore designed the Nike Air Force 1, becoming the first person to integrate Nike Air cushioning into a basketball shoe. His 1982 design fundamentally redefined what a sneaker could be.

But Nike's design DNA goes back further. Co-founder Bill Bowerman was a track coach obsessed with running shoes who poured rubber into his wife's waffle iron, inventing the legendary Waffle Sole — a story that became a classic case study in design innovation: the best design inspiration often comes from the most unexpected places.

In 1971, graphic design student Carolyn Davidson designed the Swoosh logo for $35. Phil Knight said at the time, "I don't love it, but maybe it will grow on me." That $35 design became one of the most recognizable trademarks in the world.`,
    
    story_en: `The Air Force 1 was born in 1982 as the first basketball shoe featuring Nike Air cushioning. Bruce Kilgore's breakthrough wasn't just technical — he redefined what a shoe could be.

The circular outsole design was inspired by Roman architectural arches, applying structural engineering principles to a shoe sole for enhanced pivot movement. The clean upper lines were unprecedented among basketball shoes of that era — when most court shoes pursued complex structures and exaggerated support, Kilgore chose restraint and elegance.

The Air Force 1 was initially produced for just one year before being discontinued. But it found a second life in street culture. In 1986, three Baltimore sneaker stores convinced Nike to reproduce the shoe — Nike's first-ever "Retro." This decision created an entirely new paradigm in sneaker culture: an athletic shoe could transcend function and become a cultural symbol.

The all-white Air Force 1 ("White-on-White") became an icon of hip-hop culture. Nelly wrote an entire song about it in 2002 — "Air Force Ones." From New York basketball courts to Tokyo boutiques, from rappers to fashion designers, the AF1 became a universal language that crossed class, race, and geography.

To date, the Air Force 1 has been released in over 2,000 colorways with cumulative sales in the hundreds of millions of pairs. It is the best-selling sneaker in history, bar none.`,
    
    legacy_en: `The Nike Air Force 1's influence extends far beyond athletic footwear:

**The birth of sneaker culture**: The AF1's retro release pioneered the "classic revival" business model, directly spawning today's multi-billion-dollar sneaker resale market and streetwear culture. Supreme, Off-White, Travis Scott — every sneaker collaboration traces its lineage to the AF1.

**Design democratization**: Nike later launched Nike By You (formerly NikeID), letting consumers customize their own AF1 colorways. This predated the "mass customization" concept by two decades.

**Cross-disciplinary design pioneer**: Virgil Abloh's Off-White × Nike "The Ten" collection (2017) deconstructed and reassembled the AF1, blurring the boundaries between sneakers, fashion, and contemporary art. This collaborative model influenced the entire consumer product design industry.

**The Swoosh legend**: Carolyn Davidson's $35 Swoosh is now considered one of the most successful logo designs in history. In 1983, Nike gave her a diamond Swoosh ring and company stock as compensation — at today's valuation, those shares would be worth millions of dollars.`,
    
    significance_en: `How did a 1982 basketball shoe become the most influential industrial design product of the 21st century?

The answer lies in Phil Knight's founding philosophy: don't sell products, tell stories. Nike was never just a sneaker company — it's a design company, a marketing company, a culture company. The Air Force 1's success proves a design truth: the best product design doesn't solve problems — it creates meaning.

When Bruce Kilgore sketched the first AF1 draft, he was designing a basketball shoe. Four decades later, people worldwide wear it to work, on dates, and to fashion week. When a product transforms from "tool" to "totem" — that is the ultimate power of design.`
  },

  {
    id: '21',
    date: '2026-02-25',
    imageUrl: '/the-daily-object/images/royal-crescent.jpg',
    thumbnailUrl: '/the-daily-object/images/royal-crescent.jpg',
    title: 'Royal Crescent',
    subtitle: 'John Wood the Younger, 1774',
    category: 'architecture',
    designer: 'John Wood the Younger',
    year: '1774',
    
    dateConnection: '1728年2月25日，英国建筑师 John Wood the Younger 出生于巴斯。他继承父亲 John Wood the Elder 的城市规划愿景，设计了被誉为英国乔治亚时代建筑最高成就的 Royal Crescent——一条由30栋联排住宅组成的弧形建筑群，将古罗马的圆形剧场语言转化为住宅建筑的壮丽诗篇。',
    
    designerBio: `John Wood the Younger（1728-1782）是英国乔治亚时代最重要的建筑师之一。他的父亲 John Wood the Elder 是巴斯城市改造的奠基人，设计了 Queen Square 和 The Circus——一个参照罗马斗兽场内立面的圆形广场。

父亲在 The Circus 尚未完工时便于1754年去世，年仅26岁的小伍德接手了项目，并在完成父亲遗作后，创作了自己的巅峰之作：Royal Crescent。

小伍德的天才在于，他没有简单地复制父亲的语言。The Circus 是向内的、封闭的，像一个私密的内院；而 Royal Crescent 是向外的、开放的，面向广阔的草坪和远方的风景。父与子，圆与弧，内与外——这对建筑父子完成了巴斯城市空间最完美的对话。`,
    
    story: `Royal Crescent 建于1767年至1774年间，由30栋联排住宅排列成一个巨大的半月形弧线，全长150米。它的正立面由114根爱奥尼亚柱统一支撑，形成一道宏伟的柱廊——从远处看，这不像30栋独立的房子，而像一座完整的宫殿。

这就是它最伟大的设计创新：**统一的城市立面**（Unified Urban Facade）。在 Royal Crescent 之前，住宅就是住宅，每栋房子有自己的门面。Wood the Younger 提出了一个革命性的想法——让私人住宅共享一个公共的建筑表情，让个体服从整体，让城市美学凌驾于个人趣味之上。

这个理念深刻影响了后来的城市规划。从巴黎的奥斯曼大道到伦敦的摄政街，从圣彼得堡的宫殿广场到纽约的中央公园西大道，"统一立面"成为了塑造城市天际线和街道美学的核心手法。

Royal Crescent 的选址同样精妙。它坐落在一个缓坡之上，面朝南方，前方是开阔的草坪（Royal Victoria Park）。弧形的设计让每一栋住宅都享有几乎相同的景观视野和日照条件——这是18世纪对"公平设计"的一次优雅实践。`,

    legacy: `Royal Crescent 对建筑和城市设计的影响延续至今：

**城市设计的典范**：它证明了住宅建筑可以承担城市美学的使命。今天城市规划中的"设计导则"（Design Guidelines）——对建筑高度、材料、立面风格的统一要求——其思想源头可以直接追溯到 Wood 的巴斯实验。

**场所精神（Genius Loci）的营造**：Royal Crescent 不是孤立的建筑，而是与 The Circus、Gay Street、Queen Square 共同构成的一个完整城市叙事。从方形到圆形到弧形，从封闭到开放，建筑空间像音乐一样展开。这种"建筑序列"（Architectural Sequence）的设计思维影响了从 Le Corbusier 到 Tadao Ando 的无数建筑师。

**遗产保护的标杆**：1987年，巴斯整座城市被列入联合国教科文组织世界遗产名录，Royal Crescent 是其中最核心的建筑。它是英国建筑遗产保护运动的重要推动力。

**巴斯石的美学**：整个 Crescent 使用当地开采的巴斯石（Bath Stone）建造，这种蜜色的石灰岩在不同光线下呈现出温暖的金黄色调——日出时橘红，正午时淡金，日落时琥珀。建筑与材料的完美融合，让 Royal Crescent 成为"在对的地方用对的材料"这一建筑原则的经典案例。`,
    
    significance: `为什么一座248年前的住宅建筑群今天依然重要？

因为 John Wood the Younger 回答了一个永恒的设计问题：**个体与集体，如何在空间中共存？**

Royal Crescent 的30栋住宅，每一栋内部都完全不同——业主可以自由装修自己的房子。但从外面看，它们是一个整体，一道优雅的弧线，一首用石头写成的交响乐。

这种"外部统一、内部自由"的设计哲学，今天被用在从手机界面到城市天际线的一切设计中。Apple 的 iOS 有统一的设计语言，但每个 App 内部有自己的个性。城市有统一的街道肌理，但每栋建筑有自己的灵魂。

Wood 在250年前就明白了：**好的设计不是消灭个性，而是创造一个让个性得以优雅共存的框架。**`,

    dateConnection_en: 'February 25, 1728 marks the birth of English architect John Wood the Younger in Bath. He inherited his father John Wood the Elder\'s vision for urban planning and designed what is considered the crowning achievement of Georgian architecture — the Royal Crescent, a sweeping arc of 30 terraced houses that translated the language of Roman amphitheaters into a magnificent residential composition.',
    
    designerBio_en: `John Wood the Younger (1728-1782) was one of the most important architects of the Georgian era. His father, John Wood the Elder, laid the foundation for Bath's urban transformation, designing Queen Square and The Circus — a circular plaza modeled after the interior facade of the Roman Colosseum.

When his father died in 1754 before The Circus was completed, the 26-year-old younger Wood took over the project. After finishing his father's work, he created his own masterpiece: the Royal Crescent.

Wood the Younger's genius lay in not simply replicating his father's vocabulary. The Circus is inward-facing and enclosed, like a private courtyard; the Royal Crescent is outward-facing and open, looking onto expansive lawns and distant landscapes. Father and son, circle and arc, interior and exterior — this architectural father-son duo completed the most perfect spatial dialogue in Bath.`,
    
    story_en: `The Royal Crescent was built between 1767 and 1774, comprising 30 terraced houses arranged in a grand crescent spanning 150 meters. Its facade is unified by 114 Ionic columns forming a majestic colonnade — from a distance, it doesn't look like 30 individual houses but rather a single palace.

This was its greatest design innovation: the **Unified Urban Facade**. Before the Royal Crescent, a house was just a house, each with its own frontage. Wood the Younger proposed a revolutionary idea — private residences sharing a public architectural expression, individuals subordinate to the whole, urban aesthetics elevated above personal taste.

This concept profoundly influenced subsequent urban planning. From Haussmann's boulevards in Paris to Regent Street in London, from the Palace Square in St. Petersburg to Central Park West in New York, the "unified facade" became a core technique for shaping city skylines and street aesthetics.

The siting was equally masterful. The Crescent sits on a gentle slope, facing south, with open lawns (Royal Victoria Park) stretching before it. The curved design ensures nearly every house enjoys the same views and sunlight — an elegant 18th-century exercise in equitable design.`,
    
    legacy_en: `The Royal Crescent's influence on architecture and urban design endures:

**A paradigm for urban design**: It proved that residential architecture could serve an urban aesthetic mission. Today's urban "Design Guidelines" — unified requirements for building height, materials, and facade style — trace their intellectual origins directly to Wood's Bath experiment.

**Crafting Genius Loci**: The Royal Crescent isn't an isolated building but part of a complete urban narrative with The Circus, Gay Street, and Queen Square. From square to circle to crescent, from enclosed to open, architectural spaces unfold like music. This "Architectural Sequence" thinking influenced countless architects from Le Corbusier to Tadao Ando.

**A benchmark for heritage conservation**: In 1987, the entire city of Bath was inscribed as a UNESCO World Heritage Site, with the Royal Crescent at its core. It became a driving force behind Britain's architectural heritage conservation movement.

**The aesthetics of Bath Stone**: The entire Crescent is built from locally quarried Bath Stone, a honey-colored limestone that shifts through warm golden hues in changing light — orange-red at dawn, pale gold at noon, amber at sunset. This perfect fusion of building and material makes the Royal Crescent a textbook example of using the right material in the right place.`,
    
    significance_en: `Why does a 248-year-old residential complex still matter today?

Because John Wood the Younger answered an eternal design question: how can the individual and the collective coexist in space?

Each of the Royal Crescent's 30 houses is completely different inside — owners were free to decorate as they wished. But from the outside, they form a unified whole, an elegant arc, a symphony written in stone.

This philosophy of "external unity, internal freedom" is applied today in everything from phone interfaces to city skylines. Apple's iOS has a unified design language, yet each app has its own personality. Cities have consistent street textures, yet each building has its own soul.

Wood understood 250 years ago what remains true today: good design doesn't eliminate individuality — it creates a framework where individuality can coexist with grace.`
  },

]
