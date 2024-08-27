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
}
