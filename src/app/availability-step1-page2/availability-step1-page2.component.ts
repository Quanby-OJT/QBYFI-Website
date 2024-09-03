import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { SupabaseService } from '../supabase/supabase.service'; // Import your SupabaseService

interface StepItem {
  imageSrc: string;
  altText: string;
  title: string;
}

@Component({
  selector: 'app-availability-step1-page2',
  templateUrl: './availability-step1-page2.component.html',
  styleUrls: ['./availability-step1-page2.component.css']
})

export class AvailabilityStep1Page2Component implements OnInit {
  steps: StepItem[] = [
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c0de9f2cd49a6b35866bea1d2568f6ffc2b860f00ac36b45188bdb4c026805a3?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e', altText: 'Check Availability icon', title: 'Check<br>Availability' },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/764ac27d0dbddd9d17b9d87cd6159b8b2c65f64b10c124c71880bfd8e1c84c68?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e', altText: 'Plan icon', title: 'Plan' },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f987c3d18019951ffef10ee879fb7f8757f7a8dee8b92e4f04b2fbd3ce540779?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e', altText: 'Basic Details icon', title: 'Basic Details' },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74120c0aec0b43e48b7fc87378ee306faed6b067cbbd672ca3ea02e7d8e86f88?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e', altText: 'Suggested Installation Date icon', title: 'Suggested<br><span class=\'text-base\'>Installation</span><br>Date' },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2ec9d3ed5341698bbc1b6a7b232821c116f50a234e6bfbf57e4708ee2d99f36?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e', altText: 'Verify & Submit icon', title: 'Verify &<br>Submit' }
  ];
  
  uuid: string = '';
  getStepClass(index: number): string {
    return "w-[75px] text-center";
  }
  
  addressForm: FormGroup;
  searchCompleted: boolean = false;
  private map: any;
  private currentMarker: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private supabaseService: SupabaseService // Inject SupabaseService
  ) {
    this.addressForm = this.fb.group({
      input1: [''],
      input2: [''],
      input3: [''],
      input4: [''],
      input5: [''],
      input6: [''],
      input7: [''],
      input8: [''],
      input9: [''],
      input10: [''],
      latitude: [''],
      longitude: ['']
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMap();
    }

    this.route.queryParams.subscribe(params => {
      const uuid = params['uuid'];
      if (uuid) {
        this.uuid = uuid;
        console.log('UUID from query params:', this.uuid);
        // Optionally fetch data based on UUID here
      }
    });
  }

  private async initializeMap() {
    const { default: L } = await import('leaflet');
    this.map = L.map('map').setView([13.146172618134605, 123.74937063065235], 14);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: ''
    }).addTo(this.map);

    this.addSearchFunctionality(L);
    this.addMapClickListener(L);
  }

  private addSearchFunctionality(L: any) {
    const searchControlElement = document.getElementById('search-input');

    if (searchControlElement) {
      searchControlElement.addEventListener('change', async (event: any) => {
        const input = event.target as HTMLInputElement;
        const query = input.value;

        if (query) {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
          const results = await response.json();

          if (results.length > 0) {
            const { lat, lon, display_name } = results[0];
            const customIcon = L.icon({
              iconUrl: 'assets/images/LOGO.png',
              iconSize: [38, 38],
              iconAnchor: [19, 38],
              popupAnchor: [0, -38]
            });

            if (this.currentMarker) {
              this.currentMarker.remove();
            }

            this.currentMarker = L.marker([lat, lon], { icon: customIcon })
              .addTo(this.map)
              .bindPopup(display_name)
              .openPopup();
            this.map.setView([lat, lon], 14);

            this.updateFormFields(display_name, lat, lon);
            this.searchCompleted = true;
          } else {
            Swal.fire({
              title: 'No results found',
              text: 'No results were found for the provided query.',
              icon: 'info',
              confirmButtonText: 'OK'
            });
          }
        }
      });
    }
  }

  private addMapClickListener(L: any) {
    this.map.on('click', (event: any) => {
      const { lat, lng } = event.latlng;

      const customIcon = L.icon({
        iconUrl: 'assets/images/LOGO.png',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
      });

      if (this.currentMarker) {
        this.currentMarker.remove();
      }

      this.currentMarker = L.marker([lat, lng], { icon: customIcon })
        .addTo(this.map)
        .bindPopup(`Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`)
        .openPopup();
      
      this.map.setView([lat, lng], 14);
      this.addressForm.patchValue({
        latitude: lat,
        longitude: lng
      });
    });
  }

  private updateFormFields(addressLabel: string, lat: number, lon: number) {
    const addressDetails = this.parseAddressDetails(addressLabel);

    this.addressForm.patchValue({
      input1: addressDetails.input1 || '',
      input2: addressDetails.input2 || '',
      input3: addressDetails.input3 || '',
      input4: addressDetails.input4 || '',
      input5: addressDetails.input5 || '',
      input6: addressDetails.input6 || '',
      input7: addressDetails.input7 || '',
      input8: addressDetails.input8 || '',
      input9: addressDetails.input9 || '',
      input10: addressDetails.input10 || '',
      latitude: lat,
      longitude: lon
    });
  }

  private parseAddressDetails(addressLabel: string): any {
    const parts = addressLabel.split(',');
    return {
      input1: parts[0]?.trim() || '',
      input2: parts[1]?.trim() || '',
      input3: parts[2]?.trim() || '',
      input4: parts[3]?.trim() || '',
      input5: parts[4]?.trim() || '',
      input6: parts[5]?.trim() || '',
      input7: parts[6]?.trim() || '',
      input8: parts[7]?.trim() || '',
      input9: parts[8]?.trim() || '',
      input10: parts[9]?.trim() || ''
    };
  }

  async onSubmit() {
    const formUUID = this.uuid; // Use the UUID from the component property

    if (formUUID) {
      const uuidData = await this.supabaseService.fetchSupabaseUUID(formUUID);

      if (uuidData && uuidData.length > 0) {
        const updateResult = await this.supabaseService.updateBasicInfo({
          uuid: formUUID,
          // Add other form data here
          ...this.addressForm.value // Spread operator to include all form values
        });

        if (updateResult.success) {
          this.router.navigate(['/availability-step2'], { queryParams: { uuid: formUUID } });
        } else {
          Swal.fire({
            title: 'Error!',
            text: `Update failed: ${updateResult.message}`,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'UUID does not match. Please go back to the basic form.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'No UUID provided in the form.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}
