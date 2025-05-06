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
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-black">
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
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">{submitMessage.message}</span>
            </div>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800"
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

      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Book Your Event Venue
      </h2>
      <p className="text-gray-600 mb-6">
        Fill in your event details and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
        <div className="bg-gray-50 p-6 rounded-lg border">
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
              placeholder="Describe your event"
              rows={3}
            />
          </FormField>

          <FormField id="notes" label="Additional Notes" error={errors.notes}>
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes || ""}
              onChange={handleChange}
              placeholder="Any additional requirements or notes"
              rows={3}
            />
          </FormField>
        </div>

        {/* Submit */}
        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-md shadow-md"
          >
            {isSubmitting ? "Submitting..." : "Book Event Venue"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventBookingForm;
