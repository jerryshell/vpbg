import {Composition} from 'remotion';
import {ProgressBar} from './ProgressBar';
import {PBConfig} from './PBConfig';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id='ProgressBar'
				durationInFrames={PBConfig.duration * PBConfig.fps}
				fps={PBConfig.fps}
				width={PBConfig.width}
				height={PBConfig.height}
				component={ProgressBar}
			/>
		</>
	);
};
