import axiosInstance from './axiosInstance';

export const submitHealthInsuranceLead = async (formData) => {
  try {
    const response = await axiosInstance.post('/health-insurance-leads', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting health insurance lead:', error);
    throw error;
  }
};

export const getHealthInsuranceLeads = async () => {
  try {
    const response = await axiosInstance.get('/health-insurance-leads');
    return response.data;
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw error;
  }
};
