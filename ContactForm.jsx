import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkoyeepa");

  if (state.succeeded) {
    return <p className="text-green-600">Thanks! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="block mb-1">Email Address</label>
        <input id="email" type="email" name="email" required className="border p-2 rounded w-full" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <textarea id="message" name="message" required className="border p-2 rounded w-full" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
