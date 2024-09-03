import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { SupabaseService } from '../supabase/supabase.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-location-availability',
  templateUrl: './location-availability.component.html',
  styleUrls: ['./location-availability.component.css']
})
export class LocationAvailabilityComponent implements OnInit {
  isMenuOpen = false;
  suggestions: string[] = [];
  private map: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private supabaseService: SupabaseService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(L => {
        this.map = L.map('map').setView([13.146172618134605, 123.74937063065235], 14);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: ''
        }).addTo(this.map);

        this.loadMarkers();
      });

      this.menuService.isMenuOpen$.subscribe((isOpen) => {
        this.isMenuOpen = isOpen;
      });
    }
  }

  // Fetching full address
  async onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input?.value ?? ''; 

    if (query.length > 1) {
      const data = await this.supabaseService.getSearchAreaData();
      this.suggestions = data
        .filter((item: { full_address: string }) => item.full_address.toLowerCase().includes(query.toLowerCase()))
        .map((item: { full_address: string }) => item.full_address);
    } else {
      this.suggestions = [];
    }
  }

  onSuggestionClick(suggestion: string) {
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = suggestion;
      this.suggestions = [];
    }
  }

  // Load markers
  private async loadMarkers(): Promise<void> {
    try {
      const markerData = await this.supabaseService.getMarkerData(); 
  
      markerData.forEach(location => {
        import('leaflet').then(L => {
          const customIcon = L.icon({
            iconUrl: 'assets/images/LOGO.png', 
            iconSize: [38, 38], 
            iconAnchor: [19, 38], 
            popupAnchor: [0, -38] 
          });
  
          L.marker([location.lat, location.lng], { icon: customIcon }) 
            .addTo(this.map)
            .bindPopup(`${location.full_address}`); 
        });
      });
    } catch (error) {
      console.error('Error loading markers:', error);
    }
  }
}
