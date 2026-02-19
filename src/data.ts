export interface DesignObject {
  id: string
  date: string
  imageUrl: string
  thumbnailUrl?: string
  title: string
  subtitle?: string // 设计师 + 年份
  category: 'industrial' | 'software' | 'music' | 'art' | 'architecture'
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
    id: '7',
    date: '2026-02-13',
    imageUrl: '/the-daily-object/images/panton-chair.jpg',
    thumbnailUrl: '/the-daily-object/images/panton-chair.jpg',
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
]
