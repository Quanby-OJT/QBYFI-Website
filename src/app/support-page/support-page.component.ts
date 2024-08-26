import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface HelpTopic {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface SetupStep {
  imageSrc: string;
  altText: string;
  description: string;
}

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrl: './support-page.component.css'
})
export class SupportPageComponent {
  topConversationTopics: string[] = [
    "What is QBYFI Internet Technology",
    "How do I pay my bill?",
    "What are your customer service hours?",
    "What plans to you offer?",
    "How can I upgrade my internet plan?",
    "Do you offer bundled services?",
  ];

  searchQuery: string = '';
  searchSuggestions: HelpTopic[] = [];

  constructor(private router: Router) {}

  onTopicClick(topic: string) {
    // Assuming you have routes configured for each topic
    const route = this.getRouteForTopic(topic);
    this.router.navigate([route]);
  }

  getRouteForTopic(topic: string): string {
    // Define your topic-to-route mapping here
    const routes = {
      'Topic 1': '/route-for-topic-1',
      'Topic 2': '/route-for-topic-2',
      'Topic 3': '/route-for-topic-3',
      'Topic 4': '/route-for-topic-4'
    };

    return routes[topic as keyof typeof routes] || '/default-route';
  }

  helpTopics: HelpTopic[] = [
    {
      imageSrc: 'assets/images/NI-SP.png',
      title: 'Network Infrastructure',
      description: 'ISP often face challenges in expanding and maintaining their network infrastructure to meet growing demand for bandwidth and reliability.',
      link: '/networkinfastructure'
    },
    {
      imageSrc: 'assets/images/DSP-SP.png',
      title: 'Data Security and Privacy',
      description: 'Ensuring the security and privacy of customer data is a critical concern for ISPs, especially with increasing cybersecurity threats.',
      link: '/datasecurityandprivacy'
    },
    {
      imageSrc: 'assets/images/TI-SP.png',
      title: 'Technological Innovation',
      description: 'Staying ahead in terms of technological advancements and innovations is key for ISPs to remain competitive in the market.',
      link: '/technologicalinnovation'
    },
    {
      imageSrc: 'assets/images/CS-SP.png',
      title: 'Customer Support',
      description: 'Providing effective and timely customer support is crucial for ISPs to maintain customer satisfaction and loyalty.',
      link: '/customersupport'
    },
    {
      imageSrc: 'assets/images/RC-SP.png',
      title: 'Regulatory Compliance',
      description: 'ISPs must navigate various regulatory requirements and compliance standards imposed by government agencies.',
      link: '/regulatorycompliance'
    },
    {
      imageSrc: 'assets/images/BA-SP.png',
      title: 'Broadband Access',
      description: 'Addressing disparities in broadband access and bridging the digital divide is a significant challenge for ISPs and policymakers alike.',
      link: '/broadbandaccess'
    }
  ];

  setupSteps: SetupStep[] = [
    {
      imageSrc: "assets/images/PIB-SP.png",
      altText: "Icon representing paying internet bills",
      description: "Pay Internet Bills",
    },
    {
      imageSrc: "assets/images/MA-SP.png",
      altText: "Icon representing managing account",
      description: "Manage Account",
    },
    {
      imageSrc: "assets/images/TOTR-SP.png",
      altText: "Icon representing turning on the router",
      description: "Turn on the Router",
    },
    {
      imageSrc: "assets/images/CTW-SP.png",
      altText: "Icon representing connecting to Wi-Fi",
      description: "Connect to Wi-fi",
    },
    {
      imageSrc: "assets/images/HC-SP.png",
      altText: "Icon representing a happy customer",
      description: "Happy Customer",
    },
  ];

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
}
