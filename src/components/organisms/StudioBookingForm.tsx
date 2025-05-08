import React, { useState, useEffect } from "react";
import FormField from "../molecules/FormField";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { StudioBookingFormData, FormErrors, SelectOption } from "@/types";

const StudioBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<StudioBookingFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    start_time: "",
    end_time: "",
    photographer_needed: false,
    session_type: "",
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

  const sessionTypeOptions: SelectOption[] = [
    { value: "", label: "Select session type" },
    { value: "Portrait", label: "Portrait Photography" },
    { value: "Product", label: "Product Photography" },
    { value: "Fashion", label: "Fashion Photography" },
    { value: "Corporate", label: "Corporate Photography" },
    { value: "Other", label: "Other" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    const requiredFields = [
      "name",
      "email",
      "phone",
      "date",
      "start_time",
      "end_time",
      "session_type",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field as keyof StudioBookingFormData]) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Time validation - end time must be after start time
    if (
      formData.start_time &&
      formData.end_time &&
      formData.start_time >= formData.end_time
    ) {
      newErrors.end_time = "End time must be after start time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      const response = await fetch("/api/studio-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "✅ Studio booking submitted successfully. We will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          start_time: "",
          end_time: "",
          photographer_needed: false,
          session_type: "",
          notes: "",
        });
        setShowAlert(true);
      } else {
        setSubmitMessage({
          type: "error",
          message:
            data.error || "Failed to submit studio booking. Please try again.",
        });
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error submitting studio booking:", error);
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
          Book Your Photo Studio
        </h2>
        <div className="w-20 h-1 bg-jasglynn-coral mx-auto mb-4"></div>
        <p className="text-gray-600">
          Reserve our professional photography studio for your next session
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <div className="bg-jasglynn-sky/10 p-6 rounded-lg border border-jasglynn-sky/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Personal Information
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

            <FormField
              id="session_type"
              label="Session Type"
              required
              error={errors.session_type}
            >
              <Select
                id="session_type"
                name="session_type"
                value={formData.session_type}
                onChange={handleChange}
                required
              >
                {sessionTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </div>

        {/* Session Timing */}
        <div className="bg-jasglynn-coral/10 p-6 rounded-lg border border-jasglynn-coral/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-coral"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Session Schedule
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              id="date"
              label="Session Date"
              required
              error={errors.date}
            >
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              id="start_time"
              label="Start Time"
              required
              error={errors.start_time}
            >
              <Input
                id="start_time"
                name="start_time"
                type="time"
                value={formData.start_time}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField
              id="end_time"
              label="End Time"
              required
              error={errors.end_time}
            >
              <Input
                id="end_time"
                name="end_time"
                type="time"
                value={formData.end_time}
                onChange={handleChange}
                required
              />
            </FormField>
          </div>

          <div className="mt-4 ml-2">
            <FormField id="photographer_needed">
              <Checkbox
                id="photographer_needed"
                name="photographer_needed"
                checked={formData.photographer_needed}
                onChange={handleChange}
                label="I need a professional photographer (additional fee of $200/hour)"
              />
            </FormField>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-jasglynn-yellow/5 p-6 rounded-lg border border-jasglynn-yellow/30">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-jasglynn-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Additional Requirements
          </h3>

          <FormField
            id="notes"
            label="Special Requests or Notes"
            error={errors.notes}
          >
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes || ""}
              onChange={handleChange}
              placeholder="Tell us about any specific equipment, backdrop, or lighting needs for your session..."
              rows={4}
            />
          </FormField>
        </div>

        {/* Studio Equipment Information */}
        <div className="bg-jasglynn-lime/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-jasglynn-gray mb-2">
            Included Equipment
          </h3>
          <p className="text-gray-600 mb-4">
            Your studio booking includes the following equipment:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Professional lighting setup (softboxes, umbrellas)</span>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Basic backdrop setup (white, black, green)</span>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Reflectors and diffusers</span>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-jasglynn-green mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Private dressing room</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <Button
            type="submit"
            variant="danger"
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
              "Book Photo Studio"
            )}
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Cancellations must be made at least 48 hours in advance for a full
            refund.
          </p>
        </div>
      </form>
    </div>
  );
};

export default StudioBookingForm;
