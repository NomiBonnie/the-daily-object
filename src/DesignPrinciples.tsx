import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, ArrowLeft } from 'lucide-react'

interface CaseStudy {
  name: string
  maker: string
  background: string
  why: string
  soulDetail: string
  image?: string
}

interface Principle {
  letter: string
  name: string
  subtitle: string
  importance: string[]
  cases: CaseStudy[]
  quotes: { author: string; text: string }[]
}

const principles: Principle[] = [
  {
    letter: 'F',
    name: 'Fun',
    subtitle: '有趣',
    importance: [
      'Fun 不是"好玩"，是设计中那一刻让人会心一笑的东西。它不在功能清单上，不在需求文档里，但它是用户爱上一个产品而不是"使用"一个产品的分界线。',
      '好的 Fun 是克制的——不是马戏团，不是满屏彩蛋。它是在你意想不到的地方，发现设计师藏了一个小心思。那一刻你意识到：做这个东西的人，是真的在乎。',
      'Fun 也是勇气的体现。在效率至上的商业环境里，花时间做一个"没用"的小细节，需要设计师有底气说：这个值得。',
    ],
    cases: [
      {
        name: 'Nintendo Switch Joy-Con',
        maker: '任天堂',
        background: '2017 年发布，Joy-Con 是 Switch 的可拆卸控制器，内置 HD Rumble 技术。',
        why: 'HD Rumble 不只是震动反馈——在《1-2-Switch》里，你能"感觉到"杯子里有几颗冰块在滚动。霓虹红+霓虹蓝的默认配色，打破了游戏主机必须黑/灰/白的行业惯例。',
        soulDetail: 'Joy-Con 侧面的 SL/SR 按钮平时藏在导轨里，但横过来当独立手柄时恰好变成肩键。一个零件，两种身份——设计上的"双关"本身就是 Fun。',
        image: '/the-daily-object/media/feidish/fun-nintendo-switch.jpg',
      },
      {
        name: 'Slack',
        maker: 'Stewart Butterfield',
        background: '2013 年发布的企业通讯工具。在 Slack 之前，企业软件 = 难看 + 无聊。',
        why: 'Loading 界面会显示随机趣味引言。自定义 emoji 让每个团队创建自己的表情文化。#random、#pets 这样的非工作频道——Slack 理解"闲聊"不是效率的敌人。',
        soulDetail: '输入 /shrug 会自动生成 ¯\\_(ツ)_/¯。一个企业工具里内置了颜文字快捷键。这不是功能，是态度。',
        image: '/the-daily-object/media/feidish/fun-slack.jpg',
      },
      {
        name: 'Porsche 911 钥匙左置',
        maker: 'Porsche',
        background: '从初代 911（1963）起，点火钥匙孔就在方向盘左侧，而非行业标准的右侧。',
        why: '起源于勒芒赛车——左手拧钥匙同时右手挂挡，省零点几秒。这个赛车血统的遗留变成了每一位 911 车主每天都会体验到的"彩蛋"。',
        soulDetail: '即使现在 911 早已改用按钮启动，启动按钮的位置依然在方向盘左侧。功能理由已经消失，仪式感被保留了下来。',
        image: '/the-daily-object/media/feidish/fun-porsche-911.jpg',
      },
    ],
    quotes: [
      { author: 'Charles Eames', text: '玩具不是在功能上被简化的东西，功能才是在原则上被过度复杂化的玩具。' },
      { author: '深泽直人', text: '好的设计让人在无意识中感到愉悦，不需要说明书来告诉你"这里很有趣"。' },
    ],
  },
  {
    letter: 'E',
    name: 'Esthetic',
    subtitle: '美的',
    importance: [
      '"美"是最容易被误解的设计原则。它不是装饰，不是"好看的皮肤"。Esthetic 是关于视觉秩序的——比例、留白、色彩关系、排版节奏。',
      '视觉上值得多看一眼，意味着第一眼之后还有东西可看。表面的漂亮经不起凝视，真正的美是越看越舒服，因为每一个视觉决策都有道理。',
      'Esthetic 也是尊重——对用户眼睛的尊重。一个丑的界面在说"我不在乎你的感受"；一个美的界面在说"我花了时间，让这个东西配得上你的注视"。',
    ],
    cases: [
      {
        name: 'Braun T3 收音机',
        maker: 'Dieter Rams / Braun（1958）',
        background: '1958 年设计的便携式收音机，被认为是现代工业设计的里程碑，直接启发了 iPod。',
        why: '白色亚克力面板上只有圆形扬声器孔阵列和几个旋钮。美来自纯粹的几何关系——圆形网孔的密度、旋钮的大小比例、面板边缘的圆角半径。',
        soulDetail: '扬声器孔阵列的排列不是简单的网格，而是同心圆向外扩散。形式在致敬功能——和声波的物理传播一致。',
        image: '/the-daily-object/media/feidish/esthetic-braun-t3.jpg',
      },
      {
        name: 'Porsche 911（993 代）',
        maker: 'Tony Hatter / Porsche（1993-1998）',
        background: '993 是最后一代风冷 911，被广泛认为是 911 最优美的一代。',
        why: '993 的美在于曲面的连续性。从前翼子板到后翼子板，是一条不间断的曲线。光影在车身上流动时是丝绸般平滑的。美不是加东西，是让已有的东西以正确的方式存在。',
        soulDetail: '尾灯形状像一滴水从圆形慢慢被拉伸，不是贴在车身上的，而是从车身"长出来"的——曲面的一部分。',
        image: '/the-daily-object/media/feidish/esthetic-porsche-993.jpg',
      },
      {
        name: 'Apple Pro Display XDR',
        maker: 'Apple（2019）',
        background: '面向专业用户的 32 英寸 6K 显示器。',
        why: '正面几乎是纯粹的屏幕——没有 logo，没有接缝。背面蜂窝状散热孔阵列是数学之美，每一个孔的球面凹陷都经过 CNC 精加工。',
        soulDetail: '蜂窝散热孔从背面延伸到前后衔接处时，孔径逐渐变小，最终消失在边缘曲面里。不是突然截止，而是渐变过渡。',
        image: '/the-daily-object/media/feidish/esthetic-apple-xdr.jpg',
      },
    ],
    quotes: [
      { author: '原研哉', text: '用"白"来定义美学——不是白色本身，而是白所代表的"空"和"潜在的丰富性"。' },
      { author: 'Dieter Rams', text: '一个产品的美学品质是其有用性的组成部分。每天使用的产品会影响人们及其幸福感。' },
    ],
  },
  {
    letter: 'I',
    name: 'Innovative',
    subtitle: '创新的',
    importance: [
      '创新不是"新"。新只是时间维度上的先后关系；创新是认知维度上的"啊哈"。"之前没人这样做，但一看就对。"',
      '最好的创新是事后看起来理所应当的。iPhone 的多点触控在 2007 年是革命，在 2027 年是常识。',
      '创新也意味着承担风险。每一个"之前没人这样做"背后，都有人拍板说"我们就这么做"——在没有任何市场验证的情况下。',
    ],
    cases: [
      {
        name: 'iPhone 初代',
        maker: 'Apple / Jony Ive（2007）',
        background: '2007 年 Steve Jobs："今天苹果重新发明了手机。"当时智能手机标配实体键盘或触控笔。',
        why: '多点触控不是苹果发明的，但苹果是第一个说"整个正面就是屏幕，你的手指就是工具"的。取消实体键盘意味着键盘可以根据上下文变化。',
        soulDetail: 'pinch to zoom——双指缩放。Jobs 演示时全场惊叹，因为它太自然了。你在现实中就是这样"放大"的。这不是学来的交互，是人类本能。',
        image: '/the-daily-object/media/feidish/innovative-iphone.jpg',
      },
      {
        name: 'Dyson 无叶风扇',
        maker: 'James Dyson / Dyson（2009）',
        background: '风扇 = 有叶片，这是人类几千年的共识。Dyson 说：不一定。',
        why: '没有可见的运动部件。它不是"更好的风扇"，是重新思考"如何制造气流"。',
        soulDetail: '环形出风口的截面是机翼翼型。气流不是被"吹"出来的，是被"拉"出来的——和飞机机翼产生升力的原理一样。形式服从物理。',
        image: '/the-daily-object/media/feidish/innovative-dyson.jpg',
      },
      {
        name: 'Stripe Checkout',
        maker: 'Patrick & John Collison（2011）',
        background: '在线支付集成需要几周开发时间。Stripe 说：7 行代码搞定。',
        why: 'Stripe 把支付从"金融基础设施"重新定义为"API 调用"。一个复杂到令人绝望的领域，被简化成了一个函数调用。',
        soulDetail: 'API 报错信息返回人能读懂的句子，外加指向具体文档的链接。它把"开发者体验"当成了产品来设计。',
        image: '/the-daily-object/media/feidish/innovative-stripe.jpg',
      },
    ],
    quotes: [
      { author: 'Steve Jobs', text: '引用 Wayne Gretzky："我不是滑向冰球在的地方，而是滑向冰球将要去的地方。" 创新是预判，不是追赶。' },
      { author: '深泽直人', text: '真正的创新应该是"无需思考"的——用户不需要学习就会用。' },
    ],
  },
  {
    letter: 'D',
    name: 'Detail',
    subtitle: '细节',
    importance: [
      '"差 4px 就是 bug"——这句话不是强迫症，是职业标准。细节是区分"做完了"和"做好了"的唯一标准。',
      '细节也是设计师对自己作品的尊重。一个不关注细节的设计，就像一封有错别字的情书——内容可能是对的，但态度不对。',
      '最重要的是：细节是累积的。一个 4px 的偏差可以忍受，但当整个产品有一百个 4px 的偏差时，用户体验的是弥漫的"粗糙感"。品质是一千个小决策的总和。',
    ],
    cases: [
      {
        name: 'macOS 窗口圆角',
        maker: 'Apple（持续迭代）',
        background: 'macOS Big Sur 起，整个系统圆角从圆弧改为连续曲率曲线（squircle）。',
        why: '普通圆角在直线和弧线交汇处有突变。连续曲率让过渡渐变，消灭了视觉突变。区别极微妙，但放在整个系统里积累出来的感受完全不同。',
        soulDetail: 'iOS App 图标圆角和 iPhone 物理机身圆角使用同一条连续曲率曲线。软件和硬件在亚像素级别对齐。纯粹是强迫症级别的品质追求。',
        image: '/the-daily-object/media/feidish/detail-macos-corners.jpg',
      },
      {
        name: 'Leica M 系列',
        maker: 'Leica（1954 至今）',
        background: 'Leica M3（1954）定义了旁轴相机形态，核心设计语言至今未变。',
        why: '快门转盘的滚花纹理经过精确计算——确保戴手套也能精准操作。阻尼感由工匠手工微调——目标是"恰到好处的阻力"。',
        soulDetail: '测距对焦黄斑使用半透半反镜片，镀膜精确到纳米级。一个你只看 0.5 秒的东西，Leica 用了 70 年来打磨。',
        image: '/the-daily-object/media/feidish/detail-leica-m.jpg',
      },
      {
        name: 'Notion Block 拖拽',
        maker: 'Notion（2018 至今）',
        background: 'Block 编辑器允许拖拽任何内容块重新排列。',
        why: '插入指示线的位置根据鼠标相对目标 block 的垂直和水平位置智能判断，处理了大量边界情况。',
        soulDetail: '被拖起的 block 有极微妙的投影和 1-2 度轻微旋转。这个旋转角度小到几乎意识不到，但让"拖拽"感觉像在拿起一张纸。',
        image: '/the-daily-object/media/feidish/detail-notion.jpg',
      },
    ],
    quotes: [
      { author: 'Mies van der Rohe', text: 'God is in the details.（上帝在细节中）' },
      { author: 'Charles Eames', text: 'The details are not the details. They make the design.（细节不是细节，细节就是设计本身。）' },
    ],
  },
  {
    letter: 'I',
    name: 'Inherent',
    subtitle: '继承',
    importance: [
      '"设计在时间和空间维度上有回声"——可能是七原则中最深刻的一条。Inherent 不是"复古"，是对设计血统的意识。',
      '在时间维度上，今天的设计应该能和十年前的版本对话，也应该能被十年后的版本继承。不是锁死形式，而是守住内核。',
      '在空间维度上，一个生态系统内的不同产品应该有家族感。不需要完全一样，但要让人一眼看出"这是一家人"。',
    ],
    cases: [
      {
        name: 'Porsche 911 设计演化',
        maker: 'Porsche（1963 至今）',
        background: '从 1963 年到 2023 年的 992.2 代，911 基本轮廓 60 年几乎没变。',
        why: '每一代都能一眼认出——即使尺寸增大 30%，马力增长 10 倍。每一代设计师都精确知道什么是 911 的 DNA。继承不是复制，是理解本质之后的重新诠释。',
        soulDetail: '每一代 911 的尾灯都不同，但都遵循"从车身曲面中自然生长"的原则。形态一直在变，设计原则从未改变。',
        image: '/the-daily-object/media/feidish/inherent-porsche-911.jpg',
      },
      {
        name: 'Apple 圆角矩形',
        maker: 'Apple（1984 至今）',
        background: '1984 年初代 Mac 上 Bill Atkinson 用了大量圆角矩形。Jobs 说："圆角矩形无处不在！"',
        why: '从 Mac 界面到 iPod 到 iPhone 到 Vision Pro——40 年间穿越软件、硬件、穿戴、空间计算四个时代。',
        soulDetail: 'Apple Watch 表盘 UI 的圆角半径和物理机身圆角半径是同一个值。软件"长在"硬件里。',
        image: '/the-daily-object/media/feidish/inherent-apple-roundrect.jpg',
      },
      {
        name: '无印良品 MUJI',
        maker: '田中一光 → 原研哉（2001 至今）',
        background: 'MUJI 由田中一光 1980 年创立视觉形象，2001 年原研哉接任艺术总监。',
        why: '原研哉没有推翻田中的核心，而是升华为"空"的哲学。核心没变，表达升级了。',
        soulDetail: 'MUJI 商品标签 40 多年始终是同一个位置、同一种牛皮纸色、同一套字体层级。一致性，持续几十年的一致性。',
        image: '/the-daily-object/media/feidish/inherent-muji.jpg',
      },
    ],
    quotes: [
      { author: 'Dieter Rams', text: '不要为了"新"而丢掉已经对的东西。' },
      { author: '柳宗理', text: '现代工业设计应该从手工艺的智慧中继承。' },
    ],
  },
  {
    letter: 'S',
    name: 'Simple',
    subtitle: '简洁',
    importance: [
      '"能删就删"——四个字，道尽了简洁的真谛。每一个元素都要证明自己存在的必要性，证明不了的就删。',
      '简洁是对用户认知负担的尊重。每多一个按钮、一行文字、一种颜色，就多一个决策点。',
      '但简洁不等于简单。正如 Pascal 说的："我没时间写短信，所以写了长信。" 简洁需要更多的功夫，不是更少。',
    ],
    cases: [
      {
        name: 'Google 首页',
        maker: 'Google（1998 至今）',
        background: '1998 年竞争对手首页都塞满了内容。Google 只有 logo、搜索框、两个按钮。',
        why: 'Larry Page 和 Sergey Brin 认为搜索引擎的核心就是搜索，其他都是干扰。整个首页只有一个行动召唤。',
        soulDetail: '"I\'m Feeling Lucky" 按钮几乎没人用（每年损失约 1.1 亿美元广告收入），但它传递态度，也让页面不至于只有一个按钮而显得空洞。',
        image: '/the-daily-object/media/feidish/simple-google.jpg',
      },
      {
        name: 'Braun ET66 计算器',
        maker: 'Dieter Rams / Dietrich Lubs（1987）',
        background: '直接启发了 iOS 计算器 app。',
        why: '白色数字键、灰色运算键、橙色功能键——颜色本身就是信息架构。没有说明，没有标注。',
        soulDetail: '外壳圆角、按键圆角、显示屏窗口圆角，用的是同一个半径值。一致性创造了视觉上的宁静感。',
        image: '/the-daily-object/media/feidish/simple-braun-et66.jpg',
      },
      {
        name: 'MUJI 壁挂式 CD 播放器',
        maker: '深泽直人 / MUJI（1999）',
        background: '挂在墙上，形状像换气扇，拉绳开关。',
        why: '传统 CD 机有电源键、播放暂停、上下曲、音量、显示屏、遥控器。深泽直人删掉了几乎所有。只留拉绳和音量旋钮。',
        soulDetail: 'CD 在播放时可见旋转——视觉的"诚实"。旋转的 CD 和换气扇的联想让你感觉"它在为房间注入音乐"。Simple 和 Fun 合二为一。',
        image: '/the-daily-object/media/feidish/simple-muji-cd.jpg',
      },
    ],
    quotes: [
      { author: 'Saint-Exupéry', text: '完美不是无以复加，而是无可删减。' },
      { author: '原研哉', text: '"空"——删到连"必要"的痕迹都看不到，只留一个等待被填充的容器。' },
    ],
  },
  {
    letter: 'H',
    name: 'Honest',
    subtitle: '诚实',
    importance: [
      '"不夸大不伪装"——在充满 dark patterns、虚假评价、注意力操控的数字世界里，诚实的设计是一种道德立场。',
      'Honest 意味着：材料是什么就展现什么，功能做什么就说什么，交互做了什么就告诉用户什么。',
      '需要伪装的设计，是因为对自己不够有信心。一个敢于展露真实的产品在说："我就是这样，不需要假装更好。"',
    ],
    cases: [
      {
        name: 'MUJI 产品标签系统',
        maker: 'MUJI',
        background: '無印良品——没有品牌的好产品。从 1980 年起坚持不在产品上印 logo。',
        why: '标签告诉你原料产地、生产工艺、材料选择原因。"因纤维天然色差可能存在颜色不均"——不是缺陷申报，是说"这就是天然材料的样子"。',
        soulDetail: '"素材の选択"系列注明"此产品使用了标准流程中会被丢弃的边角料"。不伪装成"环保高端"，诚实说"便宜卖给你"。',
        image: '/the-daily-object/media/feidish/honest-muji-label.jpg',
      },
      {
        name: "Patagonia Don't Buy This Jacket",
        maker: 'Patagonia（2011）',
        background: '黑色星期五在《纽约时报》刊登整版广告："别买这件夹克"。',
        why: '详细列出夹克的环境成本：135 升水、20 磅碳排放。一个品牌在最大消费日说"别买我的东西"——诚实延伸到品牌层面。',
        soulDetail: 'Worn Wear 项目——官方二手交易平台。在自己官网卖自己的二手产品。一个服装品牌鼓励你少买衣服。',
        image: '/the-daily-object/media/feidish/honest-patagonia.jpg',
      },
      {
        name: 'Teenage Engineering OP-1',
        maker: 'Teenage Engineering（2011）',
        background: '瑞典设计的便携式合成器/采样器。',
        why: '裸露铝合金机身，所有端口和元器件不做隐藏。拆开后盖能看到电路板排列也经过美学设计——产品内外应该一致。',
        soulDetail: 'OLED 屏幕上每个合成器引擎都有独特可视化——FM 引擎显示互相啮合的齿轮，你能"看到"调制在发生。不藏复杂性，而是诚实但友好地展示。',
        image: '/the-daily-object/media/feidish/honest-teenage-engineering.jpg',
      },
    ],
    quotes: [
      { author: 'Dieter Rams', text: '好的设计是诚实的——它不试图让产品看起来比实际更创新、更强大或更有价值。' },
      { author: 'Jasper Morrison & 深泽直人', text: '"Super Normal"——一个东西不需要"看起来很设计"，它应该"看起来就是它本来应该的样子"。' },
    ],
  },
]

const comparisonData = [
  { rams: 'Good design is innovative', feidish: 'I — Innovative', diff: '几乎一致' },
  { rams: 'Good design makes a product useful', feidish: '—', diff: 'FEIDISH 认为这是前提' },
  { rams: 'Good design is aesthetic', feidish: 'E — Esthetic', diff: '一致' },
  { rams: 'Good design makes a product understandable', feidish: '—', diff: '可归入 S + H' },
  { rams: 'Good design is unobtrusive', feidish: '近似 S — Simple', diff: 'Rams 更强调"不打扰"' },
  { rams: 'Good design is honest', feidish: 'H — Honest', diff: '完全一致' },
  { rams: 'Good design is long-lasting', feidish: '近似 I — Inherent', diff: 'Rams 说"耐久"，FEIDISH 说"有血统"' },
  { rams: 'Good design is thorough down to the last detail', feidish: 'D — Detail', diff: '完全一致' },
  { rams: 'Good design is environmentally friendly', feidish: '—', diff: 'FEIDISH 未单独提环保' },
  { rams: 'Good design is as little design as possible', feidish: 'S — Simple', diff: '高度一致' },
]

export default function DesignPrinciples() {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-light tracking-wide">THE DAILY OBJECT</span>
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-neutral-400" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 text-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight tracking-[0.2em] text-neutral-900 dark:text-neutral-100 mb-6">
          FEIDISH
        </h1>
        <p className="text-base sm:text-lg font-light text-neutral-600 dark:text-neutral-400 mb-4">
          Sam Yuan 的设计准则
        </p>
        <p className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-600">
          Fun · Esthetic · Innovative · Detail · Inherent · Simple · Honest
        </p>
      </section>

      {/* Principles */}
      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
        {principles.map((p, idx) => (
          <section key={idx} className="mb-28">
            {/* Principle Header */}
            <div className="mb-12">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-7xl sm:text-8xl font-extralight text-neutral-200 dark:text-neutral-800 leading-none">
                  {p.letter}
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-100">
                    {p.name}
                  </h2>
                  <p className="text-sm font-light text-neutral-400 dark:text-neutral-600 mt-0.5">
                    {p.subtitle}
                  </p>
                </div>
              </div>
              <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700 mt-6 mb-8" />
              {/* Why it matters */}
              <div className="space-y-4">
                {p.importance.map((text, i) => (
                  <p key={i} className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Cases */}
            <div className="space-y-8">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500">
                经典案例
              </p>
              {p.cases.map((c, ci) => (
                <div
                  key={ci}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                >
                  {/* Case image */}
                  {c.image && (
                    <div className="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-lg font-light text-neutral-900 dark:text-neutral-100">
                        {c.name}
                      </h3>
                      <p className="text-xs font-light text-neutral-400 dark:text-neutral-600 mt-1">
                        {c.maker}
                      </p>
                    </div>
                    <p className="text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-500">
                      {c.background}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {c.why}
                    </p>
                    {/* Soul Detail */}
                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/30 rounded-xl p-4">
                      <p className="text-xs font-medium tracking-[0.15em] uppercase text-amber-600 dark:text-amber-500 mb-2">
                        灵魂细节
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {c.soulDetail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quotes */}
            {p.quotes.length > 0 && (
              <div className="mt-10 space-y-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500">
                  其他设计师怎么说
                </p>
                {p.quotes.map((q, qi) => (
                  <blockquote
                    key={qi}
                    className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-5 py-1"
                  >
                    <p className="text-sm font-light italic leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {q.text}
                    </p>
                    <p className="text-xs font-light text-neutral-400 dark:text-neutral-600 mt-2">
                      — {q.author}
                    </p>
                  </blockquote>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Appendix: Comparison Table */}
        <section className="mb-20">
          <h2 className="text-2xl font-light text-neutral-900 dark:text-neutral-100 mb-2">
            附录
          </h2>
          <p className="text-sm font-light text-neutral-500 dark:text-neutral-500 mb-8">
            FEIDISH vs Dieter Rams 好设计十原则
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm font-light">
              <thead>
                <tr className="border-b border-neutral-300 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-900 dark:text-neutral-100 text-xs tracking-[0.1em] uppercase">
                    Rams
                  </th>
                  <th className="text-left py-3 pr-4 font-medium text-neutral-900 dark:text-neutral-100 text-xs tracking-[0.1em] uppercase">
                    FEIDISH
                  </th>
                  <th className="text-left py-3 font-medium text-neutral-900 dark:text-neutral-100 text-xs tracking-[0.1em] uppercase">
                    差异
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-neutral-100 dark:border-neutral-900">
                    <td className="py-3 pr-4 text-neutral-600 dark:text-neutral-400">{row.rams}</td>
                    <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300 font-medium">{row.feidish}</td>
                    <td className="py-3 text-neutral-500 dark:text-neutral-500">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Differences */}
          <div className="mt-12 space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-500">
              FEIDISH 的独特之处
            </p>
            <div className="space-y-3">
              <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="font-medium text-neutral-900 dark:text-neutral-100">Fun 排在第一位</strong>——这在任何经典设计哲学框架里都是罕见的。设计首先应该让人愉悦。
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="font-medium text-neutral-900 dark:text-neutral-100">Inherent 的明确提出</strong>——设计的"时空回声"。空间维度的家族感 + 时间维度的血统延续。
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="font-medium text-neutral-900 dark:text-neutral-100">七个字母拼成 FEIDISH</strong>——一个关于设计的框架，自己也被设计过了。这本身就很 Fun。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-xs font-light tracking-wide text-neutral-400 dark:text-neutral-600">
            Sanono Studio • FEIDISH Design Principles
          </p>
          <Link
            to="/"
            className="inline-block mt-3 text-xs font-light tracking-[0.15em] uppercase text-neutral-300 dark:text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-500 transition-colors"
          >
            ← Back to The Daily Object
          </Link>
        </div>
      </footer>
    </div>
  )
}
