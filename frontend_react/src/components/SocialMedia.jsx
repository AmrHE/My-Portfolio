import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<BsLinkedin />
			</div>
			<div>
				<BsGithub />
			</div>
			<div>
				<BsWhatsapp />
			</div>
		</div>
	);
};

export default SocialMedia;
