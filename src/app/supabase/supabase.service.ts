import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgcigsxjplbvwkmfznnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2lnc3hqcGxidndrbWZ6bm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY2NTcsImV4cCI6MjAzNzY0MjY1N30.iRJbcl5tvw8nLlby2jFU3WGW_2Ad7VLzC_8RHcbcOyY'; 
const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);

interface MarkerData {
  latitude: number;
  longitude: number;
  // Add other fields as needed
}
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

  async saveData(formData: any) {
    try {
      const { data: insertData, error: insertError } = await supabaseClient
        .from('Register')
        .insert([
          { 
            email: formData.email,
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            subnum: formData.subnum
          }
        ]);

      if (insertError) {
        console.error('Error during data insertion:', insertError);
        throw new Error(insertError.message);
      }

      console.log('Data inserted successfully:', insertData);
      return insertData;
    } catch (error) {
      console.error('Unexpected error:', error);
      throw error;
    }
  }

  //landing-page searchbar
  async getSearchAreaData(): Promise<{ full_address: string }[]> {
    try {
      const { data, error } = await supabaseClient
        .from('search_area')
        .select('full_address');
  
      if (error) {
        console.error('Error fetching full_address:', error);
        return [];
      }
  
      return data ?? [];
    } catch (error) {
      console.error('Unexpected error:', error);
      throw error;
    }
  }

  //SUBSCRIPTION TRACKING
  async getSubscriptionDetails(subscriptionNumber: string) {
  // console.log('Querying subscription number:', subscriptionNumber); 
  
  const { data, error } = await supabaseClient
    .from('subscription')
    .select('*')
    .eq('Subscription_Number', subscriptionNumber);

  if (error) {
    //console.error('Error fetching subscription details:', error.message);
    return null;
  }
  //console.log('Raw data from Supabase:', data); 
  return data;
}

 // plans
 async getPlans() {
  const { data, error } = await supabaseClient
    .from('bundle')
    .select('*');
  
  if (error) {
    console.error('Error fetching plans:', error);
    return null;
  } 
  return data;
}

// map marker display lat and lng
async getMarkerData(): Promise<any[]> {
  try {
    const { data, error } = await supabaseClient
      .from('search_area')
      .select('lat, lng'); // Select lat and lng columns
  
    if (error) {
      console.error('Error fetching marker data:', error);
      return [];
    }
  
    return data ?? [];
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
}

async submitFeedback(feedbackData: { name: string, contact: string, email: string, experience: string, rating: number, feedback: string }) {
  const { data, error } = await supabaseClient
    .from('feedback_rating')
    .insert([
      {
        name: feedbackData.name,
        contact: feedbackData.contact,
        email: feedbackData.email,
        experience: feedbackData.experience,
        rating: feedbackData.rating,
        feedback: feedbackData.feedback
      }
    ]);

  if (error) {
    console.error('Error inserting feedback:', error);
    return { success: false, message: error.message };
  }

  return { success: true, data };
}
}
