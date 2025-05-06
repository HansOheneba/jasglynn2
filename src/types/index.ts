// Common types for our booking application

// Booking status types
export type BookingStatus = "pending" | "accepted" | "declined";

// Base Booking interface with common properties
interface BaseBooking {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: BookingStatus;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// Event Booking specific interface
export interface EventBooking extends BaseBooking {
  venue: string;
  event_date: string;
  event_time: string;
  guests: number;
  backup_generator: boolean;
  event_description?: string;
}

// Studio Booking specific interface
export interface StudioBooking extends BaseBooking {
  date: string;
  start_time: string;
  end_time: string;
  photographer_needed: boolean;
  session_type: string;
}

// Form data for event booking
export interface EventBookingFormData {
  name: string;
  email: string;
  phone: string;
  venue: string;
  event_date: string;
  event_time: string;
  guests: string | number; // Can be string during form input, number when processed
  backup_generator: boolean;
  event_description?: string;
  notes?: string;
}

// Form data for studio booking
export interface StudioBookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  start_time: string;
  end_time: string;
  photographer_needed: boolean;
  session_type: string;
  notes?: string;
}

// Form validation errors
export interface FormErrors {
  [key: string]: string;
}

// API response type
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Venue and Session Type options
export interface SelectOption {
  value: string;
  label: string;
}
