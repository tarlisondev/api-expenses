import 'dotenv/config';
export default ({
    port: process.env.SERVER_PORT || 3000,
    secret: process.env.SECRET,
    google: {
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || undefined,
        key: process.env.GOOGLE_PRIVATE_KEY || undefined,
        sheetId: process.env.GOOGLE_SHEET_ID || undefined,
    }
})