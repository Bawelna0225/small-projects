import React, { useState } from 'react'
import SignUpInfo from './SignUpInfo'
import PersonalInfo from './PersonalInfo'
import SocialProfiles from './SocialProfiles'

function Form() {
	const [step, setStep] = useState(0)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		username: '',
		nationality: '',
		github: '',
		linkedin: '',
		twitter: '',
		phone: '',
	})

	const FormTitles = ['Sign Up', 'Personal Info', 'Social Profiles']

	const StepDisplay = () => {
		if (step === 0) {
			return <SignUpInfo formData={formData} setFormData={setFormData} />
		} else if (step === 1) {
			return <PersonalInfo formData={formData} setFormData={setFormData} />
		} else {
			return <SocialProfiles formData={formData} setFormData={setFormData} />
		}
	}

	return (
		<div className="form">
			<p className="bg-text">{FormTitles[step]}</p>
			<p className='steps'>Step <span>{step + 1}</span> of {FormTitles.length}</p>
			<div className="progressbar">
				<div style={{ transition: 'all 300ms linear', width: step === 0 ? '0%' : step === 1 ? '50%' : '100%' }}></div>
			</div>
			<div className="form-container">
				<div className="header">
					<h1>{FormTitles[step]}</h1>
				</div>
				<div className="body">{StepDisplay()}</div>
				<div className="footer">
					<button
						disabled={step === 0}
						onClick={() => {
							setStep((currStep) => currStep - 1)
						}}
					>
						Prev
					</button>
					<button
						onClick={() => {
							if (step === FormTitles.length - 1) {
								alert('FORM SUBMITTED')
								
								console.log(formData)
							} else {
								setStep((currStep) => currStep + 1)
							}
						}}
					>
						{step === FormTitles.length - 1 ? 'Confirm' : 'Next'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Form
