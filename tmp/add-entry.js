const fs = require('fs');
const path = 'src/data.ts';
let content = fs.readFileSync(path, 'utf8');

const entry = `  {
    id: '171',
    date: '2026-06-20',
    imageUrl: '/the-daily-object/images/jaws-poster.jpg',
    fullImageUrl: '/the-daily-object/images/full/jaws-poster.jpg',
    title: 'Jaws 电影海报',
    title_en: 'Jaws Movie Poster',
    subtitle: 'Roger Kastel, 1975',
    subtitle_en: 'Roger Kastel, 1975',
    category: 'graphic' as const,
    designer: 'Roger Kastel',
    year: '1975',
    tags: ['定义了恐惧美学', '史上最iconic海报', '开创大片视觉营销'],
    tags_en: ['Defined the Aesthetics of Fear', 'Most Iconic Poster Ever', 'Pioneered Blockbuster Visual Marketing'],

    dateConnection: \`1975年6月20日，《大白鲨》在美国上映，成为电影史上第一部真正意义上的"暑期大片"。而那张海报——一条巨大的白鲨从深海直冲水面上游泳的女人——早在电影上映前就已经让整个美国不敢下水了。\`,
    designerBio: \`Roger Kastel（1931-2023）是美国插画黄金时代的最后一批大师之一。他在纽约视觉艺术学院学习后，成为一名商业插画师，为数十部电影和书籍创作封面。但让他名垂青史的，是两张海报：《大白鲨》和《帝国反击战》。Kastel 的工作方式极度传统——他用油画颜料在画布上一笔一笔地画，在照片参考的基础上加入戏剧性的想象。为了画好那条鲨鱼，他多次前往纽约自然历史博物馆研究标本。\`,
    story: \`这张海报的诞生本身就是一个传奇。最初，它是为 Peter Benchley 1974年小说的平装本封面而创作的。出版社给 Kastel 的要求很简单：一条鲨鱼和一个游泳者。但 Kastel 的处理方式让这个简单概念变成了永恒的恐惧图腾。

他选择了一个极端的垂直构图：画面底部是深不见底的黑暗海水，一条巨鲨张开血盆大口向上冲刺；画面顶部，一个毫不知情的女人在水面悠然游泳。两者之间巨大的空间制造了令人窒息的悬念——你知道即将发生什么，但你无法阻止。

当 Steven Spielberg 和环球影业看到这张插画时，立即决定将它用作电影海报，几乎未做修改。这在电影史上极为罕见——一张书籍封面直接成为了电影的视觉标识。海报的成功不仅在于它的恐怖感，更在于它的极简：没有演员照片，没有复杂场景，只有一个原始的、本能的恐惧画面。

这张海报彻底改变了电影营销的方式。在此之前，电影海报通常是演员肖像或场景拼贴；在此之后，"一个强烈的视觉概念"成为了大片海报的黄金法则。从《异形》到《侏罗纪公园》，无数经典海报都沿袭了 Jaws 开创的路径。\`,
    legacy: \`这张海报的影响远超电影行业。它证明了一个强大的视觉形象可以独立于作品本身产生文化影响力——很多从未看过《大白鲨》的人也能立刻认出这个画面。它开创了"高概念"视觉营销的先河，影响了此后50年的广告、海报和品牌设计。Roger Kastel 的原画如今被视为美国插画艺术的重要文物，曾在奥斯卡博物馆的"Jaws: The Exhibition"中展出。\`,
    significance: \`在平面设计史上，Jaws 海报是"少即是多"的终极证明。一个画面、一个概念、零文字装饰——却传递了比任何复杂设计都强烈的情感冲击。它教会了整整一代设计师：最好的视觉传达不是告诉观众一切，而是让他们自己想象那个"即将发生"的瞬间。\`,

    dateConnection_en: \`On June 20, 1975, Jaws opened in theaters across America, becoming cinema's first true summer blockbuster. But the poster — a massive great white shark surging upward toward an oblivious swimmer — had already terrified the nation long before anyone set foot in a theater.\`,
    designerBio_en: \`Roger Kastel (1931–2023) was one of the last masters of America's golden age of illustration. After studying at New York's School of Visual Arts, he became a prolific commercial illustrator creating covers for dozens of films and books. But two posters immortalized him: Jaws and The Empire Strikes Back. Kastel worked in the most traditional manner possible — oil paint on canvas, building upon photographic reference with dramatic imagination. To get the shark right, he made multiple visits to the American Museum of Natural History to study specimens up close.\`,
    story_en: \`The poster's origin is itself legendary. It was initially created as the cover for Peter Benchley's 1974 paperback novel. The publisher's brief was simple: a shark and a swimmer. But Kastel's execution transformed this basic concept into an eternal totem of fear.

He chose an extreme vertical composition: at the bottom, impenetrable dark water from which a massive shark lunges upward with jaws agape; at the top, an oblivious woman swimming serenely at the surface. The vast space between them creates suffocating suspense — you know what's about to happen, but you cannot stop it.

When Steven Spielberg and Universal saw the illustration, they immediately decided to use it as the film's poster with virtually no modifications. This is extraordinarily rare in cinema history — a book cover becoming a film's entire visual identity. The poster's power lies not just in its horror, but in its minimalism: no actor headshots, no complex scenes, just one primal, instinctive image of fear.

This poster completely transformed film marketing. Before Jaws, movie posters typically featured actor portraits or scene collages; after Jaws, "one powerful visual concept" became the golden rule of blockbuster poster design. From Alien to Jurassic Park, countless iconic posters followed the path Jaws pioneered.\`,
    legacy_en: \`The poster's influence extends far beyond cinema. It proved that a powerful visual image can generate cultural impact independent of the work itself — millions who have never seen the film instantly recognize this image. It pioneered "high-concept" visual marketing, influencing fifty years of advertising, poster, and brand design. Kastel's original painting is now considered a significant artifact of American illustration art, featured in the Academy Museum's "Jaws: The Exhibition."\`,
    significance_en: \`In the history of graphic design, the Jaws poster is the ultimate proof that less is more. One image, one concept, zero decorative text — yet it delivers a more powerful emotional punch than any complex design could achieve. It taught an entire generation of designers that the best visual communication doesn't tell the audience everything — it makes them imagine the moment that's "about to happen."\`,
  },`;

// Replace the final ] with new entry + ]
content = content.replace(/\n\]\s*$/, '\n' + entry + '\n]');
fs.writeFileSync(path, content);
console.log('Entry added successfully');
