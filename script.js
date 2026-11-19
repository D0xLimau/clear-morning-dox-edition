/**
 * All icons underneath are from the Font Awesome Free 6.6.0 by @fontawesome
 * - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024
 * Fonticons, Inc.
 */
const linkProviders = [
    {
        id: 'link',
        name: 'Direct Link',
        match: (search) => {
            if (
                search.startsWith('//') ||
                (/[^\s][\.][^\s]/.test(search) &&
                    !search.includes(' '))
            ) {
                return search
            }
            return null
        },
        // link: (search) => `https:${search}`, 
        //link: (search) => {
          //  if (linkProviders[0].match(search).startsWith('//'))
            //    return `http:${search}`

            //if (/^[a-zA-Z][a-zA-Z0-9+\-.]*:/.test(search))
              //  return search 
                //return `http:${search}`

            //return `https:${search}`
        //},
        link: (search) => {
        const input = search.trim();

        // 1. Handle protocol-relative links (//google.com)
        // We force HTTPS here because it's 2026 and standard for security.
        if (input.startsWith('//')) {
            return `https:${input}`;
        }

        // 2. Check if a protocol already exists (e.g., mailto:, tel:, https://)
        const schemeMatch = input.match(/^([a-zA-Z][a-zA-Z0-9+\-.]*):/);
        if (schemeMatch) {
            const scheme = schemeMatch[1].toLowerCase();
            
            // Security: Block dangerous protocols
            const blocklist = ['javascript', 'data', 'vbscript'];
            if (blocklist.includes(scheme)) {
                return null; // Or return a safe fallback like 'about:blank'
            }
            
            return input; // It's a valid, safe protocol (like mailto: or https://)
        }

        // 3. Fallback for "naked" domains (google.com -> https://google.com)
        return `https://${input}`;
    },
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="icon"><path d="M0 256C0 209.4 12.5 165.6 34.3 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.2 98.5C101 38.5 174 0 256 0C350.8 0 433.5 51.5 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"/></svg>`
    },
    {
        id: 'github',
        name: 'GitHub',
        match: (search) => search.startsWith('gh '),
        link: (search) => `http://github.com/${search.slice(3)}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" class="icon"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`
    },
    {
        id: 'localhost',
        name: 'Localhost',
        match: (search) => search.startsWith(':'),
        link: (search) => `http://localhost${search}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="icon"><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>`
    },
    {
        id: 'youtube',
        name: 'YouTube',
        match: (search) => search.startsWith('yt '),
        link: (search) =>
            `https://www.youtube.com/results?search_query=${search.slice(3)}`,
        icon: () =>
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="icon"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>`
    },
    {
        id: 'gmail',
        name: 'Gmail',
        match: (search) => search.startsWith('gm'),
        link: (search) =>
            `https://mail.google.com/mail/u/0/#search/${search.slice(6)}`,
        icon: () =>
            // `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="none" viewBox="0 0 192 192"><path fill="url(#a)" d="M146 44h38v110c0 6.627-5.373 12-12 12h-20a6 6 0 0 1-6-6z"/><path fill="#fc413d" d="M46 44H8v110c0 6.627 5.373 12 12 12h20a6 6 0 0 0 6-6z"/><path fill="url(#b)" d="M39.226 30.456c-8.033-6.752-20.018-5.714-26.77 2.319-6.752 8.032-5.714 20.017 2.319 26.77l76.078 63.949a8 8 0 0 0 10.295 0l76.078-63.95c8.032-6.752 9.07-18.737 2.318-26.77-6.752-8.032-18.737-9.07-26.769-2.318L96 78.18z"/><defs><linearGradient id="a" x1="165" x2="165" y1="44" y2="166" gradientUnits="userSpaceOnUse"><stop stop-color="#60d673"/><stop offset=".17" stop-color="#42c868"/><stop offset=".39" stop-color="#0ebc5f"/><stop offset=".62" stop-color="#00a9bb"/><stop offset=".86" stop-color="#3c90ff"/><stop offset="1" stop-color="#3186ff"/></linearGradient><linearGradient id="b" x1="8" x2="184" y1="46.13" y2="46.13" gradientUnits="userSpaceOnUse"><stop offset=".08" stop-color="#ff63a0"/><stop offset=".3" stop-color="#fc413d"/><stop offset=".5" stop-color="#fc413d"/><stop offset=".65" stop-color="#fc413d"/><stop offset=".72" stop-color="#fc5c30"/><stop offset=".86" stop-color="#feb10c"/><stop offset=".91" stop-color="#fec700"/><stop offset=".96" stop-color="#ffdb0f"/></linearGradient></defs></svg>`
            `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path fill='#ffffff' d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`
    },
    // {
    //     id: 'pin',
    //     name: 'Pinned',
    //     match: (search) => !Number.isNaN(+search) && +search > 0,
    //     link: (search) => id('pin').children[+search - 1].href,
    //     icon: (search) => id('pin').children[+search - 1].innerHTML
    // },
    {
        id: 'pin-explicit',
        name: 'Pinned (explicit)',
        match: (search) => {
            if (!search.startsWith('p ')) return null;
            const rest = search.slice(2).trim();
            const n = +rest;
            if (Number.isNaN(n) || n <= 0) return null;
            const pins = id('pin');
            if (!pins || !pins.children || !pins.children[n - 1]) return null;
            return search;
        },
        link: (search) => {
            const idx = Math.max(0, +search.slice(2).trim() - 1);
            const el = id('pin');
            return el && el.children[idx] ? el.children[idx].href : null;
        },
        icon: (search) => {
            const idx = Math.max(0, +search.slice(2).trim() - 1);
            const el = id('pin');
            return el && el.children[idx] ? el.children[idx].innerHTML : '';
        }
    },
    {
        id: 'pin',
        name: 'Pinned (auto)',
        match: (search) => {
            const n = +search;
            if (Number.isNaN(n) || n <= 0) return null;
            const pins = id('pin');
            if (!pins || !pins.children || !pins.children[n - 1]) return null;
            return search;
        },
        link: (search) => {
            const idx = Math.max(0, +search - 1);
            const el = id('pin');
            return el && el.children[idx] ? el.children[idx].href : null;
        },
        icon: (search) => {
            const idx = Math.max(0, +search - 1);
            const el = id('pin');
            return el && el.children[idx] ? el.children[idx].innerHTML : '';
        }
    },
    {
        id: 'ask',
        name: 'Perplexity',
        match: (search) => search.startsWith('ask '),
        link: (search) =>
            `https://www.perplexity.ai/search/new?q=${search.slice(4)}`,
        icon: () =>
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.548 0.496494V7.17096H21.1517V16.6925H18.548V23.403L12.4659 17.3842V23.5035H11.5072V17.412L5.45256 23.4029V16.6925H2.84829V7.17096H5.45192V0.496579L11.5072 6.48812V0.757988H12.4659V6.51523L18.548 0.496494ZM10.8422 7.17096L6.41055 2.78597V7.17096H10.8422ZM5.45192 8.1187H3.80691V15.7448H5.45204L5.45261 13.4535L10.8423 8.11996H5.45192V8.1187ZM6.41118 13.8458V21.1135L11.5072 16.0711V8.80344L6.41118 13.8458ZM12.4799 8.79016V16.0572L17.5894 21.1134L17.5894 13.8458L12.4799 8.79016ZM18.548 15.7448V13.4535L13.1583 8.11996H18.548V8.1187H20.193V15.7448H18.548ZM17.5894 7.17096V2.78605L13.1583 7.17096H17.5894Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7392 0.0383058C18.9241 0.115455 19.0445 0.29616 19.0445 0.496494V6.67448H21.1517C21.4259 6.67448 21.6482 6.89677 21.6482 7.17096V16.6925C21.6482 16.9667 21.4259 17.189 21.1517 17.189H19.0445V23.403C19.0445 23.6033 18.9241 23.784 18.7392 23.8612C18.5544 23.9383 18.3412 23.8968 18.1988 23.7559L12.9624 18.574V23.5035C12.9624 23.7777 12.7401 24 12.4659 24H11.5072C11.233 24 11.0108 23.7777 11.0108 23.5035V18.6017L5.80176 23.7558C5.65936 23.8967 5.44623 23.9382 5.26135 23.8611C5.07647 23.7839 4.95608 23.6032 4.95608 23.4029V17.189H2.84829C2.57409 17.189 2.35181 16.9667 2.35181 16.6925V7.17096C2.35181 6.89677 2.57409 6.67448 2.84829 6.67448H4.95544V0.496579C4.95544 0.29625 5.07583 0.115548 5.26071 0.0383961C5.44559 -0.0387562 5.65872 0.00275895 5.80112 0.143661L11.0108 5.29843V0.757988C11.0108 0.48379 11.233 0.261508 11.5072 0.261508H12.4659C12.7401 0.261508 12.9624 0.48379 12.9624 0.757988V5.32545L18.1988 0.143594C18.3412 0.00268122 18.5544 -0.0388435 18.7392 0.0383058ZM17.4067 2.3244C17.5247 2.27772 17.6588 2.27704 17.7806 2.32786C17.907 2.38062 18.0033 2.48181 18.0516 2.60459V1.68627L17.4067 2.3244ZM18.0687 7.30086C18.0298 7.44488 17.9277 7.56294 17.794 7.62348H18.3435C18.2098 7.56294 18.1077 7.44488 18.0687 7.30086ZM18.5837 8.61518C18.572 8.61601 18.5601 8.61644 18.548 8.61644H14.3658L18.8973 13.1006C18.9915 13.1939 19.0445 13.3209 19.0445 13.4535V15.2483H19.6966V8.61518H18.5837ZM20.4004 7.66744C20.5163 7.72081 20.6082 7.81757 20.6552 7.93691V7.66744H20.4004ZM20.6552 15.9265C20.6082 16.0459 20.5163 16.1426 20.4004 16.196H20.6552V15.9265ZM18.3995 16.2186C18.256 16.1737 18.1405 16.0654 18.0859 15.9265L18.0859 16.5107C18.1406 16.3719 18.256 16.2636 18.3995 16.2186ZM18.0516 21.2949C18.0033 21.4177 17.907 21.5189 17.7806 21.5716C17.6588 21.6224 17.5247 21.6218 17.4067 21.5751L18.0516 22.2132V21.2949ZM12.6486 16.9226L12.1307 16.4101C12.0621 16.3423 12.0154 16.2565 11.995 16.1638C11.9764 16.2618 11.9284 16.3528 11.8564 16.424L11.3246 16.9503C11.4426 16.9037 11.5767 16.903 11.6985 16.9538C11.838 17.012 11.9408 17.1293 11.9828 17.2694C12.019 17.1171 12.126 16.9881 12.2747 16.9261C12.3965 16.8752 12.5306 16.8759 12.6486 16.9226ZM6.59386 21.5752C6.47584 21.6218 6.34178 21.6225 6.21998 21.5717C6.09355 21.5189 5.99727 21.4177 5.94904 21.295V22.2132L6.59386 21.5752ZM5.9147 16.5107V15.9252C5.86029 16.0646 5.74467 16.1734 5.60087 16.2186C5.74445 16.2634 5.86 16.3718 5.9147 16.5107ZM3.59959 16.196C3.48362 16.1426 3.39175 16.0459 3.34477 15.9265V16.196H3.59959ZM3.34477 7.93691C3.39175 7.81757 3.48362 7.72081 3.59959 7.66744H3.34477V7.93691ZM5.41621 8.61518C5.42801 8.61601 5.43991 8.61644 5.45192 8.61644H9.63476L5.10339 13.1006C5.00918 13.1938 4.95616 13.3208 4.95613 13.4533L4.95568 15.2483H4.30339V8.61518H5.41621ZM5.65648 7.62348C5.79019 7.56294 5.8923 7.44488 5.93123 7.30086C5.97017 7.44488 6.07228 7.56294 6.20599 7.62348H5.65648ZM10.9884 7.64545C11.1279 7.6884 11.2441 7.79162 11.3015 7.93117C11.3605 8.07458 11.3482 8.23449 11.2741 8.36509C11.4033 8.2964 11.5589 8.28702 11.6985 8.34525C11.8499 8.40844 11.958 8.5411 11.9922 8.69711C12.0231 8.53537 12.133 8.39695 12.2887 8.33197C12.4314 8.27243 12.5909 8.28357 12.7218 8.35654C12.6519 8.22754 12.6414 8.07146 12.6991 7.93117C12.7565 7.79164 12.8727 7.68842 13.0121 7.64546C12.8727 7.60251 12.7565 7.49929 12.6991 7.35976C12.6428 7.22278 12.6514 7.07076 12.7169 6.94359C12.5844 7.02125 12.4207 7.03436 12.2747 6.97342C12.1261 6.91143 12.0192 6.78259 11.9829 6.63042C11.9409 6.77068 11.8381 6.88803 11.6985 6.94631C11.559 7.00448 11.4036 6.99519 11.2745 6.92668C11.3482 7.05712 11.3602 7.21664 11.3014 7.35974C11.2441 7.49927 11.1278 7.60248 10.9884 7.64545ZM6.59322 2.3243L5.9484 1.68627V2.6045C5.99663 2.48173 6.09291 2.38054 6.21934 2.32778C6.34114 2.27695 6.4752 2.27763 6.59322 2.3243ZM18.049 13.6582C18.0499 13.6603 18.0507 13.6624 18.0516 13.6645V13.6607L18.049 13.6582ZM5.9515 13.6582L5.94903 13.6607L5.94903 13.6644C5.94984 13.6623 5.95067 13.6603 5.9515 13.6582ZM6.90703 3.97566V6.67448H9.63458L6.90703 3.97566ZM14.3658 6.67448H17.0929V3.97583L14.3658 6.67448ZM12.9764 9.97985V15.8501L17.0929 19.9236L17.0929 14.053L12.9764 9.97985ZM6.90766 14.053V19.9238L11.0108 15.8639V9.99313L6.90766 14.053Z"/></svg>`
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        match: (search) => search.startsWith('gpt '),
        link: (search) =>
            `https://chat.openai.com/?q=${search.slice(4)}`,
        icon: () =>
            `<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/></svg>`
    },
    {
        id: 'claude',
        name: 'Claude',
        match: (search) => search.startsWith('cl '),
        link: (search) =>
            `https://claude.ai/new?q=${search.slice(3)}`,
        icon: () =>
            `<svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.75923 15.9601L9.47889 13.3119L9.55826 13.0819L9.47889 12.954H9.2489L8.46013 12.9054L5.76341 12.8325L3.42463 12.7353L1.15874 12.6138L0.588624 12.4924L0.0541382 11.7878L0.109207 11.4364L0.588624 11.1141L1.27536 11.174L2.79297 11.2776L5.0702 11.4347L6.72224 11.5319L9.16954 11.7862H9.55826L9.61332 11.6291L9.48051 11.5319L9.37686 11.4347L7.02026 9.83776L4.46931 8.15009L3.1331 7.1783L2.41073 6.68592L2.04631 6.22432L1.8892 5.2169L2.54516 4.49453L3.42625 4.55446L3.65138 4.61439L4.54381 5.30112L6.45014 6.77662L8.93955 8.61007L9.30397 8.91294L9.44974 8.80929L9.46756 8.7364L9.30397 8.46268L7.94994 6.01539L6.50521 3.52598L5.86221 2.49426L5.69215 1.87556C5.63222 1.62127 5.58849 1.40748 5.58849 1.14671L6.33515 0.132813L6.74816 0L7.74425 0.132813L8.16374 0.497234L8.78244 1.91281L9.78501 4.14145L11.3399 7.17182L11.795 8.07072L12.0379 8.90323L12.1286 9.15751H12.2857V9.01175L12.4137 7.30463L12.6502 5.2088L12.8802 2.51208L12.9595 1.75246L13.3353 0.842219L14.0819 0.349845L14.665 0.628426L15.1444 1.31516L15.078 1.75894L14.793 3.61182L14.2342 6.51424L13.8698 8.45782H14.0819L14.3249 8.21487L15.308 6.90944L16.9601 4.84438L17.6889 4.02484L18.5392 3.11945L19.085 2.68862H20.1168L20.8764 3.81752L20.5363 4.98367L19.4738 6.33122L18.5927 7.47308L17.3293 9.17371L16.5406 10.5342L16.6135 10.6427L16.8013 10.6249L19.6552 10.0175L21.1971 9.73897L23.037 9.42313L23.8695 9.81185L23.9602 10.207L23.633 11.0153L21.6652 11.5011L19.3571 11.9628L15.9202 12.7758L15.8781 12.8066L15.9267 12.8665L17.4751 13.0123L18.1376 13.0479H19.7588L22.7779 13.273L23.5666 13.7946L24.0396 14.4327L23.9602 14.9186L22.7455 15.5373L21.1064 15.1486L17.2808 14.2384L15.9688 13.9112H15.7874V14.0197L16.8807 15.0887L18.8842 16.8978L21.3931 19.2301L21.521 19.8067L21.1987 20.2618L20.8586 20.2133L18.6542 18.5547L17.8039 17.8081L15.8781 16.1868H15.7502V16.3569L16.194 17.0063L18.5376 20.5291L18.6591 21.6094L18.489 21.9609L17.8816 22.173L17.2144 22.0516L15.8425 20.1258L14.4269 17.9571L13.2851 16.0135L13.1458 16.0929L12.472 23.3505L12.1562 23.7214L11.4273 24L10.82 23.5384L10.4977 22.7917L10.82 21.3162L11.2087 19.3905L11.5245 17.8599L11.8096 15.9584L11.9796 15.3268L11.9683 15.2847L11.829 15.3025L10.3956 17.2703L8.21556 20.2165L6.49063 22.0629L6.07762 22.2265L5.36174 21.8556L5.42814 21.1931L5.8282 20.6036L8.21556 17.5667L9.65544 15.6847L10.5851 14.5979L10.5786 14.4408H10.5236L4.18263 18.558L3.05373 18.7037L2.56784 18.2486L2.62776 17.502L2.85776 17.259L4.76409 15.9471L4.75761 15.9536L4.75923 15.9601Z"/></svg>`
    },
    {
        id: 'gemini',
        name: 'Gemini',
        match: (search) => search.startsWith('ge '),
        link: (search) =>
            `https://gemini.google.com/app`,
        icon: () =>
            `<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><mask id="maskme" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65"><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="#000"/><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#prefix__paint0_linear_2001_67)"/></mask><g mask="url(#maskme)"><g filter="url(#prefix__filter0_f_2001_67)"><path d="M-5.859 50.734c7.498 2.663 16.116-2.33 19.249-11.152 3.133-8.821-.406-18.131-7.904-20.794-7.498-2.663-16.116 2.33-19.25 11.151-3.132 8.822.407 18.132 7.905 20.795z" fill="c"/></g><g filter="url(#prefix__filter1_f_2001_67)"><path d="M27.433 21.649c10.3 0 18.651-8.535 18.651-19.062 0-10.528-8.35-19.062-18.651-19.062S8.78-7.94 8.78 2.587c0 10.527 8.35 19.062 18.652 19.062z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter2_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter3_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter4_f_2001_67)"><path d="M30.954 74.181c9.014-5.485 11.427-17.976 5.389-27.9-6.038-9.925-18.241-13.524-27.256-8.04-9.015 5.486-11.428 17.977-5.39 27.902 6.04 9.924 18.242 13.523 27.257 8.038z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter5_f_2001_67)"><path d="M67.391 42.993c10.132 0 18.346-7.91 18.346-17.666 0-9.757-8.214-17.667-18.346-17.667s-18.346 7.91-18.346 17.667c0 9.757 8.214 17.666 18.346 17.666z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter6_f_2001_67)"><path d="M-13.065 40.944c9.33 7.094 22.959 4.869 30.442-4.972 7.483-9.84 5.987-23.569-3.343-30.663C4.704-1.786-8.924.439-16.408 10.28c-7.483 9.84-5.986 23.57 3.343 30.664z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter7_f_2001_67)"><path d="M34.74 51.43c11.135 7.656 25.896 5.524 32.968-4.764 7.073-10.287 3.779-24.832-7.357-32.488C49.215 6.52 34.455 8.654 27.382 18.94c-7.072 10.288-3.779 24.833 7.357 32.49z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter8_f_2001_67)"><path d="M54.984-2.336c2.833 3.852-.808 11.34-8.131 16.727-7.324 5.387-15.557 6.631-18.39 2.78-2.833-3.853.807-11.342 8.13-16.728 7.324-5.387 15.558-6.631 18.39-2.78z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter9_f_2001_67)"><path d="M31.727 16.104C43.053 5.598 46.94-8.626 40.41-15.666c-6.53-7.04-21.006-4.232-32.332 6.274s-15.214 24.73-8.683 31.77c6.53 7.04 21.006 4.232 32.332-6.274z" fill="#FFFFFF"/></g><g filter="url(#prefix__filter10_f_2001_67)"><path d="M8.51 53.838c6.732 4.818 14.46 5.55 17.262 1.636 2.802-3.915-.384-10.994-7.116-15.812-6.731-4.818-14.46-5.55-17.261-1.636-2.802 3.915.383 10.994 7.115 15.812z" fill="#FFFFFF"/></g></g><defs><filter id="prefix__filter0_f_2001_67" x="-19.824" y="13.152" width="39.274" height="43.217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2.46" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter1_f_2001_67" x="-15.001" y="-40.257" width="84.868" height="85.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="11.891" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter2_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter3_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter4_f_2001_67" x="-19.845" y="15.459" width="79.731" height="81.505" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter5_f_2001_67" x="29.832" y="-11.552" width="75.117" height="73.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="9.606" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter6_f_2001_67" x="-38.583" y="-16.253" width="78.135" height="78.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="8.706" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter7_f_2001_67" x="8.107" y="-5.966" width="78.877" height="77.539" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.775" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter8_f_2001_67" x="13.587" y="-18.488" width="56.272" height="51.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="6.957" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter9_f_2001_67" x="-15.526" y="-31.297" width="70.856" height="69.306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="5.876" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter10_f_2001_67" x="-14.168" y="20.964" width="55.501" height="51.571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.273" result="effect1_foregroundBlur_2001_67"/></filter><linearGradient id="prefix__paint0_linear_2001_67" x1="18.447" y1="43.42" x2="52.153" y2="15.004" gradientUnits="userSpaceOnUse"><stop stop-color="#4893FC"/><stop offset=".27" stop-color="#4893FC"/><stop offset=".777" stop-color="#969DFF"/><stop offset="1" stop-color="#BD99FE"/></linearGradient></defs></svg>`
    }
]

const id = (id) => document.getElementById(id)

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden')
        localStorage.setItem('bg:time', id('bg').currentTime)
})

const detectSearchMode = (currentMode, search) => {
    if (currentMode != null) {
        const provider = getModeById(currentMode)

        if (provider && !provider.match(search)) return null
    }

    const newProvider = linkProviders.find((p) => p.match(search))
    return newProvider ? newProvider.id : null
}

const getModeById = (id) => linkProviders.find((p) => p.id === id)

// const composeLink = (search) => {
//     const mode = detectSearchMode(null, search)
//     if (mode != null) {
//         const provider = getModeById(mode)
//         return provider.link(search)
//     }

//     return `https://www.google.com/search?q=${search}`
// }

// Defensive composeLink: try provider.link and fall back to Google search if anything goes wrong
const composeLink = (search) => {
    const mode = detectSearchMode(null, search);
     try {
        if (mode != null) {
            const provider = getModeById(mode);
            if (provider && typeof provider.link === 'function') {
                const candidate = provider.link(search);
            // Treat nullish or empty strings as "no-op" -> fallback
            if (candidate) return candidate;
            }
        }
    } catch (err) {
// Don't let provider errors stop navigation; fall back below
console.error('provider.link failed:', err);
    }
// Always URL-encode search terms for safety
return `https://www.google.com/search?q=${encodeURIComponent(search)}`;
};

document.addEventListener(
    'DOMContentLoaded',
    async () => {
        const searchBox = id('search-value')
        const searchIcon = id('search-icon')
        const modeIcon = id('search-icon-override')
        const displayedHour = id('hour')
        const displayedMinute = id('minute')

        let mode = null

        window.focus()
        searchBox.focus()

        // Continue video from last time
        const timestamp = localStorage.getItem('bg:time')
        if (timestamp) {
            const bg = id('bg')
            bg.currentTime = timestamp
        }

        // Clock
        let clearSecondClock = false
        let secondClock

        const startClock = (initial = false) => {
            const time = new Date()

            const hour = time.getHours()
            const minute = time.getMinutes()

            if (displayedMinute.textContent == minute) return

            displayedMinute.textContent =
                minute <= 9 ? `0${minute}` : minute

            if (!clearSecondClock && !initial) {
                clearSecondClock = true
                clearInterval(secondClock)
                setInterval(startClock, 60000)
            }

            if (displayedHour.textContent != hour)
                displayedHour.textContent = hour
        }

        startClock(true)

        secondClock = setInterval(
            startClock,
            (60 - new Date().getSeconds()) * 1000
        )

        id('search').addEventListener('submit', (event) => {
            event.preventDefault()

            window.location.assign(composeLink(searchBox.value))
        })

        const suggestionTemplate = id('t-suggest')
        const suggestionBox = id('suggestion')

        const isMac =
            navigator.platform.toUpperCase().indexOf('MAC') >= 0

        if (!isMac) suggestionBox.classList.add('-custom-scrollbar')

        const updateSuggestion = (suggestions = []) => {
            suggestionBox.style.display = suggestions.length
                ? 'flex'
                : 'none'

            while (suggestionBox.firstChild)
                suggestionBox.removeChild(suggestionBox.firstChild)

            suggestions.map((suggest) => {
                const template =
                    suggestionTemplate.content.cloneNode(true)

                const suggestion = template.children[0]
                suggestion.textContent = suggest.label
                suggestion.href = suggest.href

                suggestion.addEventListener('keydown', (event) => {
                    const current = event.currentTarget

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowLeft'
                    ) {
                        searchBox.focus()
                        requestAnimationFrame(() => {
                            searchBox.setSelectionRange(
                                searchBox.value.length,
                                searchBox.value.length
                            )
                        })
                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowDown'
                    ) {
                        current.nextElementSibling.focus()
                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'ArrowUp'
                    ) {
                        if (current.previousElementSibling)
                            current.previousElementSibling.focus()
                        else {
                            searchBox.focus()
                            requestAnimationFrame(() => {
                                searchBox.setSelectionRange(
                                    searchBox.value.length,
                                    searchBox.value.length
                                )
                            })
                        }

                        return
                    }

                    if (
                        current === document.activeElement &&
                        event.code === 'Tab'
                    ) {
                        searchBox.value = current.textContent
                        requestAnimationFrame(() => {
                            searchBox.focus()
                            fetchSuggestion()
                        })
                        return
                    }
                })

                suggestionBox.appendChild(template)

                suggestionBox.scrollTo(0, 0)
            })
        }

        //let abortController = new AbortController()

        //const fetchSuggestion = () => {
            //abortController.abort()
            //abortController = new AbortController()

            // Remove Japanese character joiner
            //let value = searchBox.value.replace(/\\\b/g, '')

           // if (!Number.isNaN(+value)) {
                //const index = +value
                //const pin = id('pin').children[index - 1]

                //if (pin) {
                    //let label = pin.href.split('://')[1]
                    //if (label.endsWith('/'))
                      //  label = label.slice(0, -1)

                    //return updateSuggestion([
                  //      { label, href: pin.href }
                //    ])
              //  }
            //}


            // --- REPLACEMENT CODE START ---
        //gemini code?
        // Track the timestamp of the last request to handle "race conditions"
        // (preventing old results from showing up after new ones)
        let lastRequestTime = 0;

        const fetchSuggestion = () => {
            const searchBox = id('search-value');
            let value = searchBox.value;

            // Remove Japanese character joiner (from original code)
            value = value.replace(/\\\b/g, '');

            // 1. Handle "Pinned" shortcut (Numbers)
            if (!Number.isNaN(+value) && value.trim() !== '') {
                const index = +value;
                const pin = id('pin').children[index - 1];

                if (pin) {
                    let label = pin.href.split('://')[1];
                    if (label.endsWith('/')) label = label.slice(0, -1);
                    return updateSuggestion([{ label, href: pin.href }]);
                }
            }

            // 2. Clear suggestions if empty
            if (!value) return updateSuggestion([]);

            // 3. Extract Prefixes (gh, yt, etc.)
            let prefix = '';
            if (
                value.startsWith('gh ') ||
                value.startsWith('yt ') ||
                value.startsWith('cl ')
            ) {
                prefix = value.slice(0, 2) + ' ';
                value = value.slice(3);
            } else if (
                value.startsWith('gpt ') ||
                value.startsWith('ask ')
            ) {
                prefix = value.slice(0, 3) + ' ';
                value = value.slice(4);
            }

            // If value is empty after stripping prefix, hide suggestions
            if (!value) return updateSuggestion([]);

            // 4. JSONP Implementation for Google Autocomplete
            const currentTime = Date.now();
            lastRequestTime = currentTime;

            // Create a unique callback name
            const callbackName = 'google_suggest_' + currentTime;
            
            // Define the global callback function
            window[callbackName] = (data) => {
                // Cleanup: Delete function and remove script tag
                delete window[callbackName];
                const scriptTag = document.getElementById(callbackName);
                if (scriptTag) scriptTag.remove();

                // If a newer request has started since this one, ignore these results
                if (lastRequestTime !== currentTime) return;

                // Google returns: [query, [suggestions...]]
                const suggestions = data[1] || [];

                updateSuggestion(
                    suggestions.map((suggestion) => ({
                        label: suggestion,
                        href: composeLink(prefix + suggestion)
                    }))
                );
            };

            // Create and inject the script tag
            const script = document.createElement('script');
            script.id = callbackName;
            script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(value)}&callback=${callbackName}`;
            document.body.appendChild(script);
        };

        // --- REPLACEMENT CODE END ---

            //if (!value) return updateSuggestion([])

            //let prefix = ''
            //if (
                //value.startsWith('gh ') ||
                //value.startsWith('yt ') ||
              //  value.startsWith('cl ')
            //) {
                //prefix = value.slice(0, 2) + ' '
                //value = value.slice(3)
            //} else {
                //if (
                    //value.startsWith('gpt ') ||
                  //  value.startsWith('ask ')
                //) {
                  //  prefix = value.slice(0, 3) + ' '
                //    value = value.slice(4)
              //  }
            //}

            //fetch(`https://search.saltyaom.com/hint/${value}`, {
              //  signal: abortController.signal
            //})
                //.then((res) => res.json())
                //.catch()
                //.then(([_, ...suggestions] = []) => {
                    //if (!suggestions && !value) updateSuggestion([])

                  //  updateSuggestion(
                    //    suggestions.map((suggestion) => ({
                      //      label: suggestion,
                        //    href: composeLink(prefix + suggestion)
                    //    }))
                //    )
              //  })
        //}

        searchBox.addEventListener('input', () => {
            const newMode = detectSearchMode(mode, searchBox.value)
            if (newMode != null) {
                mode = newMode
                modeIcon.innerHTML = linkProviders
                    .find((p) => p.id === mode)
                    ?.icon(searchBox.value)

                searchIcon.classList.add('fade-out-up')
                modeIcon.classList.remove('fade-out-down')
            } else {
                mode = null
                modeIcon.innerHTML = ''

                searchIcon.classList.remove('fade-out-up')
                modeIcon.classList.add('fade-out-down')
            }
        })

        searchBox.addEventListener('input', fetchSuggestion, {
            passive: true
        })

        searchBox.addEventListener('keydown', (event) => {
            if (
                searchBox !== document.activeElement ||
                event.code !== 'ArrowDown'
            )
                return

            if (suggestionBox.firstElementChild)
                requestAnimationFrame(() => {
                    suggestionBox.firstElementChild.focus()
                })
        })

        displayWeather(true)

        // const bg = id('bg')
        // window.addEventListener('focus', () => {
        //     bg.play()
        // })

        // window.addEventListener('blur', () => {
        //     bg.pause()
        // })
    },
    {
        once: true
    }
)

let isFetching = false

const getWeatherData = async (initial = false) => {
    const lastSaved = localStorage.getItem('forecast-until')
    if (
        lastSaved &&
        localStorage.getItem('forecast-data') &&
        Date.now() < new Date(lastSaved).getTime()
    )
        return JSON.parse(localStorage.getItem('forecast-data'))

    if (initial) throw new Error('No cached data')

    let resolve, reject
    const geolocationPromise = new Promise((_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
    })

    navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve(coords),
        (error) => {
            console.warn(error)

            const href = location.href
            const query = new URL(href).searchParams
            const latlon = query.get('latlon')
            if (latlon) {
                const [latitude, longitude] = latlon
                    .split(',')
                    .map(Number)

                if (
                    Number.isNaN(latitude) ||
                    Number.isNaN(longitude)
                )
                    return resolve(new Error('Invalid location'))

                return resolve({ latitude, longitude })
            }

            const latLon = prompt('Latitude,Longtitude')
            if (!latLon) return resolve(new Error('No location'))

            const [latitude, longitude] = latLon
                .split(',')
                .map(Number)

            if (Number.isNaN(latitude) || Number.isNaN(longitude))
                return resolve(new Error('Invalid location'))

            resolve({ latitude, longitude })
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0
        }
    )

    const geolocation = await geolocationPromise
    if (!geolocation || geolocation instanceof Error) return

    const { latitude, longitude } = geolocation

    if (isFetching) return
    isFetching = true

    const data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,uv_index,cloud_cover,precipitation_probability&timezone=auto&forecast_days=14`
    ).then((response) => response.json())

    isFetching = false

    localStorage.setItem('forecast-until', data.hourly.time.at(-1))

    localStorage.setItem('forecast-data', JSON.stringify(data))

    return data
}

const icon = (name) => id(`icon-${name}`)

const displayWeather = async (initial = false) => {
    const {
        latitude,
        longitude,
        elevation,
        hourly: {
            time: times,
            temperature_2m: temperatures,
            rain: rains,
            uv_index: uvIndices,
            cloud_cover: cloudCovers,
            precipitation_probability: predictions
        }
    } = await getWeatherData(initial)

    const startAt = new Date(times[0]).getTime()
    const secondAt = new Date(times[1]).getTime()
    const interval = secondAt - startAt

    const hour = new Date().getHours()
    const currentTime = new Date().getTime()
    const index = Math.floor((currentTime - startAt) / interval)

    const temperature = temperatures[index]
    const prediction = predictions[index]
    const uvIndex = uvIndices[index]
    const cloudCover = cloudCovers[index]
    const isNight = hour < 6 || hour > 18

    let iconName = ''

    if (prediction > 70) iconName = 'rain'
    else if (prediction > 40) iconName = 'drizzle'
    else if (cloudCover > 50) iconName = 'cloud'
    else if (uvIndex >= 6) iconName = 'sun'
    else if (isNight) iconName = 'moon'
    else iconName = 'sun'

    const icon = id('weather-icon')
    while (icon.firstChild) icon.removeChild(icon.firstChild)

    icon.appendChild(id(`icon-${iconName}`).content.cloneNode(true))

    id('temperature').textContent = ~~temperature
    id('rain').textContent = ~~prediction
    id('uv-index').textContent = ~~uvIndex
}

let clearWeatherClock = false
let weatherClock

const startWeatherInterval = (initial = false) => {
    if (!clearWeatherClock && !initial) {
        clearInterval(weatherClock)
        setInterval(displayWeather, 60 * 60 * 1000)
    } else {
        weatherClock = setInterval(
            startWeatherInterval,
            (60 - new Date().getMinutes()) * 60 * 1000 +
                (60 - new Date().getSeconds()) * 1000
        )
    }

    displayWeather()
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Select Elements
    const container = document.querySelector('.glass-select-container');
    const trigger = document.getElementById('dropdownTrigger');
    const displayValue = document.getElementById('selectedValue');
    const options = document.querySelectorAll('.glass-option');
    const bgVideo = document.getElementById('bg');

    // --- LOCAL STORAGE LOGIC: LOAD SAVED THEME ---
    // Check if the user has a saved preference
    const savedVideo = localStorage.getItem('site_theme_video');
    const savedText = localStorage.getItem('site_theme_text');

    if (savedVideo && savedText) {
        // A. Apply the saved text to the dropdown button
        displayValue.textContent = savedText;

        // B. Set the saved video immediately
        bgVideo.src = savedVideo;

        // C. Highlight the correct option in the list
        options.forEach(opt => {
            if (opt.getAttribute('data-video') === savedVideo) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
    }

    // 2. Toggle Dropdown Open/Close
    trigger.addEventListener('click', (e) => {
        container.classList.toggle('open');
        e.stopPropagation();
    });

    // 3. Handle Option Click
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Get data from clicked option
            const textContent = this.textContent.trim();
            const videoPath = this.getAttribute('data-video');

            // Update UI Text
            displayValue.textContent = textContent;

            // Visual Selection: Remove 'selected' from all, add to clicked
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');

            // --- LOCAL STORAGE LOGIC: SAVE SELECTION ---
            // Save the path and the text so we can load it next time
            localStorage.setItem('site_theme_video', videoPath);
            localStorage.setItem('site_theme_text', textContent);
            // -------------------------------------------

            // Change Video Logic
            if (videoPath) {
                // Fade out
                bgVideo.style.opacity = '0';

                setTimeout(() => {
                    bgVideo.src = videoPath;
                    bgVideo.load();

                    bgVideo.onloadeddata = () => {
                        bgVideo.play();
                        bgVideo.style.opacity = '1';
                    };
                }, 300);
            }

            // Close Dropdown
            container.classList.remove('open');
        });
    });

    // 4. Close Dropdown if clicking outside
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            container.classList.remove('open');
        }
    });
});
