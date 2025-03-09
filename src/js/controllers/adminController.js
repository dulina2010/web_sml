import { Admin } from '../models/admin.js';
import { db } from '../db/indexedDB.js';

export const addAdmin = async (adminData) => {
    const admin = new Admin(adminData.id, adminData.name, adminData.email);
    await db.addAdmin(admin);
};

export const removeAdmin = async (adminId) => {
    await db.deleteAdmin(adminId);
};

export const generateReport = async () => {
    const reportData = await db.getReportData();
    // Logic to format and return the report
    return reportData;
};

export const listAdmins = async () => {
    const admins = await db.getAllAdmins();
    return admins
};