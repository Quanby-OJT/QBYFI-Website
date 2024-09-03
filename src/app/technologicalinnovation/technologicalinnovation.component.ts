import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface HelpTopic {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-technologicalinnovation',
  templateUrl: './technologicalinnovation.component.html',
  styleUrl: './technologicalinnovation.component.css'
})
export class TechnologicalinnovationComponent {
  searchQuery: string = '';
  isLoading = false;
  searchSuggestions: HelpTopic[] = [];

  helpTopics: HelpTopic[] = [
    {
      title: 'Network Infrastructure',
      description: 'ISP often face challenges in expanding and maintaining their network infrastructure to meet growing demand for bandwidth and reliability.',
      link: '/networkinfastructure'
    },
    {
      title: 'Data Security and Privacy',
      description: 'Ensuring the security and privacy of customer data is a critical concern for ISPs, especially with increasing cybersecurity threats.',
      link: '/datasecurityandprivacy'
    },
    {
      title: 'Technological Innovation',
      description: 'Staying ahead in terms of technological advancements and innovations is key for ISPs to remain competitive in the market.',
      link: '/technologicalinnovation'
    },
    {
      title: 'Customer Support',
      description: 'Providing effective and timely customer support is crucial for ISPs to maintain customer satisfaction and loyalty.',
      link: '/customersupport'
    },
    {
      title: 'Regulatory Compliance',
      description: 'ISPs must navigate various regulatory requirements and compliance standards imposed by government agencies.',
      link: '/regulatorycompliance'
    },
    {
      title: 'Broadband Access',
      description: 'Addressing disparities in broadband access and bridging the digital divide is a significant challenge for ISPs and policymakers alike.',
      link: '/broadbandaccess'
    }
  ];

  constructor(private router: Router) {}

  onSearchInput(): void {
    if (this.searchQuery.trim()) {
      this.searchSuggestions = this.helpTopics.filter(topic =>
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
    } else {
      this.searchSuggestions = [];
    }
  }

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      const matchingTopic = this.helpTopics.find(topic =>
        topic.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (matchingTopic) {
        this.router.navigate([matchingTopic.link]);
      } else {
        console.log('No matching topic found');
        // Handle no results case
      }
    }
    this.searchSuggestions = []; // Clear suggestions after search
  }

  selectSuggestion(topic: HelpTopic): void {
    this.searchQuery = topic.title;
    this.router.navigate([topic.link]);
    this.searchSuggestions = []; // Clear suggestions after selection
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchSuggestions = [];
  }
  onSupportClick() {
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/support-page']); 
    }, 500); 
  }
}
