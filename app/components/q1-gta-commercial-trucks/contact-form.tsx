"use client";

import { FormField, formFields } from "@/lib/data/contactForm";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  location: string;
};

const isValidEmail = (email: string) => {
  // requires @ and a domain like .com, .ca, .net, etc
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
};

const isValidPhone = (phone: string) => {
  // remove everything except digits
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10;
};

const QuoteForm = ({
  buttonId,
  formId,
  location,
}: {
  buttonId: string;
  formId: string;
  location: string;
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    location: location.toLowerCase(),
  });
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormError(null); // clear error when user edits
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setFormError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        location: "gta",
      });
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-white rounded-2xl space-y-6"
      id={formId}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formFields.map((field: FormField) => (
          <div
            key={field.name}
            className={field.colSpan === "full" ? "md:col-span-2" : ""}
          >
            <label
              className="block text-base font-semibold mb-2"
              htmlFor={field.id}
            >
              {field.label}
              {field.required && <span className="text-red">*</span>}
            </label>

            {field.type === "input" && (
              <input
                name={field.name}
                id={field.id}
                type={field.inputType}
                value={formData[field.name]}
                required={field.required}
                onChange={handleChange}
                pattern={
                  field.inputType === "email"
                    ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                    : undefined
                }
                title={
                  field.inputType === "email"
                    ? "Please enter a valid email address"
                    : undefined
                }
                placeholder={field.placeholder}
                autoComplete="on"
                className="w-full rounded-xl bg-grey px-4 py-4 text-base outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}

            {field.type === "select" && (
              <div className="relative">
                <select
                  name={field.name}
                  value={formData[field.name]}
                  required={field.required}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-gray-300 bg-white
               px-4 py-4 pr-14 text-base"
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
        <input
          name="website"
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          placeholder="Keep it empty"
          className="my-12 box-border hidden w-full border border-[#707070] bg-[#f8f8f8] p-3 text-xl md:text-2xl lg:p-6"
        />
      </div>
      {formError && (
        <div
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {formError}
        </div>
      )}
      {/* Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="flex items-center gap-3 justify-center rounded-xl bg-[#E4F4FF] px-5 py-3 text-base font-semibold">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-main text-white">
            <Check className="h-4 w-4" />
          </span>
          <span>$50* off promo applied</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          id={buttonId}
          className="rounded-xl bg-red px-6 py-3 text-white font-semibold hover:bg-red-700 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Get Quote"}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
