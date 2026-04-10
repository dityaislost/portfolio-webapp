import { Project } from '../types';
import authScanImg from '../images/authscan.png';
import aiTripPlannerImg from '../images/ai trip planner.png';
import bookurshowImg from '../images/bookurshow.png';

const projects: Project[] = [
  {
    title: 'AI Trip Planner (Multi-Agent System)',
    description:
      'Multi-agent travel planner with Research, Optimization, and Itinerary agents, exposing REST APIs (/plan_trip, /chat) using FastAPI and deployed on Railway.',
    techUsed: 'Python, FastAPI, REST APIs, Groq, Hugging Face, Railway',
    image: {
      url: aiTripPlannerImg,
    },
  },
  {
    title: 'AuthScan – Certificate Authenticator for Academia',
    description:
      'AI + CV pipeline using OCR/MRZ, SHA-256, and polygon hashing to verify academic documents, integrating LLaMA-vision embeddings to improve small-text and MRZ/QR detection.',
    techUsed: 'Python, Computer Vision, OCR, SHA-256, LLaMA-vision',
    image: {
      url: authScanImg,
    },
  },
  {
    title: 'Bookurshow',
    description:
      'A movie and event booking platform similar to BookMyShow, featuring AI integrations and a robust Java backend for scalable booking management.',
    techUsed: 'Java, Spring Boot, React, Artificial Intelligence',
    image: {
      url: bookurshowImg,
    },
  },
];

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
