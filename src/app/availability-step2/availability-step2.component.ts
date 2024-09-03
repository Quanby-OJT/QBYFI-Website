import { Component } from '@angular/core';

interface StepItem {
  imageSrc: string;
  altText: string;
  title: string;
}

@Component({
  selector: 'app-availability-step2',
  templateUrl: './availability-step2.component.html',
  styleUrl: './availability-step2.component.css'
})

export class AvailabilityStep2Component {
  steps: StepItem[] = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0de9f2cd49a6b35866bea1d2568f6ffc2b860f00ac36b45188bdb4c026805a3?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
      altText: "Check Availability icon",
      title: "Check<br>Availability",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/764ac27d0dbddd9d17b9d87cd6159b8b2c65f64b10c124c71880bfd8e1c84c68?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
      altText: "Plan icon",
      title: "Plan",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f987c3d18019951ffef10ee879fb7f8757f7a8dee8b92e4f04b2fbd3ce540779?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
      altText: "Basic Details icon",
      title: "Basic Details",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74120c0aec0b43e48b7fc87378ee306faed6b067cbbd672ca3ea02e7d8e86f88?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
      altText: "Suggested Installation Date icon",
      title: "Suggested<br><span class='text-base'>Installation</span><br>Date",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2ec9d3ed5341698bbc1b6a7b232821c116f50a234e6bfbf57e4708ee2d99f36?placeholderIfAbsent=true&apiKey=812467e50c6047549228a02e8c7ab96e",
      altText: "Verify & Submit icon",
      title: "Verify &<br>Submit",
    },
  ];

  getStepClass(index: number): string {
      return "w-[75px] text-center";
}
}

