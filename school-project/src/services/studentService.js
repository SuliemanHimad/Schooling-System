import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8004/api/method';
// kani waa api ga aan aadayo base url kiisa 
// kan hadda tijaabo ahaan ayaan u sameeyay
const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': 'token c0ffbab7720767b:2e2eeafbb9f149c',
    'Content-Type': 'application/json'
  }
});
export const studentService = {
  getAllStudents() {
    return instance.get('/school.school.doctype.students.api.get_all_students');
  },

  getStudent(sn) {
    return instance.get(`/school.school.doctype.students.api.get_student?sn=${sn}`);
  },

  createStudent(student) {
    return instance.post('/school.school.doctype.students.api.create_student', student);
  },

  updateStudent(student) {
    return instance.put('/school.school.doctype.students.api.update_student', student);
  },

  deleteStudent(sn) {
    return instance.delete(`/school.school.doctype.students.api.delete_student?sn=${sn}`);
  }
};
