import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define constants outside the class
const supabaseUrl = 'https://qgcigsxjplbvwkmfznnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2lnc3hqcGxidndrbWZ6bm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY2NTcsImV4cCI6MjAzNzY0MjY1N30.iRJbcl5tvw8nLlby2jFU3WGW_2Ad7VLzC_8RHcbcOyY';
const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);

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