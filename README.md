# Pupsart

Sito Pupsart dedicato a ritratti personalizzati di cani, arte e design.

## Avvio locale

Richiede Node.js >=22.13 e pnpm 11.25.0.

```sh
npx --yes pnpm@11.25.0 install --frozen-lockfile
npm run dev -- --hostname 127.0.0.1
```

Anteprima: http://127.0.0.1:5173.

## Configurazione SEO

Il dominio ufficiale è `https://pupsart.com`, configurato in `lib/seo.ts` per canonical, sitemap, robots e immagini social.
Se necessario, `SITE_URL` permette di sovrascrivere l’origine tramite un file `.env` o l’ambiente di esecuzione prima della build. Usare un URL completo con schema HTTPS, senza percorsi.
Le pagine informative ancora provvisorie, account e carrello hanno `noindex`; rimuoverlo quando saranno complete.

## Comandi

- `npm run build`: genera la build in `dist/`.
- `npm start`: serve la build localmente.
- `npm run lint`: controlla il codice.

Le pagine sono in `app/`, i componenti in `components/` e le immagini in `public/images/`.
Il runtime usa Vinext e Vite, con un Worker per il server. Eventuali servizi database richiedono la configurazione del binding `DB`.
