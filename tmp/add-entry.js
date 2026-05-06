const fs = require('fs');
const path = '/Users/samyuan/.openclaw/workspace/the-daily-object/src/data.ts';
let content = fs.readFileSync(path, 'utf8');

const newEntry = `  {
    id: '96',
    date: '2026-05-06',
    imageUrl: '/the-daily-object/images/mollino-arabesco.jpg',
    fullImageUrl: '/the-daily-object/images/full/mollino-arabesco.jpg',
    title: 'Arabesco Table',
    title_en: 'Arabesco Table',
    subtitle: 'Carlo Mollino, 1950',
    subtitle_en: 'Carlo Mollino, 1950',
    category: 'industrial' as const,
    designer: 'Carlo Mollino',
    year: '1950',
    tags: ['家具即雕塑', '有机形态先驱', '意大利设计传奇'],
    tags_en: ['Furniture as Sculpture', 'Organic Form Pioneer', 'Italian Design Legend'],

    dateConnection: \`1905年5月6日，Carlo Mollino出生于都灵。这座意大利工业之都——菲亚特的故乡——塑造了他对机械、速度和流线型的终身迷恋。Mollino后来成为20世纪最不可归类的设计天才：建筑师、家具设计师、赛车手、特技飞行员、摄影师、滑雪教练，所有身份汇聚成一种对曲线和运动的极致追求。\`,
    designerBio: \`Carlo Mollino（1905–1973）是意大利设计史上最神秘、最不可复制的人物。他的父亲是都灵著名的土木工程师Eugenio Mollino，这让他从小就浸泡在结构力学的世界里。1931年从都灵理工大学建筑系毕业后，他没有走上传统建筑师的道路，而是开始了一场横跨所有创造性领域的冒险。

他设计赛车并亲自驾驶参加比赛，他考取特技飞行执照在阿尔卑斯山上翻滚，他用宝丽来拍摄数千张超现实主义风格的女性肖像（死后才被发现），他还写了一本滑雪技术专著。但他最持久的遗产是家具——那些看起来不像是被"设计"出来、而像是从某种有机生命体中"生长"出来的桌椅。

Mollino的设计方法极其独特：他从人体曲线、骨骼结构和航空工程中汲取灵感，用弯曲胶合板创造出前所未有的有机形态。他的每件家具都只生产极少数量，很多是为特定室内空间定制的孤品。\`,
    story: \`1949年，Mollino为都灵的一间私人公寓设计了Arabesco桌。这不是一次普通的家具设计委托——它是Mollino试图证明一个极端命题的实验：**一张桌子可以成为一件雕塑，同时仍然是一张完美的桌子。**

Arabesco的底座由弯曲的枫木胶合板制成，两片有机形态的支撑结构像一对展开的翅膀或两具交缠的躯体，通过黄铜螺栓连接。桌面是两块不规则形状的玻璃，上下错落悬浮。整件作品没有一条直线。

这种形态的灵感来源复杂：部分来自超现实主义雕塑家Jean Arp的生物形态抽象，部分来自Mollino对人体解剖学的痴迷，部分来自他在飞行中观察到的气流动力学曲线。他曾说："一切都是情色的，如果一切都是有生命力的。"这句话解释了Arabesco那种令人不安的生命感——它看起来不像是静止的家具，而像是某个瞬间被凝固的运动。

制造过程同样激进。都灵的Apelli & Varesio工坊用手工将多层枫木板压制弯曲成Mollino要求的精确曲线，总共只生产了大约六件。每一件的曲线都有细微差异——这不是工业产品，而是手工艺品。

2005年，一件原版Arabesco在佳士得拍卖会上以380万美元成交，创下当时意大利设计家具的世界纪录。这个价格说明了一件事：Mollino的作品已经超越了"家具"的范畴，进入了"艺术品"的市场。\`,
    legacy: \`Arabesco桌被纽约现代艺术博物馆（MoMA）、伦敦维多利亚与阿尔伯特博物馆（V&A）和都灵的Museo Casa Mollino永久收藏。2005年的拍卖纪录让Mollino成为20世纪身价最高的家具设计师之一。

更重要的是，Arabesco预示了一种设计哲学的到来：家具不必是几何的、理性的、工业化的。在密斯·凡·德·罗的直线钢管和包豪斯的功能主义统治设计界的年代，Mollino用弯曲的木头和玻璃证明了另一条路——有机的、感性的、不可复制的。这条路后来影响了从Zaha Hadid到Ross Lovegrove的整整一代追求有机形态的设计师。

意大利家具品牌Zanotta在1980年代获得授权复刻Arabesco，至今仍在生产。但原版的那种手工痕迹——木纹的微妙差异、黄铜连接件的氧化色泽——是复刻版永远无法复制的。\`,
    significance: \`在设计史的叙事中，20世纪中期通常被包豪斯和国际主义风格的理性几何所定义。Mollino的Arabesco是对这一正统最有力的反叛：它证明现代设计不必是冰冷的直线条，弯曲的有机形态同样可以是严谨的、结构合理的、功能完善的。这不是对现代主义的否定，而是对它的扩展——现代性不只有一种面貌。\`,

    dateConnection_en: \`On May 6, 1905, Carlo Mollino was born in Turin — Italy's industrial capital and home of Fiat — a city that shaped his lifelong obsession with mechanics, speed, and streamlined form. Mollino became one of the twentieth century's most unclassifiable creative geniuses: architect, furniture designer, racing driver, aerobatic pilot, photographer, and ski instructor, all converging into an extreme pursuit of curves and motion.\`,
    designerBio_en: \`Carlo Mollino (1905–1973) remains the most enigmatic, irreplicable figure in Italian design history. His father, Eugenio Mollino, was a prominent Turin civil engineer, immersing Carlo in the world of structural mechanics from childhood. After graduating from Turin Polytechnic's architecture program in 1931, he eschewed the conventional architect's path and embarked on an adventure spanning every creative discipline.

He designed racing cars and drove them in competition. He earned an aerobatic flying license and performed stunts over the Alps. He took thousands of Surrealist-inflected Polaroid portraits of women — discovered only after his death. He even authored a technical manual on skiing. But his most enduring legacy is furniture — pieces that appear not so much "designed" as grown from some organic life form.

Mollino's design method was unique: he drew inspiration from human anatomy, skeletal structures, and aeronautical engineering, using bent plywood to create unprecedented organic forms. Each piece was produced in extremely limited quantities, many as one-off commissions for specific interiors.\`,
    story_en: \`In 1949, Mollino designed the Arabesco table for a private apartment in Turin. This was no ordinary furniture commission — it was Mollino's experiment to prove an extreme proposition: **a table can be a sculpture while remaining a perfectly functional table.**

The base is made of bent maple plywood, with two organic support structures spreading like unfurled wings or intertwined bodies, joined by brass bolts. The top consists of two irregularly shaped glass panels, staggered and seemingly suspended. The entire piece contains not a single straight line.

The formal inspirations were complex: partly from Surrealist sculptor Jean Arp's biomorphic abstractions, partly from Mollino's obsession with human anatomy, and partly from the aerodynamic curves he observed while flying. He once said: "Everything is erotic, if everything is alive." This explains the Arabesco's unsettling sense of life — it looks not like static furniture but like motion frozen in a single instant.

The manufacturing process was equally radical. Turin's Apelli & Varesio workshop hand-pressed multiple layers of maple veneer into Mollino's precisely specified curves, producing only about six pieces total. Each had slight variations in its curves — this was not an industrial product but a craft object.

In 2005, an original Arabesco sold at Christie's for $3.8 million, setting a world record for Italian design furniture at the time. That price confirmed something: Mollino's work had transcended the category of "furniture" and entered the market of "fine art."\`,
    legacy_en: \`The Arabesco table is in the permanent collections of MoMA in New York, the Victoria and Albert Museum in London, and the Museo Casa Mollino in Turin. The 2005 auction record made Mollino one of the highest-valued furniture designers of the twentieth century.

More importantly, the Arabesco heralded an emerging design philosophy: furniture need not be geometric, rational, or industrialized. In an era dominated by Mies van der Rohe's steel tubes and Bauhaus functionalism, Mollino used bent wood and glass to prove another path — organic, sensual, irreplicable. That path would later influence an entire generation of designers pursuing organic forms, from Zaha Hadid to Ross Lovegrove.

Italian furniture brand Zanotta received authorization to reproduce the Arabesco in the 1980s and continues production today. But the handcraft traces of the originals — subtle grain variations, the oxidized patina of the brass fittings — can never be replicated.\`,
    significance_en: \`In the narrative of design history, the mid-twentieth century is typically defined by the rational geometry of Bauhaus and the International Style. Mollino's Arabesco stands as the most powerful rebellion against that orthodoxy: it proved that modern design need not be cold straight lines — curved organic forms could be equally rigorous, structurally sound, and functionally complete. This was not a rejection of Modernism but an expansion of it — modernity has more than one face.\`,
  },`;

// Replace the closing ] with new entry + ]
content = content.replace(/  },\n\]$/, `  },\n${newEntry}\n]`);
fs.writeFileSync(path, content, 'utf8');
console.log('Entry added successfully');
