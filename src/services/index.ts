
import worksheet from "../utils/google.js"

const findDataSheetByName = async (sheetName: string, offset: number) => {
    await worksheet.loadInfo();
    const sheet = worksheet.sheetsByTitle[sheetName];

    if (!sheet)
        throw new Error('sheet not found');

    const rows = await sheet.getRows({ offset });
    return rows.map(row => row.toObject());
}

export default ({

    findExpenses: async () => {
        const expenses = await  findDataSheetByName('Despesas', 4);
        return expenses;
    }
});