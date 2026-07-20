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
  images: string[]; 
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

// Inisialisasi credentials & transporter Nodemailer
const emailUser = process.env.EMAIL_USER || 'bayubulan659@gmail.com';
const emailPass = (process.env.EMAIL_PASS || 'qwertyuiopasdfgh').replace(/\s+/g, '');
const emailReceiver = process.env.EMAIL_RECEIVER || 'bayubulan659@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

function generateEmailHTML({
  name,
  company,
  email,
  phone,
  inquiry,
  message,
}: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiry?: string;
  message?: string;
}) {
  const dateStr = new Date().toLocaleString('id-ID', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
  });

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Lead - Kaluna Technology</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F6F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F4F6F9; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0E2A54; padding: 36px 32px; text-align: center; background-image: linear-gradient(135deg, #02184D 0%, #08297D 100%);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <span style="display: inline-block; font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.05em; text-transform: uppercase;">
                      KALUNA<span style="color: #299EED;">.</span>
                    </span>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500;">
                      New Lead Inquiry Notification
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600; color: #0E2A54;">
                Pesan Baru dari Form Kontak
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B; line-height: 1.5;">
                Berikut adalah rincian calon klien yang telah mengisi formulir pada website Kaluna Technology:
              </p>

              <!-- Lead Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F8FAFC; border-radius: 12px; border: 1px solid #E2E8F0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 35%; font-size: 13px; font-weight: 600; color: #64748B;">Nama Pengirim</td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600; color: #0E2A54;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600; color: #64748B;">Perusahaan</td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 14px; color: #1E293B;">${company || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600; color: #64748B;">Email</td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 14px; color: #299EED; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #299EED; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600; color: #64748B;">Nomor Telepon</td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-size: 14px; color: #1E293B;">${phone || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: #64748B;">Layanan / Kebutuhan</td>
                  <td style="padding: 16px 20px; font-size: 14px; font-weight: 600; color: #299EED;">
                    <span style="display: inline-block; background-color: #EAF3FF; color: #0E2A54; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; border: 1px solid #299EED;">
                      ${inquiry || 'General Inquiry'}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 13px; font-weight: 600; color: #64748B; margin-bottom: 8px;">
                  Pesan / Pertanyaan:
                </label>
                <div style="background-color: #F8FAFC; border-left: 4px solid #299EED; border-top: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; border-radius: 0 8px 8px 0; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
                  ${message || 'Tidak ada pesan tambahan.'}
                </div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding-top: 8px;">
                    <a href="mailto:${email}" style="display: inline-block; background-color: #0E2A54; color: #FFFFFF; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-size: 14px; font-weight: 600;">
                      Balas Pesan Klien &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 32px; border-top: 1px solid #E2E8F0; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #94A3B8;">
                Waktu Pengiriman: ${dateStr}
              </p>
              <p style="margin: 0; font-size: 12px; color: #CBD5E1;">
                &copy; ${new Date().getFullYear()} Kaluna Technology. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function getWorks(): Promise<WorkData[]> {
  const stmt = db.prepare('SELECT * FROM works ORDER BY created_at DESC');
  const rows = stmt.all() as any[]; 
  
  // Parsing string JSON dari SQLite kembali menjadi array untuk masing-masing work
  return rows.map(row => ({
    ...row,
    images: row.images ? JSON.parse(row.images) : [],
  })) as WorkData[];
}

export async function getWorkBySlug(slug: string): Promise<WorkData | undefined> {
  const stmt = db.prepare('SELECT * FROM works WHERE slug = ?');
  const row = stmt.get(slug) as any;
  
  if (!row) return undefined;

  // Parsing string JSON dari SQLite kembali menjadi array
  return {
    ...row,
    images: row.images ? JSON.parse(row.images) : [],
  } as WorkData;
}

export async function getTestimonials(): Promise<TestimonialData[]> {
  const stmt = db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC');
  return stmt.all() as TestimonialData[];
}

export async function getServices(): Promise<ServiceData[]> {
  const stmt = db.prepare('SELECT * FROM services ORDER BY created_at ASC');
  return stmt.all() as ServiceData[];
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  const stmt = db.prepare('SELECT * FROM services WHERE slug = ?');
  const row = stmt.get(slug) as any;
  if (!row) return undefined;
  return row as ServiceData;
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
    // 1. Simpan ke Database
    const stmt = db.prepare(`
      INSERT INTO leads (sender_name, company_name, sender_email, phone_number, service_interest, message) 
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    stmt.run(name, company, email, phone, inquiry, message);

    // 2. Kirim Email Notifikasi Berformat Premium
    await transporter.sendMail({
      from: `"Kaluna Website" <${emailUser}>`,
      to: emailReceiver,
      replyTo: email,
      subject: `New Lead Inquiry: ${inquiry || 'General Inquiry'} - ${name}`,
      html: generateEmailHTML({ name, company, email, phone, inquiry, message }),
    });

    return { success: true, message: "Pesan berhasil dikirim ke sistem dan email!" };
  } catch (error) {
    console.error("Gagal memproses lead:", error);
    return { success: false, message: "Terjadi kesalahan pada server saat mengirim pesan." };
  }
}