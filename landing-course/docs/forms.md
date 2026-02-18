# Contact form integration (Phase 7.2 – Dev setup)

This project uses **Formspree** as a simple form backend for the Contact section.[file:17][web:222]

## Current dev setup

- Form service: Formspree (free plan)
- Endpoint (dev only): `https://formspree.io/f/mreaejlq`
- Wired form: `app/components/ContactSection.tsx`

The form sends these fields:

- `name` – visitor’s name
- `phone` – visitor’s phone number
- `message` – brief description of their issue or question
- `_subject` – fixed subject line used in the email: “New enquiry from RS Puram dentist site”

## How it works

The `<form>` in `ContactSection` posts to the Formspree endpoint using `method="POST"`.
Formspree receives the submission and forwards it to the email configured in the Formspree dashboard.[web:222]

## Switching to a real clinic account later

1. The clinic creates their own Formspree account using their clinic email.
2. In Formspree, they create a new form and send you **only** the endpoint URL.
3. You update:

   - `action` in `ContactSection.tsx` to the new endpoint.
   - This file (`docs/forms.md`) with the new endpoint and any notes.

No passwords or private credentials are stored in the repo—only the public form endpoint URL.
