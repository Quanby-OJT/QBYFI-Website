import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcryptjs'; 

const supabaseUrl = 'https://qgcigsxjplbvwkmfznnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2lnc3hqcGxidndrbWZ6bm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY2NTcsImV4cCI6MjAzNzY0MjY1N30.iRJbcl5tvw8nLlby2jFU3WGW_2Ad7VLzC_8RHcbcOyY'; 
const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() { }

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
}
