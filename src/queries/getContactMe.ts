import { ContactMe } from '../types';

const contact: ContactMe = {
  profilePicture: { url: '' },
  name: 'Aditya Bhardwaj',
  title: 'Backend Developer · Java, Python & AI-driven Backends',
  summary:
    'Backend developer with experience building secure REST APIs, integrating AI/LLM pipelines, and deploying scalable services. Currently a Software Development Intern at Sapien One AI.',
  companyUniversity: 'B.Tech CSE · Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  linkedinLink: 'https://www.linkedin.com/in/aditya-bhardwaj-9572a3260/',
  email: 'bhardwajaditya0203@gmail.com',
  phoneNumber: '+91 8707699407',
};

export async function getContactMe(): Promise<ContactMe> {
  return Promise.resolve(contact);
}
