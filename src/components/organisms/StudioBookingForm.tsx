import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Select from '../atoms/Select';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import { StudioBookingFormData, FormErrors, SelectOption } from '@/types';

const StudioBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<StudioBookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    start_time: '',
    end_time: '',
    photographer_needed: false,
    session_type: '',
    notes: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: string; message: string }>({ type: '', message: '' });
  
  const sessionTypeOptions: SelectOption[] = [
    { value: '', label: 'Select session type' },
    { value: 'Portrait', label: 'Portrait Photography' },
    { value: 'Product', label: 'Product Photography' },
    { value: 'Fashion', label: 'Fashion Photography' },
    { value: 'Corporate', label: 'Corporate Photography' },
    { value: 'Other', label: 'Other' }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Required fields validation
    const requiredFields = ['name', 'email', 'phone', 'date', 'start_time', 'end_time', 'session_type'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof StudioBookingFormData]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Time validation - end time must be after start time
    if (formData.start_time && formData.end_time && formData.start_time >= formData.end_time) {
      newErrors.end_time = 'End time must be after start time';
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
    setSubmitMessage({ type: '', message: '' });
    
    try {
      const response = await fetch('/api/studio-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage({ type: 'success', message: 'Studio booking submitted successfully. We will contact you shortly.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          start_time: '',
          end_time: '',
          photographer_needed: false,
          session_type: '',
          notes: ''
        });
      } else {
        setSubmitMessage({ type: 'error', message: data.error || 'Failed to submit studio booking. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting studio booking:', error);
      setSubmitMessage({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Photo Studio Booking</h2>
      
      {submitMessage.message && (
        <div 
          className={`mb-6 p-4 rounded ${
            submitMessage.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitMessage.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          <FormField id="email" label="Email Address" required error={errors.email}>
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
          
          <FormField id="phone" label="Phone Number" required error={errors.phone}>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </FormField>
          
          <FormField id="session_type" label="Session Type" required error={errors.session_type}>
            <Select
              id="session_type"
              name="session_type"
              value={formData.session_type}
              onChange={handleChange}
              required
            >
              {sessionTypeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormField>
          
          <FormField id="date" label="Session Date" required error={errors.date}>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormField>
          
          <div className="grid grid-cols-2 gap-2">
            <FormField id="start_time" label="Start Time" required error={errors.start_time}>
              <Input
                id="start_time"
                name="start_time"
                type="time"
                value={formData.start_time}
                onChange={handleChange}
                required
              />
            </FormField>
            
            <FormField id="end_time" label="End Time" required error={errors.end_time}>
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
        </div>
        
        <FormField id="photographer_needed" className="mt-4">
          <Checkbox
            id="photographer_needed"
            name="photographer_needed"
            checked={formData.photographer_needed}
            onChange={handleChange}
            label="I need a professional photographer (additional charges apply)"
          />
        </FormField>
        
        <FormField id="notes" label="Additional Notes" error={errors.notes}>
          <TextArea
            id="notes"
            name="notes"
            value={formData.notes || ''}
            onChange={handleChange}
            placeholder="Any specific requirements or details about your session"
            rows={3}
          />
        </FormField>
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? 'Submitting...' : 'Book Photo Studio'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudioBookingForm;