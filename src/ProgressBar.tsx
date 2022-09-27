import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {PBConfig} from './PBConfig';

const Chapter = ({title, x}: {title: string, x: number}) => {
	return (
		<span
			style={{
				position: 'absolute',
				left: `${x}px`,
				color: `${PBConfig.fontColor}`,
				fontFamily: `${PBConfig.fontFamily}`
			}}
		>
			| {title}
		</span>
	);
};

export const ProgressBar = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, width} = useVideoConfig();
	const x = interpolate(frame, [0, durationInFrames], [0, width]);

	return (
		<AbsoluteFill
			style={{
				fontSize: `${PBConfig.fontSize}`,
				backgroundColor: `${PBConfig.backgroundColor}`
			}}
		>
			{PBConfig.chapterList.map(chapter => (
				<Chapter
					title={chapter.title}
					x={chapter.start / PBConfig.duration * width}
				/>
			))}
			<AbsoluteFill
				style={{
					transform: `translateX(${x}px)`,
					left: `-${width - 4}px`,
					backgroundColor: `${PBConfig.foregroundColor}`,
					opacity: `${PBConfig.foregroundOpacity}`
				}}
			/>
		</AbsoluteFill>
	);
};
