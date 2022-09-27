// 进度条配置
export const PBConfig = {
	// 视频长度，单位秒
	duration: 10,
	// 视频 FPS
	fps: 30,
	// 视频宽度
	width: 1920,
	// 视频高度
	height: 80,
	// 视频文字大小
	fontSize: '60px',
	// 视频文字字体
	fontFamily: 'SF Pro Text, Helvetica, Arial, sans-serif',
	// 视频文字颜色
	fontColor: '#06283D',
	// 进度条前景色
	foregroundColor: '#47B5FF',
	// 进度条前景透明度
	foregroundOpacity: 0.8,
	// 进度条背景色
	backgroundColor: '#DFF6FF',
	// 章节列表 [{ title: 章节标题, start: 章节开始时间，单位秒 }]
	chapterList: [
		{
			title: '介绍',
			start: 0
		},
		{
			title: '编码',
			start: 2
		},
		{
			title: '调试',
			start: 6
		},
		{
			title: '结语',
			start: 8
		}
	] as {title: string, start: number}[]
};
