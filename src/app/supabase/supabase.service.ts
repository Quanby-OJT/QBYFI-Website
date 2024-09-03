import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcryptjs'; 

const supabaseUrl = 'https://qgcigsxjplbvwkmfznnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2lnc3hqcGxidndrbWZ6bm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY2NTcsImV4cCI6MjAzNzY0MjY1N30.iRJbcl5tvw8nLlby2jFU3WGW_2Ad7VLzC_8RHcbcOyY'; 
const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);

interface MarkerData {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    try {
      const { data: user, error } = await supabaseClient
        .from('accounts')
        .select('email, password')
        .eq('email', email)
        .single();

      if (error || !user) {
        return { success: false, message: 'Wrong email or password.' };
      }

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);

      if (!isPasswordCorrect) {
        return { success: false, message: 'Wrong email or password.' };
      }

      return { success: true, message: 'Login successful.' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An unexpected error occurred. Please try again later.' };
    }
  }
  async saveAccountData(formData: any) {
    try {
      const { data: insertData, error: insertError } = await supabaseClient
        .from('accounts') 
        .insert([
          {
            email: formData.email,
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            subnum: formData.subnum,
            password: formData.password
          }
        ]);

      if (insertError) {
        console.error('Error during account data insertion:', insertError);
        throw new Error(insertError.message);
      }

      console.log('Account data inserted successfully:', insertData);
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
      .select('lat, lng, full_address'); // Select lat and lng columns
  
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

async fetchData(tableName: string) {
  const { data, error } = await supabaseClient
    .from(tableName)
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  return data;
}


async submitBasicInfo(basicData: {uuid: string, firstName: string, lastName: string, mobileNumber: string, email: string, consent: string }) {
  const { data, error } = await supabaseClient
    .from('subscription')
    .insert([
      {
        uuid: basicData.uuid,
        firstName: basicData.firstName,
        lastName: basicData.lastName,
        mobileNumber: basicData.mobileNumber,
        email: basicData.email,
        consent: basicData.consent // Ensure this matches the column name in Supabase
      }
    ]);

  if (error) {
    console.error('Error inserting basic info:', error);
    return { success: false, message: error.message };
  }

  return { success: true, data };
}
async updateBasicInfo(basicData: {
  uuid: string,
  input1: string,
  input2: string,
  input3: string,
  input4: string,
  input5: string,
  input6: string,
  input7: string,
  input8: string,
  input9: string,
  input10: string,
  latitude: string,
  longitude: string
}) {
  const { uuid, ...dataToUpdate } = basicData;

  // Update record with the matching UUID
  const { data, error } = await supabaseClient
    .from('subscription')
    .update(dataToUpdate)
    .eq('uuid', uuid);

  if (error) {
    console.error('Error updating basic info:', error);
    return { success: false, message: error.message };
  }

  return { success: true, data };
}

async fetchSupabaseUUID(uuid: string) {
  const { data, error } = await supabaseClient
    .from('subscription')
    .select('uuid')
    .eq('uuid', uuid);

  if (error) {
    console.error('Error fetching UUID:', error);
    return null;
  }

  return data;
}
}
