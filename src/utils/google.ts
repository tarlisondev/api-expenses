import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import config from '../config/index.js';

const { email, key, sheetId } = config.google

const serviceAccountAuth = new JWT({
    email: email as string,
    key: key as string,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const worksheet = new GoogleSpreadsheet(sheetId as string, serviceAccountAuth);

export default worksheet;;
