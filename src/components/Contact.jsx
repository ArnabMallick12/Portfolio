import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sectionRef = useScrollReveal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState(null);
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // 🔑 GET THESE FROM https://dashboard.emailjs.com/
        // Create an account, add an Email Service, and create an Email Template.
        const SERVICE_ID = "service_r4xmtpe";
        const TEMPLATE_ID = "template_g22sixb";
        const PUBLIC_KEY = "3ZjF64VJ2UCPSjWN9";

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: "Arnab",
            };

            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (response.status === 200) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
                setTimeout(() => setFormStatus('idle'), 5000); // Reset button after 5s
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'arnavmallick12006@gmail.com', href: 'mailto:arnavmallick12006@gmail.com', gradient: 'from-primary to-purple-400' },
        { icon: '📱', label: 'Phone', value: '+91 7016422127', href: 'tel:+917016422127', gradient: 'from-secondary to-cyan-400' },
        { icon: '📍', label: 'Location', value: 'Gandhinagar, Gujarat, India', href: '#', gradient: 'from-accent to-pink-400' },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn', icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            ), url: 'https://linkedin.com/in/', color: 'hover:bg-[#0077b5]'
        },
        {
            name: 'GitHub', icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            ), url: 'https://github.com/', color: 'hover:bg-[#333]'
        },
        {
            name: 'LeetCode', icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
            ), url: 'https://leetcode.com/', color: 'hover:bg-[#ffa116]'
        },
    ];

    return (
        <section id="contact" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-5">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text reveal">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left info */}
                    <div className="reveal-left" style={{ transitionDelay: '0.1s' }}>
                        <h3 className="text-2xl font-bold text-primary-light mb-4">Let's Connect!</h3>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your visions. Feel free to reach out!
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="glass flex items-center gap-5 p-5 cursor-pointer group"
                                    style={{ transitionDelay: `${i * 0.1}s` }}
                                >
                                    <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <span className="block text-xs text-text-muted uppercase tracking-widest mb-0.5">
                                            {item.label}
                                        </span>
                                        <span className="block text-text-primary font-medium text-sm">
                                            {item.value}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-xs text-text-muted uppercase tracking-widest mb-4 font-medium">Follow Me</h4>
                            <div className="flex gap-3 flex-wrap">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-5 py-3 bg-bg-glass border border-white/10 rounded-full text-text-secondary font-medium text-sm transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${link.color}`}
                                        title={link.name}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <form
                        className="glass p-8 md:p-10 reveal-right"
                        style={{ transitionDelay: '0.2s' }}
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-xl font-bold text-text-primary mb-8">Send a Message</h3>

                        {[
                            { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                            { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                        ].map((field) => (
                            <div key={field.id} className="mb-6">
                                <label htmlFor={field.id} className={`block mb-2 text-sm font-medium transition-colors duration-300 ${focusedField === field.id ? 'text-primary' : 'text-text-secondary'}`}>
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    value={formData[field.id]}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField(field.id)}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder={field.placeholder}
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary font-[inherit] text-base transition-all duration-300 placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(139,92,246,0.2)] focus:bg-white/8"
                                />
                            </div>
                        ))}

                        <div className="mb-8">
                            <label htmlFor="message" className={`block mb-2 text-sm font-medium transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-text-secondary'}`}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Your message here..."
                                rows="5"
                                required
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-text-primary font-[inherit] text-base transition-all duration-300 placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(139,92,246,0.2)] focus:bg-white/8 resize-y min-h-[120px]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${formStatus === 'success' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' :
                                    formStatus === 'error' ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' :
                                        'btn-glow'
                                }`}
                        >
                            {formStatus === 'idle' && <>Send Message <span>✉️</span></>}
                            {formStatus === 'submitting' && <>Sending... <span>⏳</span></>}
                            {formStatus === 'success' && <>Message Sent! <span>✅</span></>}
                            {formStatus === 'error' && <>Failed to Send <span>❌</span></>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
