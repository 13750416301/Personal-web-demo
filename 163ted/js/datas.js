//数据
var itemData = [
	[
		"文学与形式",
		"中国现当代女性文学专题",
		"中国古典诗歌意象",
		"《史记》人物形象",
		"犯罪小说",
		"骑士与少女",
		"英国文学",
		"海明威、菲茨杰拉德和福克纳",
		"塞万提斯的唐吉柯德",
		"解读但丁"
	],
	[
		"算术与代数预备课程：约束与倍数",
		"印度理工学院联合入学考试",
		"算数与代数预备课程：数的性质",
		"算数与代数预备课程：负数",
		"对数",
		"脑筋急转弯",
		"加州标准测试：几何",
		"算数与代数预备课程：乘法与除法",
		"加州标准测试：代数I",
		"算数与代数预备课程：计算顺序"
	],
	[
		"黑格尔和精神现象学",
		"康德的纯碎理性批判",
		"人性的哲学与科学",
		"古代智慧与当代爱情",
		"公正",
		"批判性推理入门",
		"哲学概论",
		"尼采的心灵与自然",
		"死亡",
		"政治哲学导论"
	],
	[
		"西班牙语学习",
		"英语强化教程I",
		"阿拉伯语入门",
		"俄语入门",
		"俄语语法",
		"法语会话",
		"日语入门",
		"商务写作",
		"西班牙语入门",
		"英语写作基础"
	],
	[
		"汽车：过去、现在和未来",
		"60秒脑筋急转弯",
		"60秒系列讲座",
		"普林斯顿名家讲坛",
		"现在人口发展趋势与问题",
		"LGBT大会",
		"社会学入门",
		"城市发展研讨会",
		"立大志",
		"公共政策学"
	],
	[
		"建筑史",
		"三个超级大国的兴衰故事",
		"中世纪早期史",
		"1877年以来的美国史",
		"亚拉伯罕·林肯两百周年纪念",
		"美国独立战争",
		"美国研究",
		"英国近代史",
		"非裔美国人历史———自由斗争",
		"美国内战与重建"
	],
	[
		"苹果CEO蒂姆·库克访谈",
		"Instagram创始人分享创业经验",
		"人力资源管理",
		"eBay副总裁谈eBay发展",
		"Dropbox公司CEO谈创业经历",
		"美国艺电创始人谈创业过程",
		"NVIDIA创始人谈企业发展过程",
		"LinkedIn创始人分享创业经验",
		"",
		""
	],
	[
		"英国媒体研究",
		"媒体",
		"新媒体时代的保密与新闻业",
		"媒体、教育、市场",
		"",
		"",
		"",
		"",
		"",
		""
	],
	[
		"女性健康研究",
		"营养健康与癌症预防",
		"基础护理理论",
		"运动训练医疗与奥运健康遗产",
		"精神病学病例研讨",
		"神经外科学的100个话题",
		"饮食与营养",
		"心灵生活",
		"健康图书馆",
		"自闭症讲座"
	],
	[
		"画室课堂演示",
		"家居装饰",
		"ART 116-网页设计I",
		"世界音乐综述",
		"布鲁姆伯利",
		"平面设计",
		"剑桥大学《美》",
		"好莱坞电影特效制作教程第一季",
		"音乐与大脑",
		"建筑学"
	],
	[
		"生态文明：撑起中国梦",
		"土壤侵蚀原理",
		"海上货运的革命",
		"当今环境热点问题",
		"走近地下水",
		"奇异的仿生学",
		"心连“芯”的思维之旅",
		"建筑美学",
		"能源的高效利用",
		"走进测绘殿堂"
	],
	[
		"酷刑、法律与战争",
		"公法讲座",
		"物权法",
		"知识产权",
		"体育法",
		"",
		"",
		"",
		"",
		""
	],
	[
		"使徒信经",
		"太古历史",
		"60秒宗教探奇",
		"犹太教和基督教的希伯来书圣经",
		"《以赛亚书》圣经研读系列",
		"新约及其历史背景",
		"旧约全书导论",
		"",
		"",
		""
	],
	[
		"环境心理学",
		"如何像心理学家一样思考",
		"爱情那些事",
		"犯罪心理学",
		"特殊儿童研究",
		"儿童发展心理学",
		"克服公众演讲焦虑",
		"发现心理学",
		"家庭夫妇心理学",
		"心理学导论"
	],
	[
		"加州高中毕业考试习题讲解",
		"GMAT考试数据充分性（数学）",
		"GMAT考试问题解答（数学）",
		"代数习题课",
		"SAT考试习题详解（数学）",
		"",
		"",
		"",
		"",
		""
	],
	[
		"圣母院大学",
		"英国公开大学",
		"巴黎高等商学院",
		"复旦大学",
		"剑桥大学",
		"牛津大学",
		"斯坦福大学",
		"麻省理工学院",
		"哈佛大学",
		"耶鲁大学"
	]
];

var leftScrollText = [
	{
		"labelColor" : "#2e9057",
		"label" : "付费",
		"h1" : "会说话的人，一开口就让人喜欢",
		"p" : "24个沟通套路，让你秒变社交高手，一开口就大受欢迎。"
	},
	{
		"labelColor" : "#7d502a",
		"label" : "中国大学视频公开课",
		"h1" : "西藏的历史与文化",
		"p" : "跨越喜马拉雅：西藏西部史前文化的区域互动。"
	},
	{
		"labelColor" : "#2e9057",
		"label" : "付费",
		"h1" : "活着最累的人，是不会读书的人",
		"p" : "52本经典好书，五步打造完整知识体系，让你学会读好书。"
	},
	{
		"labelColor" : "#960801",
		"label" : "TED",
		"h1" : "有多少App正在窥视你的隐私？",
		"p" : "可怕至极！手机应用正在窥视窃听了你的隐私，你还有多少隐私没被拿走？"
	},
	{
		"labelColor" : "#2e9057",
		"label" : "付费",
		"h1" : "学会搜索，解决你80%的问题",
		"p" : "信息爆炸时代，人生必备的搜索技能，助你实现人生进阶。"
	},
	{
		"labelColor" : "#4ca3fa",
		"label" : "赏课",
		"h1" : "穿行意大利，漫赏万种风情",
		"p" : "探索这个国家的历史，文化，食物，艺术和风景。"
	},
	{
		"labelColor" : "#2e9057",
		"label" : "付费",
		"h1" : "6亿人在用的超级工具，有效提升学习力",
		"p" : "人人用的上的思维导图课，让你高效工作认真生活。"
	},
];


