# Taha Abdelhady — Portfolio & Interactive CV

موقع شخصي وسيرة ذاتية تفاعلية لطه عبدالهادي محمد: موديل 3D، وصفحات للخبرة والمهارات والمشاريع والخدمات، وسيرة ذاتية PDF بالعربي والإنجليزي، وفورم تواصل بيوصل الرسايل للوحة التحكم، ولوحة تحكم بكلمة سر.

A bilingual (Arabic / English) portfolio with a 3D character, project gallery, downloadable CV, a working contact form and a password-protected admin dashboard. Built with Next.js 14 (App Router) and TypeScript, deployed on Vercel.

---

## النشر على Vercel (خطوة بخطوة)

1. ادخل [vercel.com](https://vercel.com) بحساب GitHub بتاعك.
2. **Add New → Project**، واختار الريبو `taha-portfolio`، ودوس **Deploy**. الإعدادات الافتراضية مظبوطة.
3. من صفحة المشروع: **Storage → Create → Blob**، واربطه بالمشروع. ده المكان اللي بيتحفظ فيه المحتوى والصور والرسايل، والمتغير `BLOB_READ_WRITE_TOKEN` بيتضاف لوحده.
4. من **Settings → Environment Variables** ضيف:
   | المتغير | القيمة |
   |---|---|
   | `ADMIN_PASSWORD` | كلمة سر قوية للوحة التحكم |
   | `SESSION_SECRET` | نص عشوائي طويل (32 حرف أو أكتر) |
   | `NEXT_PUBLIC_SITE_URL` | رابط موقعك، مثلاً `https://taha.vercel.app` |
5. **Deployments → Redeploy** علشان المتغيرات تشتغل.
6. افتح `/admin` على موقعك وادخل بكلمة السر.

### دومين خاص (اختياري)
من **Settings → Domains** ضيف الدومين، وغيّر الـ DNS عند الشركة اللي اشتريته منها حسب التعليمات اللي Vercel بتظهرها. بعدها حدّث `NEXT_PUBLIC_SITE_URL`.

### إشعار بالإيميل لكل رسالة (اختياري)
اعمل حساب على [resend.com](https://resend.com) وضيف:
`RESEND_API_KEY`، و`CONTACT_TO_EMAIL` (الإيميل اللي توصله الرسايل). من غير الإعداد ده، الرسايل بتفضل توصل للوحة التحكم عادي.

---

## Deploying (English)

1. Import the repository in Vercel (**Add New → Project**). Defaults are correct.
2. **Storage → Create → Blob** and connect it to the project (adds `BLOB_READ_WRITE_TOKEN`).
3. Add environment variables: `ADMIN_PASSWORD`, `SESSION_SECRET` (32+ random characters), `NEXT_PUBLIC_SITE_URL`.
4. Redeploy, then open `/admin`.
5. Optional: `RESEND_API_KEY` + `CONTACT_TO_EMAIL` for e-mail notifications; a custom domain under **Settings → Domains**.

## Local development

```bash
npm install
cp .env.example .env.local   # set ADMIN_PASSWORD and SESSION_SECRET
npm run dev
```

Without a Blob token, content, uploads and messages are stored in `./.data` (ignored by git).

## How it's built

| Path | Purpose |
|---|---|
| `app/page.tsx` | Public site. Renders SEO metadata, JSON-LD and the content, then loads the client app. |
| `app/admin/page.tsx` | Login form, or the same app in dashboard mode for the owner. |
| `app/api/content` | `GET` site content · `PUT` save (owner only). |
| `app/api/upload` | Image / PDF uploads to Vercel Blob (owner only, 8 MB max). |
| `app/api/contact` | Contact form: validation, honeypot, rate limit, storage, optional e-mail. |
| `app/api/messages` | Inbox for the dashboard (owner only). |
| `app/api/login`, `logout` | Password login → signed, httpOnly, SameSite=Strict session cookie (role `owner`). |
| `lib/store.ts` | Storage: Vercel Blob in production, `./.data` locally. |
| `lib/default-content.json` | Starting content, used until the first save from the dashboard. |
| `public/app.js`, `public/app.css` | Client app: views, routing and page transitions, 3D scene (three.js), dashboard editors. |
| `public/model/` | The 3D character (glTF + textures). |
| `public/cv/` | Arabic and English A4 PDFs. Replace them from **Dashboard → CV files**. |

### Notes
- Skill levels and project statuses start empty on purpose. Set them in the dashboard; nothing is shown until you do.
- Contact messages are stored in Vercel Blob under random, unlisted names and are only listed through the authenticated API.
- Rate limiting is per server instance. It slows spam and password guessing; it is not a firewall.
