<template>
  <div>
    <h2>All Students</h2>
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>SN</th>
          <th>Full Name</th>
          <th>Grade</th>
          <th>Subjects</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.name">
          <td>{{ student.name }}</td>
          <td>{{ student.sn }}</td>
          <td>{{ student.full_name }}</td>
          <td>{{ student.grade }}</td>
          <td>{{ student.subjects }}</td>
          <td>{{ student.address }}</td>
          <td>
            <button @click="deleteStudent(student.name)">Delete</button>
            <button class="btn">
              <router-link
                :to="{
                  name: 'UpdateStudent',
                  params: { studentId: student.name },
                }"
                >Edit</router-link
              >
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- link to CreateStudentPage and style -->
  </div>
  <div class="anchar"><a :href="'/create'">Add New Student</a></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8004/api/method/school.school.doctype.students.api.get_all_students",
          {
            headers: {
              Authorization: "token c0ffbab7720767b:2e2eeafbb9f149c",
            },
          }
        );
        console.log(response.data);
        this.students = response.data.message;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteStudent(studentId) {
      // confirm that the student
      const confirmation = window.confirm(
        `Are you sure you want to delete ${studentId}?`
      );
      if (!confirmation) return;

      // Delete the student from the API and refresh the list after deletion.
      // Replace "http://127.0.0.1:8004/api/method/school.school.doctype.students.api.delete_student" with the actual API endpoint.
      try {
        await axios.post(
          "http://127.0.0.1:8004/api/method/school.school.doctype.students.api.delete_student",
          { student_id: studentId },
          {
            headers: {
              Authorization: "token c0ffbab7720767b:2e2eeafbb9f149c",
            },
          }
        );
        this.fetchStudents();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.anchar {
  background-color: #488650;
}
a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 2px;
  border-radius: 20px;
  cursor: pointer;
}
div {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
}

button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn {
  padding: 5px 10px;
  background-color: #065f12;
  color: white;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  transition: background-color 0.3s ease;
  background-color: #138e23;
}
button:hover {
  background-color: #c82333;
}
</style>
