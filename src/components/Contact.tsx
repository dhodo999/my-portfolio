import React, { useState } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { PORTFOLIO_CONFIG } from '../config';
import { Copy, Check, Send } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t.errNameRequired;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = t.errEmailInvalid;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = t.errEmailInvalid;
    }

    if (form.message.trim().length < 10) {
      newErrors.message = t.errMessageShort;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(PORTFOLIO_CONFIG.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        console.error(t.emailCopyError);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setForm({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1200);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 scroll-mt-16 text-left max-w-2xl mx-auto px-6"
    >
      {/* Title */}
      <div className="mb-10 reveal text-center sm:text-left">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="space-y-8 reveal">
        {/* Form Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-850 shadow-sm shadow-slate-100/50 dark:shadow-none">
          {submitSuccess && (
            <div className="p-4 mb-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-305 rounded-xl text-xs sm:text-sm font-semibold">
              {t.formSuccess}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="form-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-mono"
              >
                {t.formName}
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950 border text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors ${
                  errors.name
                    ? 'border-red-350 dark:border-red-900/50 focus:border-red-500'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-red-500 dark:text-red-400 block mt-1 font-mono">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="form-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-mono"
              >
                {t.formEmail}
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950 border text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors ${
                  errors.email
                    ? 'border-red-355 dark:border-red-900/50 focus:border-red-500'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-500 dark:text-red-400 block mt-1 font-mono">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="form-message"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-mono"
              >
                {t.formMessage}
              </label>
              <textarea
                id="form-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-50/50 dark:bg-slate-950 border text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors resize-none ${
                  errors.message
                    ? 'border-red-350 dark:border-red-900/50 focus:border-red-500'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              />
              {errors.message && (
                <span className="text-[11px] text-red-500 dark:text-red-400 block mt-1 font-mono">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 dark:bg-zinc-800 hover:bg-slate-900 dark:hover:bg-zinc-700 text-white font-semibold shadow-sm transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border-0"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>{t.formSubmitting}</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>{t.formSubmit}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Email Copy Card */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-850 flex items-center justify-between text-xs bg-slate-50/50 dark:bg-zinc-900/10">
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono text-[9px]">
              {t.emailLabel}
            </span>
            <span className="font-mono text-slate-700 dark:text-slate-300 font-bold select-all mt-0.5">
              {PORTFOLIO_CONFIG.email}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="p-2 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-zinc-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Copy email address"
            title="Copy email to clipboard"
          >
            {copied ? (
              <Check
                size={14}
                className="text-emerald-600 dark:text-emerald-450"
              />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
