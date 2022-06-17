import React from 'react'

function SocialProfiles({ formData, setFormData }) {
	return (
		<div className="social-info-container">
			<input
				type="text"
				placeholder="Github"
				value={formData.github}
				onChange={(e) => {
					setFormData({ ...formData, github: e.target.value })
				}}
			/>
			<input
				type="text"
				placeholder="LinkedIn"
				value={formData.linkedin}
				onChange={(e) => {
					setFormData({ ...formData, linkedin: e.target.value })
				}}
			/>
			<input
				type="text"
				placeholder="Twitter"
				value={formData.twitter}
				onChange={(e) => {
					setFormData({ ...formData, twitter: e.target.value })
				}}
			/>
		</div>
	)
}

export default SocialProfiles
