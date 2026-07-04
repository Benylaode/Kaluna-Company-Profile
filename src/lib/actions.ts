'use server'

import db from './db';
import nodemailer from 'nodemailer';

// Definisikan interface mandiri untuk menghindari error TypeScript
export interface WorkData {
  id: number;
  slug: string;
  client: string;
  title: string;
  desc: string;
  category: string;
  image_url: string;
  content_json?: string;
  created_at?: string;
}

import { TestimonialData } from '../components/Deliver';
import { ServiceData } from '../components/OurServices';

export interface TeamMember {
  id: number;
  full_name: string;
  position: string;
  image_url: string;
  linkedin_url: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export async function getWorks(): Promise<WorkData[]> {
  const stmt = db.prepare('SELECT * FROM works ORDER BY created_at DESC');
  return stmt.all() as WorkData[]; 
}

export async function getWorkBySlug(slug: string): Promise<WorkData | undefined> {
  const stmt = db.prepare('SELECT * FROM works WHERE slug = ?');
  return stmt.get(slug) as WorkData | undefined;
}

export async function getTestimonials(): Promise<TestimonialData[]> {
  const stmt = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC');
  return stmt.all() as TestimonialData[];
}

export async function getServices(): Promise<ServiceData[]> {
  const stmt = db.prepare('SELECT * FROM services ORDER BY created_at ASC');
  return stmt.all() as ServiceData[];
}

export async function getTeam(): Promise<TeamMember[]> {
  const stmt = db.prepare('SELECT * FROM team_members');
  return stmt.all() as TeamMember[];
}

export async function submitLead(formData: FormData) {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const inquiry = formData.get('inquiry') as string;
  const message = formData.get('message') as string;

  try {
    const stmt = db.prepare(`
      INSERT INTO leads (sender_name, company_name, sender_email, phone_number, service_interest, message) 
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    stmt.run(name, company, email, phone, inquiry, message);

    await transporter.sendMail({
      from: '"Kaluna Website" <corporate@kalunatechnology.com>',
      to: 'corporate@kalunatechnology.com',
      subject: `New Inquiry: ${inquiry} - ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return { success: true, message: "Pesan berhasil dikirim ke sistem dan email!" };
  } catch (error) {
    console.error("Gagal memproses lead:", error);
    return { success: false, message: "Terjadi kesalahan pada server." };
  }
}