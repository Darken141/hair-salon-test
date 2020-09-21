import React, { useState } from 'react'
import CustomInput from '../../components/input/input'
import CustomTextarea from '../../components/textarea/textarea'
import CustomButton from '../../components/button/button'

import { contactSectionStyles } from './contact_section.module.scss'

const ContactSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section id='kontakt' className={contactSectionStyles}>
            <h2
                data-sal="fade"
                data-sal-duration="1800"
            >Zajednajte si u nás termín</h2>
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-sal="slide-up"
                data-sal-duration="1800"
            >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact" />
                <CustomInput
                    name='name'
                    type='text'
                    handleChange={e => setName(e.target.value)}
                    value={name}
                    label='Meno*'
                    required
                />
                <CustomInput
                    name='email'
                    type='email'
                    handleChange={e => setEmail(e.target.value)}
                    value={email}
                    label='E-mail*'
                    required
                />
                <CustomTextarea
                    name="message"
                    rows="5"
                    handleChange={e => setMessage(e.target.value)}
                    value={message}
                    label="Vaša správa*"
                    required
                />
                <CustomButton>Odoslať</CustomButton>
            </form>
        </section>
    )
}

export default ContactSection
