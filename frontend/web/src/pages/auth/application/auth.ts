import axios from "axios";
import { stat } from "fs";
import { toast } from "react-toastify";
// import appState from '../../../data/AppState';

/**
 * Login using phone and password.
 * @param {string} phone
 * @param {string} password
 * @returns {Promise<Object>} A Promise that resolves with the user account data.
 */
export default async function login(phone: string, password: string) {
  return {statusCode: 200, message: "Login successful"};

}
