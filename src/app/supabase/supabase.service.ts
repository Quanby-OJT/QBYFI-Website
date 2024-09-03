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


  // Method to upload image to Supabase bucket
  async uploadImage(file: File, qbyfi_file: string): Promise<string | null> {
    const fileName = `${Date.now()}_${file.name}`;
    try {
      // Upload the image to the specified bucket
      const { data, error } = await supabaseClient
        .storage
        .from(qbyfi_file)
        .upload(fileName, file);

      if (error) {
        console.error('Error uploading image:', error.message);
        return null;
      }

      // Get the public URL of the uploaded image
      const { data: publicUrlData } = supabaseClient
        .storage
        .from(qbyfi_file)
        .getPublicUrl(fileName);

      // Ensure publicUrlData is defined
      if (!publicUrlData) {
        console.error('Error getting public URL: No data returned');
        return null;
      }

      console.log('Image uploaded successfully:', publicUrlData.publicUrl);
      return publicUrlData.publicUrl || null;
    } catch (error) {
      console.error('Unexpected error:', error);
      return null;
    }
  }

  async insertContactUs(name: string, email: string, message: string, imageUrl: string) {
    console.log('Inserting contact data:', { name, email, message, imageUrl });

    try {
      // Insert data into the contact_us table
      const { data, error } = await supabaseClient
        .from('contact')
        .insert([
          { name: name, email: email, message: message, image_url: imageUrl }
        ]);

      if (error) {
        console.error('Error inserting contact data:', error.message);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Unexpected error:', error);
      return null;
    }
  }
}

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
}
