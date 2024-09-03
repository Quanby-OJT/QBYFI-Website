import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookiesandprivacy',
  templateUrl: './cookiesandprivacy.component.html',
  styleUrls: ['./cookiesandprivacy.component.css']
})
export class CookiesandprivacyComponent implements OnInit {
  isVisible: boolean = true;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const hideTime = localStorage.getItem('hideCookiesConsentUntil');
      if (hideTime && new Date(hideTime) > new Date()) {
        this.isVisible = false;
      }
    }
  }

/*
  acceptAllCookies(): void {
    if (typeof window !== 'undefined' && localStorage) {
      this.isVisible = false;
      localStorage.setItem('cookiesAccepted', 'true');
    }
  }
*/

  hideCookiesConsent(): void {
    if (typeof window !== 'undefined' && localStorage) {
      this.isVisible = false;
      const hideUntil = new Date();
      hideUntil.setHours(hideUntil.getHours() + 24);
      localStorage.setItem('hideCookiesConsentUntil', hideUntil.toISOString());
    }
  }
}
