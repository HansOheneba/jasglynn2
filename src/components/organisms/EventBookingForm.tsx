import React, { useState, useEffect } from "react";
import FormField from "../molecules/FormField";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { EventBookingFormData, FormErrors, SelectOption } from "@/types";

const EventBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<EventBookingFormData>({
    name: "",
    email: "",
    phone: "",
    venue: "",
    event_date: "",
    event_time: "",
    guests: "",
    backup_generator: false,
    event_description: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: string;
    message: string;
  }>({ type: "", message: "" });
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Auto-dismiss the alert after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showAlert]);

  const venueOptions: SelectOption[] = [
    { value: "", label: "Select a venue" },
    { value: "Diplomatic Hall", label: "Diplomatic Hall" },
    { value: "Garden", label: "Garden" },
    { value: "Grand Ballroom", label: "Grand Ballroom" },
    { value: "Executive Suite", label: "Executive Suite" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = [
      "name",
      "email",
      "phone",
      "venue",
      "event_date",
      "event_time",
      "guests",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof EventBookingFormData]) {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (
      formData.guests &&
      (isNaN(Number(formData.guests)) || parseInt(String(formData.guests)) <= 0)
    ) {
      newErrors.guests = "Please enter a valid number of guests";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "✅ Booking submitted successfully. We will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          venue: "",
          event_date: "",
          event_time: "",
          guests: "",
          backup_generator: false,
          event_description: "",
          notes: "",
        });
        setShowAlert(true);
      } else {
        setSubmitMessage({
          type: "error",
          message: data.error || "Failed to submit booking. Please try again.",
        });
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSubmitMessage({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {submitMessage.message && showAlert && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md transition-all duration-300 ease-in-out ${
            showAlert
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${
              submitMessage.type === "success"
                ? "bg-jasglynn-lime/20 text-jasglynn-green border border-jasglynn-lime"
                : "bg-jasglynn-coral/20 text-jasglynn-coral border border-jasglynn-coral"
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">{submitMessage.message}</span>
            </div>
            <button
              type="button"
              className="text-jasglynn-gray/70 hover:text-jasglynn-gray"
              onClick={() => setShowAlert(false)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-jasglynn-gray">
          Book Your Event Venue
        </h2>
        <div className="w-20 h-1 bg-jasglynn-yellow mx-auto mb-4"></div>
        <p className="text-gray-600">
          Fill in your event details below and our team will help make your
          event a success.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Info */}
        <div className="bg-jasglynn-sky/10 p-6 rounded-lg border border-jasglynn-sky/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-green"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField id="name" label="Full Name" required error={errors.name}>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </FormField>

            <FormField
              id="email"
              label="Email Address"
              required
              error={errors.email}
            >
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </FormField>

            <FormField
              id="phone"
              label="Phone Number"
              required
              error={errors.phone}
            >
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </FormField>
          </div>
        </div>

        {/* Event Info */}
        <div className="bg-jasglynn-lime/10 p-6 rounded-lg border border-jasglynn-lime/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-green"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Event Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField id="venue" label="Venue" required error={errors.venue}>
              <Select
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
              >
                {venueOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormField>

            <FormField
              id="event_date"
              label="Event Date"
              required
              error={errors.event_date}
            >
              <Input
                id="event_date"
                name="event_date"
                type="date"
                value={formData.event_date}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              id="event_time"
              label="Event Time"
              required
              error={errors.event_time}
            >
              <Input
                id="event_time"
                name="event_time"
                type="time"
                value={formData.event_time}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              id="guests"
              label="Number of Guests"
              required
              error={errors.guests}
            >
              <Input
                id="guests"
                name="guests"
                type="number"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Enter number of guests"
                min="1"
                required
              />
            </FormField>

            <FormField id="backup_generator" label="">
              <Checkbox
                id="backup_generator"
                name="backup_generator"
                checked={formData.backup_generator}
                onChange={handleChange}
                label="Require backup generator for the event"
              />
            </FormField>
          </div>
        </div>

        {/* Description */}
        <div className="bg-jasglynn-yellow/5 p-6 rounded-lg border border-jasglynn-yellow/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-yellow"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Additional Information
          </h3>
          <FormField
            id="event_description"
            label="Event Description"
            error={errors.event_description}
          >
            <TextArea
              id="event_description"
              name="event_description"
              value={formData.event_description || ""}
              onChange={handleChange}
              placeholder="Describe your event (type, theme, special requirements)"
              rows={3}
            />
          </FormField>

          <FormField id="notes" label="Additional Notes" error={errors.notes}>
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes || ""}
              onChange={handleChange}
              placeholder="Any additional requirements or notes for our team"
              rows={3}
            />
          </FormField>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="px-10 py-3 font-semibold rounded-md"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
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
                Processing...
              </span>
            ) : (
              "Book Event Venue"
            )}
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-jasglynn-green hover:underline">
              terms and conditions
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default EventBookingForm;
